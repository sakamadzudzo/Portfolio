import { useEffect, useState } from "react"
import { BankAccount, SelectOption } from "../types/types"
import Form from "./Form"
import FormBody from "./FormBody"
import FormFooter from "./FormFooter"
import FormInput from "./FormInput"
import FormSelect from "./FormSelect"
import { Modal } from "./Modal"
import { toast } from "react-toastify"

export const AddBankAccountModal = ({
    close,
    addBankAccount,
    currentBankAccount,
    bankAccounts
}: {
    close: Function,
    addBankAccount: Function,
    currentBankAccount?: BankAccount,
    bankAccounts?: BankAccount[]
}) => {
    const [disableSave, setDisableSave] = useState(false)
    const [bankAccount, setBankAccount] = useState<BankAccount>({} as BankAccount)
    const [newBankAccount, setNewBankAccount] = useState<BankAccount>({} as BankAccount)

    const validateBankAccount = (value: string) => {
        if (Number(value)) {
            setNewBankAccount((prevState: any) => ({
                ...prevState,
                accountNumber: value
            }));
        } else {
            toast.error("Account number must be all digits")
        }
    }

    const setNewBankAccountChanges = (e: any) => {
        if (e.value) {
            const { name, value } = e as { name: string, value: SelectOption }
            setNewBankAccount((prevState: any) => ({
                ...prevState,
                [name]: bankAccounts?.find((account) => account.id === value.value)
            }));
        }
        else {
            const { name, value } = e.target as unknown as { name: string, value: string | SelectOption }
            setNewBankAccount((prevState: any) => ({
                ...prevState,
                [name]: value
            }));
        }
    }

    const addressesToOptions = (): SelectOption[] => {
        return bankAccounts ? bankAccounts
            .map((item) => { return { value: item?.id, label: makeLabel(item), description: item?.branchName + " - " + item?.bankName } })
            : [] as SelectOption[]
    }

    const makeLabel = (item: BankAccount) => {
        let label = ""
        if (item.bankName) label += item.bankName
        if (item.accountNumber) {
            label += label ? " - " + item.accountNumber : item.accountNumber
        }
        if (item.branchName) {
            label += (label ? " - " + item.branchName : item.branchName) + " branch"
        }
        return label
    }

    const addBankAccountToList = () => {
        addBankAccount(JSON.stringify(newBankAccount) !== JSON.stringify({} as BankAccount) ? newBankAccount : bankAccount)
        close(false)
    }

    const chooseBankAccount = (value: { name: string, value: SelectOption }) => {
        let selectedOption = bankAccounts?.find((addr) => addr.id === value.value.value)
        if (selectedOption) setBankAccount(selectedOption)
    }

    useEffect(() => {
        if (bankAccounts) {
            if (currentBankAccount) {
                if (bankAccounts.find((account) => JSON.stringify(account) === JSON.stringify(currentBankAccount))) {
                    setBankAccount(currentBankAccount)
                } else {
                    setNewBankAccount(currentBankAccount)
                }
            }
        }
    }, [bankAccounts, currentBankAccount])

    useEffect(() => {
        if (newBankAccount.accountNumber && newBankAccount.bankName && newBankAccount.branchName) {
            setDisableSave(false)
        } else if (JSON.stringify(bankAccount) !== JSON.stringify({} as BankAccount)) {
            setDisableSave(false)
        } else {
            setDisableSave(true)
        }
    }, [newBankAccount.accountNumber, newBankAccount.bankName, newBankAccount.branchName, bankAccount])

    return (
        <>
            <Modal close={close} className="flex justify-center pb-5 px-2">
                <Form className="h-full w-full md:w-96 landscape:w-96">
                    <FormBody className="flex flex-col gap-5 pt-5">
                        <div className={`w-full flex flex-col gap-5 border rounded-md p-5 relative`}>
                            <div className="absolute left-1 -top-2.5 text-xs background px-1">Pick</div>
                            <FormSelect id="address" name="address" className="w-full" label="BankAccount" onChange={chooseBankAccount} value={{ value: bankAccount.id, label: makeLabel(bankAccount), description: bankAccount?.branchName + " - " + bankAccount?.bankName }} placeholder="BankAccount..."
                                options={addressesToOptions()} clearable={true} searchable={true} disabled={JSON.stringify(newBankAccount) !== JSON.stringify({} as BankAccount)} key={`address`} returnEvent={true} />
                        </div>
                        <div className="w-full flex justify-center">Or</div>
                        <div className="w-full flex flex-col gap-5 border rounded-md p-5 relative">
                            <div className="absolute left-1 -top-2.5 text-xs background px-1">Create</div>
                            <FormInput id="accountNumber" name="accountNumber" className="w-full" type="text" label="Account Number" onChange={(value: string) => { validateBankAccount(value) }} value={newBankAccount.accountNumber} autoFocus={true} placeholder="Account Number..." />
                    <FormInput id="bankName" name="bankName" className="w-full" type="text" label="Bank Name" onChange={setNewBankAccountChanges} value={newBankAccount.bankName} placeholder="Bank Name..." />
                    <FormInput id="branchName" name="branchName" className="w-full" type="text" label="Branch Name" onChange={setNewBankAccountChanges} value={newBankAccount.branchName} placeholder="Branch Name..." />
                    <FormInput id="ifscCode" name="ifscCode" className="w-full" type="text" label="IFSC Code" onChange={setNewBankAccountChanges} value={newBankAccount.ifscCode} placeholder="IFSC Code..." />
                            <div className="w-full flex justify-end">
                                <div className="text-xs underline hover:font-medium cursor-pointer" onClick={() => { setNewBankAccount({} as BankAccount) }}>Clear</div>
                            </div>
                        </div>
                    </FormBody>
                    <FormFooter className="justify-end">
                        <button className={`btn-hollow`} onClick={() => { close(false) }}>Cancel</button>
                        <button className={`btn-hollow`} disabled={disableSave} onClick={async () => { await addBankAccountToList(); }}> Add</button>
                        {/* <button className={`btn-hollow`} onClick={() => getPrincipal()}> Auth</button> */}
                    </FormFooter>
                </Form>
            </Modal>
        </>
    )
}