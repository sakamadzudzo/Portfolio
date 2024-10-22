import { useCallback, useEffect, useState } from "react"
import Form from "../components/Form"
import FormBody from "../components/FormBody"
import FormFooter from "../components/FormFooter"
import FormHeader from "../components/FormHeader"
import FormInput from "../components/FormInput"
import { useSelector } from "react-redux"
import { AuthState } from "../components/utils/authSlice"
import { getProductItemAllByProductId, saveProductItems } from "../components/service/productItemService"
import { useNavigate, useOutletContext, useParams } from "react-router-dom"
import { OverlayContextType } from "../components/Layout"
import { ProductItem } from "../types/types"
import { IconMinus } from "../components/icons/IconMinus"
import { IconPlus } from "../components/icons/IconPlus"

export const ProductItemEdit = () => {
    const token = useSelector((state: AuthState) => state.auth ? state.auth.token : "")
    const [disableSave, setDisableSave] = useState(false)
    const [productItems, setProductItems] = useState<ProductItem[]>([])
    const { productId } = useParams()
    const navigate = useNavigate()
    const [header, setHeader] = useState("New ProductItem")
    const { setLoading, setEmpty } = useOutletContext<OverlayContextType>();

    const getProductItems = useCallback(async () => {
        setLoading(true)
        let result = await getProductItemAllByProductId(token!, productId ? Number(productId) : 0)
        if (result) {
            setProductItems(result)
        }
        setEmpty(!result)
        setLoading(false)
    }, [setLoading, token, productId, setEmpty])

    const save = async () => {
        setLoading(true)
        let result = await saveProductItems(token!, productItems, productId ? Number(productId) : 0)
        if (result) {
            navigate("/productitemedit/" + result)
        }
        setLoading(false)
    }

    const addItem = (serialNumber: string) => {
        const productItem: ProductItem = { id: 0, serialNumber: serialNumber, product: { id: productId ? Number(productId) : 0 }, productStatus: { id: 1 } }
        setProductItems([...productItems, productItem])
    }

    const removeItem = (index: number) => {
        if (productItems) {
            const newList = [
                ...productItems.slice(0, index),
                ...productItems.slice(index + 1),
            ]
            setProductItems(newList)
        }
    }

    const editItem = (index: number, serialNumber: string) => {
        let newList = [...productItems]
        newList[index].serialNumber = serialNumber
        setProductItems(newList)
    }

    useEffect(() => {
        if (!productItems) {
            setDisableSave(true)
        } else if (productItems.find((item) => !item.serialNumber)) {
            setDisableSave(true)
        } else {
            setDisableSave(false)
        }
    }, [productItems])

    useEffect(() => {
        if (!productId || productId === "0") {
            document.title = 'TechBrandz - New Product Item';
            setHeader("New Product Item")
            setProductItems([])

        } else {
            document.title = 'TechBrandz - Edit Product Item';
            getProductItems()
            setHeader("Edit Product Item")
        }
    }, [productId, getProductItems]);

    return (
        <div className="wrapper">
            <Form className="h-full w-full md:w-96 landscape:w-96">
                <FormHeader className="font-normal flex justify-center">
                    <>{header}</>
                </FormHeader>
                <FormBody className="flex flex-col gap-5 pt-5">
                    {productItems && productItems.map((item, index) =>
                        <div className="w-full flex justify-between items-center gap-3" key={'serialNumber-div-' + index}>
                            <FormInput id={'serialNumber-' + index} name={'serialNumber-' + index} className="" type="text" label="Serial Number" onChange={(value: string) => { editItem(index, value) }} value={item.serialNumber} placeholder="Serial Number..." key={'serialNumber-' + index} />
                            <IconMinus
                                onClick={() => { removeItem(index); }}
                                className="h-5 hover:h-6 aspect-square cursor-pointer"
                            />
                        </div>
                    )}
                    <div className="flex justify-end">
                        <IconPlus
                            onClick={() => { addItem(""); }}
                            className="h-5 hover:h-6 aspect-square cursor-pointer"
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