# Intro do Claude Code: Jak používat Claude Code i když nejste vývojář

> **Průvodce online:** [aibilitycz.github.io/claude-code-90-webinar](https://aibilitycz.github.io/claude-code-90-webinar/) — krok za krokem, vlastním tempem, bez programování.

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
- Terminál za 2 minuty — nebojte se příkazového řádku
- Živá instalace krok za krokem

#### **Level 1: [První úkol](./level-1-beginner/)** (15 min)
- Zadání prvního úkolu — sledujte, jak agent myslí a pracuje
- Autonomní tvorba souborů — Claude Code vytváří celé projekty
- Samoopravný cyklus — když narazí na chybu, opraví ji sám
- Vícekrokové uvažování — jak rozkládá složité úkoly

#### **Level 2: [Dva reálné workflow + skilly a pluginy](./level-2-intermediate/)** (20 min)
- Demo A — denní obsahová pipeline, kterou Ondřej používá pro svůj blog (scheduled retrieval z RSS, webu a zachycených myšlenek)
- Demo B — Slavův reálný workflow s Claude Code (konkrétní obsah podle jeho volby)
- Skilly a pluginy — jak si Claude Code rozšiřujete sami, přehled tří ekosystémů (Anthropic oficiální marketplace, compound-engineering, heart-of-gold-toolkit)

#### **Level 3: [Pokročilé funkce](./level-3-advanced/)** (15 min)
- CLAUDE.md — jak "natrénovat" Claude Code na váš styl
- MCP servery — jak propojit Claude Code s dalšími nástroji (s live demo)
- Paměť a přepínání modelů
- Tipy pro power usery

### Q&A + Závěr (12 min)

## Materiály

### Průvodci
- **[Průvodce lektora](./00-session-guide.md)** — Podrobný scénář celého webináře
- **[Workshop visuals](./workshop-visuals.html)** — Vizuální podklady k Levelu 0, 1 a 3 (otevřete v prohlížeči)
- **[Quick Start CZ](./cheat-sheet/claude-code-quickstart-cs.md)** — Váš první půlhodina s Claude Code
- **[Quick Start EN](./cheat-sheet/claude-code-quickstart-en.md)** — Your first 30 minutes with Claude Code

### Další zdroje
- [Claude Code dokumentace](https://docs.anthropic.com/en/docs/claude-code)
- [Anthropic](https://www.anthropic.com)
- [Claude Code na GitHubu](https://github.com/anthropics/claude-code)

---

## Pro účastníky: aktivujte si společníka webináře

V tomhle repozitáři je **companion skill** — pomocník v Claude Code, který vás provede celým webinářem. Skill zná, jak je webinář rozvržený, má přichystané prompty k vyzkoušení, odpovídá na časté otázky a pomůže vám, když se někde zaseknete.

### Jak Claude Code skilly fungují (rychle)

Claude Code si skilly sám načítá ze dvou míst:

1. **`.claude/skills/`** — uvnitř projektu. Skill je aktivní jen tehdy, když spustíte `claude` právě v té složce.
2. **`~/.claude/skills/`** — ve vašem domovském adresáři. Skill je aktivní ve všech Claude Code sessions, ať jste kdekoli.

Náš skill najdete v repozitáři v `.claude/skills/claude-code-guide/`. Můžete ho používat dvěma způsoby:

### Jednoduchá cesta (pro webinář) — naklonujte a spusťte

```bash
# 1. Naklonujte si repozitář
git clone https://github.com/aibilitycz/claude-code-90-webinar.git
cd claude-code-90-webinar

# 2. Spusťte Claude Code přímo v téhle složce
claude

# 3. Skill už je aktivní — zkuste se zeptat:
#    "Co mám zkusit, zkouším to poprvé?"
#    "Kolik Claude Code stojí?"
#    "Mám problém s instalací Node.js"
```

Skill bude fungovat **dokud pracujete v téhle složce**. Pro webinář a první experimenty to stačí.

### Trvalá cesta (na dlouho) — zkopírujte si ho domů

Když chcete mít skill k dispozici i mimo repozitář, zkopírujte si ho do domovského adresáře:

```bash
# macOS / Linux
mkdir -p ~/.claude/skills
cp -R .claude/skills/claude-code-guide ~/.claude/skills/

# Windows PowerShell
New-Item -Path "$HOME\.claude\skills" -ItemType Directory -Force
Copy-Item -Path ".claude\skills\claude-code-guide" -Destination "$HOME\.claude\skills\" -Recurse
```

Od téhle chvíle bude skill aktivní v každém `claude` session, který si spustíte — stačí se zeptat.

### Jak si ověřit, že skill běží

V Claude Code zkuste napsat cokoli z těchto otázek:

- *"Co mám zkusit, zkouším to poprvé?"* — měli byste dostat tři možnosti a konkrétní prompt
- *"Kolik Claude Code stojí?"* — měli byste dostat krátký přehled plánů
- *"Mám problém s instalací Node.js"* — měli byste dostat návod, jak to vyřešit

Když vám místo toho Claude Code odpoví obecně (*"O webináři nic nevím"*), skill se nenačetl. Zkontrolujte, jestli jste ve správné složce (repozitář webináře), nebo jestli jste si skill zkopírovali do `~/.claude/skills/`.

### Co když skill nefunguje

Soubory skillu jsou obyčejné markdowny. Pokud se z nějakého důvodu nenačte, otevřete si `.claude/skills/claude-code-guide/SKILL.md` a `.claude/skills/claude-code-guide/references/` přímo v editoru (VS Code, Obsidian, cokoli, co umí markdown). Jsou čitelné jako běžná dokumentace.

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
