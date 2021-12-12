import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

interface CallAPIProps extends AxiosRequestConfig {
    token?: boolean;
}


export default async function callAPI({url, method, data, token}: CallAPIProps) {
    let headers = {};
    if (token){
        const tokenCookies = Cookies.get("token");
        if (tokenCookies){
            const jwtToken = atob(tokenCookies);
            headers = {
                Authorization: `Bearer ${jwtToken}`,
            }
        }
    }

    const response = await axios({
        url: url,
        method: method,
        data: data,
        headers: headers
    }).catch(err => err.response);

    if (response.status > 300) {
        const res = {
            error: true,
            message: response.data.message,
            data: null
        }
        return res;
    }

    const res = {
        error: false,
        message: 'success',
        data: response.data.data
    }

    return res;
}
