# Průvodce lektora — Intro do Claude Code

## Obsah

- [Rozdělení prezentujících](#rozdělení-prezentujících)
- [Časový rozvrh (90 minut)](#časový-rozvrh-90-minut)
- [Scénáře klíčových momentů](#scénáře-klíčových-momentů)
- [Co-teaching — spolupráce lektorů](#co-teaching--spolupráce-lektorů)
- [Role Petry během Try Moments](#role-petry-během-try-moments)
- [Klíčové body k zdůraznění](#klíčové-body-k-zdůraznění)
- [Tipy pro live demo](#tipy-pro-live-demo)
- [Technické požadavky](#technické-požadavky)
- [Přípravný email](#přípravný-email--co-poslat-účastníkům)

## Rozdělení prezentujících

Formát je **co-teaching** — oba prezentující (Ondřej + Slava) jsou viditelní a slyšitelní po celých 90 minut. Nejde o tag-team, kde jeden mluví a druhý mlčí. Role se dělí podle toho, kdo co dělá nejlépe:

| Role | Kdo | Odpovědnost |
|------|-----|-------------|
| **Demo driver** | Slava | Ruce na klávesnici, spouští prompty, popisuje technický flow |
| **Context lead** | Ondřej | Byznysové zarámování, reakce publika, otázky za diváky, meta opening |
| **Facilitátor** | Petra | Chat, ankety, surfuje výhry z Try Moments, triáž zaseknutých účastníků |

Konkrétní předávky slova (co-teaching handoff anchors) jsou v sekci [Co-teaching](#co-teaching--spolupráce-lektorů).

## Časový rozvrh (90 minut)

| Čas | Sekce | Lead | Minuty |
|-----|-------|------|--------|
| 0–3 | Meta opening ("Postaveno Claude Codem") | Ondřej | 3 |
| 3–15 | Level 0: Úvod + instalace + aktivace skillu | Slava (demo) + Ondřej (context) | 12 |
| 15–30 | Level 1: První úkol (demo) | Slava (demo) + Ondřej (reakce) | 15 |
| 30–38 | **TRY MOMENT #1** | Oba + Petra v chatu | 8 |
| 38–58 | Level 2: Workflow showcase (2 workflow live + 1 slovně) | Slava (demo) + Ondřej (rámuje) | 20 |
| 58–66 | **TRY MOMENT #2** | Oba + Petra v chatu | 8 |
| 66–78 | Level 3: CLAUDE.md + MCP + skill reveal | Slava (demo) + Ondřej (context) | 12 |
| 78–86 | Otevřené Q&A | Oba + Petra (moderuje otázky) | 8 |
| 86–90 | Závěr + Circle komunita + další kroky | Ondřej | 4 |

### Level 0: Úvod & Instalace (0–15 minut)

#### 0–3 min: Meta opening — "Postaveno Claude Codem"

**Kdo vede:** Ondřej

**Scénář** (viz [Scénáře klíčových momentů](#scénáře-klíčových-momentů) pro plný text)

Rychlá konfese: tento webinář, cheat sheet, skill — vše postavené s Claude Codem. Neprodáváme teorii, ukazujeme, jak sami pracujeme.

#### 3–7 min: Co je Claude Code

- AI agent, který běží v terminálu (a dalších rozhraních — viz níže)
- Ne chat, ne editor — autonomní spolupracovník, který čte soubory, píše kód, spouští příkazy, opravuje chyby
- **Aktuální kontext v dubnu 2026:** Claude Code není jen CLI. Běží na šesti povrchách: terminál, desktop aplikace, web (claude.ai/code), iOS, VS Code a JetBrains rozšíření. Všechny sdílejí stejnou paměť, CLAUDE.md a MCP servery. **Dnes ukazujeme terminál, protože v něm nejlépe vidíte, jak agent pracuje** — ale kde jste vy, tam jde on.

#### 5–7 min: Claude Code vs Cursor vs ChatGPT

> **Důležité pro korektnost:** V dubnu 2026 Cursor i Claude Code dělají většinu věcí podobně — oba běží autonomně, spouští příkazy, opravují chyby. Rozdíl není v schopnostech, ale v **prostředí**.

- **ChatGPT** = konverzace — zeptáte se, dostanete odpověď. Rozhraní je chat.
- **Cursor** = AI agent v editoru — plnohodnotné IDE s AI, která autonomně kóduje, refactoruje a opravuje. Pro ty, kdo chtějí vše v jednom vývojářském prostředí.
- **Claude Code** = AI agent, který nežije v editoru — běží v terminálu, v desktopu, ve webu, nebo jako rozšíření pro VS Code. Kam jdete vy, tam jde on. Pro ty, kdo nechtějí být uvězněni v IDE.

> **Poznámka o OpenAI Codex:** OpenAI má vlastní konkurenční nástroj, **Codex CLI**, který funguje na stejném principu jako Claude Code. Dnes ukazujeme Claude Code, ale pokud vám tento způsob práce padne do oka, Codex je přímý bratranec.

#### 7–9 min: Cena a plány

Rychlý přehled:
- **Claude Pro** ($20/měsíc) — obsahuje Claude Code, základní limity, vhodné pro začátek
- **Claude Max 5×** ($100/měsíc) — 5× vyšší limity pro pravidelné používání
- **Claude Max 20×** ($200/měsíc) — pro intenzivní každodenní práci
- **API credits** — pay-per-use alternativa pro pokročilé

**Doporučení:** Začněte s Pro plánem, přejděte nahoru, až zjistíte, kolik skutečně spotřebujete.

#### 9–11 min: Terminál za 2 minuty

Rychlé uklidnění pro netechnické publikum:
- Jak otevřít terminál (Mac: `Cmd+Space` → "Terminal"; Windows: `Win` → "PowerShell"; Linux: `Ctrl+Alt+T`)
- "Terminál je jen místo, kam píšete příkazy. Nic víc."
- Ukázka: napsat `node --version`, zmáčknout Enter, vidět výsledek. **To je vše, co potřebujete umět.**

#### 11–15 min: Živá instalace + aktivace skillu

**Kdo vede:** Slava (demo), Ondřej sleduje chat a odpovídá na otázky v chatu

1. Instalace Claude Code:
   ```bash
   npm install -g @anthropic-ai/claude-code
   ```
2. Přihlášení — prvním spuštěním `claude`, provede se otevření prohlížeče
3. **Aktivace companion skillu:**
   ```bash
   git clone https://github.com/aibility/claude-code-90-webinar.git
   cd claude-code-90-webinar
   claude
   ```
   Skill je v `.claude/skills/claude-code-guide/` uvnitř repozitáře. Když spustíte `claude` v tomto adresáři, Claude Code si skill automaticky načte — **žádná instalace, žádná konfigurace**.

4. Rychlý test: *"Co mám zkusit v Try Moment #1?"* — Claude Code odpoví pomocí skillu

> **Moment k zdůraznění (Slava):** "Vidíte tu složku `.claude/skills/`? To je místo, kam Claude Code kouká, když spustíte `claude` v jakémkoliv projektu. Kdokoliv si sem může přidat vlastní skill. Náš dnešní společník je přesně takový skill — obyčejný markdownový soubor, který vám Claude Code čte pokaždé, když ho to zajímá."
>
> **Ondřej navazuje:** "A toto je váš společník pro celý zbytek webináře. Až se někde zaseknete — zeptejte se přímo Claude Code, skill vám odpoví. Pokud po webináři zjistíte, že ho chcete mít k dispozici mimo tuhle složku, v README je návod, jak ho zkopírovat domů — `~/.claude/skills/`. Pak ho budete mít kamkoliv jdete."

### Level 1: První úkol (15–30 minut)

**Kdo vede:** Slava driver, Ondřej navigator

- **15–17 min:** Zadání prvního úkolu — osobní webová stránka
- **17–24 min:** Anatomie agentovy práce — Slava narrativizuje, Ondřej reaguje za publikum ("Počkej, to právě sám vytvořil ten soubor?" / "A co kdyby se spletl, co by se stalo?")
- **24–28 min:** Self-correction a permission model — ukázat moment, kdy Claude Code žádá povolení
- **28–30 min:** Výsledek v prohlížeči, jedna rychlá iterace

**Ondřejovy klíčové reakce** (co-teaching):
- Když Claude Code začne "přemýšlet": *"Tohle je moment, kterému většina lidí nevěří, dokud to neuvidí na vlastní oči."*
- Když agent autonomně vytvoří soubor: *"Já bych to ručně dělal 20 minut. On to udělal za 10 sekund."*
- Když agent žádá povolení: *"A tady je to, proč tomu můžete věřit — nic se neděje bez vašeho souhlasu."*

### TRY MOMENT #1 (30–38 minut)

**Kdo vede:** Oba prezentující viditelní, Petra v chatu

Viz [Scénář Try Moment #1](#scénář-try-moment-1-30–38-minut) níže pro plný speaking script.

**Ve zkratce:**
- 30:00 — Ondřej otevírá: *"Teď je řada na vás."*
- 30:30 — Na obrazovce tři možnosti (A: vizitka, B: to-do list, C: stránka o tématu)
- 31:00 — Účastníci otevírají terminál, kopírují prompt z chatu (Petra ho tam postne)
- 31:00–37:00 — Slava a Ondřej mluví průběžně, sledují chat, reagují na průběžné výstupy
- 37:00 — Petra surfuje první dva tři wins: *"Marie právě postavila…"*
- 37:30 — Přechod do Level 2

### Level 2: Showcase workflow (38–58 minut)

**Kdo vede:** Slava (demo), Ondřej (businesses framing)

> **Změna oproti původnímu plánu:** Dvě workflow live (bylo tři), třetí jen slovně zmíněné s odkazem na cheat sheet. Ušetří čas pro Try Moment #2.

- **38–47 min:** Workflow 1 — Webová aplikace (lektor vybere variantu podle publika)
- **47–57 min:** Workflow 2 — Práce s dokumenty a emaily (zpracování PDF nebo email varianty)
- **57–58 min:** Slovní přehled třetího workflow (automatizace a obsah) — "Všechny tři příklady včetně automatizace jsou v cheat sheetu, který dostanete"

**Ondřejovo rámcování** mezi workflow:
- Po Workflow 1: *"Takže tohle je pro tvorbu. A co dokumenty? Slava, ukaž druhé workflow."*
- Po Workflow 2: *"Třetí kategorie — automatizace — funguje úplně stejně. Je to v cheat sheetu, dnes už necháme prostor, abyste si zkusili něco sami."*

### TRY MOMENT #2 (58–66 minut)

**Kdo vede:** Oba prezentující, Petra v chatu

Viz [Scénář Try Moment #2](#scénář-try-moment-2-58–66-minut) níže.

**Ve zkratce:**
- 58:00 — Ondřej: *"Druhá šance si zkusit něco vlastního. Teď už víte, jak to funguje."*
- 58:30 — Tři možnosti na obrazovce (A: shrnutí dokumentu, B: LinkedIn příspěvky, C: iterace na prvním výsledku)
- 59:00 — Účastníci pracují, Slava a Ondřej komentují průběžně
- 65:30 — Petra surfuje dva tři wins z chatu
- 66:00 — Přechod do Level 3

### Level 3: Pokročilé funkce (66–78 minut)

**Kdo vede:** Slava (demo), Ondřej (context a závěrečné věty)

- **66–72 min:** CLAUDE.md — before/after demo (stejný úkol bez a s CLAUDE.md)
- **72–75 min:** MCP servery — živá instalace web search MCP (2 minuty)
- **75–77 min:** Meta reveal — **ten společník, kterého máte od začátku, je skill**. Skilly jsou jeden ze způsobů, jak Claude Code rozšířit. (Viz [Scénář Level 3 skill reveal](#scénář-level-3-skill-reveal-75–77-minut).)
- **77–78 min:** Rychlá zmínka paměti, modelů a slash commands

### Q&A + Závěr (78–90 minut)

**Kdo vede:** Oba prezentující, Petra moderuje otázky z chatu

- **78–86 min:** Otevřené Q&A — zaparkované otázky + nové, Petra vybírá z chatu
- **86–90 min:** Závěr s Circle komunitou — viz [Scénář závěru](#scénář-závěru-86–90-minut)

## Scénáře klíčových momentů

Plné texty pro šest scénářů, které je dobré mít připravené. Nejsou to striktní scripty — jsou to kotvy.

### Scénář meta opening (0–3 minuty)

**Kdo mluví:** Ondřej (přímo do kamery, přivítání)

> **[Přivítání, 10 sekund]**
> "Vítejte. Jsem Ondřej, toto je Slava, a za chvíli vás provedeme tím, co je Claude Code a jak ho reálně používat. Ale předtím — krátká konfese."
>
> **[Pauza, podívat se do kamery, 3 sekundy]**
>
> "Všechno, co dnes uvidíte — struktura tohoto webináře, cheat sheet, který dostanete na konci, ten společník, kterého si za chvíli nainstalujete — všechno tohle jsme postavili s Claude Codem. Materiály jsme psali s Claude Codem. Strukturu jsme plánovali s Claude Codem. Dokonce i pomoc, kterou dostanete v chatu, přes ten skill, jsme s Claude Codem připravili."
>
> **[Pauza, 2 sekundy]**
>
> "Takže to, co uvidíte, není teorie z přednášky. Je to doslova to, jak oba pracujeme každý den. A po webináři to samé budete moct dělat vy."
>
> **[Přechod, klidné tempo]**
>
> "Za 90 minut projdeme čtyři úrovně — co to je, první úkol, reálná workflow a pokročilé funkce. Mezi tím dostanete dva prostory, kdy si sami něco zkusíte postavit. My jsme tu s vámi, Petra vás bude sledovat v chatu. Začněme."

**Délka:** ~90 sekund. Nechat tempo klidné — začít rychlým přivítáním a pak zpomalit, aby konfese působila upřímně.

**Co nedělat:** Nepoužívat slovo "masterclass" ani "hype". Nemluvit o tom, že je to nejlepší nástroj na světě. Klidná, věcná autenticita.

---

### Scénář Try Moment #1 (30–38 minuty)

**Kdo mluví:** Ondřej otevírá, Slava pomáhá účastníkům v průběhu, Petra surfuje chat

> **[Ondřej, 30:00]**
> "A teď je řada na vás. Máte Claude Code nainstalovaný, společníka aktivního, viděli jste jak agent pracuje. Teď si to zkusíte sami. Osm minut. Tři možnosti, vyberte si jednu."

**[Slava zobrazí na sdílené obrazovce tři možnosti — slide nebo plain text na sdílené obrazovce]**

```
┌─────────────────────────────────────────────────┐
│   TRY MOMENT #1 — Vyberte si jednu             │
│                                                 │
│   A) Osobní vizitková stránka                  │
│   B) Jednoduchý to-do list                     │
│   C) Stránka o mém oblíbeném tématu            │
│                                                 │
│   Pokud nevíte, zeptejte se companion skillu:  │
│   "Co mám zkusit v Try Moment #1?"             │
│                                                 │
│   Nebo v chatu napište A, B, nebo C a dostanete│
│   konkrétní prompt.                             │
└─────────────────────────────────────────────────┘
```

> **[Ondřej, 30:30]**
> "Petra dá do chatu odkaz na přesné prompty. Vy si otevřete terminál, stisknete `claude`, a zkopírujete prompt, který vás nejvíc oslovuje. Pokud se zaseknete — zeptejte se Claude Code přímo, společník vám odpoví. My jsme tu s vámi."

> **[Ondřej, 31:00]**
> "Začněte."

**Během práce (31:00–36:30):**
- **Slava** občas komentuje svůj vlastní paralelní demo, aby publikum mělo co sledovat, když ještě neví, kde jsou: *"Já si tady zkouším variantu A, sledujte — agent si vytvořil HTML, teď přidává CSS."*
- **Ondřej** sleduje chat, odpovídá na krátké technické otázky, přeposílá složitější Slavovi
- **Petra** surfuje první výsledky: *"Marie právě postavila svou vizitku, vypadá skvěle!"* — čte jména lidí, kteří něco sdílí

**Pokud někdo je zaseklý (36:30):**
> **[Ondřej]**
> "Ještě minuta. Pokud jste se zasekli — v pořádku, je to první pokus. Zeptejte se Claude Code, co s tím, nebo napište do chatu a Petra vám pomůže."

**Ukončení (37:00):**
> **[Ondřej, 37:00]**
> "Stop. Petro, co jsme v chatu viděli?"
>
> **[Petra, 37:15]**
> "Čtyři lidi postavili vizitku, dva to-do list, jeden stránku o [jakémkoliv tématu]. Pár jich ještě dokončuje. [Jméno] sdílel svůj výsledek — vypadá opravdu fajn."

> **[Ondřej, 37:30]**
> "Skvěle. To, co jste právě udělali, by před dvěma roky zabralo developerovi odpoledne. Vám to trvalo pět minut. A to je jen začátek — teď si ukážeme, co ještě Claude Code zvládne v reálném pracovním kontextu."

**Délka:** 8 minut. Cíl: do 3 minut by měl mít každý, kdo se zapojil, něco viditelného.

---

### Scénář Try Moment #2 (58–66 minuty)

**Kdo mluví:** Ondřej otevírá, Slava paralelně pracuje, Petra surfuje chat

> **[Ondřej, 58:00]**
> "Druhá šance. Teď už víte, jak to funguje, a navíc jste viděli workflow, která reálně používáte v práci. Osm minut, tři možnosti, vyberte si jednu."

**[Zobrazit tři možnosti na sdílené obrazovce]**

```
┌─────────────────────────────────────────────────┐
│   TRY MOMENT #2 — Vyberte si jednu             │
│                                                 │
│   A) Shrnutí dokumentu                          │
│      (pošlete svůj text / PDF / email)         │
│                                                 │
│   B) Tři varianty LinkedIn příspěvku           │
│      (vyberte téma z vaší branže)              │
│                                                 │
│   C) Iterace na vaší stránce z #1              │
│      (responzivní, nová sekce, lepší typo)     │
│                                                 │
│   Zeptejte se: "Co mám zkusit v Try Moment #2?"│
└─────────────────────────────────────────────────┘
```

> **[Ondřej, 58:30]**
> "Tentokrát zkuste něco, co byste reálně mohli použít zítra v práci. Pokud máte po ruce email, PDF, nebo jakýkoliv text, který pravidelně zpracováváte, varianta A je pro vás. Petro, prompty do chatu."

**Během práce (59:00–65:00):**
- **Slava** paralelně zkouší jednu variantu, komentuje ji *"Já zkouším variantu A na fiktivním emailu od klienta…"*
- **Ondřej** sleduje chat, reaguje na výsledky: *"Tohle je přesně ten rozdíl — varianta A řešila to, co vy děláte, ne fiktivní úkol."*
- **Petra** surfuje výsledky

**Pokud někdo uspěl s iterací (varianta C):**
> **[Ondřej]**
> "Takhle to vypadá, když pracujete iterativně. Nikdo z vás nepsal perfektní první prompt. Postavili jste něco jednoduchého, a pak ho upřesňovali. Přesně tak to vypadá, když to děláte sami."

**Ukončení (65:30):**
> **[Petra, 65:30]**
> "V chatu mám tři lidi, kteří udělali shrnutí dokumentu, dva s LinkedIn příspěvky, a [jméno] iteroval svou stránku z #1 — teď má tmavý režim a responzivní design."

> **[Ondřej, 66:00]**
> "Skvělé. A teď poslední část — pokročilé funkce, které z Claude Code udělají váš dlouhodobý nástroj, ne jen jednorázovou hračku."

**Délka:** 8 minut.

---

### Scénář Level 3 skill reveal (75–77 minuty)

**Kdo mluví:** Ondřej (context), Slava zatím drží CLAUDE.md demo

**Přechodový moment:** Když Slava dokončí CLAUDE.md demo a chystá se ukázat MCP, Ondřej se vloží:

> **[Ondřej, ~75:00]**
> "Než půjdeme k MCP — chci se vrátit k jedné věci, kterou jste celý webinář používali, ale neřekli jsme, co to doopravdy je."
>
> **[Pauza]**
>
> "Pamatujete si ten společník, kterého jste si aktivovali na začátku? Ten, kterého jste se ptali, co zkusit v Try Moments, a on vám dal konkrétní prompty? To není žádná magie, ani zabudovaná funkce Claude Code. Je to **skill**. Obyčejný markdownový soubor v repozitáři, který jste si naklonovali. Otevřete si `.claude/skills/claude-code-guide/SKILL.md` — je to čitelné jako jakýkoliv jiný dokument."
>
> **[Pauza, důraz]**
>
> "A tohle je jedna z věcí, co dělá Claude Code výjimečným. Nejsou to jen funkce, co Anthropic zabalil do jedné aplikace. Je to **platforma**, kterou rozšiřujete sami — skilly, MCP servery, custom commands. Dnes jste jeden z nich použili. Za týden si můžete napsat vlastní pro svůj workflow. A za měsíc si možná stáhnete skilly od ostatních z komunity."
>
> **[Přechod na MCP]**
>
> "MCP servery jsou druhý způsob, jak rozšířit. Slavo, ukaž jim to."

**Délka:** ~90 sekund. Nechat prostor pro moment uvědomění — "aha, já jsem celou dobu používal skill, aniž bych to věděl".

---

### Scénář závěru (86–90 minuty)

**Kdo mluví:** Ondřej (primárně), Slava vstupuje v jednom momentu

> **[Ondřej, 86:00]**
> "Poslední čtyři minuty — co si odnést a co dělat zítra ráno."
>
> **[Ondřej, 86:15]**
> "Prvně — konkrétní první krok. Zítra ráno otevřete terminál, spusťte `claude` ve složce, kde máte nějaký reálný úkol ze své práce. Nečekejte na velký projekt. Vezměte to nejmenší, nejhloupější, co vás napadne — email, report, stránka o vašem týmu — a nechte Claude Code ho udělat. Nejhorší, co se stane, je špatný výsledek. A i ten vás něco naučí."
>
> **[Ondřej, 86:45]**
> "Druhé — máte k dispozici cheat sheet. Odkaz jsme poslali do chatu, Petra ho tam dá ještě jednou. Je to průvodce vašimi prvními 30 minutami s Claude Code. Začnete u instalace, projdete první projekt, a vyzkoušíte tři další workflow. Napsali jsme ho tak, aby byl samostatný — nepotřebujete tento webinář otevřený."
>
> **[Ondřej, 87:15]**
> "Třetí a nejdůležitější — Circle komunita."
>
> **[Pauza, důraz]**
>
> "Součástí vašeho vstupu na tento webinář je členství v naší Circle komunitě. Odkaz posíláme do chatu a také vám přijde emailem. V komunitě můžete pokládat otázky, když vám něco nefunguje, sdílet, co jste postavili, a vidět, jak to dělají ostatní. Je to ten prostor, kde se učení nezastaví tím, že zavřete Zoom. My jsme tam s vámi. Slava v komunitě tráví čas každý týden."
>
> **[Slava, 87:45]**
> "Pokud tam sdílíte svůj první projekt, rád se na něj podívám a napíšu vám zpětnou vazbu. Nemusí to být perfektní — právě naopak, první pokusy jsou nejlepší ukázka toho, jak agent pracuje s reálnou prací."
>
> **[Ondřej, 88:15]**
> "A nahrávka webináře vám přijde emailem do 24 hodin — takže pokud jste si něco nestihli zapsat, budete se moct vrátit."
>
> **[Ondřej, 88:45, zavírající myšlenka]**
> "Jednu věc si zapamatujte. Donedávna jste potřebovali vývojáře pro každou technickou věc — stránku, automatizaci, jakýkoliv nápad, který vyžadoval kód. Dnes máte v terminálu spolupracovníka, který nespí, nikdy se neurazí a zvládne víc, než si myslíte. Jediné, co potřebujete, je říct mu, co chcete."
>
> **[Pauza]**
>
> "Děkujeme, že jste s námi strávili 90 minut. Uvidíme se v Circle."

**Délka:** ~4 minuty. Cílem je klidné, ne prodejné zakončení — udržet tón autenticity z otevření.

---

## Co-teaching — spolupráce lektorů

Formát je co-teaching, ne tag-team. Oba prezentující jsou přítomní v obraze i ve zvuku po celých 90 minut (grid layout v Zoomu během konverzačních momentů, screen share fokus během dem).

### Tři pre-agreed handoff anchors

Aby se improvizace nestala chaosem, dohodněte si konkrétní předávky. Minimum tři, ideálně čtyři:

| Minuta | Situace | Předávka |
|--------|---------|----------|
| **~3:00** | Konec meta openingu → začátek Level 0 | Ondřej: *"Slavo, ukaž jim, co to doopravdy je."* |
| **~30:00** | Konec Level 1 demo → otevření Try Moment #1 | Slava: *"Tak. Ondřeji, ty otevřeš?"* Ondřej: *"Jasně. Teď je řada na vás…"* |
| **~66:00** | Konec Try Moment #2 → začátek Level 3 | Ondřej: *"A teď poslední část. Slavo, CLAUDE.md."* |
| **~75:00** | Meta skill reveal uprostřed Level 3 | Ondřej se vloží do Slavovy demo sekvence: *"Než půjdeme k MCP — chci se vrátit k jedné věci."* (viz [Scénář Level 3 skill reveal](#scénář-level-3-skill-reveal-75–77-minut)) |

### Co dělat během demo druhého prezentujícího

Když **Slava vede demo**, Ondřej:
- Je viditelný v obraze (grid layout nebo malé okno vedle sdílené obrazovky)
- Sleduje chat, čte otázky, odpovídá na jednoduché přímo v chatu
- Průběžně komentuje pro publikum: *"Tohle je moment, kterému většina lidí nevěří, dokud to neuvidí"*
- Reaguje emocionálně — smích, údiv, reakce. Publikum kopíruje vaše reakce
- Pokládá "publikum otázky" Slavovi: *"Slavo, co kdyby se spletl — co by se stalo?"*

Když **Ondřej vede context moment** (otevření, uzavření, reveals), Slava:
- Je viditelný, reakce, doplnění technického detailu, pokud je potřeba
- Sdílená obrazovka může být v klidovém stavu (jeho terminál s `claude` promptem), aby publikum vidělo kontext

### Pravidla, co nedělat

1. **Nepřekrývejte se** — pokud Slava mluví, Ondřej nezačne mluvit, dokud Slava nedokončí větu
2. **Nedělejte dlouhé samomluvy** — nikdo z vás by neměl mluvit déle než 3 minuty bez reakce druhého
3. **Nedělejte "and now let me introduce…"** typ přechodů. Jsou příliš formální. Přirozené předávky fungují lépe
4. **Nepředstírejte objevování** — pokud plánovaně mluvíte o skillu v Level 3, neříkejte "oh wait, I just realized this". Publikum to pozná

### Fallback plán

Pokud během rehearsalu (14. dubna) zjistíme, že co-teaching chemistry nefunguje, vraťme se k čistšímu rozdělení:
- Ondřej: Meta opening (0–3), Try Moment #1 intro (30–32), Try Moment #2 intro (58–60), skill reveal (75–77), závěr (86–90)
- Slava: Level 0 install (11–15), Level 1 demo (15–30), Level 2 demo (38–58), Level 3 CLAUDE.md + MCP (66–75, 77–78)

To dává každému jasné "jeho" bloky, ale oba zůstávají viditelní a mohou vstoupit krátkými poznámkami.

## Role Petry během Try Moments

Petra je facilitátorka — během Try Moments je její role aktivnější než ve zbytku webináře. Konkrétní odpovědnosti:

### Před Try Moment (příprava)

- Má okno s chatem otevřené jako primární prohlížeč
- Má připravené texty promptů pro obě Try Moments ve snippetu (copy-paste do chatu), aby neztrácela čas psaním

### Během Try Moment (aktivní facilitace)

1. **Postnutí promptů** — jakmile Ondřej řekne "Petra dá do chatu odkaz", okamžitě postne:
   ```
   Try Moment #1 — tři možnosti:
   A) https://github.com/aibility/claude-code-90-webinar#try-moment-1-varianta-a
   B) https://github.com/aibility/claude-code-90-webinar#try-moment-1-varianta-b
   C) https://github.com/aibility/claude-code-90-webinar#try-moment-1-varianta-c

   Nebo napište A, B, nebo C a dostanete prompt jako odpověď.
   ```

2. **Odpovídání na A/B/C** — když někdo napíše "A" nebo "B" nebo "C", posílá mu prompt jako odpověď

3. **Surfování vítězů** — sleduje chat na reakce typu "hotovo", "funguje to", "podívejte se" — a vybírá tři čtyři jména k zmínce v surfování vítězů (37:00 nebo 65:30)
   - **Pravidlo:** vybírat různorodě. Tři lidi, tři různé varianty, ideálně různá jména
   - Pokud někdo sdílí screenshot, dát mu extra pozornost

4. **Triage zaseknutých** — když někdo píše "mám chybu" nebo "nefunguje mi", reaguje:
   - Jednoduchá chyba (typo, chybný prompt): odpovídá přímo
   - Instalační chyba: odkazuje na FAQ v skillu (`faq.md`)
   - Nejasná chyba: říká účastníkovi, ať se zeptá Claude Code přímo — a flag to Slavovi pro pozdější zmínku

### Po Try Moment (přechod)

Jakmile Ondřej řekne "Petro, co jsme v chatu viděli?", má 15–20 sekund k surfování vítězů:

**Dobrý formát surfování:**
> "Tři lidi postavili vizitku — Marie, Tom, Jana. Dva to-do list — Pavel, Lucie. Honzík iteroval na své stránce a přidal tmavý režim. Vypadá to skvěle."

**Špatný formát surfování:**
- Čtení dlouhých pasáží z chatu
- Zmínění deset jmen
- Komentování technických detailů

### Rezerva — pokud je v chatu málo aktivity

Pokud Try Moment běží a chat je tichý (méně než 3 reakce za prvních 5 minut):
1. Petra sama postne: *"Já si tady taky něco stavím, zkouším variantu A…"*
2. Nebo postne screenshot Slavovy demo obrazovky jako "look what's happening"
3. Nebo vyzve přímo: *"Kdo už má výsledek? Napište do chatu jedno slovo — hotovo, zaseknutý, nebo ještě ne"*

## Klíčové body k zdůraznění

### Pro každý level:
- **Level 0:** Claude Code je agent — ne chatbot, ne editor. Běží v terminálu, ale stejný engine je i v desktop aplikaci, webu, a IDE rozšířeních.
- **Level 1:** Sledujte, jak myslí — plánuje, tvoří, opravuje. A ptá se, než udělá něco riskantního.
- **Level 2:** Jeden nástroj, desítky workflow — od webů přes emaily po automatizace. To, co vidíte, je zrcadlo vaší skutečné práce.
- **Level 3:** S CLAUDE.md, MCP a skilly se z Claude Code stává platforma, kterou rozšiřujete sami.

### Obecné principy:
- Nemusíte umět programovat — Claude Code programuje za vás
- Terminál vypadá strašidelně, ale je to jen místo, kam píšete příkazy
- Čím lepší zadání, tím lepší výsledek — buďte konkrétní
- Vždy kontrolujte výstup — agent je mocný, ale ne neomylný
- Claude Code se rychle vyvíjí — co dnes neumí, zítra možná ano

## Tipy pro live demo

### Příprava:
- Mějte připravenou prázdnou složku pro každé demo
- Ověřte, že Claude Code funguje a je aktuální
- Mějte záložní Anthropic účet (pro případ rate limitů)
- Vyzkoušejte si všechna dema předem — agentem vždy nesmí být překvapen
- Mějte `.claude/skills/claude-code-guide/` naklonované a otestované před webinářem

### Během demo:
- Narážejte nahlas — "teď Claude Code čte soubory, protože potřebuje pochopit strukturu..."
- Když nastane chyba, nebojte se — ukažte, jak ji agent sám opraví (*to JE demo*)
- Držte prompty jednoduché a čitelné — publikum musí vidět, co jste zadali
- Zvětšete font v terminálu (min. 18px) — vzdálení účastníci musí číst

### Časový management:
- Pokud Level 0 instalace zabere víc času, zkrácení se nejvíc hodí v Level 2 (skip třetí workflow slovní zmínku)
- Try Moments jsou posvátné — nezkracovat pod 5 minut
- Level 3 může být zkrácen o MCP demo, pokud nestíháte (skill reveal ponechat — je to klíčový moment)
- Q&A na konci může běžet přes čas — nechte prostor pro otázky

## Technické požadavky

### Pro lektora:
- Claude Code nainstalovaný a funkční (ověřené předem)
- Anthropic účet s dostatečným kreditem / Max plánem
- Backup Anthropic účet pro případ rate limitů
- Stabilní internetové připojení (ideálně kabel, ne Wi-Fi)
- Terminál se zvětšeným fontem (18px+)
- Zoom s nasdílenou obrazovkou
- Připravené prázdné složky pro každé demo
- Companion skill naklonovaný a otestovaný

### Pro účastníky:
- Počítač s přístupem k terminálu (Mac/Linux/Windows s PowerShell nebo WSL)
- Stabilní internet
- Node.js nainstalovaný (zmíněno v přípravném emailu)
- Anthropic účet (zmíněno v přípravném emailu)
- **Nové:** Volitelně naklonovaný repozitář webináře (pro companion skill)

### Přípravný email — co poslat účastníkům:

> **Předmět:** Intro do Claude Code — jak se připravit (5 minut)
>
> Ahoj,
>
> za pár dní se uvidíme na webináři **Intro do Claude Code**. Abychom mohli hned začít a neztráceli čas technickými problémy, prosíme vás o krátkou přípravu — zabere to maximálně 5 minut.
>
> **Nutné (prosíme o předem):**
>
> 1. **Node.js** — stáhněte a nainstalujte z [nodejs.org](https://nodejs.org) (verze 18 nebo novější)
> 2. **Účet u Anthropic** — zaregistrujte se na [claude.com](https://claude.com), pokud ještě nemáte
> 3. **Ověřte terminál** — otevřete terminál (Mac: `Cmd+Space` → "Terminal"; Windows: `Win` → "PowerShell") a napište `node --version`. Pokud vidíte číslo verze, jste připraveni
>
> **Volitelné (pokud máte chuť si zkrátit čekání):**
>
> 4. Můžete si nainstalovat Claude Code už teď — na webináři to projdeme společně, ale kdo už to bude mít, může rovnou začít: `npm install -g @anthropic-ai/claude-code`
> 5. Můžete si naklonovat repozitář webináře, ať máte všechny materiály po ruce: `git clone https://github.com/aibility/claude-code-90-webinar.git`
>
> **Co vás čeká:**
>
> Během 90 minut vám ukážeme, co Claude Code umí, společně ho nainstalujeme, a dostanete dva prostory, kdy si můžete vyzkoušet postavit něco vlastního — s naší podporou v chatu. Odejdete s nainstalovaným nástrojem, prvním reálným projektem a cheat sheetem pro domácí použití.
>
> Po webináři budete mít přístup k nahrávce a k naší **Circle komunitě**, kde můžete pokládat další otázky a sdílet, co jste postavili.
>
> Žádné předchozí programátorské zkušenosti nepotřebujete. Jen počítač, internet a otevřenou hlavu.
>
> Těšíme se na vás!
>
> — Ondřej, Slava a Petra @ Aibility

> **Pro organizátora (Petra):** Tento email odeslat minimálně 2 dny před webinářem (tj. do 14. 4. 2026 večer). Pokud to nestihne dřívější termín, odešlete co nejdříve. Pokud někdo odpoví s problémem při instalaci Node.js, nabídněte krátký hovor nebo odkažte na `cheat-sheet/claude-code-quickstart-cs.md`.
