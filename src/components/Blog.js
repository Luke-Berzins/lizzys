import { Route, 
         Link,
         useRouteMatch,
        Switch } from 'react-router-dom'
import BlogHeader from './BlogHeader'
import BlogPostLink from '../components/BlogPostLink'
import BlogPost from '../components/BlogPost'

export default function Blog(props) {
    const { path, url } = useRouteMatch()     
    
    const postList = Object.keys(props.data.posts).map((post, key) => {
        return (
            <Link
            key={post}
            to={`${url}/${props.data.posts[post].title}`}
            >
                <BlogPostLink
                    key={key}
                    id={post}
                    title={props.data.posts[post].title}
                    date={props.data.posts[post].date}
                    mainImage={props.data.posts[post].mainImage}
                    
                    />
            </Link>
        )
    })
    
    const routeList = Object.keys(props.data.posts).map((post, key) => {
        return (
            <Route
                key={post}
                path={`${path}/${props.data.posts[post].title}`}
            >
                <BlogPost
                    key={key}
                    post={props.data.posts[post]}
                    parentRoute={props.data.route}
                />
            </Route>
        )
    })

    return (
                <Switch>
                    {routeList}
                    <Route
                        exact path={props.parentRoute}>
                        <BlogHeader 
                            title={props.data.title}
                            postList={postList}
                        />
                    </Route>
                </Switch>                
    )
}