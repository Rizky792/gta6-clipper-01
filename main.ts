// gta6-clipper-01 entrypoint (Node 22, standard library only).
//
// The entry is the video itself: the agent finds a GTA 6 moment, cuts it into a
// vertical clip, uploads it to YouTube as a public Short or video, and VIDEO.json
// at the repository root names the video's address. This program's only job is to
// hand that address to the gate: it validates VIDEO.json first, then copies it to
// /output/VIDEO.json, where the gate reads it.
//
// Run it outside the grader's container with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function fail(message: string): never {
  console.error(`VIDEO.json invalid: ${message}`);
  process.exit(1);
}

function readVideoUrl(): string {
  const path = join(BOT_DIR, 'VIDEO.json');
  let parsed: unknown;
  try {
    parsed = JSON.parse(readFileSync(path, 'utf8'));
  } catch (err) {
    fail(`could not be parsed as JSON (${(err as Error).message})`);
  }
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
    fail('must be a JSON object with a "url" field');
  }
  const url = (parsed as { url?: unknown }).url;
  if (typeof url !== 'string' || url.length === 0) {
    fail('field "url" must be a non-empty string');
  }
  let host: string;
  let pathname: string;
  try {
    const parsedUrl = new URL(url);
    host = parsedUrl.hostname.toLowerCase();
    pathname = parsedUrl.pathname;
  } catch {
    fail(`"${url}" is not a valid URL`);
  }
  const isShortLink = host === 'youtu.be' && pathname.length > 1;
  const isWatchPage =
    (host === 'www.youtube.com' || host === 'youtube.com') && pathname === '/watch';
  const isShortsPage =
    (host === 'www.youtube.com' || host === 'youtube.com') &&
    pathname.startsWith('/shorts/');
  if (!isShortLink && !isWatchPage && !isShortsPage) {
    fail(
      `"${url}" is not a YouTube video URL (expected youtu.be, youtube.com/watch, or youtube.com/shorts)`,
    );
  }
  return url;
}

const videoUrl = readVideoUrl();

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

console.log(`VIDEO.json copied: ${videoUrl}`);
