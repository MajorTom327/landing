import { NavLink } from "@remix-run/react";
import classNames from "classnames";
import React from "react";

import { useTranslation } from "~/hooks/useTranslation";

import Routlet from "../Routlet/Routlet";
import Title from "../Title";

type Props = {};

const causes = [
  { title: "causes.spa.title", route: "/cause/spa" },
  { title: "causes.resto.title", route: "/cause/resto" },
  { title: "causes.privacy.title", route: "/cause/privacy" },
];

export const CauseThatMatter: React.FC<Props> = ({}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="container mx-auto py-8">
        <Title xl>{t("causes.title")}</Title>

        <div className="flex justify-evenly w-full gap-3 py-8">
          {causes.map((cause) => (
            <NavLink
              key={cause.title}
              prefetch="intent"
              preventScrollReset
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

      <Routlet route={"/cause"} />
    </>
  );
};

CauseThatMatter.defaultProps = {};

export default CauseThatMatter;
