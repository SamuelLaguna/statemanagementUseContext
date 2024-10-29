import { ReactNode, useReducer } from "react"
import todoReducer from "./reducers/TodoReducer"
import TodoContext from "./contexts/todoContext"

interface Props {
    children: ReactNode;
}

const TodoProvider = ({children}:Props) => {
    const [todos,dispatch] = useReducer(todoReducer,[])
  return (
    <>
    <TodoContext.Provider value={{todos,dispatch}}>
        {children}
    </TodoContext.Provider>
    </>
  )
}

export default TodoProvider