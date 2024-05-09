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
        <div className="relative focus-within:dark:text-dark-600 focus-within:text-light-600">
            <input className={`border border-t-0 rounded-tl-none borders bg-transparent rounded-md px-3 focus:border-light-600 dark:focus:border-dark-600 ${className}`} autoFocus={autoFocus} onChange={(e) => onChange(e.target.value)} value={value} />
            <div className="absolute -top-3 left-0.5 text-xs focus:italic">{label}</div>
        </div>
    )
}

export default FormInput;