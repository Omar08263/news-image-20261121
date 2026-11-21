import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Fail loudly if the poster is missing instead of writing an empty file.
if (!existsSync(join(here, "entry.png"))) {
  throw new Error("entry.png missing beside main.ts");
}
const bytes = readFileSync(join(here, "entry.png"));
writeFileSync(join(outDir, "entry.png"), bytes);
