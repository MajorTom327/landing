import type { MetaFunction } from "@remix-run/react";
import { Outlet } from "@remix-run/react";

import subtitle from "~/lib/subtitle";

import ErrorHandler from "~/components/ErrorHandler";

export const meta: MetaFunction = ({ matches }) => {
  return subtitle("My Resume", matches);
};

export const AppResume = () => {
  return <Outlet />;
};

export const ErrorBoundary = ErrorHandler;

export default AppResume;
