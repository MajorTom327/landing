import React from "react";
import { useTranslation } from "react-i18next";
import Title from "../Title";
import Cause from "./Cause";

type Props = {};

const causes = [{ title: "causes.spa", row: 4 }];

export const CauseThatMatter: React.FC<Props> = ({}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="container mx-auto">
        <Title xl>{t("causes.title")}</Title>

        <div className="flex flex-col gap-2 mt-4">
          {causes.map(({ title, row }) => (
            <Cause
              key={title}
              title={title + ".title"}
              description={Array.from(
                { length: row },
                (_, i) => `${title}.reasons.${i + 1}`
              )}
            />
          ))}
        </div>
      </div>
    </>
  );
};

CauseThatMatter.defaultProps = {};

export default CauseThatMatter;
