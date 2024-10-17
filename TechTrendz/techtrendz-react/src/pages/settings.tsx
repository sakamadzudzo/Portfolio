import { useSelector } from "react-redux"
import { AuthState } from "../components/utils/authSlice"
import { Role } from "../types/types"
import { useNavigate, useOutletContext } from "react-router-dom";
import { OverlayContextType } from "../components/Layout";
import { useEffect } from "react";

export const Settings = () => {
    const { setLoading, setEmpty } = useOutletContext<OverlayContextType>();
    const roles = useSelector((state: AuthState) => state.auth ? state.auth.roles : [] as Role[])
    const navigate = useNavigate()

    // setLoading(false)
    // setEmpty(false)

    useEffect(() => {
        document.title = 'TechBrandz - Home';
    }, []);

    useEffect(() => {
        if (!roles?.find((role) => role.name.toUpperCase() === 'ADMINISTRATOR')) {
            navigate("/")
        }
    }, [navigate, roles])

    return (
        <div className="wrapper flex-col">
            <div>{roles && roles[2].name}</div>
            <section className="">
                <h1>File Management</h1>
                <div className="btn-hollow w-fit px-3">Remove orphaned files</div>
            </section>
        </div>
    )
}