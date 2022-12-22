import React from "react";
import { useTranslation } from "react-i18next";
import constants from "~/refs/constants";

type Props = {};

export const Footer: React.FC<Props> = ({}) => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-primary flex justify-center py-3 text-gray-400 transition gap-4 flex-none">
      <a
        className="hover:text-gray-200"
        href={constants.social.github}
        rel="noreferrer"
        target="_blank"
      >
        {t("social.github")}
      </a>
      <a
        className="hover:text-gray-200"
        href={constants.social.linkedin}
        rel="noreferrer"
        target="_blank"
      >
        {t("social.linkedin")}
      </a>
      <a
        className="hover:text-gray-200"
        href={constants.social.twitter}
        rel="noreferrer"
        target="_blank"
      >
        {t("social.twitter")}
      </a>
    </div>
  );
};

Footer.defaultProps = {};

export default Footer;
