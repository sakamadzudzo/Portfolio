import Select from 'react-select'
import makeAnimated from 'react-select/animated'

const animatedComponents = makeAnimated()

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
    options,
    size,
    disabled,
    clearable,
    searchable
}: {
    className?: string
    label?: string
    autoFocus?: boolean
    onChange: Function
    value: SelectOption
    id?: string,
    name?: string,
    type?: string,
    placeholder?: string,
    options: SelectOption[],
    size?: number,
    disabled?: boolean,
    clearable?: boolean,
    searchable?: boolean
}) => {
    return (
        <div className="relative focus-within:dark:text-dark-600 focus-within:text-light-600">
            {/* <select className={`border border-t-0 rounded-tl-none borders bg-transparent rounded-md px-3 focus:border-light-600 dark:focus:border-dark-600 autofill:!text-dark-50 autofill:dark:!text-light-50 autofill:bg-light-50 autofill:dark:bg-dark-50 autofill:shadow-none text-ellipsis ${className}`}
                autoFocus={autoFocus} onChange={(e) => onChange(e.target.value)} value={value} id={id} name={name} size={size}>
                {placeholder && <option value={0} label={placeholder} className="text-dark-50 dark:text-light-50 bg-light-50 dark:bg-dark-50 hover:bg-light-500 dark:hover:bg-dark-500" />}
                {options && options.map(item =>
                    <option value={item.value} label={item.label} className="text-dark-50 dark:text-light-50 bg-light-50 dark:bg-dark-50 selection:!bg-light-500 dark:selection:!bg-dark-500" />
                )}
            </select> */}
            <Select className={`border border-t-0 rounded-tl-none borders bg-transparent rounded-md px-3 focus:border-light-600 dark:focus:border-dark-600 autofill:!text-dark-50 autofill:dark:!text-light-50 autofill:bg-light-50 autofill:dark:bg-dark-50 autofill:shadow-none text-ellipsis ${className}`}
                isClearable={clearable} isSearchable={searchable} isDisabled={disabled} pageSize={size} onChange={(e) => onChange(e)} id={id} name={name} autoFocus={autoFocus}
                value={value} options={options} components={animatedComponents} classNamePrefix="select" />
            <div className="absolute -top-3 left-0.5 text-xs focus:italic text-inherit">{label}</div>
        </div>
    )
}

export default FormSelect