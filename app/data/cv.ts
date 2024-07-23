import { DateTime } from "luxon";
import { compose, evolve, invert, map, reverse, sortBy, when } from "ramda";
import { isNotNil } from "ramda-adjunct";

import type { TimelineItemData } from "~/components/Timeline/types";

type CVItem = {
  title: string;
  society: string;
  skills: string[];
  description: string[];

  startOf: string;
  endOf?: string;
};

const originalCV: CVItem[] = [
  {
    title: "jobs.fullstack",
    society: "societies.soiltrackers",
    skills: ["skills.react", "skills.node", "skils.remix", "skills.agile", "skills.postgres", "skills.rust"],
    description: ["experiences.soiltrackers.description.0"],
    startOf: "2024-01-01",
  },
  {
    title: "jobs.fullstack",
    society: "societies.fasst",
    skills: ["skills.react", "skills.node", "skills.express", "skills.mongo", "skills.agile"],
    description: ["experiences.fasst.description.0"],
    startOf: "2020-07-01",
    endOf: "2023-10-01"
  },
  {
    title: "jobs.csharp",
    society: "societies.ededoc",
    skills: ["skills.csharp", "skills.dotnet"],
    description: ["experiences.ededoc.description.0"],
    endOf: "2020-07-01",
    startOf: "2018-11-01",
  },
  {
    title: "jobs.fullstack",
    society: "societies.monbuilding",
    skills: ["skills.meteor", "skills.react"],
    description: ["experiences.monbuilding.description.0"],
    endOf: "2018-10-01",
    startOf: "2018-08-01",
  },
  {
    title: "jobs.fullstack",
    society: "societies.solicis",
    skills: ["skills.php"],
    description: ["experiences.solicis.description.0"],
    endOf: "2018-07-01",
    startOf: "2018-05-01",
  },
  {
    title: "jobs.fullstack",
    society: "societies.mscpi",
    skills: ["skills.php"],
    description: ["experiences.mscpi.description.0"],
    endOf: "2018-05-01",
    startOf: "2017-08-01",
  },
];

// @ts-expect-error Compose is not typed
export const cv: TimelineItemData[] = compose(
  reverse,
  sortBy((item: TimelineItemData) =>
    DateTime.fromJSDate(item.startOf).toSeconds()
  ),
  map(
    // @ts-expect-error Compose is not typed
    evolve({
      startOf: (d: string) => DateTime.fromISO(d).toJSDate(),
      endOf: when(isNotNil, (d: string) => DateTime.fromISO(d).toJSDate()),
    })
  )
)(originalCV) as TimelineItemData[];

export default cv;
