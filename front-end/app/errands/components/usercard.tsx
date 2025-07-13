import Image from "next/image";
import myPhoto from "@/public/myPhoto.jpeg";
import { Star, StarHalf } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
export default function UserCard(props: { user: any }) {
  return (
    <AnimatePresence>
      <motion.div
        layout
        exit={{ opacity: 1, y: 20 }}
        whileInView={{ opacity: 1, y: -20 }}
        transition={{ duration: 0.8, bounce: 0.4, type: "spring" }}
        initial={{ opacity: 0, y: 0 }}
        whileHover={{ y: -15 }}
        viewport={{ amount: 0.8 }}
        className="flex items-start gap-4 p-4 border rounded-lg shadow-sm bg-white w-full max-w-xl"
      >
        <Image
          src={myPhoto}
          alt="Profile picture"
          className="w-14 h-14 rounded-full object-cover mt-1"
        />
        <div className="flex flex-col">
          <p className="font-semibold text-lg">{props.user.username}</p>
          <p className="text-sm text-gray-700 mb-1">
            {props.user.applicationMessage}
          </p>
          <div className="flex items-center">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) =>
                star <= props.user.rating ? (
                  <Star
                    key={star}
                    size={18}
                    className="fill-yellow-400 text-yellow-400 mr-0.5"
                  />
                ) : props.user.rating >= star - 0.5 ? (
                  <div className="flex" key={star}>
                    <StarHalf
                      size={18}
                      className="absolute fill-yellow-400 text-yellow-400"
                    />
                    <Star size={18} className="text-gray-300 mr-0.5" />
                  </div>
                ) : (
                  <Star key={star} size={18} className="text-gray-300 mr-0.5" />
                ),
              )}
            </div>
            <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
              {props.user.rating.toFixed(1)} / 5
            </span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
