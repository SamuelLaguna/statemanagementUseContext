import { useContext } from 'react';
import loginContext from '../contexts/loginContext';
import useAuth from '../hooks/useAuths';
const Login  = () => {
  
//   const [username, setUsername] = useState<string>('Jose!');


const {user, userDispatch} = useAuth()
  // Handle login
  const handleLogin = () => {
    userDispatch({type:'LOGIN', username:'Samuel'})
  }
  // Handle logout
  const handleLogout = () => {
    userDispatch({type:"LOGOUT"})
};
  

  return (
    <div className="container mt-5">
      <h1 className="mb-4">User Authentication</h1>
      {user ? (
          <div>
            <h2>It is I, {user}!</h2>
          <button className="btn btn-danger" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      ) : (
          <button className="btn btn-primary" onClick={handleLogin}>
          Log In
        </button>
      )}
    </div>
  );
};

export default Login;