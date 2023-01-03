import React, { useState, useEffect, createContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/Login";
import UserPage from "./pages/UserPage";
import ErrorPage from "./pages/ErrorPage";

export const UserContext = createContext();

function App() {
   const [activeUser, setActiveUser] = useState(() => undefined);
   const navigator = useNavigate();

   useEffect(() => {
      if (activeUser) {
         navigator("/user");
         return;
      }
      navigator("/login");
   }, [activeUser]);

   function handleLogOut() {
      setActiveUser(undefined);
   }

   function handleLogIn(user) {
      setActiveUser(user);
   }

   return (
      <UserContext.Provider value={{ activeUser: activeUser, logOut: handleLogOut, logIn: handleLogIn }}>
         <Routes>
            <Route
               path="*"
               element={<ErrorPage />}
            />
            <Route
               path="/"
               element={<Landing />}
            />
            <Route
               path="/login"
               element={<Login />}
            />
            <Route
               path="/user"
               element={<UserPage />}
            />
         </Routes>
      </UserContext.Provider>
   );
}

export default App;
