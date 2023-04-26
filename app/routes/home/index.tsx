import React from "react";
import ActorHero from "~/components/ActorHero";
import CauseThatMatter from "~/components/CauseThatMatter";
import MyValues from "~/components/MyValues";
import Divider from "~/components/Divider";
import ErrorView from "~/components/ErrorView";

type Props = {};

export function headers() {
  return {
    "Cache-Control": "s-maxage=60",
  };
}

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

export const ErrorBoundary = () => <ErrorView />;

Home.defaultProps = {};

export default Home;
