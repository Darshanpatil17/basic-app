import Home from "./home"
import Corparate from "./corparate"
import { Route,Routes } from "react-router-dom"
import Login from "./login"
import Signup from "./signup"

function App() {
  

  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/corporate" element={<Corparate/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    </Routes>
      
    </>
  )
}

export default App
