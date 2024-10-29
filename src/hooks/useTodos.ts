import { useContext } from "react";
import TodoContext from "../contexts/todoContext";

const useTodos = () => useContext(TodoContext);

export default useTodos;