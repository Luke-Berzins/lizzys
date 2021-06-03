import React from 'react'
import './TitleHeader.css'

export default function BlogHeader(props) {


    return (
        <section>
            <header className="titleHeader">
            <button type="button" onClick={() => props.handleBack(props.show)}>
                &#10615; Back</button>
            <h1>{props.title}</h1>
            </header>
            <ul>{props.postList}</ul>
        </section>
    )
}