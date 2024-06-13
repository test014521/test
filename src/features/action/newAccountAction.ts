import { createAsyncThunk } from "@reduxjs/toolkit"
import { baseUrl, createToken } from "../../utils/constants"
import { AppDispatch } from "../../app/store"
import { putToken } from "../slices/tokenSlice"

export const fetchUser = createAsyncThunk(
  "account/fetchUser",
  async ( token :string, {dispatch}) => {
    const response = await fetch(`${baseUrl}/login`, {
      method: 'Post',
      headers: {
        'Authorization': token
      }
    });
    const data = await response.json();
    const tokenForStore = createToken(data.login, data.password);
    dispatch(putToken(tokenForStore));
    return data;
  }
)