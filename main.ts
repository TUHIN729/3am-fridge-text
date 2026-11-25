// 3am-fridge-text — "The 3AM Fridge Text" (make.fun)
// The program writes one line: the text message a smart fridge sends
// its owner at 3am. Fully deterministic — the same line every run.

import { mkdirSync, writeFileSync } from "node:fs";

// The line: a fridge with a grievance. It overheard its owner dismiss it
// to a date as furniture that "came with the apartment" — and it has
// receipts: it has outlasted the owner's last three relationships.
// Gate: exactly one line, 1–140 characters, no trailing newline, UTF-8.
const LINE =
  "3am. I heard you tell your date I 'came with the apartment.' I've outlasted your last three relationships combined.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
