import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../App";
function Todos() {
   const { activeUser } = useContext(UserContext);
   const [todos, setTodos] = useState(undefined);
   const [selectValue, setSelectValue] = useState("Date createds");

   useEffect(() => {
      if (!activeUser) return;
      fetch("https://jsonplaceholder.typicode.com/todos")
         .then((response) => response.json())
         .then((response) => {
            setTodos(response.filter((todo) => todo.userId === activeUser.id));
         });
   }, [activeUser]);

   function handleCheck(event) {
      const id = event.target.name;
      setTodos((prev) => {
         prev = JSON.parse(JSON.stringify(prev));
         let index = prev.findIndex((todo) => todo.id == id);
         if (index === -1) {
            return prev;
         }
         prev[index].completed = !prev[index].completed;
         return prev;
      });
   }

   function handleChange(event) {
      setSelectValue(event.target.value);
   }

   if (!todos) {
      return <h1>Loading...</h1>;
   }
   return (
      <div>
         <select
            value={selectValue}
            onChange={handleChange}
         >
            <option value="Date created">Date created</option>
            <option value="Completed first">Completed first"</option>
            <option value="Uncompleted first">Uncompleted first</option>
            <option value="Alphabetical">Alphabetical</option>
            <option value="Random">Random"</option>
         </select>
         {todos.map((todo, index) => (
            <div key={index}>
               <input
                  name={todo.id}
                  type="checkbox"
                  checked={todo.completed}
                  onClick={handleCheck}
                  id={todo.id}
               />
               <label
                  for={todo.id}
                  className={todo.completed ? "completed" : ""}
               >
                  {todo.title}
               </label>
            </div>
         ))}
      </div>
   );
}

export default Todos;
