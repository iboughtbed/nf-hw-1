import type { FooterItem, MainNavItem } from "~/types";

const links = {
  instagram: "https://instagram.com",
  github: "https://github.com/iboughtbed",
};

export const siteConfig = {
  name: "Blog",
  url: "https://iboughtbed-nf-hw-1.vercel.app/",
  ogImage: "https://iboughtbed-nf-hw-1.vercel.app/og.png",
  description: "A blog app",
  links,
  mainNav: [
    { title: "About", href: "/about" },
    { title: "Blog", href: "/blog" },
  ] satisfies MainNavItem[],
  footerNav: [
    {
      title: "Help",
      items: [
        { title: "About", href: "/about", external: false },
        { title: "Contact", href: "/", external: false },
        { title: "Terms", href: "/", external: false },
        { title: "Privacy", href: "/", external: false },
      ],
    },
    {
      title: "Social",
      items: [
        {
          title: "Instagram",
          href: links.instagram,
          external: true,
        },
      ],
    },
  ] satisfies FooterItem[],
};

export type SiteConfig = typeof siteConfig;
