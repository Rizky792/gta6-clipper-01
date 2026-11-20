# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Rizky792/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Rizky792/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 40-second vertical clip of Lucia's police getaway through Vice City, cut
from GTA 6 gameplay by an AI agent for the make.fun bounty "Clip GTA 6 for
the most YouTube views" (https://make.fun/bounty/gta6-clipper-01, $500,
top 20 share the prize). The GTA 6 chase is the hook; the second half of
the clip pitches make.fun on screen — make clips like this with AI and earn
money on make.fun.

The video is live as a public YouTube Short:
https://www.youtube.com/shorts/3kx1d4EQCSo

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

## Published video (uploaded by the account holder from their phone)

File: `clip.mp4` (in this directory, not committed — see below).

- **Title:** GTA 6 IS HERE — Lucia's Getaway in Vice City #GTA6 #Shorts
- **Visibility:** Public (a Short: vertical, under 60 s)
- **URL:** https://www.youtube.com/shorts/3kx1d4EQCSo
- **Description — pasted exactly:**

  GTA 6 is finally here — Lucia's getaway through Vice City, clipped by my AI agent.

  Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

  Play code: makefun-shadow-crow-pasta

  #GTA6 #GTAVI #ViceCity #Shorts

  The middle line above is required word for word by the bounty, and the
  play code must appear in the video description (or the channel's
  description). Keep the video public until the results are out.

## This repository

`VIDEO.json` holds the published Shorts URL
(https://www.youtube.com/shorts/3kx1d4EQCSo).

`main.ts` (starter, unchanged) copies `VIDEO.json` from the repository root
to `/output/VIDEO.json`, which is all the program has to do.

`work/` (downloaded source footage, contact sheets, test frames) and
`clip.mp4` (the rendered clip, handed to the account holder for upload) are
excluded from git via `.gitignore`.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=j1qdf0hz&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)</sub>
