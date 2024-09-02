import axios from "axios"
import { toast } from "react-toastify"
import { authOrReload } from "./authService"
import API from "./../utils/constants"
import { ProductItem } from "../../types/types"

export const getProductItemById = async (token: string, id: number) => {
    await authOrReload(token)
    let data: any = null
    await axios.get(API + "getproductitembyid", {
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

export const saveProductItems = async (token: string, productItem: ProductItem[], productId: number) => {
    await authOrReload(token)
    let data: any = null
    await axios.post(API + "saveproductitems", productItem, {
        params: {
            productId: productId
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

export const getProductItemAll = async (token: string) => {
    await authOrReload(token)
    let data: any = null
    await axios.get(API + "getproductitemall", {
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

export const getProductItemAllByProductId = async (token: string, productId: number) => {
    await authOrReload(token)
    let data: any = null
    await axios.get(API + "getProductItemAllByProductId", {
        params: {
            productId: productId
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