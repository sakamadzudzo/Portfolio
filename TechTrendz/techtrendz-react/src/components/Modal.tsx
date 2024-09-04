import { ReactNode } from "react";
import { IconClose } from "./icons/IconClose";

export const Modal = ({
    children,
    close,
    className
}: {
    children?: ReactNode,
    close: Function,
    className?: string
}) => {
    return (
        <>
            <div className="absolute top-0 left-0 h-full w-full bg-light-50 dark:bg-dark-50 z-40 opacity-85 dark:opacity-70"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-light-50 dark:bg-dark-50 overflow-hidden z-40 shadow-inherit shadow-md rounded-r-md border-t">
                <div className={`w-full h-full relative ${className}`}>
                    <button className="absolute top-0.5 right-0.5 w-6 h-6 icon hover:scale-105 hover:fill-dark-100 hover:dark:fill-light-100" onClick={() => { close(false) }}>
                        <IconClose className="" />
                    </button>
                    {children}
                </div>
            </div>
        </>
    )
}