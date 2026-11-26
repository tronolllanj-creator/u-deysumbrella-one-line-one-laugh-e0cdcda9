// One Line, One Laugh
// Entry validated: output is 1-140 chars, one line, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "The password requirements want a symbol a number a capital and the name of my first pet so I just typed my childhood trauma";

if (!(1 <= LINE.length && LINE.length <= 140 && LINE.trim().length > 0 && !LINE.includes("\n"))) {
  throw new Error("Invalid line");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputPath = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, LINE, "utf-8");
console.log(outputPath, LINE.length);
