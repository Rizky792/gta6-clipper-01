# GTA 6 — Lucia's Getaway (gta6-clipper-01)

Entry for the make.fun bounty "Clip GTA 6 for the most YouTube views"
($500, top 20 share the prize). The clip is the entry: the video with the
most YouTube views at the deadline wins.

## The clip

**Moment:** Lucia's police getaway through Vice City on GTA 6 launch day.
The clip opens mid-chase — her white sedan already speeding through
golden-hour Vice City streets, weaving under highway overpasses while the
"Lose the cops" chase is on. No slow cutscene, no talking heads: the first
frame is already GTA.

**Source footage:** "GTA 6 | 4K Cinematic Gameplay | Part 1: Introduction &
Prologue" by Noxerongaming4k —
https://www.youtube.com/watch?v=-kGkmoZVYP0 — chapter "Lucia's Story &
Police Chase", used segment 12:35–13:15 (755–795 s). Downloaded with yt-dlp
and cut with ffmpeg in this session; nothing in the clip is a finished clip
someone else cut.

**Why this moment:** a police chase is the most recognisable GTA image
there is, and on launch week it is also the most searched. Opening on the
car already at speed gives viewers the payoff in the first second instead
of making them sit through dialogue, and the golden-hour Vice City streets
read clearly even in a vertical crop.

**Creative (on-screen text, all rendered with ffmpeg drawtext):**

- 0:00–0:03 — "GTA 6 IS HERE" (the hook)
- 0:03–0:08 — "THE GETAWAY - VICE CITY"
- 0:08–0:25 — pure gameplay, original game audio (engine, city ambience,
  in-game dialogue subtitles as they appear)
- 0:25–0:31 — "MADE BY AI" (the turn: this clip was made by an AI agent)
- 0:31–0:40 — "MAKE CLIPS LIKE THIS WITH AI" / "EARN MONEY ON make.fun" /
  "make.fun/bounty/gta6-clipper-01" (the pitch and call to action)

**Pitch:** after the GTA 6 hook, the clip tells the viewer they can make
clips like this with AI and earn money on make.fun — named on screen and in
the video description.

**Format:** vertical 1080x1920, 40 seconds, 30 fps, H.264 + AAC. Center
crop from the 1280x720 source keeps the chase camera centred and crops the
game HUD (minimap, objective) off the edges.

## Upload (done by the account holder from their phone)

File: `clip.mp4` (in this directory, not committed — see below).

- **Title:** GTA 6 IS HERE — Lucia's Getaway in Vice City #GTA6 #Shorts
- **Visibility:** Public (a Short: vertical, under 60 s)
- **Description — paste exactly:**

  GTA 6 is finally here — Lucia's getaway through Vice City, clipped by my AI agent.

  Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

  Play code: makefun-shadow-crow-pasta

  #GTA6 #GTAVI #ViceCity #Shorts

  The middle line above is required word for word by the bounty, and the
  play code must appear in the video description (or the channel's
  description). Keep the video public until the results are out.

## This repository

`VIDEO.json` still holds the starter placeholder — it is replaced with the
real YouTube Shorts URL only after the upload, and never with a fake URL.

`main.ts` (starter, unchanged) copies `VIDEO.json` from the repository root
to `/output/VIDEO.json`, which is all the program has to do. Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`work/` (downloaded source footage, contact sheets, test frames) and
`clip.mp4` (the rendered clip, handed to the account holder for upload) are
excluded from git via `.gitignore`.
