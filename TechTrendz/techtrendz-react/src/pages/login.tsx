import { useState } from "react";
import Form from "../components/Form";
import FormBody from "../components/FormBody";
import FormFooter from "../components/FormFooter";
import FormHeader from "../components/FormHeader";
import FormInput from "../components/FormInput";
import useFetch from "http-react";
import fetcher from "../components/utils/fetcher";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { data, loading, error, responseTime } = useFetch('getuserall', {
        // refresh: '30 sec',
        fetcher
    });

    if (loading) return <p>Loading</p>

    if (error) return <p>An error ocurred</p>

    if (data) console.log(data)
        
    if (error) console.error(error)

    return (
        <div className="h-full w-full flex justify-center items-center">
            <div className="border borders w-64 h-80 rounded-lg">
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
                        <button className={`btn-hollow`}>Login</button>
                    </FormFooter>
                </Form>
            </div>
        </div>
    )
}

export default Login;