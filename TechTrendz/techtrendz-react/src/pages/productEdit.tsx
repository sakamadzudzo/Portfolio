import { ChangeEvent, useCallback, useEffect, useState } from "react"
import Form from "../components/Form"
import FormBody from "../components/FormBody"
import FormFooter from "../components/FormFooter"
import FormHeader from "../components/FormHeader"
import FormInput from "../components/FormInput"
import { useSelector } from "react-redux"
import { AuthState } from "../components/utils/authSlice"
import { getProductById, removeMediaFiles, saveProduct } from "../components/service/productService"
import { useNavigate, useOutletContext, useParams } from "react-router-dom"
import { OverlayContextType } from "../components/Layout"
import { Brand, MyFile, Product, ProductType, SelectOption, Tag } from "../types/types"
import { getBrandAll } from "../components/service/brandService"
import FormSelect from "../components/FormSelect"
import { getProductTypeAll } from "../components/service/productTypeService"
import { getTagAll } from "../components/service/tagService"
import FormMultiSelect from "../components/FormMultiSelect"
import FilePicker, { FilePickerAcceptTypes } from "../components/FilePicker"
import { combineFileLists, removeFileFromFilelist } from "../components/utils/misc"
import { getFileLinkFromMediaId } from "../components/service/fileService"
import { MediaPreview } from "../components/MediaPreview"
import { useDialog } from "../components/DialogContext"
import { toast } from "react-toastify"

export const ProductEdit = () => {
    const token = useSelector((state: AuthState) => state.auth ? state.auth.token : "")
    const [disableSave, setDisableSave] = useState(false)
    const [product, setProduct] = useState<Product>({} as Product)
    const [brands, setBrands] = useState<Brand[]>([])
    const [productTypes, setProductTypes] = useState<ProductType[]>([])
    const [tags, setTags] = useState<Tag[]>([])
    const { id } = useParams()
    const navigate = useNavigate()
    const [header, setHeader] = useState("New Product")
    const { setLoading, setEmpty } = useOutletContext<OverlayContextType>();
    const [files, setFiles] = useState<FileList>()
    const [mediaFiles, setMediaFiles] = useState<MyFile[]>([] as MyFile[])
    const { openDialog } = useDialog();


    const setProductChanges = (e: any) => {
        if (e.value) {
            if (e.value instanceof Array) {
                const { name, value } = e as { name: string, value: SelectOption[] }
                setProduct((prevState: any) => ({
                    ...prevState,
                    [name]: value.map((val) => { return { id: val.value, name: val.label, description: val.description } })
                }));
            } else {
                const { name, value } = e as { name: string, value: SelectOption }
                setProduct((prevState: any) => ({
                    ...prevState,
                    [name]: { id: value.value, name: value.label, description: value.description }
                }));
            }
        }
        else {
            const { name, value } = e.target as unknown as { name: string, value: string | SelectOption }
            setProduct((prevState: any) => ({
                ...prevState,
                [name]: value
            }));
        }
    }

    const getPictureLinks = useCallback(async () => {
        if (product && product.pictures) {
            let picLinks: MyFile[] = [] as MyFile[]
            product.pictures.forEach(async (pic) => {
                picLinks.push({ id: pic.id, token: token!, type: pic.fileType, url: getFileLinkFromMediaId(pic.id) })
            })
            setMediaFiles(picLinks)
        }
    }, [product, token])

    const chooseFiles = (newFiles: FileList | null | ChangeEvent<HTMLInputElement>) => {
        setFiles(newFiles instanceof FileList ? files ? combineFileLists(files, newFiles) : newFiles : files)
    }

    const removeFile = (index: number) => {
        setFiles(removeFileFromFilelist(index, files))
    }

    const brandsToOptions = (): SelectOption[] => {
        return brands
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item) => { return { value: item.id, label: item.name, description: item.description } })
    }

    const typesToOptions = (): SelectOption[] => {
        return productTypes
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item) => { return { value: item.id, label: item.name, description: item.description } })
    }

    const tagsToOptions = () => {
        return tags
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item) => { return { value: item.id, label: item.name, description: item.description } })
    }

    const getProduct = useCallback(async () => {
        setLoading(true)
        let result = await getProductById(token!, id ? String(id) : "0")
        if (result) {
            setProduct(result)
        }
        setEmpty(!result)
        setLoading(false)
    }, [setLoading, token, id, setEmpty])

    const getBrands = useCallback(async () => {
        setLoading(true)
        let result = await getBrandAll(token!)
        if (result) {
            setBrands(result)
        }
        setLoading(false)
    }, [setLoading, token])

    const getProductTypes = useCallback(async () => {
        setLoading(true)
        let result = await getProductTypeAll(token!)
        if (result) {
            setProductTypes(result)
        }
        setLoading(false)
    }, [setLoading, token])

    const getTags = useCallback(async () => {
        setLoading(true)
        let result = await getTagAll(token!)
        if (result) {
            setTags(result)
        }
        setLoading(false)
    }, [setLoading, token])

    const save = async () => {
        setLoading(true)
        let dto: Product = product.productItems ? product : { ...product, productItems: [] }
        let result = await saveProduct(token!, dto!, files!)
        if (result) {
            setFiles(new DataTransfer().files)
            if (id) getProduct()
            navigate("/productedit/" + result.id)
        }
        setLoading(false)
    }

    const removeSavedFile = async (index: number) => {
        const result = await openDialog({
            title: "Remove media from product?",
            detail: "This action cannot be undone",
            yesText: "Remove",
            noText: "Cancel",
        });

        if (result) {
            setLoading(true)
            let mediaFile = product.pictures[index]
            if (await removeMediaFiles(token!, product.id, mediaFile.id)) {
                toast.success("File removed")
                await getProduct()
            } else {
                toast.error("Encountered an error. Check logs")
            }
            setLoading(false)
        } else {
            // toast.warning("User canceled action");
        }
    }

    useEffect(() => {
        if (product.name && product.description && product?.brand?.name && product?.productType?.name) {
            setDisableSave(false)
        } else {
            setDisableSave(true)
        }
    }, [product])

    useEffect(() => {
        getPictureLinks()
    }, [getPictureLinks])

    useEffect(() => {
        if (!id || id === "0") {
            document.title = 'TechBrandz - New Product';
            setHeader("New Product")
            setProduct({} as Product)

        } else {
            document.title = 'TechBrandz - Edit Product';
            getProduct()
            setHeader("Edit Product")
        }
    }, [id, getProduct]);

    useEffect(() => {
        getBrands()
        getProductTypes()
        getTags()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])

    return (
        <div className="wrapper">
            <Form className="h-full w-full md:w-96 landscape:w-96">
                <FormHeader className="font-normal flex justify-center">
                    <>{header}</>
                </FormHeader>
                <FormBody className=" flex flex-col gap-5 pt-5">
                    <FormInput id="name" name="name" className="w-full" type="text" label="Name" onChange={setProductChanges} value={product?.name!} autoFocus={true} placeholder="Name..." returnEvent={true} key={`name`} />
                    <FormInput id="description" name="description" className="w-full" type="text" label="Description" onChange={setProductChanges} value={product?.description!} placeholder="Description..." returnEvent={true} key={`description`} />
                    <FormSelect id="brand" name="brand" className="w-full" label="Brand" onChange={setProductChanges} value={{ value: product?.brand?.id!, label: product?.brand?.name!, description: product?.brand?.description }} placeholder="Brand..."
                        options={brandsToOptions()} clearable={true} searchable={true} disabled={false} autoFocus={false} key={`brand`} returnEvent={true} />
                    <FormSelect id="productType" name="productType" className="w-full" label="Product Type" onChange={setProductChanges} value={{ value: product?.productType?.id!, label: product?.productType?.name!, description: product?.productType?.description }} placeholder="Product Type..."
                        options={typesToOptions()} clearable={true} searchable={true} disabled={false} autoFocus={false} key={`productType`} returnEvent={true} />
                    <FormMultiSelect id="tags" name="tags" className="w-full" label="Tags" onChange={setProductChanges} values={product?.tags?.map((tag) => { return { value: tag.id, label: tag.name, description: tag.description } })} placeholder="Tags..."
                        options={tagsToOptions()} clearable={true} searchable={true} disabled={false} autoFocus={false} key={`tags`} returnEvent={true} withChips />
                    <FormInput id="price" name="price" className="w-full" type="number" label="Price" onChange={setProductChanges} value={product?.price!} placeholder="Price..." returnEvent={true} key={`price`} />
                    <div className="w-full relative space-y-5 pb-4 px-4 border border-t-0 rounded-tl-none borders bg-transparent rounded-md focus:border-light-600 dark:focus:border-dark-600">
                        <div className="absolute -top-3 left-0.5 text-xs focus:italic text-inherit">Product Media</div>
                        <MediaPreview id={`saved-priview`} onClose={(index: number) => { removeSavedFile(index) }} key={`saved-priview`} label={``} name={`saved-priview`} values={mediaFiles} closeAction />
                        <FilePicker
                            className="w-full"
                            label="New media"
                            id="files"
                            values={files}
                            onChange={(files: FileList | null | ChangeEvent<HTMLInputElement>) => { chooseFiles(files) }}
                            removeFile={removeFile}
                            multiple
                            accepts={[FilePickerAcceptTypes.Video, FilePickerAcceptTypes.Image]}
                        />
                    </div>
                </FormBody>
                <FormFooter className="justify-end">
                    <button className={`btn-hollow`} onClick={() => { navigate(-1); }}>Cancel</button>
                    <button className={`btn-hollow`} disabled={disableSave} onClick={async () => { await save(); }}> Save</button>
                    {/* <button className={`btn-hollow`} onClick={() => getPrincipal()}> Auth</button> */}
                </FormFooter>
            </Form>
        </div>
    )
}