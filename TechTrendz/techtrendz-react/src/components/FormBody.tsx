import { ReactNode } from "react"

const FormBody = ({
    className,
    children
}: {
    className?: string
    children?: ReactNode
}) => {
    return <div className={`grow overflow-auto ${className}`}>
        {children}
    </div>
}

export default FormBody;