export type SelectOption = { value: string | number, label: string }

const FormSelect = ({
    className,
    label,
    autoFocus,
    onChange,
    value,
    id,
    name,
    type,
    placeholder,
    options
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
    options: SelectOption[]
}) => {
    return (
        <div>
            <select autoFocus={autoFocus} onChange={(e) => onChange(e.target.value)} value={value} id={id} name={name}>
                {placeholder && <option value={0} label={placeholder} />}
                {options && options.map(item =>
                    <option value={item.value} label={item.label} />
                )}
            </select>
        </div>
    )
}

export default FormSelect