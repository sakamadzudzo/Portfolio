import { useSelector } from "react-redux"
import { AuthState } from "../components/utils/authSlice"
import { Role } from "../types/types"
import { useOutletContext } from "react-router-dom";
import { OverlayContextType } from "../components/Layout";
import { useEffect } from "react";

export const Settings = () => {
    const { setLoading, setEmpty } = useOutletContext<OverlayContextType>();
    const roles = useSelector((state: AuthState) => state.auth ? state.auth.roles : [] as Role[])

    // setLoading(false)
    // setEmpty(false)

    useEffect(() => {
        document.title = 'TechBrandz - Home';
    }, []);

    return (
        <div className="wrapper">
            <div>{roles && roles[0].name}</div>
            <div className="btn-hollow">Remove orphaned files</div>
        </div>
    )
}