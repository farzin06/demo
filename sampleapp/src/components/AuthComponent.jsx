import { Lightbulb, Network, Plug, SearchCheck } from 'lucide-react';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import Feature from './Feature';

const AuthComponent = () => {
  const [isRegister, setIsRegister] = useState(true);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#EBF5FF]">
      <div className="w-full max-w-[1200px] mx-auto flex bg-white rounded-2xl overflow-hidden">
        {/* Left Panel (Form) */}
        <div className="w-[500px] p-8">
          {/* Toggle Buttons */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <button
              onClick={() => setIsRegister(false)}
              className={`px-8 py-2 rounded-full text-[15px] transition-colors ${
                !isRegister ? 'bg-[#1E293B] text-white' : 'text-[#64748B]'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsRegister(true)}
              className={`px-8 py-2 rounded-full text-[15px] transition-colors ${
                isRegister ? 'bg-[#1E293B] text-white' : 'text-[#64748B]'
              }`}
            >
              Register
            </button>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-[#F8FAFC] rounded-md text-[15px] placeholder-[#94A3B8]"
            />

            <div className="relative">
              <input
                type="password"
                placeholder="Set Password"
                className="w-full px-4 py-3 bg-[#F8FAFC] rounded-md text-[15px] placeholder-[#94A3B8]"
              />
              <button 
                type="button" 
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="#94A3B8"/>
                </svg>
              </button>
            </div>

            {isRegister && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-3 bg-[#F8FAFC] rounded-md text-[15px] placeholder-[#94A3B8]"
              />
            )}

            <button
              type="submit"
              className="w-full bg-[#1E293B] text-white py-3 rounded-md text-[15px] font-medium mt-2"
            >
              Register
            </button>

            <div className="text-center mt-4">
              <p className="text-[14px] text-[#64748B]">
                Already a member?{' '}
                <button className="text-[#3B82F6] font-medium">
                  Login now
                </button>
              </p>
            </div>

            <div className="flex items-center my-6">
              <div className="flex-1 h-[1px] bg-[#E2E8F0]"></div>
              <span className="px-4 text-[14px] text-[#94A3B8]">or</span>
              <div className="flex-1 h-[1px] bg-[#E2E8F0]"></div>
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 border border-[#E2E8F0] rounded-md py-2.5 text-[14px] text-[#475569]"
            >
              <FcGoogle size={20} />
              <span>Continue with google</span>
            </button>
          </div>
        </div>

        {/* Right Panel (Features) */}
        <div className="flex-1 bg-[#EBF5FF] p-12">
          <div className="max-w-[480px] space-y-8">
            <Feature
              icon={<SearchCheck size={20} className="text-[#3B82F6]" />}
              title="Advanced Detection Accuracy"
              titleColor="text-[#3B82F6]"
              desc="Identify VPN usage with precision, ensuring you stay in full control of user access and security."
            />
            <Feature
              icon={<Network size={20} className="text-[#3B82F6]" />}
              title="Reliable and Scalable"
              titleColor="text-[#3B82F6]"
              desc="Our system grows with your needs, delivering consistent performance whether you monitor hundreds or millions of users."
            />
            <Feature
              icon={<Plug size={20} className="text-[#3B82F6]" />}
              title="Seamless Integration"
              titleColor="text-[#3B82F6]"
              desc="Easily embed our VPN detection into your existing platforms without disrupting your operations."
            />
            <Feature
              icon={<Lightbulb size={20} className="text-[#3B82F6]" />}
              title="Constant Innovation"
              titleColor="text-[#3B82F6]"
              desc="Benefit from regular updates that adapt to new VPN technologies, keeping you one step ahead of potential threats."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthComponent; 