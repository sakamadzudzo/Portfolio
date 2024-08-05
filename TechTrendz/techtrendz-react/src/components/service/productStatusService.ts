import axios from "axios"
import { toast } from "react-toastify"
import { authOrReload } from "./authService"
import API from "../utils/constants"

export const getProductStatusById = async (token: string, id: number) => {
    await authOrReload(token)
    let data: any = null
    await axios.get(API + "getproductstatusbyid", {
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

export const saveProductStatus = async (token: string, productStatus: Object) => {
    await authOrReload(token)
    let data: any = null
    await axios.post(API + "saveproductstatus", productStatus, {
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