import React from "react";
import { MovingBorderDemo } from "./MovingBorderButton";
import Link from "next/link";
import Image from "next/image";

export default function LeftText() {
  return (
    <div className="flex flex-col justify-center gap-8 my-1 mx-4">
      <MovingBorderDemo />

      <h1 className="text-3xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 text-left">
        Your Friendly Web Application Builder
      </h1>

      <p className="font-normal text-lg text-neutral-300 text-left mx-auto">
        Hi, I&apos;m Sahil Sharma, a B.Tech student at BIT Durg (2022-2026). I&apos;m a
        passionate learner with a strong interest in technology, design, and
        innovation. While I currently have no formal work experience, I’m driven
        to explore and master in-demand skills in the IT industry. With a focus
        on growth and creativity, I aim to turn ideas into impactful solutions.
      </p>

      <div className="text-white flex gap-8 items-center">
        <span>Contact me at</span>

        <Link
          href="https://github.com/SahilSharma1212"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black/75 inline-flex items-center gap-2 p-3 hover:shadow-lg hover:shadow-blue-400/15 transition duration-300 w-auto rounded-md hover:scale-105"
        >
          <span>Github</span>
          <Image src="/github.png" alt="GitHub" className="max-h-9 max-w-9" width={36} height={36} />
        </Link>

        <Link
          href="https://www.linkedin.com/in/sahil-sharma-822a752a9"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black/75 inline-flex items-center gap-2 p-3 hover:shadow-lg hover:shadow-blue-400/15 transition duration-300 w-auto rounded-md hover:scale-105"
        >
          <span>LinkedIn</span>
          <Image src="/social.png" alt="LinkedIn" className="max-h-9 max-w-9" width={36} height={36} />
        </Link>
      </div>
    </div>
  );
}
