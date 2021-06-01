import React from 'react' 

export default function BlogPostLink(props) {
    
    return (

        <li>  
            <h1 onClick={() => props.setShow(props.id)}>{props.title}</h1>
        </li>
    )
}