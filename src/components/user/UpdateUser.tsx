import React, { useState } from "react"
import ChangePassword from "./ChangePassword"
import EditUser from "./EditUser"

const UpdateUser = () => {
  const [updateAction, setUpdateAction] = useState<string>("")

  switch (updateAction) {
    case "changePassword":
      return <ChangePassword setUpdateAction={setUpdateAction}/>
    case "editUser":
      return <EditUser setUpdateAction={setUpdateAction}/>
    default:
      return (<div>
        <button onClick={()=>setUpdateAction("changePassword")}>Change Password</button>
        <button onClick={()=>setUpdateAction("editUser")}>Edit User</button>
      </div>)

  }
}

export default UpdateUser