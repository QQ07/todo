import { useEffect, useState } from "react";
import Todo from "./Todo";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/alltodos").then(async (data) => {
      let alltodos = await data.json();
      setTodos(alltodos);
      console.log(alltodos);
    });
  }, []);
  return (
    <>
      <div className="h-screen overflow-scroll border border-slate-600 rounded text-white p-5">
        {todos.map(function (todo) {
          // console.log(todo)
          return (
            <>
              <Todo title={todo.title} description={todo.description}></Todo>
            </>
          );
        })}
      </div>
    </>
  );
}
