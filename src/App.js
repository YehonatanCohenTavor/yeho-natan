import React, { useState, useEffect, createContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/Login";
import UserPage from "./pages/UserPage";
import Todos from "./components/Todos";
import { Posts } from "./components/posts/postsPanel";
import Pictures from "./components/Pictures";
import Albums from "./components/Albums";
import "../src/App.css";
import "./styles/user.css";
import "./styles/todos.css";
import "./styles/albums.css";
import './styles/posts.css';

export const UserContext = createContext();

function App() {
   const [activeUser, setActiveUser] = useState(() => undefined);
   const navigator = useNavigate();

   useEffect(() => {
      //handle after refresh
      if (localStorage.getItem("activeUser") && !activeUser) {
         let user = JSON.parse(localStorage.getItem("activeUser"));
         setActiveUser(user);
         navigator(`/user/${user.id}`);
         return;
      }
      if (activeUser) {
         navigator(`/user/${activeUser.id}`);
         return;
      }
      navigator("/login");
   }, [activeUser]);

   function handleLogOut() {
      localStorage.removeItem("activeUser");
      setActiveUser(undefined);
   }

   function handleLogIn(user) {
      localStorage.setItem("activeUser", JSON.stringify(user));
      setActiveUser(user);
   }

   return (
      <UserContext.Provider value={{ activeUser: activeUser, logOut: handleLogOut, logIn: handleLogIn }}>
         <Routes>
            <Route
               path="*"
               element={<Landing />}
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
               path="/user/:id"
               element={<UserPage />}
            >
               <Route
                  path="todos"
                  element={<Todos />}
               />
               <Route
                  path="posts"
                  element={<Posts />}
               />
               <Route
                  path="albums"
                  element={<Albums />}
               />
               <Route
                  path="albums/:albumId"
                  element={<Pictures />}
               />
            </Route>
         </Routes>
      </UserContext.Provider>
   );
}

export default App;
