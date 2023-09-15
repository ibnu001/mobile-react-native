import { useDispatch } from "react-redux"
import { showError, showLoading } from "../../store/AppAction"

export const Tokonyadia = (service) => {
    const dispatch = useDispatch()
    const { getProductService, createTransactionService} = service()

    const onLoadProducts = async () => {
        try {
            dispatch(showLoading(true))

            return await getProductService()
        } catch (error) {
            dispatch(showError(error))
        } finally {
            dispatch(showLoading(false))
        }
    }

    const onCreateTransaction = async (payload) => {
        try {
            dispatch(showLoading(true))

            return await createTransactionService(payload)
        } catch (error) {
            dispatch(showError(error))
        } finally {
            dispatch(showLoading(false))
        }
    }

    return { onLoadProducts, onCreateTransaction}
}