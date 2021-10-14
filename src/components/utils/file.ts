import fs from "fs";
import path from "path";

export function openTXT(dirname: string, relativePath: string): string {
  let fullPath = path.join(dirname, relativePath);
  let raw = fs.readFileSync(fullPath, { encoding: "utf-8" });
  let data = raw.toString();

  return data
}
