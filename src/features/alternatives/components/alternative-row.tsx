import { motion } from "framer-motion";
import { ArrowRight, Info } from "lucide-react";
import { useState } from "react";

import { Separator } from "@/components/ui/separator";
import { alternativeDetails } from "@/data/alternative-details";
import { cn } from "@/lib/utils";
import { Alternative } from "@/types/Alternative";

import { AlternativeLink } from "./alternative-link";
import { AlternativeDetailsModal } from "./details/alternative-details-modal";
import { PlatformBadge } from "./platform-badge";

interface AlternativeRowProps {
  alternative: Alternative;
  showSeparator?: boolean;
}

export function AlternativeRow({ alternative, showSeparator = true }: AlternativeRowProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const isTextIcon =
    typeof alternative.original.icon === "string" &&
    alternative.original.icon.length <= 2 &&
    !alternative.original.icon.includes("_");

  // Get detailed info if available
  const details = alternativeDetails[alternative.id];

  const handleRowClick = (e: React.MouseEvent) => {
    // Don't open modal if clicking on the link directly
    if ((e.target as HTMLElement).closest("a")) {
      return;
    }
    if (details) {
      setModalOpen(true);
    }
  };

  return (
    <>
      <div
        className={cn(
          "group grid grid-cols-[1fr_auto_1fr] items-center px-8 py-6 transition-colors hover:bg-slate-50/50",
          details && "cursor-pointer"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleRowClick}
      >
        <PlatformBadge platform={alternative.original} isTextIcon={isTextIcon} />

        <div className="flex items-center gap-2 px-6">
          <motion.div
            animate={{
              x: isHovered ? 4 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <ArrowRight className="size-6 text-[#2563eb]" />
          </motion.div>
          {details && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.8,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
            >
              <Info className="size-4 text-slate-400" />
            </motion.div>
          )}
        </div>

        <motion.div
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
        >
          <AlternativeLink platform={alternative.alternative} isHovered={isHovered} />
        </motion.div>
      </div>
      {showSeparator && <Separator />}

      {/* Details Modal */}
      {details && (
        <AlternativeDetailsModal details={details} open={modalOpen} onOpenChange={setModalOpen} />
      )}
    </>
  );
}
