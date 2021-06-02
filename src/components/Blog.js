import React, { useState, useEffect } from 'react' 
import { useHistory } from 'react-router-dom'
import BlogPostLink from '../components/BlogPostLink'
import BlogPost from '../components/BlogPost'



export default function Blog(props) {
    const [show, setShow] = useState(0)
    let history = useHistory()

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [show])
      

    const postList = Object.keys(props.data.posts).map((post, key) => {
        return (<BlogPostLink
            key={key}
            id={post}
            title={props.data.posts[post].title}
            setShow={setShow}
        />
        )
    })


    const handleBack = (show) => {
        if (show > 0) {
            setShow(0)
        } else {
            history.push('/')
        }
    }

    
    return (
        <div>
            <button type="button" onClick={() => handleBack(show)}>&#10615;</button>
            <h1>{props.data.title}</h1>
            {show === 0 &&
                <section>
                    <ul>{postList}</ul>
                </section>
            }
            {show !== 0 &&
                <BlogPost
                    post={props.data.posts[show]}
                />

            }
        </div>
    )
}