import React, { useState } from 'react';
import { motion } from "framer-motion";
import { BsFilterRight, BsXLg  } from "react-icons/bs";

import "./Navbar.scss";
import { images } from '../../constants';


const Navbar = () => {
const [toggle, setToggle] = useState(false)

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("logo__blue").style.opacity = "0";
    document.getElementById("logo__white").style.opacity = "1";
    document.getElementById("navbar").style.background = "#ff4c5b63";
    document.getElementById("navbar").style['-webkit-backdrop-filter'] = 'blur(4px)';
    document.getElementById("navbar").style['backdrop-filter'] = 'blur(4px)';
    } else {
    document.getElementById("logo__blue").style.opacity = "1";
    document.getElementById("logo__white").style.opacity = "0";
    document.getElementById("navbar").style.background = "none";
    document.getElementById("navbar").style['-webkit-backdrop-filter'] = 'blur(0px)';
    document.getElementById("navbar").style['backdrop-filter'] = 'blur(0px)';
    }

}

    return (
    <nav className='app__navbar' id='navbar'>
        <div className='app__navbar-logo'>
            <img src={images.logo_full_blue} alt="girl power talk logo" id='logo__blue'/>
            <img src={images.logo_full} alt="girl power talk logo" id='logo__white'/>
            
        </div>
        <ul className='app__navbar-links'>
            {["apply now", "merch", "contact us"].map((item) => (
                <li className="app__flex p-text" key={`link-${item}`}>
                    <div />
                    <a href={`#${item}`}>{item}</a>
                </li>
            ))}
        </ul>
        <div className='app__navbar-menu'>
            <BsFilterRight onClick={() => setToggle(true)} />

            {toggle && (
                <motion.div
                    whileInView={{x: [200, 0]}}
                    transition={{duration: 0.40, ease: "easeOut"}}
                >
                    <BsXLg onClick={() => setToggle(false)} />
                    <ul>
                        {["apply now", "merch", "contact us"].map((item) => (
                        <li key={item}>
                            <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                        </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </div>
    </nav>
)}

export default Navbar;
