import React from 'react'
import './Image.css'

export default function Image(props) {


    return (
        <div className='content__image'>

            {props.type === 'left' && 
            <div>
                    <img src={props.image} alt='article'></img>
                    <p>{props.text}</p>
            </div>        
            }

            {props.type === 'right' && 
            <div>
                    <p>{props.text}</p>
                    <img src={props.image} alt='article'></img>
            </div>  
            }  
        </div>
    )
}