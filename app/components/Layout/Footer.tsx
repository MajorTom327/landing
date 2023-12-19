import classNames from "classnames";
import React from "react";
import constants from "~/refs/constants";

import { useEnvValue } from "~/hooks/useEnv";
import { useTranslation } from "~/hooks/useTranslation";

import { WebsiteCarbonBadge } from "../WebsiteCarbonBadge";

type Props = {
  className?: string;
};

export const Footer: React.FC<Props> = ({ className }) => {
  const footerClasses = classNames(
    "bg-primary text-primary-foreground p-4",
    className
  );

  const { t } = useTranslation();

  const appName = useEnvValue("APP_NAME");
  const node_env = useEnvValue("NODE_ENV");

  return (
    <>
      <footer className={footerClasses}>
        <div className="container  mx-auto my-2">
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="flex justify-center gap-4">
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
              <a
                className="hover:text-gray-200"
                href={constants.social.ethereum}
                rel="noreferrer"
                target="_blank"
              >
                {t("social.wallet")}
              </a>
            </div>

            {node_env !== "test" ? (
              <div>
                <WebsiteCarbonBadge />
              </div>
            ) : null}

            <div>
              {appName} &copy; 2017 - {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
