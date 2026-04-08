# Claude Code Masterclass — Webinar Structure Brainstorm

**Date:** 2026-04-08
**Status:** Decided
**Inspired by:** cursor-masterclass (same format, adapted for Claude Code)

## What We're Building

A 90-minute online webinar (Zoom) that demystifies Claude Code for non-technical users — marketers, project managers, entrepreneurs, and creatives. The format is **live demo with Q&A**, not hands-on workshop. Participants watch the instructor install Claude Code, give it tasks, and build real things live. They leave understanding what Claude Code is, why it matters, and how to start using it themselves.

**Language:** Czech
**Audience:** Level 2 — already use AI assistants, want to understand the Claude Code hype
**No prerequisites:** No coding, no terminal knowledge needed

## Why This Approach

### Progressive Levels (matching cursor-masterclass)
- Consistent brand across masterclasses (Cursor, Claude Code, future tools)
- Clear learning progression even in demo format
- Easy for returning attendees to navigate
- Materials can be reused/adapted

### Demo Format (not hands-on)
- 90 minutes is too short for hands-on + troubleshooting terminal issues
- Lower risk — instructor controls the flow
- Participants get inspired, install later on their own
- Q&A handles individual questions

## Key Decisions

### 1. Structure: 4-Level Progressive + Q&A
| Section | Duration | Focus |
|---------|----------|-------|
| Level 0: Introduction & Install | 15 min | What is Claude Code, why it's different, live terminal install |
| Level 1: First Task | 20 min | Give Claude Code its first task, watch the agent work |
| Level 2: Workflow Showcase | 30 min | Web app, research, automation, data — multiple workflow demos |
| Level 3: Advanced | 15 min | CLAUDE.md, MCP servers, custom instructions, power-user path |
| Q&A + Next Steps | 10 min | Questions, resources, community, what to try first |

### 2. Terminal Learning Curve: Minimal intro (5 min within Level 0)
- Quick "this is terminal, type here, press enter" — nothing more
- Claude Code itself handles the complexity — that's the point
- Pre-webinar prep email covers terminal basics for anxious participants

### 3. First Project: Simple Web App
- High wow-factor for non-coders ("I just made a website by talking to a terminal")
- Visual, tangible, shareable
- Claude Code excels at this use case

### 4. Workflow Showcase: Multiple Options
Level 2 shows diverse workflows to appeal to different roles:
- **Web app build** (main demo — impressive visual result)
- **Research & report** (useful for PMs, marketers)
- **Automation** (file processing, data tasks)
- **Content generation** (marketing, presentations)

The instructor picks 3-4 based on audience composition, showing variety of what Claude Code can do.

### 5. Advanced Section: Yes, included
- CLAUDE.md for custom instructions (how to "train" Claude Code for your style)
- MCP servers as extensibility (connect to your tools)
- Positioned as "what's next after you get comfortable"
- 15 min — enough to show the depth exists, not overwhelm

### 6. File Structure (matching cursor-masterclass)
```
claude-code-masterclass/
  README.md                    — Course overview & navigation
  00-session-guide.md          — Facilitator guide with 90-min timing
  level-0-introduction/
    README.md                  — What is Claude Code, terminal basics, installation
  level-1-beginner/
    README.md                  — First task, watching the agent work, understanding output
  level-2-intermediate/
    README.md                  — Workflow showcase: web, research, automation, content
  level-3-advanced/
    README.md                  — CLAUDE.md, MCP, advanced configuration
  cheat-sheet/
    claude-code-cheatsheet-cs.md  — Czech quick reference
    claude-code-cheatsheet-en.md  — English quick reference
```

### 7. Demo App: Flexible (instructor's choice)
- Document 2-3 options in session guide (portfolio, landing page, interactive tool)
- Instructor picks based on audience composition
- No prescribed single demo — flexibility reduces risk

### 8. Tool Comparison: Brief positioning (2 min in Level 0)
- Quick "Claude Code vs Cursor vs ChatGPT" context
- Where Claude Code fits in the AI tools landscape
- Cross-references other masterclasses

### 9. Pricing: Included
- Cover Anthropic Max plan, API credits, typical costs
- Help participants understand the investment before they try it
- Include in Level 0 or as part of installation section

### 10. Backup Plan: None
- Trust the live demo, troubleshoot live if issues arise
- Live debugging is itself educational ("see how the instructor solves problems")

### 11. Key Features to Demo: All equally
- Autonomous file creation (the "magic" moment)
- Self-correction loop (why agents > chat)
- Multi-step reasoning (the "thinking" aspect)
- Weave all three naturally into demos throughout

### 12. Cheat Sheet: Full Quick-Start Guide
- Not just a reference card — a standalone "Your first 30 minutes with Claude Code" mini-guide
- Includes CLI commands, example prompts, and step-by-step first session walkthrough
- Participants can follow it independently after the webinar

### 13. Post-Webinar: Resource List + Community Links
- Curated links: Anthropic docs, Claude Code GitHub, community
- Cross-references to other masterclasses
- Simple, low-maintenance, no ongoing content needed

## Open Questions

*None — all key decisions resolved through discussion.*

## Content Notes

### What makes Claude Code different from Cursor (key messaging):
- **Agent-first:** Claude Code works autonomously, not just autocomplete
- **Terminal-native:** No GUI, pure command line — intimidating but powerful
- **Full autonomy:** Reads files, writes code, runs commands, fixes errors on its own
- **No IDE needed:** Works anywhere you have a terminal

### Key moments to design for maximum impact:
1. **The "wow" moment:** When Claude Code starts autonomously creating files, running commands, fixing its own errors — the audience sees it's not just chat
2. **The "I could do this" moment:** When installation turns out to be just one command
3. **The "this is useful for ME" moment:** When a workflow matches their actual job
