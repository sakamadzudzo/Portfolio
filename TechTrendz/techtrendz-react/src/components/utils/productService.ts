import axios from "axios"
import API from "./constants"
import { toast } from "react-toastify"

export const getProductAllPaged = async () => {
    let data: any = []
    await axios.get(API + "getproductallpaged")
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