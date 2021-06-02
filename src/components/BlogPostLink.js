import React from 'react' 
import './BlogPostLink.css'

export default function BlogPostLink(props) {
    
    let date = "January 12 2021"

    return (
        <li onClick={() => props.setShow(props.id)}> 
            <img src="https://picsum.photos/seed/picsum/200/300" alt="dummy"></img>
            <div className="date__circle">
                <span>{date.substring(0, 3)}</span>
                <span>{date.substring(date.length - 7, date.length - 4)}</span>
            </div>
            <h3>{props.title}</h3>
        </li>
    )
}