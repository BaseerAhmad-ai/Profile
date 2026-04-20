import style from "./Hero.module.css"
export function Hero(){
return (
    <>
     {/* <!--!===================================================================  -->
      <!-- *------------------- #hero------------------- -->
      <!--! =================================================================== --> */}

<main className="hero_main">
          <section className={`${style.hero}`}>
            <div className={`${style.txt}`}>
              <h1>Welcome to my protfolio</h1>
              <h2>I'm Baseer Ahmad, web developer & UI/UX Designer</h2>
              <p className={`${style.hero_para}`}>
                Crafting clean code and beautiful interfaces as a software
                engineering student.
              </p>
              <div className={`${style.section2}`}>
                <div className={`${style.links}`}>
                  <a href="#">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
                <div className={`${style.links}`}>
                  <i className="fa-brands fa-whatsapp"></i>
                  <a href="http://wa.me/9203703892252?text=Hello "></a>
                </div>
                <div className={`${style.links}`}>
                  <a href="#"></a>
                </div>
              </div>
              <a href="#about" className={`${style.btn}`}>
                Learn more
              </a>
            </div>
            <div className={`${style.hero_img}`}>
              <div className={`${style.bg_img}`}>
                <img
                  src="images/Baseer.jpg"
                  alt="hero_img"
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        </main>
    </>
    )
}