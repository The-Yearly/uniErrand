import Jogging from "@/public/jogging.png"
import Image from "next/image";
export default function Logo(){
    return(
        <div className="flex items-center">
            <Image src={Jogging} className="w-10 h-10" alt="Icon"/>
            <p className="ml-3 text-2xl font-outfit">uniErrand</p>
        </div>
    )
}