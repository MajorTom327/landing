import { Outlet, useLocation } from "@remix-run/react";
import { flatten } from "ramda";
import React from "react";

type Props = {
  route: string | string[];
};

export const Routlet: React.FC<Props> = ({ route }) => {
  const { pathname } = useLocation();

  const routes = flatten([route]);
  const isCurrentRoute = routes.some((subroute) =>
    pathname.startsWith(subroute)
  );

  if (isCurrentRoute) {
    return <Outlet />;
  }
  return null;
};

Routlet.defaultProps = {};

export default Routlet;
