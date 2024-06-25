import { setUser, clearUser, AuthState } from "../components/utils/authSlice";
import axios from "axios";
import API from "../components/utils/constants";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
    const dispatch = useDispatch();
    // const [state, setState] = useState(initialState)
    const token = useSelector((state:AuthState) => state.token)

    const getPrincipal = async () => {
        // const validToken = token.includes("Bearer ") ? token : freshToken
        // const validToken = freshToken
        await axios.get(API + "getprincipal", {
            headers: {
                Authorization: token
            }
        })
            .then((response) => {
                dispatch(setUser(response.data));
            })
            .catch((error) => {
                console.error(error);
            });
    }

    getPrincipal()

    return (
        <>
            <div>Home is here!</div>
        </>
    )
}

export default Home;