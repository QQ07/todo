import { useEffect, useState } from "react";
import Todo from "./Todo";

export default function Todos({todos}) {
  // const [todos, setTodos] = useState([]);
 
  return (
    <>
      <div className="no-scrollbar h-screen overflow-scroll border border-slate-600 rounded text-white p-5">
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
