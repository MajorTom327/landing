import React from "react";
import ActorAvatar from "./ActorAvatar";

type Props = {};

export const ActorHero: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="h-96 w-full">
        <div className="flex justify-center">
          <div className="flex flex-col items-center justify-center py-16">
            <ActorAvatar />
          </div>
        </div>
      </div>
    </>
  );
};

ActorHero.defaultProps = {};

export default ActorHero;
