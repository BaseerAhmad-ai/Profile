export function Wrong() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-2xl flex max-w-4xl w-full overflow-hidden">
  
          {/* Left Side (Illustration) */}
          <div className="hidden md:flex w-1/2 bg-red-50 items-center justify-center">
            <img
              src="https://img.freepik.com/free-vector/access-denied-concept-illustration_114360-1934.jpg"
              alt="Login Failed Illustration"
              className="p-6"
            />
          </div>
  
          {/* Right Side (Content) */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center text-center">
            
            <div className="bg-red-100 text-red-600 rounded-full w-16 h-16 flex items-center justify-center mb-4">
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
  
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Login Failed
            </h2>
  
            <p className="text-gray-500 mb-6">
              Invalid email or password. Please try again.
            </p>
  
            <div className="flex space-x-4">
              <button
                type="button"
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
              >
                Try Again
              </button>
  
              <button
                type="button"
                className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                Back to Home
              </button>
            </div>
  
          </div>
  
        </div>
      </div>
    );
  }