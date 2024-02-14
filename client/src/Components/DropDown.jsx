import React from "react";
import { motion } from "framer-motion";
import "../assets/Style/DropDownProfile.css";
import { Link } from "react-router-dom";

export default function DropDown() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col DropDownProfile bg-slate-200 shadow-md"
    >
      <motion.ul
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="flex flex-col gap-4"
      >
        <Link to="/createListing">
          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-slate-600 hover:underline"
          >
            Add Property
          </motion.li>
        </Link>
        <motion.li
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-slate-600 hover:underline"
        >
          Show Listing
        </motion.li>
      </motion.ul>
    </motion.div>
  );
}
