// SPDX-License-Identifier: MIT
// worst-app-idea: writes the one-sentence worst app pitch in entry.txt
// to /output/entry.txt for make.fun's "The Worst App Idea Ever Pitched" bounty.
// Node 22, standard library only, no dependencies, no network.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// Revised pitch: swapped the plain livestream ending for a push alert every
// time the hired stranger shuffles forward one step, so the uselessness is
// specific and vivid while the sentence stays one clean line.
const PITCH = readFileSync(join(dirname(fileURLToPath(import.meta.url)), "entry.txt"), "utf8");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
console.log(PITCH);
