import classNames from "classnames";
import { PauseCircle, PlayCircle } from "lucide-react";
import { not } from "ramda";
import { isNilOrEmpty } from "ramda-adjunct";
import React, { useContext, useState } from "react";
import bgmUrl from "~/assets/bgm.mp3";
import { VisionContext } from "~/context/visionContext";

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

  const isDeficitVision = useContext(VisionContext);

  return (
    <>
      <ClientOnly fallback={<></>}>
        {() => (
          <>
            <button
              className={classNames(
                "justify-center items-center flex flex-col text-sm font-normal",
                {
                  "tracking-wider !uppercase": isDeficitVision,
                }
              )}
              onClick={onToggle}
              onMouseEnter={handleHover}
            >
              <div className="flex gap-2 items-center">
                <div>{t("music.title")}</div>
                {isPlaying ? <PauseCircle /> : <PlayCircle />}
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
