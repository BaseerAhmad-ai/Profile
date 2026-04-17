import { useEffect } from "react";
import "./styles/TodoItems.css";
// !=======================================================
export function TodoItems({ task, handleCheckBox, handleDeletion,handleUpdate }) {
  useEffect(()=>{
    const scroll = document.querySelector("ul");
    scroll.scrollTop = scroll?.scrollHeight;
  },[])
// !=======================================================
  return (
    <>
      <ul>
        {task.map((item,index) => {
          const { data, date, id, check } = item;
          return (
            <li key={id} title={date}>
              <input
                type="checkbox"
                id={id}
                title="check"
                checked={check}
                onChange={(e) => handleCheckBox(e, id)}
              />
              <label htmlFor={id} className={`${check ? "check" : ""}`}>
                {data}
              </label>
              <div title="delete" onClick={() => handleDeletion(id)}>
                ✖
              </div>
              <span onClick={()=>handleUpdate(data,index)}>🖋</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
