import { Outlet, NavLink } from "@remix-run/react";
import classNames from "classnames";
import React from "react";
import { useTranslation } from "react-i18next";
import Title from "../Title";

type Props = {};

const causes = [
  { title: "causes.spa.title", route: "/home/spa" },
  { title: "causes.resto.title", route: "/home/resto" },
];

export const CauseThatMatter: React.FC<Props> = ({}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="container mx-auto py-8">
        <Title xl>{t("causes.title")}</Title>

        <div className="flex gap-3">
          {causes.map((cause) => (
            <NavLink
              className={({ isActive }) =>
                classNames("px-4 py-2 rounded transition-colors", {
                  "bg-primary text-primary-content": isActive,
                  "bg-secondary text-secondary-content": !isActive,
                })
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
