import { LOGIN, LOGOUT } from "../../utils/Constant";

function loginAction() {
    return {
        type: LOGIN,
    }
}

function logoutAction() {
    return {
        type: LOGOUT,
    }
}

export { loginAction, logoutAction, }