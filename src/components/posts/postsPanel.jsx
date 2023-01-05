import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../App";
import Post from "./singlePost";


export function Posts() {
   const { activeUser } = useContext(UserContext);
   const [posts, setPosts] = useState(null);

   useEffect(() => {
      if (!activeUser) return;
      if (sessionStorage.getItem('posts')) {
         let sessionPosts = JSON.parse(sessionStorage.getItem('posts'));
         setPosts(sessionPosts);
      } else {
         fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
               setPosts(data.filter((post) => post.userId === activeUser.id));
               sessionStorage.setItem('posts', JSON.stringify(data.filter((post) => post.userId === activeUser.id)));
            });
      }
   }, [activeUser]);

   if (!posts) {
      return <h1>Loading...</h1>;
   }
   return (
      <div className="postsContainer">
         <h1 className="postTitle">Your posts</h1>
         {posts.map((post, index) => (
            <Post
               key={index}
               postDetails={post}
            />
         ))}
      </div>
   );
}
