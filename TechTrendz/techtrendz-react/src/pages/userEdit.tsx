import { ChangeEvent, useCallback, useEffect, useState } from "react"
import Form from "../components/Form"
import FormBody from "../components/FormBody"
import FormFooter from "../components/FormFooter"
import FormHeader from "../components/FormHeader"
import FormInput from "../components/FormInput"
import { useSelector } from "react-redux"
import { AuthState } from "../components/utils/authSlice"
import { getUserById, removeProfilePicture, saveUser } from "../components/service/userService"
import { useNavigate, useOutletContext, useParams } from "react-router-dom"
import { OverlayContextType } from "../components/Layout"
import { Address, BankAccount, Contact, ContactType, MyFile, Role, Salutation, SelectOption, User } from "../types/types"
import { getSalutationAll } from "../components/service/salutationService"
import FormSelect from "../components/FormSelect"
import { getRoleAll } from "../components/service/roleService"
import FormMultiSelect from "../components/FormMultiSelect"
import { IconPlus } from "../components/icons/IconPlus"
import { Chip } from "../components/Chip"
import { AddContactModal } from "../components/AddContactModal"
import { getContactTypeAll } from "../components/service/contactTypeService"
import { getContactAll } from "../components/service/contactService"
import { getAddressAll } from "../components/service/addressService"
import { getBankAccountAll } from "../components/service/bankAccountService"
import { AddAddressModal } from "../components/AddAddressModal"
import { AddBankAccountModal } from "../components/AddBankAccountModal"
import FilePicker, { AcceptTypes } from "../components/FilePicker"
import { MediaPreview } from "../components/MediaPreview"
import { getFileLinkFromMediaId } from "../components/service/fileService"
import { toast } from "react-toastify"
import { useDialog } from "../components/DialogContext"

export const UserEdit = () => {
    const token = useSelector((state: AuthState) => state.auth ? state.auth.token : "")
    const [disableSave, setDisableSave] = useState(false)
    const [user, setUser] = useState<User>({} as User)
    const [salutations, setSalutations] = useState<Salutation[]>([])
    const [roles, setRoles] = useState<Role[]>([])
    const [contactTypes, setContactTypes] = useState<ContactType[]>([])
    const [contacts, setContacts] = useState<Contact[]>([])
    const [addresses, setAddresses] = useState<Address[]>([])
    const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([])
    const { id } = useParams()
    const navigate = useNavigate()
    const [header, setHeader] = useState("New User")
    const { setLoading, setEmpty } = useOutletContext<OverlayContextType>();
    const [showContactModal, setShowContactModal] = useState(false)
    const [showAddressModal, setShowAddressModal] = useState(false)
    const [showBankAccountModal, setShowBankAccountModal] = useState(false)
    const [currentContact, setCurrentContact] = useState<Contact>({} as Contact)
    const [currentAddress, setCurrentAddress] = useState<Address>({} as Address)
    const [currentBankAccount, setCurrentBankAccount] = useState<BankAccount>({} as BankAccount)
    const [file, setFile] = useState<FileList>()
    const [mediaFile, setMediaFile] = useState<MyFile[]>([] as MyFile[])
    const { openDialog } = useDialog();

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

    const changePasswordTick = () => {
        const val: { target: { name: string, value: boolean } } = { target: { name: "changePassword", value: !user.changePassword } }
        setUserChanges(val)
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
                    [name]: { id: value.value, title: value.label, description: value.description }
                }));
            }
        }
        else {
            const { name, value } = e.target as unknown as { name: string, value: string | SelectOption | boolean }
            setUser((prevState: any) => ({
                ...prevState,
                [name]: value
            }));
        }
    }

    const getPictureLinks = useCallback(async () => {
        if (user && user.profilePic) {
            let picLinks: MyFile[] = [] as MyFile[]
            picLinks.push({ id: user.profilePic.id, token: token!, type: user.profilePic.fileType, url: getFileLinkFromMediaId(user.profilePic.id) })
            setMediaFile(picLinks)
        } else {
            setMediaFile([] as MyFile[])
        }
    }, [user, token])

    const addContact = (contact: Contact) => {
        const newList: Contact[] = user?.contacts ? [...user?.contacts, contact] : [...[] as Contact[], contact]
        setUser((prevState: any) => ({
            ...prevState,
            contacts: newList
        }));
    }

    const removeContact = (index: number) => {
        setShowContactModal(false)
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

    const addAddress = (addr: Address) => {
        const newList: Address[] = user?.addresses ? [...user?.addresses, addr] : [...[] as Address[], addr]
        setUser((prevState: any) => ({
            ...prevState,
            addresses: newList
        }));
    }

    const removeAddress = (index: number) => {
        if (user?.addresses) {
            const newList = [
                ...user?.addresses.slice(0, index),
                ...user?.addresses.slice(index + 1),
            ]
            setUser((prevState: any) => ({
                ...prevState,
                addresses: newList
            }));
        }
    }

    const makeAddressLabel = (item: Address) => {
        let label = ""
        if (item.houseNumber) label += item.houseNumber
        if (item.street) {
            label += label ? " - " + item.street : item.street
        }
        if (item.line1 && item.street !== item.line1) {
            label += label ? " - " + item.line1 : item.line1
        }
        if (item.line2) {
            label += label ? " - " + item.line2 : item.line2
        }
        if (item.city) {
            label += label ? " - " + item.city : item.city
        }
        return label
    }

    const addBankAccount = (account: BankAccount) => {
        const newList: BankAccount[] = user?.bankAccounts ? [...user?.bankAccounts, account] : [...[] as BankAccount[], account]
        setUser((prevState: any) => ({
            ...prevState,
            bankAccounts: newList
        }));
    }

    const removeBankAccount = (index: number) => {
        if (user?.bankAccounts) {
            const newList = [
                ...user?.bankAccounts.slice(0, index),
                ...user?.bankAccounts.slice(index + 1),
            ]
            setUser((prevState: any) => ({
                ...prevState,
                bankAccounts: newList
            }));
        }
    }

    const makeBankAccountLabel = (item: BankAccount) => {
        let label = ""
        if (item.bankName) label += item.bankName
        if (item.accountNumber) {
            label += label ? " - " + item.accountNumber : item.accountNumber
        }
        if (item.branchName) {
            label += (label ? " - " + item.branchName : item.branchName) + " branch"
        }
        return label
    }

    const chooseFiles = (newFile: FileList | null | ChangeEvent<HTMLInputElement>) => {
        // setFile(undefined)
        if (newFile instanceof FileList) {
            setFile(newFile)
        } else if (newFile?.target) {
            const dataTransfer = new DataTransfer();
            const files1 = newFile && newFile?.target?.files ? Array.from(newFile?.target?.files) : [];
            files1.forEach(file => dataTransfer.items.add(file));
            setFile(dataTransfer.files)
        }
    }

    const removeFile = (index: number) => {
        // setFile(removeFileFromFilelist(index, file))
        setFile(undefined)
    }

    const removeSavedProfilePic = async () => {
        const result = await openDialog({
            title: "Remove profile picture?",
            detail: "This action cannot be undone",
            yesText: "Remove",
            noText: "Cancel",
        });

        if (result) {
            setLoading(true)
            let mediaFile = user.profilePic
            if (await removeProfilePicture(token!, user.id, mediaFile?.id!)) {
                toast.success("File removed")
                await getUser()
            } else {
                toast.error("Encountered an error. Check logs")
            }
            setLoading(false)
        } else {
            // toast.warning("User canceled action");
        }
    }

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

    const getContactTypes = useCallback(async () => {
        let result = await getContactTypeAll(token!)
        if (result) {
            setContactTypes(result)
        }
    }, [token])

    const getContacts = useCallback(async () => {
        let result = await getContactAll(token!)
        if (result) {
            setContacts(result)
        }
    }, [token])

    const getAddresses = useCallback(async () => {
        let result = await getAddressAll(token!)
        if (result) {
            setAddresses(result)
        }
    }, [token])

    const getBankAccounts = useCallback(async () => {
        let result = await getBankAccountAll(token!)
        if (result) {
            setBankAccounts(result)
        }
    }, [token])

    const save = async () => {
        setLoading(true)
        let dto = user
        dto.id = Number(id)
        let result = await saveUser(token!, dto, file!)
        if (result) {
            setFile(new DataTransfer().files)
            if (id) getUser()
            navigate("/useredit/" + result.id)
        }
        setLoading(false)
    }

    useEffect(() => {
        if (user.username !== "" && (user.id ? user.password !== "" : true) && user.forename !== "" && user.lastname !== "") {
            setDisableSave(false)
        } else {
            setDisableSave(true)
        }
    }, [user])

    useEffect(() => {
        getPictureLinks()
    }, [getPictureLinks])

    useEffect(() => {
        if (!id || id === "0") {
            document.title = 'TechBrandz - New User';
            setHeader("New User")
            setUser({} as User)

        } else {
            document.title = 'TechBrandz - Edit User';
            getUser()
            setHeader("Edit User")
        }
    }, [id, getUser]);

    useEffect(() => {
        setLoading(true)

        getSalutations()
        getRoles()
        getContactTypes()
        getContacts()
        getAddresses()
        getBankAccounts()

        setLoading(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])

    return (
        <div className="wrapper">
            <Form className="h-full w-full md:w-96 px-2 landscape:w-96">
                <FormHeader className="font-normal flex justify-center">
                    <>{header}</>
                </FormHeader>
                <FormBody className="flex flex-col gap-5 pt-5">
                    <FormSelect id="salutation" name="salutation" className="w-full" label="Salutation" onChange={setUserChanges} value={{ value: user?.salutation?.id!, label: user?.salutation?.title!, description: user?.salutation?.description }} placeholder="Salutation..."
                        options={salutationsToOptions()} clearable={true} searchable={true} disabled={false} autoFocus={false} key={`salutation`} returnEvent={true} />
                    <FormInput id="forename" name="forename" className="w-full" type="text" label="Forename" onChange={setUserChanges} value={user.forename} autoFocus={true} placeholder="Forname..." returnEvent={true} key={`forename`} />
                    <FormInput id="otherNames" name="otherNames" className="w-full" type="text" label="Other Names" onChange={setUserChanges} value={user.otherNames} placeholder="Other Names..." returnEvent={true} key={`otherNames`} />
                    <FormInput id="lastname" name="lastname" className="w-full" type="text" label="Lastname" onChange={setUserChanges} value={user.lastname} placeholder="Lastname..." returnEvent={true} key={`lastname`} />
                    <FormInput id="username" name="username" className="w-full" type="text" label="Username" onChange={setUserChanges} value={user.username} placeholder="Username..." returnEvent={true} key={`username`} />
                    {!id && <FormInput id="password" name="password" className="w-full" type="text" label="Password" onChange={setUserChanges} value={user.password!} placeholder="Password..." returnEvent={true} key={`password`} />}
                    {!id && <FormInput id="changePassword" name="changePassword" className="w-full" type="checkbox" label="Change Password?" onChange={changePasswordTick} value={user.changePassword ? "true" : ""} placeholder="Change Password?..." returnEvent={true} key={`changePassword`} />}
                    <FormMultiSelect id="roles" name="roles" className="w-full" label="Roles" onChange={setUserChanges} values={user?.roles?.map((tag) => { return { value: tag.id, label: tag.name, description: tag.description } })!} placeholder="Roles..."
                        options={rolesToOptions()} clearable={true} searchable={true} disabled={false} autoFocus={false} key={`roles`} returnEvent={true} withChips />
                    <div className="w-full flex flex-col border rounded-md p-1 relative">
                        <div className="absolute left-1 -top-3 text-xs px-1 background">Contacts</div>
                        <div className="flex w-full flex-wrap gap-1">
                            {user?.contacts && user?.contacts?.length ? user?.contacts.map((contact, index) => <div className="w-fit" key={`contactsdiv-` + index}>
                                <Chip data={contact.content + " - " + contact.contactType?.name} removeable
                                    onClick={() => { setCurrentContact(contact); setShowContactModal(true); }}
                                    onIconClick={() => { removeContact(index); }}
                                    tooltip={contact.contactType?.name}
                                    key={`contacts-` + index} />
                            </div>) : <div>No contacts</div>}
                        </div>
                        <div className="flex justify-end">
                            <div onClick={() => { setCurrentContact({} as Contact); setShowContactModal(true); }} className="icon h-5 hover:scale-x-125 aspect-square cursor-pointer"><IconPlus /></div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col border rounded-md p-1 relative">
                        <div className="absolute left-1 -top-3 text-xs px-1 background">Addresses</div>
                        <div className="flex w-full flex-wrap gap-1">
                            {user?.addresses && user?.addresses?.length ? user?.addresses.map((address, index) => <div className="w-fit" key={`addressesdiv-` + index}>
                                <Chip data={makeAddressLabel(address)} removeable
                                    onClick={() => { setCurrentAddress(address); setShowAddressModal(true); }}
                                    onIconClick={() => { removeAddress(index); }}
                                    tooltip={address.city + ", " + address.country}
                                    iconClassName="w-4"
                                    key={`address-` + index} />
                            </div>) : <div>No addresses</div>}
                        </div>
                        <div className="flex justify-end">
                            <div onClick={() => { setCurrentAddress({} as Address); setShowAddressModal(true); }} className="icon h-5 hover:scale-x-125 aspect-square cursor-pointer"><IconPlus /></div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col border rounded-md p-1 relative">
                        <div className="absolute left-1 -top-3 text-xs px-1 background">Bank Accounts</div>
                        <div className="flex w-full flex-wrap gap-1">
                            {user?.bankAccounts && user?.bankAccounts?.length ? user?.bankAccounts.map((account, index) => <div className="w-fit" key={`bankaccountsdiv-` + index}>
                                <Chip data={makeBankAccountLabel(account)} removeable
                                    onClick={() => { setCurrentBankAccount(account); setShowBankAccountModal(true); }}
                                    onIconClick={() => { removeBankAccount(index); }}
                                    tooltip={account?.branchName + " branch - " + account?.bankName}
                                    iconClassName="w-4"
                                    key={`bankaccount-` + index} />
                            </div>) : <div>No bank accounts</div>}
                        </div>
                        <div className="flex justify-end">
                            <div onClick={() => { setCurrentBankAccount({} as BankAccount); setShowBankAccountModal(true); }} className="icon h-5 hover:scale-x-125 aspect-square cursor-pointer"><IconPlus /></div>
                        </div>
                    </div>
                    {showContactModal &&
                        <AddContactModal
                            close={setShowContactModal}
                            contactTypes={contactTypes}
                            addContact={addContact}
                            contacts={contacts}
                            currentContact={currentContact && currentContact}
                            key={`addcontactmodal`} />}
                    {showAddressModal &&
                        <AddAddressModal
                            close={setShowAddressModal}
                            addAddres={addAddress}
                            addresses={addresses}
                            currentAddress={currentAddress && currentAddress}
                            key={`addaddressmodal`} />}
                    {showBankAccountModal &&
                        <AddBankAccountModal
                            close={setShowBankAccountModal}
                            addBankAccount={addBankAccount}
                            bankAccounts={bankAccounts}
                            currentBankAccount={currentBankAccount && currentBankAccount}
                            key={`addbankaccountmodal`} />}
                    <div className="w-full relative space-y-5 pb-4 px-4 border border-t-0 rounded-tl-none borders bg-transparent rounded-md focus:border-light-600 dark:focus:border-dark-600">
                        <div className="absolute -top-3 left-0.5 text-xs focus:italic text-inherit">Profile Picture</div>
                        <MediaPreview id={`saved-priview`} onClose={removeSavedProfilePic} key={`saved-priview`} label={`Current Profile Picture`} name={`saved-priview`} values={mediaFile} />
                        <FilePicker
                            className="w-full"
                            label="Pick New Profile Picture"
                            id="prof-pic"
                            values={file}
                            onChange={(files: FileList | null | ChangeEvent<HTMLInputElement>) => { chooseFiles(files) }}
                            removeFile={removeFile}
                            accepts={[AcceptTypes.Image]}
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