import type { SocialObjects } from "./types";

export const SITE = {
    website: "https://anandmohanan.com/",
    author: "Anand Mohanan",
    desc: "Anand Mohanan builds full-stack products, AI agents, and computer vision systems. Explore his experience, projects, and writing at Niemand Journal.",
    title: "Anand Mohanan",
    ogImage: "/og.png",
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

];
