import { useCombobox, UseComboboxSelectedItemChange } from 'downshift'
import { useCallback, useEffect, useState } from 'react'
import { IconClose } from './icons/IconClose'
import { SelectOption } from '../types/types'
import { Chip } from './Chip'

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
    returnEvent,
    withChips,
    chipsToShow
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
    returnEvent?: boolean,
    withChips?: boolean,
    chipsToShow?: number
}) => {
    const itemToString = (item: SelectOption | null) => {
        return item ? item.label : ''
    }

    const [items, setItems] = useState<SelectOption[]>(options)
    const [selectedItems, setSelectedItems] = useState<SelectOption[]>(values)
    const [inputValue, setInputValue] = useState("");
    const [inputPlaceholder, setInputPlaceholder] = useState("")

    const getOptionsFilter = (inputValue: string) => {
        const lowerCasedInputValue = inputValue.toLowerCase()

        return function optionsFilter(option: SelectOption) {
            return (
                option.label.toLowerCase().includes(lowerCasedInputValue) ||
                option.description?.toLowerCase().includes(lowerCasedInputValue)
            )
        }
    }

    const itemInList = useCallback((value: SelectOption) => {
        return selectedItems.find(item => item.value === value.value)
    }, [selectedItems])

    const selectedItemsIncludes = (value: SelectOption) => {
        return !!selectedItems.find(item => item.value === value.value)
    }

    const updateInputPlaceholder = useCallback(() => {
        setInputPlaceholder(selectedItems && selectedItems.length ? `${selectedItems.length} options selected` : placeholder!)
    }, [placeholder, selectedItems])

    const removeItem = (index: number) => {
        const newSelection = [
            ...selectedItems.slice(0, index),
            ...selectedItems.slice(index + 1),
        ]
        setSelectedItems(newSelection);
        setInputPlaceholder(newSelection.length ? `${newSelection.length} options selected` : placeholder!)
        setInputValue(newSelection.length ? `${newSelection.length} options selected` : placeholder!);
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
        selectedItem: null,
        onIsOpenChange: ({ isOpen, selectedItem: newSelectedItem }) => {
            if (!isOpen) {
                downshiftSetInputValue(inputPlaceholder)
                setInputValue(inputPlaceholder)
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
        onSelectedItemChange: useCallback((newSelectedItem: UseComboboxSelectedItemChange<SelectOption>) => {
            if (!newSelectedItem) {
                return
            }

            const itemAtIndex = itemInList(newSelectedItem.selectedItem)
            const index = itemAtIndex ? selectedItems.indexOf(itemAtIndex) : -1
            let newSelection: SelectOption[] = []
            if (index > 0) {
                newSelection = [
                    ...selectedItems.slice(0, index),
                    ...selectedItems.slice(index + 1),
                ]
            } else if (index === 0) {
                newSelection = [...selectedItems.slice(1)]
            } else {
                newSelection = [...selectedItems, newSelectedItem.selectedItem]
            }
            setSelectedItems(newSelection)

            if (returnEvent) {
                onChange({ name: name, value: newSelection })
            } else {
                onChange(newSelection)
            }
            setInputValue("")
        }, [itemInList, name, onChange, returnEvent, selectedItems]),
        stateReducer: (state, actionAndChanges) => {
            const { changes, type } = actionAndChanges
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
        if (inputValue === inputPlaceholder) return false
        return true
    }

    const remainder = () => {
        return chipsToShow ?
            (selectedItems.length > 0 ? selectedItems.length - (chipsToShow) : 0)
            : 0
    }

    const optionsToShow = () => {
        return chipsToShow ? selectedItems.slice(0, chipsToShow) : selectedItems
    }

    useEffect(() => {
        setSelectedItems(values)
        setInputPlaceholder(values && values.length ? `${values.length} options selected` : placeholder!)
        setInputValue(values && values.length ? `${values.length} options selected` : placeholder!);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values]);

    useEffect(() => {
        setItems(options)
    }, [options])

    useEffect(() => {
        if (!isOpen) {
            downshiftSetInputValue(inputPlaceholder)
            setInputValue(inputPlaceholder)
        }
        if (isOpen) {
            setInputValue("")
            downshiftSetInputValue("")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen])

    useEffect(() => {
        updateInputPlaceholder()
    }, [updateInputPlaceholder, placeholder, selectedItems])

    return (
        <div className="relative focus-within:dark:text-dark-600 focus-within:text-light-600" id={id}>
            {disabled && <div className="cursor-not-allowed border-light-200 dark:border-dark-200 text-light-200 dark:text-dark-200">
                <label className="absolute -top-3 left-0.5 text-xs focus:italic cursor-not-allowed border-inherit text-inherit">{label}</label>
                <div className={`bg-transparent px-3 text-ellipsis py-0.5 flex justify-between border-inherit text-inherit ${className} ${isOpen && 'rounded-b-none'}`}>
                    <div className={`absolute ${!values.length ? 'top-0' : 'top-1'} right-3 border-inherit text-inherit`}>&#8595;</div>
                    <div className={`${!values.length && 'italic font-extralight text-sm'} border-inherit text-inherit`}>{values.length ? inputPlaceholder : placeholder}</div>
                </div>
            </div>}
            <div className={`w-full flex flex-col gap-1 border borders border-t-0 rounded-tl-none rounded-md ${disabled && 'hidden'}`}>
                <label className="absolute -top-3 left-0.5 text-xs focus:italic text-inherit" {...getLabelProps()}>{label}</label>
                {withChips && optionsToShow() && optionsToShow().length > 0 && <div className="px-3 py-1 flex flex-wrap gap-0.5 text-xs">
                    {optionsToShow().map((item, index) => <Chip key={item.value} data={item.label} tooltip={item.description} onClick={() => { removeItem(index) }} removeable />)}
                </div>}
                {withChips && optionsToShow() && remainder() > 0 && <div className="px-3 py-1 flex flex-wrap gap-0.5 text-xs">
                    <Chip data={"+" + remainder()} tooltip={"Extra items"} variant={{}} key={`extraItems-` + name} extraItems />
                </div>}
                <div className={`bg-transparent px-3 text-ellipsis py-0.5 flex justify-between cursor-pointer ${className} ${isOpen && 'rounded-b-none'}`}>
                    <input
                        id={id + '-input'} name={name} placeholder={placeholder}
                        className={`w-full bg-inherit text-inherit relative pr-5 ${!searchable ? 'hidden cursor-pointer' : 'cursor-text'}`}
                        {...getInputProps()} autoFocus={autoFocus} disabled={!searchable}
                    />
                    {!searchable && <div className={`w-full bg-inherit text-inherit relative pr-5 cursor-pointer ${!inputValue && 'italic font-extralight text-sm'}`}>{inputValue ? inputValue : placeholder}</div>}
                    {showClearIcon() && <div className="h-4 w-4 mt-1 cursor-pointer icon"
                        onClick={() => { setInputValue(""); setInputValue(inputPlaceholder) }}>
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
                            className={`px-3 shadow-sm flex gap-1 items-center hover:bg-light-100 hover:dark:bg-dark-100 text-ellipsis cursor-pointer ${selectedItems.length && selectedItems.includes(item) && 'bg-light-200/50 dark:bg-dark-100/60'} ${index === options.length ? '' : 'border-b'}`}
                            key={item.value}
                            {...getItemProps({ item, index })}
                        >
                            <input
                                type="checkbox"
                                className="h-5 w-5 flex items-center border"
                                checked={selectedItemsIncludes(item)}
                                value={item.label}
                                onChange={() => null}
                            />
                            <div className="flex flex-col h-full">
                                <span className={`${selectedItems.length && selectedItemsIncludes(item) && 'font-medium'} `}>{item.label}</span>
                                <span className={`text-sm ${selectedItems.length && selectedItemsIncludes(item) && 'font-medium'}`}>{item.description}</span>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default FormMultiSelect
