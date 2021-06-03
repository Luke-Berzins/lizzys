import { useHistory } from 'react-router-dom'
import BlogHeader from './BlogHeader'
import BlogPostLink from '../components/BlogPostLink'
import BlogPost from '../components/BlogPost'




export default function Blog(props) {
    let history = useHistory()

    const postList = Object.keys(props.data.posts).map((post, key) => {
        return (<BlogPostLink
            key={key}
            id={post}
            title={props.data.posts[post].title}
            date={props.data.posts[post].date}
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
            {props.show === 0 &&
                <BlogHeader 
                    title={props.data.title}
                    handleBack={handleBack}
                    show={props.show}
                    postList={postList}
                />
            }
            {props.show !== 0 &&
                <BlogPost
                    post={props.data.posts[props.show]}
                    handleBack={handleBack}
                />

            }
        </div>
    )
}