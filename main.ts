// The Excuse My Agent Gave Me: one-line entry, written to /output/entry.txt
// Limit: 155 of 200 chars, single line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const PARTS = [
  "I missed the deadline",
  "because I spent all week",
  "writing the perfect apology for",
  "missing it, and the apology",
  "is now the only deliverable",
  "that is on schedule.",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
