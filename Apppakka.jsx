import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import googleLogo from './assets/google-logo.svg'

function App() {
  const [isLogin, setIsLogin] = useState(true)

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
  
    password: isLogin
      ? Yup.string().required('Password is required')
      : Yup.string()
          .required('Password is required')
          .min(6, 'Minimum 6 characters')
          .matches(/[A-Z]/, 'Must contain an uppercase letter')
          .matches(/\d/, 'Must contain a number')
          .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Must contain a special character'),
  
    confirmPassword: !isLogin
      ? Yup.string()
          .required('Please confirm your password')
          .oneOf([Yup.ref('password')], 'Passwords must match')
      : Yup.string().notRequired()
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema,
    onSubmit: values => {
      if (isLogin) {
        console.log('Login:', values)
      } else {
        console.log('Register:', values)
      }
    }
  })

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
            <div
              className={`absolute w-1/2 h-10 bg-blue-500 rounded-full transition-all duration-300 ${
                isLogin ? 'left-0' : 'left-1/2'
              }`}
            ></div>
            <div className={`w-1/2 text-center z-10 font-semibold transition-colors duration-300 ${isLogin ? 'text-white' : 'text-gray-600'}`}>
              Login
            </div>
            <div className={`w-1/2 text-center z-10 font-semibold transition-colors duration-300 ${!isLogin ? 'text-white' : 'text-gray-600'}`}>
              Register
            </div>
          </div>
        </div>

        {/* Formik Form */}
        <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-4">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={`border rounded-lg p-2 w-full focus:outline-none focus:ring-2 ${
                formik.touched.email && formik.errors.email ? 'border-red-500 ring-red-300' : 'border-gray-300 focus:ring-blue-400'
              }`}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
            )}
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder={isLogin ? 'Password' : 'Set Password'}
              className={`border rounded-lg p-2 w-full focus:outline-none focus:ring-2 ${
                formik.touched.password && formik.errors.password ? 'border-red-500 ring-red-300' : 'border-gray-300 focus:ring-blue-400'
              }`}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
            )}
          </div>

          {!isLogin && (
            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm New Password"
                className={`border rounded-lg p-2 w-full focus:outline-none focus:ring-2 ${
                  formik.touched.confirmPassword && formik.errors.confirmPassword
                    ? 'border-red-500 ring-red-300'
                    : 'border-gray-300 focus:ring-blue-400'
                }`}
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</div>
              )}
            </div>
          )}

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-all"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

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

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <button
          type="button"
          className="flex items-center justify-center w-full border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition-all"
        >
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

export default App
