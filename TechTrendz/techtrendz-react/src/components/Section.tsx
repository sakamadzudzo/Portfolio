import { ReactNode } from "react"

export const Section = ({
    title,
    className,
    children
}: {
    title?: string,
    className?: string,
    children?: ReactNode
}) => {
    return (
        <div className={`${className}`}>
            {title && <h2 className="border-b font-medium">{title}</h2>}
            {children}
        </div>
    )
}