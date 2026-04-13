# Jak rozšířit Claude Code

Claude Code je záměrně navržený jako **platforma**, ne jako jedna zabalená aplikace s pevnými funkcemi. Anthropic do základu dodal jádro a všechno ostatní — skilly, pluginy, připojení na externí služby — si můžete přidat sami. Tohle je klíčová věc, kterou byste měli pochopit, pokud chcete Claude Code používat dlouhodobě.

Existují čtyři hlavní způsoby, jak Claude Code rozšířit. Každý z nich řeší jinou potřebu.

## 1. Skilly (Skills)

**Co to je:** Obyčejný markdown soubor, který Claude Code čte, když dává smysl. Popisuje kontext nebo postup — třeba "jak správně psát release notes", "kompletní znalost webináře Intro do Claude Code" (to je přesně ten, kterého teď používáte), nebo "jak generovat obrázky přes Gemini".

**Kde žijí:** Claude Code hledá skilly ve čtyřech místech (v tomto pořadí):

| Úroveň | Kde | Pro koho platí |
|--------|-----|----------------|
| Enterprise | Firemní nastavení | Celá organizace |
| Uživatelská | `~/.claude/skills/` | Váš uživatel, všude |
| Projektová | `.claude/skills/` v projektu | Tento konkrétní projekt |
| Plugin | Uvnitř nainstalovaného pluginu | Všude, kde je plugin aktivní |

**Jak si přidat vlastní:** Vytvořte složku `~/.claude/skills/jmeno-skillu/`, dovnitř vložte soubor `SKILL.md` s frontmatterem (název, popis) a tělem (to, co Claude Code má vědět). To je všechno. Není potřeba nic kompilovat ani instalovat.

**Kde hledat hotové:** Oficiální pluginy od Anthropic obsahují spoustu skillů (viz Pluginy níže). Komunitní skilly se sdílí na GitHubu a přes uživatelské pluginy.

## 2. Pluginy z marketplace

**Co to je:** Balíček, který obsahuje skilly, slash commands, subagenty, MCP servery, hooky nebo další nastavení pod jednou střechou. Instalujete ho jedním příkazem a je aktivní.

**Oficiální Claude marketplace:** Anthropic má vlastní marketplace přímo v Claude Code. Prohlížíte ho na [claude.com/plugins](https://claude.com/plugins) nebo přímo uvnitř Claude Code.

**Jak ho otevřít:**
1. Spusťte Claude Code (kdekoli — CLI, desktop, web)
2. Napište slash command `/plugin`
3. Otevře se interaktivní panel se čtyřmi záložkami: **Discover**, **Installed**, **Marketplaces**, **Errors**
4. V záložce **Discover** vidíte dostupné pluginy
5. Instalace: vyberte plugin a potvrďte. Nebo napište `/plugin install <jmeno>@claude-plugins-official`

**Příklady oficiálních pluginů:**
- `github` — plná integrace s GitHubem (čte issues, vytváří PR, komentuje)
- `linear` — projektový management v Linearu
- `notion` — Notion workspaces
- `vercel` — deployment a management aplikací
- `figma` — čtení designů přímo z Figmy
- `slack` — psaní a čtení zpráv v Slacku
- `sentry` — error monitoring
- `atlassian` — Jira + Confluence

**Komunitní marketplaces:** Kromě oficiálního můžete přidat i komunitní. Příkaz: `/plugin marketplace add owner/repo` (kde `owner/repo` je GitHub repozitář s `marketplace.json` souborem).

## 3. MCP servery (Model Context Protocol)

**Co to je:** Otevřený standard od Anthropic (dnes pod Linux Foundation), který umožňuje Claude Code mluvit s libovolnou externí službou — databáze, API, cloudové služby, vaše interní nástroje. Představte si to jako univerzální adaptér.

**Rozdíl oproti pluginu:** MCP server je samostatný proces, který běží mimo Claude Code a komunikuje s ním přes standardizovaný protokol. Plugin je balíček, který může MCP server obsahovat, ale jde o abstrakci nad ním — pro uživatele pohodlnější.

**Příklady toho, co MCP servery dnes umí:**
- **Databáze:** PostgreSQL, MySQL, SQLite, MongoDB — ptát se přímo na živá data
- **Cloud:** AWS, GCP, Azure — spravovat zdroje
- **Observability:** Grafana, Datadog, Sentry — číst metriky a logy
- **Vývojářské nástroje:** GitHub, GitLab, Figma, Linear
- **Komunikace:** Slack, Discord, email

**Jak si přidat:** V dnešní době nejjednodušeji přes plugin z marketplace. Nebo manuálně přes `claude mcp add <url-nebo-prikaz>`.

**Kolik jich je:** Začátkem roku 2026 jich je přes 10 tisíc veřejných. MCP ekosystém je největší část rozšiřitelnosti Claude Code.

## 4. Vlastní slash commands a hooky

**Slash commands:** Jsou zvláštním případem skillů — markdown soubory v `.claude/commands/` (nebo `~/.claude/commands/`), které se spouští napsáním `/jmeno-commandu`. Užitečné pro opakované úkoly — třeba `/commit` (sestaví commit z diffu), `/release-notes` (napíše release notes z commitů), `/daily-report` (denní shrnutí).

**Hooky:** Shell příkazy, které se spouští před nebo po akci agenta. Užitečné pro věci jako:
- "Po každé změně souboru spusť linter"
- "Před commitem spusť testy"
- "Když agent chce smazat soubor, nejdřív ho zálohuj"

## Co se tím dá skutečně dělat

Tohle je důležitý moment pro účastníka webináře, který si myslí, že Claude Code "neumí generovat obrázky". Dneska umí skoro všechno, pokud existuje plugin nebo skill, který to propojí.

**Příklady věcí, které Claude Code **nativně** neumí, ale s pluginem nebo skillem ano:**

- **Generování obrázků:** Přes skill, který zavolá Gemini Nano Banana Pro, FLUX, nebo jiný model. Napíšete *"udělej mi logo pro tenhle projekt"*, Claude Code se přes skill obrátí na Gemini a logo vznikne.
- **Generování zvuku:** Přes skill napojený na ElevenLabs — text-to-speech, podcasty, voice cloning, zvukové efekty.
- **Transkripce videí:** Skill, který volá Whisper nebo podobnou službu.
- **Deployment:** Přes Vercel plugin nebo Firebase plugin — Claude Code nasadí vaši aplikaci přímo.
- **PR review:** Plugin, který automaticky komentuje PR-ka podle stylových pravidel.
- **Databázové dotazy:** MCP server pro PostgreSQL — Claude Code se ptá vaší produkční databáze (v read-only módu).
- **Design handoff z Figmy:** Figma plugin čte design tokeny a Claude Code z nich generuje kód.

Když se vás účastník zeptá *"umí Claude Code X?"*, odpověď je skoro vždycky *"nativně možná ne, ale přes skill nebo plugin z marketplace ano — pojďme se podívat, jestli něco takového existuje"*.

## Jak na to doporučit účastníkovi

Když se vás účastník ptá, jak rozšířit Claude Code nebo jestli něco umí:

1. **Nejdřív se zeptejte, co chce udělat** — konkrétní úkol, ne obecně "co to umí"
2. **Pokud je to textová/souborová práce** → Claude Code to nativně zvládne, skill nepotřebuje
3. **Pokud to volá externí službu** (databáze, API, cloud, Slack, atd.) → doporučte `/plugin` a oficiální marketplace
4. **Pokud to generuje jiné médium** (obrázky, zvuk, video) → přes komunitní skill nebo plugin (image-gen, babel-fish:audio a podobné)
5. **Pokud to je opakovaný úkol** → navrhněte vytvořit vlastní slash command v `.claude/commands/`

## Kde se dozvědět víc (po webináři)

- **Oficiální Claude marketplace:** [claude.com/plugins](https://claude.com/plugins)
- **Skill autoring best practices:** [platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices)
- **Plugin dokumentace:** [code.claude.com/docs/en/plugins](https://code.claude.com/docs/en/plugins)
- **MCP dokumentace:** [code.claude.com/docs/en/mcp](https://code.claude.com/docs/en/mcp)
- **Agent Skills standard:** [agentskills.io](https://agentskills.io) — otevřený standard, kterým se skilly řídí

## Důležité pro odpovědi účastníkům

Když účastník řekne něco jako *"to už je moc pokročilé, to nepoužiju"*, nezavrhujte to. Skilly a pluginy jsou **přesně to, co pro netechnického uživatele dává Claude Code největší sílu** — protože můžou nainstalovat hotovou věc od někoho chytrého a používat ji. Nemusí ji sami napsat.

Konkrétní příklad, který funguje: *"Představte si, že zítra chcete generovat logo pro váš projekt. Místo abyste jezdili do Midjourney a zpátky kopírovali obrázek, nainstalujete si skill `image-gen` — a Claude Code přímo ve vašem projektu vytvoří logo, uloží ho do složky a propojí ho s kódem. Všechno v jednom kroku."*
