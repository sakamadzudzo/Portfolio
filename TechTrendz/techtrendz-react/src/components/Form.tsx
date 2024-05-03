import { ReactNode } from "react"

const Form = ({
    className,
    children
}: {
    className?: string
    children?: ReactNode
}) => {
    return <div className={`h-full w-full overflow-hidden ${className} flex flex-col`}>
        {children}
    </div>
}

export default Form;