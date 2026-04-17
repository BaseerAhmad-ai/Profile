import { Form, useActionData, useNavigate } from "react-router-dom";
import { IoLogoFacebook, IoLogoGithub, IoLogoGoogle } from "react-icons/io5";
import { useState } from "react";
export const action = async ({ request }) => {
  try {
    const res = await request.formData();
    let data = Object.fromEntries(res);
    const existing = JSON.parse(localStorage.getItem("auth")) || [];
    // console.log(existing);
    const exist = existing.some((item) => item.email === data.email);
    if (exist) {
      return {
        error: "this email already taken",
      };
    }
    existing.push(data);
    // console.log(existing);
    location.assign("/projects/login");
    localStorage.setItem("auth", JSON.stringify(existing));
    return null;
  } catch (error) {
    console.log(error);
  }
};
export function SignUp() {
  const navigate = useNavigate();
  const actionData = useActionData();
  return (
    <div className="h-dvh w-dvw bg-gray-100 grid md:place-items-center">
      <div className="h-dvh w-dvw  overflow-hidden bg-teal-700 flex md:shadow-xl md:rounded-xl md:w-3/4 md:h-[90%] ">
        <div className="h-dvh w-dvw bg-gray-100 md:ml-4 ">
          <h1 className="text-[clamp(1rem,5vw,2rem)] font-bold p-4 text-teal-700">
            Create Account
          </h1>
          <Form
            method="POST"
            className="w-full  p-4 re lg:p-2 grid justify-items-center gap-5 lg:gap-2"
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
              Or use email for registration
            </p>
            <input
              name="name"
              type="text"
              placeholder="Enter your full name.."
              className="input"
              required
              autoFocus={true}
              autoComplete="off"
            />

            <input
              autoComplete="off"
              name="email"
              type="email"
              placeholder="Enter your email.."
              className="input"
              required
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            />
            {actionData?.error && (
              <p className="text-red-800 px-2 py-1 text-center  w-1/2 rounded-sm  bg-rose-100">
                {actionData?.error}
              </p>
            )}
            <input
              name="password"
              type="password"
              placeholder="Enter Password.."
              className="input"
              required
              minLength={8}
              maxLength={20}
              autoComplete="off"
            />
            <button className="w-2/3 mt-[clamp(1.3rem,5vw,0.6rem)] input hover:shadow-lg hover:bg-slate-200 hover:text-teal-700 bg-teal-700 text-white">
              Sign in
            </button>
          </Form>

          <p className="mt-[clamp(1.3rem,5vw,0.6rem)] ml-[clamp(0.6rem,5vw,1.3rem)] lg:mt-[0.2rem] text-gray-500 text-[clamp(0.6rem,5vw,1.3rem)]">
            Already have an account?
            <span
              onClick={() => navigate("/projects/login")}
              className="text-teal-700 hover:underline text-[clamp(0.6rem,5vw,1.3rem)] lg:mt-[0.2rem]"
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
// xs:480px
// sm:640px
// md:768px
// lg:1024px
// xl:1280px
// 2xl:1536px
