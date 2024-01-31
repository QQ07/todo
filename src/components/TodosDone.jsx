import { useEffect, useState } from "react";
import Todo from "./Todo";

export default function TodosDone({ todos }) {
  return (
    <>
      <div className="no-scrollbar h-screen overflow-scroll border border-slate-600 rounded text-white p-5">
        {todos.map(function (todo) {
          if (todo.completed == true) {
            console.log("in todos.jsx" + todo._id);
            return (
              <>
                <Todo
                  key={todo._id}
                  id={todo._id}
                  title={todo.title}
                  description={todo.description}
                  completed={todo.completed}
                ></Todo>
              </>
            );
          }
        })}
      </div>
    </>
  );
}
