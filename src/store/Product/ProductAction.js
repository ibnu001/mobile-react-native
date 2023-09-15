import { SET_PRODUCTS } from "../../utils/Constant"

const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}

export default setProducts