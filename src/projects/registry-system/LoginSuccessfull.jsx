export  function LoginSuccess() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-2xl flex max-w-4xl w-full overflow-hidden">
  
          {/* Left Side (Illustration) */}
          <div className="hidden md:flex w-1/2 bg-green-50 items-center justify-center">
            <img
              src="https://img.freepik.com/free-vector/successful-login-concept-illustration_114360-742.jpg"
              alt="Success Illustration"
              className="p-6"
            />
          </div>
  
          {/* Right Side (Content) */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center text-center">
            
            <div className="bg-green-100 text-green-600 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8"
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
  
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Login Successful!
            </h2>
  
            <p className="text-gray-500 mb-6">
              You have successfully logged into your account.
            </p>
  
            <button
              type="button"
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Go to Dashboard
            </button>
  
          </div>
  
        </div>
      </div>
    );
  }