import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
    render() {
        return (

            <div className="header">
                <h1>Fractal Clicky Game</h1>
                <div className="container">
                <h4>Click on each image only 1 time and you win.  Click on the same image 2 times and you lose.</h4>
                <p>"Fractals are infinitely complex patterns that are self-similar across different scales. They are created by repeating a simple process over and over in an ongoing
                     feedback loop. Driven by recursion, fractals are images of dynamic systems – the pictures of Chaos."  -  The Fractal Foundation</p>
            </div>
            </div>
        )
    }
}
export default Header;