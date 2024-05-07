import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuth: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authset: (state, action) => {
            state.isAuth =  action.payload
        },
    },
  })
  
  export const { authset } = authSlice.actions
  
  export default authSlice.reducer