import axios from "axios"
import { toast } from "react-toastify"
import { authOrReload } from "./authService"
import API from "./../utils/constants"

export const getFileByMediaId = async (token: string, id: number) => {
    await authOrReload(token)
    let data: any = null
    await axios.get(API + "getfilebymediafileid", {
        params: {
            id: id
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

export const getFileLinkFromMediaId = (id: number) => {
    return API + "getfilebymediafileid?id=" + id
}