import React, { useContext, useEffect } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { NavBar } from "../components/navBar";
import { UserContext } from "../App";

function UserPage() {
   const { activeUser, logOut } = useContext(UserContext);
   const navigator = useNavigate();

   useEffect(() => {
      if (!activeUser) {
         navigator("/login");
      }
   });

   if (!activeUser) {
      return;
   }

   return (
      <>
         <h1>{activeUser.name}'s personal page</h1>
         <NavBar />
         <Outlet />
      </>
   );
}

export default UserPage;
