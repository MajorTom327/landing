import { Link } from "@remix-run/react";
import React from "react";
import { useTranslation } from "react-i18next";

type Props = {};

export const Navbar: React.FC<Props> = ({}) => {
  const { t } = useTranslation();
  const linkClass = "py-4 px-4 bg-white/0 hover:bg-white/30";

  return (
    <>
      <div className="bg-primary w-full flex justify-center text-primary-content font-semibold flex-none">
        <div className="container flex justify-between transition-all">
          <Link prefetch="intent" to="/" className={linkClass}>
            {t("site.name")}
          </Link>

          <div className="flex">
            <Link prefetch="intent" to="/" className={linkClass}>
              {t("menu.project")}
            </Link>
            <Link prefetch="intent" to="/" className={linkClass}>
              {t("menu.cv")}
            </Link>
            <Link prefetch="intent" to="/" className={linkClass}>
              {t("menu.contact")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

Navbar.defaultProps = {};

export default Navbar;
