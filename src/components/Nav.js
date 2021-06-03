import React, { useState } from 'react' 
import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav(props) {
    const [navState, setNavState] = useState(window.location.href.substring(14))


    return (
        <nav>
            <h2>Lizzy</h2>
            <ul>
                {   navState !== "" &&
                <li>
                    <Link 
                    to="/"
                    onClick={() => setNavState("")}
                    >Home</Link>
                </li>
                }
                {
                    navState !== "cooking" &&
                <li>
                    <Link 
                    to="/cooking"
                    onClick={() => setNavState("cooking")}
                    >Cooking</Link>
                </li>
                }
                {
                    navState !== "running" &&
                <li>
                    <Link 
                    to="/running"
                    onClick={() => setNavState("running")}
                    >Running</Link>
                </li>
                }
            </ul>
        </nav>
    )
}