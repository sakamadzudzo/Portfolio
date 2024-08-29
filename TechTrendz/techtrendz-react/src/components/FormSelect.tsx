import { useCombobox } from 'downshift'
import { useEffect, useState } from 'react'
import { IconClose } from './icons/IconClose'
import { SelectOption } from '../types/types'

const FormSelect = ({
    value,
    className,
    label,
    autoFocus,
    onChange,
    id,
    name,
    placeholder,
    options,
    disabled,
    clearable,
    searchable,
    returnEvent
}: {
    value: SelectOption
    className?: string
    label?: string
    autoFocus?: boolean
    onChange: Function
    id?: string,
    name?: string,
    placeholder?: string,
    options: SelectOption[],
    disabled?: boolean,
    clearable?: boolean,
    searchable?: boolean,
    returnEvent?: boolean
}) => {
    const itemToString = (item: SelectOption | null) => {
        return item ? item.label : ''
    }

    const [items, setItems] = useState<SelectOption[]>(options)
    const [selectedItem, setSelectedItem] = useState<SelectOption>(value)
    const [inputValue, setInputValue] = useState(value.label || "");

    const getOptionsFilter = (inputValue: string) => {
        const lowerCasedInputValue = inputValue.toLowerCase()

        return function optionsFilter(option: SelectOption) {
            return (
                option.label.toLowerCase().includes(lowerCasedInputValue) ||
                option.description?.toLowerCase().includes(lowerCasedInputValue)
            )
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
        onIsOpenChange: ({ isOpen, selectedItem: newSelectedItem }) => {
            if (!isOpen) {
                downshiftSetInputValue(newSelectedItem ? newSelectedItem.label : selectedItem ? selectedItem.label : value.label ? value.label : "")
                setInputValue(newSelectedItem ? newSelectedItem.label : selectedItem ? selectedItem.label : value.label ? value.label : "")
            }
            if (isOpen) {
                setInputValue("")
                downshiftSetInputValue("")
                setItems(options.filter(getOptionsFilter(inputValue || '')))
            }
        },
        onInputValueChange: ({ inputValue }) => {
            if (isOpen) {
                setInputValue(inputValue || '');
                downshiftSetInputValue(inputValue || '');
                setItems(options.filter(getOptionsFilter(inputValue || '')))
            }
        },
        onSelectedItemChange: ({ selectedItem: newSelectedItem }) => {
            setSelectedItem(newSelectedItem)
            if (returnEvent) {
                onChange({ name: name, value: newSelectedItem })
            } else {
                onChange(newSelectedItem)
            }
            setInputValue(newSelectedItem ? newSelectedItem.label : "")
        },
    })

    const showClearIcon = () => {
        if (!clearable) return false
        if (inputValue === "") return false
        if (inputValue === undefined) return false
        if (inputValue === value.label && !isOpen) return false
        return true
    }

    useEffect(() => {
        setInputValue(value.label ? value.label : "")
        downshiftSetInputValue("")
        setSelectedItem(value)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    useEffect(() => {
        setItems(options)
    }, [options])

    useEffect(() => {
        if (!isOpen) {
            downshiftSetInputValue(selectedItem.label ? selectedItem.label : value.label ? value.label : "")
            setInputValue(selectedItem.label ? selectedItem.label : value.label ? value.label : "")
        }
        if (isOpen) {
            setInputValue("")
            downshiftSetInputValue("")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen])

    return (
        <div className="relative focus-within:dark:text-dark-600 focus-within:text-light-600" id={id}>
            {disabled && <div className="cursor-not-allowed border-light-200 dark:border-dark-200 text-light-200 dark:text-dark-200">
                <label className="absolute -top-3 left-0.5 text-xs focus:italic cursor-not-allowed border-inherit text-inherit">{label}</label>
                <div className={`border border-t-0 rounded-tl-none borders bg-transparent rounded-md px-3 text-ellipsis py-0.5 flex justify-between border-inherit text-inherit ${className} ${isOpen && 'rounded-b-none'}`}>
                    <div className={`absolute ${!value.label ? 'top-0' : 'top-1'} right-3 border-inherit text-inherit`}>&#8595;</div>
                    <div className={`${!value.label && 'italic font-extralight text-sm'} border-inherit text-inherit`}>{value.label ? value.label : placeholder}</div>
                </div>
            </div>}
            <div className={`w-full flex flex-col gap-1 ${disabled && 'hidden'}`}>
                <label className="absolute -top-3 left-0.5 text-xs focus:italic text-inherit" {...getLabelProps()}>{label}</label>
                <div className={`border border-t-0 rounded-tl-none borders bg-transparent rounded-md px-3 text-ellipsis py-0.5 flex justify-between cursor-pointer ${className} ${isOpen && 'rounded-b-none'}`}>
                    <input
                        id={id + '-input'} name={name} placeholder={placeholder}
                        className={`w-full bg-inherit text-inherit relative pr-5 ${!searchable ? 'hidden cursor-pointer' : 'cursor-text'}`}
                        {...getInputProps()} autoFocus={autoFocus} disabled={!searchable}
                    />
                    {!searchable && <div className={`w-full bg-inherit text-inherit relative pr-5 cursor-pointer ${!inputValue && 'italic font-extralight text-sm'}`}>{inputValue ? inputValue : placeholder}</div>}
                    {showClearIcon() && <div className="h-4 w-4 mt-1 cursor-pointer icon"
                        onClick={() => { setInputValue(""); setInputValue(value.label) }}>
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
                className={`absolute w-full bg-light-50 dark:bg-dark-50 text-inherit border rounded-md rounded-t-none mt-1 shadow-md max-h-80 overflow-y-auto p-0 z-10 ${!isOpen && 'hidden'}`}
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
