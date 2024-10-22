import { useSelector } from "react-redux"
import { AuthState } from "../components/utils/authSlice"
import { Role } from "../types/types"
import { useNavigate, useOutletContext } from "react-router-dom";
import { OverlayContextType } from "../components/Layout";
import { useEffect } from "react";
import { Section } from "../components/Section";
import { removeOrphanedFiles as removeOldFiles } from "../components/service/fileService";

export const Settings = () => {
    const token = useSelector((state: AuthState) => state.auth ? state.auth.token : "")
    const { setLoading, setEmpty } = useOutletContext<OverlayContextType>();
    const roles = useSelector((state: AuthState) => state.auth ? state.auth.roles : [] as Role[])
    const navigate = useNavigate()

    // setLoading(false)
    // setEmpty(false)

    const removeOrphanedFiles = async () => {
        setLoading(true)
        await removeOldFiles(token!)
        setLoading(false)
    }

    useEffect(() => {
        document.title = 'TechBrandz - Home';
    }, []);

    useEffect(() => {
        if (!roles?.find((role) => role.name.toUpperCase() === 'ADMINISTRATOR')) {
            navigate("/")
        }
    }, [navigate, roles])

    // Must remove later on
    useEffect(() => {
        setEmpty(false)
    }, [setEmpty])

    return (
        <div className="wrapper flex-col">
            <div className="h-full w-full md:w-96 landscape:w-96">
                <Section title="File Management">
                    <div className="btn-hollow w-fit px-3" onClick={removeOrphanedFiles}>Remove orphaned files</div>
                </Section>
                <Section title="Roles" className="mt-3">
                    <ul className="list-disc list-inside">
                        {roles && roles.map((role, index) =>
                            <li className="list-item">{role.name}</li>
                        )}
                    </ul>
                </Section>
            </div>
        </div>
    )
}