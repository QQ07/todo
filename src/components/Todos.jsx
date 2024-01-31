import { useEffect, useState } from "react";
import Todo from "./Todo";

export default function Todos({todos}) {

  return (
    <>
      <div className="no-scrollbar h-screen overflow-scroll border border-slate-600 rounded text-white p-5">
        {todos.map(function (todo) {
          console.log("in todos.jsx"+todo._id)
          if(todo.completed==false)
          return (
            <>
              <Todo
                key={todo._id}
                id={todo._id}
                title={todo.title}
                description={todo.description}
              ></Todo>
            </>
          );
        })}
      </div>
    </>
  );
}
