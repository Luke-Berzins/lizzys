import React from 'react'
import List from './contentTypes/List'
import Image from './contentTypes/Image'
import Text from './contentTypes/Text'

export default function BlogContent(props) {

    const list = props.content.text.split(", ").forEach((listItem => {
        listItem = `<li>${listItem}</li>`
    }))
    console.log(list)
    
    return (
        <div>
            {props.content.type === "left-image" &&
                <Image
                    content={props.content}
                />
                
            }
    
            {props.content.type === "text" &&
                <Text 
                    content={props.content}
                />
            }

            {props.content.type === "list" &&

                <List 
                    content={props.content}
                />
            }
        </div>
    )
}