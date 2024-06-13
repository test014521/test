import React, { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { createToken } from "../../utils/constants"
import { fetchUser } from "../../features/action/newAccountAction"
import { putToken } from "../../features/slices/tokenSlice"

const LogIn = () => {
  const [login,setLogin] = useState("");
  const [password,setPassword] = useState("");
  const dispatch = useAppDispatch();

  function handleClickLogIn() {
    const token = createToken(login, password);
    dispatch(fetchUser(token))
  }

  function handleClickClear() {
    setPassword("");
    setLogin("");
  }

  return (
    <div>
      <label>Login:
        <input onChange={e => setLogin(e.target.value.trim())}
               type={"email"} placeholder={"user-john@gmail.com"} value={login} />
      </label>
      <label>Password:
        <input onChange={e => setPassword(e.target.value.trim())}
               type={"password"} value={password} />
      </label>
      <button onClick={handleClickLogIn}>LogIn</button>
      <button onClick={handleClickClear}>Clear</button>
    </div>
  )
}

export default LogIn