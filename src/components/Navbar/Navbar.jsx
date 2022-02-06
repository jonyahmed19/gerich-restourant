import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdImageSearch, MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => (
  <div className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.gericht} alt="Gericht Restaurant" />
    </div>
    <ul className="app__navbar-links">
      <li className="p__opensans">
        <a href="#home">Home</a>
      </li>
    </ul>
    Navbar
  </div>
);

export default Navbar;
