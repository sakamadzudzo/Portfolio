import { useCallback, useEffect, useState } from "react"
import Form from "../components/Form"
import FormBody from "../components/FormBody"
import FormFooter from "../components/FormFooter"
import FormHeader from "../components/FormHeader"
import FormInput from "../components/FormInput"
import { useSelector } from "react-redux"
import { AuthState } from "../components/utils/authSlice"
import { getContactById, saveContact } from "../components/service/contactService"
import { useNavigate, useOutletContext, useParams } from "react-router-dom"
import { OverlayContextType } from "../components/Layout"
import { getContactTypeAll } from "../components/service/contactTypeService"
import FormSelect, { SelectOption } from "../components/FormSelect"

export const ContactEdit = () => {
    const token = useSelector((state: AuthState) => state.auth ? state.auth.token : "")
    const [disableSave, setDisableSave] = useState(false)
    const [content, setContent] = useState("")
    const [contactTypeId, setContactTypeId] = useState("")
    const [contactTypeName, setContactTypeName] = useState("")
    const [contactTypeDescription, setContactTypeDescription] = useState("")
    const { id } = useParams()
    const navigate = useNavigate()
    const [header, setHeader] = useState("New Contact")
    const { setLoading, setEmpty } = useOutletContext<OverlayContextType>();
    const [contactTypes, setContactTypes] = useState<{ id: number, name: string, description: string }[]>([])

    const getContact = useCallback(async () => {
        setLoading(true)
        let result = await getContactById(token!, id ? Number(id) : 0)
        if (result) {
            setContent(result.content)
            if (result.contactType) {
                setContactTypeId(result.contactType.id)
                setContactTypeName(result.contactType.name)
                setContactTypeDescription(result.contactType.description)
            }
        }
        setEmpty(!result)
        setLoading(false)
    }, [setLoading, token, id, setEmpty])

    const getContactTypes = useCallback(async () => {
        setLoading(true)
        let result = await getContactTypeAll(token!)
        if (result) {
            setContactTypes(result)
        }
        setLoading(false)
    }, [setLoading, token])

    const save = async () => {
        setLoading(true)
        const dto = { id: id ? Number(id) : 0, content: content, contactType: { id: contactTypeId } }
        let result = await saveContact(token!, dto)
        if (result) {
            navigate("/contactedit/" + result.id)
        }
        setLoading(false)
    }

    const typesToOptions = (): SelectOption[] => {
        return contactTypes.map((item) => { return { value: item.id, label: item.name } })
    }

    const reset = () => {
        setContent("")
        setContactTypeId("")
        setContactTypeName("")
        setContactTypeDescription("")
    }

    useEffect(() => {
        if (content && contactTypeId) {
            setDisableSave(false)
        } else {
            setDisableSave(true)
        }
    }, [content, contactTypeId])

    useEffect(() => {
        if (!id || id === "0") {
            document.title = 'TechContactz - New Contact';
            setHeader("New Contact")
            reset()

        } else {
            document.title = 'TechContactz - Edit Contact';
            getContact()
            setHeader("Edit Contact")
        }
        getContactTypes()
    }, [id, getContact, getContactTypes]);

    return (
        <div className="wrapper">
            <Form className="h-full w-full md:w-96 landscape:w-96">
                <FormHeader className="font-normal flex justify-center">
                    <>{header}</>
                </FormHeader>
                <FormBody className=" flex flex-col gap-5 pt-5">
                    <FormInput id="content" name="content" className="w-full" type="text" label="Content" onChange={(value: string) => { setContent(value) }} value={content} autoFocus={true} placeholder="Content..." />
                    <FormSelect id="contactTypeId" name="contactTypeId" className="w-full" type="text" label="Contact Type" onChange={(value: string) => { setContactTypeId(value) }} value={typesToOptions()} placeholder="Contact Type..."
                     options={typesToOptions()} />
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