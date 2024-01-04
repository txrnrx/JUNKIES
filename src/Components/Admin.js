import React, { useState } from "react";
import { useNavigate, useHistory } from "react-router-dom";
import { addUser } from "../services/Api";
import { Link } from "react-router-dom";
import '../assets/css/login.css'
import Sidepanel from "./sidepanel";

function Admin() {
    const navigate = useNavigate();

    const [data, setdata] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setdata({ ...data, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Check the username and password
            if (data.username === "tarun" && data.password === "12345") {
                alert("Login successful");
                // Redirect to the desired route after successful login
                navigate('/user');
            } else {
                alert("Invalid username or password");
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <Sidepanel />
            <div className="login-container-l">
                <form className="login-form-l" action="process_login.php" method="POST" onSubmit={handleSubmit}>
                    <h2>Admin</h2>
                    <div className="input-group-l">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" placeholder="Enter name" onChange={handleChange} required/>
                    </div>
                    <div className="input-group-l">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter password" onChange={handleChange} required/>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    );
}

export default Admin;
