import React,{useContext,useState,useEffect} from 'react';
import { UserContext } from '../App';


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
    
    const highlightComment = ({ target }) => {
        if (target.classList.contains('post')) {
            target.classList.toggle('selectedPost');
        }
    }

    return (
        <div className='postsContainer'>
            {posts.map(post => <div onClick={highlightComment} key={post.id} className='post'>
                <h4 className='postH4'>{post.title }</h4>
                <p className='postP'>{post.body}</p>
            </div>)}
        </div>
    );
}

