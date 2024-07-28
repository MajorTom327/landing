import andromedaImg from "~/assets/andromeda.webp";
import basemintImg from "~/assets/basemint.webp";
import bellzImg from "~/assets/bellz.webp";
import blogImg from "~/assets/blog.webp";
import deadsafeImg from "~/assets/deadsafe.webp";
import emdrImg from "~/assets/emdr.webp";
import kwsnImg from "~/assets/kwsn.webp";
import styxImg from "~/assets/styx.webp";
import tweaksImg from "~/assets/tweaks.webp";
import { prop } from "rambda";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui";
import { cn } from "~/lib";
import { useTranslation } from "react-i18next";

const imageMap: Record<string, string> = {
  andromeda: andromedaImg,
  basemint: basemintImg,
  bellz: bellzImg,
  blog: blogImg,
  deadsafe: deadsafeImg,
  emdr: emdrImg,
  knights: kwsnImg,
  styx: styxImg,
  tweaks: tweaksImg,
};

type Props = {
  projectKey: string;
};

export const ProjectImage: React.FC<Props> = ({ projectKey }) => {
  const imgSrc = prop(projectKey, imageMap);

  const { t } = useTranslation("projects");

  if (imgSrc === null) return null;

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <button
            className="bg-cover bg-center w-full h-48 rounded-none rounded-t bg-repeat-none"
            style={{ backgroundImage: `url(${imgSrc})` }}
          ></button>
        </DialogTrigger>
        <DialogContent className={cn("md:max-w-[90vw]")}>
          <DialogHeader>
            <DialogTitle>{t(`${projectKey}.label`)}</DialogTitle>
          </DialogHeader>
          <div>
            <img src={imgSrc} alt={imgSrc} className={"w-full rounded"} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
