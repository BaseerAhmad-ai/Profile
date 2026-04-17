import style from "./Sidebar.module.css";
import data from "../../api/Header.json";
import { NavLink } from "react-router-dom";
export function Sidebar({show}) {
  if (show) {
    return (
      <>
        {/* <!--!===================================================================  -->
        <!-- *------------------- #dropdown------------------- -->
        <!--! =================================================================== --> */}
        <section
          className={`${style.drop_div} drop_child ${
            show ? style.show : style.hidden
          }`}
        >
          <nav className={`${style.nav}`}>
            <ul className="drop_child">
              {
              data.map((item,index)=>{
                return <li key={index}>
                <NavLink to={`/${item.txt}`}>{item.txt}</NavLink>
              </li>
              })
              }
              <li>
                <i className="fa-brands fa-whatsapp"></i>
                <a href="http://wa.me/9203703892252?text=Hello ">What's up</a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-github"></i>github
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-linkedin"></i>linkin
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </>
    );
  }
}
