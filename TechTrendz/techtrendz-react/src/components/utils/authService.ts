import axios from 'axios';
import API from './constants';

export const login = async (username: string, password: string) => {
    let res: string = ""
    await axios.post(API + "signin", { username, password })
        .then((response) => {
            res = "Bearer " + response.data
        })
        .catch((error) => {
            console.log(error.response.data)
            res = error.response.data
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