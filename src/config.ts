import type { SocialObjects } from "./types";

export const SITE = {
    website: "https://anandmohanan.site/",
    author: "Anand Mohanan",
    desc: "Anand mohanan portfolio",
    title: "Anand Mohanan",
    ogImage: "https://utfs.io/f/933b1af5-8a2d-427e-95cf-57732358c527-1nq2cb.svg",
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
