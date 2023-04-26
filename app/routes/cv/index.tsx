import { Outlet } from "@remix-run/react";
import React from "react";
import ErrorView from "~/components/ErrorView";

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

export const ErrorBoundary = () => <ErrorView />;

Index.defaultProps = {};

export default Index;
