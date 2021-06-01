import React from 'react'

export default function BlogPost(props) {


    return (
        <article>
            <h1>{props.post.title}</h1>
            <p>{props.post.text}</p>
        </article>
    )
}