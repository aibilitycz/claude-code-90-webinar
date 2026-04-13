# Intro do Claude Code: Jak používat Claude Code i když nejste vývojář

**Cílová skupina:** Marketéři, projektoví manažeři, podnikatelé, kreativci
**Délka:** 90 minut
**Úroveň:** 2 — Vytváření AI asistentů (znáte AI, chcete poznat Claude Code)
**Formát:** Online webinář (Zoom) — live demo s Q&A

## O čem je tento webinář

Všichni mluví o Claude Code. My vám ukážeme, jak ho skutečně používat.

Za 90 minut pochopíte, co umí a proč mění pravidla hry. Společně ho nainstalujeme, zadáte mu první úkol a uvidíte, jak pracuje. Žádná suchá teorie — rovnou akce.

## Co se naučíte

- Co je Claude Code a proč ho chcete používat
- Jak ho nainstalovat krok za krokem
- Jak zadat první úkol a sledovat, jak agent pracuje a co vytvoří
- Jaké workflow použít pro weby, výzkum, automatizace a další projekty
- Odejdete s pochopením, jak začít vlastní projekt

## Struktura kurzu

### [Průvodce lektora](./00-session-guide.md)
Kompletní instrukce pro vedení 90minutového webináře s časovým rozpisem.

### Postupné učení po levelech:

#### **Level 0: [Úvod & Instalace](./level-0-introduction/)** (15 min)
- Co je Claude Code a kde se vzal
- Claude Code vs Cursor vs ChatGPT — kde se liší
- Cena a plány — co potřebujete k používání
- Terminál za 5 minut — nebojte se příkazového řádku
- Živá instalace krok za krokem

#### **Level 1: [První úkol](./level-1-beginner/)** (20 min)
- Zadání prvního úkolu — sledujte, jak agent myslí a pracuje
- Autonomní tvorba souborů — Claude Code vytváří celé projekty
- Samoopravný cyklus — když narazí na chybu, opraví ji sám
- Vícekrokové uvažování — jak rozkládá složité úkoly

#### **Level 2: [Showcase workflow](./level-2-intermediate/)** (25 min + 2× micro-Q&A)
- Tvorba webové aplikace od nuly
- Práce s dokumenty a emaily — shrnutí, briefingy, komunikace
- Automatizace — zpracování souborů a opakujících se úkolů
- Rychlý přehled dalších možností (debugging, Git, dokumentace...)

#### **Level 3: [Pokročilé funkce](./level-3-advanced/)** (14 min)
- CLAUDE.md — jak "natrénovat" Claude Code na váš styl
- MCP servery — jak propojit Claude Code s dalšími nástroji (s live demo)
- Paměť a přepínání modelů
- Tipy pro power usery

### Q&A + Závěr (12 min)

## Materiály

### Průvodci
- **[Průvodce lektora](./00-session-guide.md)** — Podrobný scénář celého webináře
- **[Quick Start CZ](./cheat-sheet/claude-code-quickstart-cs.md)** — Váš první půlhodina s Claude Code
- **[Quick Start EN](./cheat-sheet/claude-code-quickstart-en.md)** — Your first 30 minutes with Claude Code

### Další zdroje
- [Claude Code dokumentace](https://docs.anthropic.com/en/docs/claude-code)
- [Anthropic](https://www.anthropic.com)
- [Claude Code na GitHubu](https://github.com/anthropics/claude-code)

---

## Pro účastníky: Aktivujte si společníka webináře

Tento repozitář obsahuje **companion skill** — pomocníka v Claude Code, který vás provede celým webinářem. Skill zná strukturu webináře, má připravené prompty k vyzkoušení, odpovídá na časté otázky a pomůže vám, když se někde zaseknete.

### Jak ho aktivovat (3 kroky)

```bash
# 1. Naklonujte si tento repozitář (nebo si ho stáhněte jako ZIP)
git clone https://github.com/aibility/claude-code-90-webinar.git
cd claude-code-90-webinar

# 2. Spusťte Claude Code ve složce
claude

# 3. V Claude Code se zeptejte (cokoliv z tohoto zafunguje jako test):
#    "Co mám zkusit v Try Moment #1?"
#    "Kolik Claude Code stojí?"
#    "Mám problém s instalací Node.js"
```

Skill se aktivuje automaticky, když bude dávat smysl — nemusíte nic konfigurovat. Celá znalost webináře je v `skills/claude-code-guide/`.

### Co když skill nefunguje?

Soubory skillu jsou jen obyčejné markdown. Pokud se skill z nějakého důvodu neaktivuje, otevřete si `skills/claude-code-guide/SKILL.md` a reference v `skills/claude-code-guide/references/` přímo v editoru — jsou čitelné jako běžná dokumentace.

---

## Požadavky

**Pro účastníky:**
- Počítač (Mac/Linux/Windows), internet a otevřená hlava
- Před webinářem obdržíte krátký návod na přípravu

**Pro lektory:**
- Přečtěte si [Průvodce lektora](./00-session-guide.md)
- Mějte Claude Code nainstalovaný a funkční
- Připravte si projekt/složku pro live demo
- Ověřte aktuální stav funkcí Claude Code (rychle se vyvíjí)
