const FormInput = ({
    className,
    label,
    autoFocus,
    onChange,
    value,
    id,
    name,
    type,
    placeholder,
    disabled,
    returnEvent
}: {
    className?: string
    label?: string
    autoFocus?: boolean
    onChange: Function
    value: string | number,
    id?: string,
    name?: string,
    type?: string,
    placeholder?: string,
    disabled?: boolean,
    returnEvent?: boolean
}) => {
    return (
        <div className={`relative focus-within:dark:text-dark-600 focus-within:text-light-600 ${type === "checkbox" && 'border border-t-0 rounded-tl-none borders bg-transparent rounded-md px-3 focus:border-light-600 dark:focus:border-dark-600'}`}>
            <input className={`border border-t-0 rounded-tl-none borders bg-transparent rounded-md px-3 focus:border-light-600 dark:focus:border-dark-600 autofill:!text-dark-50 autofill:dark:!text-light-50 autofill:bg-light-50 autofill:dark:bg-dark-50 autofill:shadow-none text-ellipsis ${className}`} autoFocus={autoFocus} onChange={(e) => returnEvent ? onChange(e) : onChange(e.target.value)} value={value ? value : ""} id={id} name={name} type={type}
                placeholder={placeholder} disabled={disabled} />
            <div className="absolute -top-3 left-0.5 text-xs focus:italic text-inherit">{label}</div>
        </div>
    )
}

export default FormInput;