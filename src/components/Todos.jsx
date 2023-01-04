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
      switch (event.target.value) {
         case "Date created":
            setTodos((prev) => prev.sort((a, b) => a.id - b.id));
            break;
         case "Uncompleted first":
            setTodos((prev) => prev.sort((a, b) => (a.completed ? 1 : -1)));
            break;
         case "Completed first":
            setTodos((prev) => prev.sort((a, b) => (a.completed ? -1 : 1)));
            break;
         case "Alphabetical":
            setTodos((prev) => prev.sort((a, b) => a.title.localeCompare(b.title)));
            break;
         case "Random":
            setTodos((prev) => prev.sort((a, b) => Math.random() - 0.5));
            break;
      }
   }

   if (!todos) {
      return <h1>Loading...</h1>;
   }
   return (
      <div className="todos">
         <div className="todosInner">
            <h1>ToDo list</h1>
            <h6>sort By:</h6>
            <select
               value={selectValue}
               onChange={handleChange}
            >
               <option value="Date created">Date created</option>
               <option value="Completed first">Completed first</option>
               <option value="Uncompleted first">Uncompleted first</option>
               <option value="Alphabetical">Alphabetical</option>
               <option value="Random">Random</option>
            </select>
         </div>
         <div className="allTodos">
            {todos.map((todo, index) => (
               <div
                  key={index}
                  className="todoContainer"
               >
                  <input
                     name={todo.id}
                     type="checkbox"
                     checked={todo.completed}
                     onChange={handleCheck}
                     id={"todo" + todo.id}
                  />
                  <label
                     htmlFor={"todo" + todo.id}
                     className={todo.completed ? "completed" : ""}
                  >
                     {todo.title}
                  </label>
               </div>
            ))}
         </div>
      </div>
   );
}

export default Todos;
