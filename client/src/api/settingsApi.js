import {apiPath} from '../constants';
import axios from "axios";

export const settingsApi = {
    changeUserData: (data) => {
        return axios.patch(`${apiPath}/update_user_data`, data);


    },
}