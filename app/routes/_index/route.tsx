import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Profile } from "~/components/profile";
import { Toolbox } from "~/components/toolbox";
import { Separator } from "~/components/ui";

export default function Index() {
  return (
    <>
      <div className="flex flex-col gap-32 p-16">
        <Profile />
        <Separator />
        <Toolbox />

        <Separator />

        <Card>
          <CardHeader>
            <CardTitle>Welcome to Remix</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc mt-4 pl-6 space-y-2">
              <li>
                <a
                  className="text-blue-700 underline visited:text-purple-900"
                  target="_blank"
                  href="https://remix.run/start/quickstart"
                  rel="noreferrer"
                >
                  5m Quick Start
                </a>
              </li>
              <li>
                <a
                  className="text-blue-700 underline visited:text-purple-900"
                  target="_blank"
                  href="https://remix.run/start/tutorial"
                  rel="noreferrer"
                >
                  30m Tutorial
                </a>
              </li>
              <li>
                <a
                  className="text-blue-700 underline visited:text-purple-900"
                  target="_blank"
                  href="https://remix.run/docs"
                  rel="noreferrer"
                >
                  Remix Docs
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
