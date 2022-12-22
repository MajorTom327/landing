import React from "react";
import { Cause } from "~/components/CauseThatMatter";
import posixUrl from "~/assets/posix.jpeg";
import { T } from "ramda";
import { useTranslation } from "react-i18next";
import Divider from "~/components/Divider";

type Props = {};

export const SpaCause: React.FC<Props> = ({}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="container mx-auto py-4 flex flex-col gap-4">
        <Cause title={`causes.spa`} rows={4} />

        <Divider />

        <div className="grid lg:grid-cols-2 gap-2">
          <div className="text-2xl flex justify-center items-center">
            {t("causes.spa.posix")}
          </div>
          <div className="flex justify-center">
            <img
              className="h-96 rounded-xl shadow-xl border animate-floating"
              src={posixUrl}
              alt="Posix"
            />
          </div>
        </div>
      </div>
    </>
  );
};

SpaCause.defaultProps = {};

export default SpaCause;
