import { Link } from "@remix-run/react";
import React from "react";

type Props = {};

export const Navbar: React.FC<Props> = ({}) => {
  const linkClass = "py-4 px-4 bg-white/0 hover:bg-white/30";
  return (
    <>
      <div className="bg-primary w-full flex justify-center text-primary-content font-semibold flex-none">
        <div className="container flex justify-between transition-all">
          <Link to="/" className={linkClass}>
            Valentin THOMAS
          </Link>

          <div className="flex">
            <Link to="/" className={linkClass}>
              Projects
            </Link>
            <Link to="/" className={linkClass}>
              CV
            </Link>
            <Link to="/" className={linkClass}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

Navbar.defaultProps = {};

export default Navbar;
