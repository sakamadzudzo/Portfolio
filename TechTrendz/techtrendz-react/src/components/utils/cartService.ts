import axios from "axios"
import { toast } from "react-toastify"
import { authOrReload } from "./authService"
import API from "./constants"

export const getCartByUserId = async (token: string, userId: number) => {
    authOrReload(token)
    let data: any = null
    await axios.get(API + "getcartbyuserid", {
        params: {
            userId: userId
        },
        headers: {
            Authorization: token
        }
    })
        .then((response) => {
            data = response.data
        })
        .catch((error) => {
            console.log(error);
            toast(error.response.data)
            data = null
        })
        .finally(() => {
            return data;
        })
    return data
}