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

export const uploadFiles = async (token: string, files: FileList) => {
    await authOrReload(token)
    let formData = new FormData()
    for (var i = 0; i < files.length; i++) {
        formData.append("files", files[i])
    }
    let data: any = null
    await axios.post(API + "upload", formData, {
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

export const removeOrphanedFiles = async (token: string) => {
    await axios.post(API + "removeorphanedfiles", null, {
        headers: {
            Authorization: token
        }
    })
        .then(() => {

        })
        .catch((error) => {
            console.log(error);
            toast(error.response.data)
        })
}