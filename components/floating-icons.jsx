"use client";
import { m } from "framer-motion";
import {
  PenTool,
  FileText,
  Video,
  BarChart2,
  Instagram,
  Users,
  Zap,
  Target,
  TrendingUp,
  Share2,
} from "lucide-react";

const icons = [
  { Icon: PenTool, delay: 0 },
  { Icon: FileText, delay: 0.2 },
  { Icon: Video, delay: 0.4 },
  { Icon: BarChart2, delay: 0.6 },
  { Icon: Instagram, delay: 0.8 },
  { Icon: Users, delay: 1 },
  { Icon: Zap, delay: 1.2 },
  { Icon: Target, delay: 1.4 },
  { Icon: TrendingUp, delay: 1.6 },
  { Icon: Share2, delay: 1.8 },
];

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, delay }, index) => (
        <m.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            y: [0, -20, 0],
            x: [0, Math.random() * 20 - 10, 0],
          }}
          transition={{
            duration: 3,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute text-emerald-400/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <Icon size={24} />
        </m.div>
      ))}
    </div>
  );
}
