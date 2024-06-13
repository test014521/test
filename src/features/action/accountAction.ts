import { UserRegister } from "../../utils/types"
import { AppDispatch, store } from "../../app/store"
import { baseUrl, createToken } from "../../utils/constants"
import {
  changeFirstName,
  changeLastName,
  errorChangeListName,
  pendingChangeListName
} from "../slices/accountSlice"
import { putToken } from "../slices/tokenSlice"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const registerUser = (user: UserRegister) => {
  return async (dispatch: AppDispatch) => {
    //TODO pending, error
    const response = await fetch(`${baseUrl}/user`, {
      method: 'Post',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      const data = await response.json();
      // dispatch(putUser(data));
      dispatch(putToken(createToken(user.login, user.password)));
    } else {
      throw new Error(response.status.toString());
    }
  }
}

// export const fetchUser = (token: string) => {
//   return async (dispatch: AppDispatch) => {
//     //TODO pending, error
//     const response = await fetch(`${baseUrl}/login`, {
//       method: 'Post',
//       headers: {
//         'Authorization': token
//       }
//     });
//     if (response.ok) {
//       const data = await response.json();
//       dispatch(putUser(data));
//       dispatch(putToken(token));
//     } else {
//       throw new Error(response.status.toString());
//     }
//   }
// }


export const fetchChangePassword = (pass: string,oldPassword:string) => {
  return async (dispatch: AppDispatch) => {
    //TODO pending, error
    const response = await fetch(`${baseUrl}/user/password`, {
      method: 'Put',
      headers: {
        'Authorization': createToken(store.getState().account!.login,oldPassword),
        "X-Password":pass
      }
    });
    if (response.ok) {
      dispatch(putToken(createToken(store.getState().account!.login,pass)));
    } else {
      throw new Error(response.status.toString());
    }
  }
}

export const fetchChangeUser = (firstName: string,lastName:string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(pendingChangeListName());
    const response = await fetch(`${baseUrl}/user`, {
      method: 'Put',
      body: JSON.stringify({firstName,lastName} ),
      headers: {
        'Authorization': store.getState().token,
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      dispatch(changeFirstName(firstName));
      dispatch(changeLastName(lastName));
    } else {
      dispatch(errorChangeListName());
      throw new Error(response.status.toString());
    }
  }
}