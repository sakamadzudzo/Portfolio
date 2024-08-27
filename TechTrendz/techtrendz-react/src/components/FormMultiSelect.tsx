import { useCombobox } from 'downshift'
import { useEffect, useState } from 'react'
import { IconClose } from './icons/IconClose'
import { SelectOption } from '../types/types'

const FormMultiSelect = ({
    values,
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
    values: SelectOption[]
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
    const [selectedItems, setSelectedItems] = useState<SelectOption[]>(values)
    const [inputValue, setInputValue] = useState("");

    const getOptionsFilter = (inputValue: string) => {
        const lowerCasedInputValue = inputValue.toLowerCase()

        return function optionsFilter(option: SelectOption) {
            return (
                option.label.toLowerCase().includes(lowerCasedInputValue) ||
                option.description?.toLowerCase().includes(lowerCasedInputValue)
            )
        }
    }

    const inputPlaceholder = () => {
        return selectedItems.length ? `${selectedItems.length} options selected` : 'Select an option'
    }

    const {
        isOpen,
        getToggleButtonProps,
        getLabelProps,
        getMenuProps,
        getInputProps,
        getItemProps,
        highlightedIndex,
        setInputValue: downshiftSetInputValue,
    } = useCombobox({
        items,
        itemToString,
        inputValue,
        selectedItem: null,
        onIsOpenChange: ({ isOpen, selectedItem: newSelectedItem }) => {
            if (!isOpen) {
                downshiftSetInputValue(inputPlaceholder())
                setInputValue(inputPlaceholder())
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
            if (!newSelectedItem) {
                return
            }

            const itemAtIndex = selectedItems.find(item => item.value === newSelectedItem.value)
            const index = itemAtIndex ? selectedItems.indexOf(itemAtIndex) : -1
            let newSelection: SelectOption[] = []
            if (index >= 0) {
                newSelection = selectedItems.includes(newSelectedItem) ?
                    [
                        ...selectedItems.slice(0, index),
                        ...selectedItems.slice(index + 1),
                    ] : selectedItems
            } else {
                newSelection = [...selectedItems, newSelectedItem]
            }
            setSelectedItems(newSelection)

            if (returnEvent) {
                onChange({ name: name, value: newSelection })
            } else {
                onChange(newSelection)
            }
            setInputValue(inputPlaceholder)
        },
        stateReducer: (state, actionAndChanges) => {
            const {changes, type} = actionAndChanges
            switch (type) {
              case useCombobox.stateChangeTypes.InputKeyDownEnter:
              case useCombobox.stateChangeTypes.ItemClick:
                return {
                  ...changes,
                  isOpen: true, // keep menu open after selection.
                  highlightedIndex: state.highlightedIndex,
                  inputValue: '', // don't add the item string as input value at selection.
                }
              case useCombobox.stateChangeTypes.InputBlur:
                return {
                  ...changes,
                  inputValue: '', // don't add the item string as input value at selection.
                }
              default:
                return changes
            }
          },
    })

    const showClearIcon = () => {
        if (!clearable) return false
        if (inputValue === "") return false
        if (inputValue === undefined) return false
        if (JSON.stringify(selectedItems) === JSON.stringify(values) && !isOpen) return false
        return true
    }

    useEffect(() => {
        // setInputValue(inputPlaceholder())
        // downshiftSetInputValue("")
        setSelectedItems(values)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values]);

    useEffect(() => {
        setItems(options)
    }, [options])

    useEffect(() => {
        if (!isOpen) {
            downshiftSetInputValue(inputPlaceholder())
            setInputValue(inputPlaceholder())
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
                    <div className={`absolute ${!values.length ? 'top-0' : 'top-1'} right-3 border-inherit text-inherit`}>&#8595;</div>
                    <div className={`${!values.length && 'italic font-extralight text-sm'} border-inherit text-inherit`}>{values.length ? inputPlaceholder() : placeholder}</div>
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
                    {showClearIcon() && <div className="absolute h-4 w-4 top-1.5 right-9 cursor-pointer icon"
                        onClick={() => { setInputValue(""); setInputValue(inputPlaceholder()) }}>
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
                            className={`px-3 shadow-sm flex flex-col hover:bg-light-100 hover:dark:bg-dark-100 text-ellipsis ${selectedItems.length && selectedItems.includes(item) && 'bg-light-200/50 dark:bg-dark-100/60'} ${index === options.length ? '' : 'border-b'}`}
                            key={item.value}
                            {...getItemProps({ item, index })}
                        >
                            <span className={`${selectedItems.length && selectedItems.includes(item) && 'font-medium'} `}>{item.label}</span>
                            <span className={`text-sm ${selectedItems.length && selectedItems.includes(item) && 'font-medium'}`}>{item.description}</span>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default FormMultiSelect
