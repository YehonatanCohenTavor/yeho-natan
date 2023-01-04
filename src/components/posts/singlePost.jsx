import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../App';

function Post(props) {
    const { activeUser } = useContext(UserContext);
    const [comments, setComments] = useState([]);

    const highlightComment = ({ target }) => {
        if (target.classList.contains('post')) {
            target.classList.toggle('selectedPost');
        }
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${props.postDetails.id}/comments`)
            .then(response => {
                return response.json()
            })
            .then(data => setComments(data))
    }, [])

    

    return (
        <div className='post' onClick={highlightComment}>
            <h4 className='postHeader'>{props.postDetails.title}</h4>
            <p className='postP'>{props.postDetails.body}</p>
        </div>
    );
}

export default Post;