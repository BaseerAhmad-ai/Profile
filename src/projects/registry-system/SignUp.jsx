import { Form, useNavigate } from "react-router-dom";
import { IoLogoFacebook, IoLogoGithub, IoLogoGoogle } from "react-icons/io5";
export const form = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(data, res);
    return null;
  } catch (error) {
    console.log(error);
  }
};
export function SignUp() {
  const navigate = useNavigate();
  return (
    // lg:place-items-center
    <div className="h-dvh w-dvw bg-gray-100 grid ">
      <div className="h-dvh w-dvw  overflow-hidden bg-teal-700 flex ">
        {/* lg:rounded-xl lg:shadow-xl lg:w-[80dvw]lg:h-3/4  lg:items-center lg:gap-5 lg:justify-around*/}
        <div className="h-dvh w-dvw bg-gray-100 sm:max-w-fit  ">
          {/*lg:ml-4 lg:h-full lg:w-3/4*/}
          <h1 className="text-3xl font-bold p-4 text-teal-700">
            Create Account
          </h1>
          <Form
            action="/signup"
            method="POST"
            className="w-full  p-4 grid justify-items-center gap-5"
          >
            <div className="flex gap-3 justify-center ">
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
            <p className="text-xl font-bold text-teal-700">
              Or use email for registration
            </p>
            <input
              name="name"
              type="text"
              placeholder="Enter your full name.."
              className="input"
              required
              autoFocus={true}
            />

            <input
              name="email"
              type="email"
              placeholder="Enter your email.."
              className="input"
              required
            />

            <input
              name="password"
              type="password"
              placeholder="Enter Password.."
              className="input"
              required
            />
            <button
              className="w-2/3  input hover:shadow-lg hover:bg-slate-200 hover:text-teal-700 bg-teal-700 text-white"
              // onClick={() => navigate("/login")}
            >
              Sign in
            </button>
          </Form>

          <p className=" ml-2 text-sm text-gray-500 ">
            Already have an account?
            <span
              // onClick={() => navigate("/login")}
              className="text-teal-700 hover:underline"
            >
              Login
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
// vsm:370px
// lsm:520px
// sm:640px
// md:768px
// lg:1024px
// xl:1280px
// 2xl:1536px
