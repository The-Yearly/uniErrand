"use client";
import Link from "next/link";
import Logo from "./logo";
import { CircleUserRound, Bell, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(true);
  const [expandMenu, setExpandMenu] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setShowMenu(window.innerWidth < 780);
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <nav className="w-full h-fit shadow-sm bg-white fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-6">
          <Link href={"/"}>
            <Logo />
          </Link>
          {!showMenu && (
            <>
              <Link
                href="/profile/dashboard"
                className="text-base font-medium hover:text-sky-500 transition"
              >
                Dashboard
              </Link>
              <Link
                href="/errands"
                className="text-base font-medium hover:text-sky-500 transition"
              >
                Errands
              </Link>
              <Link
                href="/profile/postTask"
                className="text-base font-medium hover:text-sky-500 transition"
              >
                Post a Task
              </Link>
            </>
          )}
        </div>

        <div className="flex items-center space-x-4">
          {!showMenu ? (
            <>
              <div className="bg-slate-100 rounded-full w-10 h-10 flex items-center justify-center hover:bg-slate-200 transition">
                <Bell strokeWidth={1.5} className="w-5 h-5" />
              </div>
              <CircleUserRound strokeWidth={1.25} className="w-8 h-8" />
            </>
          ) : (
            <button
              onClick={() => setExpandMenu(!expandMenu)}
              className="text-gray-700"
            >
              {expandMenu ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {expandMenu && showMenu && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-[70vw] max-w-sm bg-white shadow-lg z-40 px-6 py-10 flex flex-col space-y-6"
          >
            <Link
              href="/errands"
              onClick={() => setExpandMenu(false)}
              className="text-lg font-semibold text-gray-700 hover:text-sky-500 transition"
            >
              Dashboard
            </Link>
            <Link
              href="/errands"
              onClick={() => setExpandMenu(false)}
              className="text-lg font-semibold text-gray-700 hover:text-sky-500 transition"
            >
              errands
            </Link>
            <Link
              href="/profile/postTask"
              onClick={() => setExpandMenu(false)}
              className="text-lg font-semibold text-gray-700 hover:text-sky-500 transition"
            >
              Post a Task
            </Link>
            <div className="flex items-center space-x-3 mt-10">
              <Bell className="w-6 h-6" />
              <CircleUserRound strokeWidth={1.25} className="w-8 h-8" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
