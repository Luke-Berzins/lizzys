import React from 'react' 
import './BlogPostLink.css'

export default function BlogPostLink(props) {
    
    
    return (
        <li onClick={() => props.setShow(props.id)}> 
            <img src="https://picsum.photos/seed/picsum/200/300" alt="dummy"></img>
            <div className="date__circle">
                <span>{props.date.substring(0, 3)}</span>
                <span>{props.date.substring(props.date.length - 7, props.date.length - 4)}</span>
            </div>
            <h3>{props.title}</h3>
        </li>
    )
}