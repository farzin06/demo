import { useState } from 'react'
import googleLogo from '../assets/google-logo.svg';

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div
      className="h-screen w-screen relative"
      style={{
        background: 'linear-gradient(to right, #ffffff 0%, #e3f2ff 20%, #e3f2ff 60%, #ffffff 100%)'
      }}
    >
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96 absolute left-[237px] top-[173px]">
        
        {/* Toggle Switch */}
        <div className="flex items-center justify-center mb-6">
          <div
            className="bg-white w-48 h-10 rounded-full flex items-center relative cursor-pointer border border-gray-300 overflow-hidden"
            onClick={() => setIsLogin(!isLogin)}
          >
            {/* Moving blue slider */}
            <div
              className={`absolute w-1/2 h-10 bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 ${
                isLogin ? 'left-0' : 'left-1/2'
              }`}
            ></div>

            {/* Labels */}
            <div className={`w-1/2 text-center z-10 font-semibold transition-colors duration-300 ${isLogin ? 'text-white' : 'text-gray-600'}`}>
              Login
            </div>
            <div className={`w-1/2 text-center z-10 font-semibold transition-colors duration-300 ${!isLogin ? 'text-white' : 'text-gray-600'}`}>
              Register
            </div>
          </div>
        </div>

        {/* Form */}
        <form className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {isLogin ? (
            <>
              <input
                type="password"
                placeholder="Password"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </>
          ) : (
            <>
              <input
                type="password"
                placeholder="Set Password"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </>
          )}

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-all"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        {/* Below submit button - Text with link */}
        <div className="mt-4 text-center text-sm text-gray-600">
          {isLogin ? (
            <>
              Not a member?{' '}
              <span
                onClick={() => setIsLogin(false)}
                className="text-blue-500 font-semibold cursor-pointer hover:underline"
              >
                Register now
              </span>
            </>
          ) : (
            <>
              Already a member?{' '}
              <span
                onClick={() => setIsLogin(true)}
                className="text-blue-500 font-semibold cursor-pointer hover:underline"
              >
                Login now
              </span>
            </>
          )}
        </div>

        {/* Divider with OR */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Continue with Google Button */}
        <button
          type="button"
          className="flex items-center justify-center w-full border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition-all"
        >
          {/* Google logo */}
          <img
            src={googleLogo}
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          <span className="text-gray-700 font-semibold">Continue with Google</span>
        </button>

      </div>
    </div>
  )
}

export default AuthForm
