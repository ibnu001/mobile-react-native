import { SET_PRODUCTS } from "../../utils/Constant"

const initialState = {
    products: [],
}

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }

        default:
            return state
    }
}

export default ProductReducer