import React from "react";

import ActorHero from "~/components/ActorHero";
import CauseThatMatter from "~/components/CauseThatMatter";
import Divider from "~/components/Divider";
import ErrorHandler from "~/components/ErrorHandler";
import MyValues from "~/components/MyValues";
import Skills from "~/components/Skills";

import SomeProject from "../_app/SomeProject";

export const Home: React.FC = () => {
  return (
    <>
      <ActorHero />

      <div className="flex flex-col gap-4 py-8">
        <CauseThatMatter />
        <div className="container mx-auto">
          <Divider />
        </div>

        <MyValues />

        <div className="container mx-auto">
          <Divider />
        </div>

        <Skills />

        <SomeProject />
      </div>
    </>
  );
};

export const ErrorBoundary = ErrorHandler;

Home.defaultProps = {};

export default Home;
