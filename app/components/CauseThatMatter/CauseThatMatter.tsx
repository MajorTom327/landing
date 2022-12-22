import { Outlet, NavLink } from "@remix-run/react";
import classNames from "classnames";
import React from "react";
import { useTranslation } from "react-i18next";
import Title from "../Title";

type Props = {};

const causes = [
  { title: "causes.spa.title", route: "/home/cause/spa" },
  { title: "causes.resto.title", route: "/home/cause/resto" },
  { title: "causes.privacy.title", route: "/home/cause/privacy" },
];

export const CauseThatMatter: React.FC<Props> = ({}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="container mx-auto py-8">
        <Title xl>{t("causes.title")}</Title>

        <div className="flex justify-evenly w-full gap-3 py-2">
          {causes.map((cause) => (
            <NavLink
              key={cause.title}
              className={({ isActive }) =>
                classNames(
                  "px-4 py-2 rounded transition-colors text-lg w-full text-center",
                  {
                    "bg-primary text-primary-content": isActive,
                    "bg-secondary text-secondary-content": !isActive,
                  }
                )
              }
              to={cause.route}
            >
              {t(cause.title)}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

CauseThatMatter.defaultProps = {};

export default CauseThatMatter;
