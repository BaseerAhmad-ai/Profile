import style from "./About.module.css"
export function About(){
return (
    <>
    {/* <!--!===================================================================  -->
    <!-- *------------------- #about------------------- -->
    <!--! =================================================================== --> */}
      <section className={`${style.about}`}>
        <h2>about me</h2>
        <div className={`${style.main}`}>
          <div className={`${style.about_left}`}>
            <div className={`${style.about_img}`}>
              <div className={`${style.bg_img}`}>
                <img
                  src="images/Baseer.jpg"
                  alt="hero_img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className={`${style.txt_about}`}>
            <p className={`${style.about_para}`}>
              Hi, I'm Baseer Ahmad . I'm a web devloper as well as UI/UX
              Designer from Punjab, Pakistan. I specialize in frontend and
              backend development .
            </p>
            <p className={`${style.about_para}`}>
              With 2 years expriance of web developing. I love building
              user-frendly websites and solving real-world problems using code.
            </p>
          </div>
        </div>
      </section>
    </>
    )

}