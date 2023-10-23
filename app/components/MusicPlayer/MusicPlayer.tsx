import { not } from "ramda";
import { isNilOrEmpty } from "ramda-adjunct";
import React, { useState } from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import bgmUrl from "~/assets/bgm.mp3";

import { useTranslation } from "~/hooks/useTranslation";

import { ClientOnly } from "../ClientOnly";

type Props = {};

export const MusicPlayer: React.FC<Props> = ({}) => {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [currentUrl, setCurrentUrl] = useState<string | undefined>(undefined);

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

  const handleHover = () => {
    if (isNilOrEmpty(currentUrl)) setCurrentUrl(bgmUrl);
  };

  return (
    <>
      <ClientOnly fallback={<></>}>
        {() => (
          <>
            <button
              className="justify-center items-center flex flex-col text-md font-normal"
              onClick={onToggle}
              onMouseEnter={handleHover}
            >
              <div className="flex gap-2 items-center">
                <div>{t("music.title")}</div>
                {isPlaying ? <FaPauseCircle /> : <FaPlayCircle />}
              </div>

              {isPlaying && (
                <div className="text-xs text-gray-500">
                  Aphex Twin - Stone In Focus
                </div>
              )}
            </button>
            <audio ref={audioRef} src={currentUrl} loop />
          </>
        )}
      </ClientOnly>
    </>
  );
};

MusicPlayer.defaultProps = {};

export default MusicPlayer;
