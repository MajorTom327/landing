import React from "react";
import type { ActionFunction, LoaderFunction } from "@vercel/remix";

export function headers() {
  return {
    "Cache-Control": "s-maxage=60",
  };
}

export const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
    </div>
  );
};


export default Projects;
