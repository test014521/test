import React, { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { fetchChangeUser } from "../../features/action/accountAction"
interface Props {
  setUpdateAction:(name:string)=>void
}
const EditUser = ({setUpdateAction}:Props) => {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const dispatch = useAppDispatch();

  function handleClickSave() {
    dispatch(fetchChangeUser(firstName,lastName));
    setUpdateAction("");
  }

  function handleClickClear() {
    setFirstName("");
    setLastName("");
  }
  return (
    <div>
      <label>New firstName:
        <input onChange={e => setFirstName(e.target.value.trim())}
               type={"text"} value={firstName} />
      </label>
      <label>New lastName:
        <input onChange={e => setLastName(e.target.value.trim())}
               type={"text"} value={lastName} />
      </label>
      <button onClick={handleClickSave}>Save</button>
      <button onClick={handleClickClear}>Clear</button>
    </div>
  )
}

export default EditUser