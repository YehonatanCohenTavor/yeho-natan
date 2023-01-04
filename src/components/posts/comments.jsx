import React from 'react';
import { UserContext } from '../../App';

function Comments(props) {

    return ( 
        <div className='commentsContainer'>
            {props.comments.map(comment => {
                return <div key={Math.random()} className='comment'>
                    <p className='commentP'>{comment.body}</p>
                </div>
            })}
        </div>
     );
}

export default Comments;