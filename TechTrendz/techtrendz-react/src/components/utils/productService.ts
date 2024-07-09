import axios from "axios"
import API from "./constants"
import { toast } from "react-toastify"
import { authOrReload } from "./authService"

export const getProductAllPaged = async (token: string, pagedProductsRequestDto: any) => {
    authOrReload(token)
    let data: any = []
    await axios.post(API + "getproductallpaged", pagedProductsRequestDto, {
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
            data = []
        })
        .finally(() => {
            return data;
        })
    return data
}

export const getProductById = async (token: string, id: string) => {
    authOrReload(token)
    let data: any = null
    await axios.get(API + "getproductbyid", {
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