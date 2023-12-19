import React from "react";

import ActorHero from "~/components/ActorHero";
import CauseThatMatter from "~/components/CauseThatMatter";
import Divider from "~/components/Divider";
import MyValues from "~/components/MyValues";
import Skills from "~/components/Skills";

import DarkBlock from "./DarkBlock";
import SomeProject from "./SomeProject";

type Props = {};

export const HomePage: React.FC<Props> = ({}) => {
  return (
    <>
      <ActorHero />

      <div className="flex flex-col gap-4 py-8">
        <MyValues />

        <DarkBlock>
          <div className="my-3 w-full">
            <Skills />
          </div>
        </DarkBlock>

        <CauseThatMatter />
        <div className="container mx-auto">
          <Divider />
        </div>

        <SomeProject />
      </div>
    </>
  );
};

HomePage.defaultProps = {};

export default HomePage;
