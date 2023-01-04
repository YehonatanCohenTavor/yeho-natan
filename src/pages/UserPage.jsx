import React, { useContext, useEffect } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { NavBar } from "../components/navBar";
import Info from "../components/info";
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
      <div className="userPage">
         <NavBar />
         <h1>{activeUser.name}'s personal page</h1>
         <Info/>
         <Outlet />
      </div>
   );
}

export default UserPage;
