import React from 'react' 
import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav(props) {


    return (
        <nav>
            <h2>Lizzy</h2>
            <ul>
                {   true !== "" &&
                <li>
                    <Link 
                    to="/"
                    
                    >Home</Link>
                </li>
                }
                {
                    true !== "cooking" &&
                <li>
                    <Link 
                    to="/cooking"
                    
                    >Cooking</Link>
                </li>
                }
                {
                    true !== "running" &&
                <li>
                    <Link 
                    to="/running"
                    
                    >Running</Link>
                </li>
                }
            </ul>
        </nav>
    )
}