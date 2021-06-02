import React from 'react' 
import { Link } from 'react-router-dom'
export default function Nav(props) {


    return (
        <nav>
            <ul>
                <li>
                    <Link 
                    to="/"
                    onClick={() => props.setShow(0)}
                    >Home</Link>
                </li>
                <li>
                    <Link 
                    to="/cooking"
                    onClick={() => props.setShow(0)}
                    >Cooking</Link>
                </li>
                <li>
                    <Link 
                    to="/running"
                    onClick={() => props.setShow(0)}
                    >Running</Link>
                </li>
            </ul>
        </nav>
    )
}