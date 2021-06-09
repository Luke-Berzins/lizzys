import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import './Home.css'

export default function Home(props) {

    const lottieShoePot = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: lottieShoePot.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./shoe-cooking.json')
        })
    }, [])

    return (
        <section className="home__container">
            <h1>Good Health & Food</h1>
            <div className="hero__lottie" ref={lottieShoePot}></div>
            <div className="hero">
                <p className="hero__text">
                    Turning Food...
                    <br/>
                    Into Energy...
                    <br/>
                </p>
                <img src="./hero.jpg" alt="dummy"></img> 
            </div>
        </section>
    )
}