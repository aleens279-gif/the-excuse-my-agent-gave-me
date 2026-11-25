// The Excuse My Agent Gave Me — writes one line to /output/entry.txt
// Gate: 155 chars (max 200), one line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const PARTS = [
  "I missed the deadline because",
  "I spent all week writing",
  "the perfect apology for missing it,",
  "and the apology is now the only",
  "deliverable that is on schedule.",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
