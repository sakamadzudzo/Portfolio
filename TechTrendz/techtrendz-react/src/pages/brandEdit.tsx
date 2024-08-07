import { useCallback, useEffect, useState } from "react"
import Form from "../components/Form"
import FormBody from "../components/FormBody"
import FormFooter from "../components/FormFooter"
import FormHeader from "../components/FormHeader"
import FormInput from "../components/FormInput"
import { useSelector } from "react-redux"
import { AuthState } from "../components/utils/authSlice"
import { getBrandById, saveBrand } from "../components/service/brandService"
import { useNavigate, useOutletContext, useParams } from "react-router-dom"
import { OverlayContextType } from "../components/Layout"

export const BrandEdit = () => {
    const token = useSelector((state: AuthState) => state.auth ? state.auth.token : "")
    const [disableSave, setDisableSave] = useState(false)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const { id } = useParams()
    const navigate = useNavigate()
    const [header, setHeader] = useState("New Brand")
    const { setLoading, setEmpty } = useOutletContext<OverlayContextType>();

    const getBrand = useCallback(async () => {
        setLoading(true)
        let result = await getBrandById(token!, id ? Number(id) : 0)
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
        let result = await saveBrand(token!, dto)
        if (result) {
            navigate("/brandedit/" + result.id)
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
            document.title = 'TechBrandz - New Brand';
            setHeader("New Brand")
            setName("")
            setDescription("")

        } else {
            document.title = 'TechBrandz - Edit Brand';
            getBrand()
            setHeader("Edit Brand")
        }
    }, [id, getBrand]);

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