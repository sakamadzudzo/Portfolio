import { useEffect, useState } from "react";
import Form from "../components/Form";
import FormBody from "../components/FormBody";
import FormFooter from "../components/FormFooter";
import FormHeader from "../components/FormHeader";
import FormInput from "../components/FormInput";
import { useNavigate, useOutletContext } from "react-router-dom";
import { getPrincipal, login } from "../components/service/authService";
import { AuthState, setToken, setUser } from "../components/utils/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../components/utils/authContext";
import { OverlayContextType } from "../components/Layout";

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const [disableLogin, setDisableLogin] = useState(true)
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const referer = useSelector((state: AuthState) => state.auth ? state.auth.referer : "/")
    const { isAuthenticated, setIsAuthenticated } = useAuth();
    const token = useSelector((state: AuthState) => state.auth ? state.auth.token : "")
    const { setLoading } = useOutletContext<OverlayContextType>();

    const doLogin = async () => {
        setLoading(true)
        setError("")
        const data = await login(username, password)
        if (data !== "") {
            if (data.includes("Bearer ")) {
                dispatch(setToken(data))
                const principal = await getPrincipal(data!);
                dispatch(setUser(principal))
                navigate(referer!)
            } else {
                setError(data)
            }
        } else {
            setError("Network issue. Contact administrator.")
        }
        setLoading(false)
    }

    const closeTab = () => {
        window.opener = null;
        window.open("", "_self");
        window.close();
    };

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
        const checkToken = async () => {
            const isAuth = await getPrincipal(token!);
            if (isAuth) {
                setIsAuthenticated(true);
                navigate(referer!)
            }
        };

        if (!isAuthenticated) {
            checkToken();
        }
    }, [isAuthenticated, setIsAuthenticated, navigate, token, referer]);

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
        </div >
    )
}

export default Login;