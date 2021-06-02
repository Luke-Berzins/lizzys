import { useHistory } from 'react-router-dom'
import BlogPostLink from '../components/BlogPostLink'
import BlogPost from '../components/BlogPost'



export default function Blog(props) {
    let history = useHistory()

    const postList = Object.keys(props.data.posts).map((post, key) => {
        return (<BlogPostLink
            key={key}
            id={post}
            title={props.data.posts[post].title}
            setShow={props.setShow}
        />
        )
    })


    const handleBack = (current) => {
        if (props.show > 0) {
            props.setShow(0)
        } else {
            history.push('/')
        }
    }

    
    return (
        <div>
            <button type="button" onClick={() => handleBack(props.show)}>&#10615; Back</button>
            {props.show === 0 &&
                <section>
                    <h1>{props.data.title}</h1>
                    <ul>{postList}</ul>
                </section>
            }
            {props.show !== 0 &&
                <BlogPost
                    post={props.data.posts[props.show]}
                />

            }
        </div>
    )
}