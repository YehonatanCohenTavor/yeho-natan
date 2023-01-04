import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";
export function NavBar(props) {
   const { logOut } = useContext(UserContext);
   return (
      <div className="navBar">
         <NavLink to="" end>Personal Information</NavLink>
         <NavLink to="todos">To Do List</NavLink>
         <NavLink to="posts">Posts</NavLink>
         <NavLink to="albums">Albums</NavLink>
         <NavLink
            onClick={logOut}
            to="/login"
         >
            Logout
         </NavLink>
      </div>
   );
}
