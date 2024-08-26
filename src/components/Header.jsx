import React, { useState } from "react";
import "../style/header.css";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg"
function Header() {
    const [navbar, setNavbar] = useState(false)
    window.addEventListener("scroll", ()=> {
        if(window.scrollY >= 100) {
            setNavbar(true)
        }else {
            setNavbar(false)
        }
    })
  return (
    <header id="header" className={navbar ? "header" : "home"}>
      <div className="container">
        <nav className="header__nav">
            <NavLink href="#header" className="header__logo">
                <img src={logo} alt="" />
                Portfolio
            </NavLink>
            <ul className="header__list">
                <li><a className="nav_link" href="#hero" >Home</a></li>
                <li><a className="nav_link" href="#aboutMe">About me</a></li>
                <li><a className="nav_link" href="#projects">Projects</a></li>
                <li><a className="nav_link" href="contact">Contact me</a></li>
            </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
