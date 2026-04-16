import { MenuItem } from "./types";

export const SOCIAL_LINKS = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/webmaak-creative",
    icon: "linkedin",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/webmaak/",
    icon: "instagram",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/webmaak",
    icon: "facebook",
  },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  { id: 1, label: "Our Work", description: "", href: "/#showreel" },
  { id: 2, label: "Services", description: "", href: "/#services" },
  { id: 3, label: "Reviews", description: "", href: "/#testimonials" },
  { id: 4, label: "About Us", description: "", href: "/about" },
  { id: 5, label: "Contact Us", description: "", href: "/contact" },
];

export const COLORS = {
  primary: "#38bdf8", // sky-400
  secondary: "#818cf8", // indigo-400
  background: "#020617", // slate-950
};
