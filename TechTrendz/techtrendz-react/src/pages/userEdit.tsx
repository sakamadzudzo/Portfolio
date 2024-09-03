import { useCallback, useEffect, useState } from "react"
import Form from "../components/Form"
import FormBody from "../components/FormBody"
import FormFooter from "../components/FormFooter"
import FormHeader from "../components/FormHeader"
import FormInput from "../components/FormInput"
import { useSelector } from "react-redux"
import { AuthState } from "../components/utils/authSlice"
import { getUserById, saveUser } from "../components/service/userService"
import { useNavigate, useOutletContext, useParams } from "react-router-dom"
import { OverlayContextType } from "../components/Layout"
import { Contact, Role, Salutation, SelectOption, User } from "../types/types"
import { getSalutationAll } from "../components/service/salutationService"
import FormSelect from "../components/FormSelect"
import { getRoleAll } from "../components/service/roleService"
import FormMultiSelect from "../components/FormMultiSelect"
import { IconMinus } from "../components/icons/IconMinus"
import { IconPlus } from "../components/icons/IconPlus"
import { Chip } from "../components/Chip"

export const UserEdit = () => {
    const token = useSelector((state: AuthState) => state.auth ? state.auth.token : "")
    const [disableSave, setDisableSave] = useState(false)
    const [user, setUser] = useState<User>({} as User)
    const [salutations, setSalutations] = useState<Salutation[]>([])
    const [roles, setRoles] = useState<Role[]>([])
    const { id } = useParams()
    const navigate = useNavigate()
    const [header, setHeader] = useState("New User")
    const { setLoading, setEmpty } = useOutletContext<OverlayContextType>();
    const [showContactModal, setShowContactModal] = useState(false)
    const [showAddressModal, setShowAddressModal] = useState(false)
    const [showBankAccountModal, setBankAccountModal] = useState(false)

    const getUser = useCallback(async () => {
        setLoading(true)
        let result = await getUserById(token!, id ? Number(id) : 0)
        if (result) {
            setUser(result)
        }
        setEmpty(!result)
        setLoading(false)
    }, [setLoading, token, id, setEmpty])

    const salutationsToOptions = () => {
        return salutations ? salutations
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((item) => { return { value: item.id, label: item.title, description: item.description } })
            : [] as SelectOption[]
    }

    const rolesToOptions = () => {
        return roles ? roles
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item) => { return { value: item.id, label: item.name, description: item.description } })
            : [] as SelectOption[]
    }

    const setUserChanges = (e: any) => {
        if (e.value) {
            if (e.value instanceof Array) {
                const { name, value } = e as { name: string, value: SelectOption[] }
                setUser((prevState: any) => ({
                    ...prevState,
                    [name]: value.map((val) => { return { id: val.value, name: val.label, description: val.description } })
                }));
            } else {
                const { name, value } = e as { name: string, value: SelectOption }
                setUser((prevState: any) => ({
                    ...prevState,
                    [name]: { id: value.value, name: value.label, description: value.description }
                }));
            }
        }
        else {
            const { name, value } = e.target as unknown as { name: string, value: string | SelectOption }
            setUser((prevState: any) => ({
                ...prevState,
                [name]: value
            }));
        }
    }

    const addContact = (contact: Contact) => {
        // const contact: Contact = { id: 0, content: "", contactType: { id: 0, name: "", description: "" } }
        const contacts: Contact[] = [...user?.contacts, contact]
        setUser((prevState: any) => ({
            ...prevState,
            contacts: contacts
        }));
    }

    const removeContact = (index: number) => {
        if (user?.contacts) {
            const newList = [
                ...user?.contacts.slice(0, index),
                ...user?.contacts.slice(index + 1),
            ]
            setUser((prevState: any) => ({
                ...prevState,
                contacts: newList
            }));
        }
    }

    // const editItem = (index: number, content?: string, contactType?: ) => {
    //     let newList = [...user?.contacts]
    //     newList[index]. = serialNumber
    //     setProductItems(newList)
    // }

    const getSalutations = useCallback(async () => {
        let result = await getSalutationAll(token!)
        if (result) {
            setSalutations(result)
        }
    }, [token])

    const getRoles = useCallback(async () => {
        let result = await getRoleAll(token!)
        if (result) {
            setRoles(result)
        }
    }, [token])

    const save = async () => {
        setLoading(true)
        let dto = user
        dto.id = Number(id)
        let result = await saveUser(token!, dto)
        if (result) {
            navigate("/useredit/" + result.id)
        }
        setLoading(false)
    }

    useEffect(() => {
        if (user.username && (user.id ? user.password : true) && user.forename && user.lastname) {
            setDisableSave(false)
        } else {
            setDisableSave(true)
        }
    }, [user])

    useEffect(() => {
        if (!id || id === "0") {
            document.title = 'TechUserz - New User';
            setHeader("New User")
            setUser({} as User)

        } else {
            document.title = 'TechUserz - Edit User';
            getUser()
            setHeader("Edit User")
        }
    }, [id, getUser]);

    useEffect(() => {
        setLoading(true)

        getSalutations()
        getRoles()

        setLoading(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])

    return (
        <div className="wrapper">
            <Form className="h-full w-full md:w-96 landscape:w-96">
                <FormHeader className="font-normal flex justify-center">
                    <>{header}</>
                </FormHeader>
                <FormBody className=" flex flex-col gap-5 pt-5">
                    <FormSelect id="salutation" name="salutation" className="w-full" label="Salutation" onChange={setUserChanges} value={{ value: user?.salutation?.id!, label: user?.salutation?.title!, description: user?.salutation?.description }} placeholder="Salutation..."
                        options={salutationsToOptions()} clearable={true} searchable={true} disabled={false} autoFocus={false} key={`salutation`} returnEvent={true} />
                    <FormInput id="forename" name="forename" className="w-full" type="text" label="Forename" onChange={setUserChanges} value={user.forename} autoFocus={true} placeholder="Forname..." returnEvent={true} key={`forename`} />
                    <FormInput id="otherNames" name="otherNames" className="w-full" type="text" label="Other Names" onChange={setUserChanges} value={user.otherNames} placeholder="Other Names..." returnEvent={true} key={`otherNames`} />
                    <FormInput id="lastname" name="lastname" className="w-full" type="text" label="Lastname" onChange={setUserChanges} value={user.lastname} placeholder="Lastname..." returnEvent={true} key={`lastname`} />
                    <FormInput id="username" name="username" className="w-full" type="text" label="Username" onChange={setUserChanges} value={user.username} placeholder="Username..." returnEvent={true} key={`username`} />
                    {!id && <FormInput id="password" name="password" className="w-full" type="text" label="Password" onChange={setUserChanges} value={user.password!} placeholder="Password..." returnEvent={true} key={`password`} />}
                    <FormMultiSelect id="roles" name="roles" className="w-full" label="Roles" onChange={setUserChanges} values={user?.roles?.map((tag) => { return { value: tag.id, label: tag.name, description: tag.description } })!} placeholder="Roles..."
                        options={rolesToOptions()} clearable={true} searchable={true} disabled={false} autoFocus={false} key={`roles`} returnEvent={true} withChips />
                    <div className="w-full flex flex-col">
                        <div className="flex w-full flex-wrap gap-1">
                            {user?.contacts && user?.contacts.map((contact, index) =>
                                <Chip data={contact.content + "-" + contact.contactType?.name} removeable onClick={() => { removeContact(index); }}
                                    tooltip={contact.contactType?.name}
                                    key={`contacts-` + index} />)}
                        </div>
                        <div className="flex justify-end">
                            <div onClick={() => { setShowContactModal(true); }} className="icon h-5 hover:h-6 aspect-square cursor-pointer"><IconPlus /></div>
                        </div>
                    </div>
                    {showContactModal && "Contact Modal here. Pretty much copy ContactEdit and make it a modal"}
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