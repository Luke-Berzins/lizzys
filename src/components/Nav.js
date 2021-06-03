import React, { useState } from 'react' 
import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav(props) {
    const [navState, setNavState] = useState("")


    return (
        <nav>
            <h2>Lizzy</h2>
            <ul>
                {                    navState !== "Home" &&
                <li>
                    <Link 
                    to="/"
                    onClick={() => setNavState("Home")}
                    >Home</Link>
                </li>
                }
                {
                    navState !== "Cooking" &&
                <li>
                    <Link 
                    to="/cooking"
                    onClick={() => setNavState("Cooking")}
                    >Cooking</Link>
                </li>
                }
                {
                    navState !== "Running" &&
                <li>
                    <Link 
                    to="/running"
                    onClick={() => setNavState("Running")}
                    >Running</Link>
                </li>
                }
            </ul>
        </nav>
    )
}