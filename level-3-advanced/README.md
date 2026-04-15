# Level 3: Pokročilé funkce — Orchestrace

**Délka:** 15 minut (65–80 min)
**Cíl:** Účastníci uvidí, jak Claude Code skládá pravidla (CLAUDE.md), obrázky (multi-modal), externí služby (MCP), design skilly, **subagenty**, **vlastní slash commands** a automatizaci (hooks) do jednoho výsledku — travel dashboardu v prohlížeči.

**Demo soubory:** Složka `demo-files/` obsahuje vše pro živé demo:
- `setup.md` — krok za krokem: Kiwi MCP, TypeUI skill, subagent, slash command, hook (projít den předem)
- `CLAUDE.md` — projektový soubor s travel preferences a pravidlem "číst, ne hádat"
- `wishlist.md` — popis vysněné dovolené ke každé fotce
- `wishlist/` — fotky vysněné destinace (pláž, uličky, jídlo, maják, jídlo)
- `prompty.md` — všechny prompty v pořadí, připravené ke copy-paste

**Artefakty stavěné živě v demu** (v repu **nejsou**, tvoří se promptem — viz `prompty.md`):
- `.claude/agents/foto-detektiv.md` — subagent Sherlock-stylu (krok 1)
- `.claude/settings.json` — hook, co otevře dashboard a česky promluví (krok 2)
- `.claude/commands/pohlednice.md` — slash command pro pohlednici (krok 4)

**Instalované před demem** (příkazem, ne v repu):
- `.claude/skills/bento/SKILL.md` — design skill, vytvoří se po `npx typeui.sh pull bento`
- Kiwi MCP — přidá se přes `claude mcp add --transport http kiwi-com-flight-search https://mcp.kiwi.com`

> **Velká myšlenka:** V Levelu 1 jste agenta poprosili o jeden úkol. V Levelu 2 jste viděli celé workflow. Teď Level 3 — Claude Code čte vaše pravidla, dívá se na fotky, volá letové API, hledá počasí na webu, staví dashboard v designovém stylu a po dokončení sám otevře prohlížeč. Jeden prompt, pět nástrojů, žádný kód.

---

## Příprava před webinářem

Pět věcí k nastavení (detaily v `demo-files/setup.md`). Dvě jsou infrastruktura (MCP + skill), tři další (subagent, hook, slash command) se tvoří živě v demu:

### 1. Kiwi MCP — vyhledávání letů

```bash
claude mcp add --transport http kiwi-com-flight-search https://mcp.kiwi.com
```

Žádný API klíč, žádná registrace. Jeden příkaz.

### 2. TypeUI design skill — vizuální styl dashboardu

```bash
npx typeui.sh pull bento
```

Vytvoří `.claude/skills/bento/SKILL.md` — agent bude stavět UI v bento stylu. Další styly na [typeui.sh/design-skills](https://www.typeui.sh/design-skills) (glassmorphism, neumorphism, paper…).

### 3. Subagent — foto-detektiv (živě v demu)

**Staví se živě** promptem z **kroku 1** v `prompty.md`. V repu není. Hlavní agent si ho po vytvoření sám zavolá při analýze wishlist fotek a dostane zpět strukturovaný verdikt (stopy → kandidáti → vítězná destinace).

### 4. Hook — otevření výsledku + český hlas (živě v demu)

**Staví se živě** promptem z **kroku 2** v `prompty.md`. V repu není. Očekávaná finální podoba `.claude/settings.json` (jen pro referenci, když agent zajde na scestí):

```json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Write",
      "hooks": [{
        "type": "command",
        "command": "f=$(jq -r '.tool_input.file_path'); case \"$f\" in *vystupy/*.html) open \"$f\"; say -v Zuzana 'Dashboard je připraven, koukej do prohlížeče' ;; esac"
      }]
    }]
  }
}
```

Hook chytá přímo událost `Write` nástroje — když agent zapíše HTML soubor do `vystupy/`, Mac ho otevře a český hlas Zuzana to oznámí reproduktorům (slyšitelné přes Zoom). Spolehlivější než grepovat transcript — trigger je konkrétní nástroj, ne text.

### 5. Slash command — `/pohlednice` (živě v demu)

**Staví se živě** promptem z **kroku 4** v `prompty.md`. V repu není. Po vytvoření spustíš `/pohlednice` (volitelně `/pohlednice mamce`) nad hotovým dashboardem a vznikne 5–8řádková pohlednice s drobnou lží prozrazenou v PS.

---

## CLAUDE.md — váš osobní manuál (2 min, 66:00–68:00)

CLAUDE.md je soubor, který Claude Code čte pokaždé, když ho spustíte. Vaše pravidla, preference, kontext — napsané jednou, platné pořád.

### Kde žije

| Typ | Cesta | Platí pro |
|-----|-------|-----------|
| **Projektový** | `./CLAUDE.md` v kořeni projektu | Jen tento projekt (sdílitelný s týmem přes git) |
| **Osobní** | `~/.claude/CLAUDE.md` | Všechny projekty (jen vaše) |

Oba jdou použít současně — Claude Code si je zkombinuje.

### Live demo: ukázat CLAUDE.md s travel preferences

Otevřete `CLAUDE.md` v editoru — publikum vidí:

```markdown
## Travel preferences

- Odlet: pátek po 16:00, návrat neděle do 22:00
- Budget: strop 12000 Kč za zpáteční letenku
- Preferuju přímé lety (pokud není přímý do budgetu, s přestupem ok)
- Home airport: Praha (PRG)

## Jak pracuješ

- Piš vždy česky
- Než cokoli upravíš nebo napíšeš, nejdřív si přečti relevantní soubory
  a ověř si aktuální fakta. Nikdy si nevymýšlej z paměti.
```

> **(Ondřej, klíčový moment):** *"Pravidlo: agent musí číst, ne hádat. Než cokoli napíše, ať si nejdřív přečte zdroj. Jedna věta v CLAUDE.md, která dramaticky sníží halucinace. Tohle je moment, kdy si o Claude Code můžete říct: tomuhle se dá věřit."*

---

## Živé demo — 6 kroků (12 min, 68:00–80:00)

> **Kompletní runbook s prompty a narativem je v `demo-files/prompty.md`.** README níže shrnuje flow — lektor má během dema otevřený `prompty.md` jako primární zdroj.

### Před startem (68:00, 30 s)

Otevři složku `wishlist/` — publikum vidí fotky vysněné destinace. Otevři `CLAUDE.md` — ukaž pravidlo „číst, ne hádat" + travel preferences.

> *"Tyhle fotky jsem si uložil z Instagramu. Za chvilku uvidíte, co s nimi Claude Code udělá."*

### Krok 1 — Postavit subagenta `foto-detektiv` (69:00, 60 s)

Prompt → Claude Code vytvoří `.claude/agents/foto-detektiv.md`. Otevři soubor v editoru — frontmatter + tělo, jeden markdown.

> *"Subagent je Claude, kterého si váš hlavní Claude zavolá. Vlastní role, vlastní kontext, vlastní tón. Hlavní agent si ho za chvíli sám najde podle `description`."*

### Krok 2 — Postavit hook (69:30, 30 s)

Prompt → Claude Code vytvoří `.claude/settings.json` s `PostToolUse` matcherem na `Write`. Otevři JSON v editoru.

> *"Matcher na nástroj je spolehlivější než grepovat transcript. Hook se spustí deterministicky."*

### Krok 3 — Hlavní prompt: dashboard (70:00, ~90 s agent práce)

Jeden velký prompt. Publikum vidí agenta:
1. číst `CLAUDE.md` → budget, pátek po 16:00
2. delegovat fotky na **subagenta `foto-detektiv`** → fialový tag + ASCII lupa + Sherlock verdikt
3. číst `wishlist.md`
4. volat **Kiwi MCP** → reálné lety s cenami
5. dělat **web search** → počasí
6. stavět HTML dashboard v bento stylu
7. zapsat HTML → **hook vystřelí** → prohlížeč se otevře + Mac řekne *„Dashboard je připraven"*

> **(Ondřej):** *"Fialový tag a lupa — to je ten detektiv, kterého jsme před 3 minutami postavili. Hlavní agent si ho našel sám."*

### Krok 4 — Postavit slash command `/pohlednice` (72:15, 30 s)

Prompt → vznikne `.claude/commands/pohlednice.md`. Otevři v editoru.

> *"Subagent, hook, slash command — tři různá rozšíření, jeden vzor: markdown v `.claude/`."*

### Krok 5 — Spustit `/pohlednice` (72:45, 30 s)

V Claude Code napiš `/pohlednice` (nebo `/pohlednice mamce`). Claude přečte dashboard a napíše hravou pohlednici s drobnou lží prozrazenou v PS.

### Krok 6 — Optional: swap design skill (77:00+, pokud zbývá čas)

`npx typeui.sh pull glassmorphism` + prompt „přepiš dashboard glassmorphism stylem". Publikum vidí: stejný obsah, úplně jiný vizuální jazyk.

### Co právě publikum vidělo

Tři věci, které si publikum odnese:
1. **Jeden prompt, osm nástrojů:** CLAUDE.md + subagent + multi-modal + MCP + web search + skill + hook + slash command
2. **Všechno je markdown:** tři rozšíření (subagent / hook / command) — žádná kompilace, žádná instalace
3. **Agent se umí rozšiřovat sám:** postavili jsme si tři součástky promptem během dema

**Tohle je orchestrace.**

---

## Pluginy & marketplace (2 min, 73:00–75:00)

### Discover záložka

```
/plugin → Discover
```

Projeďte si, co je k dispozici:

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

### TypeUI design skills

```bash
npx typeui.sh pull glassmorphism
```

> *"Bento skill jsme právě viděli. Tady je dalších 57 designových stylů — jedním příkazem změníte vizuální jazyk všeho, co agent staví."*

---

## Companion reveal — vše je markdown (1.5 min, 75:00–76:30)

### Reveal: společník je markdown

Otevřete `.claude/skills/claude-code-guide/SKILL.md` v editoru.

> *"Společník, který vás vedl celé dopoledne? Obyčejný markdown. Bento skill na dashboardu? Markdown. Foto-detektiv, kterého jsme před chvílí postavili? Taky markdown. Command `/pohlednice`? Markdown. Všechno, co Claude Code rozšiřuje, je text ve složce `.claude/`."*

### Tři rozšíření, které jste dnes viděli

| Rozšíření | Kde žije | Kdy použít |
|-----------|----------|------------|
| **Skill** | `.claude/skills/<jméno>/SKILL.md` | Stabilní znalost / styl (bento design, firemní copy) |
| **Subagent** | `.claude/agents/<jméno>.md` | Specializovaná role s vlastním kontextem (foto-detektiv, code reviewer) |
| **Slash command** | `.claude/commands/<jméno>.md` | Opakovaný workflow spustitelný jedním lomítkem (`/pohlednice`, `/tydennireport`) |

> *"Vyberete si, co vám sedí, napíšete markdown, máte napořád. Bez instalace, bez kompilace."*

---

## Modely — jak mezi nimi přepínat (1 min, 76:00–77:00)

Claude Code umí běžet na různých modelech. Přepnete je kdykoli příkazem `/model`:

```
/model
```

| Model | Kdy sáhnout |
|-------|-------------|
| **Haiku** | Rychlé a levné úkoly — přečíst soubor, najít text, drobná úprava |
| **Sonnet** | Výchozí volba pro 90 % práce — dobrý poměr rychlost / kvalita |
| **Opus** | Složité plánování, velké refaktory, těžké debugování |

**Tip:** Začněte na Sonnet. Triviální úkol → Haiku. Claude tápe → Opus.

---

## Orchestrace — závěrečný moment (1 min, 77:00–78:00)

> *"Teď se podívejte, co všechno jsme za 15 minut složili dohromady:*
>
> *Pravidla přes CLAUDE.md. Obrázky jako vstup. Reálná data z Kiwi přes MCP. Počasí z webu. Design přes bento skill. Automatické otevření přes hook. A když potřebujete jiný styl — jedním příkazem stáhnete glassmorphism a dashboard vypadá úplně jinak.*
>
> *Každý dílek je jednoduchý. Dohromady je to orchestr a Claude Code je dirigent."*

### Wrap (78:00–80:00)

> *"To je Claude Code. Instaluj. Konfiguruj. Zkomponuj. Zautomatizuj. V pondělí ráno začnete."*

---

## Optional bonus: změna designu (pokud zbývá čas)

Pokud zbývá 2 minuty navíc — swap design skill živě:

```bash
npx typeui.sh pull glassmorphism
```

Pak znovu spustit prompt (nebo jen část s dashboardem):

```
Přepiš vystupy/travel-planner.html — stejný obsah, ale použij glassmorphism design skill.
```

Publikum vidí: **stejný dashboard, úplně jiný vizuální jazyk. Jeden příkaz.**

---

## Checkpoint

Po Level 3 byste měli chápat:
- [ ] Co je CLAUDE.md a jak ho vytvořit (projektový i osobní)
- [ ] Pravidlo "číst, ne hádat" — klíč k důvěryhodným výstupům
- [ ] Že Claude Code vidí a analyzuje obrázky (multi-modal)
- [ ] Co jsou MCP servery a jak rozšiřují agenta o externí služby
- [ ] Co jsou hooks a jak automatizují kroky po dokončení práce
- [ ] Jak nainstalovat plugin z marketplace (`/plugin`) a design skill z TypeUI
- [ ] Že skills jsou obyčejný markdown — můžete si napsat vlastní
- [ ] Jak přepnout model příkazem `/model`
- [ ] Jak všechny kousky (CLAUDE.md + MCP + skills + hooks + models) fungují dohromady

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
- **Web search** — pro aktuální informace z webu (vestavěný v Claude Code)
- **Pravidlo v CLAUDE.md:** *"Než cokoli upravíš, nejdřív si přečti relevantní soubory. Nikdy si nevymýšlej z paměti."*

> **Důležité:** Žádný AI nástroj nemá nulovou míru chyby. Pravidlo "číst, ne hádat" míru chyb dramaticky sníží, ale výstup si stále kontrolujte.

### Hooks — podrobně

Hooks jsou automatické akce, které Claude Code spouští v určitých momentech:

| Hook | Kdy se spustí |
|------|---------------|
| `PreToolUse` | Před použitím nástroje (validace, logování) |
| `PostToolUse` | Po použití nástroje (notifikace, follow-up) |
| `Stop` | Když agent dokončí práci (otevření výsledku, notifikace) |
| `Notification` | Když agent chce upozornit uživatele |

Konfigurace v `.claude/settings.json`. Matchery na nástroj jsou **spolehlivější** než grep transcriptu — trigger je deterministický. Příklad — otevřít každé HTML, které agent zapíše do `vystupy/`, a česky to oznámit:

```json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Write",
      "hooks": [{
        "type": "command",
        "command": "f=$(jq -r '.tool_input.file_path'); case \"$f\" in *vystupy/*.html) open \"$f\"; say -v Zuzana 'Dashboard je připraven' ;; esac"
      }]
    }]
  }
}
```

### Subagenty — podrobně

Subagent je specializovaný agent, kterého si hlavní Claude Code zavolá pro podúkol. Žije v `.claude/agents/<jméno>.md` — frontmatter (`name`, `description`, `tools`) + tělo s instrukcemi. Hlavní agent deleguje podle `description`.

Výhody: ohraničený kontext (subagent nevidí tvůj celý chat), specializovaná role (tón, formát výstupu), volitelně omezený tool-set.

### Vlastní slash commands — podrobně

Command je obyčejný markdown v `.claude/commands/<jméno>.md`. Frontmatter s `description` a `argument-hint`, tělo je prompt. `$ARGUMENTS` se nahradí tím, co napíšeš za slash. Používej pro workflow, který budeš opakovat (týdenní reporty, PR template, release notes).

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
