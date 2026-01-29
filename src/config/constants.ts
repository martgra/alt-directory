export const ALTERNATIVE_TAGS = {
  FEDERATED: "Federated",
  DECENTRALIZED: "Decentralized",
  OPEN_SOURCE: "Open Source",
  CENTRALIZED: "Centralized",
  PRIVACY: "Privacy-Focused",
  CREATOR: "Creator-Focused",
  STREAMING: "Live Streaming",
  VIDEO: "Short Video",
  AUTHENTIC: "Authentic",
  DISCOVERY: "Discovery",
  LOCAL: "Local Community",
  COMMUNITY: "Community",
  ANTI_CENSORSHIP: "Anti-Censorship",
} as const;

export type AlternativeTag = (typeof ALTERNATIVE_TAGS)[keyof typeof ALTERNATIVE_TAGS];
