import React from 'react'
import { useHistory } from 'react-router-dom'
import './TitleHeader.css'

export default function BlogHeader(props) {
    let history = useHistory()

    return (
        <section>
            <header className="titleHeader">
            <button type="button" onClick={() => history.push('/')} >
                &#10615; Back</button>
            <h1>{props.title}</h1>
            </header>
            <ul>{props.postList}</ul>
        </section>
    )
}