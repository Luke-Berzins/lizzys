import React from 'react' 
import { Link } from 'react-router-dom'
export default function Nav(props) {



    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/cooking">Cooking</Link>
                </li>
                <li>
                    <Link to="/running">Running</Link>
                </li>
            </ul>
        </nav>
    )
}