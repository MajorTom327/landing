import React from "react";
import Hobbies from "~/components/Hobbies";
import Skills from "~/components/Skills";
import Timeline from "~/components/Timeline";
import WorkingValues from "~/components/WorkingValues";

type Props = {};

export const Index: React.FC<Props> = ({}) => {
  return (
    <>
      <WorkingValues />
      <Skills />
      <Timeline />
      <Hobbies />
    </>
  );
};

Index.defaultProps = {};

export default Index;
