import React from "react"
import { Link } from "gatsby"
import "./systems.css"

function Nav() {
    return (
        <header>
            <ul>
                <Link to="/">Case Studies</Link>
                <Link to="/about/">About</Link>
                <Link to="/contact/">Resume</Link>
            </ul>
        </header>
    )
}

export default Nav
