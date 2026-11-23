// One Word From Grandma — the single word a grandma would text about AI.
//
// Chosen word: "robit" — her warm, slightly baffled typo for "robot".
// It reads as the word a grandma would actually text (criterion 1),
// sounds like her voice (criterion 2), lands funny with no context
// (criterion 3), is tied to robots/machines (criterion 4), and is fresh
// — not the obvious "robot" (criterion 5).
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "robit";
const OUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, WORD);
