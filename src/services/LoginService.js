import { useDeps } from "../context/DependencyContext"
import LocalStorage from "../utils/LocalStorage"

const LoginService = () => {

    const { apiClient } = useDeps()

    const login = async (email, password) => {
        try {
            const result = await apiClient({
                method: "post",
                url: "/auth/login",
                params: {
                    email: email,
                    password: password
                },
            })
            // console.log('token', result.data.data.token);

            await LocalStorage().setData('token', result.data.data.token)
            await LocalStorage().setData('customerId', result.data.data.id)
        } catch (e) {
            throw e
        }
    }

    return {
        login
    }
}

export default LoginService