import axios from "axios"
import { toast } from "react-toastify"
import { authOrReload } from "./authService"
import API from "./../utils/constants"

export const getCartByUserId = async (token: string, userId: number) => {
    await authOrReload(token)
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

export const addToCart = async (token: string, productId: number, count: number) => {
    await authOrReload(token)
    let data: any = null
    await axios.post(API + "addtocart", null, {
        params: {
            productId: productId,
            count: count
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

export const subtractFromCart = async (token: string, productId: number, count: number) => {
    await authOrReload(token)
    let data: any = null
    await axios.post(API + "subtractfromcart", null, {
        params: {
            productId: productId,
            count: count
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

export const saveCart = async (token: string, cart: any) => {
    await authOrReload(token)
    let data: any = null
    await axios.post(API + "savecart", cart, {
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