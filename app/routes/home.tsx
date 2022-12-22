import { Outlet } from "@remix-run/react";
import React from "react";
import ActorHero from "~/components/ActorHero";
import CauseThatMatter from "~/components/CauseThatMatter";
import Personality from "~/components/Personality";
import Divider from "../components/Divider";

type Props = {};

export const Home: React.FC<Props> = ({}) => {
  return (
    <>
      <ActorHero />

      <div className="flex flex-col gap-4 py-8">
        <CauseThatMatter />
        <Outlet />

        <div className="container mx-auto">
          <Divider />
        </div>

        <Personality />
      </div>
    </>
  );
};

Home.defaultProps = {};

export default Home;
