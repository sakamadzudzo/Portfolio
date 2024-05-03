const FormInput = ({
    className,
    label
}: {
    className?: string
    label?: string
}) => {
    return <div className="relative">
        <input className={`border border-t-0 rounded-tl-none borders bg-transparent rounded-md focus:outline-picton-500 px-3 text-white dark:text-picton-500 ${className}`} />
        <div className="absolute -top-3 text-xs text-white dark:text-picton-500">{label}</div>
    </div>
}

export default FormInput;