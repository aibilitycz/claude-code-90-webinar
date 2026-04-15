# Claude Code vs Cursor vs ChatGPT

> Vizuální one-pager pro sdílení obrazovky (segment 5:00–7:00)

## Srovnání

| | ChatGPT | Cursor | Claude Code |
|---|---------|--------|-------------|
| **Typ** | Chatbot | AI-augmented IDE + agent | Editor-agnostický agent |
| **Kde běží** | Web, mobil, desktop | Cursor IDE, Cursor CLI, background agents, mobil, Slack | CLI, desktop, web, iOS, VS Code, JetBrains |
| **Vidí projekt** | Ne | Ano | Ano |
| **Spouští příkazy** | Ne | Ano | Ano |
| **Modely** | Pouze GPT | Claude, GPT, Gemini (výběr) | Pouze Claude (+ MCP) |
| **Inline doplňování** | Ne | Ano (Tab) | Ne |
| **Rozšiřitelnost** | Custom GPTs | Rules + MCP | CLAUDE.md + skills + pluginy + MCP + hooks |
| **Cenový model** | Vlastní předplatné | Vlastní předplatné s usage poolem | Součástí Claude Pro/Max nebo přes API |
| **Těžiště workflow** | Chat | IDE, interaktivní | CLI-first, skriptovatelné, CI/automatizace |

## Klíčové body

1. **V dubnu 2026 umí Cursor i Claude Code skoro to samé.**
   Oba jsou autonomní agenti, oba čtou projekt, oba spouští příkazy, oba používají stejné modely (Claude Opus/Sonnet) a tím pádem i stejně velké kontextové okno. Staré srovnání "Cursor jen pomáhá, Claude Code provádí" už dávno neplatí.

2. **Rozdíl je v designové filozofii, ne v schopnostech.**
   Cursor je **fork VS Code** — IDE, do kterého je AI vestavěné. Claude Code je **editor-agnostický** — běží v terminálu, desktopu, webu, iOS, nebo jako plugin do jakéhokoli editoru. Cursor má taky CLI a background agents, Claude Code má taky plugin do VS Code — překryv je velký.

3. **Model a ekosystém.**
   Cursor nabízí výběr (Claude, GPT, Gemini). Claude Code je Claude-only, ale za to má bohatší rozšíření (skills, pluginy, hooks) a je napojený přímo na Anthropic účet.

4. **ChatGPT je jiná kategorie.**
   Nevidí vaše soubory, nespouští příkazy, neopravuje chyby. Je to chat — hodí se na jiné věci.

5. **Codex CLI od OpenAI funguje na stejném principu jako Claude Code.**
   Pokud vám tenhle způsob práce sedne, stojí za to znát oba.

6. **Mnoho profesionálů používá oba — Cursor i Claude Code.**
   Není to buď/anebo. Cursor v IDE, Claude Code v terminálu nebo na pozadí.

---

> **Podrobnosti:** viz `level-0-introduction/README.md` — sekce "Claude Code vs Cursor vs ChatGPT"
