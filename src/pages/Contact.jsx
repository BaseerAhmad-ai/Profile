import style from "./Contact.module.css"
export function Contact(){
return (
    <>
     {/* <!--!===================================================================  -->
    <!-- *------------------- #contact------------------- -->
    <!--! =================================================================== --> */}
      <section className={`${style.contact_section}`}>
        <h3>contact us</h3>
        <form action="#" method="post">
          <p className={`${style.contact_para}`}>
            Feel free to send us a message for project, suggestion or question.
          </p>
          <div className={`${style.label}`}>
            <label htmlFor="name"> name :</label>
            <input
              type="text"
              name=""
              id="name"
              autoComplete="off"
              placeholder="Enter your name.."
              required
            />
            <label htmlFor="email">email :</label>
            <input
              type="text"
              name=""
              id="email"
              minLength="15"
              maxLength="25"
              autoComplete="off"
              placeholder="Enter your email.."
              required
              pattern="[a-zA-Z\d]+(?:[.%+-_][a-zA-Z\d]+)*@[a-zA-Z\d]+\.[a-zA-Z\d]{2,}"
            />
            <label htmlFor="mass">massage :</label>
            <textarea
              name=""
              id="mass"
              cols="60"
              rows="5"
              placeholder="Massage"
            ></textarea>
            <button type="submit">Send massage</button>
          </div>
        </form>
        <div className={`${style.link_div}`}>
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
      </section>
    </>
    )
}