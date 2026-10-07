import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import logo from '../images/logo.png';

const AuthPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine active state from URL: /register -> isSignUp = true, /login -> isSignUp = false
  const isRegisterRoute = location.pathname.toLowerCase().includes('register');
  const [isSignUp, setIsSignUp] = useState(isRegisterRoute);
  
  // Feedback state
  const [feedback, setFeedback] = useState(null);

  // Sync state when URL changes
  useEffect(() => {
    setIsSignUp(location.pathname.toLowerCase().includes('register'));
    setFeedback(null);
  }, [location.pathname]);

  const handleSwitchToLogin = (e) => {
    if (e) e.preventDefault();
    setIsSignUp(false);
    navigate('/login');
  };

  const handleSwitchToRegister = (e) => {
    if (e) e.preventDefault();
    setIsSignUp(true);
    navigate('/register');
  };

  // Form states
  const [loginForm, setLoginForm] = useState({ email: '', password: '', remember: false });
  const [signupForm, setSignupForm] = useState({ name: '', email: '', orgType: 'Membership Organization', password: '', agree: false });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginForm.email || !loginForm.password) {
      setFeedback({ type: 'error', message: 'Please enter your email and password.' });
      return;
    }
    setFeedback({ type: 'success', message: 'Logged in successfully! Redirecting...' });
    setTimeout(() => navigate('/'), 1500);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (!signupForm.name || !signupForm.email || !signupForm.password) {
      setFeedback({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }
    setFeedback({ type: 'success', message: 'Account created successfully! Welcome to Nexcent.' });
    setTimeout(() => navigate('/'), 1500);
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex flex-col justify-between py-6 px-4 sm:px-6 lg:px-8">
      {/* Top Header */}
      <div className="max-w-6xl w-full mx-auto flex items-center justify-between pb-6">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <img src={logo} alt="Nexcent Logo" className="h-7 w-auto" />
          <span className="text-[#263238] font-bold text-2xl tracking-tight group-hover:text-[#4CAF4F] transition-colors">
            Nexcent
          </span>
        </Link>
        <Link
          to="/"
          className="text-sm font-medium text-[#717171] hover:text-[#4CAF4F] flex items-center gap-1.5 transition-colors"
        >
          <span>← Back to Home</span>
        </Link>
      </div>

      {/* Main Double-Slider Container */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-4xl relative">
          {/* Notification Alert */}
          {feedback && (
            <div
              className={`mb-4 mx-auto max-w-md p-3.5 rounded-lg text-sm text-center font-medium shadow-sm transition-all ${
                feedback.type === 'success'
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}
            >
              {feedback.message}
            </div>
          )}

          {/* Desktop & Tablet: Double Slider */}
          <div
            className={`hidden md:block auth-slider-container mx-auto ${
              isSignUp ? 'right-active' : ''
            }`}
          >
            {/* SIGN IN FORM PANEL */}
            <div className="auth-form-panel auth-signin-panel">
              <form onSubmit={handleLoginSubmit} className="w-full max-w-sm flex flex-col items-center">
                <h2 className="text-2xl lg:text-3xl font-bold text-[#263238] mb-2">Sign in to Nexcent</h2>
                <p className="text-xs text-[#717171] mb-5">Access your membership dashboard and community</p>

                {/* Social Login */}
                <div className="flex gap-3 mb-5">
                  <button
                    type="button"
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-sm font-bold text-gray-700 shadow-2xs cursor-pointer"
                    title="Sign in with Google"
                  >
                    G
                  </button>
                  <button
                    type="button"
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-sm font-bold text-blue-600 shadow-2xs cursor-pointer"
                    title="Sign in with LinkedIn"
                  >
                    in
                  </button>
                  <button
                    type="button"
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-sm font-bold text-gray-900 shadow-2xs cursor-pointer"
                    title="Sign in with GitHub"
                  >
                    ⌥
                  </button>
                </div>

                <div className="flex items-center w-full my-3">
                  <div className="flex-grow border-t border-gray-200"></div>
                  <span className="px-3 text-xs text-gray-400">or use your email account</span>
                  <div className="flex-grow border-t border-gray-200"></div>
                </div>

                {/* Inputs */}
                <div className="w-full space-y-3 mt-1">
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={loginForm.email}
                      onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#4D4D4D] focus:outline-none focus:ring-2 focus:ring-[#4CAF4F] focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      required
                      placeholder="Password"
                      value={loginForm.password}
                      onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#4D4D4D] focus:outline-none focus:ring-2 focus:ring-[#4CAF4F] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="w-full flex items-center justify-between text-xs mt-3 mb-5">
                  <label className="flex items-center text-gray-500 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={loginForm.remember}
                      onChange={(e) => setLoginForm({ ...loginForm, remember: e.target.checked })}
                      className="rounded border-gray-300 text-[#4CAF4F] focus:ring-[#4CAF4F] mr-1.5"
                    />
                    Remember me
                  </label>
                  <a href="#forgot" className="text-[#4CAF4F] hover:underline">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#4CAF4F] hover:bg-[#3d913f] text-white font-semibold rounded-lg shadow-sm hover:shadow transition-all cursor-pointer text-sm uppercase tracking-wider"
                >
                  Sign In
                </button>

                {/* Bottom link to Register */}
                <div className="mt-5 text-center text-xs text-[#717171]">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={handleSwitchToRegister}
                    className="text-[#4CAF4F] font-semibold hover:underline cursor-pointer"
                  >
                    Register Now
                  </button>
                </div>
              </form>
            </div>

            {/* SIGN UP (REGISTER) FORM PANEL */}
            <div className="auth-form-panel auth-signup-panel">
              <form onSubmit={handleSignupSubmit} className="w-full max-w-sm flex flex-col items-center">
                <h2 className="text-2xl lg:text-3xl font-bold text-[#263238] mb-1">Create Account</h2>
                <p className="text-xs text-[#717171] mb-4">Start managing your community with Nexcent</p>

                {/* Social Signup */}
                <div className="flex gap-3 mb-4">
                  <button
                    type="button"
                    className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-sm font-bold text-gray-700 shadow-2xs cursor-pointer"
                    title="Sign up with Google"
                  >
                    G
                  </button>
                  <button
                    type="button"
                    className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-sm font-bold text-blue-600 shadow-2xs cursor-pointer"
                    title="Sign up with LinkedIn"
                  >
                    in
                  </button>
                  <button
                    type="button"
                    className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-sm font-bold text-gray-900 shadow-2xs cursor-pointer"
                    title="Sign up with GitHub"
                  >
                    ⌥
                  </button>
                </div>

                <div className="flex items-center w-full my-2">
                  <div className="flex-grow border-t border-gray-200"></div>
                  <span className="px-3 text-xs text-gray-400">or register with email</span>
                  <div className="flex-grow border-t border-gray-200"></div>
                </div>

                {/* Inputs */}
                <div className="w-full space-y-2.5 mt-1">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={signupForm.name}
                      onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#4D4D4D] focus:outline-none focus:ring-2 focus:ring-[#4CAF4F] focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Work Email Address"
                      value={signupForm.email}
                      onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#4D4D4D] focus:outline-none focus:ring-2 focus:ring-[#4CAF4F] focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <select
                      value={signupForm.orgType}
                      onChange={(e) => setSignupForm({ ...signupForm, orgType: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#4D4D4D] focus:outline-none focus:ring-2 focus:ring-[#4CAF4F] focus:bg-white transition-all"
                    >
                      <option value="Membership Organization">Membership Organization</option>
                      <option value="National Association">National Association</option>
                      <option value="Clubs & Sports Group">Clubs & Sports Group</option>
                      <option value="Non-profit / Charity">Non-profit / Charity</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="password"
                      required
                      placeholder="Create Password"
                      value={signupForm.password}
                      onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#4D4D4D] focus:outline-none focus:ring-2 focus:ring-[#4CAF4F] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="w-full text-xs text-gray-500 mt-3 mb-4">
                  <label className="flex items-start cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={signupForm.agree}
                      onChange={(e) => setSignupForm({ ...signupForm, agree: e.target.checked })}
                      className="rounded border-gray-300 text-[#4CAF4F] focus:ring-[#4CAF4F] mt-0.5 mr-2"
                    />
                    <span>
                      I agree to the{' '}
                      <a href="#terms" className="text-[#4CAF4F] hover:underline">
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="#privacy" className="text-[#4CAF4F] hover:underline">
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#4CAF4F] hover:bg-[#3d913f] text-white font-semibold rounded-lg shadow-sm hover:shadow transition-all cursor-pointer text-sm uppercase tracking-wider"
                >
                  Create Account
                </button>

                {/* Bottom link to Login */}
                <div className="mt-4 text-center text-xs text-[#717171]">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={handleSwitchToLogin}
                    className="text-[#4CAF4F] font-semibold hover:underline cursor-pointer"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>

            {/* OVERLAY CONTAINER (Florin Pop Double Slider Effect) */}
            <div className="auth-overlay-container">
              <div className="auth-overlay-track">
                {/* Left Overlay (shown when Register form is active, prompt to go to Login) */}
                <div className="auth-overlay-box auth-overlay-left">
                  <h3 className="text-3xl font-bold mb-3">Welcome Back!</h3>
                  <p className="text-sm text-green-50 mb-8 max-w-xs leading-relaxed">
                    To keep connected with your community and manage members, please log in with your credentials.
                  </p>
                  <button
                    type="button"
                    onClick={handleSwitchToLogin}
                    className="px-8 py-2.5 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#4CAF4F] transition-all cursor-pointer text-sm uppercase tracking-wider shadow-sm"
                  >
                    Sign In
                  </button>
                </div>

                {/* Right Overlay (shown when Login form is active, prompt to go to Register) */}
                <div className="auth-overlay-box auth-overlay-right">
                  <h3 className="text-3xl font-bold mb-3">Hello, Friend!</h3>
                  <p className="text-sm text-green-50 mb-8 max-w-xs leading-relaxed">
                    Enter your personal details and start your journey managing memberships effortlessly with Nexcent.
                  </p>
                  <button
                    type="button"
                    onClick={handleSwitchToRegister}
                    className="px-8 py-2.5 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#4CAF4F] transition-all cursor-pointer text-sm uppercase tracking-wider shadow-sm"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Screen (< 768px): Responsive Clean Card with Toggle */}
          <div className="block md:hidden bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            {/* Mobile Tab Switcher */}
            <div className="flex bg-gray-100 p-1 rounded-xl mb-6">
              <button
                type="button"
                onClick={handleSwitchToLogin}
                className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                  !isSignUp ? 'bg-white text-[#263238] shadow-xs' : 'text-[#717171]'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={handleSwitchToRegister}
                className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                  isSignUp ? 'bg-white text-[#4CAF4F] shadow-xs' : 'text-[#717171]'
                }`}
              >
                Register
              </button>
            </div>

            {/* Mobile Form Views */}
            {!isSignUp ? (
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div className="text-center mb-4">
                  <h2 className="text-2xl font-bold text-[#263238]">Welcome Back</h2>
                  <p className="text-xs text-[#717171] mt-1">Sign in to your Nexcent account</p>
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#4D4D4D] focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    required
                    placeholder="Password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#4D4D4D] focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]"
                  />
                </div>

                <div className="flex items-center justify-between text-xs">
                  <label className="flex items-center text-gray-500">
                    <input
                      type="checkbox"
                      checked={loginForm.remember}
                      onChange={(e) => setLoginForm({ ...loginForm, remember: e.target.checked })}
                      className="rounded border-gray-300 text-[#4CAF4F] mr-1.5"
                    />
                    Remember me
                  </label>
                  <a href="#forgot" className="text-[#4CAF4F]">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#4CAF4F] text-white font-semibold rounded-lg shadow-sm text-sm uppercase"
                >
                  Sign In
                </button>

                <div className="pt-2 text-center text-xs text-[#717171]">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={handleSwitchToRegister}
                    className="text-[#4CAF4F] font-semibold underline"
                  >
                    Register Now
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSignupSubmit} className="space-y-4">
                <div className="text-center mb-4">
                  <h2 className="text-2xl font-bold text-[#263238]">Create Account</h2>
                  <p className="text-xs text-[#717171] mt-1">Join thousands of organizations</p>
                </div>

                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={signupForm.name}
                    onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#4D4D4D] focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Work Email Address"
                    value={signupForm.email}
                    onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#4D4D4D] focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]"
                  />
                </div>
                <div>
                  <select
                    value={signupForm.orgType}
                    onChange={(e) => setSignupForm({ ...signupForm, orgType: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#4D4D4D] focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]"
                  >
                    <option value="Membership Organization">Membership Organization</option>
                    <option value="National Association">National Association</option>
                    <option value="Clubs & Sports Group">Clubs & Sports Group</option>
                    <option value="Non-profit / Charity">Non-profit / Charity</option>
                  </select>
                </div>
                <div>
                  <input
                    type="password"
                    required
                    placeholder="Password"
                    value={signupForm.password}
                    onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#4D4D4D] focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#4CAF4F] text-white font-semibold rounded-lg shadow-sm text-sm uppercase"
                >
                  Create Account
                </button>

                <div className="pt-2 text-center text-xs text-[#717171]">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={handleSwitchToLogin}
                    className="text-[#4CAF4F] font-semibold underline"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer copyright */}
      <div className="text-center text-xs text-gray-400 pt-6">
        © 2026 Nexcent Inc. Secure authentication with 256-bit encryption.
      </div>
    </div>
  );
};

export default AuthPage;
