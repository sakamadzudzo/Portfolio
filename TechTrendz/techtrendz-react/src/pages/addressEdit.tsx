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
    const [houseNumber, setHouseNumber] = useState<Number>(0)
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
            setName(result.name)
            setDescription(result.description)
        }
        setEmpty(!result)
        setLoading(false)
    }, [setLoading, token, id, setEmpty])

    const save = async () => {
        setLoading(true)
        const dto = {
            id: id ? Number(id) : 0, houseNumber: houseNumber, street: street, line1: line1,
            line2: line2, city: city, state: state, province: province, country: country,
            postalCode: postalCode, users: null
        }
        let result = await saveAddress(token!, dto)
        if (result) {
            navigate("/addressedit/" + result.id)
        }
        setLoading(false)
    }

    useEffect(() => {
        if (name) {
            setDisableSave(false)
        } else {
            setDisableSave(true)
        }
    }, [name])

    useEffect(() => {
        if (!id || id === "0") {
            document.title = 'TechAddressz - New Address';
            setHeader("New Address")
            setName("")
            setDescription("")

        } else {
            document.title = 'TechAddressz - Edit Address';
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
                    <FormInput id="name" name="name" className="w-full" type="text" label="Name" onChange={(value: string) => { setName(value) }} value={name} autoFocus={true} placeholder="Name..." />
                    <FormInput id="description" name="description" className="w-full" type="text" label="Description" onChange={(value: string) => { setDescription(value) }} value={description} placeholder="Description..." />
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