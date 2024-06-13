import React, { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { fetchChangePassword } from "../../features/action/accountAction"

interface Props {
  setUpdateAction:(name:string)=>void
}

const ChangePassword = ({setUpdateAction}:Props) => {
  const [oldPassword,setOldPassword] = useState("");
  const [password1,setPassword1] = useState("");
  const [password2,setPassword2] = useState("");
  const dispatch = useAppDispatch();

  function handleClickSave() {
    if(password1 === password2){
      dispatch(fetchChangePassword(password1,oldPassword));
    }
    setUpdateAction("");
  }

  function handleClickClear() {
    setOldPassword("");
    setPassword1("");
    setPassword2("");
  }
  return (
    <div>
      <label>Old password:
        <input onChange={e => setOldPassword(e.target.value.trim())}
               type={"password"} value={oldPassword} />
      </label>
      <label>New password:
        <input onChange={e => setPassword1(e.target.value.trim())}
               type={"password"} value={password1} />
      </label>
      <label>Repeat new password:
        <input onChange={e => setPassword2(e.target.value.trim())}
               type={"password"} value={password2} />
      </label>
      <button onClick={handleClickSave}>Save</button>
      <button onClick={handleClickClear}>Clear</button>
    </div>
  )
}

export default ChangePassword