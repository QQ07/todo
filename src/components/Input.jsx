import { useState } from "react";
import axios from "axios";

let baseURL = "https://todoapi.rohanvaidya.tech/";

export default function Input({ setTodos }) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  async function handleSubmit() {
    let data = await axios.post(baseURL + "add", { title, description });
    setTodos((prevTodos) => {
      return [...prevTodos, { title, description }];
    });
    setTitle("");
    setDescription("");
  }
  return (
    <div className="flex gap-4 flex-col w-4/5 h-1/2 items-center">
      <input
        className="border px-1 h-1/5 rounded w-full"
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        placeholder="Title"
      />

      <textarea
        className="border px-1 h-1/5 rounded w-full pt-1.5"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="Description"
        rows={4} // You can adjust the number of rows as needed
      />
      <button
        className="bg-gray-700 text-gray-100 hover:bg-gray-600 py-2 px-4 rounded w-1/2"
        onClick={handleSubmit}
      >
        Add
      </button>
    </div>
  );
}
