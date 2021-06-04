import React from 'react'
import './BlogPost.css'


export default function BlogPost(props) {

    return (
        <article>
            <header className="titleHeader">
                <button type="button" >
                &#10615; Back</button>
                <h1>{props.post.title}</h1>
            </header>
            <p>{props.post.text}</p>
        </article>
    )
}