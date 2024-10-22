import { IconMoon } from "./icons/IconMoon"
import { IconSun } from "./icons/IconSun"
import { Menu } from "./Menu"
import { NavLink, useLocation } from "react-router-dom"
import { AuthState } from "./utils/authSlice"
import { useSelector } from "react-redux"

export const Header = ({
    dark,
    setDark
}: {
    dark: boolean
    setDark: Function
}) => {
    const location = useLocation();
    const isAuthenticated = useSelector((state: AuthState) => state.auth ? state.auth.isAuthenticated : false)

    return (
        <div className="w-full flex justify-center items-center h-7">
            {isAuthenticated && location.pathname !== '/login' ? <>
                <Menu className="h-7" />
                <NavLink to={`/home`} className="font-medium" >TechBrandz</NavLink>
            </> : <>
                {['/about', '/'].includes(location.pathname) && !isAuthenticated && <NavLink to={`login`} className="menu-link link absolute top-0.5 left-0.5">Login</NavLink>}
            </>}
            <button className="absolute top-0.5 right-0.5 focus:outline-none z-50" onClick={() => setDark(!dark)}>
                <div className="flex h-7 aspect-square border rounded-lg rounded-tr-none overflow-hidden">
                    {!dark ?
                        <div className="bg-transparent dark:bg-dark-100">
                            <IconMoon className="h-full py-1 px-1 -rotate-45" />
                        </div> :
                        <div className="bg-light-200 dark:bg-transparent">
                            <IconSun className="h-full py-1 px-1" />
                        </div>}
                </div>
            </button>
        </div>
    )
}