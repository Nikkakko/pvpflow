import type { FooterItem, MainNavItem } from "@/types";
import { Icons } from "@/components/icons";

import { slugify } from "@/lib/utils";

export type SiteConfig = typeof siteConfig;

const links = {
  youtube: "https://www.youtube.com/@FlowFlowMagazine",
  facebook: "https://www.facebook.com/FlowFlowMagazine",
  instagram: "https://www.instagram.com/realflowflow/",
  tiktok: "https://www.tiktok.com/@flowflowmagazine",
};

const projects = ["PVP Battle", "PVP Flow", "Re:აქცია", "Hate-ერი"];

export const siteConfig = {
  name: "FlowFlow Magazine",
  description: "A video journal magazine",
  url: "https://skateshop.sadmn.com",
  ogImage: "https://skateshop.sadmn.com/opengraph-image.png",
  links,
  projects,
  mainNav: [
    {
      id: "1",
      title: "Home",
      href: "/",
      icon: Icons.home,
    },
    {
      id: "2",
      title: "Projects",
      href: "/projects",
      icon: Icons.projects,
    },
    {
      id: "3",
      title: "Battles",
      href: "/battles",
      icon: Icons.battles,
    },
    {
      id: "4",
      title: "Artists",
      href: "/artists",
      icon: Icons.artists,
    },

    {
      id: "5",
      title: "Events",
      href: "/events",
      icon: Icons.events,
    },
  ],
  footerNav: [
    {
      title: "Social",
      items: [
        {
          title: "YouTube",
          href: links.youtube,
          external: true,
        },
        {
          title: "Facebook",
          href: links.facebook,
          external: true,
        },
        {
          title: "Instagram",
          href: links.instagram,
          external: true,
        },
        {
          title: "TikTok",
          href: links.tiktok,
          external: true,
        },
      ],
    },
  ] satisfies FooterItem[],
};
