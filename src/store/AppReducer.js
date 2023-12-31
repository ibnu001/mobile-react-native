import { SHOW_ERROR, SHOW_LOADING } from '../utils/Constant'

const initialState = {
    isLoading: false,
    errorMessage: '',
    theme: 'dark',
    language: 'en'
}

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
            
        case SHOW_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }

        default:
            return state
    }
}

export default AppReducer