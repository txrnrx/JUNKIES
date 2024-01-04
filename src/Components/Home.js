import Nav from "./Nav";
import Card from "./Card";
import Footer from "./footer";
import Sidepanel from "./sidepanel";
import Img1 from "../assets/image/offer.png";
import Img2 from "../assets/image/ck3.webp"
import Img3 from "../assets/image/donut-cookierun.gif"
import React, { useState } from 'react';
import Product from "./Product";
function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <Card />
      <Sidepanel/>
      <marquee direction="right">
      <img
        src={isHovered ? Img2 : Img3}
        alt="Gallery Image"
        className={isHovered ? 'hovered' : ''}
        onMouseOver={handleHover}
        onMouseOut={handleLeave}
      /><img src={Img1}></img>
    </marquee>
      <Footer />
    </>
  );
}

export default Home;
