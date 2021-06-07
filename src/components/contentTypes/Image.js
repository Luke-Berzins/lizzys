import React from 'react'
import './Image.css'

export default function Image(props) {


    return (
        <div>
            {props.type === 'left' && 
            <div className='content__image'>
                <figure>
                    <img src={props.image} alt='article'></img>
                    <figcaption>
                        {props.caption}
                    </figcaption>
                </figure>
                <p>{props.text}</p>
            </div>        
            }

            {props.type === 'right' && 
            <div className='content__image'>
                <figure>    
                    <img src={props.image} alt='article'></img>
                    <figcaption>
                    {props.caption}
                    </figcaption>
                </figure>
                <p>{props.text}</p>
            </div>  
            }
            {props.type === 'banner' && 
            <div className='content__image'>
                <figure className='banner'>    
                    <img src={props.image} alt='article'></img>
                    <figcaption>
                    {props.caption}
                    </figcaption>
                </figure>
                <p>{props.text}</p>
            </div>  
            }    
        </div>
    )
}