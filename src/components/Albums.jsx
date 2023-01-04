import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../App";
import { NavLink, Outlet } from "react-router-dom";
import { getSelectionRange } from "@testing-library/user-event/dist/utils";

function Albums() {
   const [albums, setAlbums] = useState(undefined);
   const { activeUser } = useContext(UserContext);

   useEffect(() => {
      if (!activeUser) return;
      fetch("https://jsonplaceholder.typicode.com/albums")
         .then((response) => response.json())
         .then((response) => {
            response = response
               .filter((album) => album.userId === activeUser.id)
               .sort((a, b) => a.title.localeCompare(b.title));
            setAlbums(response);
         });
   }, [activeUser]);
   if (!albums) {
      return <h1>Loading...</h1>;
   }

   return (
      <div className="albums">
         {albums.map((album, index) => (
            <NavLink
               to={`/user/${activeUser.id}/albums/${index + 1}`}
               key={index}
            >
               {album.title}
            </NavLink>
         ))}
      </div>
   );
}

export default Albums;
