import React from "react";
import { FaFacebookSquare, FaTwitter, FaInstagramSquare, FaLinkedin, 
        FaYoutube, FaTiktok } from "react-icons/fa";

import "./Footer.scss";
import { images } from '../../constants';

function Footer(props) {
    return (
        <footer>
            {props.children}
            <img src={images.logo_full} alt="girl power talk logo" />
            <p>"One girl empowers another. Let's change lives together: one girl, one woman and one human being at a time."</p>
            <p>Phone: <a href="tel: +91 797 3931 882">+91 797 3931 882</a></p>
            <p>Email: <a href="mailto:info@girlpowertalk.com">info@girlpowertalk.com</a></p>
            <div className="footer__container">
                <div className="footer__container-top">
                    <div className="footer__container-top--about app__flex">
                        <h3>About</h3>
                        <a href="https://girlpowertalk.com/about-us/">About Us</a>
                        <a href="https://girlpowertalk.com/blog/">Blog</a>
                        <a href="https://girlpowertalk.com/press/">Press</a>
                    </div>
                    <div className="footer__container-top--team app__flex">
                        <h3>Team</h3>
                        <a href="https://girlpowertalk.com/apply-now/">Apply Now</a>
                        <a href="https://girlpowertalk.com/our-leaders/">Our Leaders</a>
                        <a href="https://girlpowertalk.com/gallery/">Gallery</a>
                        <a href="https://girlpowertalk.com/videos/">Videos</a>
                    </div>
                </div>
                <div className="footer__container-bot">
                    <div className="footer__container-bot--company app__flex">
                        <h3>Company</h3>
                        <a href="https://girlpowertalk.com/apply-now/">Careers</a>
                        <a href="https://girlpowertalk.com/#">Submit Your Story</a>
                        <a href="https://www.google.com/maps/dir//girlpowertalk/@30.7067585,76.6151532,12z/data=!4m6!4m5!1m0!1m2!1m1!1s0x390fefbdef862817:0x47e34ae0a9ab800!3e0">Get Directions</a>
                        <a href="https://girlpowertalk.com/privacy-policy/">Privacy Policy</a>
                    </div>
                    <div className="footer__container-bot--buttons app__flex">
                        <a href="https://girlpowertalk.com/apply-now/" className="apply">Apply Now</a>
                        <a href="https://girlpowertalk.com/contact-us/" className="contact">Contact Us</a>
                    </div>
                </div>
            </div>
            <div className="footer__devider"></div>
            <div className="footer__container-icons">
                <p className="footer__copy">GIRL POWER TALK | © COPYRIGHT 2022 </p>
                <a href="https://www.facebook.com/girlpowertalk/"><FaFacebookSquare /></a>
                <a href="https://twitter.com/girlpowertalk"><FaTwitter /></a>
                <a href="https://www.instagram.com/girlpowertalk/"><FaInstagramSquare /></a>
                <a href="https://www.linkedin.com/company/girl-power-talk/"><FaLinkedin /></a>
                <a href="https://www.youtube.com/watch?v=JR9rMZYPkR0&ab_channel=GirlPowerTalk"><FaYoutube /></a>
                <a href="https://www.tiktok.com/@girlpowertalk?lang=en"><FaTiktok /></a>
            </div>
        </footer>
    )
};

export default Footer;