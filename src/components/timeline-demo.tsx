"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "About",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xl max-md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Shadcn — a customizable,
            high-performance UI component library designed for React and Next.js
            projects.
          </p>

          <div className="flex flex-col items-start text-white text-xl gap-2">
            <li>⚡ Optimized for speed and smooth performance</li>
            <li>🎨 Supports easy theming and customization</li>
            <li>📘 Clear, developer-friendly setup and docs</li>
          </div>
        </div>
      ),
    },
    {
      title: "Skills",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xl max-md:text-sm font-normal mb-8">
            Some skills I excel at:
          </p>
          <div className="flex flex-wrap  flex-col items-start text-white text-xl gap-3 justify-start">
            <li>
              JavaScript — Core scripting for dynamic and interactive behavior
            </li>
            <li>
              React.js — Component-based frontend development for fast,
              responsive UI
            </li>
            <li>
              Express.js — Backend server handling API routes and middleware
            </li>
            <li>
              Next.js — Server-side rendering and optimized React framework for
              SEO and performance
            </li>
            <li>
              MongoDB — NoSQL database for efficient, scalable data handling
            </li>
            <li>Python — Utility scripting and backend automation tasks</li>
          </div>
        </div>
      ),
    },
    {
      title: "Projects",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xl max-md:text-sm font-normal mb-4">
            Here are some cool projects I&apos;ve worked on:
          </p>

          <div className="flex flex-wrap items-start text-white text-xl justify-start flex-col mt-12 gap-12">
            <div className="flex flex-col gap-4">
              <p className="font-mono font-semibold">
                AI-Powered Resume Generator
              </p>
              <p>
                Built with Next.js, integrated Gemini API for content
                generation, live PDF preview, text editing, and export to Word
                and PDF formats. Includes full authentication and MongoDB
                backend.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-mono font-semibold">
                Social Media Time Capsule Platform ( Currently Working )
              </p>
              <p>
              Your time capsule app allows users to create digital capsules by entering a name, description, content, and an opening date. Users can keep the capsules private or public, attach media, and schedule them to &quot;open&quot; in the future—revealing the contents on the specified date. It&apos;s designed to preserve memories, thoughts, or messages for future reflection or sharing.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-mono font-semibold">
                Personal Finance Tracker
              </p>
              <p>
              This is a budget tracking and comparison app that lets users select a saved budget (weekly or monthly), automatically fetches related expenses, and displays a detailed comparison between the allocated and spent amounts for each category—helping users understand their spending habits and manage finances more effectively.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-mono font-semibold">
                Personal Portfolio Website
              </p>
              <p>
                Fully responsive, modern design showcasing projects and skills,
                built with Next.js for performance and SEO optimization.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
