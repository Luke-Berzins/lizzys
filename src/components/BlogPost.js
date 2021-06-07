import React from 'react'
import { useHistory } from 'react-router-dom'
import BlogContent from './BlogContent'
import './BlogPost.css'

export default function BlogPost(props) {
    const history = useHistory()

    let content = props.post.content.map((post, key) =>{

        return (
            <BlogContent
                key={key}
                content={post}
            />
        )
    })

    return (
        <article>
            <header className="titleHeader" onClick={() => history.goBack()}>
                <button type="button" >
                &#10615; Back</button>
                <h1>{props.post.title}</h1>
            </header>
            <div className="blog__content--all">
                {content}
            </div>
        </article>
    )
}