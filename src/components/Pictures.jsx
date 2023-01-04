import React, { useState, useEffect, useContext, useRef } from "react";
import { UserContext } from "../App";
import { NavLink, Outlet, useParams } from "react-router-dom";

function Pictures() {
   const [pictures, setPictures] = useState(undefined);
   const [src, setSrc] = useState(0);
   const { activeUser } = useContext(UserContext);
   const { albumId } = useParams();

   useEffect(() => {
      if (!albumId) return;
      fetch("https://jsonplaceholder.typicode.com/photos")
         .then((response) => response.json())
         .then((response) => {
            setPictures(response.filter((pic) => pic.albumId == albumId));
         });
   }, [albumId]);
   if (!pictures) {
      return <h1>Loading...</h1>;
   }

   function handleNext() {
      setSrc((prev) => (prev + 1) % pictures.length);
   }
   function handlePrevius() {
      setSrc((prev) => (prev === 0 ? pictures.length - 1 : prev - 1));
   }
   return (
      <div className="pictures">
         <button onClick={handlePrevius}>⬅️</button>
         <button onClick={handleNext}>➡️</button>
         <img
            src={pictures[src].url}
            alt="Album picture"
         />
      </div>
   );
}
export default Pictures;
