
"use client";

import React, { useState } from "react";
import {motion} from 'framer-motion'

type HoverRevealDivProps = {
  data: {
    title: string;
    content: string[];
  };
};

export default function HoverRevealDiv({ data }: HoverRevealDivProps) {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Handle hover events
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  // Handle click event (toggle title/details)
  const handleClick = () => setClicked((prevState) => !prevState);

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex justify-center items-center text-white rounded-lg relative overflow-hidden transition-all  h-56 w-96 m-2 hover:scale-125 hover:shadow-md hover:shadow-slate-900 duration-500"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Background Layer */}
      <div
        className={`absolute inset-0 transition-all duration-700 border border-neutral-700 rounded-lg ${
          hover || clicked
            ? "bg-gradient-to-r from-blue-950 to-black"
            : "bg-gradient-to-r from-slate-950 to-gray-950"
        }`}
      ></div>

      {/* Content Container */}
      <div className="absolute inset-0 flex justify-center items-center">
        {/* Static Title */}
        <span
          className={`absolute transition-transform duration-700 font-semibold text-2xl ${
            hover || clicked
              ? "translate-x-full opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
          {data.title}
        </span>

        {/* Animated Details */}
        <div
          className={`absolute transition-transform duration-700 grid grid-cols-3 gap-5 ${
            hover || clicked
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          {data.content.map((item, index) => (
            <div key={index} className="p-2 block text-center text-xl">
              {item}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
