import { useContext } from "react"
import TodoContext from "../contexts/todoContext"
import Login from "./Login";


const MyNavbar = () => {

  // const {todos, dispatch} = useContext(TodoContext);

  const {todos} = useContext(TodoContext);
  return (
   <>
    <p></p>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true"><span>{todos.length}</span></a>
        </li>
      </ul>
    </div>
  </div>
  <Login/>
</nav>
   </>
  )
}

export default MyNavbar