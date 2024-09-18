import { ChangeEvent, useCallback, useEffect, useState } from "react"
import Form from "../components/Form"
import FormBody from "../components/FormBody"
import FormFooter from "../components/FormFooter"
import FormHeader from "../components/FormHeader"
import FormInput from "../components/FormInput"
import { useSelector } from "react-redux"
import { AuthState } from "../components/utils/authSlice"
import { getProductById, saveProduct } from "../components/service/productService"
import { useNavigate, useOutletContext, useParams } from "react-router-dom"
import { OverlayContextType } from "../components/Layout"
import { Brand, Product, ProductType, SelectOption, Tag } from "../types/types"
import { getBrandAll } from "../components/service/brandService"
import FormSelect from "../components/FormSelect"
import { getProductTypeAll } from "../components/service/productTypeService"
import { getTagAll } from "../components/service/tagService"
import FormMultiSelect from "../components/FormMultiSelect"
import FilePicker from "../components/FilePicker"

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

    const chooseFiles = (files: FileList | null | ChangeEvent<HTMLInputElement>) => {
        setFiles(files instanceof FileList ? files : undefined)
        // console.log(files)
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
        const dto = product.productItems ? product : { ...product, productItems: null }
        let result = await saveProduct(token!, dto)
        if (result) {
            navigate("/productedit/" + result.id)
        }
        setLoading(false)
    }

    useEffect(() => {
        if (product.name && product.description && product.brand.name && product.productType.name) {
            setDisableSave(false)
        } else {
            setDisableSave(true)
        }
    }, [product])

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
                    {/* <FilePicker id="files" name="files" className="w-full" label="Pictures" onChange={setProductChanges} value={product?.files!} placeholder="Pictures..." returnEvent={true} key={`files`} /> */}
                    <FilePicker
                        className="w-full"
                        label="Upload File"
                        values={files}
                        onChange={(files: FileList | null | ChangeEvent<HTMLInputElement>) => { chooseFiles(files) }}
                        multiple
                    />

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