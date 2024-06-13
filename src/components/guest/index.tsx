import React, { useState } from "react"
import Register from "./Register"
import LogIn from "./LogIn"

const Guest = () => {
  const [isLogin,setIsLogin] = useState(true);
  return (
    <div>
      {isLogin?<LogIn/>:<Register/>}
      <button onClick={()=> setIsLogin(prevState => !prevState)}>
        {isLogin?'Switch to Register':"Switch to Login"}</button>
    </div>
  )
}

export default Guest;