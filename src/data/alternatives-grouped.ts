import { ALTERNATIVE_TAGS } from "@/config/constants";
import { AlternativeGroup } from "@/types/Alternative";

/**
 * Refactored structure: groups multiple alternatives under each original platform
 * Benefits:
 * - No duplication of original platform data
 * - Clearer representation of 1-to-many relationship
 * - Easier to maintain and update
 */
export const alternativeGroups: AlternativeGroup[] = [
  {
    id: "twitter",
    original: {
      name: "Twitter / X",
      icon: "𝕏",
      bgColor: "bg-slate-900",
    },
    alternatives: [
      {
        name: "Bluesky",
        url: "https://bsky.app",
        tag: ALTERNATIVE_TAGS.FEDERATED,
        icon: "cloud",
        bgColor: "bg-[#0085FF]",
      },
      {
        name: "Mastodon",
        url: "https://joinmastodon.org",
        tag: ALTERNATIVE_TAGS.FEDERATED,
        icon: "hub",
        bgColor: "bg-[#563ACC] text-white",
      },
      {
        name: "Substack Notes",
        url: "https://substack.com",
        tag: ALTERNATIVE_TAGS.CREATOR,
        icon: "edit_note",
        bgColor: "bg-[#FF6719] text-white",
      },
    ],
  },
  {
    id: "instagram",
    original: {
      name: "Instagram",
      icon: "photo_camera",
      bgColor: "bg-gradient-to-tr from-orange-400 to-purple-600",
    },
    alternatives: [
      {
        name: "Pixelfed",
        url: "https://pixelfed.org",
        tag: ALTERNATIVE_TAGS.DECENTRALIZED,
        icon: "image",
        bgColor: "bg-slate-800",
      },
      {
        name: "Glass",
        url: "https://glass.photo",
        tag: ALTERNATIVE_TAGS.CREATOR,
        icon: "photo_camera_back",
        bgColor: "bg-slate-700 text-white",
      },
      {
        name: "Loops",
        url: "https://joinloops.org",
        tag: ALTERNATIVE_TAGS.FEDERATED,
        icon: "motion_photos_on",
        bgColor: "bg-purple-600 text-white",
      },
      {
        name: "BeReal",
        url: "https://bere.al",
        tag: ALTERNATIVE_TAGS.AUTHENTIC,
        icon: "camera_front",
        bgColor: "bg-slate-900 text-white",
      },
    ],
  },
  {
    id: "facebook",
    original: {
      name: "Facebook",
      icon: "f",
      bgColor: "bg-[#1877F2]",
    },
    alternatives: [
      {
        name: "Friendica",
        url: "https://friendi.ca",
        tag: ALTERNATIVE_TAGS.FEDERATED,
        icon: "group",
        bgColor: "bg-slate-100 text-slate-500 border border-slate-200",
      },
      {
        name: "diaspora*",
        url: "https://diasporafoundation.org",
        tag: ALTERNATIVE_TAGS.DECENTRALIZED,
        icon: "scatter_plot",
        bgColor: "bg-slate-800 text-white",
      },
      {
        name: "Nextdoor",
        url: "https://nextdoor.com",
        tag: ALTERNATIVE_TAGS.LOCAL,
        icon: "place",
        bgColor: "bg-[#00A36C] text-white",
      },
      {
        name: "Discord",
        url: "https://discord.com",
        tag: ALTERNATIVE_TAGS.COMMUNITY,
        icon: "forum",
        bgColor: "bg-[#5865F2] text-white",
      },
    ],
  },
  {
    id: "reddit",
    original: {
      name: "Reddit",
      icon: "forum",
      bgColor: "bg-[#FF4500]",
    },
    alternatives: [
      {
        name: "Lemmy",
        url: "https://join-lemmy.org",
        tag: ALTERNATIVE_TAGS.FEDERATED,
        icon: "account_tree",
        bgColor: "bg-slate-900",
      },
    ],
  },
  {
    id: "youtube",
    original: {
      name: "YouTube",
      icon: "play_circle",
      bgColor: "bg-[#FF0000]",
    },
    alternatives: [
      {
        name: "PeerTube",
        url: "https://joinpeertube.org",
        tag: ALTERNATIVE_TAGS.DECENTRALIZED,
        icon: "video_library",
        bgColor: "bg-slate-900",
      },
      {
        name: "Owncast",
        url: "https://owncast.online",
        tag: ALTERNATIVE_TAGS.STREAMING,
        icon: "sensors",
        bgColor: "bg-indigo-600 text-white",
      },
      {
        name: "Twitch",
        url: "https://www.twitch.tv",
        tag: ALTERNATIVE_TAGS.STREAMING,
        icon: "live_tv",
        bgColor: "bg-[#9146FF] text-white",
      },
      {
        name: "Kick",
        url: "https://kick.com",
        tag: ALTERNATIVE_TAGS.STREAMING,
        icon: "stream",
        bgColor: "bg-lime-400 text-slate-900",
      },
    ],
  },
  {
    id: "whatsapp",
    original: {
      name: "WhatsApp",
      icon: "chat",
      bgColor: "bg-[#25D366]",
    },
    alternatives: [
      {
        name: "Signal",
        url: "https://signal.org",
        tag: ALTERNATIVE_TAGS.PRIVACY,
        icon: "lock",
        bgColor: "bg-[#3A76F0] text-white",
      },
      {
        name: "Session",
        url: "https://getsession.org",
        tag: ALTERNATIVE_TAGS.PRIVACY,
        icon: "shield",
        bgColor: "bg-green-600 text-white",
      },
      {
        name: "Matrix / Element",
        url: "https://matrix.org",
        tag: ALTERNATIVE_TAGS.FEDERATED,
        icon: "hub",
        bgColor: "bg-slate-900 text-white",
      },
      {
        name: "Telegram",
        url: "https://telegram.org",
        tag: ALTERNATIVE_TAGS.CENTRALIZED,
        icon: "send",
        bgColor: "bg-[#229ED9] text-white",
      },
    ],
  },
  {
    id: "tiktok",
    original: {
      name: "TikTok",
      icon: "movie",
      bgColor: "bg-black",
    },
    alternatives: [
      {
        name: "Loops",
        url: "https://joinloops.org",
        tag: ALTERNATIVE_TAGS.FEDERATED,
        icon: "motion_photos_on",
        bgColor: "bg-purple-600 text-white",
      },
      {
        name: "UpScrolled",
        url: "https://upscrolled.com",
        tag: ALTERNATIVE_TAGS.ANTI_CENSORSHIP,
        icon: "campaign",
        bgColor: "bg-emerald-500 text-white",
      },
      {
        name: "Kuaishou",
        url: "https://www.kuaishou.com",
        tag: ALTERNATIVE_TAGS.VIDEO,
        icon: "smart_display",
        bgColor: "bg-orange-500 text-white",
      },
      {
        name: "Likee",
        url: "https://likee.video",
        tag: ALTERNATIVE_TAGS.VIDEO,
        icon: "bolt",
        bgColor: "bg-gradient-to-r from-pink-500 to-orange-400 text-white",
      },
    ],
  },
  {
    id: "linkedin",
    original: {
      name: "LinkedIn",
      icon: "work",
      bgColor: "bg-[#0A66C2]",
    },
    alternatives: [
      {
        name: "Substack",
        url: "https://substack.com",
        tag: ALTERNATIVE_TAGS.CREATOR,
        icon: "article",
        bgColor: "bg-[#FF6719] text-white",
      },
    ],
  },
];
