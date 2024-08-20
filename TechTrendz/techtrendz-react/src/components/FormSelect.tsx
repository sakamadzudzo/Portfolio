import { useCombobox } from 'downshift'
import { useState } from 'react'
import { IconClose } from './icons/IconClose'

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

    const [items, setItems] = useState(options)
    const [selectedItem, setSelectedItem] = useState<SelectOption>(value)
    const [inputValue, setInputValue] = useState(value.label)
    const [oldInputValue, setOldInputValue] = useState('')

    const getOptionsFilter = (inputValue: string) => {
        if (inputValue === undefined) inputValue = ""
        const lowerCasedInputValue = inputValue.toLowerCase()

        return function optionsFilter(option: SelectOption) {
            if (!inputValue) {
                return options
            } else {
                return (
                    option.label.toLowerCase().includes(lowerCasedInputValue) ||
                    option.description?.toLowerCase().includes(lowerCasedInputValue)
                )
            }
        }
    }

    const {
        isOpen,
        getToggleButtonProps,
        getLabelProps,
        getMenuProps,
        getInputProps,
        getItemProps,
        setInputValue: downshiftSetInputValue,
    } = useCombobox({
        items,
        itemToString,
        inputValue,
        selectedItem,
        onIsOpenChange({ selectedItem: newSelectedItem }) {
            if (!isOpen) {
                setOldInputValue(inputValue)
                downshiftSetInputValue("")
            }
            if (isOpen) {
                setInputValue(newSelectedItem ? newSelectedItem.label : oldInputValue)
                setOldInputValue("")
                downshiftSetInputValue(newSelectedItem ? newSelectedItem.label : oldInputValue)
            }
        },
        onInputValueChange({ inputValue }) {
            setInputValue(inputValue);
            setItems(items.filter(getOptionsFilter(inputValue)))
        },
        onSelectedItemChange: ({ selectedItem: newSelectedItem }) => {
            setSelectedItem(newSelectedItem)
            onChange(newSelectedItem)
        }
    })

    const showClearIcon = () => {
        if (inputValue === "") return false
        if (inputValue === undefined) return false
        if (inputValue === value.label && !isOpen) return false
        return true
    }

    return (
        <div className="relative focus-within:dark:text-dark-600 focus-within:text-light-600">
            <div className="w-full flex flex-col gap-1">
                <label className="absolute -top-3 left-0.5 text-xs focus:italic text-inherit" {...getLabelProps()}>{label}</label>
                <div className={`border border-t-0 rounded-tl-none borders bg-transparent rounded-md px-3 text-ellipsis py-0.5 flex justify-between cursor-pointer ${isOpen && 'rounded-b-none'}`}>
                    <input
                        placeholder="Select an option"
                        className="w-full bg-inherit text-inherit relative pr-5"
                        {...getInputProps()}
                    />
                    {showClearIcon() && <div className="absolute h-4 w-4 top-1.5 right-9 cursor-pointer"
                        onClick={() => { setInputValue(value.label) }}>
                        <IconClose className="" />
                    </div>}
                    <button
                        aria-label="toggle menu"
                        className="px-2"
                        type="button"
                        {...getToggleButtonProps()}
                    >
                        {isOpen ? <>&#8593;</> : <>&#8595;</>}
                    </button>
                </div>
            </div>
            <ul
                className={`absolute w-full bg-inherit text-inherit border rounded-md rounded-t-none mt-1 shadow-md max-h-80 overflow-y-auto p-0 z-10 ${!isOpen && 'hidden'}`}
                {...getMenuProps()}
            >
                {isOpen &&
                    items.map((item, index) => (
                        <li
                            className={`px-3 shadow-sm flex flex-col hover:bg-light-100 hover:dark:bg-dark-100 text-ellipsis ${JSON.stringify(selectedItem) === JSON.stringify(item) && 'bg-light-200/50 dark:bg-dark-100/60'} ${index === options.length ? '' : 'border-b'}`}
                            key={item.value}
                            {...getItemProps({ item, index })}
                        >
                            <span className={`${JSON.stringify(selectedItem) === JSON.stringify(item) && 'font-medium'} `}>{item.label}</span>
                            <span className={`text-sm ${JSON.stringify(selectedItem) === JSON.stringify(item) && 'font-medium'}`}>{item.description}</span>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default FormSelect