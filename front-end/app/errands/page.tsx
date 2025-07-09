'use client'
import { Search } from "lucide-react";
import { motion } from "framer-motion"
import ErrandGrid from "./components/errandGrind";
export default function Explore() {
    const tags = ["All", "Print Out", "Assignments", "Notes", "Drawing", "Running"];

    return (
        <div className="flex flex-col items-center justify-center mt-35 px-4">
            <div className="w-full max-w-[90rem]">
                <div className="relative w-full mb-6">
                    <Search className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500" />
                    <input
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
                    placeholder="Search Errands"/>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex flex-wrap gap-3">
                    {tags.map((tag, i) => (
                    <button
                    key={i}
                    className="px-4 py-2 bg-slate-100 text-sm font-medium rounded-full hover:bg-sky-100 hover:text-sky-600 transition"
                    >
                    {tag}
                    </button>
                ))}
                </motion.div>
            </div>
        <ErrandGrid/>
    </div>
    
);
}
