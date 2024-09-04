import { useCallback, useEffect, useState } from "react"
import Form from "../components/Form"
import FormBody from "../components/FormBody"
import FormFooter from "../components/FormFooter"
import FormHeader from "../components/FormHeader"
import FormInput from "../components/FormInput"
import { useSelector } from "react-redux"
import { AuthState } from "../components/utils/authSlice"
import { getBankAccountById, saveBankAccount } from "../components/service/bankAccountService"
import { useNavigate, useOutletContext, useParams } from "react-router-dom"
import { OverlayContextType } from "../components/Layout"
import { toast } from "react-toastify"

export const BankAccountEdit = () => {
    const token = useSelector((state: AuthState) => state.auth ? state.auth.token : "")
    const [disableSave, setDisableSave] = useState(false)
    const [accountNumber, setAccountNumber] = useState("")
    const [bankName, setBankName] = useState("")
    const [branchName, setBranchName] = useState("")
    const [ifscCode, setIfscCode] = useState("")
    const [dateTimeOpened, setDateTimeOpened] = useState("")
    const { id } = useParams()
    const navigate = useNavigate()
    const [header, setHeader] = useState("New BankAccount")
    const { setLoading, setEmpty } = useOutletContext<OverlayContextType>();

    const getBankAccount = useCallback(async () => {
        setLoading(true)
        let result = await getBankAccountById(token!, id ? Number(id) : 0)
        if (result) {
            setAccountNumber(result.accountNumber)
            setBankName(result.bankName)
            setBranchName(result.branchName)
            setIfscCode(result.ifscCode)
            setDateTimeOpened(result.dateTimeOpened)

        }
        setEmpty(!result)
        setLoading(false)
    }, [setLoading, token, id, setEmpty])

    const reset = () => {
        setAccountNumber("")
        setBankName("")
        setBranchName("")
        setIfscCode("")
        setDateTimeOpened("")
    }

    const validateBankAccount = (value: string) => {
        if (Number(value)) {
            setAccountNumber(value)
        } else {
            toast.error("Account number must be all digits")
        }
    }

    const save = async () => {
        setLoading(true)
        const dto = { id: id ? Number(id) : 0, accountNumber: accountNumber, bankName: bankName, branchName: branchName, ifscCode: ifscCode, dateTimeOpened: dateTimeOpened ? dateTimeOpened : null }
        let result = await saveBankAccount(token!, dto)
        if (result) {
            navigate("/bankaccountedit/" + result.id)
        }
        setLoading(false)
    }

    useEffect(() => {
        if (accountNumber && branchName && bankName) {
            setDisableSave(false)
        } else {
            setDisableSave(true)
        }
    }, [accountNumber, bankName, branchName])

    useEffect(() => {
        if (!id || id === "0") {
            document.title = 'TechBrandz - New Bank Account';
            setHeader("New BankAccount")
            reset()

        } else {
            document.title = 'TechBrandz - Edit Bank Account';
            getBankAccount()
            setHeader("Edit BankAccount")
        }
    }, [id, getBankAccount]);

    return (
        <div className="wrapper">
            <Form className="h-full w-full md:w-96 landscape:w-96">
                <FormHeader className="font-normal flex justify-center">
                    <>{header}</>
                </FormHeader>
                <FormBody className=" flex flex-col gap-5 pt-5">
                    <FormInput id="accountNumber" name="accountNumber" className="w-full" type="text" label="Account Number" onChange={(value: string) => { validateBankAccount(value) }} value={accountNumber} autoFocus={true} placeholder="Account Number..." />
                    <FormInput id="bankName" name="bankName" className="w-full" type="text" label="Bank Name" onChange={(value: string) => { setBankName(value) }} value={bankName} placeholder="Bank Name..." />
                    <FormInput id="branchName" name="branchName" className="w-full" type="text" label="Branch Name" onChange={(value: string) => { setBranchName(value) }} value={branchName} placeholder="Branch Name..." />
                    <FormInput id="ifscCode" name="ifscCode" className="w-full" type="text" label="IFSC Code" onChange={(value: string) => { setIfscCode(value) }} value={ifscCode} placeholder="IFSC Code..." />
                </FormBody>
                <FormFooter className="justify-end">
                    <button className={`btn-hollow`} onClick={() => { navigate(-1); }}>Cancel</button>
                    <button className={`btn-hollow`} disabled={disableSave} onClick={async () => { await save(); }}> Save</button>
                    {/* <button className={`btn-hollow`} onClick={() => getPrincipal()}> Auth</button> */}
                </FormFooter>
            </Form>
        </div>
    )
}