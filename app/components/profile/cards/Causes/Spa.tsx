import { Trans, useTranslation } from "react-i18next";
import PosixImg from "./posix.webp";

export const SpaCauseCard = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="space-y-4 text-justify">
        <h2 className="text-xl">
          <Trans>profile.causes.spa.label</Trans>
        </h2>
        <p>
          <Trans>profile.causes.spa.description.0</Trans>
        </p>
        <p>
          <Trans>profile.causes.spa.description.1</Trans>
        </p>
        <p>
          <Trans>profile.causes.spa.description.2</Trans>
        </p>

        <figure className="flex flex-col justify-center items-center">
          <img alt={"Posix"} src={PosixImg} className={"rounded w-1/2"} />
          <figcaption>
            <Trans>profile.causes.spa.description.3</Trans>
          </figcaption>
        </figure>

        <div className="flex justify-center">
          <a
            rel={"noreferrer"}
            href={t("profile.causes.spa.url")}
            className={"p-2 px-4 underline hover:text-primary transition"}
          >
            <Trans>profile.causes.spa.link</Trans>
          </a>
        </div>
      </div>
    </>
  );
};
