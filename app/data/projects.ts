import andromedaAsset from "../assets/andromeda.webp";
import basemintAsset from "../assets/basemint.webp";
import deadsafeAsset from "../assets/deadsafe.webp";
import bellzAsset from "../assets/bellz.webp";
import styxAsset from "../assets/styx.webp";
import emdrAsset from "../assets/emdr.webp";
import portfolioAsset from "../assets/portfolio.webp";
import blogAsset from "../assets/blog.webp";
import tweaksAsset from "../assets/tweaks.webp";
import kwsnAsset from "../assets/kwsn.webp";

export type Project = {
  key: string;
  title: string;
  techs: string[];
  url?: string;
  repo?: string;
  image?: string;
  description?: string[];
};

export const projects: Project[] = [
  {
    key: "portfolio",
    title: "projects.portfolio.title",
    techs: ["skills.react", "skills.typescript", "skills.remix"],
    url: "https://valentin-thomas.com",
    repo: "https://github.com/MajorTom327/landing",
    image: portfolioAsset,
    description: ["projects.portfolio.description.0"],
  },
  {
    key: "tweaks",
    title: "projects.tweaks.title",
    techs: ["skills.react", "skills.javascript", "skills.next", "skills.web3"],
    image: tweaksAsset,
    url: "https://www.tweaklabs.xyz/asylum",
    description: ["projects.tweaks.description.0"],
  },
  {
    key: "kwsn",
    title: "projects.kwsn.title",
    techs: ["skills.react", "skills.node", "skills.next", "skills.web3"],
    image: kwsnAsset,
    url: "https://slay.knightssaynah.com/",
    description: ["projects.kwsn.description.0"],
  },
  {
    key: "bellz",
    title: "projects.bellz.title",
    techs: ["skills.react", "skills.node", "skills.remix"],
    image: bellzAsset,
    description: [
      "projects.bellz.description.0",
      "projects.bellz.description.1",
      "projects.bellz.description.2",
    ],
    repo: "https://github.com/MajorTom327/bellz",
  },
  {
    key: "deadsafe",
    title: "projects.deadsafe.title",
    techs: ["skills.react", "skills.node", "skills.remix", "skills.web3"],
    image: deadsafeAsset,
    url: "https://the-deadsafe.com",
    repo: "https://github.com/MajorTom327/deadsafe-landing",
    description: [
      "projects.deadsafe.description.0",
      "projects.deadsafe.description.1",
    ],
  },
  {
    key: "decentralizedblog",
    title: "projects.decentralizedblog.title",
    techs: ["skills.react", "skills.node", "skills.web3", "skills.solidity"],
    image: blogAsset,
    url: "https://blog.majortom327.eth",
    repo: "https://github.com/MajorTom327/the-decentralized-blog",
    description: [],
  },
  {
    key: "basemint",
    title: "projects.basemint.title",
    techs: ["skills.react", "skills.web3"],
    url: "https://majortom327.github.io/basemint/",
    repo: "https://github.com/MajorTom327/basemint",
    image: basemintAsset,
    description: [
      "projects.basemint.description.0",
      "projects.basemint.description.1",
    ],
  },
  {
    key: "andromeda",
    title: "projects.andromeda.title",
    techs: ["skills.react", "skills.node", "skills.meteor"],
    repo: "https://github.com/MajorTom327/andromeda",
    image: andromedaAsset,
    description: [
      "projects.andromeda.description.0",
      "projects.andromeda.description.1",
    ],
  },
  {
    key: "styx",
    title: "projects.styx.title",
    image: styxAsset,
    techs: ["skills.node", "skills.react", "skills.remix"],
    url: "https://doc.styx-sys.com",
    description: [
      "projects.styx.description.0",
      "projects.styx.description.1",
      "projects.styx.description.2",
    ],
  },
  {
    key: "emdr",
    image: emdrAsset,
    title: "projects.emdr.title",
    techs: ["skills.node", "skills.react", "skills.remix"],
    url: "https://www.emdr-dinan.fr/",
    description: ["projects.emdr.description.0", "projects.emdr.description.1"],
  },
];

export default projects;
