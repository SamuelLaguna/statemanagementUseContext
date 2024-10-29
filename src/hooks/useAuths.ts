import { useContext } from "react";
import loginContext from "../contexts/loginContext";

const useAuth = () => useContext(loginContext);

export default useAuth;