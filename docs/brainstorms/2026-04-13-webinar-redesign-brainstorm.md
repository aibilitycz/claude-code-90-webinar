---
title: "Webinar Redesign — Try Moments, Companion Skill, Co-Teaching Dynamic"
type: brainstorm
date: 2026-04-13
participants: [Ondřej Švec, Heart of Gold]
related:
  - docs/brainstorms/2026-04-08-webinar-structure-brainstorm.md
  - ../../aibility-pact/1_Projects/cursor-masterclass/
  - ../../aibility-pact/1_Projects/cursor-webinar/
---

# Webinar Redesign — Try Moments, Companion Skill, Co-Teaching Dynamic

## Problem Statement

The Claude Code 90-minute webinar (Intro do Claude Code, April 16, 2026) is currently designed as a pure demo format with no hands-on moments for participants. The registration page promises "dokončení funkčního prvního projektu" (completion of a functional first project) — but the session structure delivers observation, not completion. Three concrete gaps need resolution:

1. **Materials gap** — the repo has strong content but lacks connective tissue (CLAUDE.md, participant-facing skill, naming consistency across internal and external materials)
2. **Engagement gap** — the demo-only format risks passive viewing for 90 minutes; there are no dedicated "you try" moments where participants build something themselves
3. **Presenter dynamic gap** — the current tag-team split (Presenter 1: 0–35, Presenter 2: 37–78) creates two sequential mini-lectures instead of a collaborative co-teaching experience

These gaps were partly intentional decisions from the earlier brainstorm (2026-04-08), made under constraints that have since changed — particularly the absence of a companion skill that could reduce the troubleshooting risk of hands-on time.

## Context

**What the earlier brainstorm decided:**
- 4-level progressive structure (Level 0 → 3)
- Demo-only format, explicitly rejecting hands-on because "90 minutes is too short for hands-on + terminal troubleshooting"
- Cheat sheet as the post-webinar "first project" bridge
- No backup plan — live debugging treated as educational
- Three micro-moments built in: Q&A at 35:00, Q&A at 62:00, Open Q&A at 78:00

**What the sibling Cursor sessions did well:**
- *cursor-webinar* (120 min): real team stories opened the session; workflows mapped to job roles; meta-moment ("how we prepared this webinar using Cursor")
- *cursor-masterclass* (8h hands-on): "menu, not checklist" philosophy; tiered difficulty for exercises; dedicated free-build block with team support; elaborate portal with live sync and downloads
- Key pattern: the masterclass gave participants downloadable agents (context-generator, rules-generator) as structured takeaways

**What the registration page promises:**
- Understanding Claude Code's capabilities
- Step-by-step installation
- First task and observing the agent
- Applicable workflows
- *"Dokončení funkčního prvního projektu"* — participants completing a functional first project
- Recording access + Circle community membership (currently not mentioned in session closing)

**What's missing in the repo:**
- No CLAUDE.md — notable for a repo *about* Claude Code
- No SKILL.md or skills/ directory
- Naming inconsistency: "masterclass" internally, "intro do Claude Code" on the registration page
- Circle community not referenced in closing script

## Chosen Approach

A coordinated redesign across four dimensions, locked in as one coherent package:

### 1. Restructured 90-minute flow with two Try Moments

```
0–15    Level 0: Intro + live install + clone repo + activate skill
15–30   Level 1: Slava builds, Ondřej narrates/reacts          (15 min, was 20)
30–38   TRY MOMENT #1: Menu of 3 prompts, participants build   (8 min, NEW)
38–58   Level 2: 2 live workflows + 1 verbal mention           (20 min, was 25)
58–66   TRY MOMENT #2: Menu of 3 workflow prompts              (8 min, NEW)
66–78   Level 3: CLAUDE.md + MCP + meta-skill reveal           (12 min, was 14)
78–90   Open Q&A + closing                                     (12 min, unchanged)
```

Try Moments use "menu not checklist" philosophy borrowed from the cursor-masterclass: three prompt options of varying ambition, participants pick one. The companion skill acts as a tutor for anyone stuck. Slava and Ondřej stay visible and available; Petra triages chat and surfaces wins.

### 2. A companion skill introduced during Level 0 and revealed again in Level 3

Participants clone the repo and activate the skill right after installing Claude Code (minute ~13). It acts as:
- A living reference to webinar materials (the prompts, the levels, the cheat sheet)
- A knowledge base with curated resource links and follow-up directions
- An in-session tutor during Try Moments ("what should I try?" / "what does this error mean?")
- A post-webinar starting guide for first real projects

The skill gets introduced twice with different framing:
- **Level 0 (minute ~13):** "Your companion for today" — no talk of extensibility yet
- **Level 3 (minute ~70):** "Remember that companion? It's a skill — an example of how Claude Code extends" — same object, reframed as a teaching example

This avoids a separate skill demo eating Level 3 time while still delivering the extensibility message.

### 3. Co-teaching dynamic (not tag-team, not podcast, not host-guest)

Both presenters visible and audible throughout all 90 minutes. Labor divides naturally:
- **Slava drives demos** — hands on keyboard, runs prompts, narrates technical flow
- **Ondřej adds context** — business framing, audience questions, reactions, connects technical output to real-world value
- **Petra facilitates from the side** — manages chat, runs polls, surfaces wins from Try Moments, handles time management

Interactions are real, not scripted, but anchored by 3–4 pre-agreed "handoff moments" so the flow is never improvised end-to-end. The session feels like two colleagues teaching together, not like a show.

### 4. Meta opening story

First 3 minutes open with a confession that grounds everything else:

> "Before we start — a quick confession. The materials you're going to see today, the cheat sheet you'll get at the end, the skill that's going to help you during this webinar — all of it was built with Claude Code. Slava and I used it to prepare this webinar. So what you're about to see isn't theory. It's literally how we work."

This replaces (or precedes) the current landing-page story. Confirmed as honest — the repo materials were genuinely built with Claude Code.

## Why This Approach

**Optimizes for:**
- **Honest delivery of registration promises** — Try Moments turn "completion of a first project" from a technical stretch into a real participant experience
- **Engagement without fragility** — the skill absorbs the troubleshooting risk that made hands-on feel too dangerous before
- **Demonstration of the tool by using the tool** — the skill itself, installed live during the webinar, is a working example of extensibility
- **Credibility through authenticity** — co-teaching and the meta opening both lean into "real people doing real work" rather than polished vendor presentation
- **Reusability of past investment** — the repo's existing level structure, cheat sheet, and workflow materials all stay; we layer on top rather than rewriting

**What was rejected:**

- **Breakout rooms** — wrong format (watch not collaborate), wrong length (90 min too tight), wrong audience expectation (paid to see experts, not facilitate peers)
- **A portal website like cursor-masterclass** — elaborate 7-page web app made sense for an 8-hour hands-on day; for 90 minutes, the skill + cloned repo IS the portal, and it's more authentic because participants experience Claude Code while learning Claude Code
- **Full hands-on workshop format** — too risky at 90 minutes; Try Moments give 80% of the benefit at 20% of the risk
- **Tag-team presenter split** — current guide has one presenter disappear while the other talks; conversational co-teaching is more engaging
- **Podcast dynamic** — too loose, feels unscripted and weird for a teaching session
- **Host + expert guest dynamic** — too staged, undermines Slava's authority as a peer
- **Role-tagging workflows** ("marketers watch this one") — contradicts the horizontal message that AI tools work for everyone
- **Live audience-input demo** — unpredictable outcomes, risk of boring or broken demos; chat prompt collection + reference is safer
- **A separate skill demo in Level 3** — introducing the skill twice (companion + extensibility example) covers both framings without a new time slot

## Subjective Contract

- **Target outcome:** Participants leave with Claude Code installed, the companion skill active, at least one real thing they built themselves, and a clear first step for tomorrow morning
- **Anti-goals:** Feeling like a vendor demo; feeling like a lecture; feeling like the presenters were reading from a script; feeling like they "didn't get to do anything"
- **References:** cursor-masterclass "menu, not checklist" philosophy; cursor-webinar team-demo opening; the existing landing-page story already in the session guide
- **Anti-references:** Polished keynote stages with overly scripted "transitions"; vendor webinars where the product never fails; demos where everything is pre-baked and nothing is typed live
- **Tone:** Light, real, collaborative, occasionally imperfect. When something breaks, laugh at it and fix it live — that IS the demo
- **Rejection criteria:** If a participant leaves thinking "I watched a cool demo but I couldn't do it myself," the design failed. If they leave thinking "I just installed this and built a thing — I can do more of this," the design worked

## Key Design Decisions

### Q1: Should the webinar add hands-on "Try Moments"? — RESOLVED
**Decision:** Yes. Two 8-minute Try Moments — one after Level 1, one after Level 2.
**Rationale:** The earlier brainstorm's rejection of hands-on was based on troubleshooting risk. The companion skill removes that risk because participants can ask it for help without needing Slava's attention. The registration page promises participant completion of a first project; Try Moments deliver on that promise honestly.
**Alternatives considered:**
- Zero try moments (original design) — rejected because it makes the registration language dishonest and leaves participants passive
- One try moment — rejected because one feels like a token gesture; two creates a rhythm
- Full hands-on workshop — rejected because 90 minutes can't absorb the overhead

### Q2: What should the participant skill actually be? — RESOLVED
**Decision:** A lightweight companion skill installed at Level 0 (minute ~13), active throughout the session as a reference, tutor, and knowledge base. Reframed in Level 3 as an example of Claude Code's extensibility.
**Rationale:** Combines three values: (a) in-session reference during demos and Try Moments, (b) post-webinar starting guide, (c) live demonstration of the skill/extensibility concept without a dedicated Level 3 slot.
**Alternatives considered:**
- Post-webinar tutor only — rejected because it requires participants to already have Claude Code installed, which creates a chicken-and-egg problem
- Separate skill demo in Level 3 — rejected because it adds complexity to an already tight Level 3
- No skill, just clone the repo — rejected because a raw repo without curation is undirected ("here's a textbook, good luck")

### Q3: What dynamic should Ondřej and Slava present with? — RESOLVED
**Decision:** Co-teaching — both visible and audible throughout, Slava drives demos, Ondřej adds context and reactions, real but anchored by 3–4 pre-agreed handoff moments.
**Rationale:** The current tag-team split creates two sequential mini-lectures. Podcast dynamic is too loose for a teaching session. Host-guest dynamic is too staged. Co-teaching is the lightest structure that still feels collaborative.
**Alternatives considered:**
- Current tag-team (Presenter 1: 0–35, Presenter 2: 37–78) — rejected as dynamically flat
- Podcast format — rejected as too loose and "weird" for a teaching context
- Host + expert guest — rejected as too staged and undermines Slava's peer authority

### Q4: Should the session open with a meta story about how the materials were built with Claude Code? — RESOLVED
**Decision:** Yes, as the first 3 minutes. Preferred over the current landing-page story because it grounds everything that follows and previews the payoffs (cheat sheet + skill).
**Rationale:** Confirmed honest — the repo materials were built with Claude Code. The story establishes credibility (real work, not vendor demo), previews the payoff (cheat sheet and skill are both coming), and reframes the webinar itself as an example of the tool's value.
**Alternatives considered:**
- Keep current landing-page story — viable fallback if meta story doesn't feel natural; can coexist as a secondary beat
- No opening story — rejected, the current opening story pattern is already proven

### Q5: How should Level 2 be compressed to make room for Try Moments? — RESOLVED
**Decision:** Two live workflows (down from three) + one verbal mention of the third.
**Rationale:** Two diverse workflows (e.g., web app + document processing) already demonstrate horizontal range. The verbal mention of the third workflow ("and you can also do X, example in the cheat sheet") covers the "many workflows" claim without eating time.
**Alternatives considered:**
- Keep all three live demos — rejected because it leaves no room for Try Moments
- Drop to one workflow — rejected because one doesn't demonstrate horizontal range

### Q6: Should we build a participant-facing portal like cursor-masterclass? — RESOLVED
**Decision:** No. The companion skill + cloned repo IS the portal.
**Rationale:** The cursor-masterclass portal made sense for an 8-hour hands-on workshop with complex logistics, downloads, certificates, and live facilitator sync. None of those justify the build cost for a 90-minute webinar. And it's more authentic — participants experience Claude Code while learning Claude Code.
**Alternatives considered:**
- Full portal like cursor-masterclass — rejected on build cost and format mismatch
- Static participant website — rejected as a weaker version of "clone the repo"
- GitHub Pages for the repo — possible nice-to-have, not required

### Q7: Naming — "masterclass" or "intro do Claude Code"? — RESOLVED
**Decision:** "Intro do Claude Code" in all participant-facing materials. "Masterclass" can remain only as an internal label for the 4-level structure pattern shared with cursor-masterclass.
**Rationale:** The registration page and participant contract say "intro." Using "masterclass" in session materials creates dissonance with what participants paid for.

## Open Questions

1. **What three prompts go on each Try Moment menu?** Need to be chosen such that each can produce a visible result in 2–3 minutes (not 8). This is a skill-design question — gets decided when building the skill content.

2. **What exactly goes in the companion skill beyond referencing the repo?** The skill has to earn its keep by providing curated value, not just "read these files." Candidates: resource links, follow-up project ideas, troubleshooting FAQ, prompts by job role.

3. **Will the pre-webinar email change?** Currently tells participants to install Node.js + create Anthropic account. Should we ask them to try installing Claude Code in advance, or preserve the "we install live together" moment for everyone?

4. **How many handoff moments between Ondřej and Slava need to be pre-agreed?** I suggested 3–4 as anchors. Actual count depends on rehearsal.

5. **What does Petra do during Try Moments specifically?** Triaging chat, surfacing wins — but does she also verbally announce things in the session, or only post in chat?

6. **Does the current 00-session-guide.md get rewritten, or do we add a v2 alongside it?** The current guide is in Czech and heavily detailed. A rewrite is a real piece of work.

## Out of Scope

- Breakout rooms of any kind
- A participant-facing portal website
- Role-tagged workflows ("marketers only")
- Live audience-supplied prompt input during demos
- A full hands-on workshop format
- Redesigning the cheat sheet content (it already works)
- Redesigning the Level 0–3 material structure (it already works)
- Building tooling for the Circle community integration (just add it to the closing script)

## Next Steps

- `/plan` to turn these decisions into a concrete implementation plan covering:
  - CLAUDE.md for the repo
  - Companion skill design and content
  - Session guide rewrite (or v2) with new timeline, Try Moments, co-teaching notes
  - Meta opening story script
  - Circle community addition to closing
  - Naming alignment across all materials
  - Pre-webinar email update (if needed)
- `/compound` candidate: the "skill as in-session companion + extensibility example" pattern is novel enough to document once we've run it and seen if it works
