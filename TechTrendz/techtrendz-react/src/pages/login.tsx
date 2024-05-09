import { useState } from "react";
import Form from "../components/Form";
import FormBody from "../components/FormBody";
import FormFooter from "../components/FormFooter";
import FormHeader from "../components/FormHeader";
import FormInput from "../components/FormInput";
import usePOST, { revalidate } from 'http-react'
import fetcher from "../components/utils/fetcher";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // const { data: loginResponse, id: login, loading: loggingIn, error: loginError, responseTime: loginRunTime } = usePOST("http://localhost:3006/signin", {
    //     auto: false,
    //     body: {
    //         username: username,
    //         password: password
    //     },
    //     // headers: {},
    //     // method: "POST",
    //     fetcher
    // });

    const { data: loginResponse, id: login, loading: loggingIn, error: loginError, responseTime: loginRunTime } = usePOST("test", {
        auto: false,
        body: {
            username: username,
            password: password
        },
        // headers: {},
        method: "POST",
        fetcher
    });

    if (loginResponse) console.log(loginResponse)

    if (loginError) console.error(loginError)

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
                        <button className={`btn-hollow`} onClick={() => revalidate(login)}> Login</button>
                    </FormFooter>
                </Form>
            </div>
        </div >
    )
}

export default Login;