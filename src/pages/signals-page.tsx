import { utilLog } from "../utils";

import { useContext } from "react";
import { AppState } from "../main";
import { useNavigate } from "react-router-dom";

export const SignalsPage = () => {
  const {
    todos,
    todosLength,
    addTodo,
    listName,
    draftTodo,
    removeTodo,
    resetDraft,
  } = useContext(AppState);

  const navigate = useNavigate();

  const submitTodo = () => {
    addTodo(draftTodo.value);
    resetDraft();
  };

  const previewDraftTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    draftTodo.value = event.target.value;
  };

  const renameTodoList = (event: React.ChangeEvent<HTMLInputElement>) => {
    listName.value = event.target.value;
  };

  const remove = (index: number) => {
    removeTodo(index);
  };

  const navigateTo = () => {
    navigate("/example");
  };

  return (
    <>
      <div className="flex items-center flex-col ">
        <h1 className="font-semibold">Todo List {listName}</h1>
        <div className="m-5 text-center">
          <p>{draftTodo}</p>
          <>
            {todos.value.map((todo, i) => (
              <li key={i} onClick={() => remove(i)}>
                {todo.label}
              </li>
            ))}
          </>
          {!todosLength ? (
            <p className="font-semibold">Empty todos 😔</p>
          ) : (
            <p>{todosLength}</p>
          )}
        </div>
        <div className="flex m-5 items-center flex-col">
          <span>Add Todos</span>
          <input className="m-3" onChange={previewDraftTodo}></input>
          <button
            type="button"
            onClick={submitTodo}
            className="text-white font-extrabold bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            ADD
          </button>
        </div>
        <div className="flex m-5 items-center flex-col">
          <span>Rename</span>
          <input className="m-3" onChange={renameTodoList}></input>
        </div>
        <button
          type="button"
          onClick={navigateTo}
          className="text-white font-extrabold bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Navigate
        </button>
      </div>
    </>
  );
};
