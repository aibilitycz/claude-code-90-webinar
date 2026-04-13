# Resource Links

Kurátorovaný seznam zdrojů pro účastníky webináře — co je užitečné hned, a kam pokračovat dál.

## Oficiální Anthropic zdroje

- **Claude Code dokumentace:** [code.claude.com/docs](https://code.claude.com/docs) — kompletní referenční dokumentace, první místo, kam se podívat
- **Claude.com:** [claude.com](https://claude.com) — hlavní stránka Anthropic, plány, ceník, přihlášení
- **Plány a cena:** [claude.com/pricing](https://claude.com/pricing) — aktuální ceny Pro, Max a Team plánů
- **Modely:** [platform.claude.com/docs/en/about-claude/models/overview](https://platform.claude.com/docs/en/about-claude/models/overview) — seznam aktuálních modelů (Opus, Sonnet, Haiku), kontext, ceny
- **Claude Code GitHub:** [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) — issue tracker, příklady, release notes

## Aibility

- **Aibility:** [aibility.cz](https://aibility.cz) — další webináře, masterclassy, komunita
- **Circle komunita:** odkaz dostanete v závěru webináře — zde můžete pokládat další otázky a sdílet, co jste postavili
- **Sesterský webinář Cursor:** pokud vás zajímá i editor-first přístup k AI, Aibility pořádá samostatný webinář o Cursoru

## Instalační zdroje

- **Node.js:** [nodejs.org](https://nodejs.org) — stažení, doporučujeme LTS verzi (18 nebo novější)
- **Claude Code (npm):** `npm install -g @anthropic-ai/claude-code`
- **Claude Code (native installer, bez npm):**
  - macOS/Linux: `curl -fsSL https://claude.ai/install.sh | bash`
  - Windows PowerShell: `irm https://claude.ai/install.ps1 | iex`
- **Claude Code (Homebrew, macOS):** `brew install --cask claude-code`
- **Claude Code (desktop aplikace):** stáhnout z [claude.com](https://claude.com) — bez terminálu, vyžaduje placený plán

## Rozšíření a povrchy Claude Code

Claude Code běží na více místech — všechny sdílejí stejný engine, CLAUDE.md a MCP servery:

- **CLI v terminálu** (to, co ukazujeme na webináři) — hlavní rozhraní
- **Desktop aplikace** — vizuální diff, paralelní sessions, naplánované úkoly
- **Web:** [claude.ai/code](https://claude.ai/code) — žádná instalace, běží v prohlížeči
- **Claude iOS app** — dlouhé úkoly, vzdálené řízení terminálu
- **VS Code rozšíření** — inline diffs, @-mentions, plán k přečtení před spuštěním
- **JetBrains plugin (beta)** — IntelliJ, PyCharm, WebStorm a další

## Učící materiály (po webináři)

- **Cheat sheet — Vaše prvních 30 minut:** `cheat-sheet/claude-code-quickstart-cs.md` (v tomto repozitáři)
- **Level 0–3 materiály:** `level-0-introduction/`, `level-1-beginner/`, `level-2-intermediate/`, `level-3-advanced/` (v tomto repozitáři)

## MCP (Model Context Protocol)

- **MCP oficiální stránka:** [modelcontextprotocol.io](https://modelcontextprotocol.io) — specifikace, servery, dokumentace
- **Anthropic MCP průvodce:** [code.claude.com/docs/en/mcp](https://code.claude.com/docs/en/mcp) — jak instalovat a používat v Claude Code

## Komunita a sociální

- **Aibility Circle komunita:** odkaz v závěru webináře
- **Anthropic Discord:** (pokud existuje — odkaz v dokumentaci)
- **Reddit r/ClaudeAI:** neoficiální komunitní diskuze

## Související nástroje (pro kontext)

- **Cursor:** [cursor.com](https://cursor.com) — AI editor kódu (Agentský režim, Tab completion). Doplňková alternativa pro ty, kdo chtějí plnohodnotné IDE
- **OpenAI Codex CLI:** [openai.com](https://openai.com) — přímý konkurent Claude Code od OpenAI, podobná filosofie "autonomní agent v terminálu"

## Problémy s instalací

Pokud narazíte na chybu při instalaci, první místo, kam se podívat, je `faq.md` v této složce. Pokud tam není, napište do Circle komunity nebo kontaktujte podporu Aibility.
