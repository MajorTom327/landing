import { ChevronUp } from "lucide-react";
import { DateTime } from "luxon";
import React from "react";

import { useTranslation } from "~/hooks/useTranslation";

import Badge from "../Badge";
import Title from "../Title";
import type { TimelineItemData } from "./types";

type Props = {
  item: TimelineItemData;
  isFirst?: boolean;
};

const toStr = (date: DateTime) =>
  date.toLocaleString(undefined, DateTime.DATE_FULL);

const TimelineLine: React.FC<{ isFirst: boolean | undefined }> = ({
  isFirst,
}) => {
  return (
    <>
      <div className="flex justify-center relative">
        <div className="h-4 w-4 absolute rounded-full bg-secondary group-hover:bg-secondary-lighten top-4 transition-colors"></div>
        {isFirst && (
          <div className="absolute -top-2 text-gray-300">
            <ChevronUp />
          </div>
        )}
        <div className="h-full border border-gray-300 rounded"></div>
      </div>
    </>
  );
};

export const TimelineItem: React.FC<Props> = ({ item, isFirst }) => {
  const startOf = DateTime.fromJSDate(item.startOf);
  const endOf = item.endOf && DateTime.fromJSDate(item?.endOf);

  const { t } = useTranslation();

  return (
    <>
      <div className="grid grid-cols-4 group px-2">
        <TimelineLine isFirst={isFirst} />
        <div className="my-2 bg-secondary text-secondary-content p-2 rounded-xl col-span-3 shadow-xl border border-secondary-darken flex flex-col gap-2 transition transform group-hover:motion-safe:-translate-x-4 border-b-8">
          <Title>
            <div className="flex gap-3">
              <span>{t(item.title)}</span>
              <span>-</span>
              <span>{t(item.society)}</span>
            </div>
          </Title>
          <div className="flex gap-2">
            {item.skills.map((skill) => (
              <Badge key={skill}>{t(skill)}</Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <div>{toStr(startOf)}</div>
            <div>-</div>
            <div>{endOf ? toStr(endOf) : t("time.now")}</div>
          </div>
          <div className="flex gap-2">
            {item.description.map((description) => (
              <p className="text-justify" key={description}>
                {t(description)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

TimelineItem.defaultProps = {};

export default TimelineItem;
