// Constants
import {apiPath} from '../constants';
import axios from "axios";

export const tableApi = {
    getTableData: () => {
        return axios.get(`${apiPath}/table_data/all/`)
    },
    addNewUser: (data) => {
        return axios.post(`${apiPath}/users`, data)
    },

};

