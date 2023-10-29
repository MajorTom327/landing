import { Outlet } from "@remix-run/react";

import ErrorHandler from "~/components/ErrorHandler";

export const AppResume = () => {
  return <Outlet />;
};

export const ErrorBoundary = ErrorHandler;

export default AppResume;
