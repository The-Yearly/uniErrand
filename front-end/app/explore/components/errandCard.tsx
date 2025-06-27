import { Errands } from "@/utils/types"
import Image from "next/image"
import {easeIn, easeOut, motion, scale} from "framer-motion"
export default function ErrandCard(props:{errand:Errands}){
    const errand=props.errand
    return(
        <motion.div whileHover={{y:-15}} whileTap={{scale:0.9}} className="flex flex-col shadow-md rounded w-full h-64">
            <div className="relative">
                <div className="flex absolute mt-2">{errand.tags?.map((tag,i)=><div key={i} className=" bg-black/50 backdrop-blur-sm mx-1 rounded-4xl py-1 px-3 text-xs md:text-sm text-white">{tag}</div>)}</div>
                <Image src={"https://imgs.search.brave.com/MHL4EE86Fza7rVYaNCmLJP00IDspteUevVsL_GWrkG0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9lcnJh/bmRzLXR5cGUtbWVz/c2FnZS1saW5lZC1w/YXBlci1tdWx0aS1j/b2xvci1zdGlja3kt/bm90ZXMtcGVuLXdv/b2QtZGVzay0xODcy/MzAxMDMuanBn"} className="w-full h-32 object-cover rounded" width={100} height={100} alt="Image"/>
            </div>
            <p className="text-black mx-3 mt-2">{errand.errand_title}</p>
            <p className="text-slate-400 mx-3 line-clamp-2 h-12 ">{errand.errand_desc}</p>
            <div className="flex justify-between"><span className="flex ml-3 mt-2">$<p className="text-teal-500 mx-1">{errand.pay}</p></span><p className="mt-2 mr-3">{errand.auth_name}</p></div>
        </motion.div>
    )
}
