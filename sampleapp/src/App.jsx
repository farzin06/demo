import { Field, Form, Formik } from 'formik'
import { motion, useAnimation, useScroll } from "framer-motion"
import { useEffect, useState } from "react"
import { FcGoogle } from "react-icons/fc"
import * as Yup from 'yup'
import AdvancedSearchIcon from './assets/advanced-search.svg'
import GrowthIcon from './assets/growth.svg'
import IntegrationsIcon from './assets/integrations.svg'
import LightbulbIcon from './assets/lightbulb.svg'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required')
})

const App = () => {
  const [activeTab, setActiveTab] = useState("register")
  const controls = useAnimation()
  const { scrollY } = useScroll()
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState('down')

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down')
      } else {
        setScrollDirection('up')
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    if (scrollDirection === 'down') {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [scrollDirection, controls])

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values)
    setSubmitting(false)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  }

  const featureVariants = {
    hidden: (direction) => ({ 
      opacity: 0, 
      y: direction === 'down' ? 30 : -30,
      x: direction === 'left' ? -30 : 30 
    }),
    visible: (i) => ({
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  }

  const toggleVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1, ease: "easeOut" }
    },
    active: { 
      scale: 1.05,
      transition: { 
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  return (
    <motion.div 
      className="min-h-screen w-full flex items-center justify-center bg-[#EBF5FF] p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full max-w-[1100px] mx-auto flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden">
        {/* Left Panel (Form) */}
        <div className="w-full lg:w-[450px] p-8">
          {/* Toggle Buttons */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <motion.button
              variants={toggleVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              animate={activeTab === "login" ? "active" : "initial"}
              onClick={() => setActiveTab("login")}
              className={`px-8 py-2 rounded-full text-[16px] transition-colors ${
                activeTab === "login" ? 'bg-[#1E293B] text-white' : 'text-[#64748B]'
              }`}
            >
              Login
            </motion.button>
            <motion.button
              variants={toggleVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              animate={activeTab === "register" ? "active" : "initial"}
              onClick={() => setActiveTab("register")}
              className={`px-8 py-2 rounded-full text-[16px] transition-colors ${
                activeTab === "register" ? 'bg-[#1E293B] text-white' : 'text-[#64748B]'
              }`}
            >
              Register
            </motion.button>
          </div>

          {/* Form */}
          <Formik
            initialValues={{
              email: '',
              password: '',
              confirmPassword: ''
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-[#F8FAFC] rounded-md text-[16px] placeholder-[#94A3B8] focus:outline-none"
                  />
                  {errors.email && touched.email && (
                    <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                  )}
                </div>

                <div>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Set Password"
                    className="w-full px-4 py-3 bg-[#F8FAFC] rounded-md text-[16px] placeholder-[#94A3B8] focus:outline-none"
                  />
                  {errors.password && touched.password && (
                    <div className="text-red-500 text-sm mt-1">{errors.password}</div>
                  )}
                </div>

                {activeTab === "register" && (
                  <div>
                    <Field
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      className="w-full px-4 py-3 bg-[#F8FAFC] rounded-md text-[16px] placeholder-[#94A3B8] focus:outline-none"
                    />
                    {errors.confirmPassword && touched.confirmPassword && (
                      <div className="text-red-500 text-sm mt-1">{errors.confirmPassword}</div>
                    )}
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1E293B] text-white py-3 rounded-md text-[15px] font-medium mt-2"
                >
                  {activeTab === "login" ? "Login" : "Register"}
                </motion.button>

                <div className="text-center mt-4">
                  <p className="text-[15px] text-[#64748B]">
                    {activeTab === "register" ? "Already a member?" : "New here?"}{" "}
                    <button 
                      type="button"
                      onClick={() => setActiveTab(activeTab === "register" ? "login" : "register")}
                      className="text-[#3B82F6] font-medium"
                    >
                      {activeTab === "register" ? "Login now" : "Register now"}
                    </button>
                  </p>
                </div>

                <div className="flex items-center my-6">
                  <div className="flex-1 h-[1px] bg-[#E2E8F0]"></div>
                  <span className="px-4 text-[15px] text-[#94A3B8]">or</span>
                  <div className="flex-1 h-[1px] bg-[#E2E8F0]"></div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="button"
                  className="w-full flex items-center justify-center gap-2 border-2 border-[#1E293B] rounded-md py-2.5 text-[15px] text-[#475569]"
                >
                  <FcGoogle size={20} />
                  <span>Continue with google</span>
                </motion.button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Right Panel (Features) */}
        <div className="flex-1 bg-[#EBF5FF] p-8 lg:p-12">
          <div className="max-w-[480px] space-y-12">
            <motion.div 
              className="flex items-start gap-3"
              variants={featureVariants}
              initial="hidden"
              animate={controls}
              custom={0}
            >
              <div className="flex-shrink-0 mt-1">
                <img src={AdvancedSearchIcon} alt="Advanced Search" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-[16px] font-medium mb-2 text-[#3B82F6]">
                  Advanced Detection Accuracy
                </h3>
                <p className="text-[15px] text-[#475569] leading-relaxed">
                  Identify VPN usage with precision, ensuring you stay in full control of user access and security.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-3"
              variants={featureVariants}
              initial="hidden"
              animate={controls}
              custom={1}
            >
              <div className="flex-shrink-0 mt-1">
                <img src={GrowthIcon} alt="Growth" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-[16px] font-medium mb-2 text-[#3B82F6]">
                  Reliable and Scalable
                </h3>
                <p className="text-[15px] text-[#475569] leading-relaxed">
                  Our system grows with your needs, delivering consistent performance whether you monitor hundreds or millions of users.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-3"
              variants={featureVariants}
              initial="hidden"
              animate={controls}
              custom={2}
            >
              <div className="flex-shrink-0 mt-1">
                <img src={IntegrationsIcon} alt="Integrations" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-[16px] font-medium mb-2 text-[#3B82F6]">
                  Seamless Integration
                </h3>
                <p className="text-[15px] text-[#475569] leading-relaxed">
                  Easily embed our VPN detection into your existing platforms without disrupting your operations.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-3"
              variants={featureVariants}
              initial="hidden"
              animate={controls}
              custom={3}
            >
              <div className="flex-shrink-0 mt-1">
                <img src={LightbulbIcon} alt="Lightbulb" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-[16px] font-medium mb-2 text-[#3B82F6]">
                  Constant Innovation
                </h3>
                <p className="text-[15px] text-[#475569] leading-relaxed">
                  Benefit from regular updates that adapt to new VPN technologies, keeping you one step ahead of potential threats.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default App
