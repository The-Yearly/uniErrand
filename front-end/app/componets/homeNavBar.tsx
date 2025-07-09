'use client'
import Link from "next/link";
import Logo from "./logo";
import { Menu,X,Compass,Info } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { useState,useEffect } from "react";
import {motion,AnimatePresence} from "framer-motion"
export default function Navbar(){
    const [showMenu,setShowMenu]=useState(true)
    const [expandMenu,setExpandMenu]=useState(false)
    useEffect(()=>{
        const checkWidth = () => setShowMenu(window.innerWidth < 780)
        checkWidth()
        window.addEventListener("resize", checkWidth)
    return () => window.removeEventListener("resize", checkWidth)
    },[])
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{ duration: 2,delay:1}} className="w-full h-18 z-10 shadow-sm">
            <div className="flex items-center justify-between px-5 py-4">
                <Link href={"/"}><Logo/></Link>
                {!showMenu?<div className="flex items-center md:space-x-10">
                <p className="text-xl hover:text-sky-300 border-sky-300 transition-all">About</p>
                <Link href={"/errands"} className="text-xl hover:text-sky-300 border-sky-300 transition-all">Errands</Link>
                <Link href={"/authentication"}><CircleUserRound strokeWidth={1.25} className="w-10 h-10 hover:text-sky-300 transition-all"/></Link>
                </div>
                :<button onClick={()=>setExpandMenu(!expandMenu)}>{showMenu?<Menu/>:<X/>}</button>}
            </div>
            <AnimatePresence initial={false}>
            {(expandMenu && showMenu) &&
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 10 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}

                    className="w-full h-fit rounded-2xl absolute flex items-center flex-col z-40 bg-white">
                <div className="flex mt-5 items-center"><Info className="w-10 h-10" strokeWidth={1.25}/><p className="ml-3 text-xl hover:text-sky-300 hover:border-b-2 border-sky-300 transition-all">About</p></div>
                <div className="flex mt-5 items-center"><Compass className="w-10 h-10" strokeWidth={1.25}/><p className="ml-3 text-xl hover:text-sky-300 hover:border-b-2 border-sky-300 transition-all">Errands</p></div>
                <Link className="my-3 flex items-center" href={"/"}><CircleUserRound strokeWidth={1.25} className="w-10 h-10 hover:text-sky-300 transition-all"/><p className="ml-3 text-xl">Login/Sign-Up</p></Link>
                </motion.div>
            }
            </AnimatePresence>
        </motion.div>
    );
}