import { not } from "ramda";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import bgmUrl from "~/assets/bgm.mp3";
// import { FaPlayCircle } from "react-icons";

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
      <button
        className="justify-center items-center flex flex-col text-md font-normal"
        onClick={onToggle}
      >
        <div className="flex gap-2">
          <div>{t("music.title")}</div>
        </div>

        {isPlaying && (
          <div className="text-xs text-gray-500">
            Aphex Twin - Stone In Focus
          </div>
        )}
      </button>
      <audio ref={audioRef} src={bgmUrl} loop />
    </>
  );
};

MusicPlayer.defaultProps = {};

export default MusicPlayer;
