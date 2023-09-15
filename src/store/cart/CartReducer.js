import { SET_CARTS } from "../../utils/Constant"

const initialState = {
    cartProducts: []
}

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CARTS:
            return {
                ...state,
                cartProducts: action.payload
            }

        default:
            return state
    }
}

export default CartReducer