import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://anandmohanan.social/",
  author: "Anand Mohanan",
  desc: "Anand mohanan portfolio",
  title: "Anand Mohanan",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/anandMohanan",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },

  {
    name: "Instagram",
    href: "https://www.instagram.com/anand__mohanan/",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/anand-mohanan/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:ananthkvmohanan@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/Neimand7777",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
];
