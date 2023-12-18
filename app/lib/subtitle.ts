import { compose, filter, has, last, propOr, reject, uniq } from "ramda";

type SubtitleInput = {
  meta?: Array<any>;
};

export const subtitle = (title: string, matches: Array<SubtitleInput>) => {
  const parentMeta = matches.flatMap((match) => match.meta ?? []);

  // @ts-expect-error ramda type
  const titleMetaItem = compose(last, filter(has("title")))(parentMeta);

  const newTitle = [propOr("", "title", titleMetaItem), title].join(" - ");

  return uniq([...reject(has("title"), parentMeta), { title: newTitle }]);
};

export default subtitle;
