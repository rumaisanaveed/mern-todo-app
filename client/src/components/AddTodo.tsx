import axios from "axios";
import { useState } from "react";

export default function AddTodo() {
  const [inputValue, setInputValue] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    let mystoredAccessToken = localStorage.getItem("access-token");
    e.preventDefault();
    axios
      .post(
        "http://localhost:5001/api/todos",
        {
          todo: inputValue,
        },
        {
          headers: {
            Authorization: `Bearer ${mystoredAccessToken}`,
          },
        }
      )
      .then(
        (response) => {
          console.log(response);
        },
        (err) => {
          console.log(err);
        }
      );
    setInputValue("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    // console.log(inputValue);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="What is the task today ?"
        value={inputValue}
        onChange={handleInputChange}
        className="bg-black border text-white border-violet-500 py-2 w-8/12 md:w-3/4 pl-3"
      />
      <button className="bg-violet-500 text-white py-2.5 rounded-tr rounded-br w-4/12 md:w-3/12 px-2">
        Add Task
      </button>
    </form>
  );
}
