import React, { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { UserContext } from "../App";

export function NavBar(props) {
   const { logOut } = useContext(UserContext);
   const navigator = useNavigate();
   function handleLogClick(e) {
      let bool = window.confirm("Are you sure you wanna leave?");
      if (bool) {
         logOut();
         navigator("/login");
      }
   }
   return (
      <div className="navBar">
         <NavLink
            to=""
            end
         >
            Personal Information
         </NavLink>
         <NavLink to="todos">To Do List</NavLink>
         <NavLink to="posts">Posts</NavLink>
         <NavLink to="albums">Albums</NavLink>
         <Link onClick={handleLogClick}>Logout</Link>
      </div>
   );
}
