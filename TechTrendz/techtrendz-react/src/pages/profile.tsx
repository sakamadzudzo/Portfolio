import { useSelector } from "react-redux"
import { AuthState } from "../components/utils/authSlice"
import { Address, BankAccount, Contact, Role, User } from "../types/types"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { Section } from "../components/Section"
import { ProfileIcon } from "../components/ProfileIcon"
import { bankDetails, fullAddress, userFullname } from "../components/utils/misc"

export const Profile = () => {
    const user: User | null = useSelector((state: AuthState) => state.auth ? state.auth.user : null)
    const navigate = useNavigate()
    const [roles, setRoles] = useState<Role[]>([] as Role[])
    const [contacts, setContacts] = useState<Contact[]>([] as Contact[])
    const [addresses, setAddresses] = useState<Address[]>([] as Address[])
    const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([] as BankAccount[])

    useEffect(() => {
        if (!user) {
            toast.warning("Could not retrieve logged in user")
            navigate("/")
        }
    }, [navigate, user])

    useEffect(() => {
        setRoles(user?.roles ?
            [...user.roles].sort((a, b) => a.name.localeCompare(b.name))
            : [] as Role[])
    }, [user?.roles])

    useEffect(() => {
        setContacts(user?.contacts ?
            [...user.contacts].sort((a, b) => a.contactType.name.localeCompare(b.contactType.name))
            : [] as Contact[])
    }, [user?.contacts])

    useEffect(() => {
        setAddresses(user?.addresses ?
            [...user.addresses].sort((a, b) => a.city.localeCompare(b.city))
            : [] as Address[]
        )
    }, [user?.addresses])

    useEffect(() => {
        setBankAccounts(user?.bankAccounts ?
            [...user.bankAccounts]
            // .sort((a,b) => new Date(a.dateTimeOpened) - new Date(b.dateTimeOpened))
            : [] as BankAccount[]
        )
    }, [user?.bankAccounts])

    return (
        <div className="wrapper">
            <div className="h-full w-full md:w-96 landscape:w-96 space-y-3">
                <Section title="Details" className="w-full">
                    <div className="mt-1 gap-2 w-full flex justify-center">
                        <ProfileIcon className="w-1/2 border-0" />
                    </div>
                    <div className="w-full rounded-md grow">
                        <div className="flex justify-between w-full">
                            <div className="font-medium">Name:</div>
                            <div className="w-9/12 whitespace-normal break-words flex justify-end">{userFullname(user!)}</div>
                        </div>
                        <div className="flex justify-between w-full">
                            <div className="font-medium">Username:</div>
                            <div>{user?.username}</div>
                        </div>
                    </div>
                </Section>
                <Section title="Roles">
                    <ul className="list-decimal list-inside">
                        {roles.map((role, index) =>
                            <li className="list-item capitalize">{role.name.toLowerCase()}</li>
                        )}
                    </ul>
                </Section>
                <Section title="Contacts">
                    <ul className="">
                        {contacts.map((contact, index) =>
                            <li className="flex justify-between">
                                <div className="capitalize font-medium">{contact.contactType.name.toLowerCase()}:</div>
                                <div>{contact.content}</div>
                            </li>
                        )}
                    </ul>
                </Section>
                <Section title="Addresses">
                    <ul className="">
                        {addresses.map((address, index) =>
                            <li>{fullAddress(address)}</li>
                        )}
                    </ul>
                </Section>
                <Section title="Bank Accounts">
                    <ul className="">
                        {bankAccounts.map((account, index) =>
                            <li>{bankDetails(account)}</li>
                        )}
                    </ul>
                </Section>
            </div>
        </div>
    )
}