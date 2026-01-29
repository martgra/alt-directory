export interface PrivacyDetails {
  dataCollection: "minimal" | "moderate" | "extensive";
  dataOwnership: "user" | "platform" | "shared";
  encryption: "end-to-end" | "in-transit" | "at-rest" | "none";
  thirdPartySharing: boolean;
  dataRetention: string; // e.g., "30 days", "indefinite"
  gdprCompliant: boolean;
}

export interface BusinessModel {
  type: "non-profit" | "for-profit" | "cooperative" | "volunteer";
  revenue: "donations" | "subscriptions" | "ads" | "grants" | "free";
  transparent: boolean;
  funding?: string[]; // List of major funders
}

export interface TechnicalDetails {
  openSource: boolean;
  license?: string; // e.g., "AGPL-3.0", "MIT"
  repositoryUrl?: string;
  selfHostable: boolean;
  federation: "full" | "partial" | "none";
  protocol?: string; // e.g., "ActivityPub", "AT Protocol"
  interoperability: string[]; // Other platforms it can connect with
}

export interface Governance {
  contentModeration: "centralized" | "distributed" | "community" | "minimal";
  userGovernance: boolean;
  transparentRules: boolean;
  appealProcess: boolean;
  codeOfConductUrl?: string; // Link to community guidelines/code of conduct
}

export interface Maturity {
  status: "stable" | "beta" | "alpha" | "development";
  yearFounded: number;
  activeUsers?: string; // e.g., "1M+", "50K"
  mobileApps: {
    ios: boolean;
    android: boolean;
  };
}

export interface Migration {
  importFromOriginal: boolean;
  exportData: boolean;
  migrationGuideUrl?: string;
  autoMigrationTool: boolean;
}

export interface Features {
  core: string[]; // Main features
  unique: string[]; // What makes it special
  missing: string[]; // What's missing vs original
}

export interface EthicsScore {
  privacy: number; // 1-5
  openness: number; // 1-5
  sustainability: number; // 1-5
  userRights: number; // 1-5
  overall: number; // Average
}

export interface AlternativeDetails {
  // Basic info (already have this)
  id: string;
  name: string;
  url: string;
  description: string;
  tagline: string;

  // New structured data
  privacy: PrivacyDetails;
  business: BusinessModel;
  technical: TechnicalDetails;
  governance: Governance;
  maturity: Maturity;
  migration: Migration;
  features: Features;
  ethics: EthicsScore;

  // Additional useful info
  pros: string[];
  cons: string[];
  bestFor: string[]; // Use cases
  notRecommendedFor: string[];

  // Community
  communityLinks: {
    forum?: string;
    chat?: string;
    documentation?: string;
    support?: string;
  };

  // Last updated
  lastReviewed: string; // ISO date
}
