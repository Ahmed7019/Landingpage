"use client";
import { Zap } from "lucide-react";
import { m } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-gray-950 z-50 flex items-center justify-center">
      <m.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex items-center"
      >
        <Zap className="text-emerald-400 h-16 w-16" />
        <span
          className="text-4xl font-bold text-emerald-400 mr-2"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Swift
        </span>
      </m.div>
    </div>
  );
} 