# Level 0: Úvod & Instalace

**Délka:** 15 minut
**Cíl:** Účastníci pochopí, co je Claude Code, jak se liší od jiných AI nástrojů, a uvidí živou instalaci.

## Co je Claude Code?

Claude Code je **AI agent**, který běží ve vašem terminálu. Není to chatbot, není to editor — je to autonomní spolupracovník, který:

- **Čte** vaše soubory a chápe kontext projektu
- **Píše** kód, texty, konfigurace — cokoliv potřebujete
- **Spouští** příkazy a ověřuje, že vše funguje
- **Opravuje** chyby — sám detekuje problém a najde řešení

### Proč je to jiné?

Představte si rozdíl mezi asistentem a spolupracovníkem:
- **ChatGPT** = zeptáte se, dostanete odpověď (konverzace)
- **Cursor** = píšete kód a AI vám pomáhá (asistence v editoru)
- **Claude Code** = řeknete, co chcete, a agent to udělá celé (autonomní práce)

## Claude Code vs Cursor vs ChatGPT

| | ChatGPT | Cursor | Claude Code |
|---|---------|--------|-------------|
| **Typ** | Chatbot | AI editor | AI agent |
| **Kde běží** | Webový prohlížeč | Desktopová aplikace | Terminál |
| **Jak funguje** | Odpovídá na otázky | Pomáhá při psaní kódu | Autonomně plní úkoly |
| **Vidí váš projekt** | Ne (jen co vložíte) | Ano (otevřené soubory) | Ano (celý projekt) |
| **Spouští příkazy** | Ne | Omezeně | Ano — plně |
| **Opravuje chyby** | Navrhne opravu | Navrhne opravu | Opraví sám |
| **Pro koho** | Všichni | Vývojáři a tvůrci | Kdokoliv s terminálem |

## Cena a plány

### Anthropic Max Plan
- Měsíční předplatné s přístupem ke Claude Code
- Zahrnuje Claude Opus a Sonnet modely
- Dostatek kapacity pro běžné používání

### API Credits (alternativa)
- Platíte za spotřebu (tokeny)
- Flexibilnější pro nepravidelné používání
- Vyžaduje nastavení API klíče

### Typické měsíční náklady
- **Příležitostné používání** (pár úkolů týdně): nízké jednotky dolarů / Max plan
- **Pravidelné používání** (denně): Max plan je výhodnější
- **Intenzivní používání** (velké projekty): Max plan nebo vyšší API budget

> **Tip:** Začněte s Max plánem — nejjednodušší start bez starostí o kredity.

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
