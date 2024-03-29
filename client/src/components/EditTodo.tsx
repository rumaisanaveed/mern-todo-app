export default function EditTodo({
  showEditForm,
  handleEditFormSubmit,
  prevTodo,
  handleInputChange,
}: {
  showEditForm: boolean;
  handleEditFormSubmit: () => void;
  prevTodo: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      {showEditForm && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleEditFormSubmit();
          }}
          className="w-full mt-4"
        >
          <input
            placeholder="What is the task today ?"
            className="bg-black text-white border border-violet-500 py-2 w-3/4 pl-3"
            value={prevTodo}
            onChange={handleInputChange}
          />
          <button className="bg-violet-500 text-white py-2.5 rounded-tr rounded-br w-3/12">
            Edit Task
          </button>
        </form>
      )}
    </>
  );
}
