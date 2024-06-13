import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = '';

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    putToken: (state, action: PayloadAction<string>) => {
      return action.payload
    },
    deleteToken: (state) => {
      return initialState
    }
  }
})

export const {putToken, deleteToken} = tokenSlice.actions;
export default tokenSlice;