import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <div className="navbar sticky-top">
        <a className="navbar-brand" href="/React-Clicky-Game/"></a>
        <li style={{ listStyleType: "none" }}className="score">Score: {props.score} | Top Score: {props.topScore}</li>
    </div>
)

export default Navbar;