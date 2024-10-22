import { useSelector } from "react-redux"
import { AuthState } from "../components/utils/authSlice"
import { User } from "../types/types"
import { useEffect } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { Section } from "../components/Section"

export const Profile = () => {
    const user: User | null = useSelector((state: AuthState) => state.auth ? state.auth.user : null)
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            toast.warning("Could not retrieve logged in user")
            navigate("/")
        }
    }, [navigate, user])
    return (
        <div className="wrapper">
            <div className="h-full w-full md:w-96 landscape:w-96">
                <Section title="Details">
                    <div>
                        Profile pic here
                    </div>
                    <div>
                        <div>Name:</div>
                        <div>{user?.salutation.title}. {user?.forename} {user?.otherNames} {user?.lastname}</div>
                    </div>
                    <div>username</div>
                </Section>
                <Section title="Roles">
                </Section>
                <Section title="Contacts">
                </Section>
                <Section title="Addresses">
                </Section>
                <Section title="Bank Accounts">
                </Section>
            </div>
        </div>
    )
}