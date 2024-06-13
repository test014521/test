import React from "react"
import Guest from "./components/guest"
import User from "./components/user"
import { useAppSelector } from "./app/hooks"
import { Navigate, Route, Routes } from "react-router-dom"

const App = () => {
  //TODO* create view
  const token = useAppSelector(store => store.token)
  return (
    <Routes>
      <Route path={"/"} element={token ? <Navigate to={"/user"} /> : <Guest />} />
      <Route path={"/user"} element={token ? <User/> : <Navigate to={"/"} />} />
    </Routes>
  )
}

export default App