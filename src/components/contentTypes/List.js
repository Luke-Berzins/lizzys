import React from 'react'
import './List.css'

export default function List(props) {
    
        

    
    return (
        <div className='content__list'>
            <h4>{props.title}</h4>
            <ul>
                {props.items.map((content, key) => {
                    return (
                        <li>{content}</li>
                    )
                })}
            </ul>          
        </div>

    )
}