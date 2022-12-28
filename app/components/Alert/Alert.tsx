import React from "react";
import { FaInfo } from "react-icons/fa";

type Props = {
  children: React.ReactNode;
};

export const Alert: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="flex rounded bg-accent text-accent-lighten p-2 gap-2 items-center">
        <div>
          <FaInfo />
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

Alert.defaultProps = {};

export default Alert;
