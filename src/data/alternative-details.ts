import { AlternativeDetails } from "@/types/AlternativeDetails";

export const alternativeDetails: Record<string, AlternativeDetails> = {
  bluesky: {
    id: "bluesky",
    name: "Bluesky",
    url: "https://bsky.app",
    description:
      "Decentralized social network on AT Protocol offering Twitter-like experience with user-controlled algorithms, custom feeds, and composable moderation. Originally incubated at Twitter, now independent PBC.",
    tagline: "Social media as it should be",

    privacy: {
      dataCollection: "moderate",
      dataOwnership: "user",
      encryption: "in-transit",
      thirdPartySharing: false,
      dataRetention: "User-controlled via PDS",
      gdprCompliant: true,
    },

    business: {
      type: "for-profit",
      revenue: "subscriptions",
      transparent: true,
      funding: ["Blockchain Capital", "Neo", "True Ventures"],
    },

    technical: {
      openSource: true,
      license: "MIT/Apache 2.0",
      repositoryUrl: "https://github.com/bluesky-social",
      selfHostable: true,
      federation: "full",
      protocol: "AT Protocol",
      interoperability: ["AT Protocol ecosystem only"],
    },

    governance: {
      contentModeration: "centralized",
      userGovernance: true,
      transparentRules: true,
      appealProcess: true,
      codeOfConductUrl: "https://bsky.social/about/support/community-guidelines",
    },

    maturity: {
      status: "stable",
      yearFounded: 2021,
      activeUsers: "42M+",
      mobileApps: {
        ios: true,
        android: true,
      },
    },

    migration: {
      importFromOriginal: false,
      exportData: true,
      migrationGuideUrl: "https://bsky.social/about/blog/02-22-2024-open-social-web",
      autoMigrationTool: true,
    },

    features: {
      core: [
        "300 char posts",
        "Custom feeds",
        "Direct messages",
        "Lists",
        "Starter packs",
        "Hashtags",
        "Quote posts",
        "Trending topics",
      ],
      unique: [
        "User-controlled algorithms",
        "Composable moderation (Ozone labelers)",
        "AT Protocol portability",
        "Domain-based handles",
        "Personal Data Servers",
      ],
      missing: ["Private accounts (in development)", "Scheduling tools", "Audio spaces"],
    },

    ethics: {
      privacy: 4,
      openness: 4,
      sustainability: 3,
      userRights: 4,
      overall: 3.75,
    },

    pros: [
      "Custom feeds and algorithms",
      "Composable moderation system",
      "Data portability via AT Protocol",
      "Rapid development and feature releases",
      "Cultural momentum from Twitter migration",
      "No AI training on content (stated)",
    ],

    cons: [
      "VC-funded sustainability concerns",
      "Centralized despite protocol",
      "No ActivityPub federation",
      "Future business model unclear",
      "Public posts by design",
    ],

    bestFor: [
      "Twitter refugees wanting modern UX",
      "Users wanting algorithm choice",
      "Those valuing data portability",
      "People seeking decentralization principles",
    ],

    notRecommendedFor: [
      "Privacy maximalists",
      "Users requiring ActivityPub compatibility",
      "Those needing private/protected accounts",
    ],

    communityLinks: {
      documentation: "https://docs.bsky.app",
      support: "https://bsky.social/about/support",
    },

    lastReviewed: "2026-01-29",
  },

  pixelfed: {
    id: "pixelfed",
    name: "Pixelfed",
    url: "https://pixelfed.org",
    description:
      "Free, open-source decentralized Instagram alternative on ActivityPub. Chronological feeds, no ads, no algorithms, full Fediverse interoperability.",
    tagline: "Photo Sharing. For Everyone.",

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
      funding: ["NLnet Foundation", "NGI0 Discovery", "DigitalOcean", "Fastly"],
    },

    technical: {
      openSource: true,
      license: "AGPL-3.0",
      repositoryUrl: "https://github.com/pixelfed/pixelfed",
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
      codeOfConductUrl: "https://github.com/pixelfed/pixelfed/blob/dev/CODE_OF_CONDUCT.md",
    },

    maturity: {
      status: "stable",
      yearFounded: 2018,
      activeUsers: "300K-500K+",
      mobileApps: {
        ios: true,
        android: true,
      },
    },

    migration: {
      importFromOriginal: false,
      exportData: true,
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
        "Fediverse integration",
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
      "Full federation with Mastodon and Fediverse",
      "Strong privacy controls",
      "Open source and community-driven",
      "Official iOS app (January 2025)",
      "High-quality image display",
    ],

    cons: [
      "Smaller user base than Instagram",
      "Server selection can be confusing",
      "Some features lag behind Instagram",
      "Server reliability varies by instance",
    ],

    bestFor: [
      "Privacy-conscious photographers",
      "Fediverse users wanting photo sharing",
      "Ad-free experience seekers",
      "FOSS enthusiasts",
    ],

    notRecommendedFor: [
      "Influencers needing maximum reach",
      "E-commerce sellers",
      "Users requiring shopping features",
    ],

    communityLinks: {
      documentation: "https://docs.pixelfed.org",
      forum: "https://github.com/pixelfed/pixelfed/discussions",
      chat: "https://discord.gg/msXs3MumsK",
    },

    lastReviewed: "2026-01-29",
  },

  upscrolled: {
    id: "upscrolled",
    name: "UpScrolled",
    url: "https://upscrolled.com",
    description:
      "Australian social media platform for microblogging and short-form video sharing. Founded by Palestinian-Australian developer Issam Hijazi in response to perceived censorship on mainstream platforms. Positions itself as anti-shadowban with transparent, fair algorithms and no pay-to-play favoritism.",
    tagline: "Your voice amplified",

    privacy: {
      dataCollection: "moderate",
      dataOwnership: "platform",
      encryption: "in-transit",
      thirdPartySharing: false,
      dataRetention: "12 months operational logs; suspended accounts indefinite",
      gdprCompliant: true,
    },

    business: {
      type: "for-profit",
      revenue: "free",
      transparent: true,
      funding: ["Tech for Palestine incubator", "Recursive Methods Pty Ltd"],
    },

    technical: {
      openSource: false,
      selfHostable: false,
      federation: "none",
      interoperability: [],
    },

    governance: {
      contentModeration: "centralized",
      userGovernance: false,
      transparentRules: true,
      appealProcess: true,
      codeOfConductUrl: "https://upscrolled.com/en/rules-and-policies/",
    },

    maturity: {
      status: "beta",
      yearFounded: 2025,
      activeUsers: "200K+",
      mobileApps: {
        ios: true,
        android: true,
      },
    },

    migration: {
      importFromOriginal: false,
      exportData: false,
      autoMigrationTool: false,
    },

    features: {
      core: [
        "Photo sharing",
        "Short-form video",
        "Long-form video",
        "Text posts",
        "Real-time chat/messaging",
        "Stories",
        "Trending topics",
        "Profile customization",
        "Follow system",
        "Like and reshare",
        "Video editing tools",
        "Regional content discovery",
      ],
      unique: [
        "No shadowbanning policy",
        "Chronological/user-driven feed",
        "Explainable ranking algorithm",
        "No pay-to-play favoritism",
        "Anti-censorship mission",
        "Impartial to political agendas",
      ],
      missing: [
        "Federation/decentralization",
        "Open source transparency",
        "Data portability",
        "Third-party app ecosystem",
        "Desktop/web app (mobile-first)",
        "Mature moderation at scale",
        "E2E encryption for messages",
      ],
    },

    ethics: {
      privacy: 3,
      openness: 2,
      sustainability: 2,
      userRights: 4,
      overall: 2.75,
    },

    pros: [
      "Strong stance against shadowbanning and algorithmic suppression",
      "Transparent content moderation policies with clear community standards",
      "Mission-driven founding (anti-censorship, equal voice)",
      "Endorsed by advocacy groups (CAIR, 7amleh)",
      "Australian HQ with strong data protection framework",
      "No data sales policy",
      "Rapid growth and active development",
      "Combines features of TikTok, Instagram, and Twitter in one app",
    ],

    cons: [
      "Not open source — cannot independently verify algorithm claims",
      "Not federated — centralized control, single point of failure",
      "Very new platform (June 2025) — stability unproven",
      "Server capacity issues during growth spikes",
      "No clear long-term revenue model",
      "Limited feature set compared to mature platforms",
      "No data export/portability features documented",
      "No desktop/web client",
    ],

    bestFor: [
      "Users frustrated with perceived censorship on mainstream platforms",
      "Pro-Palestine activists and communities",
      "Creators seeking TikTok/Instagram alternatives",
      "Users wanting chronological, non-algorithmic feeds",
      "Communities feeling marginalized by big tech moderation",
      "Early adopters willing to help build new platforms",
    ],

    notRecommendedFor: [
      "Users requiring open source verification",
      "Privacy maximalists wanting E2E encryption",
      "Those prioritizing decentralization and data sovereignty",
      "Users needing mature, stable ecosystems",
      "Businesses requiring API access and integrations",
      "Users wanting cross-platform Fediverse interoperability",
    ],

    communityLinks: {
      documentation: "https://upscrolled.com/en/faq/",
      support: "https://support.upscrolled.com/hc/en-us",
    },

    lastReviewed: "2026-01-29",
  },

  mastodon: {
    id: "mastodon",
    name: "Mastodon",
    url: "https://joinmastodon.org",
    description:
      "Free, open-source decentralized social network using ActivityPub federation. Users choose from thousands of independently-operated instances with chronological feeds, no ads, and community-controlled moderation.",
    tagline: "Social networking that's not for sale",

    privacy: {
      dataCollection: "minimal",
      dataOwnership: "user",
      encryption: "in-transit",
      thirdPartySharing: false,
      dataRetention: "Instance-specific; default 90-day logs",
      gdprCompliant: true,
    },

    business: {
      type: "non-profit",
      revenue: "donations",
      transparent: true,
      funding: ["Crowdfunding (~3,500 Patreon supporters)", "Fastly", "Medium", "Mask Network"],
    },

    technical: {
      openSource: true,
      license: "AGPL-3.0",
      repositoryUrl: "https://github.com/mastodon/mastodon",
      selfHostable: true,
      federation: "full",
      protocol: "ActivityPub",
      interoperability: ["Misskey", "Pleroma", "Pixelfed", "PeerTube", "Lemmy"],
    },

    governance: {
      contentModeration: "distributed",
      userGovernance: true,
      transparentRules: true,
      appealProcess: true,
      codeOfConductUrl: "https://github.com/mastodon/mastodon/blob/main/CODE_OF_CONDUCT.md",
    },

    maturity: {
      status: "stable",
      yearFounded: 2016,
      activeUsers: "2M+",
      mobileApps: {
        ios: true,
        android: true,
      },
    },

    migration: {
      importFromOriginal: false,
      exportData: true,
      migrationGuideUrl: "https://docs.joinmastodon.org/user/moving/",
      autoMigrationTool: true,
    },

    features: {
      core: [
        "500+ character posts",
        "Polls",
        "Content warnings",
        "Hashtags",
        "Lists",
        "Filters",
        "Bookmarks",
        "Edit posts",
        "Quote posts (v4.5+)",
      ],
      unique: [
        "Decentralized architecture",
        "No algorithmic timeline",
        "Custom emojis",
        "Local/Federated timelines",
        "Built-in follower migration",
      ],
      missing: ["Full-text search across federation", "Unified trending topics"],
    },

    ethics: {
      privacy: 5,
      openness: 5,
      sustainability: 4,
      userRights: 5,
      overall: 4.75,
    },

    pros: [
      "Non-profit, no ads",
      "Full data ownership",
      "Active development",
      "Large user base",
      "Strong Fediverse integration",
      "Annual transparency reports",
    ],

    cons: [
      "Server selection can be confusing",
      "Discoverability challenges",
      "Cannot import old posts",
      "Fragmented experience across instances",
    ],

    bestFor: [
      "Privacy advocates",
      "Journalists",
      "FOSS communities",
      "Academics",
      "Twitter refugees seeking ethical alternative",
    ],

    notRecommendedFor: [
      "Users needing unified global search",
      "Those wanting algorithmic discovery",
      "Non-technical users uncomfortable with server selection",
    ],

    communityLinks: {
      forum: "https://github.com/mastodon/mastodon/discussions",
      documentation: "https://docs.joinmastodon.org",
      support: "https://github.com/mastodon/mastodon/discussions",
    },

    lastReviewed: "2026-01-29",
  },

  signal: {
    id: "signal",
    name: "Signal",
    url: "https://signal.org",
    description:
      "Gold standard end-to-end encrypted messaging from non-profit Signal Foundation. The Signal Protocol is adopted by WhatsApp, Facebook Messenger, and others.",
    tagline: "Speak Freely",

    privacy: {
      dataCollection: "minimal",
      dataOwnership: "user",
      encryption: "end-to-end",
      thirdPartySharing: false,
      dataRetention: "Only phone number, registration date, last connection date",
      gdprCompliant: true,
    },

    business: {
      type: "non-profit",
      revenue: "donations",
      transparent: true,
      funding: ["Brian Acton ($50M+)", "Knight Foundation", "Shuttleworth Foundation"],
    },

    technical: {
      openSource: true,
      license: "AGPL-3.0-only",
      repositoryUrl: "https://github.com/signalapp",
      selfHostable: false,
      federation: "none",
      interoperability: [],
    },

    governance: {
      contentModeration: "minimal",
      userGovernance: false,
      transparentRules: true,
      appealProcess: false,
    },

    maturity: {
      status: "stable",
      yearFounded: 2014,
      activeUsers: "70-100M",
      mobileApps: {
        ios: true,
        android: true,
      },
    },

    migration: {
      importFromOriginal: false,
      exportData: true,
      autoMigrationTool: false,
    },

    features: {
      core: [
        "E2EE messages",
        "Voice/video calls",
        "Groups (up to 1000)",
        "Disappearing messages",
        "Stories",
      ],
      unique: [
        "Post-quantum encryption (PQXDH, 2024)",
        "Usernames (2024) to hide phone number",
        "Sealed sender (hides sender identity)",
        "Court-verified privacy (0 bytes disclosed)",
      ],
      missing: ["Federation", "Multi-device without phone"],
    },

    ethics: {
      privacy: 5,
      openness: 5,
      sustainability: 4,
      userRights: 5,
      overall: 4.75,
    },

    pros: [
      "Strongest encryption standard (Signal Protocol)",
      "Non-profit foundation",
      "Minimal metadata collection",
      "Open source client and server",
      "Court-verified privacy protection",
      "Post-quantum encryption",
    ],

    cons: [
      "Requires phone number (username feature partial)",
      "Centralized architecture",
      "No federation",
      "Smaller feature set than commercial apps",
    ],

    bestFor: [
      "Journalists",
      "Activists",
      "Privacy-conscious individuals",
      "Anyone wanting mainstream UX with maximum privacy",
    ],

    notRecommendedFor: [
      "Users needing complete anonymity (requires phone)",
      "Those wanting federation",
      "Business users needing extensive features",
    ],

    communityLinks: {
      forum: "https://community.signalusers.org",
      support: "https://support.signal.org",
      documentation: "https://signal.org/docs",
    },

    lastReviewed: "2026-01-29",
  },

  session: {
    id: "session",
    name: "Session",
    url: "https://getsession.org",
    description:
      "Decentralized, E2EE messenger requiring no phone number or email. Onion routing via 1,500+ community-operated nodes protects IP addresses. Swiss foundation since 2024.",
    tagline: "Send Messages, Not Metadata",

    privacy: {
      dataCollection: "minimal",
      dataOwnership: "user",
      encryption: "end-to-end",
      thirdPartySharing: false,
      dataRetention: "No phone, email, or IP collected",
      gdprCompliant: true,
    },

    business: {
      type: "non-profit",
      revenue: "free",
      transparent: true,
      funding: ["Session Technology Foundation (Switzerland)", "SESH cryptocurrency model"],
    },

    technical: {
      openSource: true,
      license: "GPL-3.0",
      repositoryUrl: "https://github.com/oxen-io",
      selfHostable: false,
      federation: "full",
      interoperability: [],
    },

    governance: {
      contentModeration: "minimal",
      userGovernance: false,
      transparentRules: true,
      appealProcess: false,
    },

    maturity: {
      status: "stable",
      yearFounded: 2020,
      activeUsers: "2M+",
      mobileApps: {
        ios: true,
        android: true,
      },
    },

    migration: {
      importFromOriginal: false,
      exportData: false,
      autoMigrationTool: false,
    },

    features: {
      core: ["E2EE messages", "Voice/video calls (beta)", "Groups", "Communities (SOGS)"],
      unique: [
        "No phone/email signup",
        "66-character Account ID",
        "Onion routing",
        "IP address never exposed",
        "Post-quantum encryption (ML-KEM in V2)",
      ],
      missing: ["Voice calls (in beta)", "Stories", "Large group limits"],
    },

    ethics: {
      privacy: 5,
      openness: 5,
      sustainability: 4,
      userRights: 5,
      overall: 4.75,
    },

    pros: [
      "Maximum anonymity (no phone/email required)",
      "Onion routing protects IP address",
      "Fully decentralized",
      "Open source",
      "No metadata collection",
      "Swiss foundation governance",
    ],

    cons: [
      "Voice/video calls still in beta",
      "66-character Account ID is cumbersome",
      "Smaller user base",
      "Cryptocurrency integration may deter some users",
    ],

    bestFor: [
      "High-risk individuals",
      "Maximum anonymity requirements",
      "Avoiding phone number registration",
      "Privacy maximalists",
    ],

    notRecommendedFor: [
      "Users wanting mainstream features",
      "Those needing stable voice/video calls",
      "People uncomfortable with Account ID system",
    ],

    communityLinks: {
      documentation: "https://docs.getsession.org",
      support: "https://sessionapp.zendesk.com",
    },

    lastReviewed: "2026-01-29",
  },

  matrix: {
    id: "matrix",
    name: "Matrix / Element",
    url: "https://matrix.org",
    description:
      "Open standard for decentralized, federated communication. Full self-hosting, bridges to Slack/Discord/Telegram/IRC/WhatsApp. Used by German military, French government, NHS.",
    tagline: "Own your data. Choose your hosting. Secure your comms.",

    privacy: {
      dataCollection: "minimal",
      dataOwnership: "user",
      encryption: "end-to-end",
      thirdPartySharing: false,
      dataRetention: "Depends on homeserver",
      gdprCompliant: true,
    },

    business: {
      type: "non-profit",
      revenue: "donations",
      transparent: true,
      funding: ["Matrix.org Foundation", "Element (enterprise)", "Donations"],
    },

    technical: {
      openSource: true,
      license: "Apache 2.0",
      repositoryUrl: "https://github.com/matrix-org",
      selfHostable: true,
      federation: "full",
      protocol: "Matrix Protocol",
      interoperability: ["Slack", "Discord", "Telegram", "IRC", "XMPP", "WhatsApp"],
    },

    governance: {
      contentModeration: "distributed",
      userGovernance: true,
      transparentRules: true,
      appealProcess: true,
      codeOfConductUrl: "https://matrix.org/legal/code-of-conduct/",
    },

    maturity: {
      status: "stable",
      yearFounded: 2014,
      activeUsers: "115M+",
      mobileApps: {
        ios: true,
        android: true,
      },
    },

    migration: {
      importFromOriginal: false,
      exportData: true,
      autoMigrationTool: false,
    },

    features: {
      core: [
        "E2EE messages (default for private rooms)",
        "Voice/video calls",
        "Large groups",
        "Spaces (communities)",
        "Threads",
      ],
      unique: [
        "Full self-hosting capability",
        "Bridges to 10+ platforms",
        "Decentralized architecture",
        "Enterprise-grade security",
        "Used by governments",
      ],
      missing: ["Simplified onboarding", "Consistent UX across clients"],
    },

    ethics: {
      privacy: 4,
      openness: 5,
      sustainability: 4,
      userRights: 5,
      overall: 4.5,
    },

    pros: [
      "Fully self-hostable and federated",
      "Bridges to legacy platforms",
      "Open source protocol and clients",
      "Government and enterprise adoption",
      "Strong encryption (Olm/Megolm)",
      "Matrix 2.0 improvements rolling out",
    ],

    cons: [
      "Complex setup for self-hosting",
      "E2EE not enabled for all room types",
      "Resource-intensive servers",
      "Fragmented user experience",
    ],

    bestFor: [
      "Organizations wanting sovereign communications",
      "Open source communities",
      "Users needing interoperability with legacy platforms",
      "Teams requiring self-hosted solutions",
    ],

    notRecommendedFor: [
      "Non-technical users wanting simple setup",
      "Those needing lightweight mobile apps",
      "Users wanting consistent mainstream UX",
    ],

    communityLinks: {
      documentation: "https://matrix.org/docs",
      chat: "#matrix:matrix.org",
      support: "support@matrix.org",
    },

    lastReviewed: "2026-01-29",
  },

  telegram: {
    id: "telegram",
    name: "Telegram",
    url: "https://telegram.org",
    description:
      "Cloud-based messaging with large groups (200K members), channels, bots. ⚠️ E2EE only in opt-in 'Secret Chats'—regular chats use client-server encryption. Server is closed source.",
    tagline: "Cloud-based messaging",

    privacy: {
      dataCollection: "extensive",
      dataOwnership: "platform",
      encryption: "in-transit",
      thirdPartySharing: true,
      dataRetention: "Indefinite cloud storage; shares IP/phone with authorities since Sept 2024",
      gdprCompliant: true,
    },

    business: {
      type: "for-profit",
      revenue: "subscriptions",
      transparent: false,
      funding: ["Premium subscriptions", "Advertising (channels)", "TON cryptocurrency"],
    },

    technical: {
      openSource: false,
      license: "GPL-2.0 (clients only)",
      repositoryUrl: "https://github.com/DrKLO/Telegram",
      selfHostable: false,
      federation: "none",
      interoperability: [],
    },

    governance: {
      contentModeration: "centralized",
      userGovernance: false,
      transparentRules: false,
      appealProcess: false,
    },

    maturity: {
      status: "stable",
      yearFounded: 2013,
      activeUsers: "1B+",
      mobileApps: {
        ios: true,
        android: true,
      },
    },

    migration: {
      importFromOriginal: false,
      exportData: true,
      autoMigrationTool: false,
    },

    features: {
      core: [
        "Messages",
        "Large groups (200K)",
        "Channels",
        "Bots",
        "File sharing (2GB)",
        "Secret Chats (E2EE)",
      ],
      unique: [
        "Large group capacity",
        "Powerful bot platform",
        "Cloud sync across devices",
        "Channels for broadcasting",
      ],
      missing: ["Default E2EE", "Server transparency", "Privacy by default"],
    },

    ethics: {
      privacy: 2,
      openness: 3,
      sustainability: 4,
      userRights: 3,
      overall: 3.0,
    },

    pros: [
      "Feature-rich platform",
      "Large user base",
      "Powerful bots and channels",
      "Cross-platform sync",
      "Large file sharing",
    ],

    cons: [
      "⚠️ E2EE not default (only Secret Chats)",
      "⚠️ Server closed source—cannot verify security claims",
      "⚠️ 2024 policy change: shares data with law enforcement",
      "⚠️ CEO arrested in France over moderation concerns",
      "Not recommended for privacy-sensitive communications",
    ],

    bestFor: [
      "Large community management",
      "Bot-powered workflows",
      "Broadcasting channels",
      "Non-sensitive communications",
    ],

    notRecommendedFor: [
      "Privacy-sensitive conversations",
      "Journalists and activists",
      "Anyone assuming messages are encrypted by default",
      "High-risk individuals",
    ],

    communityLinks: {},

    lastReviewed: "2026-01-29",
  },

  lemmy: {
    id: "lemmy",
    name: "Lemmy",
    url: "https://join-lemmy.org",
    description:
      "Free, open-source federated Reddit alternative on ActivityPub. Community creation, threaded comments, voting, cross-instance subscriptions.",
    tagline: "A link aggregator and forum for the fediverse",

    privacy: {
      dataCollection: "minimal",
      dataOwnership: "user",
      encryption: "in-transit",
      thirdPartySharing: false,
      dataRetention: "Instance-specific",
      gdprCompliant: true,
    },

    business: {
      type: "volunteer",
      revenue: "donations",
      transparent: true,
      funding: ["NLnet Foundation", "Liberapay", "OpenCollective"],
    },

    technical: {
      openSource: true,
      license: "AGPL-3.0",
      repositoryUrl: "https://github.com/LemmyNet/lemmy",
      selfHostable: true,
      federation: "full",
      protocol: "ActivityPub",
      interoperability: ["Mastodon", "Kbin", "Other Fediverse"],
    },

    governance: {
      contentModeration: "distributed",
      userGovernance: true,
      transparentRules: true,
      appealProcess: true,
      codeOfConductUrl: "https://join-lemmy.org/docs/code_of_conduct.html",
    },

    maturity: {
      status: "stable",
      yearFounded: 2019,
      activeUsers: "48,600+",
      mobileApps: {
        ios: true,
        android: true,
      },
    },

    migration: {
      importFromOriginal: false,
      exportData: true,
      autoMigrationTool: false,
    },

    features: {
      core: [
        "Communities (subreddit equivalent)",
        "Threaded comments",
        "Upvote/downvote",
        "Cross-instance subscriptions",
        "Moderation tools",
        "Public mod logs",
      ],
      unique: [
        "Federated architecture",
        "Public moderation logs",
        "Cross-instance communities",
        "No corporate ownership",
      ],
      missing: ["Reddit award system", "Chat features", "Native video hosting"],
    },

    ethics: {
      privacy: 5,
      openness: 5,
      sustainability: 4,
      userRights: 5,
      overall: 4.75,
    },

    pros: [
      "Open source and federated",
      "No ads or tracking",
      "Public mod logs for transparency",
      "Multiple iOS and Android apps available",
      "Active development",
      "Growing user base",
    ],

    cons: [
      "Smaller community than Reddit",
      "Server selection required",
      "Less content variety",
      "Some instances have scaling issues",
    ],

    bestFor: [
      "Privacy-conscious Reddit users",
      "Tech communities",
      "Self-hosters",
      "FOSS enthusiasts",
    ],

    notRecommendedFor: [
      "Users needing massive subreddit variety",
      "Those wanting mainstream content reach",
      "Non-technical users uncomfortable with instances",
    ],

    communityLinks: {
      forum: "https://lemmy.ml/c/lemmy",
      chat: "https://matrix.to/#/#lemmy-space:matrix.org",
      documentation: "https://join-lemmy.org/docs/index.html",
    },

    lastReviewed: "2026-01-29",
  },

  friendica: {
    id: "friendica",
    name: "Friendica",
    url: "https://friendi.ca",
    description:
      "Decentralized social network that bridges multiple protocols—ActivityPub, Diaspora, OStatus, RSS, email. Most versatile cross-network interoperability in the Fediverse.",
    tagline: "A decentralized social network",

    privacy: {
      dataCollection: "minimal",
      dataOwnership: "user",
      encryption: "in-transit",
      thirdPartySharing: false,
      dataRetention: "User controlled",
      gdprCompliant: true,
    },

    business: {
      type: "volunteer",
      revenue: "donations",
      transparent: true,
      funding: ["Community donations"],
    },

    technical: {
      openSource: true,
      license: "AGPL-3.0",
      repositoryUrl: "https://github.com/friendica/friendica",
      selfHostable: true,
      federation: "full",
      protocol: "DFRN, ActivityPub, Diaspora, OStatus",
      interoperability: [
        "Mastodon",
        "Lemmy",
        "Diaspora",
        "Pixelfed",
        "PeerTube",
        "Misskey",
        "Bluesky (via API)",
        "WordPress",
        "Tumblr",
        "RSS",
        "Email",
      ],
    },

    governance: {
      contentModeration: "distributed",
      userGovernance: true,
      transparentRules: true,
      appealProcess: true,
      codeOfConductUrl: "https://github.com/friendica/friendica/blob/develop/CODE_OF_CONDUCT.md",
    },

    maturity: {
      status: "stable",
      yearFounded: 2010,
      activeUsers: "10K-15K",
      mobileApps: {
        ios: false,
        android: true,
      },
    },

    migration: {
      importFromOriginal: false,
      exportData: true,
      autoMigrationTool: false,
    },

    features: {
      core: ["Posts and sharing", "Groups", "Events", "Photo albums", "Profile customization"],
      unique: [
        "Multi-protocol bridge",
        "Connects Diaspora and ActivityPub",
        "RSS/email integration",
        "Bluesky bridge",
        "Most interoperable Fediverse platform",
      ],
      missing: ["Modern mobile apps", "Large user base", "Streamlined UX"],
    },

    ethics: {
      privacy: 5,
      openness: 5,
      sustainability: 4,
      userRights: 5,
      overall: 4.75,
    },

    pros: [
      "Bridges multiple protocols",
      "Most versatile Fediverse platform",
      "Long-standing project (2010)",
      "Open source",
      "Highly customizable",
    ],

    cons: [
      "Smaller user base",
      "Dated interface",
      "Limited mobile app support",
      "Complexity can be overwhelming",
    ],

    bestFor: [
      "Power users aggregating multiple networks",
      "Bridge between Diaspora and ActivityPub",
      "Users wanting maximum interoperability",
    ],

    notRecommendedFor: [
      "Users wanting modern, streamlined UX",
      "Mobile-first users",
      "Those seeking simplicity",
    ],

    communityLinks: {
      forum: "https://forum.friendi.ca",
      chat: "https://matrix.to/#/#friendica:matrix.org",
      documentation: "https://wiki.friendi.ca",
    },

    lastReviewed: "2026-01-29",
  },

  diaspora: {
    id: "diaspora",
    name: "diaspora*",
    url: "https://diasporafoundation.org",
    description:
      "Nonprofit, user-owned distributed social network founded 2010. Independent 'pods' with no central corporate control. Pioneered 'Aspects' concept (inspired Google+ Circles).",
    tagline: "The online social world where you are in control",

    privacy: {
      dataCollection: "minimal",
      dataOwnership: "user",
      encryption: "in-transit",
      thirdPartySharing: false,
      dataRetention: "Pod-specific",
      gdprCompliant: true,
    },

    business: {
      type: "non-profit",
      revenue: "donations",
      transparent: true,
      funding: ["Community donations"],
    },

    technical: {
      openSource: true,
      license: "AGPL-3.0",
      repositoryUrl: "https://github.com/diaspora/diaspora",
      selfHostable: true,
      federation: "full",
      protocol: "Diaspora Protocol",
      interoperability: ["Friendica", "Hubzilla", "Socialhome"],
    },

    governance: {
      contentModeration: "distributed",
      userGovernance: true,
      transparentRules: true,
      appealProcess: true,
      codeOfConductUrl: "https://github.com/diaspora/diaspora/blob/develop/CODE_OF_CONDUCT.md",
    },

    maturity: {
      status: "stable",
      yearFounded: 2010,
      activeUsers: "600K+",
      mobileApps: {
        ios: false,
        android: true,
      },
    },

    migration: {
      importFromOriginal: false,
      exportData: true,
      autoMigrationTool: false,
    },

    features: {
      core: [
        "Posts and sharing",
        "Aspects (privacy groups)",
        "Hashtags",
        "Mentions",
        "Conversations",
      ],
      unique: [
        "Aspects system for granular privacy",
        "Pioneered decentralized social (2010)",
        "Complete user ownership",
        "No central authority",
      ],
      missing: ["ActivityPub support", "iOS app", "Modern features like Stories"],
    },

    ethics: {
      privacy: 5,
      openness: 5,
      sustainability: 3,
      userRights: 5,
      overall: 4.5,
    },

    pros: [
      "Pioneering decentralized platform",
      "Complete user ownership",
      "No corporate control",
      "Aspects for granular privacy",
      "Long history (2010)",
    ],

    cons: [
      "Does NOT support ActivityPub (separate from Mastodon)",
      "No iOS app",
      "Smaller, aging user base",
      "Limited modern features",
      "Development pace slower than alternatives",
    ],

    bestFor: [
      "Privacy advocates",
      "Users wanting granular privacy controls",
      "Those supporting pioneer decentralized projects",
    ],

    notRecommendedFor: [
      "iOS users",
      "Those wanting ActivityPub/Mastodon integration",
      "Users seeking modern social features",
    ],

    communityLinks: {
      forum: "https://discourse.diasporafoundation.org",
      chat: "https://web.libera.chat/?channel=#diaspora",
      documentation: "https://wiki.diasporafoundation.org",
    },

    lastReviewed: "2026-01-29",
  },

  peertube: {
    id: "peertube",
    name: "PeerTube",
    url: "https://joinpeertube.org",
    description:
      "Decentralized, federated video platform using P2P technology to reduce server load. Part of Fediverse via ActivityPub. Developed by French non-profit Framasoft.",
    tagline: "A free software to take back control of your videos!",

    privacy: {
      dataCollection: "minimal",
      dataOwnership: "user",
      encryption: "in-transit",
      thirdPartySharing: false,
      dataRetention: "Instance-specific; no tracking or profiling",
      gdprCompliant: true,
    },

    business: {
      type: "non-profit",
      revenue: "donations",
      transparent: true,
      funding: ["Framasoft crowdfunding", "NLnet Foundation", "Debian", "European Commission"],
    },

    technical: {
      openSource: true,
      license: "AGPL-3.0",
      repositoryUrl: "https://github.com/Chocobozzz/PeerTube",
      selfHostable: true,
      federation: "full",
      protocol: "ActivityPub",
      interoperability: ["Mastodon", "Pixelfed", "Lemmy", "Fediverse"],
    },

    governance: {
      contentModeration: "distributed",
      userGovernance: true,
      transparentRules: true,
      appealProcess: true,
      codeOfConductUrl: "https://github.com/Chocobozzz/PeerTube/blob/develop/CODE_OF_CONDUCT.md",
    },

    maturity: {
      status: "stable",
      yearFounded: 2017,
      activeUsers: "55K+",
      mobileApps: {
        ios: true,
        android: true,
      },
    },

    migration: {
      importFromOriginal: true,
      exportData: true,
      migrationGuideUrl: "https://docs.joinpeertube.org/use/tools#import-videos",
      autoMigrationTool: true,
    },

    features: {
      core: [
        "Video hosting/streaming (HLS with WebRTC P2P)",
        "Live streaming",
        "Sepia Search (federated search)",
        "Chapters",
        "Analytics",
        "Playlists",
      ],
      unique: [
        "P2P streaming reduces server costs",
        "Fediverse integration",
        "YouTube channel sync import",
        "Decentralized architecture",
      ],
      missing: ["Built-in monetization", "Large content library", "Recommendation algorithm"],
    },

    ethics: {
      privacy: 5,
      openness: 5,
      sustainability: 4,
      userRights: 5,
      overall: 4.75,
    },

    pros: [
      "P2P technology reduces hosting costs",
      "No ads or tracking",
      "Fediverse integration",
      "YouTube import tools",
      "European origin (strong GDPR)",
      "Active development",
    ],

    cons: [
      "Smaller video library",
      "Discoverability challenges",
      "P2P requires viewer bandwidth",
      "Instance reliability varies",
    ],

    bestFor: [
      "Privacy-conscious video creators",
      "Educational content",
      "Community/activist video hosting",
      "Fediverse users",
    ],

    notRecommendedFor: [
      "Creators needing maximum reach",
      "Viewers wanting vast content library",
      "Those requiring built-in monetization",
    ],

    communityLinks: {
      forum: "https://framacolibri.org/c/peertube",
      chat: "#peertube:matrix.org",
      documentation: "https://docs.joinpeertube.org",
    },

    lastReviewed: "2026-01-29",
  },

  funkwhale: {
    id: "funkwhale",
    name: "Funkwhale",
    url: "https://www.funkwhale.audio",
    description:
      "Community-driven, decentralized audio streaming for personal music collections and podcast publishing. Federated 'pods' with ActivityPub and Subsonic API compatibility.",
    tagline: "A platform for all your audio",

    privacy: {
      dataCollection: "minimal",
      dataOwnership: "user",
      encryption: "in-transit",
      thirdPartySharing: false,
      dataRetention: "Pod-specific",
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
      repositoryUrl: "https://dev.funkwhale.audio/funkwhale/funkwhale",
      selfHostable: true,
      federation: "full",
      protocol: "ActivityPub",
      interoperability: ["Subsonic clients", "Fediverse platforms"],
    },

    governance: {
      contentModeration: "distributed",
      userGovernance: true,
      transparentRules: true,
      appealProcess: true,
      codeOfConductUrl: "https://www.funkwhale.audio/code-of-conduct/",
    },

    maturity: {
      status: "stable",
      yearFounded: 2017,
      activeUsers: "5K-10K",
      mobileApps: {
        ios: false,
        android: true,
      },
    },

    migration: {
      importFromOriginal: false,
      exportData: true,
      autoMigrationTool: false,
    },

    features: {
      core: [
        "Audio streaming",
        "Podcast hosting",
        "Playlists",
        "Radio stations",
        "Library management",
        "Subsonic API",
      ],
      unique: [
        "Federated audio sharing",
        "Personal music collection hosting",
        "Subsonic-compatible (works with many apps)",
        "Focus on legally-owned music",
      ],
      missing: ["Licensed commercial catalog", "Mobile apps", "Large user base"],
    },

    ethics: {
      privacy: 5,
      openness: 5,
      sustainability: 3,
      userRights: 5,
      overall: 4.5,
    },

    pros: [
      "Self-host your music collection",
      "Federated with ActivityPub",
      "Subsonic API compatibility",
      "Focus on legal content",
      "No ads or tracking",
    ],

    cons: [
      "No licensed commercial music catalog",
      "Limited iOS support",
      "Smaller user base",
      "Requires self-hosting or finding pod",
    ],

    bestFor: [
      "Personal music collection hosting",
      "Podcast creators",
      "Users with legally-owned music",
      "Self-hosters",
    ],

    notRecommendedFor: [
      "Users wanting Spotify-like commercial catalog",
      "iOS users needing native app",
      "Those wanting mainstream streaming service",
    ],

    communityLinks: {
      forum: "https://forum.funkwhale.audio",
      chat: "#funkwhale:matrix.org",
      documentation: "https://docs.funkwhale.audio",
    },

    lastReviewed: "2026-01-29",
  },

  owncast: {
    id: "owncast",
    name: "Owncast",
    url: "https://owncast.online",
    description:
      "Self-hosted live streaming + chat server alternative to Twitch. Complete ownership over content, moderation, and audience with Fediverse integration.",
    tagline: "Take control over your live stream video by running it yourself",

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
      revenue: "free",
      transparent: true,
      funding: ["Community contributions"],
    },

    technical: {
      openSource: true,
      license: "MIT",
      repositoryUrl: "https://github.com/owncast/owncast",
      selfHostable: true,
      federation: "partial",
      protocol: "ActivityPub (notifications)",
      interoperability: ["Fediverse (for notifications)"],
    },

    governance: {
      contentModeration: "centralized",
      userGovernance: true,
      transparentRules: true,
      appealProcess: false,
      codeOfConductUrl: "https://github.com/owncast/owncast/blob/develop/CODE_OF_CONDUCT.md",
    },

    maturity: {
      status: "stable",
      yearFounded: 2020,
      activeUsers: "N/A (self-hosted)",
      mobileApps: {
        ios: false,
        android: false,
      },
    },

    migration: {
      importFromOriginal: false,
      exportData: true,
      autoMigrationTool: false,
    },

    features: {
      core: [
        "Live streaming (HLS)",
        "Chat",
        "Emotes",
        "Moderation tools",
        "Social features",
        "Custom branding",
      ],
      unique: [
        "Complete self-hosted control",
        "Fediverse notifications",
        "No platform restrictions",
        "Own your content and audience",
      ],
      missing: ["Mobile apps", "Built-in discovery", "Monetization tools"],
    },

    ethics: {
      privacy: 5,
      openness: 5,
      sustainability: 3,
      userRights: 5,
      overall: 4.5,
    },

    pros: [
      "Complete ownership and control",
      "No platform restrictions or bans",
      "Fediverse integration",
      "Open source",
      "Self-hosted privacy",
    ],

    cons: [
      "Requires technical setup",
      "No built-in audience",
      "No mobile apps",
      "Self-hosting costs",
    ],

    bestFor: [
      "Individual streamers wanting full control",
      "Privacy-focused events",
      "Corporate internal streaming",
      "Tech-savvy creators",
    ],

    notRecommendedFor: [
      "Users wanting built-in audience/discovery",
      "Non-technical streamers",
      "Those needing mobile streaming",
    ],

    communityLinks: {
      chat: "https://owncast.rocket.chat",
      documentation: "https://owncast.online/docs",
    },

    lastReviewed: "2026-01-29",
  },

  glass: {
    id: "glass",
    name: "Glass",
    url: "https://glass.photo",
    description:
      "Paid, subscription-based photography community with no ads, algorithms, or public counts. Focuses on serious photographers with high-quality image display and EXIF/camera metadata features.",
    tagline: "Fall in love with photography again",

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
      funding: ["Self-funded (no VC)"],
    },

    technical: {
      openSource: false,
      selfHostable: false,
      federation: "none",
      interoperability: [],
    },

    governance: {
      contentModeration: "centralized",
      userGovernance: false,
      transparentRules: true,
      appealProcess: true,
      codeOfConductUrl: "https://glass.photo/code-of-conduct",
    },

    maturity: {
      status: "stable",
      yearFounded: 2021,
      activeUsers: "N/A",
      mobileApps: {
        ios: true,
        android: true,
      },
    },

    migration: {
      importFromOriginal: false,
      exportData: false,
      autoMigrationTool: false,
    },

    features: {
      core: [
        "Photo sharing",
        "EXIF display",
        "Camera/lens feeds",
        "Minimal compression",
        "P3 color support",
        "Collections",
      ],
      unique: [
        "No public counts (likes/followers hidden)",
        "EXIF metadata prominent",
        "Camera and lens-specific feeds",
        "Lightroom/Capture One integration",
        "High-quality image display",
        "Photography-focused community",
      ],
      missing: ["Free tier", "Open source", "Federation", "Video support"],
    },

    ethics: {
      privacy: 5,
      openness: 2,
      sustainability: 4,
      userRights: 4,
      overall: 3.75,
    },

    pros: [
      "High-quality photography focus",
      "No ads or algorithms",
      "Independent company (no VC)",
      "Subscription model aligns incentives",
      "Excellent image quality and display",
      "Professional portfolio features",
    ],

    cons: [
      "Paid subscription required ($4.99/month or $29.99/year)",
      "Not open source",
      "No federation",
      "Smaller community",
      "No free tier for exploration",
    ],

    bestFor: [
      "Serious photographers",
      "Professional portfolios",
      "Users tired of likes/follower counts",
      "Those valuing quality over quantity",
    ],

    notRecommendedFor: [
      "Casual photo sharers",
      "Users wanting free platform",
      "Those requiring federation",
      "Open source advocates",
    ],

    communityLinks: {
      support: "https://feedback.glass.photo",
      chat: "https://mastodon.world/@glass",
    },

    lastReviewed: "2026-01-29",
  },

  loops: {
    id: "loops",
    name: "Loops",
    url: "https://joinloops.org",
    description:
      "Federated, open-source short-form video platform for the Fediverse. Ethical TikTok/Reels alternative by Pixelfed founder. No ads, no AI training on content.",
    tagline: "Short videos. Your community. Your rules.",

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
      funding: ["NGI0 Core Grant", "Community donations"],
    },

    technical: {
      openSource: true,
      license: "AGPL-3.0",
      repositoryUrl: "https://github.com/joinLoops",
      selfHostable: true,
      federation: "full",
      protocol: "ActivityPub",
      interoperability: ["Pixelfed", "Mastodon", "Fediverse"],
    },

    governance: {
      contentModeration: "distributed",
      userGovernance: true,
      transparentRules: true,
      appealProcess: true,
    },

    maturity: {
      status: "beta",
      yearFounded: 2024,
      activeUsers: "N/A (early beta)",
      mobileApps: {
        ios: true,
        android: true,
      },
    },

    migration: {
      importFromOriginal: false,
      exportData: true,
      autoMigrationTool: false,
    },

    features: {
      core: [
        "Short-form video",
        "Fediverse integration",
        "Video editing",
        "Trending content",
        "For You feed",
      ],
      unique: [
        "Federated architecture",
        "No AI training on content",
        "User owns content ('Your content is yours. Period.')",
        "Open source",
        "Part of Fediverse",
      ],
      missing: ["Large content library", "Advanced editing features", "Live streaming"],
    },

    ethics: {
      privacy: 5,
      openness: 5,
      sustainability: 4,
      userRights: 5,
      overall: 4.75,
    },

    pros: [
      "Open source and federated",
      "No ads or tracking",
      "No AI training on user content",
      "Strong user ownership",
      "Fediverse integration",
      "By Pixelfed founder (proven track record)",
    ],

    cons: [
      "Still in beta",
      "Very small user base",
      "Limited features compared to TikTok",
      "Early stage development",
    ],

    bestFor: [
      "Early adopters",
      "Fediverse enthusiasts",
      "Privacy-conscious video creators",
      "Those wanting TikTok alternative",
    ],

    notRecommendedFor: [
      "Users needing stable platform",
      "Those wanting large audience immediately",
      "Users requiring advanced editing features",
    ],

    communityLinks: {
      chat: "https://discord.gg/wvud8BgFv8",
      documentation: "https://docs.joinloops.org",
    },

    lastReviewed: "2026-01-29",
  },
};
