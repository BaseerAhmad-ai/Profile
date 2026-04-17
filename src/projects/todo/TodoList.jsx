import { useEffect, useState } from "react";
import { TodoItems } from "./TodoItems.jsx";
import "./styles/TodoList.css";
// !=======================================================
export function TodoList() {
  // !=======================================================
  // todo make state for input value;;;
  const [update, setUpdate] = useState(false);
  const [index, setIndex] = useState();
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState(
    JSON.parse(localStorage.getItem("TodoList")) ?? []
  );
  useEffect(() => {
    localStorage.setItem("TodoList", JSON.stringify(task));
  }, [task]);
  // !=======================================================
  // todo make handleInputValue function hare
  const handleInputValue = (value) => {
    setInputValue(value);
  };
  // !=======================================================
  // todo make handleFormSubmition function hare
  const handleFormSubmition = (e) => {
    e.preventDefault();
      const id = new Date().getTime();
      const date = new Date();
      let temp = inputValue;
      temp = temp.replace(/\s+/g, " ");
      temp = temp.trim();
      if (temp === "" || temp === " ") return;
    if (!update) {
      if (!task.some((item) => item.data === temp)) {
        setTask((prevs) => [...prevs, { id, data: temp, date, check: false }]);
      }
    }else{
task[index].data=inputValue;
localStorage.setItem("TodoList",JSON.stringify(task))
setUpdate(false);
    }
    setInputValue("");
   
  };
  // !=======================================================
  // todo make handleCheckBox function hare
  const handleCheckBox = (e, id) => {
    let updatedData = task;
    updatedData = updatedData.map((item) =>
      item.id == id ? { ...item, check: !item.check } : item
    );
    setTask(updatedData);
    localStorage.setItem("TodoList", JSON.stringify(updatedData));
  };
  // !=======================================================
  // todo make handleDeletion function hare
  const handleDeletion = (id) => {
    let data = [...task];
    data = data.filter((item) => item.id !== id);
    setTask(data);
    localStorage.setItem("TodoList", JSON.stringify(data));
    setInputValue("");
    setUpdate(false)
  };
  // !=======================================================
  const handleUpdate=(txt,id)=>{
    setInputValue(txt);
    setIndex(id);
    setUpdate(true);
  }
  return (
    <div className="root">
      <header>
        <h1>Todo List</h1>
        <form onSubmit={(e) => handleFormSubmition(e)}>
          <input
            type="text"
            autoFocus={true}
            placeholder="Add a new task .."
            value={inputValue}
            autoComplete="off"
            onChange={(e) => handleInputValue(e.target.value)}
          />
          {/* {handleFormSubmition} */}
          <button>+</button>
        </form>
      </header>
      <br />
      <TodoItems
        task={task}
        handleCheckBox={handleCheckBox}
        handleDeletion={handleDeletion}
        handleUpdate={handleUpdate}
      />
      <br />
      {/* <div
        className="btn"
        onClick={() => {
          setTask([]);
          setInputValue("");
        }}
      >
        Clear all
      </div> */}
    </div>
  );
}
