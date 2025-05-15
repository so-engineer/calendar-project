import { createContext, useState } from 'react'
import { LoginUserType } from '../types/login'
import { ReactNode } from "react";

type LoginUserContextType = {
  loginUser: LoginUserType;
  setLoginUser: (user: LoginUserType) => void;
}

export const LoginUserContext = createContext<LoginUserContextType>({})

type PropsType = {
  children: ReactNode
}

export const LoginUserProvider = ({children}: PropsType) => {
  const [loginUser, setLoginUser] = useState<LoginUserType>({
    id: 0,
    name: "",
  })
  
  return (
    <LoginUserContext.Provider value={{loginUser, setLoginUser}}>
      {children}
    </LoginUserContext.Provider>
  )
}