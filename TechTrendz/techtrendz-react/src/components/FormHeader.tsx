import { ReactNode } from "react"

const FormHeader = ({
    className,
    children
}: {
    className?: string
    children?: ReactNode
}) => {
    return <div className={`h-fit w-full borders ${className} `}>
        {children}
    </div>
}

export default FormHeader;