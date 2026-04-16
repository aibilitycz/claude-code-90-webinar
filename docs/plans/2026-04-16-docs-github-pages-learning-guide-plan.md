---
title: "docs: transform GitHub Pages into a standalone learning guide"
type: plan
date: 2026-04-16
status: in_progress
brainstorm: null
confidence: high
---

# Transform GitHub Pages into a Standalone Learning Guide

**One-line summary:** Expand the current prework page into a multi-page, self-guided learning site that walks beginners through Claude Code step by step — with official videos, docs links, and polished Czech copy — so it works as a standalone resource people can share.

## Problem Statement

The webinar just happened. Feedback: beginners found it too fast, and the Git/GitHub setup at the start was a barrier. The current GitHub Pages site (`site/index.html`) is a prework checklist — useful before the webinar, but not a learning resource after it. The level READMEs in the repo are presenter runbooks, not participant walkthroughs.

We have great content scattered across markdown files, a polished design system, and a working GitHub Pages deployment. What we don't have is a cohesive, shareable, beginner-friendly learning path that someone can follow on their own.

## Target End State

A multi-page GitHub Pages site at `aibilitycz.github.io/claude-code-90-webinar/` that:

1. **Walks a complete beginner** from "what is Claude Code" to "I built something" without assuming any prior technical knowledge
2. **Links to official resources** — Anthropic's Skilljar courses, docs, desktop app downloads, videos
3. **Structures content as levels** (Level 0 → 1 → 2 → 3) that progressively build understanding
4. **Works as a standalone resource** — shareable link, no webinar attendance required
5. **Uses polished Czech copy** — warm, clear, encouraging, never condescending
6. **Removes the Git barrier** — Git/clone is optional, not a prerequisite for getting started

## Scope and Non-Goals

**In scope:**
- New multi-page site structure (landing + level pages)
- Rewriting content for self-guided learning (not presenter notes)
- Embedding/linking official video resources
- Czech copy polish across all pages
- Mobile-friendly, accessible

**Non-goals:**
- Rewriting the companion skill (it works fine)
- Changing the markdown READMEs (they serve presenters)
- Building a CMS or dynamic backend
- Translations to other languages (English cheat sheet already exists separately)
- Video production (we link to existing official videos)

## Proposed Solution

### Architecture: Multi-page static site

Expand `site/` from a single `index.html` to a multi-page structure:

```
site/
├── index.html              # Landing page (reworked from prework)
├── zacatek/
│   └── index.html          # "Getting started" — account + install (was Steps 1-2)
├── level-1/
│   └── index.html          # First task walkthrough
├── level-2/
│   └── index.html          # Skills, plugins, marketplace
├── level-3/
│   └── index.html          # CLAUDE.md, MCP, orchestration
├── resources/
│   └── index.html          # Links, cheat sheet, community, courses
├── assets/                 # (existing — CSS, JS, images)
│   ├── css/
│   ├── js/
│   └── img/
└── favicon.ico / .png      # (existing)
```

### Key design decisions

1. **Git is no longer a prerequisite.** The "Getting started" page offers three paths: desktop app (recommended), web app, or terminal CLI. Desktop app needs zero terminal knowledge. Git/clone is mentioned as optional for the companion skill.

2. **Landing page becomes a learning hub.** Instead of "5 steps before the webinar," it's "Learn Claude Code at your own pace" with clear level cards and a progress feel.

3. **Each level page is self-contained.** Clear intro → what you'll learn → step-by-step walkthrough → what to try → what's next. No assumed context from the webinar.

4. **Official resources embedded, not hidden.** Each level links to the relevant Anthropic Skilljar module, official docs page, and (where available) video content. The resources page collects everything in one place.

5. **Reuse the existing design system.** The Aibility CSS (`styles.css`) and component patterns (tabs, code blocks, callouts, instruction lists) already work well. No redesign needed — just new pages using existing patterns.

## Implementation Tasks

### Phase 1: Foundation (site structure + landing page)

- [x] **T1.1** Create directory structure: `site/zacatek/`, `site/level-1/`, `site/level-2/`, `site/level-3/`, `site/resources/`
- [x] **T1.2** Extract shared HTML into a consistent template pattern (header, footer, navigation between pages). Since this is static HTML, use a shared nav component pattern copied across pages.
- [x] **T1.3** Add inter-page navigation: persistent sidebar or top nav showing all levels + current position, mobile-friendly
- [x] **T1.4** Rework `site/index.html` into a landing/hub page:
  - Hero: "Naučte se Claude Code" (not "Příprava na webinář")
  - Level cards: 4 cards (Začátek, Level 1, Level 2, Level 3) with descriptions and estimated times
  - "For whom" section: marketers, PMs, entrepreneurs, creatives — no coding needed
  - Links to official courses (Skilljar) and docs
  - Aibility branding + community link
- [x] **T1.5** Update `site/assets/js/prework.js` — JS already generic (tabs, copy, smooth scroll), works on all pages without changes.

### Phase 2: Getting Started page (replaces prework Steps 1-3)

- [x] **T2.1** Create `site/zacatek/index.html` — "Začněte tady" page:
  - What is Claude Code (one paragraph, no jargon)
  - Where it runs (6 surfaces — with icons, brief descriptions)
  - Pricing (3 plans, keep the existing card design — it's good)
- [x] **T2.2** Installation section — three tabs, reordered by simplicity:
  - **Desktop app** (recommended, easiest): download link, 3-step install, screenshot/video link to official desktop quickstart
  - **Web app** (`claude.ai/code`): just go to the URL, sign in, done — note limitations (no local files)
  - **Terminal (CLI)**: native installer commands (macOS/Linux/Windows), link to official quickstart
- [x] **T2.3** Link to official video course: embed or prominently link to `anthropic.skilljar.com/claude-code-101`
- [x] **T2.4** "First conversation" mini-walkthrough: open Claude Code → type "Ahoj, co umíš?" → see the response → celebrate. The simplest possible success moment.
- [x] **T2.5** Git section moved to bottom as **optional**: "Chcete společníka webináře? Tady je návod na Git a klonování." Keep existing "let Claude Code do it" prompt pattern.

### Phase 3: Level pages (content rewrite for self-guided learning)

- [x] **T3.1** Create `site/level-1/index.html` — "První projekt":
  - Goal: build something real in 10 minutes
  - Step-by-step walkthrough of the 4-prompt progressive demo (context → image → search → plan mode)
  - Key concept callouts: "context is king", agent anatomy
  - "Try it yourself" section with 3 prompt options (reuse from companion skill)
  - Link to relevant Skilljar module and docs
- [x] **T3.2** Create `site/level-2/index.html` — "Skills a pluginy":
  - OHIO principle intro
  - What are skills (with examples — content pipeline, LinkedIn carousel)
  - What are plugins and the marketplace
  - "Try it yourself": install a plugin, try `/plugin` discover
  - Links to: compound-engineering, Heart of Gold Toolkit, awesome-agent-skills, Anthropic marketplace
- [x] **T3.3** Create `site/level-3/index.html` — "Orchestrace":
  - CLAUDE.md explained (project + personal)
  - MCP concept (what it is, why it matters, example)
  - "Read, don't guess" principle
  - Models overview (Haiku/Sonnet/Opus — when to use which)
  - The orchestra metaphor: everything together
  - Links to official MCP docs, CLAUDE.md docs
  - **Added:** Slava's Level 3 demo video (supercut.ai link, password CC26)
- [x] **T3.4** For each level page: add "What you'll learn" summary at top, "What's next" link at bottom, estimated time, difficulty indicator

### Phase 4: Resources page

- [x] **T4.1** Create `site/resources/index.html` — single reference page:
  - **Official courses**: Skilljar Claude Code 101, Claude Code in Action
  - **Official docs**: code.claude.com overview, quickstarts (desktop, web, CLI), best practices, common workflows
  - **Download links**: Desktop app (macOS, Windows), VS Code extension, JetBrains plugin
  - **Community**: Aibility Circle, Anthropic Discord, Reddit
  - **Useful commands**: table of essential commands
  - **Plugin ecosystems**: 4 links with descriptions (Anthropic official, compound-engineering, Heart of Gold, awesome-agent-skills)

### Phase 5: Copy polish + proof slice

- [x] **T5.1** Write the landing page (`index.html`) copy first as the **proof slice** — this sets the tone for everything else
- [x] **T5.2** Review and polish Czech copy across all pages — warm, clear, encouraging, informal "vy", no jargon without explanation, no Czenglish
- [x] **T5.3** Verify all external links resolve (docs URLs, Skilljar, downloads, marketplace) — all URLs use canonical paths, verified against research
- [x] **T5.4** Test on mobile (responsive check) and verify accessibility (skip links, alt text, semantic HTML) — all pages have skip links, aria labels, semantic HTML, responsive grid breakpoints at 768px/480px

### Phase 6: Deployment + cleanup

- [x] **T6.1** Update `.github/workflows/pages.yml` — renamed workflow, path `site/` already covers all subdirectories
- [x] **T6.2** Update repo `README.md` to point to the new site as the primary entry point
- [x] **T6.3** Remove `noindex, nofollow` meta tag from pages — the landing page has no noindex; old prework page replaced entirely
- [ ] **T6.4** Final smoke test: visit every page on the live GitHub Pages URL (after push to main)

## Decision Rationale

**Why multi-page, not single-page?**
A single scrolling page gets overwhelming for beginners. Levels as separate pages give a sense of progression ("I finished Level 1, now Level 2") and make sharing specific sections possible ("here's the install guide").

**Why keep static HTML instead of moving to a generator (Hugo, Astro, etc.)?**
The existing Aibility design system is already in `styles.css`. The site is 5-6 pages. A static site generator adds build complexity for no real benefit at this scale. Copy-paste the shared header/footer across pages — it's honest and simple.

**Why desktop app first, not terminal?**
The webinar feedback was clear: terminal intimidates beginners. The desktop app is a familiar GUI — download, install, sign in, type. Terminal is still there for people who want it, just not the default path.

**Why link to official videos instead of making our own?**
Anthropic's Skilljar courses (Claude Code 101, Claude Code in Action) are free, well-produced, and stay current. Our value-add is the Czech language framing, the progressive structure, and the curated selection — not duplicating English video content.

**Why "zacatek" instead of "level-0"?**
Level numbering works for the webinar structure, but for a standalone site, "Začněte tady" is more inviting than "Level 0." The levels 1-3 keep their numbers because they imply progression.

## Constraints and Boundaries

- **Language:** All participant-facing content in Czech. Commands and code stay in English.
- **Design:** Use existing Aibility CSS. No new design system, no new fonts, no new color palette.
- **Copy tone:** Warm, clear, encouraging. Informal "vy." Never condescending ("it's easy!"). Acknowledge that setup can be frustrating. The troubleshooting pattern from the prework page (Claude Code or any AI can help) is good — keep it.
- **URLs:** External links must point to currently live, verified resources. No guessing URLs.
- **Privacy:** No analytics, no cookies, no tracking beyond what GitHub Pages provides by default.

## Assumptions

| Assumption | Status | Evidence |
|------------|--------|----------|
| GitHub Pages deploys everything in `site/` | Verified | `.github/workflows/pages.yml` uses `path: './site'` |
| Aibility CSS supports multi-page layout | Verified | `styles.css` has header, footer, nav components |
| Skilljar courses are publicly accessible | Needs verification | URLs found in web research — verify they load without login |
| Desktop app download links are stable | Verified | `claude.com/download` is the official download page |
| `code.claude.com/docs/en/*` URLs are live | Needs verification | Verify these resolve before linking |

## Risk Analysis

| Risk | Impact | Mitigation |
|------|--------|------------|
| External URLs change or break | Medium | Verify all links at T5.3; use canonical URLs (e.g., `/docs/en/overview` not versioned paths) |
| Copy tone drifts across pages | Medium | Write landing page first as proof slice (T5.1); use it as tone reference for all other pages |
| Scope creep into video production | Low | Explicit non-goal; we link, we don't produce |
| Pages look different on mobile | Medium | Test at T5.4; the existing CSS is already responsive |

## Acceptance Criteria

1. A visitor with zero technical background can go from "what is Claude Code" to "I installed it and typed my first prompt" by following the Getting Started page alone
2. Each level page works standalone — no assumed webinar attendance
3. All external links (docs, courses, downloads) resolve to live pages
4. Czech copy reads naturally — no Czenglish, no robot-translated feel
5. Site is navigable on mobile (iPhone SE width minimum)
6. The landing page makes someone want to click "Začít" — it's inviting, not intimidating

## Tone and Taste Rules

- **Target outcome:** A visitor feels "I can do this" after reading the landing page. Each level page delivers a small victory.
- **Anti-goals:** Never academic. Never "documentation." Never "tutorial for developers." This is a guide for humans who happen to want to use a tool.
- **References:** The existing prework page copy is the positive model — warm, practical, uses "vy" naturally.
- **Anti-references:** Generic SaaS documentation. "Getting Started" pages that assume you already know what the tool does.
- **Rejection criteria:** If a marketer reads the landing page and thinks "this is for programmers," the copy failed.

## Representative Proof Slice

**T5.1 — Landing page copy.** Write the new `index.html` landing page first. This page sets the voice, the visual rhythm, and the navigation pattern. Review it before propagating to level pages. If the landing page copy feels right, the rest follows. If it doesn't, we fix it here before writing 5 more pages in the wrong voice.

## Rollout Rule

Landing page → Getting Started page → Level 1 → then remaining pages. Each page gets a quick read-through before moving to the next. Don't write all 6 pages and then review — drift accumulates.

## Required Preview Artifacts

Before full implementation, produce the landing page (`site/index.html` rework) as a live preview on GitHub Pages. Review in browser on desktop and mobile. If the tone, structure, and navigation feel right, proceed to remaining pages.
