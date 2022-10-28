import React from "react"
import Logo from "./assets/react-logo.png"

export default function Header() {
    return (
        <header>
            <nav className="nav-bar">
                <img className="nav-img" src={Logo} />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}
