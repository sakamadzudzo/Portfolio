import { useCallback, useEffect, useState } from "react";
import Form from "../components/Form";
import FormBody from "../components/FormBody";
import FormFooter from "../components/FormFooter";
import FormHeader from "../components/FormHeader";
import FormInput from "../components/FormInput";
import { NavLink, useNavigate, useOutletContext } from "react-router-dom";
import { getPrincipal, login } from "../components/service/authService";
import { AuthState, setRoles, setToken, setUser } from "../components/utils/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { OverlayContextType } from "../components/Layout";
import { toast } from "react-toastify";
import { User } from "../types/types";

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const [disableLogin, setDisableLogin] = useState(true)
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const referer = useSelector((state: AuthState) => state.auth ? state.auth.referer : "/")
    const token = useSelector((state: AuthState) => state.auth ? state.auth.token : "")
    const { setLoading } = useOutletContext<OverlayContextType>();
    const [showTestAccount, setShowTestAccount] = useState(false)

    const doLogin = async () => {
        setLoading(true)
        setError("")
        const data = await login(username, password)
        if (data !== "" && data !== null) {
            if (data.includes("Bearer ")) {
                dispatch(setToken(data))
                const principal: User = await getPrincipal(data!);
                dispatch(setUser(principal))
                dispatch(setRoles(principal.roles!))
                setLoading(false)
                navigate(referer && referer !== '/login' ? referer : "")
            } else {
                setLoading(false)
                setError(data)
            }
        } else {
            await setLoading(false)
            toast.error("Network issue. Contact administrator.")
            setError("Network issue. Contact administrator.")
        }
    }

    const closeTab = () => {
        window.opener = null;
        window.open("", "_self");
        window.close();
    }

    const checkToken = useCallback(async () => {
        const isAuth = await getPrincipal(token!);
        if (isAuth) {
            navigate(referer!)
        }
    }, [navigate, referer, token])

    useEffect(() => {
        if (username === "") {
            setDisableLogin(true)
        } else if (password === "") {
            setDisableLogin(true)
        } else {
            setDisableLogin(false)
        }
    }, [username, password])

    useEffect(() => {
            checkToken();
    }, [checkToken]);

    useEffect(() => {
        document.title = 'TechBrandz - Login';
    }, []);

    return (
        <div className="wrapper">
            <div className="border w-64 h-80 rounded-lg">
                <Form>
                    <FormHeader className="flex flex-col items-center">
                        <div className="">TechTrendz</div>
                        <div className="text-4xl">Login</div>
                    </FormHeader>
                    <FormBody className="p-3 flex flex-col justify-end gap-5">
                        {error !== "" ?
                            <div className="grow">
                                <div className="error-div">{error}</div>
                            </div>
                            : <></>}
                        <FormInput id="username" name="username" className="w-full" label="Username" onChange={(value: string) => { setUsername(value) }} value={username} autoFocus={true} placeholder="Username..." />
                        <FormInput id="password" name="password" className="w-full" type="password" label="Password" onChange={(value: string) => { setPassword(value) }} value={password} placeholder="Password..." />
                    </FormBody>
                    <FormFooter className="justify-end p-2">
                        <button className={`btn-hollow`} onClick={() => { closeTab() }}>Cancel</button>
                        <button className={`btn-hollow`} disabled={disableLogin} onClick={async () => { await doLogin(); }}> Login</button>
                        {/* <button className={`btn-hollow`} onClick={() => getPrincipal()}> Auth</button> */}
                    </FormFooter>
                </Form>
            </div>
            <div className="flex justify-between absolute bottom-5 w-full p-2">
                <div className="group link">
                    <button className="" onClick={() => setShowTestAccount(showTestAccount!)}>Test account details</button>
                    <div className={`absolute -top-10 left-5 hidden group-hover:block ${showTestAccount && 'block'}`}>
                        <div className="flex gap-4">
                            <div className="font-medium w-24">Username:  </div><div>ssmadzudzo</div>
                        </div>
                        <div className="flex gap-4">
                            <div className="font-medium w-24">Password:  </div><div>test</div>
                        </div>
                    </div>
                </div>
                <div className="link">
                    <NavLink to={`/about`} className="menu-link" >About</NavLink>
                </div>
            </div>
        </div >
    )
}

export default Login;