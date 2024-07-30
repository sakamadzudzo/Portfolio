import { useEffect, useState } from "react"
import { IconMoon } from "./icons/IconMoon"
import { IconSun } from "./icons/IconSun"
import { Menu } from "./Menu"
import { useLocation } from "react-router-dom"

export const Header = ({
    dark,
    setDark }: {
        dark: boolean
        setDark: Function
    }) => {
    const [isLogin, setIsLogin] = useState(false)
    const location = useLocation();

    useEffect(() => {
        setIsLogin(location.pathname !== '/login')
    }, [location])

    return (
        <div className="w-full flex justify-center items-center h-7">
            {isLogin ? <>
                <Menu className="h-7" />
                <div className="font-medium">TechBrandz</div>
            </> : <></>}
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