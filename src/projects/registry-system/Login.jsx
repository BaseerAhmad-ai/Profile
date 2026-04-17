import { Form, useNavigate } from "react-router-dom";
import { IoLogoFacebook, IoLogoGithub, IoLogoGoogle } from "react-icons/io5";
export const loginForm = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    const auth = JSON.parse(localStorage.getItem("auth"));
    const exist = auth.some(
      (item) => data.email === item.email && data.password === item.password
    );
    if (exist) {
      location.assign("/projects/success");
      // console.log(data);
    } else {
      location.assign("/projects/faild");
    }
    return null;
  } catch (error) {
    console.log(error);
  }
};
export function Login() {
  const navigate = useNavigate();
  return (
    <div className="h-dvh w-dvw bg-gray-100 grid md:place-items-center">
      <div className="h-dvh w-dvw  overflow-hidden bg-teal-700 flex md:shadow-xl md:rounded-xl md:w-3/4 md:h-[90%] ">
        <div className="h-dvh w-dvw bg-gray-100 md:ml-4">
          <h1 className="text-[clamp(1rem,5vw,2rem)] font-bold p-4 min-[1100px]:pb-0 text-teal-700">
            Welcome back
          </h1>
          <Form 
            method="POST"
            className="w-full  p-4  grid justify-items-center gap-5 min-[1100px]:gap-3"
          >
            <div className="flex gap-[clamp(0.5rem,5vw,2.5rem)] justify-center ">
              <div className="icon">
                <IoLogoGoogle />
              </div>
              <div className="icon">
                <IoLogoFacebook />
              </div>
              <div className="icon">
                <IoLogoGithub />
              </div>
            </div>
            <p className=" font-normal text-teal-700 text-[clamp(0.6rem,5vw,1.3rem)]">
              Or use email for login
            </p>
            <input
              name="email"
              type="email"
              placeholder="Enter your email.."
              className="input"
              required
              autoFocus={true}
              autoComplete="off"
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            />

            <input
              name="password"
              type="password"
              placeholder="Enter Password.."
              className="input"
              required
              autoComplete="off"
              minLength={8}
              maxLength={20}
            />
            <div className="flex justify-evenly w-full items-center h-10">
              <div>
                <input
                  type="checkbox"
                  name="remember"
                  id="check"
                  className="accent-teal-700 mr-2 size-[clamp(0.6rem,5vw,1rem)]"
                />
                <label
                  htmlFor="check"
                  className=" text-teal-700 text-[clamp(0.6rem,5vw,1rem)]"
                >
                  Remember me
                </label>
              </div>
              <div>
                <a className="text-teal-700 underline hover:decoration-wavy text-[clamp(0.6rem,5vw,1rem)]">
                  Forgot password?
                </a>
              </div>
            </div>
            <button
              className="w-2/3 mt-[clamp(1.3rem,5vw,0.6rem)] lg:mt-[0.3rem] input hover:shadow-lg hover:bg-slate-200 hover:text-teal-700 bg-teal-700 text-white"
            >
              Lonin
            </button>
          </Form>

          <p className="mt-[clamp(1.3rem,5vw,0.6rem)] ml-[clamp(0.6rem,5vw,1.3rem)] lg:mt-[0.2rem] text-gray-500 text-[clamp(0.6rem,5vw,1.3rem)]">
            Don’t have an account?
            <span
              onClick={() => navigate("/projects/signup")}
              className="text-teal-700 hover:underline text-[clamp(0.6rem,5vw,1.3rem)] lg:mt-[0.2rem]"
            >
              Sign up
            </span>
          </p>
        </div>
        <img
          src="/images/3817256.png"
          alt="Signup img"
          className="hidden sm:block w-80  "
        />
      </div>
    </div>
  );
}