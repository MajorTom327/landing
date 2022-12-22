import { not } from "ramda";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ClientOnly } from "remix-utils";
import bgmUrl from "~/assets/bgm.mp3";
import Play from "./Play";
import Pause from "./Pause";

type Props = {};

export const MusicPlayer: React.FC<Props> = ({}) => {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const onToggle = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }

      setIsPlaying(not);
    }
  };

  return (
    <>
      <ClientOnly fallback={<></>}>
        {() => (
          <>
            <button
              className="justify-center items-center flex flex-col text-md font-normal"
              onClick={onToggle}
            >
              <div className="flex gap-2 items-center">
                <div>{t("music.title")}</div>
                <div className="h-4 w-4">
                  {isPlaying ? <Pause /> : <Play />}
                </div>
              </div>

              {isPlaying && (
                <div className="text-xs text-gray-500">
                  Aphex Twin - Stone In Focus
                </div>
              )}
            </button>
            <audio ref={audioRef} src={bgmUrl} loop />
          </>
        )}
      </ClientOnly>
    </>
  );
};

MusicPlayer.defaultProps = {};

export default MusicPlayer;
