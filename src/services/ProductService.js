import { useDeps } from "../context/DependencyContext"

const ProductService = () => {
    const { apiClient } = useDeps()

    const getProductService = async () => {
        try {
            return await apiClient({
                url: "/products",
                method: "get"
            })
        } catch (error) {
            throw error
        }
    }

    const createTransactionService = async (paylaod) => {
        try {
            return await apiClient({
                url: "/transactions",
                method: "post",
                params: paylaod
            })
        } catch (error) {
            throw error
        }
    }

    return { getProductService, createTransactionService }
}

export default ProductService