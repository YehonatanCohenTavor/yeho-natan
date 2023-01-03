import React, { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { NavBar } from "../components/navBar";
import ErrorPage from "./ErrorPage";
import { UserContext } from "../App";
function UserPage() {
   const { activeUser, logOut } = useContext(UserContext);
   const navigator = useNavigate();

   useEffect(() => {
      if (!activeUser) {
         navigator("/login");
      }
   });

   return (
      <>
         <h1>User's personal page</h1>
         <NavBar />
      </>
   );
}

export default UserPage;
