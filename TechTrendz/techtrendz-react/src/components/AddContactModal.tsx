import { useEffect, useState } from "react"
import { Contact, ContactType, SelectOption } from "../types/types"
import Form from "./Form"
import FormBody from "./FormBody"
import FormFooter from "./FormFooter"
import FormHeader from "./FormHeader"
import FormInput from "./FormInput"
import FormSelect from "./FormSelect"
import { Modal } from "./Modal"
import FormMultiSelect from "./FormMultiSelect"

export const AddContactModal = ({
    close,
    contactTypes,
    addContact,
    currentContact,
    contacts
}: {
    close: Function,
    contactTypes: ContactType[],
    addContact: Function,
    currentContact?: Contact,
    contacts?: Contact[]
}) => {
    const [disableSave, setDisableSave] = useState(false)
    const [content, setContent] = useState("")
    const [contactType, setContactType] = useState<SelectOption>({} as SelectOption)
    const [contact, setContact] = useState<Contact>({} as Contact)

    const typesToOptions = (): SelectOption[] => {
        return contactTypes
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item) => { return { value: item.id, label: item.name, description: item.description } })
    }

    const contactsToOptions = (): SelectOption[] => {
        return contacts ? contacts
            .sort((a, b) => a.content.localeCompare(b.content))
            .map((item) => { return { value: item.id, label: item.content, description: item.contactType.description } })
            : [] as SelectOption[]
    }

    const addContactToList = () => {
        const newContact: Contact = {
            id: 0,
            content: content,
            contactType: { id: Number(contactType.value), name: contactType.label, description: contactType.description! }
        }
        addContact(content && contactType ? newContact : contact)
        close(false)
    }

    const chooseContact = (value: { name: string, value: SelectOption }) => {
        let selectedOption = contacts?.find((con) => con.id === value.value.value)
        if (selectedOption) setContact(selectedOption)
    }

    useEffect(() => {
        if (contacts) {
            if (currentContact) {
                if (contacts.find((con) => con.id === currentContact.id && con.content === currentContact.content && con.contactType.id === currentContact.contactType.id)) {
                    setContact(currentContact)
                } else {
                    setContent(currentContact.content)
                    setContactType({ value: currentContact.contactType.id, label: currentContact.contactType.name, description: currentContact.contactType.name })
                }
            }
        }
    }, [contacts, currentContact])

    useEffect(() => {
        if (content && contactType.value) {
            setDisableSave(false)
        } else if (JSON.stringify(contact) !== JSON.stringify({})) {
            setDisableSave(false)
        } else {
            setDisableSave(true)
        }
    }, [content, contactType, contact])

    return (
        <>
            <Modal close={close} className="flex justify-center pb-5 px-2">
                <Form className="h-full w-full md:w-96 landscape:w-96">
                    <FormBody className="flex flex-col gap-5 pt-5">
                        <div className={`w-full flex flex-col gap-5 border rounded-md p-5 relative`}>
                            <div className="absolute left-1 -top-2.5 text-xs background px-1">Pick</div>
                            <FormSelect id="contact" name="contact" className="w-full" label="Contact" onChange={chooseContact} value={{ value: contact.id, label: contact.content, description: contact?.contactType?.name }} placeholder="Contact..."
                                options={contactsToOptions()} clearable={true} searchable={true} disabled={!!content || !!contactType?.label} autoFocus={false} key={`contact`} returnEvent={true} />
                        </div>
                        <div className="w-full flex justify-center">Or</div>
                        <div className="w-full flex flex-col gap-5 border rounded-md p-5 relative">
                            <div className="absolute left-1 -top-2.5 text-xs background px-1">Create</div>
                            <FormInput id="content" name="content" className="w-full" type="text" label="Content" onChange={(value: string) => { setContent(value) }} value={content} autoFocus={true} placeholder="Content..." />
                            <FormSelect id="contactTypeId" name="contactTypeId" className="w-full" label="Contact Type" onChange={(value: SelectOption) => { setContactType(value) }} value={contactType} placeholder="Contact Type..."
                                options={typesToOptions()} clearable={true} searchable={true} disabled={false} autoFocus={false} key={`contactTypeId`} />
                            <div className="w-full flex justify-end">
                                <div className="text-xs underline hover:font-medium cursor-pointer" onClick={() => { setContent(""); setContactType({} as SelectOption) }}>Clear</div>
                            </div>
                        </div>
                    </FormBody>
                    <FormFooter className="justify-end">
                        <button className={`btn-hollow`} onClick={() => { close(false) }}>Cancel</button>
                        <button className={`btn-hollow`} disabled={disableSave} onClick={async () => { await addContactToList(); }}> Add</button>
                        {/* <button className={`btn-hollow`} onClick={() => getPrincipal()}> Auth</button> */}
                    </FormFooter>
                </Form>
            </Modal>
        </>
    )
}