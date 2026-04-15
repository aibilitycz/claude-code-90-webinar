# Poznámky k Level 0

Doplňkový kontext a odkazy k úvodu a instalaci. Slouží lektorům jako podpůrný materiál během živých kroků (instalace, klonování, první login), ale každý bod je zároveň užitečný referenční materiál i pro účastníky, kteří se k tomu budou chtít vrátit po webináři.

---

## Co se děje při jednotlivých krocích

### `npm install -g @anthropic-ai/claude-code` (cca 20–60 s)
- Claude Code je distribuován jako **npm balíček** `@anthropic-ai/claude-code`
- Stahuje se klient, který běží lokálně — samotný model Claude běží v cloudu u Anthropicu
- Velikost balíčku je v řádu desítek MB
- Flag `-g` znamená globální instalaci — příkaz `claude` pak funguje odkudkoli
- Update: `npm update -g @anthropic-ai/claude-code` (Claude Code obvykle na dostupnou novou verzi upozorní sám)
- Release notes: https://github.com/anthropics/claude-code/releases

### `git clone` webinářového repa (cca 1–3 min)
- `git clone` stáhne celou historii projektu — ne jen poslední stav
- Repo je malé, stahování trvá sekundy i na pomalejším připojení
- Git není součástí Windows — instalace: https://git-scm.com/downloads
- Na macOS bývá git předinstalovaný s Xcode Command Line Tools
- Alternativa pro ty, kdo nechtějí git: tlačítko **"Download ZIP"** na GitHubu funguje stejně
- Adresa repa: https://github.com/aibilitycz/claude-code-90-webinar

### První spuštění `claude` a přihlášení (cca 30–90 s)
- Otevře se prohlížeč a proběhne OAuth přihlášení k Anthropic účtu
- Token se uloží lokálně do `~/.claude/` — příště se už neptá
- Companion skill `claude-code-guide` se aktivuje automaticky (je v `.claude/skills/` repa)
- `CLAUDE.md` repa se načte do kontextu — Claude tedy ví, že je na webináři
- Ověření stavu session: `/status`

---

## Kontext o Claude Code, který stojí za zmínku

### Anthropic
- AI laboratoř založená v roce 2021, sídlo San Francisco
- Zaměřuje se na výzkum bezpečnosti AI (Constitutional AI, Responsible Scaling Policy)
- Web: https://www.anthropic.com

### Dostupné platformy (stav duben 2026)
Claude Code neběží jen v terminálu — podporuje:
- CLI (terminál)
- Desktopovou aplikaci
- Web na [claude.ai/code](https://claude.ai/code)
- iOS aplikaci
- Rozšíření pro VS Code
- Plugin pro JetBrains IDE (beta)

Paměť, CLAUDE.md i MCP servery jsou napříč platformami sdílené.

### Modely (stav duben 2026)
- Opus 4.6 — nejvýkonnější, kontextové okno až 1 milion tokenů
- Sonnet 4.6 — vyvážený poměr rychlost/cena
- Haiku 4.5 — nejrychlejší a nejlevnější na jednodušší úkoly
- Model card Opus: https://www.anthropic.com/claude/opus

### MCP (Model Context Protocol)
- Otevřený protokol pro připojení AI nástrojů k datovým zdrojům
- Vydán Anthropicem v listopadu 2024, adoptován napříč oborem
- Web: https://modelcontextprotocol.io

---

## Užitečné oficiální odkazy
- Dokumentace Claude Code: https://docs.claude.com/en/docs/claude-code/overview
- Changelog: https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md
- Stavová stránka služby: https://status.anthropic.com
- Acceptable Use Policy: https://www.anthropic.com/legal/aup
- Přehled plánů a cen: https://www.anthropic.com/pricing

---

## Příprava lektora před Level 0

Checklist pro hladký průběh živé ukázky instalace:

**Před webinářem:**
- Terminál s dobře čitelnou velikostí písma (font 18+)
- Druhý terminál otevřený jako záloha
- Tab s dokumentací v prohlížeči
- Ověřeno `claude --version`, login funguje
- Čistý adresář pro demo (ne pracovní repo)

**Během Level 0:**
- Instalační příkaz spustit a nechat ho proběhnout — vysvětlovat paralelně s výstupem
- Ukázat instalaci naživo, ne ze snímku
- Při OAuth loginu nahlas popisovat každý krok
- Mít připravený záložní účet / VM pro případ problému s přihlášením
- Před prvním promptem krátce ukázat prázdné prompt okno — účastníci ať si prostředí nejdřív prohlédnou

**Přechod na Level 1:**
- Petra v chatu potvrdí, že všichni účastníci mají `claude` spuštěný
- Ukázat `/help` jako rozcestník
- Přejít do `level-1-beginner/` a začít první úkol
