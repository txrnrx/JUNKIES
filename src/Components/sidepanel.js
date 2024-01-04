import { useEffect, useState } from "react";
import '../assets/css/sidepanel.css';
import { Link } from "react-router-dom";

function Sidepanel() {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu = () => {
      setIsMenuActive(!isMenuActive);
    };
  
    useEffect(() => {
      const handleClickOutside = (e) => {
        const menuIconBox = document.querySelector('.menu_icon_box');
        const box = document.querySelector('.box');
  
        if (!menuIconBox.contains(e.target) && !box.contains(e.target)) {
          setIsMenuActive(false);
        }
      };
  
      document.addEventListener('click', handleClickOutside);
  
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);
  
    return (
      <div className={`container-side ${isMenuActive ? 'active' : ''}`}>
        <div className="menu_icon_box" onClick={toggleMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <div className={`box ${isMenuActive ? 'active_box' : ''}`}>
          <nav>
            <ul className="ul-slide">
              <li><a>
          <Link to="/">Home </Link>
                </a></li>
              <li><a>
          <Link to="/Product">Cart </Link>
                </a></li>
              <li><a>
          <Link to="/Admin">Admin </Link>
              </a>
        </li>
            </ul>
          </nav>
        </div>
      </div>
    );
}

export default Sidepanel;
