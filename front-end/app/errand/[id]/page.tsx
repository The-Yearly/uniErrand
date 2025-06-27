'use client'
import { Errands } from "@/utils/types"
import { FileArchive,UserCircle,Phone } from "lucide-react"
import Link from "next/link"
import { motion, scale } from "framer-motion"
import UserCard from "../components/usercard"
export default function TaskPage(){
    const errand:Errands= {errand_id: 3,
        errand_title: "College Notes Printout",
        tags: ["Print Out", "Study"],
        errand_pic: "/images/print.jpg",
        errand_desc: "Collect all lecture notes, assignments, and study materials for the CSE S4 semester subjects. Ensure that each subject's notes are sorted in the correct order, printed clearly on A4 sheets, and stapled together neatly. Double-check for any missing pages or poor-quality scans before printing. Once printed, organize them in labeled folders or bundles so they're easy to use during exam preparation.",
        attachments:["https://www.khanacademy.org", "https://www.coursera.org", "https://ocw.mit.edu", "https://www.geeksforgeeks.org", "https://developer.mozilla.org", "https://stackoverflow.com", "https://github.com", "https://www.w3schools.com", "https://dribbble.com", "https://www.behance.net", "https://coolors.co", "https://fonts.google.com", "https://www.youtube.com", "https://www.spotify.com", "https://www.reddit.com", "https://www.netflix.com", "https://www.remove.bg", "https://tinypng.com", "https://www.canva.com", "https://chat.openai.com"],
        auth_name: "Sneha R",
        status: "Completed",
        pay: 80}

    const applications=[
            {
                "username": "techieJohn",
                "applicationMessage": "I'm great at solving problems under pressure and have experience with delivery apps.",
                "rating": 4.8
            },
            {
                "username": "codeWithMeera",
                "applicationMessage": "I'm reliable, organized, and always meet deadlines. This task suits me well!",
                "rating": 4.9
            },
            {
                "username": "arjun_x",
                "applicationMessage": "I live nearby and can complete this errand quickly and efficiently.",
                "rating": 4.5
            },
            {
                "username": "sneha24",
                "applicationMessage": "I’ve done similar errands before and received great feedback. Happy to help!",
                "rating": 5.0
            },
            {
                "username": "debugDude",
                "applicationMessage": "I’m currently free and can take this up immediately. Let me know!",
                "rating": 4.3
            }
            ]

    return(
        <motion.div initial={{y:40,opacity:0}} animate={{opacity:1,y:0}} transition={{duration:0.5,ease:"easeIn"}} className="ml-3 sm:ml-12 md:ml-20 lg:ml-44 mt-28 md:mt-36 ">
            <div className="grid grid-cols-1 sm:grid-cols-2">
                <div>
                <div className="flex w-fit flex-col">
                    <p className="text-4xl sm:text-5xl font-georama-mono ">{errand.errand_title }</p>
                    <div className="flex ml-3 mt-3 items-center">
                        <span className="flex">by <p className="ml-1 hover:text-sky-500 cursor-pointer transition-colors">{errand.auth_name}</p></span>
                        <span className="bg-green-400 text-sm ml-2 text-white px-3 py-1 rounded-full">{errand.status}</span>
                    </div>
                </div>
                    <p className="mt-10 font-georama-mono text-20 md:text-xl">{errand.errand_desc}</p>
                    <p className="mt-10 text-4xl sm:text-3xl font-georama-mono">Files</p>
                    <div className="grid grid-cols-3 md:grid-cols-7">{errand.attachments?.map((file,i)=><motion.a key={i} whileHover={{y:-10}} whileTap={{scale:0.8}} className="flex w-full mr-13 mt-4 hover:text-sky-500 transition-colors" href={file}><FileArchive/><p>File {i+1}</p></motion.a>)}</div>
                    <p className="mt-10 text-4xl sm:text-3xl font-georama-mono">Contact</p>
                    <div className="flex items-center mt-4 "><motion.div whileHover={{y:-10}} whileTap={{scale:0.9}} className="flex items-center  hover:text-sky-500 cursor-pointer transition-colors"><UserCircle strokeWidth={1.25} className="w-10 h-10"/><Link href={"/"} className="ml-2">{errand.auth_name}</Link></motion.div><motion.div  whileHover={{y:-10}} whileTap={{scale:0.9}} className="flex items-center hover:text-green-500 cursor-pointer"><Phone className="ml-8"/><p className="ml-2">+91 xxxxx-xxxxx</p></motion.div></div>
                    <p className="mt-10 text-4xl sm:text-3xl font-georama-mono">Applications</p>
                    <div className="flex flex-col">{applications.map((applicant,i)=><UserCard key={i} user={applicant}/>)}</div>
                    
                </div>
                <div className="flex justify-center my-5">
                <div className="flex flex-col items-center w-full max-w-md border-2 border-neutral-200 h-80 p-6 rounded-xl shadow-sm">
                    <p className="text-2xl font-bold mb-4">Apply</p>
                    <span className="w-full text-sm text-gray-600 mb-1">
                        Tell us why we should assign you:
                    </span>
                    <textarea className="w-full border-2 resize-none h-32 border-neutral-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-sky-400 transition-colors duration-200" placeholder="Why I should be assigned"/>
                    <motion.button whileHover={{scale:1.05}} whileTap={{scale:1}} className="bg-sky-400 focus:border-sky-300 focus:outline-none w-full mt-3 text-white rounded py-2">Submit Applitcation</motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}