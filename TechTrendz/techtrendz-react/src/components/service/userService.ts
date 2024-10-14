import axios from "axios"
import { toast } from "react-toastify"
import { authOrReload } from "./authService"
import API from "./../utils/constants"
import { User } from "../../types/types"
import { uploadFiles } from "./fileService"

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

export const saveUser = async (token: string, user: User, file: FileList) => {
    if (file) {
        let mediaFiles = await uploadFiles(token, file)
        if (!mediaFiles) {
            toast.error("Could not save media files")
            return null
        }
        user.profilePic = mediaFiles[0]
    } else {
        await authOrReload(token)
    }
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

export const removeProfilePicture = async (token: string, userId: number, mediaFileId: number) => {
    await authOrReload(token)
    let data: any = null
    await axios.post(API + "removeprofilepicture", null, {
        params: {
            userId: userId,
            mediaFileId: mediaFileId
        },
        headers: {
            Authorization: token
        }
    })
        .then(() => {
            data = true
        })
        .catch((error) => {
            console.log(error);
            toast(error.response.data)
            data = false
        })
        .finally(() => {
            return data;
        })
    return data
}