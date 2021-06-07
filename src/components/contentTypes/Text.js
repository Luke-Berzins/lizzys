import React from 'react'
import './Text.css'

export default function Text(props) {


    return (
        <p className='content__text'>{props.text}</p>
    )
}