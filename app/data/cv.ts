import { DateTime } from "luxon";
import { compose, map, evolve, when } from "ramda";
import { isNotNil } from "ramda-adjunct";
import type { TimelineItemData } from "~/components/Timeline/types";

type CVItem = {
  title: string;
  society: string;
  skills: string[];
  description: string;

  startOf: string;
  endOf?: string;
}

const originalCV: CVItem[] = [
  {
    title: "jobs.fullstack",
    society: "societies.fasst",
    skills: ["skills.react", "skills.node", "skills.express", "skills.mongo"],
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ratione doloribus eaque nulla alias aliquam nam aperiam eius error illum eveniet inventore voluptas recusandae itaque perferendis esse accusantium, est reiciendis!",
    startOf: "2020-07-01",
  },
  {
    title: "jobs.csharp",
    society: "societies.ededoc",
    skills: ["skills.csharp", "skills.dotnet"],
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ratione doloribus eaque nulla alias aliquam nam aperiam eius error illum eveniet inventore voluptas recusandae itaque perferendis esse accusantium, est reiciendis!",
    endOf: "2020-07-01",
    startOf: "2018-11-01",
  },
  {
    title: "jobs.fullstack",
    society: "societies.monbuilding",
    skills: ["skills.meteor", "skills.react"],
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ratione doloribus eaque nulla alias aliquam nam aperiam eius error illum eveniet inventore voluptas recusandae itaque perferendis esse accusantium, est reiciendis!",
    endOf: "2018-10-01",
    startOf: "2018-08-01",
  },
  {
    title: "jobs.fullstack",
    society: "societies.solicis",
    skills: ["skills.php"],
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ratione doloribus eaque nulla alias aliquam nam aperiam eius error illum eveniet inventore voluptas recusandae itaque perferendis esse accusantium, est reiciendis!",
    endOf: "2018-07-01",
    startOf: "2018-05-01",
  },
  {
    title: "jobs.fullstack",
    society: "societies.mscpi",
    skills: ["skills.php"],
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ratione doloribus eaque nulla alias aliquam nam aperiam eius error illum eveniet inventore voluptas recusandae itaque perferendis esse accusantium, est reiciendis!",
    endOf: "2018-07-01",
    startOf: "2018-05-01",
  },
]


export const cv: TimelineItemData[] = compose(
  map(evolve({
    startOf: (d: string) => DateTime.fromISO(d).toJSDate(),
    endOf: when(isNotNil, (d: string) => DateTime.fromISO(d).toJSDate()),
  })),
)(originalCV) as TimelineItemData[]

export default cv;
