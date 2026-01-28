import { ReactNode } from "react";

import { AlternativeTag } from "@/config/constants";

export interface Platform {
  name: string;
  icon: string | ReactNode;
  bgColor: string;
}

export interface AlternativePlatform extends Platform {
  url: string;
  tag: AlternativeTag;
}

export interface Alternative {
  id: string;
  original: Platform;
  alternative: AlternativePlatform;
}

/**
 * Improved structure: groups multiple alternatives under one original platform
 */
export interface AlternativeGroup {
  id: string; // e.g., 'twitter', 'instagram', 'facebook'
  original: Platform;
  alternatives: AlternativePlatform[];
}
