import { SHOW_ERROR, SHOW_LOADING } from "../utils/Constant"

const showLoading = (isLoading) => {
    return {
        type: SHOW_LOADING,
        payload: isLoading
    }
}

const showError = (errorMessage) => {
    return {
        type: SHOW_ERROR,
        payload: errorMessage
    }
}

export {
    showLoading,
    showError
}