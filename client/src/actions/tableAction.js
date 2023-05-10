// Actions
import {setLoading, setError, clearError} from '../reducers/generalSlice'
// Api
import {tableApi} from '../api/tableApi'
import {setAllData, setNewUser} from "../reducers/tableSlice";


export const tableActions = {
    AddNewUser: (data) => (dispatch) => {
        dispatch(setLoading(true))
        try {
            tableApi
                .addNewUser(data)
                .then((response) => {
                    if (response.statusText) {
                        dispatch(setNewUser(response.data))
                    }
                })
                .then((res) => {
                    if (!res) {
                        dispatch(setLoading(false))
                        dispatch(clearError())
                        dispatch(setError('Something went wrong, please try again later!'))
                    } else {
                        dispatch(clearError())
                        dispatch(setLoading(false))
                    }
                })
                .catch(() => {
                    dispatch(setLoading(false))
                    dispatch(clearError())
                    dispatch(setError('Something went wrong, please try again later!'))
                })
        } catch {
            dispatch(setLoading(false))
            dispatch(clearError())
            dispatch(setError('Something went wrong, please try again later!'))
        }
    },

    getTableData: () => (dispatch) => {
        dispatch(setLoading(true))
        try {
            tableApi
                .getTableData()
                .then((response) => {
                    if (response.statusText) {
                        dispatch(setAllData(response.data));
                    }
                })
                .then((res) => {
                    if (!res) {
                        dispatch(setLoading(false))
                        dispatch(clearError())
                        dispatch(setError('Something went wrong, please try again later!'))
                    }
                })
                .catch(() => {
                    dispatch(setLoading(false))
                    dispatch(clearError())
                    dispatch(setError('Something went wrong, please try again later!'))
                })
        } catch {
            dispatch(setLoading(false))
            dispatch(clearError())
            dispatch(setError('Something went wrong, please try again later!'))
        }
    }
}

