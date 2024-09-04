import { useCallback, useEffect, useState } from "react"
import Form from "../components/Form"
import FormBody from "../components/FormBody"
import FormFooter from "../components/FormFooter"
import FormHeader from "../components/FormHeader"
import FormInput from "../components/FormInput"
import { useSelector } from "react-redux"
import { AuthState } from "../components/utils/authSlice"
import { getAddressById, saveAddress } from "../components/service/addressService"
import { useNavigate, useOutletContext, useParams } from "react-router-dom"
import { OverlayContextType } from "../components/Layout"

export const AddressEdit = () => {
    const token = useSelector((state: AuthState) => state.auth ? state.auth.token : "")
    const [disableSave, setDisableSave] = useState(false)
    const [houseNumber, setHouseNumber] = useState("")
    const [street, setStreet] = useState("")
    const [line1, setLine1] = useState("")
    const [line2, setLine2] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [province, setProvince] = useState("")
    const [country, setCountry] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const { id } = useParams()
    const navigate = useNavigate()
    const [header, setHeader] = useState("New Address")
    const { setLoading, setEmpty } = useOutletContext<OverlayContextType>();

    const getAddress = useCallback(async () => {
        setLoading(true)
        let result = await getAddressById(token!, id ? Number(id) : 0)
        if (result) {
            setHouseNumber(result.houseNumber)
            setStreet(result.street)
            setLine1(result.line1)
            setLine2(result.line2)
            setCity(result.city)
            setState(result.state)
            setProvince(result.province)
            setCountry(result.country)
            setPostalCode(result.postalCode)
        }
        setEmpty(!result)
        setLoading(false)
    }, [setLoading, token, id, setEmpty])

    const resetFields = () => {
        setHouseNumber("")
        setStreet("")
        setLine1("")
        setLine2("")
        setCity("")
        setState("")
        setProvince("")
        setCountry("")
        setPostalCode("")
    }

    const save = async () => {
        setLoading(true)
        const dto = {
            id: id ? Number(id) : 0, houseNumber: houseNumber, street: street, line1: line1,
            line2: line2, city: city, state: state, province: province, country: country,
            postalCode: postalCode
        }
        let result = await saveAddress(token!, dto)
        if (result) {
            navigate("/addressedit/" + result.id)
        }
        setLoading(false)
    }

    useEffect(() => {
        if (houseNumber && city && country) {
            setDisableSave(false)
        } else {
            setDisableSave(true)
        }
    }, [city, country, houseNumber])

    useEffect(() => {
        if (!id || id === "0") {
            document.title = 'TechBrandz - New Address';
            setHeader("New Address")
            resetFields()

        } else {
            document.title = 'TechBrandz - Edit Address';
            getAddress()
            setHeader("Edit Address")
        }
    }, [id, getAddress]);

    return (
        <div className="wrapper">
            <Form className="h-full w-full md:w-96 landscape:w-96">
                <FormHeader className="font-normal flex justify-center">
                    <>{header}</>
                </FormHeader>
                <FormBody className=" flex flex-col gap-5 pt-5">
                    <FormInput id="houseNumber" name="houseNumber" className="w-full" type="text" label="House Number" onChange={(value: string) => { setHouseNumber(value) }} value={houseNumber} autoFocus={true} placeholder="House Number..." />
                    <FormInput id="street" name="street" className="w-full" type="text" label="Street" onChange={(value: string) => { setStreet(value) }} value={street} placeholder="Street..." />
                    <FormInput id="line1" name="line1" className="w-full" type="text" label="Line 1" onChange={(value: string) => { setLine1(value) }} value={line1} placeholder="Line 1..." />
                    <FormInput id="line2" name="line2" className="w-full" type="text" label="Line 2" onChange={(value: string) => { setLine2(value) }} value={line2} placeholder="Line 2..." />
                    <FormInput id="city" name="city" className="w-full" type="text" label="City" onChange={(value: string) => { setCity(value) }} value={city} placeholder="City..." />
                    <FormInput id="state" name="state" className="w-full" type="text" label="State" onChange={(value: string) => { setState(value) }} value={state} placeholder="State..." />
                    <FormInput id="province" name="province" className="w-full" type="text" label="Province" onChange={(value: string) => { setProvince(value) }} value={province} placeholder="Province..." />
                    <FormInput id="country" name="country" className="w-full" type="text" label="Country" onChange={(value: string) => { setCountry(value) }} value={country} placeholder="Country..." />
                    <FormInput id="postalCode" name="postalCode" className="w-full" type="text" label="Postal Code" onChange={(value: string) => { setPostalCode(value) }} value={postalCode} placeholder="Postal Code..." />
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