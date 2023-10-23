import React from "react";
import winterLink from "~/assets/winter.webp";

import getImageUrl from "~/lib/getImageUrl";

import { useTranslation } from "~/hooks/useTranslation";

import Title from "../Title";
import ActorAvatar from "./ActorAvatar";

type Props = {};

export const ActorHero: React.FC<Props> = ({}) => {
  const { t } = useTranslation();
  return (
    <>
      <div
        className="w-full p-8 bg-cover bg-center"
        style={{ backgroundImage: `url(${getImageUrl(winterLink)})` }}
      >
        <div className="flex justify-center">
          <div className="flex flex-col items-center justify-center gap-8 rounded-2xl bg-neutral/40 backdrop-blur p-8 w-full md:w-4/5 shadow-xl">
            <ActorAvatar />
            <div className="flex flex-col gap-2">
              <Title className="text-center" lg>
                {t("me.hero")}
              </Title>
              <Title className="text-center" md>
                {t("me.description")}
              </Title>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ActorHero.defaultProps = {};

export default ActorHero;
