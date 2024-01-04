import { useEffect, useState } from "react";
import "../assets/css/User.css";
import { getProduct,deleteProduct} from "../services/Api";
import { useNavigate } from "react-router-dom";
import Sidepanel from "./sidepanel";
function Product() {
    
    const navigate = useNavigate();
    const [user,setuser]=useState([]);
    const fetchData=async()=>{
        try{
           const res= await getProduct()
           console.log(res.data)
           setuser(res.data)
        }
        catch(e){
            console.log(e)
        }
    }
    const handleDelete=async(id)=>{
        try{

            const res= await deleteProduct(id)
            fetchData()
        }
        catch(e){
            console.log(e);
        }
    }
    const handleAdd = () => navigate("/");

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
                            Product
                        </th>
                        <th>
                            Productname
                        </th>
                        <th>
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((user)=>(
                      <tr key={user.id}>
                      <td><img src={user.imageUrl}></img>
                      </td>
                      <td>{user.productname}</td>
                      <td>
                          <button className='del-btn' onClick={()=>handleDelete(user.id)}>Delete</button>
                      </td>
                  </tr>
  
                    ))
                    }
                </tbody>
                <button onClick={handleAdd} className="edit-btn">
        Add Junkies..!
      </button>

            </table>
        </>
    )
}
export default Product;