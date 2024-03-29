import { useState, useEffect } from "react";
import axios from "axios";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import EditTodo from "./EditTodo";

interface Todo {
  _id: number;
  todo: string;
}

export default function Todos({
  showEditForm,
  setShowEditForm,
}: {
  showEditForm: boolean;
  setShowEditForm: (value: boolean) => void;
}) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [prevTodo, setPrevTodo] = useState<string>("");
  const [updatingTodoId, setUpdatingTodoId] = useState<any>(null);

  const handleClick = (todoObject: any) => {
    console.log(todoObject);
    const { _id, todo } = todoObject;
    setShowEditForm(true);
    setPrevTodo(todo);
    setUpdatingTodoId(_id);
  };

  const handleEditFormSubmit = () => {
    axios
      .put(`http://localhost:5001/api/todos/${updatingTodoId}`, {
        todo: prevTodo,
      })
      .then((response) => {
        console.log(response);
        setPrevTodo("");
        setUpdatingTodoId(null);
        setShowEditForm(false);
      })
      .catch((err) => console.log(err));
  };

  const getTodos = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/todos");
      // console.log(response.data);
      setTodos(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = (id: any) => {
    console.log(id);
    axios
      .delete(`http://localhost:5001/api/todos/${id}`)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTodos();
  }, [todos]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrevTodo(e.target.value);
  };

  return (
    <div className="flex items-center gap-2 flex-col w-full">
      <EditTodo
        showEditForm={showEditForm}
        handleEditFormSubmit={handleEditFormSubmit}
        prevTodo={prevTodo}
        handleInputChange={handleInputChange}
      />
      <div className="flex flex-col gap-4 mt-5 w-full">
        {todos.map((item) => (
          <div
            key={item._id}
            className="bg-violet-500 rounded text-white py-2 w-full px-2 flex items-center justify-between"
          >
            <p className="text-white">{item.todo}</p>
            <div className="flex items-center gap-3">
              <button onClick={() => handleClick(item)}>
                <FaRegEdit />
              </button>
              <button onClick={() => handleDelete(item._id)}>
                <FaTrashAlt />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
