import {  useNavigate } from "react-router-dom";

export function Error() {
  const navigate=useNavigate();
    return (
      <>
        <div className="min-h-screen w-screen grid place-items-center bg-gray-200 p-6">
        <img
              src="/images/2205_w046_n004_125b_p1_125.jpg"
              alt="404 error"
              className="w-96 rounded-xl shadow-none"
              loading="lazy" 
              />
          <span className=" md:w-1/2 p-2">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Error 404: Page not found!</h1>
            <p className="text-gray-500 mb-6">
              Sorry, the page you’re looking for doesn’t exist or has been moved.
            </p>
  
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <button onClick={()=>navigate(-1)}
                type="button"
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Go back
              </button>
  
              <button onClick={()=>navigate("/")}
                type="button"
                className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                Go home
              </button>
            </div>
          </span>
  
        </div>
      </>
    );
  }