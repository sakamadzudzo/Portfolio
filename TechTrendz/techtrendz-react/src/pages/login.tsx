import Form from "../components/Form";
import FormBody from "../components/FormBody";
import FormFooter from "../components/FormFooter";
import FormHeader from "../components/FormHeader";
import FormInput from "../components/FormInput";

const Login = () => {
    return (
        <div className="h-full w-full flex justify-center items-center bg-picton-600/50 dark:bg-picton-950/50">
            <div className="border borders w-64 h-80 rounded-lg">
                <Form>
                    <FormHeader className="flex flex-col items-center">
                        <div className="text-white dark:text-picton-500">TechTrendz</div>
                        <div className="text-white dark:text-picton-500 text-4xl">Login</div>
                    </FormHeader>
                    <FormBody className="p-3 flex flex-col justify-end gap-4">
                        <FormInput className="w-full" label="Username" />
                        <FormInput className="w-full" label="Password" />
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