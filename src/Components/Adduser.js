import { useState } from "react";
import { addUser } from "../services/Api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../assets/css/login.css'
import Sidepanel from "./sidepanel";
function Adduser() {
    const navigate = useNavigate();
    const [data, setdata] = useState({
        username: '',
        password: ''
    })
    const handleChange = (e) => {
        setdata({ ...data, [e.target.id]: e.target.value })

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const res=await addUser(data)
            console.log(res.status)
            if (res.status === 201) {
                alert("User added")
                navigate('/')
            }
        }
        catch (e) {
            console.log(e)
        }
    }
    return (
        <>
        <Sidepanel/>
            <div class="login-container-l">
    <form class="login-form-l" action="process_login.php" method="POST" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div class="input-group-l">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Enter name" onChange={handleChange} required/>
      </div>
      <div class="input-group-l">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter password" onChange={handleChange} required/>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>

        </>
    )
}
export default Adduser;