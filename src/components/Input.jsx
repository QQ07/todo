import { useEffect, useState } from "react";

export default function Input() {
  const [todo, setTodo] = useState({});
  function handleChange(key, value) {
    let newTodo = todo;
    // console.log(value)
    newTodo[key] = value;
    setTodo(newTodo);
    // console.log(todo)
  }
  return (
    <div className="flex gap-4 flex-col w-4/5 h-1/2 items-center">
      <input
        className="border px-1 h-1/5 rounded w-full"
        type="text"
        onChange={(e) => {
          handleChange("title", e.target.value);
        }}
        value={todo.title}
        placeholder="Title"
      />
      
      <textarea
        className="border px-1 h-1/5 rounded w-full pt-1.5"
        value={todo.description}
        onChange={(e) => {
          handleChange("description", e.target.value);
          
        }}
        placeholder="Description"
        rows={4} // You can adjust the number of rows as needed
      />
      <button className="bg-gray-700 text-gray-100 hover:bg-gray-600 py-2 px-4 rounded w-1/2">
        Add
      </button>
    </div>
  );
}
