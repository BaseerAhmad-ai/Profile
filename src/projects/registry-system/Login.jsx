export function Login() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-2xl flex max-w-4xl w-full overflow-hidden">
  
          {/* Left Side (Form) */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Welcome Back
            </h2>
  
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
  
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
  
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="accent-blue-600" />
                  <span className="text-gray-600">Remember me</span>
                </label>
  
                <span className="text-blue-600 cursor-pointer hover:underline">
                  Forgot password?
                </span>
              </div>
  
              <button
                type="button"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Login
              </button>
            </form>
  
            <p className="text-sm text-gray-500 mt-6">
              Don’t have an account?{" "}
              <span className="text-blue-600 cursor-pointer hover:underline">
                Sign up
              </span>
            </p>
          </div>
  
          {/* Right Side (Vector Image) */}
          <div className="hidden md:flex w-1/2 bg-blue-50 items-center justify-center">
            <img
              src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg"
              alt="Login Illustration"
              className="p-6"
            />
          </div>
  
        </div>
      </div>
    );
  }