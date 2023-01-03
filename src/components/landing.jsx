import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Landing() {
   const navigator = useNavigate();
   useEffect(() => {
       navigator("/login");
   },[])
}

export default Landing;