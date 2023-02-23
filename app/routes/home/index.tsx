import React from "react";
import ActorHero from "~/components/ActorHero";
import CauseThatMatter from "~/components/CauseThatMatter";
import MyValues from "~/components/MyValues";
import Divider from "~/components/Divider";

type Props = {};

export const Home: React.FC<Props> = ({}) => {
  return (
    <>
      <ActorHero />

      <div className="flex flex-col gap-4 py-8">
        <CauseThatMatter />

        <div className="container mx-auto">
          <Divider />
        </div>

        <MyValues />
      </div>
    </>
  );
};

Home.defaultProps = {};

export default Home;
