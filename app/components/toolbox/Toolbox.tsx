import { ToolCard } from "~/components/toolbox/ToolCard";
import { Input } from "~/components/ui";

export const Toolbox: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-6 group">
        <div className="flex justify-between">
          <h1 className={"text-4xl"}>My favorites tools</h1>
          <div className="group-hover:opacity-100 opacity-25 transition">
            <Input placeholder={"filter..."} />
          </div>
        </div>
        <div className="w-full grid grid-cols-4 gap-4">
          <ToolCard label={"React"} level={"Advanced"}>
            From class to Function Components.
            <br />
            Soon Server components?
          </ToolCard>

          <ToolCard label={"NodeJS"} level={"Advanced"} large>
            NodeJS is one of my favorite tools. I&apos;m still open to test
            things like Bun or Deno, but currently I feel they are not enough
            mature in comparison of nodejs
          </ToolCard>
          <ToolCard label={"Git"} level={"Intermediate"}>
            Can&apos;t work without. You can?
          </ToolCard>
          <ToolCard label={"Remix"} level={"Advanced"} large>
            Remix totally changed the way I build application. Efficient, I can
            build a large amount of stuff in a minimal of time. And still have a
            app able to render fast and with no js if needed.
          </ToolCard>

          <ToolCard label={"Typescript"} level={"Intermediate"}>
            I like types in my apps.
          </ToolCard>
          <ToolCard label={"Postgres"} level={"Intermediate"}>
            Postgres is a great database. Not that much to say.
          </ToolCard>
          <ToolCard label={"Docker"} level={"Intermediate"} large>
            It work on my computer (and others)
          </ToolCard>
        </div>
      </div>
    </>
  );
};
