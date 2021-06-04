import { useHistory, 
         Route, 
         Link,
         useRouteMatch,
         useParams } from 'react-router-dom'
import BlogHeader from './BlogHeader'
import BlogPostLink from '../components/BlogPostLink'
import BlogPost from '../components/BlogPost'



export default function Blog(props) {
    const history = useHistory()
    const { path, url } = useRouteMatch()
    const { topicId } = useParams()

    console.log(topicId)

    console.log("path", path, "url,", url)



    const handleBack = (current) => {
        if (props > 0) {
            
        } else {
            history.push('/')
        }
    }

    
    
    const routeList = Object.keys(props.data.posts).map((post, key) => {
        return (
            <Route
                key={post}
                path={`${path}/${key}`}
            >
                <BlogPost
                        key={key}
                        post={props.data.posts[post]}
                        parentRoute={props.data.route}
                        handleBack={handleBack}
                        />
            </Route>
        )
    })
    
    const postList = Object.keys(props.data.posts).map((post, key) => {
        return (
            <Link
                key={post}
                to={`${url}/${key}`}
            >
                <BlogPostLink
                    key={key}
                    id={post}
                    title={props.data.posts[post].title}
                    date={props.data.posts[post].date}
                    
                />
            </Link>
        )
    })


    
    return (
        <div>
           
                <BlogHeader 
                    title={props.data.title}
                    handleBack={handleBack}
                    postList={postList}
                />
            
            
                {routeList}
            
            
        </div>
    )
}