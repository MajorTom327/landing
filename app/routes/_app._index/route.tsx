import React from "react";

import ErrorHandler from "~/components/ErrorHandler";

import HomePage from "../_app/HomePage";

export const Home: React.FC = () => {
  return (
    <>
      <HomePage />
    </>
  );
};

export const ErrorBoundary = ErrorHandler;

Home.defaultProps = {};

export default Home;
