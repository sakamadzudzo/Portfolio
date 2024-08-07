import axios from "axios"
import { toast } from "react-toastify"
import { authOrReload } from "./authService"
import API from "./../utils/constants"

export const getTagById = async (token: string, id: number) => {
    await authOrReload(token)
    let data: any = null
    await axios.get(API + "gettagbyid", {
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

export const saveTag = async (token: string, tag: Object) => {
    await authOrReload(token)
    let data: any = null
    await axios.post(API + "savetag", tag, {
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