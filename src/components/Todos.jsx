import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../App";
function Todos() {
   const { activeUser } = useContext(UserContext);
   const [todos, setTodos] = useState(undefined);

   useEffect(() => {
      if (!activeUser) return;
      fetch("https://jsonplaceholder.typicode.com/todos")
         .then((response) => response.json())
         .then((response) => {
            setTodos(response.filter((todo) => todo.userId === activeUser.id));
         });
   }, [activeUser]);

   if(!todos){
    return <h1>Loading...</h1>;
   }
   console.log(todos);
}

export default Todos;
