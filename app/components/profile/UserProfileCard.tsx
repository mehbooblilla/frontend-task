"use client";
import { RootState } from "@/app/redux/store";
import { LinearProgress, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

export default function UserProfileCard() {
    const user = useSelector((state: RootState) => state.user.profile);

  if (!user) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
    >
      <div className="flex items-center gap-4">
           <Avatar alt="John Doe" src="" />
        <div>
          <h2 className="text-lg font-semibold">{user.name}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Level {user.level}
          </p>
        </div>


    </div>
      <div className="mt-4">
        <LinearProgress variant="determinate" value={60} />
        <p className="text-sm mt-2 text-right">XP: {user.xp}%</p>
      </div>
    </motion.div>
  );
}
