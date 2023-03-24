import { Outlet } from "@remix-run/react";
import React from "react";

type Props = {};

export function headers() {
  return {
    "Cache-Control": "s-maxage=60",
  };
}

export const Index: React.FC<Props> = ({}) => {
  return (
    <>
      <Outlet />
    </>
  );
};

Index.defaultProps = {};

export default Index;
