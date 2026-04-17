import style from "./Footer.module.css"
import data from "../../api/Header.json";
import { NavLink } from "react-router-dom";
export function Footer(){
return (
    <>
    {/* <!--!===================================================================  -->
    <!-- *------------------- #footer---------------------------------------- -->
    <!--! =================================================================== --> */}

<footer>
        <div className={`${style.upper_footer}`}>
          <div className={`${style.section1}`}>
            <h4>contact</h4>
            <ul>
              <li>email</li>
              <li>
                <a href="mailto:baseer000ahmad@gmail.com?subject=Hello&body=Hello%20there!">
                  info@baseer.com
                </a>
              </li>
            </ul>
          </div>
          <div className={`${style.section2}`}>
            <h4>Links</h4>
            <ul>
            {
              data.map((item,index)=>{
                return <li key={index}>
                <NavLink to={`/${item.txt}`}>{item.txt}</NavLink>
              </li>
              })
              }
            </ul>
          </div>
          <div className={`${style.section3}`}>
            <h4>About</h4>
            <p>
              Hi, I'm Baseer Ahmad . I'm a web devloper as well as UI/UX
              Designer from Punjab, Pakistan.
            </p>
          </div>
        </div>
        <div className={`${style.lower_footer}`}>
          <div className={`${style.section1}`}>
            <p>Copy right &copy; by Baseer Ahmad in 2026.</p>
          </div>
          <div className={`${style.section2}`}>
            <div className={`${style.links}`}>
              <a href="#">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
            <div className={`${style.links}`}>
              <a href="http://wa.me/9203703892252?text=Hello "></a>
            </div>
            <div className={`${style.links}`}>
              <a href="#">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
    )
}