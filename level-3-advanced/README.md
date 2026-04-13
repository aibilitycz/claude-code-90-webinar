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

### Příklady užitečných MCP:

> **Poznámka:** Čtení a zápis souborů v Claude Code je **nativní** — není to MCP. Nemusíte nic instalovat. MCP servery přidávají přístup k věcem **mimo** váš projekt.

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

### Live demo: Instalace MCP za 2 minuty

Ukážeme si připojení webového vyhledávání — jedno z nejužitečnějších MCP:

```bash
# 1. Nejdřív spusťte Claude Code
claude

# 2. Uvnitř Claude Code napište slash command:
/mcp

# 3. Vyberte "Add new server" a následujte instrukce
#    (lektor ukáže krok za krokem v rozhraní)
```

> `/mcp` je **slash command** uvnitř běžícího Claude Code, ne shell příkaz. Musíte nejdřív spustit `claude` a teprve pak ho napsat.

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

## CLAUDE.md na dvou úrovních — projektový a osobní (2 min)

CLAUDE.md může žít na **dvou úrovních**, a každá slouží k něčemu jinému:

### Projektový CLAUDE.md
- Umístění: `CLAUDE.md` v kořeni projektu
- Rozsah: platí pro tento konkrétní projekt
- Sdílení: můžete commitnout do gitu a sdílet s týmem
- Příklad obsahu: "V tomto projektu piš česky. Používej React a Tailwind. Výstupy v Markdown."

### Osobní (user-level) CLAUDE.md
- Umístění: `~/.claude/CLAUDE.md` (ve vašem domovském adresáři)
- Rozsah: platí pro **všechny** projekty, které otevřete
- Sdílení: pouze vaše, nikdo jiný ho nevidí
- Příklad obsahu: "Jsem marketér, vysvětluj technické věci laicky. Odpovídej česky. Buď stručný."

### Který zvolit?

| Potřeba | Použijte |
|---------|----------|
| Pravidla pro konkrétní projekt (tech stack, design system) | Projektový CLAUDE.md |
| Osobní preference, které chcete všude (styl komunikace, jazyk) | Osobní CLAUDE.md v `~/.claude/` |
| Obojí najednou | Oba — Claude Code je kombinuje |

> **Tip:** Začněte s osobním CLAUDE.md (jeden soubor, platí všude) a přidejte projektový jen pro projekty s konkrétními pravidly.

## Přepínání modelů — rychlost vs. kvalita (1 min)

Claude Code může běžet na třech hlavních modelech od Anthropic:

| Model | Kdy použít | Charakteristika |
|-------|-----------|----------------|
| **Haiku** | Velmi rychlé a jednoduché úkoly — čtení, prohledávání, malé úpravy | Nejrychlejší, nejlevnější |
| **Sonnet** | 90 % běžné práce — default volba pro většinu uživatelů | Rovnováha rychlosti a schopností |
| **Opus** | Složité úkoly, velké refactoringy, rozsáhlé projekty | Pomalejší, ale nejchytřejší, největší kontextové okno |

Přepínáte příkazem `/model` přímo v Claude Code. **Default je Sonnet** — pro většinu úkolů naprosto stačí. Na Opus přepněte, když Sonnet "nestíhá" myslet. Na Haiku přepněte, když chcete jen rychle něco prohledat nebo přečíst.

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
