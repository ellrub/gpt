import React from "react";

import "./Header.scss";

function Header(props) {
    return (
        <header>
            {props.children}
            <h1>#WeAreGirlPowerTalk</h1>
        </header>
    )
};

export default Header;