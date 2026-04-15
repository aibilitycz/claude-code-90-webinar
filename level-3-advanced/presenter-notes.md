# Poznámky k Level 3

Doplňkový kontext a odkazy k pokročilým ukázkám — CLAUDE.md, MCP, subagenti, hooky, slash příkazy a pluginy. Slouží jako referenční materiál pro lektory během živých demo úloh a jako přehled pro účastníky.

---

## CLAUDE.md — vrstva trvalé paměti

- **Projektová úroveň:** `./CLAUDE.md` v kořeni repa — konvence týmu, příkazy, architektura
- **Uživatelská úroveň:** `~/.claude/CLAUDE.md` — osobní preference napříč všemi projekty
- Soubor se automaticky načítá do každé session v daném adresáři
- Prefix `#` v promptu přidá zápisek do `CLAUDE.md`, aniž by bylo nutné opouštět session

Podrobnosti: https://docs.claude.com/en/docs/claude-code/memory

---

## MCP (Model Context Protocol)

- Otevřený protokol, který Anthropic vydal na konci roku 2024
- Standardizuje způsob, jakým se AI nástroje připojují k datovým zdrojům
- Podporu postupně přijali i další hráči v oboru (mimo jiné OpenAI a Google)
- Oficiálně dostupné servery pokrývají GitHub, Slack, Google Drive, Postgres, Playwright, Figma, Linear, Notion a další
- Konfigurace: `.mcp.json` v projektu nebo `~/.claude/mcp.json` globálně

Odkazy:
- Web protokolu: https://modelcontextprotocol.io
- Katalog serverů: https://github.com/modelcontextprotocol/servers

---

## Subagenti, hooky a slash příkazy

Tři rozšiřující mechanismy, které dávají Claude Code hloubku:

- **Subagenti** (`.claude/agents/*.md`) — specializovaní asistenti s vlastním system promptem a vybranými nástroji. Hodí se, když chcete ke konkrétnímu typu práce přistupovat jinak než při běžné konverzaci.
- **Hooky** (`settings.json`) — shell příkazy, které se spouští na definované události (např. `PreToolUse`, `Stop`). Fungují jako deterministická pojistka: ať Claude udělá cokoli, hook proběhne vždy.
- **Slash příkazy** (`.claude/commands/*.md`) — znovupoužitelné šablony promptů, které lze sdílet přes git.

Všechny tři jsou obyčejný markdown nebo JSON — čitelné, diffovatelné, verzovatelné.

Podrobnosti: https://docs.claude.com/en/docs/claude-code/sub-agents

---

## Skills a pluginy

- **Skills** = zabalené schopnosti (markdown + volitelné skripty). Aktivují se automaticky na základě svého popisu, když se session dotkne relevantního tématu.
- **Pluginy** = instalovatelné balíčky skillů, slash příkazů a agentů.
- Instalace: `/plugin marketplace add <repo>` a následně `/plugin install`.

Podrobnosti: https://docs.claude.com/en/docs/claude-code/skills

---

## Oprávnění a bezpečnost

- Permission módy: `default`, `acceptEdits`, `plan`, `bypassPermissions`
- `.claude/settings.json` umožňuje předschválit konkrétní vzory přes `permissions.allow`
- Režim `bypassPermissions` doporučujeme používat jen v izolovaném prostředí (kontejner, VM)
- Pro autonomní běhy se hodí devcontainery nebo sandboxované VM

---

## Strategie výběru modelu a náklady

- **Sonnet 4.6** — vyvážený poměr rychlost/cena, výchozí volba pro většinu úkolů
- **Opus 4.6** — nejvýkonnější, vhodný na plánování, architekturu a složitější debugging
- **Haiku 4.5** — nejrychlejší a nejlevnější, na jednoduché úkoly typu rename nebo grep
- Prompt caching výrazně snižuje náklady u opakovaně používaného kontextu

Aktuální ceník: https://www.anthropic.com/pricing

---

## Kam dál po webináři

- Anthropic Cookbook: https://github.com/anthropics/anthropic-cookbook
- GitHub Claude Code (issues a feedback): https://github.com/anthropics/claude-code/issues
- Awesome Claude Code (komunitní přehled): https://github.com/hesreallyhim/awesome-claude-code
- Every.to — články o tématu Compound Engineering
