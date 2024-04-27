import menu from "@/images/menu.svg";
import insights from "@/images/insights.svg";
import recommends from "@/images/recommends.svg";
import messages from "@/images/messages.svg";
import profile from "@/images/profile.svg";
import faq from "@/images/faq.svg";
import contact from "@/images/contact.svg";
import logout from "@/images/logout.svg";
import { ReactNode } from "react";

type LinkType = {
  id: string;
  name: string;
  icon: string;
  path: string;
  right?: ReactNode;
};

export const menuLinks: LinkType[] = [
  { id: "menu", name: "Menu", icon: menu, path: "/menu" },
  { id: "insights", name: "Insights", icon: insights, path: "/insights" },
  {
    id: "recommends",
    name: "Recommends",
    icon: recommends,
    path: "/recommends",
  },
  {
    id: "messages",
    name: "Messages",
    icon: messages,
    path: "/messages",
  },
];

export const settingsLinks: LinkType[] = [
  { id: "profile", name: "Profile", icon: profile, path: "/profile" },
  { id: "faq", name: "FAQ’s", icon: faq, path: "/faq" },
  { id: "contact us", name: "Contact us", icon: contact, path: "/contact" },
  { id: "logout", name: "Logout", icon: logout, path: "/logout" },
];

export const sidebarSections = [
  { id: "Menu links", name: "Menu", links: menuLinks },
  { id: "Settings links", name: "Settings", links: settingsLinks },
];
