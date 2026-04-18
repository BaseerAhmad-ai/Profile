import style from "./Header.module.css"
import data from "../../api/Header.json"
import {useState } from "react";
import { Sidebar } from "./Sidebar";
import { NavLink } from "react-router-dom";
export function Header(){
  const [show,setShow]=useState(false);
  const handleSidebar=()=>{
    setShow(prevs=>!prevs);
  }
  document.body.addEventListener("click", (e) => {
    if (!e.target.classList.contains("drop_child")) {
      setShow(false);
    }
  });
return (
  <>
   {/* <!--! ===================================================================  -->
    <!-- *------------------- #header------------------- -->
    <!--! =================================================================== --> */}
        <header className="header">
          <nav>
            <div className={`${style.logo}`}>Protfolio</div>
            <div className={`${style.link_nav}`}>
              <ul>
                {
                data.map((item,index)=>{
                return <li key={index}>
                <NavLink to={`/${item.txt}`}>{item.txt}</NavLink>
              </li>
                })
                }
                <div onClick={handleSidebar} className={`${style.menu} drop_child`}>{show?"&#9776;":"x"}</div>
              </ul>
            </div>
          </nav>
        </header>
        <Sidebar show={show}/>
  </>
  );
}