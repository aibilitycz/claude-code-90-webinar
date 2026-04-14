---
title: "feat: Level 2 rework — two real workflows + skills forward"
type: plan
date: 2026-04-14
status: complete
brainstorm: null
confidence: medium
---

# feat: Level 2 Rework — Support Notes

Replace the current canned workflow demos (web app, docs/email) with two real workflows we actually use, and pull the word "skill" forward from Level 3 so participants have a shared mental model before Try Moment #2. This is a support document for lectors — main beats only, no scripts. Delivery stays improvised.

## Why change Level 2

- Current Level 2 demos are framed as "here's a thing you could build," not "here's what we actually do." Non-technical participants tell the difference.
- Both demos we want to show are built or shipped using skills. Talking about them honestly requires introducing the word "skill" — which currently doesn't happen until minute 70.
- The Level 3 "skill reveal" at 73–75 depends on participants *not* knowing what skills are. That surprise is worth less than having a shared vocabulary through all of Level 2.

## New Level 2 structure (38–58 min, 20 min total)

Two live demos + a short skills bridge. Cut the current web-app and docs/email demos entirely — they move to the cheat sheet.

### Demo A — Daily content pipeline *(Ondřej leads, ~7 min)*

A real personal workflow Ondřej uses every day to run his blog: a scheduled pipeline that fetches signals from RSS, web, and captured thought notes overnight, aggregates them into a brief with angles, draft LinkedIn variants, and blog outlines. Generates a fresh file every morning around 02:30 UTC, committed to git. Runs via a Claude Code cron.

**Main beats to hit (not scripted):**
- This is *not* a demo — it's the thing Ondřej's blog actually runs on.
- Open today's brief as a concrete artifact, not a live run (the pipeline takes ~90 seconds — too slow on camera).
- Walk through what's in the file: signals counted, angles, LinkedIn drafts. Numbers make it real.
- The emotional moment: the pipeline surfaced a theme Ondřej had captured earlier in the week. "The system is reading my own notes and feeding them back to me with context." Land it or let it go — whichever feels right in the room.
- Name the pieces as **skills** — the word starts here. Briefs generator, capture, write-post — all skills that Ondřej wrote and uses daily.
- Namedrop: everything is packaged in **Heart of Gold Toolkit**, open source on GitHub (`github.com/ondrej-svec/heart-of-gold-toolkit`), installable via `/plugin marketplace add ondrej-svec/heart-of-gold-toolkit`. Link goes in Circle after the webinar.

**Pre-webinar prep:**
- Today's brief file open in the editor
- A recent published post open as a second reference if time allows
- `content/captures/` files **not** open on screen (personal reflections)
- Terminal available with the pipeline command in history, not run live
- Fallback: if the live view glitches, pivot to walking through one skill's `SKILL.md` to show how short and human-readable it is

### Demo B — Slava's real workflow *(Slava leads, ~7 min — content TBD by Slava)*

Demo B is Slava's call. Since he's the one who'll talk about skills and plugins, it makes sense for the second demo to be *something he actually uses*, not something handed to him. A few candidates to consider — Slava picks whichever fits his story best:

- **His own workflow with skills and plugins.** Whatever he runs daily that leans on installed skills — the more honest and lived-in, the better.
- **A plugin or skill deep-dive.** Pick one from the official marketplace or `compound-engineering`, install it live or show it already installed, run it against a real example, explain why it's useful.
- **The prework page meta demo.** Two days ago this week we shipped the prework page with Claude Code — plan doc → git log → live page. Honest framing: we copied `styles.css` directly from the sibling `aibility-pages` repo (no design skill), iterated across ~9 commits, verified pricing live from `claude.com/pricing`. Teaching point: *"point Claude Code at your existing design system and say match this."* This option exists but isn't the default — Slava's own workflow is a stronger personal story if he has one.

Whatever Slava picks, the demo should connect naturally to the skills bridge that follows it. Pre-webinar prep depends on the choice and is Slava's to define.

### Skills & plugins bridge *(3 min, Slava leads)*

Slava owns the skills & plugins thread for Level 2, so this flows directly out of his Demo B and may even merge with it. Short transition, a `/plugin` peek, and a hand-off to Petra for Try Moment #2.

**Points to make:**
- Skills and plugins are how you extend Claude Code. Open `/plugin` Discover in a fresh session — show a handful of official ones briefly.
- Three ecosystems worth knowing about: **Anthropic official marketplace** (built-in), **compound-engineering** by Every Inc. (partner plugin, the "plan → work → review" loop that many of us use), and **Heart of Gold Toolkit** (Ondřej's, just shown in Demo A).
- "More about skills, plugins and CLAUDE.md in Level 3 in a moment." Hand to Petra for Try Moment #2 at 58.

## Level 3 impact — reframe the reveal, don't kill it

Level 3 currently has a "skill reveal" scene at 73–75 min that depends on participants not knowing what skills are. With skills already introduced in Level 2, the reveal becomes *"you met skills in Level 2; the companion you've been using all webinar is itself a skill, and it lives inside the repo you cloned — here's the file."*

Same dramatic beat, different framing. No script needed — lectors can improvise the exact wording. The point is: the companion they used is not magic, it's markdown, and they can write their own.

## Files to touch

| File | What |
|------|------|
| `00-session-guide.md` — timeline row for Level 2 (line ~37) | Update to reflect new content |
| `00-session-guide.md` — Level 2 narrative (~lines 131–146) | Replace with the new structure as bullet beats, not scripted dialogue |
| `00-session-guide.md` — Level 3 skill reveal (~lines 382–407) | Light reframe — remove "surprise" assumption, one paragraph is enough |
| `README.md` — Level 2 bullet list | Match new demo names |
| `level-2-intermediate/README.md` | Only if it already exists and currently describes the old demos |

## Rehearsal note

During the April 15 rehearsal, the things that matter most:
1. Does Demo A fit in ~7 minutes without rushing the emotional beat?
2. Whatever Demo B turns into, does it fit ~7 minutes and flow naturally into the skills bridge?
3. Are Ondřej and Slava comfortable with the Level 2 → Level 3 handoff now that skills are introduced earlier?

If demos run long, the skills bridge absorbs the overflow first, Try Moment #2 second. Timebox demos hard, bridge soft.

## Open questions

- **Demo A fallback if the morning pipeline didn't run on webinar day.** Plan B: walk through one of the `SKILL.md` files instead of the daily output.
- **Heart of Gold install line — Level 2 or closing?** The closing already covers Circle and cheat sheet. A one-line *"and if you want to try Ondřej's toolkit"* in the closing might free 20 seconds in Level 2 for the emotional beat.
- **What is Demo B going to be?** Slava's call. Decide before rehearsal so we know whether pre-webinar prep is a browser tab, a repo, or a plugin install.
- **Does Level 3 need a new climax moment** to replace the weight the reveal loses? Likely no — CLAUDE.md + "číst, ne hádat" at 69–70:30 is still strong. Sanity-check at rehearsal.

## What I need from you before rewriting the session guide

1. Structure approved? Two real demos (Demo A = content pipeline, Demo B = Slava's call) replacing the current web app + docs/email.
2. Happy for me to leave Level 2 content as bullet beats (not scripted dialogue) in `00-session-guide.md`?
3. Good with the lightweight Level 3 reveal reframing?
