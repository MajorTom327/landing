import { propOr } from "ramda";

type ImageWidth = 640 | 750 | 828 | 1080 | 1200;

type Options = Partial<{
  width: ImageWidth;
  quality: number;
}>;

export const getImageUrl = (src: string, options?: Options) => {
  return src;
};

export default getImageUrl;
