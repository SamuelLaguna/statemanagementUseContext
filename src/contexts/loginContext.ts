import React, { Dispatch } from "react";
import { AuthAction } from "../reducers/authReducer";


interface UserAction {
   user:  string
   userDispatch: Dispatch<AuthAction>
}



const loginContext = React.createContext<UserAction>({} as UserAction)

export default loginContext;