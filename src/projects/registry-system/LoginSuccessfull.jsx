import { useNavigate } from "react-router-dom";
export  function LoginSuccess() {
  const navigate=useNavigate()
    return (
          <div className="h-full w-full bg-green-100 flex flex-col justify-center items-center text-center">
            <div className="bg-green-200 text-green-600 rounded-full size-24 flex items-center justify-center mb-10">
              <svg
                className="size-20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
  
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Login Successful!
            </h1>
  
            <p className="text-gray-500 mb-10 text-2xl">
              You have successfully logged into your account.
            </p>
            <div className="sm:flex sm:justify-center sm:gap-7">
            <button
              className=" text-2xl w-[12rem] bg-green-200  h-14 mt-[clamp(1.3rem,5vw,0.6rem)] input  text-green-700"
              onClick={() => navigate("/")}
            >
              Go to home
            </button>
             <button
              className=" text-2xl w-[12rem] bg-green-200  h-14 mt-[clamp(1.3rem,5vw,0.6rem)] input  text-green-700"
              onClick={() => navigate(-1)}
            >
              Go back
            </button>
  
            </div>
          </div>
    );
  }