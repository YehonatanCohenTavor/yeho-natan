import React,{useContext,useState,useEffect} from 'react';
import { UserContext } from '../../App';
import Post from './singlePost';


export function Posts() {

    const { activeUser } = useContext(UserContext);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (!activeUser) return;
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data.filter(post => post.userId === activeUser.id))
    })
    }, [activeUser])

    return (
        <div className='postsContainer'>
            {posts.map((post, index) => <Post
                key={index}
                postDetails={post} />)}
        </div>
    );
}

