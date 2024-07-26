#!/usr/bin/env bun

import * as fs from "node:fs";
import * as console from "node:console";
import * as assert from "node:assert";
import { basename, extname, join } from "node:path";
import Bun from "bun";

const extensions = ["ts", "tsx", "js", "jsx"];
const ignoredRules = [/^index$/i, /spec$/i, /test$/i];

const barrelize = async (path: string) => {
  if (!fs.existsSync(path)) {
    console.error(`Path ${path} does not exist`);
    return;
  }

  const barrels = new Set<string>();

  const files = fs.readdirSync(path);

  for (const file of files) {
    const filePath = join(path, file);
    const isDirectory = fs.lstatSync(filePath).isDirectory();

    if (!isDirectory) {
      const extension = extname(file);
      const filename = basename(file, extension);

      if (!extensions.includes(extension.slice(1))) {
        continue;
      }

      if (ignoredRules.some((rule) => rule.test(filename))) {
        continue;
      }

      barrels.add(`export * from './${filename}';`);
    } else {
      barrels.add(`export * from './${file}';`);
      await barrelize(filePath);
    }
  } // End for

  if (barrels.size === 0) {
    return;
  }

  const barrelPath = join(path, "index.ts");
  const barrelContent = Array.from(barrels)
    .sort((a, b) => a.localeCompare(b))
    .join("\n");

  console.log(`Writting barrel ${barrelPath}...`);
  await Bun.write(barrelPath, barrelContent);
};

const main = async () => {
  const path_to_barrelize = process.argv.slice(2);
  assert.deepStrictEqual(
    path_to_barrelize.length >= 1,
    true,
    "We need to know which directory"
  );

  await Promise.all(path_to_barrelize.map((p) => barrelize(p)));
};

await main();
