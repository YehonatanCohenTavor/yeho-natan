import React,{useContext,useState,useEffect} from 'react';
import { UserContext } from '../../App';
import Post from './singlePost';


export function Posts() {

    const { activeUser } = useContext(UserContext);
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        if (!activeUser) return;
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data.filter(post => post.userId === activeUser.id))
    })
    }, [activeUser])

    if (!posts) {
        return <h1>Loading...</h1>;
    }
    return (
        <div className='postsContainer'>
            {posts.map((post, index) => <Post
                key={index}
                postDetails={post} />)}
        </div>
    );
}

