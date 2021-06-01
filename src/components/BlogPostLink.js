import React from 'react' 
import './BlogPostLink.css'

export default function BlogPostLink(props) {
    
    return (

        <li onClick={() => props.setShow(props.id)}> 
            <img src="https://picsum.photos/seed/picsum/200/300" alt="dummy"></img>
            <h3>{props.title}</h3>
        </li>
    )
}