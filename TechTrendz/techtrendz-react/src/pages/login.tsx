import { useState } from "react";
import { useAppSelector, useAppDispatch } from "./../types/reduxTypes";
import { setUser, setToken, authToken, authUser } from "../components/utils/slices/authSlice";
import Form from "../components/Form";
import FormBody from "../components/FormBody";
import FormFooter from "../components/FormFooter";
import FormHeader from "../components/FormHeader";
import FormInput from "../components/FormInput";
import axios from "axios";
import API from "../components/utils/constants";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const token = authToken
    const token1 = useAppSelector((state) => state.auth.token)
    const user = authUser
    const dispatch = useAppDispatch()

    const doLogin = async () => {
        setToken("");
        await axios.post(API + "signin", {
            username: "ssmadzudzo",
            password: "test"
        })
            .then(async (response) => {
                // console.log(response);
                // setToken("Bearer " + response.data);
                dispatch(setToken("Bearer " + response.data));
                await getPrincipal();
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const getPrincipal = async () => {
        await axios.get(API + "getprincipal", {
            headers: {
                Authorization: token1
            }
        })
            .then((response) => {
                // setPrincipal(response.data);
                dispatch(setUser(response.data));
                console.log(token);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div className="wrapper">
            <div className="border w-64 h-80 rounded-lg">
                <Form>
                    <FormHeader className="flex flex-col items-center">
                        <div className="">TechTrendz</div>
                        <div className="text-4xl">Login</div>
                    </FormHeader>
                    <FormBody className="p-3 flex flex-col justify-end gap-5">
                        <FormInput className="w-full" label="Username" onChange={(value: string) => { setUsername(value) }} value={username} />
                        <FormInput className="w-full" label="Password" onChange={(value: string) => { setPassword(value) }} value={password} />
                    </FormBody>
                    <FormFooter className="justify-end p-2">
                        <button className={`btn-hollow`}>Cancel</button>
                        <button className={`btn-hollow`} onClick={() => doLogin()}> Login</button>
                        <button className={`btn-hollow`} onClick={() => getPrincipal()}> Auth</button>
                    </FormFooter>
                </Form>
            </div>
        </div >
    )
}

export default Login;