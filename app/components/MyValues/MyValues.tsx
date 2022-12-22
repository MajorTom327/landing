import React from "react";
import { useTranslation } from "react-i18next";
import Title from "../Title";
import ValueItem from './ValueItem';

type Props = {};

const myValues = [
  { label: "values.openness" },
  { label: "values.quality" },
  { label: "values.creativity" },
  { label: "values.honesty" },
]

export const MyValues: React.FC<Props> = ({}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="container mx-auto">
        <Title xl center>{t("values.title")}</Title>
        <div className="flex flex-col gap-16 py-8">
          {myValues.map((value) => (
            <ValueItem key={value.label} value={value.label} />
          ))}
        </div>
      </div>
    </>
  );
};

MyValues.defaultProps = {};

export default MyValues;
