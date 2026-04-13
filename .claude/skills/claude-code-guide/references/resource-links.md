# Užitečné odkazy

Ruční výběr zdrojů pro účastníky — co se hodí hned a kam pokračovat dál.

## Oficiální Anthropic

- **Dokumentace Claude Code:** [code.claude.com/docs](https://code.claude.com/docs) — kompletní referenční dokumentace, první místo, kam se podívat
- **Claude.com:** [claude.com](https://claude.com) — hlavní stránka Anthropic, plány, přihlášení
- **Plány a ceny:** [claude.com/pricing](https://claude.com/pricing) — aktuální ceny Pro, Max a Team
- **Modely:** [platform.claude.com/docs/en/about-claude/models/overview](https://platform.claude.com/docs/en/about-claude/models/overview) — seznam aktuálních modelů (Opus, Sonnet, Haiku), kontextová okna, ceny
- **Claude Code na GitHubu:** [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) — issue tracker, příklady, release notes

## Aibility

- **Aibility:** [aibility.cz](https://aibility.cz) — další webináře, kurzy, komunita
- **Circle komunita:** odkaz dostanete v závěru webináře — tam se můžete ptát a sdílet, co jste postavili
- **Cursor webinář:** Aibility pořádá i samostatný úvod do Cursoru, pokud vás zajímá editor-first přístup k AI

## Instalace

- **Node.js:** [nodejs.org](https://nodejs.org) — stáhněte si LTS verzi (18 nebo novější)
- **Claude Code přes npm:** `npm install -g @anthropic-ai/claude-code`
- **Claude Code přes nativní instalátor** (bez npm):
  - macOS/Linux: `curl -fsSL https://claude.ai/install.sh | bash`
  - Windows PowerShell: `irm https://claude.ai/install.ps1 | iex`
- **Claude Code přes Homebrew (macOS):** `brew install --cask claude-code`
- **Claude Code jako desktopová aplikace:** stáhněte z [claude.com](https://claude.com) — bez terminálu, vyžaduje placený plán

## Kde všude Claude Code běží

Stejný engine, stejný CLAUDE.md, stejné MCP servery — jen na různých místech:

- **CLI v terminálu** (to, co ukazujeme na webináři) — hlavní rozhraní
- **Desktopová aplikace** — vizuální diff, paralelní sessions, naplánované úkoly
- **Web:** [claude.ai/code](https://claude.ai/code) — žádná instalace, běží v prohlížeči
- **Claude iOS aplikace** — dlouho běžící úkoly, vzdálené řízení terminálu
- **Rozšíření pro VS Code** — inline diff, @-mentions, plán k přečtení před spuštěním
- **Plugin pro JetBrains (beta)** — IntelliJ, PyCharm, WebStorm a další

## Materiály k webináři (na doma)

- **Cheat sheet — Vaše prvních 30 minut:** `cheat-sheet/claude-code-quickstart-cs.md` (v tomto repozitáři)
- **Level 0–3 materiály:** `level-0-introduction/`, `level-1-beginner/`, `level-2-intermediate/`, `level-3-advanced/` (v tomto repozitáři)

## MCP (Model Context Protocol)

- **MCP oficiálně:** [modelcontextprotocol.io](https://modelcontextprotocol.io) — specifikace, servery, dokumentace
- **Anthropic MCP průvodce:** [code.claude.com/docs/en/mcp](https://code.claude.com/docs/en/mcp) — jak MCP nainstalovat a používat v Claude Code

## Komunita

- **Aibility Circle:** odkaz v závěru webináře
- **Anthropic Discord:** (pokud existuje — odkaz v dokumentaci)
- **Reddit r/ClaudeAI:** neoficiální komunitní diskuze

## Související nástroje (pro kontext)

- **Cursor:** [cursor.com](https://cursor.com) — AI editor kódu (Agent mód, Tab completion). Doplněk pro ty, kdo chtějí plnohodnotné IDE.
- **OpenAI Codex CLI:** [openai.com](https://openai.com) — přímý protějšek Claude Code od OpenAI. Podobná filosofie: autonomní agent v terminálu.

## Když něco nefunguje

První místo, kam se podívat, je `faq.md` v téhle složce. Když tam chyba není, napište do Circle komunity, nebo se ozvěte Aibility podpoře.
