import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/Login";
import UserPage from "./pages/UserPage";
import ErrorPage from "./pages/ErrorPage";
function App() {
   return (
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
   );
}

export default App;
