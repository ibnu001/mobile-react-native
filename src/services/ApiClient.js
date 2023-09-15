import axios from "axios";
import { GlobalError, UnauthorizedError } from "../utils/AppError";
import LocalStorage from "../utils/LocalStorage";

const client = axios.create({
    baseURL: 'http://10.10.100.212:8080/api'
})

client.interceptors.request.use(async (config) => {
    if (config.url !== '/auth/login') {
        const token = await LocalStorage().getData("token")
        config.headers = {
            'Authorization': `Bearer ${token}`
        }
    }
    return config
})

const apiClient = async ({ url, method, params = null }) => {
    try {
        const result = await client[method](url, params)
        // console.log('=== RESULT : ', result);
        return result
    } catch (e) {
        if (e.response.status === 401) {
            throw new UnauthorizedError('Unauthorized');
        } else {
            throw new GlobalError(`Error Global ${e.response.data.errors}`)
        }
    }
}

export default apiClient