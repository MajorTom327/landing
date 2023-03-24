import { path, propOr } from "ramda";

type Options = Partial<{
  width: number;
  quality: number;
}>;

export const getImageUrl = (src: string, options?: Options) => {
  const params = new URLSearchParams({});

  params.append("url", src);
  // @ts-ignore
  params.append("w", propOr(1200, "width", options).toString());
  // @ts-ignore
  params.append("q", propOr(75, "quality", options).toString());
  return `/_vercel/image?${params}`;
};

export default getImageUrl;
