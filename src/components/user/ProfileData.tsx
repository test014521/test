import React from "react"
import { useAppSelector } from "../../app/hooks"

const ProfileData = () => {
  const user = useAppSelector(store => store.account!)
  // console.log(user)
  return (
    <div>
      <p>First name: {user.firstName}</p>
      <p>Last name: {user.lastName}</p>
      <p>Login : {user.login}</p>
      <ul>
        {user.roles.map(r => <li key={r}>{r}</li>)}
      </ul>
    </div>
  )
}

export default ProfileData