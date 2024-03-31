import AddTodo from "../components/AddTodo";
import Todos from "../components/Todos";
import { useState } from "react";

export default function Todo() {
  const [showEditForm, setShowEditForm] = useState<boolean>(false);
  return (
    <div className="bg-violet-500 flex items-center justify-center min-h-screen">
      <div className="bg-black pt-3 pb-12 px-5 max-w-md mx-auto md:w-3/12 rounded-md">
        <h1 className="text-white font-bold text-3xl pt-3 pb-5 text-center">
          Get things done!
        </h1>
        <div className="">
          <AddTodo />
        </div>
        <Todos showEditForm={showEditForm} setShowEditForm={setShowEditForm} />
      </div>
    </div>
  );
}
