import Input from "./components/Input";
import Todos from "./components/Todos";

function App() {
  return (
    <div className=" bg-black grid grid-cols-3 gap-4 w-screen  ">
      {/* <h1 className=" text-3xl font-bold underline">To-Do</h1> */}
      <div className="flex items-center justify-center">
        <Input />
      </div>
      <div className="">
        <Todos></Todos>
      </div>
    </div>
  );
}

export default App;
