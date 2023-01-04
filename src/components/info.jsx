import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../App";

function Info() {
   const { activeUser } = useContext(UserContext);

   return (
      <div className="infoContainer">
         <h1>Your personal Information</h1>
         <p>Name: {activeUser.name}</p>
         <p>Phone Number: {activeUser.phone}</p>
         <p>Username: {activeUser.username}</p>
         <p>Email: {activeUser.email}</p>
         <ul>
            Address:
            <li>city: {activeUser.address.city}</li>
            <li>Street: {activeUser.address.street}</li>
            <li>Apartment: {activeUser.address.suite}</li>
            <li>Zipcode: {activeUser.address.zipcode}</li>
         </ul>
         <p>Website: {activeUser.website}</p>
      </div>
   );
}

export default Info;
