import { SET_CARTS } from "../../utils/Constant"

const setCarts = (products) => {
    return {
        type : SET_CARTS,
        payload: products
    }
}

export default setCarts