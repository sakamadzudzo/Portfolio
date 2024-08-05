import { useState } from "react";

export const CartItemModal = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="absolute top-0 left-0 h-full w-full bg-light-50 dark:bg-dark-50 z-40 opacity-85 dark:opacity-70" onClick={() => { setOpen(!open); }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-light-50 dark:bg-dark-50 overflow-hidden z-40 shadow-inherit shadow-md rounded-r-md border-t">
                <div>Modal here</div>
            </div>
        </>
    )
}