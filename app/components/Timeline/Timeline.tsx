import { DateTime } from "luxon";
import React from "react";
import TimelineItem from "./TimelineItem";
import type { TimelineItemData } from "./types";

type Props = {};

const timeline: TimelineItemData[] = [
  {
    title: "jobs.fullstack",
    society: "societies.fasst",
    skills: ["skills.react", "skills.node", "skills.express", "skills.mongo"],
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ratione doloribus eaque nulla alias aliquam nam aperiam eius error illum eveniet inventore voluptas recusandae itaque perferendis esse accusantium, est reiciendis!",
    startOf: DateTime.fromISO("2020-07-01").toJSDate(),
  },
  {
    title: "jobs.csharp",
    society: "societies.ededoc",
    skills: ["skills.csharp", "skills.dotnet"],
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ratione doloribus eaque nulla alias aliquam nam aperiam eius error illum eveniet inventore voluptas recusandae itaque perferendis esse accusantium, est reiciendis!",
    endOf: DateTime.fromISO("2020-07-01").toJSDate(),
    startOf: DateTime.fromISO("2018-11-01").toJSDate(),
  },
  {
    title: "jobs.fullstack",
    society: "societies.monbuilding",
    skills: ["skills.meteor", "skills.react"],
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ratione doloribus eaque nulla alias aliquam nam aperiam eius error illum eveniet inventore voluptas recusandae itaque perferendis esse accusantium, est reiciendis!",
    endOf: DateTime.fromISO("2018-10-01").toJSDate(),
    startOf: DateTime.fromISO("2018-08-01").toJSDate(),
  },
  {
    title: "jobs.fullstack",
    society: "societies.solicis",
    skills: ["skills.php"],
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ratione doloribus eaque nulla alias aliquam nam aperiam eius error illum eveniet inventore voluptas recusandae itaque perferendis esse accusantium, est reiciendis!",
    endOf: DateTime.fromISO("2018-07-01").toJSDate(),
    startOf: DateTime.fromISO("2018-05-01").toJSDate(),
  },
  {
    title: "jobs.fullstack",
    society: "societies.mscpi",
    skills: ["skills.php"],
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ratione doloribus eaque nulla alias aliquam nam aperiam eius error illum eveniet inventore voluptas recusandae itaque perferendis esse accusantium, est reiciendis!",
    endOf: DateTime.fromISO("2018-07-01").toJSDate(),
    startOf: DateTime.fromISO("2018-05-01").toJSDate(),
  },
];

export const Timeline: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="container mx-auto">
        {timeline.map((item, index) => {
          return <TimelineItem key={index} item={item} isFirst={index === 0} />;
        })}
      </div>
    </>
  );
};

Timeline.defaultProps = {};

export default Timeline;
