import { useParams } from "react-router-dom";
import { editUser, getUserId } from "../services/Api";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import Sidepanel from "./sidepanel";

function Edituser(){
    const {id}= useParams()
    console.log(id)
    const navigate = useNavigate();
    const [data, setdata] = useState({
        username: '',
        password: ''
    })
    const fetchUser=async()=>{
        try{
            const res=await getUserId(id)
            setdata(res.data)
        }
        catch(e){
            console.log(e)
        }
    }
    const handleChange = (e) => {
        setdata({ ...data, [e.target.id]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res2= await editUser(id,data)
            console.log(res2.status)
            if(res2.status=200){
                alert('Updated!!')
                navigate('/user')
            }
        }
        catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        fetchUser()
    },[])
    return (
        <>
    <Sidepanel/>
               <div class="login-container-l">
    <form class="login-form-l" action="process_login.php" method="POST" onSubmit={handleSubmit}>
      <h2>Edit</h2>
      <div class="input-group-l">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Enter name" onChange={handleChange} required/>
      </div>
      <div class="input-group-l">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter password" onChange={handleChange} required/>
      </div>
      <button type="submit">Update</button>
    </form>
  </div>
        </>
    )
}
export default Edituser;