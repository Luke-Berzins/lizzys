import React from 'react' 
import './BlogPostLink.css'

export default function BlogPostLink(props) {
    
    
    return (
        <li > 
            <img src={props.mainImage} alt="link"></img>
            <div className="date__circle">
                <span>{props.date.substring(0, 3)}</span>
                <span>{props.date.substring(props.date.length - 7, props.date.length - 4)}</span>
            </div>
            <h3>{props.title}</h3>
        </li>
    )
}