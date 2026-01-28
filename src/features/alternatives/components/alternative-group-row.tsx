import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Info } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { alternativeDetails } from "@/data/alternative-details";
import { cn } from "@/lib/utils";
import { AlternativeGroup } from "@/types/Alternative";

import { AlternativeLink } from "./alternative-link";
import { AlternativeDetailsModal } from "./details/alternative-details-modal";
import { PlatformBadge } from "./platform-badge";

interface AlternativeGroupRowProps {
  group: AlternativeGroup;
  showSeparator?: boolean;
}

export function AlternativeGroupRow({ group, showSeparator = true }: AlternativeGroupRowProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const topPick = group.alternatives[0];
  const otherAlternatives = group.alternatives.slice(1);
  const hasMultipleAlternatives = group.alternatives.length > 1;

  const isTextIcon =
    typeof group.original.icon === "string" &&
    group.original.icon.length <= 2 &&
    !group.original.icon.includes("_");

  // Use the group ID for details lookup
  const details = alternativeDetails[group.id];

  const handleRowClick = (e: React.MouseEvent) => {
    // Don't interfere if clicking on links or the expand button
    if (
      (e.target as HTMLElement).closest("a") ||
      (e.target as HTMLElement).closest("[data-expand-button]")
    ) {
      return;
    }
    if (details) {
      setModalOpen(true);
    }
  };

  const handleExpandClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="group">
        {/* Main row - Top Pick */}
        <div
          className={cn(
            "grid grid-cols-[1fr_auto_1fr] items-center px-8 py-6 transition-colors hover:bg-slate-50/50",
            details && "cursor-pointer"
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleRowClick}
        >
          <PlatformBadge platform={group.original} isTextIcon={isTextIcon} />

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

          <div className="flex items-center gap-3">
            <motion.div
              animate={{
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              className="flex-1"
            >
              <AlternativeLink platform={topPick} isHovered={isHovered} />
            </motion.div>

            {hasMultipleAlternatives && (
              <button
                data-expand-button
                onClick={handleExpandClick}
                className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-50"
              >
                <Badge variant="secondary" className="text-xs">
                  +{otherAlternatives.length}
                </Badge>
                <ChevronDown
                  className={cn("size-4 transition-transform", isExpanded && "rotate-180")}
                />
              </button>
            )}
          </div>
        </div>

        {/* Accordion - Other Alternatives */}
        {hasMultipleAlternatives && (
          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="overflow-hidden"
          >
            <div className="bg-slate-50/50 px-8 py-4">
              <div className="space-y-3">
                {otherAlternatives.map((alt, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.2,
                    }}
                    className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm"
                  >
                    <div className="flex-1">
                      <AlternativeLink platform={alt} isHovered={false} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
      {showSeparator && <Separator />}

      {/* Details Modal */}
      {details && (
        <AlternativeDetailsModal details={details} open={modalOpen} onOpenChange={setModalOpen} />
      )}
    </>
  );
}
