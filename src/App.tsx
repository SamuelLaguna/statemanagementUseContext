import { useReducer } from "react"
import HomePage from "./components/HomePage"
import MyNavbar from "./components/MyNavbar"
import todoReducer from "./reducers/TodoReducer"
import TodoContext from "./contexts/todoContext"
import AuthProvider from "./AuthProvider"
import TodoProvider from "./TodoProvider"





const App = () => {


 
  
  return (
  <>


  {/* <Counter/> */}
{/* <Todo/> */}
{/* <Login value={{user, dispatch}}/> */}
<AuthProvider>


<TodoProvider>
<MyNavbar/>
<HomePage/>
</TodoProvider>
</AuthProvider>
  </>
  )
}

export default App