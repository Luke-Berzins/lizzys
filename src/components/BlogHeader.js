import React from 'react'

export default function BlogHeader(props) {


    return (
        <section>
                    <button type="button" onClick={() => props.handleBack(props.show)}>
                        &#10615; Back</button>
                    <h1>{props.title}</h1>
                    <ul>{props.postList}</ul>
                </section>
    )
}