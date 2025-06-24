"use client";
import { motion } from "framer-motion";

const benefits = [
  { title: "50% Off", desc: "On all items", icon: "🎁" },
  { title: "Free Voucher", desc: "For next purchase", icon: "🎫" },
  { title: "Gold Membership", desc: "Exclusive perks", icon: "🏅" },
];

export default function BenefitsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {benefits.map((item, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.05 }}
          className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow"
        >
          <div className="text-3xl">{item.icon}</div>
          <h4 className="font-semibold mt-2">{item.title}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {item.desc}
          </p>
          <button className="mt-3 px-3 py-1 text-sm bg-blue-500 text-white rounded-lg">
            Claim
          </button>
        </motion.div>
      ))}
    </div>
  );
}
