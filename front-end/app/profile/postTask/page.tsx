'use client'
import { motion, useScroll } from "framer-motion"
import { FileArchive, X } from "lucide-react"
import { useState } from "react"
import { toast,ToastContainer } from "react-toastify"
export default function NewTask() {
    const [tags,setTags]= useState<string[]>([])
    const [tagInput,setTagInput]=useState("")
    const [fileInput,setFileInput]=useState("")
    const [fileNames, setFileNames] = useState<{ [key: string]: number }>({});
    const [fileIndex,setFileIndex]=useState(1)
    const [files,setFiles]=useState<string[]>([])
    function addFile(){
        if(files.length<20){
        setFiles([...files,fileInput])
        setFileNames({...fileNames,[fileInput]:fileIndex});
        setFileIndex(fileIndex+1)}
        else{
            toast.warning("Cannot upload more than 20 Files")
        }
    }
    function deleteFile(i:number){
        const file=fileInput[i]
        setFiles(files.filter((_,g)=>i!=g))
        delete fileNames[file]
    }
    function addTag(){
        if(tags.length<5){
            setTags([...tags,tagInput])
        }else{
            toast("You Can Only Add 5 Tags")
        }
        setTagInput("")
    }
    return (
        <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="px-4 sm:px-8 md:px-16 mt-28 md:mt-36 max-w-screen-xl mx-auto"
        >
        <ToastContainer/>
        <form onSubmit={(e)=>{e.preventDefault}} className="space-y-10">
            <h1 className="text-4xl sm:text-5xl font-bold font-georama-mono text-center sm:text-left">
            Post Task
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
                <div>
                <label className="block text-xl sm:text-2xl font-georama-mono mb-2">Task Title</label>
                <input
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-lg sm:text-xl focus:outline-none focus:border-sky-400"
                    placeholder="e.g., Need help with printout"
                />
                </div>

                <div>
                <label className="block text-xl sm:text-2xl font-georama-mono mb-2">Task Description</label>
                <textarea
                    className="w-full h-36 sm:h-40 border-2 border-slate-200 rounded-xl px-4 py-3 text-base sm:text-lg resize-none focus:outline-none focus:border-sky-400"
                    placeholder="Provide a detailed description..."
                />
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                <div>
                    <label className="block text-xl sm:text-2xl font-georama-mono mb-2">Pay</label>
                    <input
                    type="number"
                    className="w-full sm:w-32 border-2 border-slate-200 rounded-xl px-4 py-2 focus:outline-none focus:border-sky-400"
                    placeholder="0"
                    />
                </div>
                <div>
                    <label className="block text-xl sm:text-2xl font-georama-mono mb-2">Due Date</label>
                    <input
                    type="date"
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-2 focus:outline-none focus:border-sky-400"
                    />
                </div>
                </div>
            </div>

            <div className="space-y-8">
                <div>
                <label className="block text-xl sm:text-2xl font-georama-mono mb-2">Tags</label>
                <div className="flex gap-3 items-center">
                    <input
                    value={tagInput}
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-md md:text-lg focus:outline-none focus:border-sky-400"
                    placeholder="e.g., urgent, delivery"
                    onChange={(e)=>{setTagInput(e.target.value)}}
                    />
                    <button
                    type="button"
                    onClick={addTag}
                    className="bg-sky-500 text-white px-4 py-2 rounded-xl hover:bg-sky-600 transition"
                    >
                    Add
                    </button>
                </div>
                <div className="flex gap-2 mt-2 flex-wrap">
                    {tags.map((tag, i) => (
                    <span
                        key={i}
                        className="bg-black/60 flex items-center backdrop-blur-sm text-white px-3 py-1 rounded-2xl text-sm"
                    >
                        {tag}<button type="button" onClick={()=>{setTags(tags.filter((_,g)=>g!=i))}}><X className="w-4 h-4 ml-2"/></button>
                    </span>
                    ))}
                </div>
                </div>

                <div>
                <label className="block text-xl sm:text-2xl font-georama-mono mb-2">Cover</label>
                <input type="file" className="block w-full text-sm" />
                </div>

                <div>
                <label className="block text-xl sm:text-2xl font-georama-mono mb-2">Upload File Links</label>
                <div className="flex gap-3 items-center">
                    <input
                    type="url"
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-md md:text-lg focus:outline-none focus:border-sky-400"
                    placeholder="Upload File Links"
                    value={fileInput}
                    onChange={(e)=>setFileInput(e.target.value)}
                    />
                    <button
                    type="button"
                    onClick={addFile}
                    className="bg-sky-500 text-white px-4 py-2 rounded-xl hover:bg-sky-600 transition"
                    >
                    Add
                    </button>
                </div>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols- gap-3">
                    {files.map((file, i)=>(
                    <div  key={i} className="flex items-center  w-full gap-2">
                    <motion.a
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex gap-3 text-slate-800 hover:text-sky-500 transition-colors"
                        href={file}
                    >
                        <FileArchive size={20} />
                        <span className="truncate">File {fileNames[file]}</span>
                    </motion.a>
                    <button type="button" onClick={()=>deleteFile(i)}  className="hover:text-red-400 transition-colors"><X className="w-5 h-5"/></button>
                    </div>
                    ))}
                </div>
                </div>

                <div className="pt-4">
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 rounded-xl text-lg hover:bg-green-700 transition"
                >
                    Submit Task
                </button>
                </div>
            </div>
            </div>
        </form>
        </motion.div>
    )
    }
