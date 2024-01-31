import Input from "./components/Input";
import Todos from "./components/Todos";
import "./App.css";
import { useEffect, useState } from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import { backendBaseURL } from "./config";
import TodosDone from "./components/TodosDone";

function App() {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    fetch(`${backendBaseURL}alltodos`).then(async (data) => {
      let alltodos = await data.json();
      setTodos(alltodos);
      //  console.log(alltodos);
    });
  }, []);
  return (
    <RecoilRoot>
      <div className="no-scrollbar">
        <div className="bg-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 w-full">
          {/* <h1 className=" text-3xl font-bold underline">To-Do</h1> */}
          <div className="flex items-center justify-center h-screen">
            <Input setTodos={setTodos} />
          </div>
          <div className="no-scrollbar">
            <Todos todos={todos} />
          </div>
          <div className="no-scrollbar">
            <TodosDone todos={todos} />
          </div>
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
