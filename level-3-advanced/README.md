# Level 3: Pokročilé funkce — Orchestrace

**Délka:** 15 minut (64–79 min)
**Cíl:** Účastníci pochopí, že Claude Code je platforma, ne aplikace — a uvidí, jak se pravidla (CLAUDE.md), externí služby (MCP), znalosti (skills), rozšíření (plugins) a modely skládají dohromady.

> **Velká myšlenka:** V Levelu 1 jste agenta poprosili o jeden úkol. V Levelu 2 jste viděli celé workflow. Teď Level 3 — Claude Code skládá MCP servery, vaše preference a design do jedné věci. Každý kousek je jednoduchý. Dohromady je to orchestr.

---

## CLAUDE.md — Váš osobní manuál (2 min, 65:00–67:00)

CLAUDE.md je soubor, který Claude Code čte pokaždé, když ho spustíte. Vaše pravidla, preference, kontext — napsané jednou, platné pořád.

### Kde žije

| Typ | Cesta | Platí pro |
|-----|-------|-----------|
| **Projektový** | `./CLAUDE.md` v kořeni projektu | Jen tento projekt (sdílitelný s týmem přes git) |
| **Osobní** | `~/.claude/CLAUDE.md` | Všechny projekty (jen vaše) |

Oba jdou použít současně — Claude Code si je zkombinuje.

### Live demo: jedna věta, která změní všechno

Otevřete `CLAUDE.md` v editoru a přidejte:

```markdown
## Travel preferences

- Odlet: pátek po 16:00, návrat neděle do 22:00
- Budget: strop 8000 Kč za zpáteční letenku
- Preferuju přímé lety
- Home airport: Praha (PRG)
```

> **(Ondřej, klíčový moment):** *"Pravidlo: agent musí číst, ne hádat. Než cokoli napíše, ať si nejdřív přečte zdroj. Jedna věta v CLAUDE.md, která dramaticky sníží halucinace. Tohle je moment, kdy si o Claude Code můžete říct: tomuhle se dá věřit."*

---

## MCP — Kiwi živé demo (1.5 + 2.5 min, 67:00–71:00)

### Co jsou MCP servery?

Rozšíření, která Claude Code připojují k externím službám. Bez MCP agent vidí jen vaše soubory. S MCP se napojí na letové API, kalendář, GitHub, Notion — cokoli.

### Instalace Kiwi MCP (67:00–68:30)

```
/plugin → Discover → "kiwi" → Install
```

> *"Jeden příkaz. Plugin živý. Google Calendar MCP mám přihlášený z včerejška — stejný postup."*

### Hlavní prompt (68:30–71:00)

```
Použij moje travel preferences z CLAUDE.md.

1. Zavolej Kiwi MCP pro jeden přímý let Praha → Lisabon
   o příštím víkendu, co sedí na můj budget.
2. Zavolej Google Calendar MCP a přidej ho jako event
   na odpovídající termín.

Ukaž mi výsledek — letové detaily a potvrzení eventu.
```

**Co pozorujete:**
- Agent čte CLAUDE.md — vaše preference
- Živý Kiwi call — reálné ceny letů
- Calendar call — přidává event do kalendáře
- Dva MCP servery spolupracují v jednom promptu

> **Cíl agenta: ≤90 sekund práce.** Pokud by selhal — máme připravený screencast z včerejší zkoušky.

---

## Pluginy & marketplace (2 min, 71:00–73:00)

### Discover záložka

```
/plugin → Discover
```

Projeďte si, co je k dispozici. Příklady z oficiálního marketplace:

| Plugin | Co dělá |
|--------|---------|
| `github` | Issues, PR, komentáře |
| `figma` | Čtení designů z Figmy |
| `vercel` | Deployment aplikací |
| `notion` | Přístup k Notion workspace |
| `slack` | Čtení a psaní zpráv |

### Tři ekosystémy

1. **Anthropic official marketplace** — vestavěný v `/plugin`
2. **compound-engineering** (Every Inc.) — plan → work → review loop
3. **Heart of Gold Toolkit** (Ondřej) — content pipeline, viděli jste v Level 2

Instalace je vždy stejná: `/plugin install jmeno@zdroj`.

---

## Companion reveal + vytvoření vlastního skillu (2.5 min, 73:00–75:30)

### Reveal: společník je markdown

Otevřete `.claude/skills/claude-code-guide/SKILL.md` v editoru.

> *"Společník, který vás vedl celé dopoledne? Obyčejný markdown. Žádná magie. Bento skill, který jsme mohli použít na design? Taky markdown. Každý skill je tenhle tvar."*

### Živá tvorba: vlastní skill jedním promptem

```
Vytvoř nový skill v .claude/skills/firemni-copywriting/SKILL.md.
Pravidla: profesionální tón, česky, krátké odstavce, vždy CTA na konci.
```

**Co pozorujete:**
- Agent vytvoří složku + SKILL.md s hlavičkou a tělem (~30 sekund)
- Žádná instalace, žádná kompilace — je to markdown

### Ověření

```
Napiš krátký LinkedIn post o našem webináři.
```

Nový skill se podchytí — text dodržuje pravidla: profesionální tón, krátké odstavce, CTA na konci.

> *"Napíšete si vlastní skill na to, co děláte dvakrát, a máte ho napořád."*

---

## Modely (1 min, 75:30–76:30)

Přepínáte příkazem `/model`:

| Model | Kdy se hodí |
|-------|-------------|
| **Haiku** | Rychlé a jednoduché — přečíst soubor, najít, drobná úprava |
| **Sonnet** | 90 % práce — výchozí volba (doporučeno) |
| **Opus** | Složité úkoly, velké projekty, nejchytřejší |

---

## Orchestrace — závěrečný moment (1 min, 76:30–77:30)

> *"Teď máme všechno: pravidla přes CLAUDE.md, externí služby přes MCP, znalosti přes skilly, rozšíření přes pluginy, různé modely pro různé úkoly. Každý dílek je jednoduchý. Dohromady je to orchestr a Claude Code je dirigent. Vy jste dnes viděli všechny nástroje. Doma si sestavíte vlastní kombinaci pod vaši práci."*

### Wrap (77:30–79:00)

> *"To je Claude Code. Instaluj. Konfiguruj. Zkomponuj. Zautomatizuj. Všechny čtyři za 15 minut. V pondělí ráno začnete."*

---

## Checkpoint

Po Level 3 byste měli chápat:
- [ ] Co je CLAUDE.md a jak ho vytvořit (projektový i osobní)
- [ ] Pravidlo "číst, ne hádat" — klíč k důvěryhodným výstupům
- [ ] Co jsou MCP servery a jak rozšiřují agenta o externí služby
- [ ] Jak nainstalovat plugin z marketplace (`/plugin`)
- [ ] Že skills jsou obyčejný markdown — můžete si napsat vlastní
- [ ] Že společník webináře je skill, na který se můžete podívat
- [ ] Rozdíl mezi modely Haiku, Sonnet a Opus
- [ ] Jak všechny kousky (CLAUDE.md + MCP + skills + plugins + models) fungují dohromady

---

## Pro studium doma

### Příklady CLAUDE.md pro různé role

#### Pro marketéra:
```markdown
# Marketing projekt

## Styl obsahu
- Tón: profesionální ale přístupný
- Cílová skupina: malé a střední firmy
- Jazyk: čeština, žádné anglicismy pokud existuje český ekvivalent
- Formát: krátké odstavce, bullet pointy, jasné CTA

## Pravidla
- Každý text musí mít hook v první větě
- LinkedIn příspěvky max 1300 znaků
- Email subject lines max 50 znaků

## Než něco napíšeš
- Když píšeš o produktu nebo trendu, nejdřív si ověř aktuální fakta
  přes web search. Nepiš ze své paměti.
- Když navazuješ na předchozí kampaň, nejdřív si ji přečti.
```

#### Pro projektového manažera:
```markdown
# PM workspace

## Výstupy
- Vždy strukturované: problém → analýza → doporučení
- Tabulky pro porovnání variant
- Timeline s milníky u plánů
- Rizika vždy s pravděpodobností a dopadem

## Formát
- Reporty v Markdown
- Executive summary na začátku každého dokumentu

## Než něco navrhneš
- Nejdřív si přečti zadání projektu a předchozí reporty
- Když se odkazuješ na data, ověř si je — neuvádíš čísla z paměti
```

### Pravidlo "číst, ne hádat" — podrobně

Každý AI model má dvě možnosti, odkud čerpat:

1. **Z paměti** — zastaralá, často nepřesná. ChatGPT vymyslí funkci, která neexistuje, ocituje neexistující článek.
2. **Z reálných zdrojů** — z vašich souborů, z dokumentace, z webu. Tohle umí Claude Code.

Tři způsoby, jak to v praxi zajistit:
- **Soubory v projektu** — Claude Code je čte automaticky
- **Web search MCP** — pro aktuální informace z webu
- **Pravidlo v CLAUDE.md:** *"Než cokoli upravíš, nejdřív si přečti relevantní soubory. Nikdy si nevymýšlej z paměti."*

> **Důležité:** Žádný AI nástroj nemá nulovou míru chyby. Pravidlo "číst, ne hádat" míru chyb dramaticky sníží, ale výstup si stále kontrolujte.

### Užitečné slash commands

| Příkaz | Co dělá |
|--------|---------|
| `/help` | Zobrazí nápovědu |
| `/clear` | Vyčistí kontext konverzace |
| `/compact` | Zkomprimuje historii pro delší konverzace |
| `/cost` | Ukáže spotřebu tokenů |
| `/model` | Přepne model (Haiku/Sonnet/Opus) |
| `/plugin` | Otevře marketplace |
| `/mcp` | Správa MCP serverů |

### Efektivní prompty

- **Buďte konkrétní:** "Vytvoř landing page" → "Vytvoř landing page pro fitness studio, tmavé téma, sekce: hero, služby, ceník, kontakt"
- **Definujte omezení:** "Pouze HTML a CSS, žádný JavaScript"
- **Určete formát:** "Výstup jako HTML soubor" nebo "Markdown dokument"
- **Dejte kontext:** "Jsem marketér, potřebuji..." nebo "Toto je pro klienta..."

### Kdy Claude Code nepoužívat

- **Citlivá data:** Hesla, API klíče, osobní údaje — nezadávejte do promptů
- **Právní dokumenty:** Pro smlouvy vždy konzultujte odborníka
- **Kritické systémy:** Pro produkční servery a databáze buďte opatrní
- **100% přesnost:** Agent může udělat chyby — vždy kontrolujte výstup
