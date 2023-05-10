// Actions
import {setLoading, setError, clearError} from '../reducers/generalSlice';
// Api
import {settingsApi} from '../api/settingsApi';
import {setUpdatedUser} from "../reducers/tableSlice";


export const settingsActions = {
    changeUserData: (data) => (dispatch) => {
        dispatch(setLoading(true));
        try {
            settingsApi.changeUserData(data)
                .then((response) => {
                    if (response.statusText) {
                        dispatch(setUpdatedUser(response.data))
                    }
                })
                .then((res) => {
                    if (!res) {
                        dispatch(setLoading(false));
                        dispatch(clearError());
                        dispatch(setError('Something went wrong, please try again later!'));
                    }
                })
                .catch(() => {
                    dispatch(setLoading(false));
                    dispatch(clearError());
                    dispatch(setError('Something went wrong, please try again later!'));
                });
        } catch {
            dispatch(setLoading(false));
            dispatch(clearError());
            dispatch(setError('Something went wrong, please try again later!'));
        }
    }
};
