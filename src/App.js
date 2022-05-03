import { Route, Routes } from "react-router-dom";
import "./App.css"
import { About } from "./components/about";
import { Home } from "./components/home";
import  {Navbar} from "./components/navbar"
import {Users } from "./components/users"
import {Userd} from "./components/userdetails"
function App() {
  
  return ( 
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element = { <Home></Home>}></Route>
        <Route path="/about" element = { <About></About>}></Route>
        <Route path ="/users" element = { <Users></Users> }></Route>
        <Route path = "/users/:id" element = {<Userd></Userd>}></Route>
      </Routes>
    </div>
  );
}



export default App;
