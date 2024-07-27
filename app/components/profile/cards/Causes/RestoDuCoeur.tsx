import { Trans, useTranslation } from "react-i18next";

export const RestoDuCoeur: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl">
          <Trans>profile.causes.restos.label</Trans>
        </h2>
        <div className="flex flex-col gap-4 text-justify">
          <p>
            <Trans>profile.causes.restos.description.0</Trans>
          </p>
          <p>
            <Trans>profile.causes.restos.description.1</Trans>
          </p>

          <div className="flex justify-center">
            <a
              rel={"noreferrer"}
              href={t("profile.causes.restos.url")}
              className={"p-2 px-4 underline hover:text-primary transition"}
            >
              <Trans>profile.causes.restos.link</Trans>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
