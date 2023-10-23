import React from "react";
import CarbonBadge from "react-carbonbadge";

type Props = {};

export const WebsiteCarbonBadge: React.FC<Props> = ({}) => {
  return (
    <>
      <CarbonBadge darkMode={true} />
    </>
  );
};

WebsiteCarbonBadge.defaultProps = {};

export default WebsiteCarbonBadge;
