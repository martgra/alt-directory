import confetti from "canvas-confetti";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { AlternativePlatform } from "@/types/Alternative";

import { PlatformIcon } from "./platform-icon";

interface AlternativeLinkProps {
  platform: AlternativePlatform;
  isHovered: boolean;
}

export function AlternativeLink({ platform, isHovered }: AlternativeLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Get click position
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    // Fire confetti
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { x, y },
      colors: ["#2563eb", "#3b82f6", "#60a5fa", "#93c5fd"],
      ticks: 120,
      gravity: 1.2,
      scalar: 1,
      startVelocity: 30,
    });
  };

  return (
    <div className="flex items-center justify-end gap-4">
      <div className="flex flex-col items-end">
        <div className="flex items-center">
          <a
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="text-sm font-semibold text-slate-800 transition-colors hover:text-[#2563eb]"
          >
            {platform.name}
          </a>
          <motion.div
            animate={{
              scale: isHovered ? [1, 1.05, 1] : 1,
            }}
            transition={{
              duration: 2,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut",
            }}
          >
            <Badge className="ml-2">{platform.tag}</Badge>
          </motion.div>
        </div>
      </div>
      <motion.div
        animate={{
          y: isHovered ? [0, -4, 0] : 0,
        }}
        transition={{
          duration: 0.6,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut",
        }}
      >
        <motion.div
          animate={{
            boxShadow: isHovered
              ? [
                  "0 0 0 0 rgba(37, 99, 235, 0)",
                  "0 0 20px 4px rgba(37, 99, 235, 0.3)",
                  "0 0 0 0 rgba(37, 99, 235, 0)",
                ]
              : "0 0 0 0 rgba(37, 99, 235, 0)",
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut",
          }}
          className="rounded-xl"
        >
          <PlatformIcon icon={platform.icon} bgColor={platform.bgColor} isAlternative />
        </motion.div>
      </motion.div>
    </div>
  );
}
