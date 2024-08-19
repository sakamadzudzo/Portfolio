import { useSelect } from 'downshift'

export type SelectOption = { value: string | number, label: string, description?: string }


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

    const itemToString = (item: SelectOption | null) => {
        return item ? item.label : ''
    }

    const {
        isOpen,
        selectedItem,
        getToggleButtonProps,
        getLabelProps,
        getMenuProps,
        highlightedIndex,
        getItemProps,
    } = useSelect({
        items: options,
        itemToString,
    })

    return (
        <div className="relative focus-within:dark:text-dark-600 focus-within:text-light-600">
            <div className={`w-full flex flex-col gap-1 ${className}`}>
                <label className="absolute -top-3 left-0.5 text-xs focus:italic text-inherit" {...getLabelProps()}>{label}</label>
                <div
                    className={`border border-t-0 rounded-tl-none borders bg-transparent rounded-md px-3 text-ellipsis py-0.5 flex justify-between cursor-pointer ${isOpen && 'rounded-b-none'}`}
                    {...getToggleButtonProps()}
                >
                    <span>{selectedItem ? selectedItem.label : 'Select an option...'}</span>
                    <span className="px-2">{isOpen ? <>&#8593;</> : <>&#8595;</>}</span>
                </div>
            </div>
            <ul
                className={`absolute w-full bg-inherit text-inherit border rounded-md rounded-t-none mt-1 shadow-md max-h-80 overflow-y-auto p-0 z-10 ${!isOpen && 'hidden'}`}
                {...getMenuProps()}
            >
                {(isOpen && !disabled) &&
                    options.map((item, index) => (
                        <li
                            className={`px-3 shadow-sm flex flex-col focus:border-light-600 dark:focus:border-dark-600 autofill:!text-dark-50 autofill:dark:!text-light-50 autofill:bg-light-50 autofill:dark:bg-dark-50 autofill:shadow-none text-ellipsis ${highlightedIndex === index && ''} ${selectedItem === item && 'active text-green-600'}`}
                            key={item.value}
                            {...getItemProps({ item, index })}
                        >
                            <span className='capitalize text-inherit'>{item.label}</span>
                            {item.description && <span className="text-sm">{item.description}</span>}
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default FormSelect