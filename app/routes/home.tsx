import { Outlet } from "@remix-run/react";
import React from "react";
import ActorHero from "~/components/ActorHero";
import CauseThatMatter from "~/components/CauseThatMatter";

type Props = {};

export const Home: React.FC<Props> = ({}) => {
  return (
    <>
      <ActorHero />

      <CauseThatMatter />
      <Outlet />
    </>
  );
};

Home.defaultProps = {};

export default Home;
