import React, { useState, useEffect, useContext, useRef } from "react";
import Comments from "./comments";

function Post(props) {
   const [comments, setComments] = useState([]);
   const [commentsDisplay, setCommenstDisplay] = useState(false);

   const highlightComment = ({ target }) => {
      if (target.classList.contains("post")) {
         target.classList.toggle("selectedPost");
      }
   };

   useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${props.postDetails.id}/comments`)
         .then((response) => {
            return response.json();
         })
         .then((data) => setComments(data));
   }, []);

   const toggleComments = () => {
      setCommenstDisplay(commentsDisplay ? false : true);
   };

   return (
      <div
         className="post"
         onClick={toggleComments}
      >
         <h4 className="postHeader">{props.postDetails.title}</h4>
         <p className="postP">{props.postDetails.body}</p>
         {commentsDisplay ? (
            <>
               <span className="commentsSpan">Comments:</span>
               <Comments comments={comments} />
            </>
         ) : (
            ""
         )}
         <button className="commentsButton">{commentsDisplay ? "Show less" : "Comments"}</button>
      </div>
   );
}

export default Post;
