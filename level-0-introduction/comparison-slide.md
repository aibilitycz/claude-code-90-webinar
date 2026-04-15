# Claude Code vs Cursor vs ChatGPT

> Vizuální one-pager pro sdílení obrazovky (segment 5:00–7:00)

## Skutečné rozdíly (vše ostatní je prakticky stejné)

Mezi Cursor a Claude Code jsou v roce 2026 **tři reálné rozdíly**:

1. **Kde AI žije** — Cursor = vlastní IDE (fork VS Code), těžiště v editoru. Claude Code = editor-agnostický (terminál, desktop, web, iOS, plugin do VS Code/JetBrains).
2. **Volba modelu** — Cursor: Claude / GPT / Gemini / další. Claude Code: pouze Claude.
3. **Cenový model** — Cursor: vlastní předplatné u Cursor Inc. Claude Code: součást předplatného Claude Pro/Max u Anthropicu (nebo API).

Všechno ostatní (CLI, cloud agenti, skills, hooks, MCP, velikost kontextu, autonomní provádění) je v roce 2026 v podstatě stejné.

## Srovnání

| | ChatGPT | Cursor | Claude Code |
|---|---------|--------|-------------|
| **Typ** | Chatbot | AI-augmented IDE + agent | Editor-agnostický agent |
| **Kde běží** | Web, mobil, desktop | Cursor IDE, Cursor CLI, cloud agents (web), Slack | CLI, desktop, web, iOS, VS Code, JetBrains |
| **Vidí projekt** | Ne | Ano | Ano |
| **Spouští příkazy** | Ne | Ano | Ano |
| **Modely** | Pouze OpenAI (GPT) | Claude, GPT, Gemini (výběr) | Pouze Claude |
| **Inline doplňování** | Ne | Ano (Tab) | Ne |
| **Rozšiřitelnost** | Custom GPTs | Rules + skills + MCP + hooks + VS Code extensions | CLAUDE.md + skills + pluginy + MCP + hooks |
| **Cenový model** | Vlastní předplatné | Vlastní předplatné s usage poolem | Součástí Claude Pro/Max nebo přes API |
| **Těžiště workflow** | Chat | Interaktivní práce v IDE | CLI a skriptování napříč platformami |

## Co kde hledat

| Potřeba / situace | Kde to najdete |
|-------------------|----------------|
| AI přímo v IDE prostředí | Cursor (nativně), Claude Code (plugin VS Code / JetBrains) |
| AI v terminálu | Claude Code (CLI), Cursor (CLI) |
| AI na pozadí v cloudu | Claude Code (web), Cursor (cloud agents) |
| AI v iOS aplikaci | Claude Code (iOS), Cursor (web/PWA) |
| Výběr mezi Claude, GPT, Gemini | Cursor |
| Pouze Claude + MCP, skills, hooks, pluginy | Claude Code |
| Součást Claude Pro/Max účtu | Claude Code |
| Samostatné předplatné s volbou modelu | Cursor |
| Chat bez přístupu k souborům a příkazům | ChatGPT |

## Další kontext

- **ChatGPT je jiná kategorie nástroje** — nevidí soubory, nespouští příkazy.
- **Codex CLI od OpenAI** funguje na stejném principu jako Claude Code — příbuzný nástroj.

---

> **Podrobnosti:** viz `level-0-introduction/README.md` — sekce "Claude Code vs Cursor vs ChatGPT"
