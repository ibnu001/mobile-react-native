import { combineReducers, createStore } from "redux";
import AppReducer from "./AppReducer";
import ProductReducer from './Product/ProductReducer';
import LoginReducer from "./login/LoginReducer";
import CartReducer from "./cart/CartReducer";

const rootReducer = combineReducers({
    LoginReducer,
    AppReducer,
    ProductReducer,
    CartReducer,
})

const configureStore = () => {
    return createStore(rootReducer)
}

export default configureStore