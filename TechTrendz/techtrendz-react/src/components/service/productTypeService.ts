import axios from "axios"
import { toast } from "react-toastify"
import { authOrReload } from "./authService"
import API from "../utils/constants"

export const getProductTypeById = async (token: string, id: number) => {
    await authOrReload(token)
    let data: any = null
    await axios.get(API + "getproducttypebyid", {
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

export const saveProductType = async (token: string, productType: Object) => {
    await authOrReload(token)
    let data: any = null
    await axios.post(API + "saveproducttype", productType, {
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