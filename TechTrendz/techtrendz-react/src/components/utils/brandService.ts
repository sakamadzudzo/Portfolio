import axios from "axios"
import { toast } from "react-toastify"
import { authOrReload } from "./authService"
import API from "./constants"

export const getBrandById = async (token: string, id: number) => {
    authOrReload(token)
    let data: any = null
    await axios.get(API + "getbrandbyid", {
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

export const saveBrand = async (token: string, brand: Object) => {
    authOrReload(token)
    let data: any = null
    await axios.post(API + "savebrand", brand, {
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