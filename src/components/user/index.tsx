import React from "react"
import ProfileData from "./ProfileData"
import UpdateUser from "./UpdateUser"
import { useAppDispatch } from "../../app/hooks"
import { deleteUser } from "../../features/slices/accountSlice"
import { deleteToken } from "../../features/slices/tokenSlice"

const User = () => {
  const dispatch = useAppDispatch();

  const handleClickLogOut = () =>{
    dispatch(deleteUser());
    dispatch(deleteToken());
  }

  return (
    <div>
        <ProfileData/>
        <button style={{"position":"fixed",'top':"20px","right":"50%",
          'backgroundColor':"red"}}
        onClick={handleClickLogOut}>LogOut</button>
        <UpdateUser/>
    </div>
  )
}

export default User