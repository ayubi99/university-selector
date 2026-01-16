import React, { useState } from "react";
import Logo from "./Logo";

const AuthModal = ({ isOpen, type, onClose }) => {
  const [formType, setFormType] = useState(type || "signup");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${formType} submitted:`, formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl w-full max-w-md relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
        >
          ✕
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="mb-8 text-center">
            <Logo className="justify-center mb-4" />
            <p className="text-gray">Student Access Portal</p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {formType === "signup" ? (
              <>
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <span className="text-primary font-bold text-xl mr-2">
                      1.
                    </span>
                    <h2 className="text-2xl font-bold text-dark">
                      Create Account
                    </h2>
                  </div>
                  <p className="text-gray text-sm">
                    Start your university search journey
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />

                  <input
                    type="password"
                    placeholder="Create Password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />

                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-dark transition"
                  >
                    Create Account
                  </button>
                </form>

                <div className="text-center pt-4">
                  <p className="text-gray">
                    Already have an account?{" "}
                    <button
                      onClick={() => setFormType("login")}
                      className="text-primary font-semibold hover:underline"
                    >
                      Log in
                    </button>
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-dark mb-2">
                    Welcome Back
                  </h2>
                  <p className="text-gray text-sm">
                    Access your university dashboard
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />

                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-gray">Remember me</span>
                    </label>
                    <button
                      type="button"
                      className="text-primary hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-dark transition"
                  >
                    Log In
                  </button>
                </form>

                <div className="text-center pt-4">
                  <p className="text-gray">
                    New to UniSelector?{" "}
                    <button
                      onClick={() => setFormType("signup")}
                      className="text-primary font-semibold hover:underline"
                    >
                      Sign up
                    </button>
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t text-center text-sm text-gray">
            <p>
              By continuing, you agree to our Terms of Service and Privacy
              Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
