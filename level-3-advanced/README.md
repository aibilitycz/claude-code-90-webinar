# Level 3: Pokročilé funkce

**Délka:** 15 minut
**Cíl:** Účastníci pochopí, jak Claude Code přizpůsobit svému stylu (CLAUDE.md), rozšířit jeho schopnosti (MCP) a používat ho efektivně jako power user.

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
```

### Live demo
1. Vytvoříme CLAUDE.md pro demo projekt
2. Zadáme úkol **bez** CLAUDE.md → vidíme výchozí výstup
3. Přidáme CLAUDE.md → stejný úkol → vidíme rozdíl
4. Publikum vidí, jak pravidla mění chování agenta

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
- [ ] Co jsou MCP servery a jak rozšiřují možnosti
- [ ] Rozdíl mezi modely Haiku, Sonnet a Opus a kdy který použít
- [ ] Základní slash commands pro efektivní práci
- [ ] Kdy Claude Code použít a kdy ne
- [ ] Bezpečnostní pravidla pro práci s AI agentem
