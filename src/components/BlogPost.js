import React from 'react'
import './BlogPost.css'
import { useHistory } from 'react-router-dom'

export default function BlogPost(props) {
    const history = useHistory()

    return (
        <article>
            <header className="titleHeader" onClick={() => history.goBack()}>
                <button type="button" >
                &#10615; Back</button>
                <h1>{props.post.title}</h1>
            </header>
            <p>{props.post.text}</p>
        </article>
    )
}