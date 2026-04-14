---
title: "feat: Prework webpage — install, subscribe, clone, preflight"
type: plan
date: 2026-04-14
status: in_progress
brainstorm: null
confidence: medium
---

# feat: Prework Webpage — Implementation Plan

A polished single-page prework guide that walks webinar participants through the five things they must finish **before** the live session: pick a Claude plan, install Claude Code, install Git, clone the webinar repo (which gives them the companion skill), and run a preflight check. Deployed via GitHub Pages from this repo, styled with the Aibility design system reused from the `aibility-pages` sibling.

## Problem Statement

Today, prework is scattered across `level-0-introduction/README.md`, the root `README.md`, the FAQ in the companion skill, and a future pre-webinar email. Three problems result:

1. **Participants arrive unprepared.** Some show up to the 90-minute session with Node.js missing, no Claude account, or unable to clone the repo. Each unprepared participant burns a disproportionate share of Petra's chat-support time during Level 0 and undermines the on-time start of Level 1.
2. **The "six surfaces" message is buried.** The recently corrected install story (desktop app first, web second, CLI for power users) lives in the FAQ but isn't where participants land *before* the webinar. They hit the README first, which still leans CLI.
3. **No single shareable URL.** The pre-webinar email needs one link that says "do these five things and you're ready." Right now there's nothing to link to except a GitHub README — which is intimidating to non-technical participants.

A polished, branded prework page solves all three: one URL, ordered steps, surface-aware install paths, an explicit preflight check at the end, and the same Aibility look participants already associate with the brand.

## Target End State

By the time this plan is complete, participants who open `https://aibilitycz.github.io/claude-code-90-webinar/` (or whatever final Pages URL we land on) see:

- A hero that names what they're about to do and how long it will take (~15 minutes)
- Five ordered steps with progress indication, each step self-contained
- OS-aware install instructions (auto-detected, manually switchable: macOS / Windows / Linux)
- Surface-aware Claude Code install (desktop app default, web alternative, CLI for power users) — leading with the **easiest** path, not the terminal
- One copy-pasteable git command to clone the repo
- A preflight check section with three commands and their expected output, plus a single "you're ready" confirmation
- A troubleshooting block for the four most common blockers (Node not found, npm permissions, git not installed, repo clone fails)
- Aibility visual identity: serif headings (Hedvig Letters), Google Sans Flex body, purple `#5000AB` accents, card components, the rounded blurred header bar — feels like a sibling of `singlecase-claudecode.html` and `cursor-intensive.html` in `aibility-pages/sites/`
- Czech copy throughout (matching webinar audience), with code blocks preserved as-is
- Mobile-responsive (participants will check it on phones)
- Deploys automatically on push to `main` via GitHub Actions

The pre-webinar email links to this page as the single prework instruction.

## Scope and Non-Goals

**In scope:**

- New `site/` directory in this repo containing the prework page (`index.html`, `assets/css/`, `assets/js/`, `assets/img/`)
- Aibility CSS reused from `aibility-pages` (copy approach, documented source)
- GitHub Pages deployment workflow (`.github/workflows/pages.yml`) publishing from `site/` on push to `main`
- Updated pre-webinar email pointing to the new page (default Pages URL — `aibilitycz.github.io/claude-code-90-webinar/`)
- Cross-link from root `README.md` to the deployed page
- Light JavaScript: OS detection, copy-to-clipboard buttons on code blocks, step progress saved to `localStorage` so refresh doesn't reset
- Manual smoke test on macOS, Windows, mobile Safari before announcing

**Non-goals:**

- Replacing `level-0-introduction/README.md` or the cheat sheets (those serve different moments — during and after the session)
- Replacing the companion skill FAQ (the skill stays the in-session helper)
- A full multi-page site, blog, or marketing funnel
- Server-side anything (no analytics endpoints, no backend, no forms — pure static)
- Translation to English (Czech only for v1; English can come later if needed)
- Build tooling (no Vite, no bundler, no npm install — plain HTML/CSS/JS so the repo stays approachable to non-developers who clone it)

## Approach

Four workstreams, sequenced. Total estimated effort: **half a day to a full day**, depending on how much polish we want and whether we register a custom domain.

### Workstream 1 — Foundation (45 min)

- Create `site/` directory at repo root
- Copy `aibility-pages/css/styles.css` and `aibility-pages/css/iconoir.css` into `site/assets/css/`
- Add a one-line attribution comment at the top of `styles.css`: *"Source: aibility-pages — re-pull from sibling repo to update."*
- Copy any required assets (logo, favicon) from `aibility-pages/assets/` and `aibility-pages/favicon.*`
- Create skeleton `site/index.html` with the Aibility header bar, hero, and section scaffold
- Add `.github/workflows/pages.yml` that deploys `site/` to GitHub Pages on push to `main` (uses official `actions/upload-pages-artifact` + `actions/deploy-pages`)
- Enable Pages in the repo settings, point to the workflow
- Verify the empty skeleton deploys to `aibilitycz.github.io/claude-code-90-webinar/` — **this is the smoke test for the deployment path before any content work**

### Workstream 2 — Content (2–3 hours)

Write the page in five vertical sections. Each section is a `.card` or section with a numbered eyebrow ("Krok 1 ze 5") and a clear "hotovo, pokračovat" affordance.

1. **Hero** — *"Připravte se na webinář (asi 15 minut)"* + one-paragraph framing + "Začněte" anchor
2. **Krok 1 — Účet Claude** — three plans summarized (Free / Pro $20 / Max), recommendation: Pro is enough for the webinar and your first weeks, link to claude.com/upgrade
3. **Krok 2 — Nainstalujte Claude Code** — three tabs (Desktop / Web / Terminál), Desktop is the default tab and gets the most prominent treatment. Pull copy directly from `.claude/skills/claude-code-guide/references/faq.md` — *"Jak Claude Code nainstaluju? / Kde ho mám otevřít?"*. This is the single source of truth for install copy.
4. **Krok 3 — Git** — *"Co je Git a proč ho potřebujete?"* (one paragraph, non-technical), then OS-detected install instructions: macOS (Xcode CLI tools), Windows ([git-scm.com](https://git-scm.com)), Linux (apt/dnf one-liner)
5. **Krok 4 — Naklonujte repo** — one git clone command, expected result, *"a teď máte společníka"* explanation linking to what the skill does
6. **Krok 5 — Preflight check** — three commands and expected output:
   - `node --version` → v18+ (or "neinstalovali jste Node, nevadí — ověříme jinak" with `claude --version` as alternative)
   - `git --version` → any version
   - `claude --version` (if CLI) **OR** screenshot of opening the desktop app **OR** screenshot of claude.ai/code loading — the check adapts to the surface the participant chose in Step 2
   - Final affirmation: *"✅ Jste připraveni. Uvidíme se v Zoomu 16. dubna v 10:00."*
7. **Troubleshooting** — accordion with four entries, each pulling its answer from the FAQ:
   - *"`node --version` mi hlásí command not found"*
   - *"`npm install` hlásí permission error"*
   - *"`git clone` hlásí repository not found"*
   - *"Spustil jsem `claude` a nic se nestalo"*

Footer: small Aibility logo, link to webinar page on aibility.cz, link back to GitHub repo.

### Workstream 3 — Polish & interactivity (1–2 hours)

Light JavaScript only — no framework. One file: `site/assets/js/prework.js`.

- **OS detection** on load (`navigator.userAgent` / `navigator.platform`) → highlight the right tab in Step 3 (Git) and Step 2 (Claude Code CLI subsection). Manual override stays available.
- **Copy-to-clipboard buttons** on every `<pre><code>` block, using the existing Aibility button styles
- **Step progress** — `localStorage` flag per step, checkmarks fill in as the participant clicks "hotovo" on each step. Refreshing the page restores the state. This is the "fancy" touch that makes it feel intentional.
- **Smooth scroll** between sections via anchor links
- **Hero grid overlay** — borrow the 60×60 grid CSS pattern from `showcase.html` so the hero has the recognizable Aibility texture

No analytics, no cookies, no consent banner needed.

### Workstream 4 — Verification & rollout (45 min)

- **Smoke test on three surfaces:**
  - macOS Safari + Chrome (Slava)
  - Windows Edge (find a Windows tester or use a VM)
  - iOS Safari (Petra on her phone)
- Walk through every step on a clean machine — actually clone the repo, run the preflight, verify each command produces the expected output. **No claiming success without doing this.**
- Update `README.md` (root) with a prominent banner at the top: *"Účastníte se webináře? Začněte tady → [link]"*
- Update the pre-webinar email template (in `level-0-introduction/` or wherever it lives) to point to the new URL as the single prework instruction
- Announce in the Circle community thread for the webinar cohort
- Tag the commit and note the deployment URL in `00-session-guide.md` so presenters know where to direct stragglers during Level 0

## Critical files

| File | Purpose |
|------|---------|
| `site/index.html` | The page itself |
| `site/assets/css/styles.css` | Aibility design system, copied from sibling |
| `site/assets/css/iconoir.css` | Icon library, copied from sibling |
| `site/assets/js/prework.js` | OS detection, copy buttons, progress tracking |
| `site/assets/img/` | Logo, favicon, OG image |
| `.github/workflows/pages.yml` | Deploy `site/` to GitHub Pages on push to main |
| `README.md` | Add prework banner at top |
| `level-0-introduction/README.md` | Add cross-link to prework page |
| `00-session-guide.md` | Note prework URL in Level 0 section so presenters can redirect stragglers |

## Open Questions

1. **Preflight script (stretch goal)?** A `preflight.sh` / `preflight.ps1` that runs all three checks and prints a single ✅/❌ summary would be more delightful than three separate commands. Worth it, or scope creep? My instinct is **no for v1** — keep the manual commands so participants learn what they're checking for.
2. **English version?** Some participants might be expat-friendly. The webinar is Czech-only, so probably not — but worth confirming with Petra whether anyone in the registered cohort needs English.
3. **Should the desktop app step include screenshots?** Real screenshots are higher-effort but dramatically clearer for non-technical participants. Decision: yes, include screenshots for the desktop install path (Mac + Windows). Source them from a clean install on each OS.
4. **Where does the pre-webinar email currently live?** Need to find it — may be in HubSpot, may be in `level-0-introduction/`, may be a Google Doc Petra owns. Update happens wherever it lives.

## Risks

- **CSS coupling to a sibling repo.** If `aibility-pages/css/styles.css` changes upstream, our copy drifts. Mitigation: documented attribution comment, explicit "re-pull from sibling" instruction, and a quarterly check. Acceptable for a static prework page that ships once.
- **GitHub Pages cold start / propagation.** First deploy can take 5–10 minutes to propagate. Don't announce the URL to participants until the smoke test passes on the live URL, not just locally.
- **Mobile rendering on the preflight section.** Code blocks on narrow screens are notoriously ugly. Test on a real iPhone before shipping. If the code blocks are unreadable on mobile, fall back to "open this on desktop" copy for the preflight step.
- **Six-surfaces messaging consistency.** The page must agree with the FAQ, the session guide opening, and the README. If any of those drift, the participant gets contradictory guidance. Mitigation: pull all install copy from `faq.md` as the single source, and link back to it from the page footer for "more detail."

## Decision required from you

Before I start building:

1. **Approve the `site/` folder location** (vs `docs-site/`, `pages/`, or other)
2. **Screenshots for desktop install: yes/no** (drives ~30 minutes of capture work)
3. **Stretch preflight script: in or out**

Deploy URL is settled: `https://aibilitycz.github.io/claude-code-90-webinar/` — that's what goes into the email.

Once those three are answered, I can start with Workstream 1 and have the empty skeleton deployed within an hour as the smoke test, then move to content.
