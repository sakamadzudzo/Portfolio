import axios from "axios"
import API from "./../utils/constants"
import { toast } from "react-toastify"
import { authOrReload } from "./authService"
import { Product } from "../../types/types"
import { uploadFiles } from "./fileService"

export const getProductAllPaged = async (token: string, pagedProductsRequestDto: any) => {
    await await authOrReload(token)
    let data: any = []
    await axios.post(API + "getproductallpaged", pagedProductsRequestDto, {
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
    return data
}

export const getProductById = async (token: string, id: string) => {
    await authOrReload(token)
    let data: any = null
    await axios.get(API + "getproductbyid", {
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

export const countProductItemsAvialableByProductId = async (token: string, productId: number) => {
    await authOrReload(token)
    let data: any = null
    await axios.get(API + "countProductItemsAvialableByProductId", {
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

export const saveProduct = async (token: string, product: Product, files: FileList) => {
    if (files) {
        let mediaFiles = await uploadFiles(token, files)
        if (!mediaFiles) {
            toast.error("Could not save media files")
            return null
        }
        product.pictures = product.pictures ? [...product.pictures, ...mediaFiles] : mediaFiles
    } else {
        await authOrReload(token)
    }
    let data: any = null
    await axios.post(API + "saveproduct", product, {
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

export const removeMediaFiles = async (token: string, productId: number, mediaFileId: number) => {
    await authOrReload(token)
    let data: any = null
    await axios.post(API + "removemediafile", null, {
        params: {
            productId: productId,
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