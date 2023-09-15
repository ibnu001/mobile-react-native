import { combineReducers, createStore } from "redux";
import AppReducer from "./AppReducer";
import ProductReducer from './Product/ProductReducer';
import LoginReducer from "./login/LoginReducer";

const rootReducer = combineReducers({
    LoginReducer,
    AppReducer,
    ProductReducer,
})

const configureStore = () => {
    return createStore(rootReducer)
}

export default configureStore