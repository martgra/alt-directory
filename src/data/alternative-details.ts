import { AlternativeDetails } from "@/types/AlternativeDetails";

export const alternativeDetails: Record<string, AlternativeDetails> = {
  bluesky: {
    id: "bluesky",
    name: "Bluesky",
    url: "https://bsky.app",
    description:
      "A decentralized social network built on the AT Protocol, offering a Twitter-like experience with user control and algorithmic choice.",
    tagline: "Social media as it should be",

    privacy: {
      dataCollection: "minimal",
      dataOwnership: "user",
      encryption: "in-transit",
      thirdPartySharing: false,
      dataRetention: "User controlled",
      gdprCompliant: true,
    },

    business: {
      type: "for-profit",
      revenue: "subscriptions",
      transparent: true,
      funding: ["Bluesky PBC", "Protocol Labs", "Individual investors"],
    },

    technical: {
      openSource: true,
      license: "MIT",
      repositoryUrl: "https://github.com/bluesky-social",
      selfHostable: true,
      federation: "full",
      protocol: "AT Protocol",
      interoperability: ["Other AT Protocol apps"],
    },

    governance: {
      contentModeration: "distributed",
      userGovernance: true,
      transparentRules: true,
      appealProcess: true,
    },

    maturity: {
      status: "beta",
      yearFounded: 2021,
      activeUsers: "5M+",
      mobileApps: {
        ios: true,
        android: true,
      },
    },

    migration: {
      importFromOriginal: false,
      exportData: true,
      migrationGuideUrl: "https://bsky.app/about/blog/import",
      autoMigrationTool: false,
    },

    features: {
      core: ["Timeline feeds", "Posts & threads", "Media sharing", "Direct messages", "Hashtags"],
      unique: [
        "Custom algorithms",
        "Composable moderation",
        "Domain-based handles",
        "Portable identity",
      ],
      missing: ["Live video", "Spaces (audio)", "Premium features"],
    },

    ethics: {
      privacy: 4,
      openness: 5,
      sustainability: 3,
      userRights: 5,
      overall: 4.25,
    },

    pros: [
      "User owns their data and identity",
      "Choose your own algorithm",
      "No ads (currently)",
      "Open protocol enables competition",
      "Strong moderation tools",
    ],

    cons: [
      "Still in beta",
      "Smaller community than Twitter",
      "Some features missing",
      "Requires understanding of decentralization",
    ],

    bestFor: [
      "Privacy-conscious users",
      "People tired of algorithmic manipulation",
      "Those who want data portability",
      "Early adopters",
    ],

    notRecommendedFor: [
      "Users who need massive reach immediately",
      "Those requiring advanced video features",
      "Non-technical users uncomfortable with new concepts",
    ],

    communityLinks: {
      documentation: "https://docs.bsky.app",
      support: "https://bsky.app/support",
      forum: "https://github.com/bluesky-social/social-app/discussions",
    },

    lastReviewed: "2024-01-15",
  },

  pixelfed: {
    id: "pixelfed",
    name: "Pixelfed",
    url: "https://pixelfed.org",
    description:
      "A free and ethical photo sharing platform powered by ActivityPub federation. Instagram alternative focused on privacy and ownership.",
    tagline: "Photo sharing for everyone",

    privacy: {
      dataCollection: "minimal",
      dataOwnership: "user",
      encryption: "in-transit",
      thirdPartySharing: false,
      dataRetention: "User controlled",
      gdprCompliant: true,
    },

    business: {
      type: "non-profit",
      revenue: "donations",
      transparent: true,
      funding: ["Community donations", "NLnet Foundation"],
    },

    technical: {
      openSource: true,
      license: "AGPL-3.0",
      repositoryUrl: "https://github.com/pixelfed",
      selfHostable: true,
      federation: "full",
      protocol: "ActivityPub",
      interoperability: ["Mastodon", "Pleroma", "Friendica", "Other Fediverse"],
    },

    governance: {
      contentModeration: "distributed",
      userGovernance: true,
      transparentRules: true,
      appealProcess: true,
    },

    maturity: {
      status: "stable",
      yearFounded: 2018,
      activeUsers: "100K+",
      mobileApps: {
        ios: true,
        android: true,
      },
    },

    migration: {
      importFromOriginal: false,
      exportData: true,
      migrationGuideUrl: "https://docs.pixelfed.org/importing",
      autoMigrationTool: false,
    },

    features: {
      core: ["Photo & video sharing", "Stories", "Filters", "Collections", "Discovery feed"],
      unique: [
        "Federated timeline",
        "Full data ownership",
        "No ads ever",
        "Chronological feed",
        "Choose your server",
      ],
      missing: ["Shopping features", "Reels (short video)", "Direct monetization"],
    },

    ethics: {
      privacy: 5,
      openness: 5,
      sustainability: 4,
      userRights: 5,
      overall: 4.75,
    },

    pros: [
      "Completely ad-free",
      "Full federation with Mastodon",
      "Strong privacy controls",
      "Open source",
      "Community-driven",
    ],

    cons: [
      "Smaller user base",
      "Needs server selection",
      "Some features lag behind Instagram",
      "Server reliability varies",
    ],

    bestFor: [
      "Privacy advocates",
      "Photographers wanting control",
      "Fediverse users",
      "Ad-free experience seekers",
    ],

    notRecommendedFor: [
      "Influencers needing maximum reach",
      "E-commerce sellers",
      "Users requiring shopping features",
    ],

    communityLinks: {
      documentation: "https://docs.pixelfed.org",
      forum: "https://pixelfed.org/support",
      chat: "https://discord.gg/pixelfed",
    },

    lastReviewed: "2024-01-15",
  },
};
