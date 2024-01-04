import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./Components/User";
import Adduser from "./Components/Adduser";
import Edituser from "./Components/Edituser";
import Dashboard from "./Components/Dashboard";
import Admin from "./Components/Admin";
import Product from "./Components/Product";

function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/User"  element={<User/>}/>
          <Route path="/add"  element={<Adduser/>}/>
          <Route path="/dash"  element={<Dashboard/>}/>
          <Route path="/admin"  element={<Admin/>}/>
          <Route path="/Product"  element={<Product/>}/>
          <Route path="/edit/:id" element={<Edituser/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;