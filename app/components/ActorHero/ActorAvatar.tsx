import classNames from "classnames";
import React from "react";
import avatarLink from "~/assets/avatar.jpg";

type Props = {};

export const ActorAvatar: React.FC<Props> = ({}) => {
  const classes = classNames(
    "h-96 w-64 md:h-64 md:w-48 ",
    "rounded-full ring-8 ring-secondary ring-offset-2 bg-opacity-0 bg-cover bg-center"
  );
  return (
    <>
      <div
        className={classes}
        style={{ backgroundImage: `url(${avatarLink})` }}
      >
        {/* <img src={avatarLink} alt="Avatar" /> */}
      </div>
    </>
  );
};

ActorAvatar.defaultProps = {};

export default ActorAvatar;
