// One Line, One Laugh ($2 first place, free entry, no entry fee)
// Entry validated: output is 1-140 chars, one line, deterministic.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE = "The smoke alarm chirped every thirty seconds, which is less a warning and more the building slowly negotiating its own surrender.";

if (!((1 <= LINE.length && LINE.length <= 140) && LINE.trim().length > 0 && !LINE.includes("\n"))) {
  throw new Error("LINE failed validation");
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });

const outPath = join(dir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

console.log(outPath);
console.log(LINE.length);
