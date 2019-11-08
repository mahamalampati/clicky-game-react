import React from "react";


function Navbar(props) {
    return (

        <nav className="navbar navbar-default navbar-fixed-top">
            <ul>
                <li className="itemLeft"> Princess Clicky Game</li>
                <li className="itemCenter">{props.message}</li>
                <li className="itemRight">Score: {props.score} | Top Score: {props.topScore}</li>
            </ul>
        </nav>
    );
}


export default Navbar;