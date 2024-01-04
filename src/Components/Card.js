import React from 'react';
import '../assets/css/card.css';
import { addProduct } from '../services/Api';
import { useState } from "react";
function Card() {
//   const [data, setdata] = useState({
//     productname: "",
//     imageUrl: ""
// })
const [usn,setUsn] = useState("Donut");
const pwd= useState("../assets/image/photo-of-one-delicious-donut-with-topping-top-view-isolated-on-a-transparent-background-free-png.png");
const usnb = useState('Biscuts');
const pwdb= useState("../assets/image/card2.png");
const usnc = useState("GINGERBREAD COOKIES");
const pwdc= useState("../assets/image/pngtree-gingerbread-man-cookie-cartoon-transparent-png-image_9132939.png");
const usnd = useState("CHOCOLATE CHIP");
const pwdd= useState("../assets/image/Default_SINGLE_COOKIE_IMAGE_WITH_NO_BACKGROUND_0_acaf75e1-c35a-48e1-800d-46bdada4312d_0.png");
const usne = useState("LINZER COOKIES");
const pwde= useState("../assets/image/Default_SINGLE_BIG_ROUND_LINZER_COOKIE_WHERE_THE_INSIDE_IS_FI_0_a1211dfb-e171-4327-9716-f248990f8a68_0.png");
  const handleproducta = async (e) => {
    e.preventDefault();
    const data={
      productname:usn,
      imageUrl:pwd
    }
    try {
        const res=await addProduct(data)
        console.log(data)
        console.log(res.status)

    }
    catch (e) {
        console.log(e)
    }
}
  const handleproductb = async (e) => {
    e.preventDefault();
    const data={
      productname:usnb,
      imageUrl:pwdb
    }
    try {
        const res=await addProduct(data)
        console.log(res.status)
    
    }
    catch (e) {
        console.log(e)
    }
}
  const handleproductc = async (e) => {
    e.preventDefault();
    const data={
      productname:usnc,
      imageUrl:pwdc
    }
    try {
        const res=await addProduct(data)
        console.log(res.status)
     
    }
    catch (e) {
        console.log(e)
    }
}
  const handleproductd = async (e) => {
    e.preventDefault();
    const data={
      productname:usnd,
      imageUrl:pwdd
    }
    try {
        const res=await addProduct(data)
        console.log(res.status)
      
    }
    catch (e) {
        console.log(e)
    }
}
  const handleproducte = async (e) => {
    e.preventDefault();
    const data={
      productname:usne,
      imageUrl:pwde
    }
    try {
        const res=await addProduct(data)
        console.log(res.status)
     
    }
    catch (e) {
        console.log(e)
    }
}
  return (
    <>
    <div id="scene">
      <div id="left-zone">
        <ul className="list">
          <li className="item">
            <input type="radio" id="first" name="basic_carousel" value="first" checked="checked" />
            <div className="content content_one">
              <span className="picto"></span>
             
              <div className="containerr">
                <div className="carda" onClick={handleproducta}>
                  <h3 className="title"></h3>
                </div>
                <div className="cardb" onClick={handleproductb}>
                  <h3 className="title"></h3>
                </div>
                <div className="cardc" onClick={handleproductc}>
                  <h3 className="title"></h3>
                </div>
                <div className="cardd" onClick={handleproductd}>
                  <h3 className="title"></h3>
                </div>
                <div className="carde" onClick={handleproducte}>
                  <h3 className="title"></h3>
                </div>
              
                
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div id="middle-border"></div>
      <div id="right-zone"></div>
    </div>
    {/* <marquee direction="right"><img src={Img2}></img></marquee> */}
  </>
  );
}

export default Card;
