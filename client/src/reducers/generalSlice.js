// Core
import {createSlice} from '@reduxjs/toolkit';

export const generalSlice = createSlice({
    name: 'general',
    initialState: {
        loading: false,
        error: '',
        message: '',
        status: 'pending',
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        clearError: (state) => {
            state.error = '';
        },
        setMessage: (state, action) => {
            state.message = action.payload;
        },
        clearMessage: (state) => {
            state.message = '';
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
    },
});

export const {
    setLoading,
    setError,
    clearError,
    setStatus,
} = generalSlice.actions;

export default generalSlice.reducer;
