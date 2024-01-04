import { useEffect, useState } from "react";
import "../assets/css/User.css";
import { getUser,deleteUser } from "../services/Api";
import { useNavigate } from "react-router-dom";
import Sidepanel from "./sidepanel";
function User() {
    
    const navigate = useNavigate();
    const [user,setuser]=useState([]);
    const fetchData=async()=>{
        try{
           const res= await getUser()
           console.log(res.data)
           setuser(res.data)
        }
        catch(e){
            console.log(e)
        }
    }
    const handleDelete=async(id)=>{
        try{

            const res= await deleteUser(id)
            if(res.status===200){
                alert('Deleted!')
            }
            fetchData()
        }
        catch(e){
            console.log(e);
        }
    }
    const handleEdit =async(id)=>{
        navigate(`/edit/${id}`)
    }
    const handleAdd = () => navigate("/add");

    useEffect(()=>{
        fetchData()
    },[])
    return (
        <>
        <Sidepanel/>
            <table className="table-n">
                <thead>
                    <tr>
                        <th>
                            Username
                        </th>
                        <th>
                            Password
                        </th>
                        <th>
                            Edit
                        </th>
                        <th>
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((user)=>(
                      <tr key={user.id}>
                      <td>{user.username}</td>
                      <td>{user.password}</td>
                      <td>
                          <button className='edit-btn' onClick={()=>handleEdit(user.id)}>Edit</button>
                      </td>
                      <td>
                          <button className='del-btn' onClick={()=>handleDelete(user.id)}>Delete</button>
                      </td>
                  </tr>
  
                    ))
                    }
                </tbody>
                <button onClick={handleAdd} className="edit-btn">
        Add User
      </button>

            </table>
        </>
    )
}
export default User;