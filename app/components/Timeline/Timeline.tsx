import React from "react";
import TimelineItem from "./TimelineItem";
import type { TimelineItemData } from "./types";

import cv from "~/data/cv";

type Props = {};

const timeline: TimelineItemData[] = cv;

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
