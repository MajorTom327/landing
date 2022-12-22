import React from "react";

type Props = {};

export const Divider: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="border w-full"></div>
    </>
  );
};

Divider.defaultProps = {};

export default Divider;
