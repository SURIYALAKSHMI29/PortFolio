import React from 'react'
import './Navbar.css'
import logo from '../../../assets/logo-copy.png'
import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
    const [menu,setMenu] = useState("home");

    return(
        <div className="nav-container">
            <div className = "navbar">
                <img src={logo} className='logo'alt='suriya'/>
                <ul className='nav-menu'>
                    <li className={menu === "home" ? "active-li" : ""}>
                        <AnchorLink className="anchor-link" href="#home">
                            <p onClick={() => setMenu("home")}>Home</p>
                        </AnchorLink>
                        {menu === "home"?<span className="active"></span>:null}
                    </li>
                    <li className={menu === "about" ? "active-li" : ""}>
                        <AnchorLink className="anchor-link" offset={50} href="#about">
                            <p onClick={() => setMenu("about")}>About me</p>
                        </AnchorLink>
                        {menu==='about'?<span className="active"></span>:null}
                    </li>
                    <li className={menu === "skills" ? "active-li" : ""}>
                        <AnchorLink className="anchor-link" offset={50} href="#skills">
                            <p onClick={() => setMenu("skills")}>Skills</p>
                        </AnchorLink>
                        {menu==='skills'?<span className="active"></span>:null}
                    </li>
                    <li className={menu === "projects" ? "active-li" : ""}>
                        <AnchorLink className="anchor-link" offset={50} href="#projects">
                            <p onClick={() => setMenu("projects")}>Projects</p>
                        </AnchorLink>
                        {menu==='projects'?<span className="active"></span>:null}
                    </li>
                    <li className={menu === "experience" ? "active-li" : ""}>
                        <AnchorLink className="anchor-link" offset={50} href="#experience">
                            <p onClick={() => setMenu("experience")}>Experience</p>
                        </AnchorLink>
                        {menu==='experience'?<span className="active"></span>:null}
                    </li>
                </ul>
                <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
            </div>
         </div>
    )
}
export default Navbar