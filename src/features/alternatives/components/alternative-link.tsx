import confetti from "canvas-confetti";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { AlternativePlatform } from "@/types/Alternative";

import { PlatformIcon } from "./platform-icon";

interface AlternativeLinkProps {
  platform: AlternativePlatform;
  isHovered: boolean;
  muted?: boolean;
}

export function AlternativeLink({ platform, isHovered, muted = false }: AlternativeLinkProps) {
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
    <div className="flex min-w-0 items-center gap-4">
      <motion.div
        animate={{
          y: isHovered ? [0, -4, 0] : 0,
        }}
        transition={{
          duration: 0.6,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut",
        }}
        className="shrink-0"
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
          className="rounded-lg"
        >
          <PlatformIcon icon={platform.icon} bgColor={platform.bgColor} isAlternative />
        </motion.div>
      </motion.div>
      <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-center md:gap-2">
        <a
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className={cn(
            "truncate text-lg font-bold transition-colors hover:text-[#2563eb]",
            muted && "text-slate-600"
          )}
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
          className="shrink-0"
        >
          <Badge className={cn("w-fit", muted && "bg-slate-200/50 text-slate-500")}>
            {platform.tag}
          </Badge>
        </motion.div>
      </div>
    </div>
  );
}
