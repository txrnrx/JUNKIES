import axios from 'axios'

const URL ='http://localhost:3000'
const getUser =()=> axios.get(`${URL}/user`)
const getUserId=(id)=> axios.get(`${URL}/user/${id}`)
const addUser=(data)=>axios.post(`${URL}/user`,data)
const editUser=(id,data)=>axios.put(`${URL}/user/${id}`,data)
const deleteUser=(id)=>axios.delete(`${URL}/user/${id}`)
const getProduct =()=> axios.get(`${URL}/products`)
const deleteProduct=(id)=>axios.delete(`${URL}/products/${id}`)
const addProduct=(data)=>axios.post(`${URL}/products`,data)//data is response body
export {getUser,getUserId,addUser,editUser,deleteUser,getProduct,deleteProduct,addProduct}