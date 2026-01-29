/**
 * Centralized copy/text content for the application
 * Update all user-facing text here for easy maintenance
 */

export const copy = {
  // Site metadata
  site: {
    name: "AltDirectory",
    description: "Curating the best privacy-focused alternatives to mainstream platforms.",
    tagline:
      "Discover ethical, decentralized, and user-first platforms to reclaim your digital life.",
    copyright: "Open source and community driven.",
  },

  // Navigation
  nav: {},

  // Main page
  pages: {
    home: {
      title: "Switch to freedom",
      description:
        "Discover ethical, decentralized, and user-first platforms to reclaim your digital life.",
    },
  },

  // Suggest Alternative Form
  suggestForm: {
    buttonText: "Suggest Alternative",
    title: "Suggest an Alternative",
    description: "Help others discover better alternatives to mainstream platforms.",

    fields: {
      establishedPlatform: {
        label: "Which platform are you suggesting an alternative for?",
        placeholder: "Select a platform...",
      },
      alternativeName: {
        label: "Alternative Platform Name",
        placeholder: "e.g., Mastodon",
      },
      url: {
        label: "Website URL",
        placeholder: "https://example.com",
      },
      category: {
        label: "Category",
        placeholder: "Select a category...",
      },
      description: {
        label: "Why is this a good alternative?",
        placeholder:
          "Describe what makes this platform a great alternative. Include key features, privacy benefits, or unique selling points...",
      },
      email: {
        label: "Your Email (optional)",
        placeholder: "email@example.com",
        helpText: "We'll only use this to follow up if we have questions about your suggestion.",
      },
    },

    buttons: {
      cancel: "Cancel",
      submit: "Submit Suggestion",
      submitting: "Submitting...",
      submitted: "Submitted!",
    },

    validation: {
      required: "*",
      establishedPlatform: "Please select a platform",
      alternativeName: "Please enter an alternative name",
      url: {
        required: "Please enter a URL",
        invalid: "Please enter a valid URL",
      },
      description: "Please describe why this is a good alternative",
      category: "Please select a category",
    },
  },

  // Alternative Cards
  alternatives: {
    expandButton: (count: number) => `+${count}`,
    moreAlternatives: "More alternatives",
  },

  // Error messages
  errors: {
    generic: "Something went wrong. Please try again.",
    network: "Network error. Please check your connection.",
    submission: "Failed to submit. Please try again.",
  },
} as const;
