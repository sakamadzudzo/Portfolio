import axios from "axios"
import { toast } from "react-toastify"
import { authOrReload } from "./authService"
import API from "./../utils/constants"
import { MyFile } from "../../types/types"

export const getFileByMediaId = async (token: string, id: number) => {
    await authOrReload(token)
    let res: MyFile = {} as MyFile
    await axios.get(API + "getfilebymediafileid", {
        params: {
            id: id
        },
        headers: {
            Authorization: token
        }
    })
        .then((response) => {
            res.file = response.data
            res.type = response.headers['content-type']
        })
        .catch((error) => {
            console.log(error);
            toast(error.response.data)
            res = {} as MyFile
        })
        .finally(() => {
            return res;
        })
    return res
}