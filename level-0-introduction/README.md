# Level 0: Úvod & Instalace

**Délka:** 15 minut
**Cíl:** Účastníci pochopí, co je Claude Code, jak se liší od jiných AI nástrojů, a uvidí živou instalaci.

## Co je Claude Code?

Claude Code je **AI agent**, který běží ve vašem terminálu (a na dalších místech — k tomu hned). Není to chatbot, není to editor. Je to autonomní spolupracovník:

- **Čte** vaše soubory a rozumí, v jakém projektu jste
- **Píše** kód, texty, konfigurace — cokoli potřebujete
- **Spouští** příkazy a ověřuje si, že to funguje
- **Opravuje** chyby — sám si všimne, co je špatně, a napraví to

### Kde všude Claude Code žije

Jedna věc, o které se moc neví: Claude Code není jen příkazová řádka. V dubnu 2026 běží na **šesti různých místech**, a všechno je propojené — stejná paměť, stejný CLAUDE.md, stejné MCP servery:

- **Terminál (CLI)** — hlavní rozhraní, to ukazujeme dnes
- **Desktopová aplikace** — vizuální diff, více sessions paralelně
- **Web** [claude.ai/code](https://claude.ai/code) — žádná instalace, prostě v prohlížeči
- **Claude iOS aplikace** — dlouhé úkoly, vzdálené řízení
- **Rozšíření pro VS Code** — inline diffy, @-mentions
- **Plugin pro JetBrains (beta)** — IntelliJ, PyCharm, WebStorm

**Proč na webináři ukazujeme terminál?** Protože v něm nejlíp vidíte, jak agent pracuje. Když vám ale terminál po webináři nesedne, máte pět dalších možností, kde Claude Code běží úplně stejně.

### Jak se Claude Code liší od ChatGPT a Cursoru

- **ChatGPT** = konverzační chatbot. Nevidí vaše soubory, nespouští příkazy. Jiná kategorie nástroje než Cursor a Claude Code.
- **Cursor** = fork VS Code s vestavěným AI agentem. Těžiště má v práci v IDE. V roce 2026 má taky vlastní CLI a cloud agents — překryv s Claude Code je velký.
- **Claude Code** = editor-agnostický agent. Běží v terminálu, na desktopu, ve webu, v iOS, nebo jako plugin pro VS Code či JetBrains. Těžiště má v CLI a napříč platformami.

> **Poznámka:** OpenAI má svůj vlastní podobný nástroj — **Codex CLI**. Funguje na stejném principu jako Claude Code. Dnes se díváme na Claude Code, ale Codex je příbuzný nástroj — pokud vám tenhle způsob práce sedne, stojí za to znát oba.

## Claude Code vs Cursor vs ChatGPT

> **V dubnu 2026 umí Cursor i Claude Code v zásadě to samé** — oba jsou autonomní agenti, oba čtou projekt, oba spouští příkazy, oba opravují chyby v cyklu. Oba můžou používat stejné modely (Claude Opus/Sonnet) a tím i stejně velké kontextové okno. Staré srovnání typu *"Cursor jen pomáhá, Claude Code provádí"* už neplatí.

### Skutečné rozdíly (vše ostatní je prakticky stejné)

Mezi Cursor a Claude Code jsou jen **tři rozdíly, které vás reálně můžou ovlivnit**:

1. **Kde AI žije.** Cursor je **vlastní IDE** (fork VS Code) — AI je vestavěné uvnitř editoru, těžiště je v práci v IDE. Claude Code je **editor-agnostický** — běží v terminálu, na desktopu, ve webu, v iOS, nebo jako plugin do VS Code či JetBrains.
2. **Volba modelu.** Cursor dává na výběr: Claude, GPT, Gemini a další. Claude Code je **Claude-only**.
3. **Jak se platí.** Cursor má **vlastní předplatné** (samostatný účet u Cursor Inc.). Claude Code je **součástí předplatného Claude Pro/Max** u Anthropicu (nebo placený přes API credits).

Všechno ostatní — autonomní provádění, CLI, cloud režim, skills, hooks, MCP, velikost kontextu, úrovně schopností — je v roce 2026 prakticky stejné. Tabulka níže to dokazuje.

| | ChatGPT | Cursor | Claude Code |
|---|---------|--------|-------------|
| **Typ** | Chatbot | AI-augmented IDE + agent | Editor-agnostický agent |
| **Hlavní rozhraní** | Chat | Editor (fork VS Code) | Terminál |
| **Kde běží** | Web, mobil, desktop | Cursor IDE, Cursor CLI, cloud agents (web), Slack | CLI, desktop, web, iOS, VS Code, JetBrains |
| **Vidí váš projekt** | Ne (jen to, co vložíte) | Ano | Ano |
| **Spouští příkazy** | Ne | Ano | Ano |
| **Modely** | Pouze OpenAI (GPT) | Claude, GPT, Gemini (výběr) | Pouze Claude |
| **Inline doplňování kódu** | Ne | Ano (Tab) | Ne |
| **Rozšiřitelnost** | Custom GPTs | Rules + skills + MCP + hooks + VS Code extensions | CLAUDE.md + skills + pluginy + MCP + hooks |
| **Cenový model** | Vlastní předplatné | Vlastní předplatné s usage poolem | Součástí Claude Pro/Max nebo přes API |
| **Těžiště workflow** | Chat | Interaktivní práce v IDE | CLI a skriptování napříč platformami |

### Co kde hledat

Přehled, kterou potřebu který nástroj pokrývá — rozhodnutí je na vás:

| Potřeba / situace | Kde to najdete |
|-------------------|----------------|
| AI přímo v editoru (IDE prostředí typu VS Code) | Cursor (nativně), Claude Code (plugin pro VS Code / JetBrains) |
| AI v terminálu | Claude Code (CLI), Cursor (CLI) |
| AI běžící na pozadí v cloudu | Claude Code (web), Cursor (cloud agents) |
| AI v iOS aplikaci | Claude Code (iOS app), Cursor (web/PWA) |
| Výběr mezi Claude, GPT a Gemini | Cursor |
| Pouze Claude, ale s MCP, skills, hooks, pluginy | Claude Code |
| Součást stávajícího Claude Pro/Max účtu | Claude Code |
| Samostatné předplatné s volbou modelu | Cursor |
| Chat bez přístupu k souborům a příkazům | ChatGPT |

Mnoho profesionálů používá oba paralelně. Nejsou to přímí konkurenti v úzkém slova smyslu — každý má své těžiště.

## Cena a plány

### Anthropic Max Plan — konkrétní ceny

| Plán | Cena | Co získáte |
|------|------|-----------|
| **Claude Pro** | $20/měsíc | Přístup ke Claude Code, model Sonnet, základní limity |
| **Claude Max 5×** | $100/měsíc | 5× vyšší limity, přístup k modelu Opus |
| **Claude Max 20×** | $200/měsíc | 20× kapacita pro intenzivní každodenní práci |

> Ceny se mohou měnit — ověřte aktuální stav na [anthropic.com](https://www.anthropic.com).

### API Credits (alternativa pro pokročilé)
- Platíte za spotřebu (tokeny) — žádné měsíční předplatné
- Vyžaduje nastavení API klíče
- Větší kontrola nad náklady

### Kolik to stojí v praxi?

| Scénář | Příklad úkolu | Přibližná cena |
|--------|--------------|----------------|
| **Jeden úkol** | Vytvoření webové stránky | $0.50–$5 |
| **Příležitostné** (pár úkolů/týden) | Občasné weby, texty, analýzy | ~$15–40/měsíc |
| **Pravidelné** (každý den) | Denní práce, více projektů | ~$60–200/měsíc |

> **Tip:** Začněte s Max plánem — předvídatelná cena, žádné překvapení. Na API přejděte, až budete vědět, kolik skutečně spotřebujete.

## Terminál za 2 minuty

### Co je terminál?
Místo, kam píšete příkazy. Nic víc. Žádná magie, žádné programování — jen textové příkazy.

### Jak ho otevřít?

**Mac:**
- Stiskněte `Cmd + Space`, napište `Terminal`, Enter
- Nebo: Aplikace → Utility → Terminal

**Windows:**
- Stiskněte `Win`, napište `PowerShell`, Enter
- Pro plný zážitek: nainstalujte WSL (Windows Subsystem for Linux)

**Linux:**
- `Ctrl + Alt + T`

### Co potřebujete vědět:
```
Takhle vypadá příkaz:    npm install -g @anthropic-ai/claude-code
Zmáčknete Enter.
Počkáte na výsledek.
Hotovo.
```

To je vše. Claude Code se postará o zbytek.

## Živá instalace

### Krok 1: Ověřte Node.js
```bash
node --version
```
Pokud vidíte číslo verze (např. `v20.x.x`), máte hotovo. Pokud ne, stáhněte z [nodejs.org](https://nodejs.org).

### Krok 2: Nainstalujte Claude Code
```bash
npm install -g @anthropic-ai/claude-code
```

### Krok 3: Spusťte Claude Code
```bash
claude
```

### Krok 4: Přihlaste se
- Claude Code vás provede přihlášením k Anthropic účtu
- Otevře se prohlížeč pro autorizaci
- Po přihlášení se vrátíte do terminálu — připraveni pracovat

### Co vidíte po spuštění:
- Claude Code prompt — místo, kde zadáváte úkoly
- Informace o aktuálním adresáři (složce)
- Stav připojení k Anthropic API

## Švýcarský nůž: co všechno v Claude Code je

Než ho začneme používat, pojďme si rychle pojmenovat nástroje, které máte k dispozici. Dnes se ke každému vrátíme — teď jsou to jen jména:

1. **Chat / režimy** — základní způsob komunikace. Plan mode (`Shift+Tab`) pro rozmyšlení, think-režimy pro hlubší úvahy.
2. **Slash commands** — `/help`, `/clear`, `/model`, `/mcp`, `/plugin`. Zkratky pro běžné akce.
3. **CLAUDE.md** — soubor s pravidly pro agenta. Napíšete jednou, platí pořád. *(Level 3)*
4. **Skills** — znalosti, které si agent načítá automaticky. Obyčejný markdown soubor. *(Level 2 + 3)*
5. **Pluginy / marketplace** — hotová rozšíření k instalaci jedním klikem. *(Level 2 + 3)*
6. **MCP** — napojení na externí služby: kalendář, letové API, GitHub, Notion... *(Level 3)*
7. **Hooks** — automatické akce na události (commit, uložení, atd.). Pro pokročilé.

> Tohle jsou zatím jen jména. Během webináře každý z nich uvidíte v akci.

## Checkpoint

Po Level 0 byste měli vědět:
- [ ] Co je Claude Code a čím se liší od ChatGPT a Cursoru
- [ ] Kolik stojí a jaký plán potřebujete
- [ ] Jak otevřít terminál
- [ ] Claude Code je nainstalovaný a spuštěný
