"use client";
import type React from "react";
import { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import axios, { type AxiosError } from "axios";
import { Eye, EyeClosed } from "lucide-react";
import type { User } from "@/utils/types";
import Cookies from "js-cookie";
import { motion, AnimatePresence } from "framer-motion";
export default function Signup() {
  const [data, setData] = useState<User>({
    user_name: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const validateUsername = (username: string): boolean => {
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    return usernameRegex.test(username);
  };

  const validatePassword = (password: string): boolean => {
    return password.length >= 8;
  };

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    if (isSignUp) {
      if (!validateUsername(data.user_name)) {
        toast.error(
          "Username can only contain letters, numbers, and underscores",
        );
        return;
      }

      if (!validatePassword(data.password)) {
        toast.error("Password must be at least 8 characters long");
        return;
      }
    }

    setLoading(true);
    try {
      let res;
      if (isSignUp) {
        res = await axios.post(
          process.env.NEXT_PUBLIC_BACKEND_URL + "/api/v1/signUp",
          data,
        );
      } else {
        console.log(
          process.env.NEXT_PUBLIC_BACKEND_URL + "/api/v1/login",
          "ASd",
        );
        res = await axios.post(
          process.env.NEXT_PUBLIC_BACKEND_URL + "/api/v1/login",
          data,
        );
      }
      toast.success(res.data.message);
      console.log(res.data);
      if (res.status === 200) {
        const creds = {
          username: res.data.username,
          session: res.data.session,
        };
        Cookies.set("creds", JSON.stringify(creds));
        setTimeout(() => {
          window.location.href = "/";
        }, 200);
      }
    } catch (e) {
      const error = e as AxiosError<{ message: string }>;
      toast.warn(error.response?.data?.message || "An unknown error occurred");
    }
    setLoading(false);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <ToastContainer aria-label={"notification"} />
      <Image
        className="w-full h-screen object-cover"
        src="https://images.unsplash.com/photo-1642543492457-39a2ce63bb59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={1000}
        height={1000}
        alt="Cafe Img"
      />

      <AnimatePresence>
        <motion.form
          key={isSignUp ? "signup" : "login"}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeIn" }}
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 flex justify-center items-center"
          onSubmit={handleSignup}
        >
          <div className="modal p-8 rounded-lg shadow-lg w-[90vw] max-w-md bg-white bg-opacity-80 backdrop-blur-md">
            <h2 className="text-3xl font-bold text-center mb-6 text-black dark:text-text">
              {isSignUp ? "Sign Up" : "Login"}
            </h2>
            <div className="mb-4">
              <p className="block text-sm font-semibold mb-2 text-black dark:text-text">
                Username{" "}
                {isSignUp && (
                  <span className="text-xs text-gray-500">
                    (letters, numbers, underscores only)
                  </span>
                )}
              </p>
              <input
                type="text"
                value={data.user_name}
                name="username"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="mb-6 relative">
              <p className="block text-sm font-semibold mb-2 text-black dark:text-text">
                Password{" "}
                {isSignUp && (
                  <span className="text-xs text-gray-500">
                    (minimum 8 characters)
                  </span>
                )}
              </p>
              <input
                type={showPassword ? "text" : "password"}
                value={data.password}
                name="password"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-700 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.5 }}
                className="absolute right-3 top-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <Eye size={20} color="#555" />
                ) : (
                  <EyeClosed size={20} color="#555" />
                )}
              </motion.div>
            </div>
            <button
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="submit"
              disabled={loading}
            >
              {loading
                ? isSignUp
                  ? "Signing Up..."
                  : "Logging In..."
                : isSignUp
                  ? "Sign Up"
                  : "Login"}
            </button>
            <p
              className="text-center mt-4 cursor-pointer text-blue-600"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp
                ? "Already have an account? Login"
                : "Don't have an account? Sign Up"}
            </p>
          </div>
        </motion.form>
      </AnimatePresence>
    </>
  );
}
