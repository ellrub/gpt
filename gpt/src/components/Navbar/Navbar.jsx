import React, { useState } from 'react';
import { motion } from "framer-motion";
import { BsFilterRight, BsXLg  } from "react-icons/bs";

import "./Navbar.scss";
import { images } from '../../constants';


const Navbar = () => {
const [toggle, setToggle] = useState(false)

    return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <img src={images.logo} alt="girl power talk logo"/>
            <p><span>girl</span> power talk</p>
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
