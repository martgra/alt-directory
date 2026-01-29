import { copy } from "./copy";

export const siteConfig = {
  name: copy.site.name,
  description: copy.site.description,
  tagline: copy.site.tagline,
  url: "https://altdirectory.com",

  links: {
    github: "https://github.com/yourusername/altdirectory",
    privacy: "/privacy",
    rss: "/rss",
  },

  nav: [],

  social: {
    twitter: "#",
    github: "#",
  },

  // API endpoints
  api: {
    submitSuggestion: "/api/submit-suggestion",
    adminSuggestions: "/api/admin-suggestions",
  },
} as const;
