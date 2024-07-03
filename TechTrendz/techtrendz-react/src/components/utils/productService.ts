import axios from "axios"
import API from "./constants"
import { toast } from "react-toastify"

export const getProductAllPaged = async (token: string) => {
    let data: any = []
    await axios.get(API + "getproductallpaged", {
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
}