import axios from "axios"
import { toast } from "react-toastify"
import { authOrReload } from "./authService"
import API from "./../utils/constants"

export const getSalutationById = async (token: string, id: number) => {
    await authOrReload(token)
    let data: any = null
    await axios.get(API + "getsalutationbyid", {
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

export const saveSalutation = async (token: string, salutation: Object) => {
    await authOrReload(token)
    let data: any = null
    await axios.post(API + "savesalutation", salutation, {
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