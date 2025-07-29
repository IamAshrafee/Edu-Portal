import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Authentication/FirebaseConfig";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        if (user.emailVerified) {
          navigate("/");
        } else {
          setErrors({ password: "Please verify your email before logging in." });
        }
      } catch (error) {
        console.error("Error signing in:", error);
        const newErrors = {};
        if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
          newErrors.password = "Invalid email or password";
        } else {
          newErrors.password = "An error occurred during login.";
        }
        setErrors(newErrors);
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="max-w-[300px] min-w-[300px] mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label
            htmlFor="email"
            className={`block mb-2 text-sm font-medium ${
              errors.email ? "text-red-700" : "text-gray-900"
            }`}
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className={`bg-gray-50 border ${
              errors.email
                ? "bg-red-50 border-red-500 text-red-900 placeholder-red-700"
                : "border-gray-300 text-gray-900"
            } text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-600">
              <span className="font-medium">Oops!</span> {errors.email}
            </p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className={`block mb-2 text-sm font-medium ${
              errors.password ? "text-red-700" : "text-gray-900"
            }`}
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className={`bg-gray-50 border ${
              errors.password
                ? "bg-red-50 border-red-500 text-red-900 placeholder-red-700"
                : "border-gray-300 text-gray-900"
            } text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="mt-2 text-sm text-red-600">
              <span className="font-medium">Oops!</span> {errors.password}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;