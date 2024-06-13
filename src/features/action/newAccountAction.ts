import { createAsyncThunk } from "@reduxjs/toolkit"
import { baseUrl } from "../../utils/constants"

export const fetchUser = createAsyncThunk(
  "account/fetchUser",
  async (token:string) => {
    const response = await fetch(`${baseUrl}/login`, {
      method: 'Post',
      headers: {
        'Authorization': token
      }
    });
    const data = await response.json();
    return data;
  }
)