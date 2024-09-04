import { useCallback, useEffect, useState } from "react"
import Form from "../components/Form"
import FormBody from "../components/FormBody"
import FormFooter from "../components/FormFooter"
import FormHeader from "../components/FormHeader"
import FormInput from "../components/FormInput"
import { useSelector } from "react-redux"
import { AuthState } from "../components/utils/authSlice"
import { getSalutationById, saveSalutation } from "../components/service/salutationService"
import { useNavigate, useOutletContext, useParams } from "react-router-dom"
import { OverlayContextType } from "../components/Layout"

export const SalutationEdit = () => {
    const token = useSelector((state: AuthState) => state.auth ? state.auth.token : "")
    const [disableSave, setDisableSave] = useState(false)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const { id } = useParams()
    const navigate = useNavigate()
    const [header, setHeader] = useState("New Salutation")
    const { setLoading, setEmpty } = useOutletContext<OverlayContextType>();

    const getSalutation = useCallback(async () => {
        setLoading(true)
        let result = await getSalutationById(token!, id ? Number(id) : 0)
        if (result) {
            setTitle(result.title)
            setDescription(result.description)
        }
        setEmpty(!result)
        setLoading(false)
    }, [setLoading, token, id, setEmpty])

    const save = async () => {
        setLoading(true)
        const dto = { id: id ? Number(id) : 0, title: title, description: description }
        let result = await saveSalutation(token!, dto)
        if (result) {
            navigate("/salutationedit/" + result.id)
        }
        setLoading(false)
    }

    useEffect(() => {
        if (title) {
            setDisableSave(false)
        } else {
            setDisableSave(true)
        }
    }, [title])

    useEffect(() => {
        if (!id || id === "0") {
            document.title = 'TechBrandz - New Salutation';
            setHeader("New Salutation")
            setTitle("")
            setDescription("")

        } else {
            document.title = 'TechBrandz - Edit Salutation';
            getSalutation()
            setHeader("Edit Salutation")
        }
    }, [id, getSalutation]);

    return (
        <div className="wrapper">
            <Form className="h-full w-full md:w-96 landscape:w-96">
                <FormHeader className="font-normal flex justify-center">
                    <>{header}</>
                </FormHeader>
                <FormBody className=" flex flex-col gap-5 pt-5">
                    <FormInput id="title" name="title" className="w-full" type="text" label="Title" onChange={(value: string) => { setTitle(value) }} value={title} autoFocus={true} placeholder="Title..." />
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