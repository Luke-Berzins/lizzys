import React from 'react'
import List from './contentTypes/List'
import Image from './contentTypes/Image'
import Text from './contentTypes/Text'

export default function BlogContent(props) {
   
    return (
        <div>
            {props.content.type === "left-image" && <Image
                    text={props.content.text}
                    image={props.content.image}
                    type='left'
                />  
            }
            {props.content.type === "right-image" && <Image
                    text={props.content.text}
                    image={props.content.image}
                    type='right'
                />  
            }
            {props.content.type === "text" && <Text 
                    text={props.content.text}
                />
            }

            {props.content.type === "list" && <List
                    title={props.content.title} 
                    items={props.content.items}
                />
            }
        </div>
    )
}