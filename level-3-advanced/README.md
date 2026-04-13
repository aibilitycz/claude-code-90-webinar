# Level 3: Pokročilé funkce

**Délka:** 15 minut
**Cíl:** Účastníci pochopí, jak si Claude Code přizpůsobit svému stylu (CLAUDE.md), jak ho rozšířit o hotové dovednosti z marketplace (skilly a pluginy), jak ho napojit na externí služby (MCP) a jak ho efektivně používat jako power user.

> **Velká myšlenka Levelu 3:** Claude Code není jen aplikace s pevnými funkcemi. Je to **platforma**, kterou si rozšiřujete sami — vlastními pravidly (CLAUDE.md), hotovými pluginy z oficiálního marketplace, skilly, které sdílíte s kolegy, MCP servery pro napojení na vaše služby. Dnes pro ilustraci: společník webináře, kterého používáte, je přesně jeden takový skill. Můžete se na něj podívat jako na vzor pro svoje vlastní.

## CLAUDE.md — Váš osobní manuál pro Claude Code (7 min)

### Co je CLAUDE.md?
Speciální soubor, který Claude Code čte pokaždé, když ho spustíte v daném projektu. Obsahuje vaše pravidla, preference a kontext. Je to jako "briefing" pro vašeho agenta.

### Proč ho chcete?
Bez CLAUDE.md musíte Claude Code pokaždé znovu vysvětlovat:
- Jaký styl komunikace preferujete
- Jaké technologie používáte
- Jaký formát výstupů chcete
- Co je kontext vašeho projektu

S CLAUDE.md to řeknete **jednou** a agent si to pamatuje.

### Jak ho vytvořit

V kořenové složce projektu vytvořte soubor `CLAUDE.md`:

```markdown
# Pravidla projektu

## Komunikace
- Piš vždy česky
- Používej neformální, ale profesionální tón
- Vysvětluj, co děláš a proč

## Technologie
- Frontend: HTML, CSS, vanilla JavaScript (žádné frameworky)
- Styly: tmavé téma, minimalistický design
- Responzivní design je povinný

## Formát výstupů
- Komentáře v kódu česky
- Soubory pojmenované česky (bez diakritiky)
- README.md u každého projektu

## Než něco napíšeš nebo upravíš
- Nejdřív si přečti relevantní existující soubory
- U knihoven a služeb si ověř aktuální dokumentaci přes web search
- Nikdy si nevymýšlej z paměti
```

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
- Když píšeš o nějakém produktu, službě nebo trendu, nejdřív si
  ověř aktuální fakta přes web search. Nepiš ze své paměti.
- Když navazuješ na předchozí kampaň nebo dokument, nejdřív si
  ho přečti, ať tvůj nový text sedí stylem a obsahem.
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
- Grafy a vizualizace kde to dává smysl
- Executive summary na začátku každého dokumentu

## Než něco navrhneš nebo upravíš
- Nejdřív si přečti zadání projektu, předchozí reporty a poznámky
  ze schůzek, ať tvoje doporučení vychází z reálného kontextu
- Když se odkazuješ na konkrétní data nebo zdroje, ověř si je —
  nikdy neuvádíš čísla nebo citace z paměti
- Když si nejsi jistý, řekni to. Lepší přiznat neznalost než
  hádat.
```

### Live demo
1. Vytvoříme CLAUDE.md pro demo projekt
2. Zadáme úkol **bez** CLAUDE.md → vidíme výchozí výstup
3. Přidáme CLAUDE.md → stejný úkol → vidíme rozdíl
4. Publikum vidí, jak pravidla mění chování agenta

## Než agent něco napíše, ať si to nejdřív přečte (90 sekund)

Tohle je jeden z nejdůležitějších momentů celého webináře. Je to rozdíl mezi nástrojem, kterému se dá věřit, a nástrojem, který vám občas něco namixuje.

### Odkud AI bere informace

Každý AI model — Claude, ChatGPT, Gemini, jakýkoli — má dvě možnosti, odkud čerpat:

1. **Z paměti** — z toho, co se naučil během tréninku. Tahle paměť je zastaralá (často o měsíce nebo i roky) a často nepřesná. ChatGPT to dělá pořád: vymyslí si funkci, která neexistuje, ocituje neexistující článek, ukáže zastaralou cenu.
2. **Z reálných zdrojů** — z vašich souborů, z dokumentace, z webu. Tohle umí Claude Code.

Rozdíl mezi těmito dvěma způsoby je rozdíl mezi *"AI se snaží uhodnout"* a *"AI ví, protože si to právě přečetl"*.

### Pravidlo, které byste si měli zapamatovat

> Než agent něco napíše nebo změní, ať si nejdřív přečte zdroj.

Tři způsoby, jak to v praxi udělat:

#### 1. Soubory ve vašem projektu

Claude Code je čte automaticky. Když mu zadáte úkol, sám si vyhledá relevantní soubory, otevře je a teprve potom začne psát. Vy jen pozorujete, jestli to dělá — když v terminálu vidíte hlášku *"Reading X.md"* nebo *"Looking at Y"*, je to dobré znamení.

#### 2. Web search MCP — když potřebujete dnešek

Když se ptáte na něco aktuálního — cenu produktu, verzi knihovny, co se právě děje ve vašem oboru — bez webového MCP serveru agent odpoví ze zastaralé paměti. **S nainstalovaným web search MCP** si to ověří v reálném čase. Instalace je dvě minuty (přes `/plugin`).

#### 3. Pravidlo v CLAUDE.md

Jedna věta, kterou si tam napíšete:

```markdown
## Pravidlo: nejdřív číst, pak psát

Než cokoli upravíš nebo navrhneš, nejdřív si přečti relevantní existující
soubory. Když pracuješ s nějakou knihovnou nebo službou, ověř si její
aktuální dokumentaci přes web search. Nikdy si nevymýšlej z paměti.
```

Díky téhle jedné větě v projektovém nebo osobním CLAUDE.md přestane Claude Code chybovat z neznalosti.

### Proč to pro vás dnes znamená

Pokud používáte Claude Code na reálnou práci — psaní e-mailů, reportů, kódu, který volá nějakou službu — tahle jedna věta v CLAUDE.md je rozdíl mezi nástrojem, který občas něco namixuje, a nástrojem, kterému se dá věřit.

**Důležité:** Žádný AI nástroj nemá nulovou míru chyby. Tohle pravidlo míru chyb dramaticky sníží, ale výstup si stále kontrolujte. *Číst před psaním* je princip pro agenta. *Kontrolovat po dokončení* je princip pro vás.

## MCP servery — Rozšíření možností (5 min)

### Co jsou MCP (Model Context Protocol) servery?
Rozšíření, která Claude Code připojují k externím nástrojům a službám. Představte si je jako "smysly" pro agenta:

- **Bez MCP:** Claude Code vidí jen soubory ve vaší složce
- **S MCP:** Claude Code se může připojit k databázím, API, cloudovým službám

### Příklady užitečných MCP

> **Poznámka:** Čtení a zápis souborů umí Claude Code nativně — **to není MCP**. Nemusíte nic instalovat. MCP servery přidávají přístup k věcem, které jsou **mimo** váš projekt.

#### Webové MCP
- Přístup k webovým stránkám a API
- Vyhledávání na internetu
- Stahování a zpracování dat z webu

#### Databázové MCP
- Připojení k PostgreSQL, MySQL, SQLite
- Dotazování a analýza dat přímo z databáze
- Vytváření reportů z živých dat

#### Integrační MCP
- GitHub — práce s repozitáři, issues, pull requesty
- Google Drive, Notion — přístup k dokumentům
- Slack — čtení a odesílání zpráv

### Živé demo: MCP za dvě minuty

Ukážeme si, jak připojit webové vyhledávání — jedno z nejužitečnějších MCP:

```bash
# 1. Nejdřív spusťte Claude Code
claude

# 2. Uvnitř Claude Code napište slash command:
/mcp

# 3. Vyberte "Add new server" a dál podle instrukcí
#    (lektor projde krok po kroku)
```

> `/mcp` je **slash command**, který se píše uvnitř běžícího Claude Code — není to příkaz, který se spouští v shellu. Takže nejdřív spusťte `claude`, a teprve potom `/mcp`.

**Po instalaci — ukázka rozdílu:**

Bez MCP:
```
Co je nového v AI tento týden?
→ "Nemám přístup k aktuálním informacím..."
```

S MCP (web search):
```
Co je nového v AI tento týden?
→ Agent vyhledá na webu, zpracuje výsledky, shrne klíčové novinky
```

> **Poznámka:** MCP ekosystém se rychle vyvíjí. Aktuální seznam a návody najdete na [docs.anthropic.com](https://docs.anthropic.com/en/docs/claude-code). Na webináři ukážeme jeden konkrétní příklad — doma si můžete přidat další.

## Skilly a pluginy — marketplace Claude Code (3 min)

MCP servery jsou jeden ze způsobů, jak Claude Code rozšířit. Ale není to jediný. Pojďme to rozebrat od nejjednoduššího.

### Skilly — znalost, kterou si Claude Code čte

**Skill** je obyčejný markdown soubor, který popisuje něco, co Claude Code má vědět nebo umět. Může to být:

- *"Jak správně psát release notes v našem firemním stylu"*
- *"Kompletní průvodce webinářem Intro do Claude Code"* (to je ten, kterého teď používáte)
- *"Jak volat naše interní API"*
- *"Kterou tvář má značka naší firmy používat v textech"*

Claude Code si skilly čte sám, když dávají smysl. Nemusíte jim nic říkat.

**Kde skilly žijí:** Ve dvou hlavních místech, která jsme už zmiňovali u CLAUDE.md:
- **Projektový skill** v `.claude/skills/jmeno/` (v gitu, sdílený s týmem)
- **Osobní skill** v `~/.claude/skills/jmeno/` (jen pro vás, platí všude)

**Jak si přidat vlastní:** Vytvořit složku, do ní `SKILL.md` s jednoduchou hlavičkou (název, popis) a tělem (to, co má Claude Code umět). Pár minut práce. Nic neinstaluje, nic nekompiluje.

### Pluginy — hotové balíčky z marketplace

**Plugin** je balíček, který obsahuje skilly, slash commandy, MCP servery a další věci pod jednou střechou. Distribuuje se přes marketplace — místo, kde Anthropic (a komunita) nabízí hotové pluginy k instalaci jedním klikem.

**Oficiální marketplace najdete:**
- V prohlížeči: [claude.com/plugins](https://claude.com/plugins)
- Přímo uvnitř Claude Code: napište slash command `/plugin`

**Slash command `/plugin` otevře interaktivní panel** se čtyřmi záložkami:
- **Discover** — prohlížení dostupných pluginů
- **Installed** — co už máte nainstalované
- **Marketplaces** — přidávání vlastních (komunitních) marketplaců
- **Errors** — ladění, když něco nejde

**Pár příkladů pluginů z oficiálního marketplace:**

| Plugin | Co dělá |
|--------|---------|
| `github` | Plná integrace s GitHubem — čte issues, vytváří PR, komentuje |
| `linear` | Projektový management v Linearu |
| `notion` | Přístup k Notion workspaces |
| `vercel` | Deployment a management aplikací |
| `figma` | Čtení designů přímo z Figmy |
| `slack` | Psaní a čtení zpráv ve Slacku |
| `sentry` | Monitoring chyb v produkci |
| `atlassian` | Jira + Confluence |

**Instalace je jeden příkaz:**
```
/plugin install github@claude-plugins-official
```

Plugin je ihned aktivní, všechny jeho skilly, slash commandy a MCP napojení se přidají do vašeho Claude Code.

### Live demo: společník webináře je skill

Tohle je moment, který stojí za zdůraznění. Společník, kterého jste dnes používali — ten, co vám dával prompty a odpovídal na otázky — **není žádná magie, ani vestavěná funkce**. Je to obyčejný skill, který si každý z vás může otevřít a přečíst. Najdete ho v naklonovaném repozitáři webináře v `.claude/skills/claude-code-guide/SKILL.md`.

**Lektor ukáže:**
1. Otevře ten soubor v editoru
2. Ukáže, že je to obyčejný markdown
3. Ukáže hlavičku (název, popis)
4. Ukáže strukturu těla
5. Vysvětlí: *"Až půjdete domů, můžete si napsat vlastní skill třeba pro vaše firemní copywriting, pro přípravu prezentací, pro cokoliv. Stačí markdown."*

### Co se tím dá dělat

Důležitý moment pro netechnické publikum: *"Umí Claude Code generovat obrázky?"* — odpověď je *"nativně ne, ale přes skill nebo plugin ano"*. Konkrétní příklady:

- **Generování obrázků** → skill, který volá Gemini Nano Banana Pro nebo FLUX. Napíšete *"udělej mi logo"*, Claude Code obrázek vytvoří a uloží do projektu.
- **Generování zvuku a podcastů** → skill napojený na ElevenLabs.
- **Transkripce videí** → skill volající Whisper.
- **Browser automation** → skill ovládající prohlížeč za vás.
- **Deployment** → Vercel plugin nasadí vaši aplikaci přímo.
- **Databázové dotazy** → PostgreSQL MCP server se ptá vaší databáze v read-only módu.

**Pravidlo:** Když vám někdo řekne *"to Claude Code neumí"*, zeptejte se *"hledali jsme v marketplace?"*. Většinou to už někdo vyřešil.

---

## CLAUDE.md ve dvou úrovních — projektový a osobní (2 min)

CLAUDE.md může žít na **dvou úrovních** a každá z nich slouží k něčemu jinému.

### Projektový CLAUDE.md
- **Kde leží:** `CLAUDE.md` v kořeni projektu
- **Pro co platí:** jen pro tenhle konkrétní projekt
- **Sdílení:** dá se commitnout do gitu a sdílet s týmem
- **Příklad obsahu:** *"V tomhle projektu piš česky. Používej React a Tailwind. Výstupy v Markdownu."*

### Osobní (uživatelský) CLAUDE.md
- **Kde leží:** `~/.claude/CLAUDE.md` ve vašem domovském adresáři
- **Pro co platí:** pro **všechny** projekty, které otevřete
- **Sdílení:** je jen vaše, nikdo jiný ho nevidí
- **Příklad obsahu:** *"Jsem marketér, technické věci vysvětluj po lopatě. Odpovídej česky. Buď stručný."*

### Který si zvolit?

| Co potřebujete | Co použít |
|----------------|-----------|
| Pravidla pro konkrétní projekt (technologie, design systém) | Projektový CLAUDE.md |
| Osobní preference, které chcete všude (jazyk, tón) | Uživatelský CLAUDE.md v `~/.claude/` |
| Obojí najednou | Klidně oba najednou — Claude Code si je zkombinuje |

> **Tip:** Začněte s uživatelským CLAUDE.md (jeden soubor, platí všude) a projektový si přidejte až u projektů, které potřebují vlastní pravidla.

## Přepínání modelů — rychlost versus kvalita (1 min)

Claude Code umí jezdit na třech hlavních modelech od Anthropic:

| Model | Kdy se hodí | Vlastnosti |
|-------|-------------|-----------|
| **Haiku** | Velmi rychlé a jednoduché úkoly — přečíst soubor, něco najít, drobná úprava | Nejrychlejší, nejlevnější |
| **Sonnet** | 90 % běžné práce — výchozí volba pro většinu uživatelů | Rychlost i schopnosti v jednom |
| **Opus** | Složité úkoly, velké refaktoringy, rozsáhlé projekty | Pomalejší, ale nejchytřejší a s největším kontextem |

Přepínáte příkazem `/model` přímo uvnitř Claude Code. **Výchozí je Sonnet** — pro většinu práce naprosto stačí. Na Opus přepněte, když cítíte, že Sonnet nestíhá. Na Haiku přepněte, když chcete jen rychle něco přečíst nebo najít.

## Tipy pro power usery (3 min)

### Užitečné slash commands
| Příkaz | Co dělá |
|--------|---------|
| `/help` | Zobrazí nápovědu |
| `/clear` | Vyčistí kontext konverzace |
| `/compact` | Zkomprimuje historii pro delší konverzace |
| `/cost` | Ukáže spotřebu tokenů |

### Efektivní prompty
- **Buďte konkrétní:** "Vytvoř landing page" → "Vytvoř landing page pro fitness studio, tmavé téma, sekce: hero s videem, 3 služby, ceník, recenze, kontaktní formulář"
- **Definujte omezení:** "Pouze HTML a CSS, žádný JavaScript" nebo "Použij React a Tailwind"
- **Určete formát:** "Výstup jako HTML soubor" nebo "Markdown dokument"
- **Dejte kontext:** "Jsem marketér, potřebuji..." nebo "Toto je pro interní prezentaci..."

### Kdy Claude Code nepoužívat
- **Citlivá data:** Hesla, API klíče, osobní údaje — nezadávejte do promptů
- **Právní dokumenty:** Pro smlouvy a právní texty vždy konzultujte odborníka
- **Kritické systémy:** Pro produkční servery a databáze buďte opatrní
- **100% přesnost:** Agent může udělat chyby — vždy kontrolujte výstup

### Bezpečnostní pravidla
1. Nikdy nezadávejte hesla ani API klíče přímo do promptu
2. Kontrolujte, co agent dělá — čtěte jeho výstup
3. Pro citlivé projekty používejte lokální modely nebo omezte přístup
4. Pravidelně aktualizujte Claude Code na nejnovější verzi

## Checkpoint

Po Level 3 byste měli chápat:
- [ ] Co je CLAUDE.md a jak ho vytvořit pro svůj projekt
- [ ] Rozdíl mezi projektovým a osobním CLAUDE.md a kdy který použít
- [ ] Co jsou MCP servery a jak Claude Code napojují na externí služby
- [ ] Co jsou skilly a pluginy, kde najdete marketplace a jak se instalují
- [ ] Jak si sami napsat jednoduchý skill
- [ ] Že společník webináře je skill, na který se můžete podívat
- [ ] Rozdíl mezi modely Haiku, Sonnet a Opus a kdy který použít
- [ ] Základní slash commands pro efektivní práci
- [ ] Kdy Claude Code použít a kdy ne
- [ ] Bezpečnostní pravidla pro práci s AI agentem
