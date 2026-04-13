# Claude Code 90-min Webinar

Repository for the 90-minute **"Intro do Claude Code"** webinar delivered by Aibility — a live-demo Zoom session teaching non-technical professionals (marketers, PMs, entrepreneurs, creatives) how to use Claude Code.

## Repo Structure

```
claude-code-90-webinar/
├── CLAUDE.md                       # This file
├── README.md                       # Participant-facing overview
├── 00-session-guide.md             # Lecturer runbook — minute-by-minute script
├── level-0-introduction/           # Intro + install (15 min)
├── level-1-beginner/               # First task (20 min)
├── level-2-intermediate/           # Workflow showcase (25 min)
├── level-3-advanced/               # CLAUDE.md, MCP, advanced (15 min)
├── cheat-sheet/                    # Post-webinar quickstart guides (CS + EN)
├── skills/
│   └── claude-code-guide/          # Companion skill for participants
└── docs/
    ├── brainstorms/                # Design decisions, rationale
    └── plans/                      # Implementation plans
```

## Participant Journey

| Phase | What the participant does | Supporting material |
|-------|--------------------------|---------------------|
| Before webinar | Installs Node.js, creates Anthropic account | Pre-webinar email |
| Minute 0–15 | Watches install demo, clones repo, activates companion skill | `level-0-introduction/` |
| Minute 15–30 | Watches Level 1 demo | `level-1-beginner/` |
| Minute 30–38 | **Try Moment #1** — builds something themselves | Skill provides prompts + help |
| Minute 38–58 | Watches Level 2 demos | `level-2-intermediate/` |
| Minute 58–66 | **Try Moment #2** — builds second thing | Skill provides prompts + help |
| Minute 66–78 | Watches Level 3 advanced demos | `level-3-advanced/` |
| Minute 78–90 | Q&A + closing | — |
| After webinar | Follows Quick Start guide for first real project | `cheat-sheet/` |

## Key Files

| File | Purpose | Audience |
|------|---------|----------|
| `README.md` | Course overview, entry point for the repo | Participants + team |
| `00-session-guide.md` | Minute-by-minute lecturer runbook with co-teaching notes | Presenters only |
| `level-*/README.md` | Per-level content and exercises | Participants |
| `cheat-sheet/*.md` | "First 30 minutes" post-webinar guides | Participants |
| `skills/claude-code-guide/SKILL.md` | Companion skill trigger + body | Claude Code session |
| `docs/brainstorms/` | Design rationale for major decisions | Team (internal) |
| `docs/plans/` | Implementation tracking | Team (internal) |

## Language Convention

- **Participant-facing content** (READMEs, session guide, cheat sheets, level content, skill body): **Czech**
- **Internal docs** (this file, brainstorms, plans): **English** — following the aibility-pact convention
- **Code blocks and commands**: preserve as-is regardless of surrounding language

Internal reference to the series name: "Claude Code masterclass" refers to the structural pattern (4-level format shared with `cursor-masterclass`). Participant-facing materials always say **"Intro do Claude Code"** — this is what participants paid for on aibility.cz.

## Presenter Team

| Role | Who | Responsibility |
|------|-----|---------------|
| Demo driver | Slava (Head of Agent Relations) | Hands on keyboard, runs prompts, narrates technical flow |
| Context lead | Ondřej (CTO) | Adds business framing, reacts, asks audience-voice questions, handles meta opening |
| Facilitator | Petra | Manages chat, runs polls, surfaces Try Moment wins, triages stuck participants |

The presenters co-teach — both visible and audible throughout all 90 minutes, not tag-teaming. See `00-session-guide.md` for handoff anchors.

## Key Commands

```bash
# Participants clone and activate the companion skill
git clone https://github.com/aibility/claude-code-90-webinar.git
cd claude-code-90-webinar
claude                              # Skill auto-activates via SKILL.md

# Lecturers verify pre-webinar setup
claude --version
node --version
```

## Task Management

Work is tracked via plan checkboxes in `docs/plans/`. The current plan is `docs/plans/2026-04-13-feat-webinar-redesign-plan.md`. Plan status in frontmatter: `approved` → `in_progress` → `complete`.

Brainstorms in `docs/brainstorms/` capture design rationale before plans. Never skip straight to planning if the problem is ambiguous.

## Delivery

- **Date:** April 16, 2026, 10:00 UTC
- **Format:** Zoom webinar, 90 minutes
- **Price:** 990 CZK
- **Registration:** https://aibility.cz/webinare/intro-do-claude-code
- **Includes:** Live session, recording access, Circle community membership

## Related Projects

| Project | Path | Relationship |
|---------|------|-------------|
| cursor-webinar | `../../aibility-pact/1_Projects/cursor-webinar/` | 120-min Cursor intro (sibling format) |
| cursor-masterclass | `../../aibility-pact/1_Projects/cursor-masterclass/` | 8-hour Cursor hands-on workshop (inspired the 4-level structure) |
| aibility-pact | `../../aibility-pact/` | Parent workspace with team-wide conventions |
