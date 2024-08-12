import { useEffect, useState } from "react"
import { IconMenuOpen } from "./icons/IconMenuOpen"
import { IconMenuClose } from "./icons/IconMenuClose"
import { NavLink, useLocation } from "react-router-dom"

export const Menu = ({
    className
}: {
    className?: string
}) => {
    const [open, setOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setOpen(false)
    }, [location])

    return (
        <>
            <button className={`absolute top-0.5 left-0.5 focus:outline-none z-40 cursor-pointer ${className}`} onClick={() => { setOpen(!open); }}>
                <div className="flex h-7 aspect-square border rounded-lg rounded-tl-none overflow-hidden p-1">
                    {open ?
                        < IconMenuClose /> : <IconMenuOpen />}
                </div>
            </button>
            {open ?
                <>
                    <div className="absolute top-0 left-0 h-full w-full bg-light-50 dark:bg-dark-50 z-40 opacity-85 dark:opacity-70" onClick={() => { setOpen(!open); }}></div>
                    <div className="absolute top-0 left-0 h-full w-[50%] md:w-[40%] lg:w-[30%] xl:w-[20%] 2xl:w-[10%] bg-light-50 dark:bg-dark-50 overflow-hidden z-40 shadow-inherit shadow-md rounded-r-md">
                        <NavLink to={``} className="w-full pl-9 h-7 font-medium">TechBrandz</NavLink>
                        <div className="mt-8 ml-0.5 flex flex-col">
                            <NavLink to={`products`} className="menu-link" >Products</NavLink>
                            <NavLink to={`cart`} className="menu-link" >Cart</NavLink>
                            <NavLink to={`brandedit`} className="menu-link" >Add Brand</NavLink>
                            <NavLink to={`contacttypeedit`} className="menu-link" >Add Contact Type</NavLink>
                            <NavLink to={`orderstatusedit`} className="menu-link" >Add Order Status</NavLink>
                            <NavLink to={`producttypeedit`} className="menu-link" >Add Product Type</NavLink>
                            <NavLink to={`productstatusedit`} className="menu-link" >Add Product Status</NavLink>
                            <NavLink to={`roleedit`} className="menu-link" >Add Role</NavLink>
                            <NavLink to={`salutationedit`} className="menu-link" >Add Salutation</NavLink>
                            <NavLink to={`tagedit`} className="menu-link" >Add Tag</NavLink>
                            <NavLink to={`addressedit`} className="menu-link" >Add Address</NavLink>
                            <NavLink to={`bankaccountedit`} className="menu-link" >Add Bank Account</NavLink>
                        </div>
                    </div>
                </>
                : <></>}
        </>
    )
}