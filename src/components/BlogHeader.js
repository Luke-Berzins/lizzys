import React from 'react'
import './TitleHeader.css'

export default function BlogHeader(props) {


    return (
        <section>
            <header className="titleHeader">
            <button type="button" >
                &#10615; Back</button>
            <h1>{props.title}</h1>
            </header>
            <ul>{props.postList}</ul>
        </section>
    )
}