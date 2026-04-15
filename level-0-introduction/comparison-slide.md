# Claude Code vs Cursor vs ChatGPT

> Vizuální one-pager pro sdílení obrazovky (segment 5:00–7:00)

## Skutečné rozdíly (vše ostatní je prakticky stejné)

Mezi Cursor a Claude Code jsou v roce 2026 **tři reálné rozdíly**:

1. **Kde AI žije** — Cursor = vlastní IDE (fork VS Code). Claude Code = editor-agnostický (terminál, desktop, web, iOS, plugin do VS Code/JetBrains).
2. **Volba modelu** — Cursor: Claude/GPT/Gemini/další. Claude Code: pouze Claude.
3. **Cenový model** — Cursor: vlastní předplatné. Claude Code: součást Claude Pro/Max účtu.

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
| **Těžiště workflow** | Chat | IDE, interaktivní | CLI-first, skriptovatelné, CI/automatizace |

## Kdy co volit

- **Už platím Claude Pro/Max, pracuji v terminálu / na webu / v iOS** → **Claude Code** (v ceně, pasuje k workflow)
- **Už žiju v VS Code, chci AI přímo v editoru s volbou modelu** → **Cursor** (nejmenší krok od toho, co používáte)
- **Nejsem vývojář, chci jen něco rychle vytvořit** → **Claude Code** (web, bez instalace) nebo **ChatGPT** (pokud nepotřebujete, aby AI viděla soubory)
- **Chci oboje** → legitimní volba, nejsou to přímí konkurenti

## Další kontext

- **ChatGPT je jiná kategorie** — nevidí soubory, nespouští příkazy. Chat, ne agent.
- **Codex CLI od OpenAI** funguje na stejném principu jako Claude Code — příbuzný nástroj.

---

> **Podrobnosti:** viz `level-0-introduction/README.md` — sekce "Claude Code vs Cursor vs ChatGPT"
