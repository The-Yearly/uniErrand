'use client'
import { Errands } from "@/utils/types"
import { FileArchive,UserCircle,Phone, DollarSign, Clock, Home } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import UserCard from "../components/usercard"
import Image from "next/image"
import { useParams } from "next/navigation"
import ErrandCard from "@/app/errands/components/errandCard"
import { Errandvarients } from "@/utils/types"
export default function TaskPage(){
    const params=useParams()
    const id=params.id
    const errand:Errands={
            errand_id: 3,
            errand_title: "College Notes Printout",
            tags: ["Print Out", "Study"],
            errand_pic: "/images/print.jpg",
            errand_desc: "Collect all lecture notes, assignments, and study materials for the CSE S4 semester subjects. Ensure that each subject's notes are sorted in the correct order, printed clearly on A4 sheets, and stapled together neatly. Double-check for any missing pages or poor-quality scans before printing. Once printed, organize them in labeled folders or bundles so they're easy to use during exam preparation.",
            attachments:["https://www.khanacademy.org", "https://www.coursera.org", "https://ocw.mit.edu", "https://www.geeksforgeeks.org", "https://developer.mozilla.org", "https://stackoverflow.com", "https://github.com", "https://www.w3schools.com", "https://dribbble.com", "https://www.behance.net", "https://coolors.co", "https://fonts.google.com", "https://www.youtube.com", "https://www.spotify.com", "https://www.reddit.com", "https://www.netflix.com", "https://www.remove.bg", "https://tinypng.com", "https://www.canva.com", "https://chat.openai.com"],
            auth_name: "Sneha R",
            status: "Completed",
            pay: 80
        }
        const jobs=[{
                errand_id: 3,
                errand_title: "College Notes Printout",
                tags: ["Print Out", "Study"],
                errand_pic: "/images/print.jpg",
                errand_desc: "Print and staple all notes for CSE S4 subjects.",
                attachments: [],
                auth_name: "Sneha R.",
                status: "Completed",
                pay: 80
            },
            {
                errand_id: 4,
                errand_title: "Birthday Cake Pickup",
                tags: ["Food", "Pickup"],
                errand_pic: "/images/cake.jpg",
                errand_desc: "Pick up a pre-ordered chocolate cake from BakeHouse.",
                attachments: [],
                auth_name: "Arjun Das",
                status: "Pending",
                pay: 120
            },
            {
                errand_id: 5,
                errand_title: "Medical Prescription Drop",
                tags: ["Health", "Delivery"],
                errand_pic: "/images/medicine.jpg",
                errand_desc: "Drop a prescription at City Hospital pharmacy.",
                attachments: [],
                auth_name: "Diya P.",
                status: "In Progress",
                pay: 70
            },
            ]
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
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <div className="w-full relative pr-3 max-w-3xl">
                        <span className="text-neutral-400 font-georama-mono font-bold mb-4 flex space-x-2"><Link className="hover:text-sky-300 transition-colors" href={"/"}><Home/></Link> / <Link href={"/errands"} className="mx-3 hover:text-sky-300 transition-colors"> Errands </Link>/<Link href={"/errands/"+id} className="mx-3 hover:text-sky-300 transition-colors"> {id} </Link></span>
                        <div className="flex absolute mt-2">{errand.tags?.map((tag,i)=><div key={i} className=" bg-black/50 backdrop-blur-sm mx-1 rounded-4xl py-1 px-3 text-xs md:text-sm text-white">{tag}</div>)}</div>
                        <Image src="https://imgs.search.brave.com/_4NDQpJrDq1AXn5QIfjMhmLx3GrZSrSBF7EaWXdHy7Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z3lhbmJsb2cuY29t/L3N0YXRpYy9mMzkz/Mjc5Y2YwNjU1YzMz/NTZiMTVkZWVkYmMw/MDExOC8wNWQwNS9u/ZXh0anMtbG9hZC1l/eHRlcm5hbC1pbWFn/ZXMucG5n" width={1000} height={1000} className="rounded-2xl shadow-md object-cover w-full max-h-[350px] " alt="proj"/>                        
                    </div>
                <div className="flex w-fit flex-col">
                    <p className="text-4xl sm:text-5xl font-georama-mono mt-3">{errand.errand_title }</p>
                    <div className="flex ml-3 mt-3 items-center">
                        <span className="flex">by <p className="ml-1 hover:text-sky-500 cursor-pointer transition-colors">{errand.auth_name}</p></span>
                        <span className="bg-green-400 text-sm ml-2 text-white px-3 py-1 rounded-full">{errand.status}</span>
                    </div>
                </div>
                    <p className="mt-10 font-georama-mono text-20 md:text-xl">{errand.errand_desc}</p>
                    <p className="mt-10 text-4xl sm:text-3xl font-georama-mono">Files</p>
                    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 ">{errand.attachments?.map((file,i)=><motion.a key={i} whileHover={{y:-10}} whileTap={{scale:0.8}} className="flex focus:outline-none focus:border-sky-400  w-full mr-13 mt-4 hover:text-sky-500 transition-colors" href={file}><FileArchive/><p>File {i+1}</p></motion.a>)}</div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="flex-col">
                            <p className="mt-10  text-4xl sm:text-3xl font-georama-mono">Contact</p>
                            <div className="flex items-center mt-4 "><motion.div whileHover={{y:-10}} whileTap={{scale:0.9}} className="flex items-center  hover:text-sky-500 cursor-pointer transition-colors"><UserCircle strokeWidth={1.25} className="w-10 h-10"/><Link href={"/"} className="ml-2">{errand.auth_name}</Link></motion.div><motion.div  whileHover={{y:-10}} whileTap={{scale:0.9}} className="flex items-center hover:text-green-500 cursor-pointer"><Phone className="ml-8"/><p className="ml-2">+91 xxxxx-xxxxx</p></motion.div></div>
                        </div>
                        <div className="flex-col">
                            <p className="mt-10  text-4xl sm:text-3xl font-georama-mono">Overview</p>
                            <div className="flex items-center mt-4 "><motion.div whileTap={{rotate:360}} className="flex items-center hover:text-green-600 cursor-pointer transition-colors"><DollarSign/><p className="ml-2 text-xl ">{errand.pay}</p></motion.div><motion.div whileTap={{rotate:360}} transition={{duration:0.2}} className="flex items-center hover:text-sky-400 cursor-pointer"><Clock className="ml-8 "/><p className="ml-2 text-lg">July 14 2025</p></motion.div></div>
                        </div>
                    </div>
                    <p className="mt-10 text-4xl sm:text-3xl font-georama-mono mb-10">Applications</p>
                    <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2">{applications.map((applicant,i)=><UserCard key={i} user={applicant}/>)}
                    <div className="md:mb-10"></div>
                    </div>
                    
                    
                </div>
                <div className="flex flex-col items-center b my-5">
                <div className="flex flex-col items-center w-full max-w-[35vh] lg:max-w-md border-2 border-neutral-200 h-80 p-6 rounded-xl shadow-sm">
                    <p className="text-2xl font-bold mb-4">Apply</p>
                    <span className="w-full text-sm text-gray-600 mb-1">
                        Tell us why we should assign you:
                    </span>
                    <textarea className="w-full border-2 resize-none h-32 border-neutral-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-sky-400 transition-colors duration-200" placeholder="Why I should be assigned"/>
                    <motion.button whileHover={{y:5}} whileTap={{scale:0.9}} className="bg-sky-400 focus:border-sky-300 focus:outline-none w-full mt-3 text-white rounded py-2">Submit Applitcation</motion.button>
                    </div>
                <div className="flex mt-5 flex-col items-center w-full max-w-[35vh] lg:max-w-md border-2 border-neutral-200 h-auto p-6 rounded-xl shadow-sm ">
                    <p className="text-2xl font-bold mb-4">More Like This</p>
                    <div className="grid grid-cols-1 gap-x-2 gap-y-3 md:grid-cols-2">
                        {jobs.map((errand,i)=><ErrandCard key={i} errand={errand} varient={Errandvarients.sideCard}/>)}
                    </div>
                </div>
                </div>
            </div>
        </motion.div>
    )
}