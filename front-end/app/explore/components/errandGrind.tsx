
import { Errands } from "@/utils/types"
import ErrandCard from "./errandCard";
import {motion } from "framer-motion"
export default function ErrandGrid(){
    const errands: Errands[] = [
    {
        errand_id: 1,
        errand_title: "Grocery Shopping",
        tags: ["Shopping", "Groceries"],
        errand_pic: "/images/grocery.jpg",
        errand_desc: "Buy vegetables, fruits, and snacks from the supermarket.",
        attachments: [],
        auth_name: "Anjali Kumar",
        status: "Complete",
        pay: 150
    },
    {
        errand_id: 2,
        errand_title: "Pick Up Dry Cleaning",
        tags: ["Laundry", "Delivery"],
        errand_pic: "/images/dryclean.jpg",
        errand_desc: "Pick up clothes from Prestige Cleaners by 6 PM.",
        attachments: [],
        auth_name: "Ravi Menon",
        status: "In Progress",
        pay: 100
    },
    {
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
    }
    ];


    return(
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.4,ease:"easeIn"}} className="w-full max-w-[90rem] gap-6 grid grid-cols-1 mt-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {errands.map((errand,i)=><ErrandCard key={i} errand={errand}/>)}
        </motion.div>
    )
}