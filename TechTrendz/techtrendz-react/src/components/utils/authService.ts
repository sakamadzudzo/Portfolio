import axios from 'axios';
import API from './constants';

export const login = async (username: string, password: string) => {
    let res: string = ""
    await axios.post(API + "signin", { username, password })
        .then((response) => {
            res = "Bearer " + response.data
            console.clear()
        })
        .catch((error) => {
            if (error.response) {
                // console.log(error.response.data)
                res = error.response.data
            } else {
                res = ""
            }
        })
        .finally(() => {
            return res
        })
    return res
};

export const getPrincipal = async (token: string) => {
    let res: any = null
    await axios.get(API + "getprincipal", {
        headers: {
            Authorization: token
        }
    })
        .then((response) => {
            res = response.data
        })
        .catch((error) => {
            // console.error(error);
            res = null
        }
        )
        .finally(() => {
            return res
        });
    return res
}

export const checkAuth = async (token: string) => {
    let res: boolean = false
    await axios.get(API + "checkauth", {
        headers: {
            Authorization: token
        }
    }).then((response) => {
        if (response.status === 200) {
            res = true
        } else {
            res = false
        }
    }).catch(() => {
        res = false
    }).finally(() => {
        return res
    })
    return res
}

export const authOrReload = async (token: string) => {
    const isAuth = await checkAuth(token!);
    if (!isAuth) {
        window.location.reload()
    }
}