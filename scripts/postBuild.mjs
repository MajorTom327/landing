import fs from "fs";
import path from "path";

const key = /BUILD_DATE/g;
const date = new Date().toISOString();

(() => {
  const dir = path.resolve("./build");

  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isFile()) {
      const content = fs.readFileSync(filePath, "utf8");
      const result = content.replace(key, `"${date}"`);
      fs.writeFileSync(filePath, result, "utf8");
    }
  });
})();
