import { useEffect, useState } from "react";
import Form from "../components/Form";
import FormBody from "../components/FormBody";
import FormFooter from "../components/FormFooter";
import FormHeader from "../components/FormHeader";
import FormInput from "../components/FormInput";
import { useNavigate } from "react-router-dom";
import { getPrincipal, login } from "../components/utils/authService";
import { AuthState, setToken, setUser } from "../components/utils/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../components/utils/authContext";

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

    const doLogin = async () => {
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
    }

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
                        <FormInput className="w-full" label="Username" onChange={(value: string) => { setUsername(value) }} value={username} autoFocus={true} />
                        <FormInput className="w-full" label="Password" onChange={(value: string) => { setPassword(value) }} value={password} />
                    </FormBody>
                    <FormFooter className="justify-end p-2">
                        <button className={`btn-hollow`}>Cancel</button>
                        <button className={`btn-hollow`} disabled={disableLogin} onClick={async () => { await doLogin(); }}> Login</button>
                        {/* <button className={`btn-hollow`} onClick={() => getPrincipal()}> Auth</button> */}
                    </FormFooter>
                </Form>
            </div>
        </div >
    )
}

export default Login;