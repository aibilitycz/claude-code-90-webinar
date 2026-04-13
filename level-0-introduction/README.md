# Level 0: Úvod & Instalace

**Délka:** 15 minut
**Cíl:** Účastníci pochopí, co je Claude Code, jak se liší od jiných AI nástrojů, a uvidí živou instalaci.

## Co je Claude Code?

Claude Code je **AI agent**, který běží ve vašem terminálu (a na dalších místech — více za chvíli). Není to chatbot, není to editor — je to autonomní spolupracovník, který:

- **Čte** vaše soubory a chápe kontext projektu
- **Píše** kód, texty, konfigurace — cokoliv potřebujete
- **Spouští** příkazy a ověřuje, že vše funguje
- **Opravuje** chyby — sám detekuje problém a najde řešení

### Kde Claude Code žije

Důležitá věc, kterou většina lidí neví: Claude Code není jen CLI nástroj. V dubnu 2026 běží na **šesti povrchách**, všech propojených se stejným enginem, CLAUDE.md, pamětí a MCP servery:

- **Terminál (CLI)** — hlavní rozhraní, to ukazujeme dnes
- **Desktop aplikace** — vizuální diff review, paralelní sessions
- **Web:** [claude.ai/code](https://claude.ai/code) — žádná instalace, běží v prohlížeči
- **iOS aplikace** — dlouho běžící úkoly, vzdálené řízení
- **VS Code rozšíření** — inline diffs, @-mentions
- **JetBrains plugin (beta)** — IntelliJ, PyCharm, WebStorm

**Proč na webináři ukazujeme terminál?** Protože v něm nejlépe vidíte, jak agent pracuje. Ale pokud po webináři zjistíte, že terminál není pro vás — máte pět dalších možností, kde Claude Code běží úplně stejně.

### Proč je to jiné

- **ChatGPT** = konverzace — zeptáte se, dostanete odpověď. Primární rozhraní je chat.
- **Cursor** = AI agent v editoru — plnohodnotné IDE (VS Code fork) s AI, která autonomně kóduje, refactoruje a opravuje. Pro ty, kdo chtějí vše v jednom vývojářském prostředí.
- **Claude Code** = AI agent, který nežije v editoru — běží v terminálu, desktopu, webu, nebo jako rozšíření. Kam jdete vy, tam jde on.

> **Poznámka:** OpenAI má vlastní obdobný nástroj — **Codex CLI**. Funguje na stejném principu jako Claude Code. Dnes ukazujeme Claude Code, ale Codex je jeho přímý bratranec od OpenAI. Pokud vás tento způsob práce osloví, oba nástroje stojí za pozornost.

## Claude Code vs Cursor vs ChatGPT

> **V dubnu 2026 Cursor i Claude Code dělají většinu věcí podobně** — oba běží autonomně, spouští příkazy, opravují chyby v cyklu. Starší srovnání, že "Cursor jen pomáhá a Claude Code provádí", už neplatí. Rozdíl je **v prostředí**, ne v schopnostech.

| | ChatGPT | Cursor | Claude Code |
|---|---------|--------|-------------|
| **Typ** | Chatbot | AI agent v editoru | AI agent v terminálu |
| **Primární rozhraní** | Chat | Editor kódu (VS Code fork) | Terminál |
| **Kde běží** | Web, mobil | Desktop IDE, web app, Slack | CLI, desktop, web, iOS, VS Code, JetBrains |
| **Vidí váš projekt** | Ne (jen co vložíte) | Ano | Ano |
| **Spouští příkazy** | Ne | Ano (v Agent módu) | Ano — nativně |
| **Opravuje chyby** | Navrhne | Ano, v cyklu | Ano, v cyklu |
| **Inline code completion** | Ne | Ano (Tab, 5–10 řádků dopředu) | Ne |
| **Výchozí kontextové okno** | Střední | ~10–15K tokenů (Max Mode plný) | Až 1M tokenů (s Opus) |
| **Pro koho** | Všichni | Hlavně vývojáři v IDE | Kdokoliv — kancelář, terminál, editor |

> **Shrnutí:** Cursor je **AI-augmented IDE** — pokud už VS Code používáte a chcete AI zapojit do editoru. Claude Code je **autonomní agent, který žije mimo editor** — pokud chcete, aby AI byla s vámi v terminálu, v desktop aplikaci, na webu nebo v iOS appce. Mnoho profesionálů používá oba současně — každý k něčemu jinému.

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
