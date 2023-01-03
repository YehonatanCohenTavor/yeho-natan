import React, { useState, useEffect, createContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext();

function Login(props) {
   const [activeUser, setActiveUser] = useState(null);
   const [userData, setUserData] = useState();
   const navigator = useNavigate();
   const [values, setValues] = useState({
      usernameVal: "",
      passwordVal: "",
   });
   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
         .then((response) => response.json())
         .then((response) => setUserData(response))
         .catch((error) => {
            console.log(error);
         });
   }, []);

   if (!userData) {
      return <h1>Loading...</h1>;
   }

   function handleChange(event) {
      setValues((prev) => {
         return { ...prev, [event.target.name]: event.target.value };
      });
   }

   function handleSubmit(event) {
      event.preventDefault();
      let userSet = false;
      userData.forEach((user) => {
         if (
            !userSet &&
            user.name === values.usernameVal &&
            user.address.geo.lat.substring(user.address.geo.lat.length - 4, user.address.geo.lat.length) ===
               values.passwordVal
         ) {
            setActiveUser(user);
            userSet = true;
            navigator("/user");
            return;
         }
      });
      if (!userSet) {
         alert("The information you have entered is incorrect...\nplease try again");
      }
   }

   function handleLogOut() {
      setActiveUser(null);
      navigator("/login");
   }
   
   return (
      <UserContext.Provider value={{ activeUser, logOut: handleLogOut }}>
         <form onSubmit={handleSubmit}>
            <input
               onChange={handleChange}
               value={values.usernameVal}
               type="text"
               placeholder="username"
               name="usernameVal"
            />
            <input
               onChange={handleChange}
               value={values.passwordVal}
               type="password"
               placeholder="password"
               name="passwordVal"
            />
            <input
               type="submit"
               value="Log in"
            />
         </form>
      </UserContext.Provider>
   );
}

export default Login;