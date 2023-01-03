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
                setPosts(data.filter(post => post.id === activeUser.id))
                console.log(posts)
    })
    },[activeUser])
    

    return (
        <></>
    );
}

