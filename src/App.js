import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/landing";
import Login from "./components/Login";

function App() {
   return (
      <Routes>
         <Route
            path="/"
            element={<Landing />}
         />
         <Route
            path="/login"
            element={<Login />}
         />
         {/* <Route
            path="/user"
            element={<UserPage />}
         /> */}
      </Routes>
   );
}

export default App;
