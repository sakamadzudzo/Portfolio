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
