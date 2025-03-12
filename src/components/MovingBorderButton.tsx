"use client";
import React from "react";
import { Button } from "./ui/moving-border";

export function MovingBorderDemo() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-black dark:bg-gray-950 text-white dark:text-white border-neutral-800 dark:border-slate-800 px-10 text-lg font-medium rounded-md"
      >
        Welcome To My Portfolio Website
      </Button>
    </div>
  );
}
