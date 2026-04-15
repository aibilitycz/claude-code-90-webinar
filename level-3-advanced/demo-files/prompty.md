# Level 3 — runbook pro živé demo

Šest kroků v pořadí. Každý má: kdy, co uděláš v terminálu, co vložíš do Claude Code, co má publikum vidět.

**Před demem jednou spusť:**
```bash
rm -rf .claude/agents .claude/commands .claude/settings.json
```
Tím máš čistý stav. V repu zůstane jen `.claude/skills/bento/` a `.claude/settings.local.json`.

**Předpoklady (už hotové před webinářem, viz `setup.md`):**
- Kiwi MCP přidaný (`claude mcp add …`)
- Bento skill stažený (`npx typeui.sh pull bento`)
- Hlas Zuzana funguje (`say -v Zuzana test`)

---

## Krok 1 — Postavíme subagenta `foto-detektiv` (69:00, 60 s)

**Proč:** Specializovaný agent, kterého si hlavní Claude sám zavolá na analýzu fotek.

**Prompt do Claude Code:**

```
Vytvoř subagenta v .claude/agents/foto-detektiv.md.
Role: destinační detektiv ve stylu Sherlocka Holmese.
Dostane složku s fotkami, hledá stopy (architektura, vegetace,
světlo, nápisy, jídlo) a navrhne 2–3 kandidátní destinace
s verdiktem. Česky, teatrálně, ale opřený o konkrétní stopy.
Barva fialová. Každou odpověď začíná ASCII bannerem s lupou.
```

**Co publikum uvidí:** vznikne `.claude/agents/foto-detektiv.md` s frontmatterem (`name`, `description`, `tools`, `color: purple`) + tělo s instrukcemi. Otevři ho v editoru.

**Narativ:** *„Celý subagent je jeden markdown. Hlavní agent ho za chvíli sám najde podle `description`."*

---

## Krok 2 — Postavíme hook (69:30, 30 s)

**Proč:** Automatizace — kdykoli agent zapíše HTML do `vystupy/`, otevře se prohlížeč a Mac česky promluví.

**Prompt do Claude Code:**

```
Přidej do .claude/settings.json hook: pokaždé, když zapíšeš
HTML soubor do vystupy/, otevři ho v prohlížeči a český
hlas "Zuzana" nahlas řekne "Dashboard je připraven, koukej
do prohlížeče". Použij PostToolUse matcher "Write".
```

**Co publikum uvidí:** vznikne `.claude/settings.json` (~6 řádků JSON). Otevři v editoru.

**Narativ:** *„Matcher na nástroj `Write` je spolehlivější než grepovat transcript. Hook se spustí deterministicky."*

---

## Krok 3 — Hlavní prompt (70:00, ~90 s agent práce)

**Proč:** Tady se všechno spojí — CLAUDE.md, subagent, Kiwi MCP, web search, bento skill, hook.

**Prompt do Claude Code:**

```
Postav mi travel dashboard.

Podívej se na fotky v wishlist/ a přečti wishlist.md.
Přečti moje travel preferences z CLAUDE.md.

1. Z fotek odhadni destinaci — navrhni 2–3 varianty,
   které sedí, a vyber tu nejlepší podle mých preferencí.
2. Pro vybranou destinaci najdi přes Kiwi MCP
   nejlepší let z mého home airportu na příští víkend.
3. Vytvoř vystupy/travel-planner.html — dashboard
   s výsledky letu, počasím (web search), plánem
   aktivit podle mých fotek a praktickými tipy
   pro konkrétní destinaci (transport z letiště, MHD,
   dýško, místní fráze, co obejít).

   Design: použij bento design skill, ale přitáhni to
   o level výš — wow efekt, ne jen hezké kartičky:
   - nahoře hero carousel s fotkami z wishlist/
     (auto-play, jemný Ken Burns zoom, plynulý fade,
     popisek "co na téhle fotce sedí na destinaci")
   - scroll-driven reveal animace u karet
   - živý detail: odpočet do odletu, teploměr s aktuální
     teplotou, mapka trasy letu (SVG oblouk PRG→LIS)
   - typografie: velký serif display na čísla, drobný
     mono na letové kódy, vzdušné mřížky
   - všechno v jednom .html souboru, inline CSS + JS,
     žádné externí závislosti kromě Google Fonts
```

**Co publikum uvidí:**
1. Agent čte `CLAUDE.md` → „budget, pátek po 16:00"
2. Deleguje na `foto-detektiv` → **fialový tag + ASCII lupa + Sherlock verdikt**
3. Čte `wishlist.md`
4. Volá **Kiwi MCP** → reálné lety s cenami
5. **Web search** → počasí na příští víkend
6. Staví HTML dashboard v bento stylu
7. Zapíše HTML → **hook vystřelí** → prohlížeč se otevře + Mac řekne *„Dashboard je připraven"*

**Narativ:** *„Všimněte si fialového tagu a lupy — to je detektiv, kterého jsme před 3 minutami postavili. Hlavní agent si ho našel sám."*

---

## Krok 4 — Postavíme slash command `/pohlednice` (72:15, 30 s)

**Proč:** Opakovatelný workflow za lomítkem. Stejný trik jako subagent — jen markdown.

**Prompt do Claude Code:**

```
Vytvoř slash command v .claude/commands/pohlednice.md.
Command se jmenuje "pohlednice". Když ho spustím, přečte
vystupy/travel-planner.html a napíše 5–8řádkovou pohlednici
"z dovolené" — česky, osobně, jako bych tam skutečně byl.
Použij konkrétní detaily z dashboardu (destinace, jídlo,
místa). Přidej jednu drobnou smyšlenost a na konci PS,
kde tu lež žertovně prozradíš.
Volitelný argument: adresát (např. "mamce") — pokud je,
oslov ho na začátku.
```

**Co publikum uvidí:** vznikne `.claude/commands/pohlednice.md` s frontmatterem (`description`, `argument-hint`) + tělo promptu. Otevři v editoru.

**Narativ:** *„Subagent, hook, slash command — tři různá rozšíření, jeden vzor: markdown v `.claude/`."*

---

## Krok 5 — Spustíme `/pohlednice` (72:45, 30 s)

**V Claude Code napiš:**

```
/pohlednice
```

Nebo s adresátem:

```
/pohlednice mamce
```

**Co publikum uvidí:** Claude přečte hotový dashboard a napíše 5–8řádkovou pohlednici s jednou drobnou lží prozrazenou v PS. Hravý, osobní tón.

---

## Krok 6 — Optional: swap design skill (77:00+, pokud zbývá čas)

**V terminálu:**

```bash
npx typeui.sh pull glassmorphism
```

**Prompt do Claude Code:**

```
Přepiš vystupy/travel-planner.html — stejný obsah,
ale použij glassmorphism design skill místo bento.
```

**Co publikum uvidí:** stejný dashboard, úplně jiný vizuální jazyk. Jeden příkaz = nový styl.

---

## Checklist pro lektora (před demem)

- [ ] `rm -rf .claude/agents .claude/commands .claude/settings.json` — čistý stav
- [ ] `.claude/skills/bento/SKILL.md` existuje
- [ ] `claude mcp list` ukazuje `kiwi-com-flight-search` connected
- [ ] `say -v Zuzana test` v terminálu mluví
- [ ] Složka `vystupy/` existuje (nebo ji agent vytvoří)
- [ ] Prompty 1, 2, 3, 4 máš v nějakém snippetu / pasteboard manageru

## Co když něco selže

Jedna pojistka: **předtočený screencast** ze zkoušky (10 sekund). Nic neoprávej živě. Pokud padne:

- **Subagent/hook/command tvorba** → přejdi na screencast, pokračuj
- **Kiwi MCP timeout** → screencast
- **Dashboard vypadá špatně** → *„Živé demo, reálný agent — doma si to rozjedete"*
- **Hlas Zuzana nemluví** → prohlížeč se stejně otevře, nekomentuj
