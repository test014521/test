import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { UserProfile } from "../../utils/types"
import { baseUrl } from "../../utils/constants"
import { createAppSlice } from "../../app/createAppSlice"
import { fetchUser } from "../action/newAccountAction"

const initialState= null as null | UserProfile;

const accountSlice = createAppSlice({
  name: "account",
  initialState,
  reducers: {
    deleteUser: (state) => initialState,
    changeFirstName: (state, action) => {
      state!.firstName = action.payload;
      state!.stateMassage = "Fulfilled...";
    },
    changeLastName: (state, action) => {
      state!.lastName = action.payload;
      state!.stateMassage = "Fulfilled...";
    },
    pendingChangeListName: (state) => {
      state!.stateMassage = "Pending...."
    },
    errorChangeListName: (state) => {
      state!.stateMassage = "Error...."
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUser.pending,(state,action)=>{
        return {stateMassage:"Pending..."} as UserProfile;
      })
      .addCase(fetchUser.fulfilled,(state,action)=>action.payload)
      .addCase(fetchUser.rejected,(state,action)=>{
        return {stateMassage:"Error!!!"} as UserProfile;
      })
  }

})



export const {deleteUser,
  changeLastName,
  changeFirstName,
  pendingChangeListName,
  errorChangeListName} = accountSlice.actions;
export default accountSlice;