import style from "./Projects.module.css"
import data from "../api/Project.json"
import { useNavigate } from "react-router-dom"
export function Project(){
  const navigate=useNavigate();
return (
    <>
    {/* <!--!===================================================================  -->
    <!-- *------------------- #project------------------- -->
    <!--! =================================================================== --> */}
      <section className={`${style.pro}`}>
        <div className={`${style.pro_hadding}`}>
          <h2>projects</h2>
        </div>
        <div className={`${style.pro_main}`}>
          {
          data.map((item,index)=>{
          return <div className={`${style.crd}`} key={index}>
          <h3 className={`${style.pro_para}`}>{item.txt}</h3>
          <div className={`${style.pro_btns}`}>
            <div onClick={()=>navigate(`/${item.url}`)} className={`${style.view_btn}`}>
              View on GitHub
            </div>
            <div onClick={()=>navigate(`/${item.url}`)} className={`${style.view_btn}`}>
              Live Demo
            </div>
          </div>
        </div>
          })
          }
        </div>
      </section>
    </>
    )

}