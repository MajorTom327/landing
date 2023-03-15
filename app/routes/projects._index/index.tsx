import React from "react";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";

type LoaderData = {};

export const loader: LoaderFunction = async ({ request }) => {
  return null;
};

export const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
    </div>
  );
};

export const action: ActionFunction = async ({ request }) => {
  return null;
};

export default Projects;
