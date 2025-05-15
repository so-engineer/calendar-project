import { useContext } from 'react'
import { LoginUserContext } from '../../contexts/LoginUserContext'

export const CalenderPage = () => {
  const {loginUser} = useContext(LoginUserContext)

  return (
    <div>
      <p>{loginUser.id}</p>
      <p>{loginUser.name}</p>
    </div>
  )
}