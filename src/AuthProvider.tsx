import { ReactNode, useReducer } from "react"
import loginContext from "./contexts/loginContext"
import authReducer from "./reducers/authReducer"

interface Props {
    children: ReactNode;
}

const AuthProvider = ({children}:Props) => {
    const  [user, userDispatch] = useReducer(authReducer, '')
  return (
  <>
    <loginContext.Provider value={{user ,userDispatch}}>
        {children} 
    </loginContext.Provider>
  
  </>
  )
}

export default AuthProvider