import { useCallback, useEffect, useState } from "react"
import Form from "../components/Form"
import FormBody from "../components/FormBody"
import FormFooter from "../components/FormFooter"
import FormHeader from "../components/FormHeader"
import FormInput from "../components/FormInput"
import { useSelector } from "react-redux"
import { AuthState } from "../components/utils/authSlice"
import { getProductStatusById, saveProductStatus } from "../components/service/productStatusService"
import { useNavigate, useOutletContext, useParams } from "react-router-dom"
import { OverlayContextType } from "../components/Layout"

export const ProductStatusEdit = () => {
    const token = useSelector((state: AuthState) => state.auth ? state.auth.token : "")
    const [disableSave, setDisableSave] = useState(false)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const { id } = useParams()
    const navigate = useNavigate()
    const [header, setHeader] = useState("New Product Status")
    const { setLoading, setEmpty } = useOutletContext<OverlayContextType>();

    const getProductStatus = useCallback(async () => {
        setLoading(true)
        let result = await getProductStatusById(token!, id ? Number(id) : 0)
        if (result) {
            setName(result.name)
            setDescription(result.description)
        }
        setEmpty(!result)
        setLoading(false)
    }, [setLoading, token, id, setEmpty])

    const save = async () => {
        setLoading(true)
        const dto = { id: id ? Number(id) : 0, name: name, description: description }
        let result = await saveProductStatus(token!, dto)
        if (result) {
            navigate("/productstatusedit/" + result.id)
        }
        setLoading(false)
    }

    useEffect(() => {
        if (name) {
            setDisableSave(false)
        } else {
            setDisableSave(true)
        }
    }, [name])

    useEffect(() => {
        if (!id || id === "0") {
            document.title = 'TechProductStatusz - New Product Status';
            setHeader("New Product Status")
            setName("")
            setDescription("")

        } else {
            document.title = 'TechProductStatusz - Edit Product Status';
            getProductStatus()
            setHeader("Edit Product Status")
        }
    }, [id, getProductStatus]);

    return (
        <div className="wrapper">
            <Form className="h-full w-full md:w-96 landscape:w-96">
                <FormHeader className="font-normal flex justify-center">
                    <>{header}</>
                </FormHeader>
                <FormBody className=" flex flex-col gap-5 pt-5">
                    <FormInput id="name" name="name" className="w-full" type="text" label="Name" onChange={(value: string) => { setName(value) }} value={name} autoFocus={true} placeholder="Name..." />
                    <FormInput id="description" name="description" className="w-full" type="text" label="Description" onChange={(value: string) => { setDescription(value) }} value={description} placeholder="Description..." />
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