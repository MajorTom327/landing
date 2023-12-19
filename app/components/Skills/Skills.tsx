import React from "react";
import { skills } from "~/data/skills";

import Skill from "./Skill";

type Props = {};

export const Skills: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
        {skills.map((skill, i) => (
          <Skill key={i} {...skill} />
        ))}
      </div>
    </>
  );
};

Skills.defaultProps = {};

export default Skills;
