// Core
import {createSlice} from '@reduxjs/toolkit'

export const tableSlice = createSlice({
    name: 'table',
    initialState: {
        allData: [],
        newUser: {},
        updatedUser: {},
        closePopup: ''
    },
    reducers: {
        setClosePopup: (state, action) => {
            state.closePopup = action.payload
        },
        setAllData: (state, action) => {
            state.allData = action.payload
        },
        setNewUser: (state, action) => {
            state.newUser = action.payload
        },
        setUpdatedUser: (state, action) => {
            state.updatedUser = action.payload
        },
    },
})

export const {
    setUpdatedUser,
    setAllData,
    setNewUser
} = tableSlice.actions

export default tableSlice.reducer
