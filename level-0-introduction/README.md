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

### Proč je Claude Code něco jiného

- **ChatGPT** = konverzace. Zeptáte se, dostanete odpověď. Hlavní rozhraní je chat.
- **Cursor** = AI agent v editoru. Plnohodnotné IDE (fork VS Code), kde AI autonomně kóduje, refaktoruje a opravuje. Pro ty, kdo chtějí všechno pohromadě ve vývojářském prostředí.
- **Claude Code** = AI agent, který v editoru nežije. Běží v terminálu, na desktopu, ve webu, v iOS, nebo jako rozšíření pro VS Code či JetBrains. Jde tam, kam vy.

> **Poznámka:** OpenAI má svůj vlastní podobný nástroj — **Codex CLI**. Funguje na stejném principu jako Claude Code. Dnes se díváme na Claude Code, ale Codex je jeho blízký bratranec. Pokud vám tenhle způsob práce sedne, stojí za to znát oba.

## Claude Code vs Cursor vs ChatGPT

> **V dubnu 2026 umí Cursor i Claude Code hodně podobné věci** — oba pracují autonomně, spouští příkazy, opravují chyby. Staré srovnání typu *"Cursor jen pomáhá, Claude Code provádí"* už neplatí. Rozdíl je v tom, **kde žijí**, ne v tom, co umí.

| | ChatGPT | Cursor | Claude Code |
|---|---------|--------|-------------|
| **Typ** | Chatbot | AI agent v editoru | AI agent v terminálu |
| **Hlavní rozhraní** | Chat | Editor kódu (fork VS Code) | Terminál |
| **Kde běží** | Web, mobil | Desktopové IDE, web, Slack | CLI, desktop, web, iOS, VS Code, JetBrains |
| **Vidí váš projekt** | Ne (jen to, co tam vložíte) | Ano | Ano |
| **Spouští příkazy** | Ne | Ano (v Agent módu) | Ano — nativně |
| **Opravuje chyby** | Navrhne opravu | Ano, v cyklu | Ano, v cyklu |
| **Inline doplňování kódu** | Ne | Ano (Tab, pět až deset řádků dopředu) | Ne |
| **Výchozí kontextové okno** | Střední | ~10–15 tisíc tokenů (plný v Max módu) | Až milion tokenů (s Opus) |
| **Pro koho** | Všichni | Hlavně vývojáři v IDE | Kdokoli — kancelář, terminál, editor |

> **Shrnutí:** Cursor je **AI-augmented IDE** — hodí se vám, když už v VS Code pracujete a chcete tam zapojit AI. Claude Code je **autonomní agent mimo editor** — hodí se vám, když chcete AI v terminálu, v desktopu, ve webu nebo v iOS aplikaci. Spousta profesionálů používá oba současně, každý na něco jiného.

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

## Checkpoint

Po Level 0 byste měli vědět:
- [ ] Co je Claude Code a čím se liší od ChatGPT a Cursoru
- [ ] Kolik stojí a jaký plán potřebujete
- [ ] Jak otevřít terminál
- [ ] Claude Code je nainstalovaný a spuštěný
