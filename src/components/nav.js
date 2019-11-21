import React from "react"
import { Link } from "gatsby"
import "./systems.css"

function Nav() {
    return (
        <header>
            <h3>Melanie's House</h3>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/about/">About</Link>
                <Link to="/contact/">Resume</Link>
            </ul>
        </header>
    )
}

export default Nav
