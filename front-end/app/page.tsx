"use client";
import Image from "next/image";
import homeImage from "@/public/Home.png";
import Link from "next/link";
import Navbar from "./componets/homeNavBar";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
export function useWindowWidth() {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
export default function Home() {
  console.log(useWindowWidth());
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          scale: { type: "spring", visualDuration: 1, bounce: 0.2 },
        }}
        className="min-h-screen z-0 text-gray-800"
      >
        <div className="flex justify-center">
          <Image
            src={homeImage}
            alt="home"
            className="w-full mt-10 z-0 max-w-[120vh] h-full md:max-h-[64vh] rounded md:rounded-3xl object-cover"
            priority
          />
        </div>
        <div className="flex flex-col items-center mt-10 px-4 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Your Campus, Simplified
          </h1>
          <p className="max-w-2xl text-lg text-gray-600">
            Connect with fellow students to get tasks done quickly and
            efficiently. Whether it’s picking up groceries, delivering a
            forgotten item, or any other campus errand, we’ve got you covered.
          </p>
          <div className="flex space-x-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="/authentication"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium "
            >
              Sign Up
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="/authentication"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium"
            >
              Log In
            </motion.a>
          </div>
        </div>
        <footer className="mt-20 text-center text-sm text-gray-500 py-10">
          &copy; {new Date().getFullYear()} uniErrand. All rights reserved.
        </footer>
      </motion.div>
    </>
  );
}
