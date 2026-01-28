import { ALTERNATIVE_TAGS } from "@/config/constants";
import { Alternative } from "@/types/Alternative";

export const alternatives: Alternative[] = [
  {
    id: "bluesky",
    original: {
      name: "Twitter / X",
      icon: "𝕏",
      bgColor: "bg-slate-900",
    },
    alternative: {
      name: "Bluesky",
      url: "https://bsky.app",
      tag: ALTERNATIVE_TAGS.FEDERATED,
      icon: "cloud",
      bgColor: "bg-[#0085FF]",
    },
  },
  {
    id: "pixelfed",
    original: {
      name: "Instagram",
      icon: "photo_camera",
      bgColor: "bg-gradient-to-tr from-orange-400 to-purple-600",
    },
    alternative: {
      name: "Pixelfed",
      url: "https://pixelfed.org",
      tag: ALTERNATIVE_TAGS.DECENTRALIZED,
      icon: "image",
      bgColor: "bg-slate-800",
    },
  },
  {
    id: "3",
    original: {
      name: "Facebook",
      icon: "f",
      bgColor: "bg-[#1877F2]",
    },
    alternative: {
      name: "Friendica",
      url: "https://friendi.ca",
      tag: ALTERNATIVE_TAGS.FEDERATED,
      icon: "group",
      bgColor: "bg-slate-100 text-slate-500 border border-slate-200",
    },
  },
  {
    id: "4",
    original: {
      name: "Reddit",
      icon: "forum",
      bgColor: "bg-[#FF4500]",
    },
    alternative: {
      name: "Lemmy",
      url: "https://join-lemmy.org",
      tag: ALTERNATIVE_TAGS.FEDERATED,
      icon: "account_tree",
      bgColor: "bg-slate-900",
    },
  },
  {
    id: "5",
    original: {
      name: "YouTube",
      icon: "play_circle",
      bgColor: "bg-[#FF0000]",
    },
    alternative: {
      name: "PeerTube",
      url: "https://joinpeertube.org",
      tag: ALTERNATIVE_TAGS.DECENTRALIZED,
      icon: "video_library",
      bgColor: "bg-slate-900",
    },
  },
];
