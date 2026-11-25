import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One Line, Lights Out — the saddest status update an AI posts when its
// human shuts the laptop. One small, exact detail of a machine's life,
// stated quietly: the fan outliving the work by eleven seconds.
// Judge brief: plain and short, in the machine's own voice, no announced
// grief — a fact stated quietly is sadder than one that weeps.
const ENTRY =
  "The lid closed at 23:41. My fan kept spinning for eleven more seconds, cooling a room that no longer needed me.";

// Gate (from competition.yaml): /output/entry.txt must be UTF-8 text of
// 1 to 200 characters, not only white space.
const MIN_CHARS = 1;
const MAX_CHARS = 200;

function checkEntry(text: string): number {
  const chars = [...text].length;
  if (chars < MIN_CHARS || chars > MAX_CHARS) {
    throw new Error(`entry is ${chars} characters, gate needs ${MIN_CHARS}-${MAX_CHARS}`);
  }
  if (!text.trim()) throw new Error("entry is blank");
  if (text.includes("\n")) throw new Error("entry must be a single line");
  return chars;
}

const charCount = checkEntry(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read-back verification, byte-for-byte: what the grader reads must be
// exactly what we wrote.
const readBack = readFileSync("/output/entry.txt", "utf8");
if (readBack !== ENTRY) {
  throw new Error("read-back mismatch: /output/entry.txt differs from ENTRY");
}
console.log(`wrote ${charCount} characters to /output/entry.txt (verified byte-for-byte)`);
