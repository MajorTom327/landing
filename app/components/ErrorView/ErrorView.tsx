import { useRouteError } from "@remix-run/react";
import React from "react";
import { P, match } from "ts-pattern";

import { useTranslation } from "~/hooks/useTranslation";

import CodeMockup, { CodeLine } from "../CodeMockup";
import Title from "../Title";

export const ErrorView: React.FC = () => {
  const { t } = useTranslation();

  const error = useRouteError() as Error & { status?: number };

  const errorContent = match(error)
    .with({ stack: P.string }, (error) =>
      error.stack
        .split("\n")
        .map((line, i) => <CodeLine key={i}>{line}</CodeLine>)
    )
    .with({ status: P.number }, (error) => {
      return (
        <>
          <CodeLine className="text-warning">HTTP {error.status}</CodeLine>
          <CodeLine className="text-base-100">
            {t(`errors.${error.status}`)}
          </CodeLine>
        </>
      );
    })
    .with({ message: P.select() }, (error) => <CodeLine>{error}</CodeLine>)
    .otherwise(() => (
      <>
        <CodeLine>Unknown error</CodeLine>
        {(JSON.stringify(error, null, 2) || "").split("\n").map((line, i) => (
          <CodeLine key={i}>{line}</CodeLine>
        ))}
      </>
    ));
  // .exhaustive();

  return (
    <>
      <div className="w-full h-full justify-center items-center">
        <div className="bg-error/20 p-8">
          <div className="items-center text-center">
            <Title center className="text-error font-semibold">
              {t("errors.title")}
            </Title>
            <p className="">{t("errors.description")}</p>
            <div className="container mx-auto">
              <div className="w-full text-justify">
                <CodeMockup>{errorContent}</CodeMockup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ErrorView.defaultProps = {};

export default ErrorView;
