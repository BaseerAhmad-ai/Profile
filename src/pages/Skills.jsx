import style from "./Skill.module.css"
import  data from "../api/Skill.json"
export function Skills(){
return (
    <>
      {/* <!--!===================================================================  -->
    <!-- *------------------- #skills------------------- -->
    <!--! =================================================================== --> */}
      <section className={`${style.skill}`}>
        <div className={`${style.skill_hadding}`}>
          <h2>skills</h2>
        </div>
        <div className={`${style.skill_main}`}>
          {
          data.map((item,index)=>{
            console.log();
            return <div className={`${style.card}`} key={index}>
            <div className={`${style.block}`}>
              <div className={`${style.log}`}>
                <i className={`fa-brands fa-${item.icon}`}></i>
              </div>
              <p className={`${style.log_para}`}>{item.txt}</p>
            </div>
            <span className={`${style.tag} ${style[item.id]}`}>{item.value}%</span>
  
            <progress max="100"   min="0" value={item.value}></progress>
          </div>
          })
          
          }
        </div>
      </section>
    </>
    )
}