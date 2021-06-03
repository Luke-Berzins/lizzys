import React from 'react'
import './Home.css'

export default function Home(props) {

    return (
        <section>
            <h1>Good Health & Food</h1>
            <div className="hero">
                <p className="hero__text">
                    Turning Food...
                    <br/>
                    Into Energy...
                    <br/>
                </p>
                <img src="https://picsum.photos/seed/picsum/200/300" alt="dummy"></img> 
            </div>
        </section>
    )
}