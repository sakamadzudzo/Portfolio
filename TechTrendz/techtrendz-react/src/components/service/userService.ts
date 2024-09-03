import axios from "axios"
import { toast } from "react-toastify"
import { authOrReload } from "./authService"
import API from "./../utils/constants"
import { User } from "../../types/types"

export const getUserById = async (token: string, id: number) => {
    await authOrReload(token)
    let data: any = null
    await axios.get(API + "getuserbyid", {
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

export const saveUser = async (token: string, user: User) => {
    await authOrReload(token)
    let data: any = null
    await axios.post(API + "saveuser", user, {
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

export const getUserAll = async (token: string) => {
    await authOrReload(token)
    let data: any = null
    await axios.get(API + "getuserall", {
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