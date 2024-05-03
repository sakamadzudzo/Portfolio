import { ReactNode } from "react"

const FormFooter = ({
    className,
    children
}: {
    className?: string
    children?: ReactNode
}) => {
    return <div className={`h-fit w-full borders flex gap-1 ${className}`}>
        {children}
    </div>
}

export default FormFooter;