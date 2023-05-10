// Core
import { configureStore } from '@reduxjs/toolkit';
// Reducers
import tableReducer from '../reducers/tableSlice';

export default configureStore({
    reducer: {
        table:   tableReducer,
    },
});
