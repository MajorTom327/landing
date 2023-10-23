import React from "react";

type Props = {};

export const Play: React.FC<Props> = ({}) => {
  return (
    <>
      <svg
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
    </>
  );
};

Play.defaultProps = {};

export default Play;
