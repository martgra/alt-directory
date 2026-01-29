import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Info } from "lucide-react";
import { useState } from "react";

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
  const [hoveredAltIndex, setHoveredAltIndex] = useState<number | null>(null);

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
      <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:rounded-none md:border-0 md:bg-transparent md:shadow-none">
        <div className={cn(isExpanded && "bg-slate-50/80")}>
          {/* Main row - Top Pick */}
          <div
            className={cn(
              "p-5 transition-colors md:flex md:items-center md:p-6",
              !isExpanded && "hover:bg-slate-50/50",
              details && "cursor-pointer"
            )}
            onMouseEnter={() => !isExpanded && setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleRowClick}
          >
            {/* Mobile Layout */}
            <div className="flex min-w-0 flex-col md:hidden">
              <div className="flex min-w-0 items-center gap-4">
                <PlatformBadge platform={group.original} isTextIcon={isTextIcon} isMobile />
              </div>

              <div className="flex justify-center py-2">
                <motion.div
                  animate={{
                    x: isHovered && !isExpanded ? 4 : 0,
                    scale: isHovered && !isExpanded ? 1.1 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <ArrowRight className="size-6 rotate-90 text-[#2563eb]" />
                </motion.div>
              </div>

              <div className="flex min-w-0 items-center justify-between gap-2">
                <motion.div
                  animate={{
                    scale: isHovered && !isExpanded ? 1.05 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                  className="min-w-0 flex-1"
                >
                  <AlternativeLink platform={topPick} isHovered={isHovered && !isExpanded} />
                </motion.div>

                {hasMultipleAlternatives ? (
                  <button
                    data-expand-button
                    onClick={handleExpandClick}
                    className={cn(
                      "flex h-[38px] shrink-0 items-center gap-1 rounded-lg border px-3 py-1.5 transition-colors",
                      isExpanded
                        ? "border-[#2563eb] bg-white text-[#2563eb]"
                        : "border-slate-200 bg-slate-50 hover:border-[#2563eb]"
                    )}
                  >
                    {!isExpanded && (
                      <span className="text-xs font-bold text-slate-600">
                        +{otherAlternatives.length}
                      </span>
                    )}
                    <ChevronDown
                      className={cn(
                        "size-4 text-sm transition-transform",
                        isExpanded ? "rotate-180 text-[#2563eb]" : "text-slate-400"
                      )}
                    />
                  </button>
                ) : (
                  <div className="h-[38px] w-[64px] shrink-0"></div>
                )}
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:contents">
              <div className="flex items-center gap-4 md:w-1/3">
                <PlatformBadge platform={group.original} isTextIcon={isTextIcon} />
              </div>

              <div className="flex w-1/6 items-center justify-center gap-2">
                <motion.div
                  animate={{
                    x: isHovered && !isExpanded ? 4 : 0,
                    scale: isHovered && !isExpanded ? 1.1 : 1,
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
                      opacity: isHovered && !isExpanded ? 1 : 0,
                      scale: isHovered && !isExpanded ? 1 : 0.8,
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

              <div className="flex flex-1 items-center justify-between">
                <motion.div
                  animate={{
                    scale: isHovered && !isExpanded ? 1.05 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                >
                  <AlternativeLink platform={topPick} isHovered={isHovered && !isExpanded} />
                </motion.div>

                {hasMultipleAlternatives ? (
                  <button
                    data-expand-button
                    onClick={handleExpandClick}
                    className={cn(
                      "flex h-[38px] items-center gap-1 rounded-lg border px-3 py-1.5 transition-colors",
                      isExpanded
                        ? "border-[#2563eb] bg-white text-[#2563eb]"
                        : "border-slate-200 bg-slate-50 hover:border-[#2563eb]"
                    )}
                  >
                    {!isExpanded && (
                      <span className="text-xs font-bold text-slate-600">
                        +{otherAlternatives.length}
                      </span>
                    )}
                    <ChevronDown
                      className={cn(
                        "size-4 text-sm transition-transform",
                        isExpanded ? "rotate-180 text-[#2563eb]" : "text-slate-400"
                      )}
                    />
                  </button>
                ) : (
                  <div className="h-[38px] w-[64px]"></div>
                )}
              </div>
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
              <div
                className={cn(
                  "pb-5 md:pb-6",
                  isExpanded && showSeparator && "md:border-b md:border-slate-200"
                )}
              >
                {otherAlternatives.map((alt, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.2,
                    }}
                    className="px-5 py-4 transition-colors hover:bg-slate-100/50 md:flex md:px-6"
                    onMouseEnter={() => setHoveredAltIndex(index)}
                    onMouseLeave={() => setHoveredAltIndex(null)}
                  >
                    {/* Mobile Layout */}
                    <div className="flex min-w-0 items-center gap-4 md:hidden">
                      <AlternativeLink platform={alt} isHovered={hoveredAltIndex === index} muted />
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:contents">
                      <div className="w-1/3"></div>
                      <div className="flex w-1/6 items-center justify-center">
                        <motion.div
                          animate={{
                            opacity: hoveredAltIndex === index ? 1 : 0,
                            x: hoveredAltIndex === index ? 4 : 0,
                            scale: hoveredAltIndex === index ? 1.1 : 1,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                        >
                          <ArrowRight className="size-6 text-[#2563eb]" />
                        </motion.div>
                      </div>
                      <div className="flex flex-1 items-center gap-4">
                        <AlternativeLink
                          platform={alt}
                          isHovered={hoveredAltIndex === index}
                          muted
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
      {showSeparator && !isExpanded && <Separator className="hidden md:block" />}

      {/* Details Modal */}
      {details && (
        <AlternativeDetailsModal details={details} open={modalOpen} onOpenChange={setModalOpen} />
      )}
    </>
  );
}
