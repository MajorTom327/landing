import React from "react";
import TimelineItem from "./TimelineItem";
import type { TimelineItemData } from "./types";

import cv from "~/data/cv";
import Title from "../Title";
import { useTranslation } from "react-i18next";

type Props = {};

const timeline: TimelineItemData[] = cv;

export const Timeline: React.FC<Props> = ({}) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container mx-auto">
        <Title center xl className="mb-4">
          {t("timeline.title")}
        </Title>
        {timeline.map((item, index) => {
          return <TimelineItem key={index} item={item} isFirst={index === 0} />;
        })}
      </div>
    </>
  );
};

Timeline.defaultProps = {};

export default Timeline;
