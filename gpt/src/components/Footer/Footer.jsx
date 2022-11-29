import React from "react";

import "./Footer.scss";

function Footer(props) {
    return (
        <footer>
            {props.children}
        </footer>
    )
};

export default Footer;