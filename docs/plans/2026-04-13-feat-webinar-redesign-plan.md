---
title: "feat: Webinar redesign — Try Moments, companion skill, co-teaching dynamic"
type: plan
date: 2026-04-13
status: in_progress
brainstorm: docs/brainstorms/2026-04-13-webinar-redesign-brainstorm.md
confidence: medium
---

# feat: Webinar Redesign — Implementation Plan

Implements the decisions from the 2026-04-13 brainstorm across four workstreams — foundation, companion skill, session guide, and rehearsal — phased across three days before the April 16 webinar delivery.

## Problem Statement

The 90-minute "Intro do Claude Code" webinar (April 16, 2026) currently has three gaps that need to be closed before delivery:

1. No hands-on moments for participants despite the registration page promising "completion of a functional first project"
2. No companion skill to reduce the troubleshooting risk that would otherwise make hands-on time too dangerous
3. A tag-team presenter format that produces two sequential mini-lectures instead of a collaborative co-teaching experience

Additional connective-tissue gaps: missing CLAUDE.md for the repo, naming inconsistency ("masterclass" internally vs "intro do Claude Code" externally), Circle community not referenced in closing, pre-webinar email not yet updated.

**Timeline:** Today is April 13, webinar is April 16.
- **April 13 (today):** All build work — CLAUDE.md, companion skill, session guide rewrite, scripts, pre-webinar email
- **April 14:** Rehearsal and validation with Slava and Petra
- **April 15:** Buffer day — fix anything rehearsal surfaced
- **April 16:** Deliver

This is aggressive. The build all happens today so that tomorrow is free for the thing that matters most: seeing whether it actually works together.

## Target End State

By end-of-day April 13 (today), the repository and session contain:

- A CLAUDE.md at the repo root following the Aibility conventions
- A working companion skill participants can clone and activate during Level 0 (minute ~13)
- A rewritten session guide with the new 90-minute flow, two Try Moments, the meta opening script, and co-teaching handoff anchors
- Naming aligned across all participant-facing materials ("Intro do Claude Code")
- The Circle community link added to the closing script
- An updated pre-webinar email sent to registered participants

By end-of-day April 14, one full co-teaching rehearsal has been completed with Slava and Petra.

April 15 is buffer — fix anything rehearsal surfaced, tighten scripts, swap any Try Moment prompts that fell flat.

On April 16 (delivery day), everything runs as rehearsed — meta opening, Level 0 install, skill activation, Try Moment #1, Level 2, Try Moment #2, Level 3, closing.

## Scope and Non-Goals

**In scope:**
- CLAUDE.md for the webinar repo
- Companion skill (SKILL.md + supporting content files)
- Session guide rewrite (timeline, scripts, co-teaching notes)
- Meta opening script
- Try Moment #1 and #2 scripts and prompt menus
- Circle community addition to closing
- Naming alignment sweep
- Pre-webinar email update
- Rehearsal session with Slava and Petra

**Non-goals:**
- Building a participant-facing portal website (rejected in brainstorm)
- Adding breakout rooms (rejected in brainstorm)
- Rewriting the cheat sheet content (already works)
- Rewriting Level 0–3 README content (already works — only structural headers/titles change)
- Changing the registration page copy (Try Moments resolve the "first project" gap, so the current page is now honest)
- Building skill registry tooling or auto-installation scripts (clone-and-use is fine for 90 minutes)
- Translating materials to English (Czech is the primary audience)

## Proposed Solution

Four phases compressed into four days, with all build work on Day 1.

### Day 1 (April 13, today) — Build everything
All four workstreams run today:
- **A. Foundation** — CLAUDE.md, naming sweep, pre-webinar email
- **B. Companion Skill** — SKILL.md + references, tested locally
- **C. Session Guide Rewrite** — new timeline, all six scripted moments, co-teaching notes
- **D. Supporting updates** — README, Circle closing, anything else the sweep surfaces

The skill and session guide can be built in parallel (they don't depend on each other). The foundation tasks (CLAUDE.md, naming, email) are quick and should happen first.

### Day 2 (April 14) — Rehearse and validate
Full co-teaching rehearsal with Slava and Petra. Time each block. Verify the skill activates and the Try Moment prompts produce visible results in under 3 minutes. Document what worked and what needs adjusting.

### Day 3 (April 15) — Buffer
Fix anything the rehearsal surfaced. Swap Try Moment prompts if they fell flat. Tighten scripts. Second rehearsal if needed.

### Day 4 (April 16) — Deliver
Final tech check, deliver the webinar.

## Implementation Tasks

### Day 1 — Build Everything (April 13, today) — ~9 hours

#### Block 1: Foundation (~1.5 hours, do first)
These tasks are fast and unblock the pre-webinar email, which is the external dependency.

- [x] **A1. Create `CLAUDE.md` at repo root** — Table-heavy operational doc following aibility conventions. Sections: What is this repo, Repo structure, Participant journey, Key files, Language convention (Czech-first for participant-facing content, English for internal docs), Key commands, Task management
- [x] **A2. Naming alignment sweep** — Find all "masterclass" references in participant-facing files. Replace with "Intro do Claude Code" everywhere except in internal brainstorm/plan documents where "masterclass" can remain as structural label. Files to check: `00-session-guide.md` (line 1 title), `README.md`, `level-*/README.md`, `cheat-sheet/*.md`
- [x] **A3. Update pre-webinar email draft** — Update `00-session-guide.md` lines 203–207 with new email content. Additions: brief context about the companion skill, optional "try installing Claude Code in advance," instruction to clone the repo (or we'll do it together if they can't), Circle community mention
- [ ] **A4. Send pre-webinar email** — Coordinate with Petra to send today. Participants need prep time

#### Block 2: Companion Skill (~3 hours, can run parallel with Block 3)

- [x] **B1. Design skill directory structure** — Create `skills/claude-code-guide/` with `SKILL.md` + `references/` subdirectory for progressive loading. Follow aibility SKILL.md format (YAML frontmatter: name, description, context: fork, agent: sonnet)
- [x] **B2. Write `SKILL.md` trigger description** — Third-person, specific enough to auto-load when participants ask webinar-related questions. Example target: "This skill should be used when a participant is working through the Intro do Claude Code webinar and asks about levels, prompts to try, installation, or next steps."
- [x] **B3. Write core skill body** — Sections: Webinar overview, Current level detection (how to tell which level the participant is on), Try Moment prompts, Resource links, Common FAQs, Next steps after webinar
- [x] **B4. Create `references/try-moment-prompts.md`** — The 6 prompts (3 for Try Moment #1, 3 for Try Moment #2) with expected outputs, time estimates, and variations
- [x] **B5. Create `references/resource-links.md`** — Curated external links: Claude Code docs, GitHub, Anthropic pricing, community links, Circle, further reading
- [x] **B6. Create `references/faq.md`** — Common questions from non-technical users: cost, data safety, offline use, limits, "what if it breaks"
- [ ] **B7. Test the skill locally** — Run `claude` in a fresh directory with the skill active, try 3 sample questions ("what should I build?", "how do I install CLAUDE.md?", "what's MCP?"). Verify it triggers and answers usefully
- [x] **B8. Document skill activation in README** — Add a short "For participants: activate the companion skill" section to `README.md` with the clone + activation steps

#### Block 3: Session Guide Rewrite (~4 hours, parallel with Block 2)

- [x] **C1. Rewrite `00-session-guide.md` timeline section** — Replace current 90-minute breakdown with new structure (0–15 Level 0, 15–30 Level 1, 30–38 Try Moment #1, 38–58 Level 2, 58–66 Try Moment #2, 66–78 Level 3, 78–90 Q&A + closing)
- [x] **C2. Write Meta Opening script (minutes 0–3)** — Czech script for the "we built this with Claude Code" confession. Include suggested intonation/pacing notes. Keep under 90 seconds spoken
- [x] **C3. Write Level 0 skill activation moment (minutes 13–15)** — Czech script for "clone this repo, your companion is now active." Include the exact clone command and troubleshooting tips for stuck participants
- [x] **C4. Write Try Moment #1 script (minutes 30–38)** — Czech script. Three prompt options displayed on screen: (A) Personal landing page, (B) Simple to-do list app, (C) Page about your favorite topic. Instructor patter while participants work: what to say, when to celebrate chat wins, how to handle stuck people
- [x] **C5. Write Try Moment #2 script (minutes 58–66)** — Czech script. Three prompt options: (A) Summarize a document, (B) Generate 3 LinkedIn post variants, (C) Iterate on your Try Moment #1 page
- [x] **C6. Write Level 3 skill reveal moment (minutes 70ish)** — Czech script for "remember the companion? It's a skill, and skills are how Claude Code extends." Bridges into the broader extensibility message (MCP, plugins)
- [x] **C7. Write closing Circle community addition (minutes 86–90)** — Czech script. Add Circle community link and 1-sentence description of what's there. Weave into existing closing script, don't replace it
- [x] **C8. Write co-teaching handoff anchors** — Identify 3–4 specific moments where a pre-agreed handoff keeps the flow anchored: meta opening → Slava takes over for install, Level 1 demo → Ondřej asks "what just happened," Level 2 workflow transition, Level 3 → Ondřej brings it home. Document in a "Co-teaching notes" section in the session guide
- [x] **C9. Document Petra's role during Try Moments** — Explicit notes on what Petra does: monitors chat, surfaces wins ("Marie just built X!"), flags stuck participants, manages the timer
- [x] **C10. Add multi-surface acknowledgment to Level 0** — Update `level-0-introduction/README.md` comparison table row "Kde běží" for Claude Code from "Terminál" to something like "CLI v terminálu, desktop, web (claude.ai/code), VS Code, JetBrains". Add a ~60-second script moment in `00-session-guide.md` around minute 5–7: "Claude Code běží na více místech — dnes vám ukážeme terminál, protože tam nejlíp vidíte, jak agent pracuje." Keep the rest of the terminal-centric narrative intact — this is a one-paragraph honesty fix, not a restructure
- [x] **C11. Factual corrections sweep** — Fix stale/inaccurate claims across participant-facing materials. Research-backed (see plan References for sources). Scope:
  - **`level-0-introduction/README.md` lines 15–20**: Replace stale "Cursor = píšete kód a AI vám pomáhá" framing. Cursor's Agent mode is also autonomous in 2026. New framing: ChatGPT = conversation, Cursor = AI agent *in the editor*, Claude Code = AI agent *in the terminal, desktop, web, and IDE extensions*
  - **`level-0-introduction/README.md` lines 22–32**: Rewrite comparison table. Remove "Opravuje chyby | Navrhne | Navrhne | Opraví sám" row (Cursor also fixes errors). Remove "Spouští příkazy | Ne | Omezeně | Ano — plně" row (Cursor also runs commands). Reframe table around *interface / environment* rather than capability gradations. Use the table drafted in conversation (Typ, Kde běží, Primární rozhraní, Vidí projekt, Spouští příkazy, Pro koho) with the note about both tools being capable, difference being where you work
  - **`level-3-advanced/README.md` lines 93–95**: Delete "Filesystem MCP (vestavěný)" row. Filesystem access is native to Claude Code, not an MCP server. Start the MCP examples with Web MCP instead
  - **`level-3-advanced/README.md` lines 116–121**: Fix `claude /mcp` shown as shell command. It's a slash command inside a running Claude Code session. Correct form: run `claude` first, then type `/mcp` at the prompt
  - **`level-3-advanced/README.md` lines 139–153**: Simplify or correct the "memory vs CLAUDE.md" section. User-level persistence is primarily `~/.claude/CLAUDE.md` (same file format, different scope), not a separate memory mechanism. Reframe as "CLAUDE.md can live at project level or user level (`~/.claude/CLAUDE.md`) — project-level for team-shared rules, user-level for your personal preferences across all projects"
  - **`level-3-advanced/README.md` lines 159–164**: Update model table. Current models are Opus, Sonnet, and Haiku (drop version numbers to prevent rot). Add Haiku as a third row for "fast and cheap for simple tasks." Frame as "three main choices" not "two"
  - **`cheat-sheet/claude-code-quickstart-cs.md` line 109** and **`claude-code-quickstart-en.md` equivalent**: Change `Esc | Ukončí Claude Code` to `Esc | Přeruší aktuální akci agenta` / `Esc | Interrupts the current agent action`. Add a new row `/exit | Ukončí Claude Code` / `/exit | Quits Claude Code`
  - **`00-session-guide.md` minutes 3–7 narrative**: Update the "Co je Claude Code" and "Claude Code vs Cursor vs ChatGPT" speaking notes to match the corrected Level 0 framing. Keep the sentiment ("Claude Code is an agent, not a chatbot") but drop any language that implies Cursor only assists without executing
  - **Codex acknowledgment**: OpenAI has its own terminal-first autonomous coding agent — **Codex CLI** — which is philosophically very close to Claude Code. Keep the main comparison table framed around ChatGPT / Cursor / Claude Code (because ChatGPT is the audience's reference point), but add a one-line narrative acknowledgment in Level 0 and the session guide: "OpenAI má podobný nástroj jménem Codex — fungují na stejném principu. Dnes se podíváme na Claude Code, ale pokud si zamilujete tenhle způsob práce, Codex je jeho přímý bratranec." This prevents the impression that Anthropic is alone in this space and respects participants who may later discover Codex on their own

#### Block 4: End of Day 1

- [ ] **Z1. Final commit for Day 1** — `feat: webinar redesign — CLAUDE.md, companion skill, new session guide with Try Moments`
- [ ] **Z2. Confirm Slava and Petra are available for rehearsal tomorrow**

### Day 2 — Rehearse and Validate (April 14) — ~3 hours

- [ ] **D1. Tech check with Slava** — Both presenters verify Claude Code installed, skill activates correctly, demo folders ready, terminal font 18px+, Zoom screen share works
- [ ] **D2. Full walkthrough rehearsal (60–75 min)** — Run the entire session in real-time with Slava and Petra. Time each block. Note any section that runs long or short
- [ ] **D3. Validate Try Moment prompts** — During rehearsal, actually run at least two of the six Try Moment prompts end-to-end. Verify they produce a visible result in <3 minutes
- [ ] **D4. Validate skill activation for fresh participants** — Have Petra clone the repo fresh and try asking the skill 2–3 questions as if she were a participant. Check it triggers and gives useful answers
- [ ] **D5. Document rehearsal findings** — What worked, what felt awkward, what ran long, what ran short. Write into a rehearsal-notes section of the session guide

### Day 3 — Buffer (April 15) — ~2 hours (expected; more if rehearsal surfaced problems)

- [ ] **E1. Adjust handoff anchors based on rehearsal findings** — Update `00-session-guide.md` co-teaching notes with what actually worked vs what felt awkward
- [ ] **E2. Swap any Try Moment prompts that fell flat** — If a prompt ran too long or produced underwhelming results, replace it. Re-test the replacement
- [ ] **E3. Tighten scripts based on timing** — Compress anything that ran long, expand anything that ran short
- [ ] **E4. Optional second rehearsal** — If Day 2 revealed significant chemistry or flow issues, run a second shorter rehearsal focused on problem sections
- [ ] **E5. Final commit** — `chore: rehearsal adjustments and Try Moment prompt refinements`

### Day 4 — Deliver (April 16) — 90 min + prep

- [ ] **F1. Final tech check** — 30 min before start: Claude Code working, skill active, Zoom ready, Anthropic credits confirmed, backup Anthropic account available
- [ ] **F2. Deliver the webinar**
- [ ] **F3. Post-webinar: `/compound` learnings** — Capture what worked, what didn't, what to change for next time. The "skill as companion + extensibility example" pattern is worth documenting if it worked

## Acceptance Criteria

**Day 1 (Build) done when:**
- [ ] `CLAUDE.md` exists at repo root with all aibility-convention sections
- [ ] No participant-facing file contains the word "masterclass" in a confusing context
- [ ] Pre-webinar email has been sent (confirmed with Petra)
- [ ] Cloning the repo and running `claude` in it activates the companion skill
- [ ] Asking the skill "what should I try?" returns one of the Try Moment menu prompts
- [ ] `00-session-guide.md` contains the new timeline with all six scripted moments (meta opening, Level 0 skill activation, Try Moment #1, Try Moment #2, Level 3 reveal, Circle closing)
- [ ] Co-teaching notes section lists at least 3 handoff anchors
- [ ] Slava and Petra have confirmed availability for rehearsal on April 14

**Day 2 (Rehearsal) done when:**
- [ ] One full walkthrough has been completed with Slava and Petra
- [ ] Timing is within ±3 minutes of the 90-minute target per section
- [ ] Both presenters can describe what the other is doing at each handoff moment without looking at notes
- [ ] At least two Try Moment prompts have been verified to produce a visible result in <3 minutes
- [ ] Petra has successfully tested the skill from a participant's perspective
- [ ] Rehearsal findings documented in the session guide

**Day 3 (Buffer) done when:**
- [ ] All rehearsal-surfaced issues have been addressed
- [ ] Final version of session guide committed
- [ ] Both presenters feel ready

**Day 4 (Delivery) done when:**
- [ ] Webinar delivered to registered participants on April 16
- [ ] Recording captured (confirmed with Petra)
- [ ] At least one participant reports in chat that they built something during a Try Moment

## Decision Rationale

**Why compress all build work to Day 1?** Because the valuable thing is rehearsal, not building. Building is predictable — you know what needs to happen. Rehearsal is where reality meets intent, and that needs time to breathe. Front-loading the build leaves Day 2 for rehearsal, Day 3 as buffer for fixing what rehearsal revealed, and Day 4 for delivery. It's tight but the tradeoff favors discovery over craft.

**Why write the session guide scripts in full Czech immediately instead of English drafts?** Because the scripts are performance documents — they need to be what you actually say on stage. Translating at the last minute loses nuance and creates rehearsal friction. Write once, in the delivery language.

**Why build the skill and rewrite the session guide in parallel blocks?** They don't depend on each other. The skill content references the webinar structure (which exists in the brainstorm) but doesn't need the new session guide to be written. The session guide references the skill (where it gets activated) but doesn't need the skill to be built. Parallel saves time on a tight day.

**Why reserve Day 3 as buffer instead of cramming more content in?** Because rehearsal always reveals something. The buffer isn't slack — it's insurance. If Day 2 reveals that Try Moment #1 is too slow or the co-teaching handoff feels awkward, Day 3 is when you fix it. No buffer means rehearsal findings become delivery-day problems.

**Why not build a skill registry or auto-install script?** Because "clone the repo and it works" is simpler, and for a 90-minute webinar, simplicity beats sophistication. The meta demo is actually *better* when participants see the plain file structure — it reinforces that skills are just markdown files they could write themselves.

**Why keep the registration page copy unchanged?** Because Try Moments resolve the "first project" honesty gap. Participants will complete something. The page is now accurate.

## Constraints and Boundaries

- **Language:** Participant-facing content stays in Czech. Internal docs (CLAUDE.md, brainstorms, plans) in English per aibility convention
- **Format:** No breakouts, no portal website, no role-tagging of workflows — all rejected in brainstorm
- **Timeline:** Hard April 16 delivery. No scope that can't ship by April 15 evening
- **Presenter count:** Two presenters (Ondřej + Slava) + one facilitator (Petra). No more, no fewer
- **Technical:** Claude Code + Zoom + screen share. No custom tooling, no web portal, no real-time infrastructure
- **Session structure:** Total exactly 90 minutes. Try Moments are 8 minutes each, not expandable without breaking the budget

## Subjective Contract (for the session guide rewrite)

The session guide rewrite is a facilitation-flow redesign judged partly by human feel, not just structural correctness. The brainstorm captured the subjective contract — repeated here for plan-level visibility:

- **Target outcome:** Participants leave having built something themselves, with Claude Code installed, the skill active, and a clear first step for tomorrow
- **Anti-goals:** Feeling like a vendor demo; feeling like a lecture; feeling scripted; feeling like "I didn't get to do anything"
- **References (positive):** cursor-masterclass "menu, not checklist" philosophy; cursor-webinar team demos; the existing landing-page story
- **Anti-references:** Polished keynote stages; demos where nothing breaks; live audience prompt input with unpredictable results
- **Tone:** Light, real, collaborative, occasionally imperfect. Laugh at errors and fix them live — that IS the demo
- **Rejection criteria:** If a participant leaves thinking "cool demo but I couldn't do it," the design failed. If they leave thinking "I just built a thing — I can do more," it worked
- **Required preview artifact:** The companion skill must be locally tested (task B7) before rehearsal. The session guide rewrite must be rehearsed once (task D2) before delivery
- **Preview review:** Ondřej reviews the skill by using it. Slava reviews the session guide by co-running it in rehearsal. If either fails their respective "it works / it flows" test, that task bounces back to Phase 2

## Assumptions

| Assumption | Status | Evidence / Mitigation |
|------------|--------|-----------------------|
| The team can build a Claude Code skill in ~1 day | Verified | User reference to hackathon skill building; aibility SKILL.md conventions already well-understood |
| Slava and Petra are available for rehearsal on April 14 | **Unverified** | Action: confirm today (task Z2). If unavailable, rehearse on April 15 and lose the buffer day — higher delivery risk |
| Petra can coordinate the pre-webinar email going out today | **Unverified** | Action: confirm with Petra today. If email can't go out today, email becomes "two days before" instead of "three days before" — acceptable but tighter |
| All build work (CLAUDE.md + skill + session guide rewrite + scripts) fits in one day | **Unverified** | Mitigation: foundation block is ~1.5h (small), skill and session guide can run in parallel. Realistic estimate ~9h of focused work. If blocks run long, Day 2 rehearsal shifts to Day 3 and buffer disappears |
| Participants will mostly install Claude Code successfully during Level 0 (now more critical because Try Moments depend on it) | Unverified | Mitigation 1: pre-webinar email offers optional advance installation. Mitigation 2: skill content is also readable as plain markdown if activation fails. Mitigation 3: stuck participants stay spectators during Try Moments without breaking the session |
| The companion skill adds enough curated value to justify existing (vs just cloning the repo) | Weak — flagged in brainstorm | Mitigation: skill must include curated resource links, FAQ, and next-step directions that aren't in the raw level READMEs. Task B3 makes this explicit |
| Co-teaching with limited rehearsal will feel natural, not scripted | Unverified | Mitigation: 3–4 pre-agreed handoff anchors (task C8) provide structure. Rehearsal (D2) catches awkward moments. If it still feels bad, fall back to clean presenter split per the original session guide |
| Meta opening story is honest | **Verified** (user confirmed) | Repo materials were built with Claude Code |
| 8 minutes is enough for a Try Moment to produce a celebration-worthy result | Unverified | Mitigation: Try Moment prompts chosen for <3-minute completion time. Rehearsal (D4) verifies this. If prompts run long, swap to simpler ones |
| The registration page copy is now accurate without changes | Verified | Try Moments deliver "completion of a functional first project" honestly |

## Risk Analysis

### Risk 1 — Pre-webinar email doesn't go out today
**Likelihood:** Medium. Depends on Petra's availability and mailing infrastructure.
**Impact:** High. Participants have less prep time. More people arrive without Node.js/Anthropic account, Level 0 runs long, Try Moment #1 compresses or fails.
**Mitigation:** Confirm with Petra in the first hour of Day 1. If she can't send today, send by end of Day 2 (April 14) — still leaves 48 hours for participants to prep. If that also fails, accept the risk and plan for a longer Level 0 install segment on April 16.

### Risk 2 — Level 0 install runs long and eats Try Moment #1
**Likelihood:** Medium-high. Non-technical audience, live installation, multiple steps.
**Impact:** Medium. Try Moment #1 compresses from 8 minutes to 4–5 minutes; still usable but less satisfying.
**Mitigation:** Pre-webinar email asks participants to try installing Node.js and creating an Anthropic account in advance (keeping Claude Code install as the live moment). Skill content includes troubleshooting FAQ for common install errors. If Try Moment #1 compresses, it can fall back to a single demo prompt instead of the full menu.

### Risk 3 — Companion skill fails to activate for some participants
**Likelihood:** Medium. Skill activation depends on local Claude Code config, OS, permissions.
**Impact:** Medium. Stuck participants lose the in-session tutor but can still watch demos.
**Mitigation:** Skill content is readable as plain markdown. Instruction: "if the skill isn't working, open `skills/claude-code-guide/SKILL.md` in your editor — you can read it directly." This turns a skill failure into "hey, skills are just markdown files" teaching moment.

### Risk 4 — Co-teaching chemistry feels flat or awkward
**Likelihood:** Medium. Rehearsal is only one session (Day 2), with optional second on Day 3.
**Impact:** Medium. Session feels less natural but still delivers content.
**Mitigation:** Handoff anchors (C8) provide structure even if improvisation fails. Day 3 buffer allows a second focused rehearsal on problem sections if Day 2 reveals chemistry issues. Fallback: if rehearsal reveals the dynamic isn't working at all, revert to a cleaner presenter split (Ondřej hosts opening + closing, Slava drives middle) without scrapping the Try Moments or skill.

### Risk 5 — Try Moment prompts produce underwhelming results in 8 minutes
**Likelihood:** Low-medium. Depends on prompt quality and Claude Code response time.
**Impact:** High. A flat celebration moment is worse than no moment at all.
**Mitigation:** Rehearsal task D4 verifies at least one prompt produces visible results in under 3 minutes. If prompts are too slow, swap for simpler variants. Backup: Slava can run a pre-baked prompt live in parallel so there's always SOMETHING to show at the celebration moment.

### Risk 6 — Skill duplication of webinar materials feels redundant to advanced participants
**Likelihood:** Low. Target audience is non-technical.
**Impact:** Low. Advanced participants ignore the skill and don't complain.
**Mitigation:** Accept. The skill is designed for the target audience, not edge cases.

## References

- **Brainstorm:** `docs/brainstorms/2026-04-13-webinar-redesign-brainstorm.md`
- **Prior brainstorm:** `docs/brainstorms/2026-04-08-webinar-structure-brainstorm.md`
- **Current session guide:** `00-session-guide.md`
- **Current README:** `README.md`
- **Cheat sheets:** `cheat-sheet/claude-code-quickstart-cs.md`, `cheat-sheet/claude-code-quickstart-en.md`
- **Sibling Cursor projects:**
  - `../../aibility-pact/1_Projects/cursor-webinar/` — 120-min webinar structure
  - `../../aibility-pact/1_Projects/cursor-masterclass/` — 8-hour hands-on workshop with participant portal
- **SKILL.md format references:**
  - `~/.claude/skills/ship-notes/SKILL.md` — audience-section pattern
  - `~/.claude/skills/skill-creator/SKILL.md` — procedural/workflow pattern
  - `~/.claude/skills/lean-technical-docs/SKILL.md` — "use when / don't use" + progressive loading pattern
- **CLAUDE.md format references:**
  - `../../aibility-pact/CLAUDE.md` — root pattern (~141 lines, English, table-heavy)
  - `../../aibility-pact/1_Projects/superpowered-professional/CLAUDE.md` — workspace hub pattern
- **Potentially helpful skills during /work:**
  - `deep-thought:craft-skill` — "the skill that writes skills"
  - `compound-engineering:create-agent-skills` — expert guidance for SKILL.md authoring
- **Research sources for factual corrections (task C11), verified April 2026:**
  - [code.claude.com/docs/en/overview](https://code.claude.com/docs/en/overview) — Claude Code surfaces, installation, capabilities
  - [platform.claude.com/docs/en/about-claude/models/overview](https://platform.claude.com/docs/en/about-claude/models/overview) — current models (Opus 4.6, Sonnet 4.6, Haiku 4.5 — note: no Haiku 4.6 as of April 2026)
  - [claude.com/pricing](https://claude.com/pricing) — Pro $20 / Max 5x $100 / Max 20x $200, all include Claude Code
  - [cursor.com/changelog](https://cursor.com/changelog) — Cursor 3.0 (April 2, 2026): parallel agents, Design Mode, Agent Tabs
  - [cursor.com/docs/models-and-pricing](https://cursor.com/docs/models-and-pricing) — Cursor models list (includes Claude 4.6 Opus/Sonnet — no 4.6 Haiku)
  - [cursor.com/docs/bugbot](https://cursor.com/docs/bugbot) — autonomous PR review, ~78% resolution rate, 44K learned rules
  - Key fact for Cursor comparison: Cursor Agent mode *does* run commands, fix errors autonomously, and handle multi-file edits. The old "Cursor only suggests, Claude Code executes" framing is factually wrong as of 2026. Honest differentiators are *interface/environment* (editor vs terminal/multi-surface), *default context window* (1M for Claude Code with Opus 4.6 vs ~10–15K for Cursor standard Agent mode), and *inline Tab completion* (Cursor has it, Claude Code does not)

## Next Steps

1. `/work` this plan to begin execution
2. The plan's checkboxes are the tracker — they get updated as tasks complete
3. After delivery (April 16), `/compound` to capture what worked and what didn't
