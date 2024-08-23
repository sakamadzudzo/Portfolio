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
import FormSelect from "../components/FormSelect"
import { SelectOption } from "../types/types"

export const ContactEdit = () => {
    const token = useSelector((state: AuthState) => state.auth ? state.auth.token : "")
    const [disableSave, setDisableSave] = useState(false)
    const [content, setContent] = useState("")
    const [contactType, setContactType] = useState<SelectOption>(Object)
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
            let dto: SelectOption = { value: 0, label: "" }
            if (result.contactType) {
                dto = { value: result.contactType.id, label: result.contactType.name, description: result.contactType.description }
            }
            setContactType(dto)
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
        const dto = { id: id ? Number(id) : 0, content: content, contactType: { id: contactType.value } }
        let result = await saveContact(token!, dto)
        if (result) {
            navigate("/contactedit/" + result.id)
        }
        setLoading(false)
    }

    const typesToOptions = (): SelectOption[] => {
        return contactTypes
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item) => { return { value: item.id, label: item.name, description: item.description } })
    }

    const reset = () => {
        setContent("")
        setContactType(Object)
    }

    useEffect(() => {
        if (content && contactType.value) {
            setDisableSave(false)
        } else {
            setDisableSave(true)
        }
    }, [content, contactType])

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
                    <FormSelect id="contactTypeId" name="contactTypeId" className="w-full" label="Contact Type" onChange={(value: SelectOption) => { setContactType(value) }} value={contactType} placeholder="Contact Type..."
                        options={typesToOptions()} clearable={true} searchable={true} disabled={false} autoFocus={false} key={`contactTypeId`} />
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