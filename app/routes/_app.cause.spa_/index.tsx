import React from "react";
import posixUrl from "~/assets/posix.webp";

import { Cause } from "~/components/CauseThatMatter";
import Divider from "~/components/Divider";
import ErrorView from "~/components/ErrorView";

import { useTranslation } from "~/hooks/useTranslation";

type Props = {};

export function headers() {
  return {
    "Cache-Control": "s-maxage=60",
  };
}

export const SpaCause: React.FC<Props> = ({}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="container mx-auto py-4 flex flex-col gap-4">
        <Cause title={`causes.spa`} rows={4} />

        <Divider />

        <div className="grid lg:grid-cols-2 gap-2 group">
          <div className="text-2xl flex flex-col justify-center items-center">
            <div className="text-2xl">{t("causes.spa.posix")}</div>
            <div className="text-lg text-gray-300 group-hover:text-gray-500 transition-colors">
              {t("causes.spa.posix_role")}
            </div>
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

export const ErrorBoundary = () => <ErrorView />;

SpaCause.defaultProps = {};

export default SpaCause;
