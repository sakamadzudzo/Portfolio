const FormInput = ({
    className,
    label,
    autoFocus,
    onChange,
    value
}: {
    className?: string
    label?: string
    autoFocus?: boolean
    onChange: Function
    value: string
}) => {
    return (
        <div className="relative text-white dark:text-picton-500 focus-within:dark:text-picton-600 focus-within:text-picton-300">
            <input className={`border border-t-0 rounded-tl-none borders bg-transparent rounded-md focus:outline-none px-3 text-white dark:text-picton-300 focus:border-picton-300 dark:focus:border-picton-300 ${className}`} autoFocus={autoFocus} onChange={(e) => onChange(e.target.value)} value={value} />
            <div className="absolute -top-3 left-0.5 text-xs focus:italic">{label}</div>
        </div>
    )
}

export default FormInput;