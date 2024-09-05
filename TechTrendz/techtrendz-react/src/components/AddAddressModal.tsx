import { useEffect, useState } from "react"
import { Address, SelectOption } from "../types/types"
import Form from "./Form"
import FormBody from "./FormBody"
import FormFooter from "./FormFooter"
import FormInput from "./FormInput"
import FormSelect from "./FormSelect"
import { Modal } from "./Modal"

export const AddAddressModal = ({
    close,
    addAddres,
    currentAddress,
    addresses
}: {
    close: Function,
    addAddres: Function,
    currentAddress?: Address,
    addresses?: Address[]
}) => {
    const [disableSave, setDisableSave] = useState(false)
    const [address, setAddress] = useState<Address>({} as Address)
    const [newAddress, setNewAddress] = useState<Address>({} as Address)

    const setNewAddressChanges = (e: any) => {
        if (e.value) {
            const { name, value } = e as { name: string, value: SelectOption }
            setNewAddress((prevState: any) => ({
                ...prevState,
                [name]: addresses?.find((addr) => addr.id === value.value)
            }));
        }
        else {
            const { name, value } = e.target as unknown as { name: string, value: string | SelectOption }
            setNewAddress((prevState: any) => ({
                ...prevState,
                [name]: value
            }));
        }
    }

    const addressesToOptions = (): SelectOption[] => {
        return addresses ? addresses
            .map((item) => { return { value: item?.id, label: makeLabel(item), description: item?.country } })
            : [] as SelectOption[]
    }

    const makeLabel = (item: Address) => {
        let label = ""
        if (item.houseNumber) label += item.houseNumber
        if (item.street) {
            label += label ? " - " + item.street : item.street
        }
        if (item.line1 && item.street !== item.line1) {
            label += label ? " - " + item.line1 : item.line1
        }
        if (item.line2) {
            label += label ? " - " + item.line2 : item.line2
        }
        if (item.city) {
            label += label ? " - " + item.city : item.city
        }
        return label
    }

    const addAddressToList = () => {
        addAddres(JSON.stringify(newAddress) !== JSON.stringify({} as Address) ? newAddress : address)
        close(false)
    }

    const chooseAddress = (value: { name: string, value: SelectOption }) => {
        let selectedOption = addresses?.find((addr) => addr.id === value.value.value)
        if (selectedOption) setAddress(selectedOption)
    }

    useEffect(() => {
        if (addresses) {
            if (currentAddress) {
                if (addresses.find((addr) => JSON.stringify(addr) === JSON.stringify(currentAddress))) {
                    setAddress(currentAddress)
                } else {
                    setNewAddress(currentAddress)
                }
            }
        }
    }, [addresses, currentAddress])

    useEffect(() => {
        if (newAddress.houseNumber && newAddress.city && newAddress.country) {
            setDisableSave(false)
        } else if (JSON.stringify(address) !== JSON.stringify({} as Address)) {
            setDisableSave(false)
        } else {
            setDisableSave(true)
        }
    }, [newAddress.houseNumber, newAddress.city, newAddress.country, address])

    return (
        <>
            <Modal close={close} className="flex justify-center pb-5 px-2">
                <Form className="h-full w-full md:w-96 landscape:w-96">
                    <FormBody className="flex flex-col gap-5 pt-5">
                        <div className={`w-full flex flex-col gap-5 border rounded-md p-5 relative`}>
                            <div className="absolute left-1 -top-2.5 text-xs background px-1">Pick</div>
                            <FormSelect id="address" name="address" className="w-full" label="Address" onChange={chooseAddress} value={{ value: address.id, label: makeLabel(address), description: address?.country }} placeholder="Address..."
                                options={addressesToOptions()} clearable={true} searchable={true} disabled={JSON.stringify(newAddress) !== JSON.stringify({} as Address)} key={`address`} returnEvent={true} />
                        </div>
                        <div className="w-full flex justify-center">Or</div>
                        <div className="w-full flex flex-col gap-5 border rounded-md p-5 relative">
                            <div className="absolute left-1 -top-2.5 text-xs background px-1">Create</div>
                            <FormInput id="houseNumber" name="houseNumber" className="w-full" type="text" label="House Number" onChange={setNewAddressChanges} value={newAddress.houseNumber} autoFocus={true} placeholder="House Number..." returnEvent />
                            <FormInput id="street" name="street" className="w-full" type="text" label="Street" onChange={setNewAddressChanges} value={newAddress.street} placeholder="Street..." returnEvent />
                            <FormInput id="line1" name="line1" className="w-full" type="text" label="Line 1" onChange={setNewAddressChanges} value={newAddress.line1} placeholder="Line 1..." returnEvent />
                            <FormInput id="line2" name="line2" className="w-full" type="text" label="Line 2" onChange={setNewAddressChanges} value={newAddress.line2} placeholder="Line 2..." returnEvent />
                            <FormInput id="city" name="city" className="w-full" type="text" label="City" onChange={setNewAddressChanges} value={newAddress.city} placeholder="City..." returnEvent />
                            <FormInput id="state" name="state" className="w-full" type="text" label="State" onChange={setNewAddressChanges} value={newAddress.state} placeholder="State..." returnEvent />
                            <FormInput id="province" name="province" className="w-full" type="text" label="Province" onChange={setNewAddressChanges} value={newAddress.province} placeholder="Province..." returnEvent />
                            <FormInput id="country" name="country" className="w-full" type="text" label="Country" onChange={setNewAddressChanges} value={newAddress.country} placeholder="Country..." returnEvent />
                            <FormInput id="postalCode" name="postalCode" className="w-full" type="text" label="Postal Code" onChange={setNewAddressChanges} value={newAddress.postalCode} placeholder="Postal Code..." returnEvent />
                            <div className="w-full flex justify-end">
                                <div className="text-xs underline hover:font-medium cursor-pointer" onClick={() => { setNewAddress({} as Address) }}>Clear</div>
                            </div>
                        </div>
                    </FormBody>
                    <FormFooter className="justify-end">
                        <button className={`btn-hollow`} onClick={() => { close(false) }}>Cancel</button>
                        <button className={`btn-hollow`} disabled={disableSave} onClick={async () => { await addAddressToList(); }}> Add</button>
                        {/* <button className={`btn-hollow`} onClick={() => getPrincipal()}> Auth</button> */}
                    </FormFooter>
                </Form>
            </Modal>
        </>
    )
}