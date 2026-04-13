# Průvodce lektora — Intro do Claude Code

## Obsah

- [Kdo co dělá](#kdo-co-dělá)
- [Časový rozvrh (90 minut)](#časový-rozvrh-90-minut)
- [Scénáře klíčových momentů](#scénáře-klíčových-momentů)
- [Co-teaching — jak si to předáváme](#co-teaching--jak-si-to-předáváme)
- [Co dělá Petra během "Zkuste si to sami"](#co-dělá-petra-během-zkuste-si-to-sami)
- [Na co klást důraz v každé části](#na-co-klást-důraz-v-každé-části)
- [Tipy pro živé demo](#tipy-pro-živé-demo)
- [Technické požadavky](#technické-požadavky)
- [Přípravný email pro účastníky](#přípravný-email-pro-účastníky)

## Kdo co dělá

Vedeme to spolu — oba lektoři (Ondřej i Slava) jsou vidět a slyšet po celých devadesát minut. Není to tag-team, kde jeden mluví a druhý se schovává. Role si dělíme podle toho, co komu sedí:

| Role | Kdo | Co má na starosti |
|------|-----|-------------------|
| **Demo driver** | Slava | Ruce na klávesnici, píše prompty, vede technickou linku |
| **Context lead** | Ondřej | Dává tomu smysl z pohledu businessu, reaguje, klade otázky za publikum, otevírá webinář |
| **Facilitátorka** | Petra | Stará se o chat, ankety, vytahuje úspěchy z "Zkuste si to sami" a pomáhá těm, co se zaseknou |

Konkrétní momenty, kdy si předáváme slovo, jsou v sekci [Co-teaching](#co-teaching--jak-si-to-předáváme).

## Časový rozvrh (90 minut)

| Čas | Sekce | Kdo vede | Minut |
|-----|-------|----------|-------|
| 0–3 | Otevření: "Postaveno Claude Codem" | Ondřej | 3 |
| 3–15 | Level 0: Úvod + instalace + aktivace skillu | Slava (demo) + Ondřej (kontext) | 12 |
| 15–30 | Level 1: První úkol (demo) | Slava (demo) + Ondřej (reakce) | 15 |
| 30–38 | **Zkuste si to sami #1** | Oba + Petra v chatu | 8 |
| 38–58 | Level 2: Ukázky workflow (dvě živě + jedna slovně) | Slava (demo) + Ondřej (rámování) | 20 |
| 58–66 | **Zkuste si to sami #2** | Oba + Petra v chatu | 8 |
| 66–78 | Level 3: CLAUDE.md + MCP + odhalení skillu | Slava (demo) + Ondřej (kontext) | 12 |
| 78–86 | Otevřené Q&A | Oba + Petra (moderuje otázky) | 8 |
| 86–90 | Závěr + Circle komunita + co dělat dál | Ondřej | 4 |

### Level 0: Úvod a instalace (0–15 minut)

#### 0–3 min: Otevření — "Postaveno Claude Codem"

**Vede:** Ondřej

Scénář v plném znění je v sekci [Scénáře klíčových momentů](#scénáře-klíčových-momentů) níže.

Krátká konfese: tenhle webinář, cheat sheet i skill — všechno jsme postavili s Claude Codem. Neprodáváme teorii, ukazujeme, jak sami pracujeme.

#### 3–7 min: Co je to Claude Code

- AI agent, který běží v terminálu (a v dalších rozhraních — viz níže)
- Ne chatbot, ne editor — autonomní spolupracovník. Čte soubory, píše kód, spouští příkazy, opravuje chyby. Sám.
- **Kontext, aprí 2026:** Claude Code není jen CLI. Běží na šesti různých místech — v terminálu, v desktopové aplikaci, na webu (claude.ai/code), v iOS, v rozšíření pro VS Code a v pluginu pro JetBrains. Všechno pod jednou pokličkou: stejná paměť, stejný CLAUDE.md, stejné MCP servery. **Dnes vám ho ukážeme v terminálu, protože tam nejlíp vidíte, jak agent pracuje** — ale jít s vámi může kamkoli.

#### 5–7 min: Claude Code vs Cursor vs ChatGPT

> **Důležité:** V dubnu 2026 Cursor a Claude Code dělají většinu věcí podobně — oba umí pracovat autonomně, spouštět příkazy, opravovat chyby. Rozdíl není v tom, co umí, ale **kde žijí**.

- **ChatGPT** = konverzace. Zeptáte se, dostanete odpověď. Žije v chatu.
- **Cursor** = AI agent v editoru. Plnohodnotné IDE, kde AI autonomně kóduje, refaktoruje a opravuje. Pro ty, kdo chtějí všechno pohromadě ve vývojářském prostředí.
- **Claude Code** = AI agent, který v editoru nežije. Běží v terminálu, na desktopu, ve webu, v rozšíření pro VS Code nebo JetBrains. Jde tam, kam vy. Pro ty, kdo nechtějí být přivázaní k jednomu IDE.

> **Poznámka o OpenAI Codex:** OpenAI má svůj vlastní podobný nástroj — **Codex CLI**. Funguje na stejném principu jako Claude Code. Dnes se díváme na Claude Code, ale pokud vám tenhle způsob práce sedne, Codex je jeho blízký bratranec od konkurence.

#### 7–9 min: Cena a plány

Rychlý přehled:
- **Claude Pro** ($20/měsíc) — zahrnuje Claude Code, základní limity, dobrý start
- **Claude Max 5×** ($100/měsíc) — pětinásobné limity pro pravidelné používání
- **Claude Max 20×** ($200/měsíc) — pro každodenní intenzivní práci
- **API credits** — pay-per-use pro pokročilé

**Doporučení:** Začněte s Pro. Když zjistíte, že ho používáte víc, přesuňte se výš.

#### 9–11 min: Terminál za dvě minuty

Rychlé uklidnění pro netechnické publikum:
- Jak otevřít terminál (Mac: `Cmd+Space` → "Terminal"; Windows: `Win` → "PowerShell"; Linux: `Ctrl+Alt+T`)
- "Terminál je jen místo, kam píšete příkazy. Víc nic."
- Ukázka: napište `node --version`, Enter, uvidíte výsledek. **A to je všechno, co potřebujete umět.**

#### 11–15 min: Živá instalace a aktivace skillu

**Vede:** Slava (demo), Ondřej sleduje chat a odpovídá na rychlé otázky

1. Instalace Claude Code:
   ```bash
   npm install -g @anthropic-ai/claude-code
   ```
2. Přihlášení — při prvním spuštění `claude` se otevře prohlížeč
3. **Aktivace společníka:**
   ```bash
   git clone https://github.com/aibility/claude-code-90-webinar.git
   cd claude-code-90-webinar
   claude
   ```
   Skill leží v `.claude/skills/claude-code-guide/` uvnitř repozitáře. Když v téhle složce spustíte `claude`, Claude Code si ho sám načte — **žádná instalace, žádná konfigurace navíc**.

4. Rychlý test: *"Co mám zkusit, když mi řekneš 'zkuste si to sami #1'?"* — Claude Code by měl odpovědět s konkrétní nabídkou ze skillu.

> **Moment k zdůraznění (Slava):** "Vidíte tu složku `.claude/skills/`? Tam se Claude Code dívá, když ho spustíte v nějakém projektu. Kdokoli si tam může přidat vlastní skill. Dnešní společník je přesně takový — obyčejný markdown, který mu Claude Code čte, když to dává smysl."
>
> **Ondřej navazuje:** "A to je váš společník pro zbytek webináře. Když se zaseknete, zeptejte se přímo Claude Code — skill odpoví. A kdyby vám po webináři chybělo, že funguje jen tady v téhle složce, v README je postup, jak si ho zkopírovat k sobě domů do `~/.claude/skills/`. Pak máte společníka kamkoli jdete."

### Level 1: První úkol (15–30 minut)

**Vede:** Slava u klávesnice, Ondřej v reakcích

- **15–17 min:** Zadání prvního úkolu — osobní stránka
- **17–24 min:** Rozbor toho, jak agent pracuje — Slava vypráví krok po kroku, Ondřej reaguje za publikum (*"Počkej, to teď sám vytvořil celý soubor?"* / *"A co kdyby to rozbil, co by se stalo?"*)
- **24–28 min:** Samooprava a ptaní se na povolení — ukázat moment, kdy si Claude Code řekne o schválení
- **28–30 min:** Výsledek v prohlížeči, jedna rychlá iterace

**Ondřejovy klíčové reakce** (co-teaching):
- Když Claude Code začne "přemýšlet": *"Tohle je ten moment, kterému většina lidí nevěří, dokud to neuvidí na vlastní oči."*
- Když agent sám vytvoří soubor: *"Já bych tohle dělal dvacet minut ručně. On to udělal za deset vteřin."*
- Když agent čeká na povolení: *"A tohle je důvod, proč tomu můžete věřit — nic se neděje, dokud to neodklepnete."*

### Zkuste si to sami #1 (30–38 minut)

**Vede:** Oba lektoři jsou vidět, Petra pracuje v chatu

Plný scénář je v sekci [Scénář: Zkuste si to sami #1](#scénář-zkuste-si-to-sami-1-30–38-minut) níže.

**Ve zkratce:**
- 30:00 — Ondřej otevírá: *"Teď je řada na vás."*
- 30:30 — Na obrazovce tři možnosti (A: osobní stránka, B: to-do list, C: stránka o něčem, co vás baví)
- 31:00 — Účastníci otevírají terminál, berou si prompt z chatu (Petra ho tam pošle)
- 31:00–37:00 — Slava s Ondřejem mluví průběžně, sledují chat, reagují na to, co kdo postaví
- 37:00 — Petra vytáhne pár prvních úspěchů: *"Marie právě postavila…"*
- 37:30 — Přechod do Levelu 2

### Level 2: Ukázky pracovních workflow (38–58 minut)

**Vede:** Slava (demo), Ondřej (businesses framing)

> **Změna oproti původnímu plánu:** Dvě workflow naživo (bylo tři), třetí jen slovně zmíněné s odkazem na cheat sheet. Ušetří to čas pro druhý "Zkuste si to sami".

- **38–47 min:** Workflow 1 — Webová aplikace (lektor vybere variantu podle publika)
- **47–57 min:** Workflow 2 — Práce s dokumenty a e-maily (zpracování PDF nebo varianty e-mailu)
- **57–58 min:** Slovní zmínka třetího workflow (automatizace a obsah) — *"Všechny tři příklady, včetně automatizace, najdete v cheat sheetu, který za chvíli dostanete."*

**Ondřejovo rámování** mezi workflow:
- Po Workflow 1: *"Tak tohle je na tvorbu. A co dokumenty? Slavo, ukaž druhé."*
- Po Workflow 2: *"Třetí kategorie — automatizace — funguje úplně stejně. Je to v cheat sheetu. Dnes necháme prostor, abyste si zase sami něco zkusili."*

### Zkuste si to sami #2 (58–66 minut)

**Vede:** Oba lektoři, Petra v chatu

Plný scénář je v sekci [Scénář: Zkuste si to sami #2](#scénář-zkuste-si-to-sami-2-58–66-minut) níže.

**Ve zkratce:**
- 58:00 — Ondřej: *"Druhá šance si něco zkusit. Teď už víte, jak to funguje."*
- 58:30 — Tři možnosti na obrazovce (A: shrnutí dokumentu, B: LinkedIn příspěvky, C: vylepšit, co jste postavili v #1)
- 59:00 — Účastníci pracují, Slava s Ondřejem průběžně komentují
- 65:30 — Petra vytáhne pár úspěchů z chatu
- 66:00 — Přechod do Levelu 3

### Level 3: Pokročilé funkce (66–78 minut)

**Vede:** Slava (demo), Ondřej (kontext a závěrečný oblouk)

- **66–72 min:** CLAUDE.md — demo "bez a s" (stejný úkol, nejdřív bez pravidel, pak s nimi)
- **72–75 min:** MCP servery — živá instalace web search MCP (dvě minuty)
- **75–77 min:** Odhalení — **ten společník, kterého máte od začátku, je skill.** Skilly jsou jeden ze způsobů, jak si Claude Code rozšířit. (Viz [Scénář: odhalení skillu](#scénář-odhalení-skillu-75–77-minut).)
- **77–78 min:** Rychlá zmínka o paměti, modelech a slash commands

### Q&A + závěr (78–90 minut)

**Vede:** Oba lektoři, Petra moderuje otázky z chatu

- **78–86 min:** Otevřené Q&A — odložené otázky + nové, Petra vybírá z chatu
- **86–90 min:** Závěr s Circle komunitou — viz [Scénář závěru](#scénář-závěru-86–90-minut)

---

## Scénáře klíčových momentů

Plný text pro šest míst, kde se hodí mít přípravu. Není to striktní script, jsou to kotvy — věci, které byste rádi řekli, i kdyby se zbytek neplánoval.

### Scénář: otevření (0–3 minuty)

**Mluví:** Ondřej (přímo do kamery, přivítání)

> **[Přivítání, 10 vteřin]**
> "Vítejte. Já jsem Ondřej, tady je Slava, a za chvíli vám ukážeme, co je Claude Code a jak ho reálně používat. Ale nejdřív — jedna krátká konfese."
>
> **[Pauza, pohled do kamery, 3 vteřiny]**
>
> "Všechno, co dnes uvidíte — strukturu tohohle webináře, cheat sheet, který vám pošleme na konci, i toho společníka, kterého si za chvíli nainstalujete — to všechno jsme postavili s Claude Codem. Materiály jsme s ním psali. Strukturu jsme s ním plánovali. I tu pomoc, kterou dostanete v chatu přes skill, jsme s ním připravili."
>
> **[Pauza, 2 vteřiny]**
>
> "Takže to, co uvidíte, není teorie z přednášky. Je to doslova to, jak oba pracujeme každý den. A po dnešku to samé budete umět i vy."
>
> **[Přechod, klidné tempo]**
>
> "Za devadesát minut projdeme čtyři úrovně — co to je, první úkol, reálné pracovní workflow, a pokročilé funkce. Mezitím dostanete dva prostory, kdy si sami něco postavíte. My u toho budeme, Petra vás bude sledovat v chatu. Jdeme na to."

**Délka:** ~90 vteřin. Držet klidné tempo — začněte trochu rychleji (přivítání), pak zpomalte, aby konfese byla upřímná, ne performativní.

**Na co si dát pozor:** Nepoužívat slovo "masterclass" ani "hype". Neříkat, že je to nejlepší nástroj na světě. Klidná, věcná autenticita.

---

### Scénář: Zkuste si to sami #1 (30–38 minut)

**Mluví:** Ondřej otevírá, Slava pomáhá v průběhu, Petra pracuje v chatu

> **[Ondřej, 30:00]**
> "A teď je řada na vás. Claude Code máte nainstalovaný, společníka aktivního, viděli jste, jak agent pracuje. Teď si to zkusíte sami. Osm minut. Tři možnosti — vyberte si jednu."

**[Slava ukáže na sdílené obrazovce tři možnosti — slide nebo prostý text na obrazovce]**

```
┌─────────────────────────────────────────────────┐
│   ZKUSTE SI TO SAMI #1 — Vyberte si jednu       │
│                                                 │
│   A) Osobní stránka s vaším jménem a kontaktem  │
│   B) Jednoduchý to-do list                      │
│   C) Stránka o něčem, co vás baví               │
│                                                 │
│   Když si nemůžete vybrat, zeptejte se skillu:  │
│   "Co mám zkusit, zkouším to poprvé?"           │
│                                                 │
│   Nebo napište do chatu A, B, nebo C a Petra    │
│   vám pošle přesný prompt.                      │
└─────────────────────────────────────────────────┘
```

> **[Ondřej, 30:30]**
> "Petra vám do chatu pošle přesné prompty. Vy si otevřete terminál, spustíte `claude` a zkopírujete si prompt té varianty, která vás nejvíc oslovila. Když se zaseknete, zeptejte se přímo Claude Code — společník odpoví. My jsme tu s vámi."

> **[Ondřej, 31:00]**
> "Jdeme na to."

**Během práce (31:00–36:30):**
- **Slava** občas komentuje své vlastní paralelní demo, aby publikum mělo co sledovat, pokud ještě neví, kde jsou: *"Já si tady zrovna zkouším variantu A. Koukejte, vytvořil HTML, teď k tomu přidává CSS."*
- **Ondřej** sleduje chat, odpovídá na krátké technické otázky, složitější přehazuje na Slavu
- **Petra** vytahuje první výsledky: *"Marie právě postavila svoji osobní stránku, vypadá skvěle!"* — jmenuje lidi, kteří něco sdílí

**Když se někdo zasekl (36:30):**
> **[Ondřej]**
> "Ještě minuta. Když jste se zasekli, to je v pohodě — je to první pokus. Zeptejte se Claude Code přímo, nebo napište do chatu a Petra vám pomůže."

**Uzavření (37:00):**
> **[Ondřej, 37:00]**
> "A stop. Petro, co jsme v chatu viděli?"
>
> **[Petra, 37:15]**
> "Čtyři lidi postavili osobní stránku, dva to-do list, jeden stránku o [téma]. Pár dalších ještě dokončuje. [Jméno] svůj výsledek sdílel — vypadá fakt dobře."

> **[Ondřej, 37:30]**
> "Paráda. To, co jste právě udělali, by před dvěma lety zabralo vývojáři odpoledne. Vy jste to měli za pět minut. A to je teprve začátek — teď vám ukážeme, co Claude Code zvládne v reálné pracovní rutině."

**Délka:** 8 minut. Cíl: každý, kdo se zapojí, by měl mít do tří minut něco viditelného.

---

### Scénář: Zkuste si to sami #2 (58–66 minut)

**Mluví:** Ondřej otevírá, Slava paralelně zkouší, Petra pracuje v chatu

> **[Ondřej, 58:00]**
> "Druhá šance. Teď už víte, jak to funguje, a navíc jste viděli workflow, která se dají použít v reálné práci. Osm minut, tři možnosti, vyberte si jednu."

**[Tři možnosti na sdílené obrazovce]**

```
┌─────────────────────────────────────────────────┐
│   ZKUSTE SI TO SAMI #2 — Vyberte si jednu       │
│                                                 │
│   A) Zpracovat dokument                         │
│      (email, text, PDF, který máte po ruce)     │
│                                                 │
│   B) Tři verze LinkedIn příspěvku               │
│      (vyberte téma z vaší branže)               │
│                                                 │
│   C) Vylepšit, co jste postavili v #1           │
│      (responzivní, nová sekce, lepší typografie)│
│                                                 │
│   Zeptejte se: "Co mám zkusit podruhé?"         │
└─────────────────────────────────────────────────┘
```

> **[Ondřej, 58:30]**
> "Tentokrát zkuste něco, co byste mohli reálně použít zítra v práci. Když máte po ruce e-mail, PDF nebo nějaký text, který pravidelně zpracováváte, varianta A je pro vás. Petro, prompty do chatu."

**Během práce (59:00–65:00):**
- **Slava** paralelně zkouší jednu z variant, komentuje: *"Já tady dávám variantu A, zkouším to na fiktivním klientském e-mailu…"*
- **Ondřej** sleduje chat, reaguje na výsledky: *"A přesně tohle je ten rozdíl — varianta A řeší věc, kterou vy opravdu děláte, ne smyšlený úkol."*
- **Petra** vytahuje úspěchy

**Když někdo pěkně zpracoval iteraci (varianta C):**
> **[Ondřej]**
> "Takhle to vypadá, když pracujete iterativně. Nikdo z vás nepsal dokonalý prompt napoprvé. Postavili jste něco jednoduchého a pak jste to dotáhli. Přesně tak to vypadá, když pracujete sami."

**Uzavření (65:30):**
> **[Petra, 65:30]**
> "V chatu mám tři lidi, kteří zpracovali dokument, dva s LinkedIn příspěvky, a [jméno] vylepšil svoji stránku z prvního kola — teď má tmavý režim a responzivní design."

> **[Ondřej, 66:00]**
> "Paráda. A teď poslední část — pokročilé funkce, díky kterým z Claude Code uděláte dlouhodobý nástroj, ne jen jednorázovou hračku."

**Délka:** 8 minut.

---

### Scénář: odhalení skillu (75–77 minut)

**Mluví:** Ondřej (kontext), Slava zatím drží CLAUDE.md demo

**Přechod:** Jakmile Slava dokončí CLAUDE.md demo a chystá se přepnout na MCP, Ondřej se vloží:

> **[Ondřej, ~75:00]**
> "Než půjdeme na MCP — chci se vrátit k jedné věci, kterou jste dnes používali celou dobu, ale neřekli jsme, co to vlastně je."
>
> **[Pauza]**
>
> "Pamatujete si toho společníka, kterého jste si aktivovali na začátku? Toho, kterého jste se ptali, co zkusit, když jste měli čas si něco postavit — a on vám dával konkrétní prompty? To není žádná magie, ani vestavěná funkce Claude Code. Je to **skill**. Obyčejný markdown soubor v repozitáři, který jste si naklonovali. Otevřete si `.claude/skills/claude-code-guide/SKILL.md` — je to čitelné jako každý jiný dokument."
>
> **[Pauza, důraz]**
>
> "A tohle je jedna z věcí, co dělá Claude Code výjimečným. Nejsou to jen funkce, které Anthropic zabalil do jedné aplikace. Je to **platforma**, kterou si sami rozšiřujete — skilly, MCP servery, vlastní příkazy. Dnes jste jeden skill použili. Za týden si můžete napsat vlastní pro svoji práci. A za měsíc si možná stáhnete skilly od ostatních z komunity."
>
> **[Přechod na MCP]**
>
> "MCP servery jsou ten druhý způsob, jak rozšířit. Slavo, ukaž jim to."

**Délka:** ~90 vteřin. Nechat prostor pro "aha" moment — "ten skill jsem celou dobu používal, aniž bych to věděl".

---

### Scénář závěru (86–90 minut)

**Mluví:** Ondřej (většinu), Slava vstoupí v jednom momentu

> **[Ondřej, 86:00]**
> "Poslední čtyři minuty — co si odnést a co dělat zítra ráno."
>
> **[Ondřej, 86:15]**
> "Za prvé — konkrétní první krok. Zítra ráno otevřete terminál, spusťte `claude` ve složce s nějakým reálným pracovním úkolem. Nečekejte na velký projekt. Vezměte to nejmenší, co vás napadne — e-mail, report, stránku o vašem týmu — a nechte Claude Code, ať to udělá. Nejhorší, co se může stát, je špatný výsledek. A i ten vás něco naučí."
>
> **[Ondřej, 86:45]**
> "Za druhé — cheat sheet. Odkaz jsme posílali do chatu, Petra ho tam ještě jednou pošle. Je to průvodce vašimi prvními třiceti minutami s Claude Code. Od instalace, přes první projekt, až po tři další workflow. Napsali jsme ho tak, aby stál sám za sebe — nepotřebujete otevřený tenhle webinář."
>
> **[Ondřej, 87:15]**
> "Za třetí, a nejdůležitější — Circle komunita."
>
> **[Pauza, důraz]**
>
> "Součástí vašeho vstupu na tenhle webinář je členství v naší Circle komunitě. Odkaz posíláme do chatu, a taky vám přijde e-mailem. V komunitě se můžete ptát, když něco nefunguje, sdílet, co jste postavili, a vidět, co dělají ostatní. Je to místo, kde se učení nezastaví tím, že zavřete Zoom. My jsme tam s vámi. Slava tam tráví čas každý týden."
>
> **[Slava, 87:45]**
> "Když tam sdílíte svůj první projekt, rád se na něj podívám a dám vám zpětnou vazbu. Nemusí to být dokonalé — naopak. První pokusy jsou nejlepší ukázka toho, jak agent pracuje s reálnou prací."
>
> **[Ondřej, 88:15]**
> "Nahrávka webináře vám přijde e-mailem do dvaceti čtyř hodin — takže když jste si něco nestihli zapsat, budete se k tomu moct vrátit."
>
> **[Ondřej, 88:45, zavírací myšlenka]**
> "Jednu věc si zapamatujte. Donedávna jste potřebovali vývojáře na každou technickou věc — stránku, automatizaci, jakýkoli nápad, který se neobešel bez kódu. Dnes máte v terminálu spolupracovníka, který nespí, nikdy se neurazí a zvládne víc, než si myslíte. Jediné, co potřebujete, je říct mu, co chcete."
>
> **[Pauza]**
>
> "Díky, že jste s námi strávili těch devadesát minut. Uvidíme se v Circle."

**Délka:** ~4 minuty. Cíl: klidné, neprodejné zakončení. Držte ten samý tón autenticity, kterým jste otevřeli.

---

## Co-teaching — jak si to předáváme

Formát je co-teaching, ne tag-team. Oba jsme vidět i slyšet po celých devadesát minut (grid layout v Zoomu během konverzačních momentů, fokus na screen share během dem).

### Čtyři dohodnuté přechody

Abychom nesklouzli k chaotické improvizaci, domluvíme se na konkrétních momentech předání. Minimum tři, ideálně čtyři:

| Minuta | Situace | Jak si předáváme slovo |
|--------|---------|------------------------|
| **~3:00** | Konec otevření → začátek Levelu 0 | Ondřej: *"Slavo, ukaž jim, jak to doopravdy vypadá."* |
| **~30:00** | Konec Levelu 1 → otevření prvního "Zkuste si to sami" | Slava: *"Tak. Ondřeji, ty to otevřeš?"* Ondřej: *"Jasně. Teď je řada na vás…"* |
| **~66:00** | Konec druhého "Zkuste si to sami" → začátek Levelu 3 | Ondřej: *"A teď poslední část. Slavo, CLAUDE.md."* |
| **~75:00** | Odhalení skillu uprostřed Levelu 3 | Ondřej se vloží do Slavovy demo sekvence: *"Než půjdeme na MCP — chci se vrátit k jedné věci."* (Viz [Scénář: odhalení skillu](#scénář-odhalení-skillu-75–77-minut).) |

### Co dělá ten druhý, když nevede

Když **vede Slava** (demo), Ondřej:
- Je vidět na obrazovce (grid layout, nebo malé okno vedle sdíleného screenu)
- Sleduje chat, čte otázky, ty jednoduché rovnou odepisuje v chatu
- Průběžně komentuje pro publikum: *"Tohle je moment, kterému většina lidí nevěří, dokud to neuvidí."*
- Reaguje emocionálně — smích, překvapení, údiv. Publikum kopíruje vaše reakce.
- Klade "otázky za publikum" Slavovi: *"Slavo, a kdyby se to spletlo — co by se stalo?"*

Když **vede Ondřej** (otevření, závěr, context momenty), Slava:
- Je vidět na obrazovce, doplňuje technický detail, když je potřeba
- Sdílený screen může zůstat v klidové pozici (třeba prázdný `claude` prompt), aby publikum mělo kontext, kam se vrátíme

### Co nedělat

1. **Nepřekrývat se** — pokud mluví Slava, Ondřej počká, až dokončí větu
2. **Nemluvit dlouho v kuse** — nikdo by neměl mít souvislý monolog delší než tři minuty bez reakce toho druhého
3. **Nepoužívat formální přechody typu "a teď bych rád představil…"** — působí strojeně. Přirozenější je prostě se vložit.
4. **Nepředstírat překvapení** — pokud plánovaně mluvíte o skillu v Level 3, neříkejte *"Ach, právě mě napadlo…"*. Publikum to pozná.

### Fallback

Kdyby se při zítřejší zkoušce (14. dubna) ukázalo, že si nesedneme a co-teaching nefunguje, vraťme se k čistšímu rozdělení:

- **Ondřej:** otevření (0–3), uvedení prvního "Zkuste si to sami" (30–32), uvedení druhého (58–60), odhalení skillu (75–77), závěr (86–90)
- **Slava:** Level 0 instalace (11–15), Level 1 demo (15–30), Level 2 demo (38–58), Level 3 CLAUDE.md + MCP (66–75, 77–78)

Každý má své jasné bloky, oba jsou pořád vidět a mohou do toho druhého vstoupit krátkými poznámkami.

---

## Co dělá Petra během "Zkuste si to sami"

Petra je facilitátorka — během obou "Zkuste si to sami" je její role aktivnější než ve zbytku webináře. Konkrétně:

### Před startem (příprava)

- Má okno s chatem otevřené jako hlavní
- Má přichystané texty promptů pro obě "Zkuste si to sami" ve snippetech, ať se neztrácí čas psaním

### Během práce (aktivní facilitace)

1. **Nahození promptů do chatu** — jakmile Ondřej řekne *"Petra pošle prompty"*, rovnou posílá:
   ```
   Zkuste si to sami #1 — tři možnosti:
   A) Osobní stránka
   B) To-do list
   C) Stránka o něčem, co vás baví

   Napište do chatu A, B nebo C a pošlu vám konkrétní prompt.
   ```

2. **Reakce na A/B/C** — když někdo napíše "A", "B", nebo "C", pošle mu jako odpověď hotový prompt

3. **Vytahování úspěchů** — sleduje chat na reakce typu "hotovo", "funguje to", "koukejte" — a vybere tři až čtyři jména, která zmíní při surfování výsledků (37:00 nebo 65:30)
   - **Pravidlo:** vybírat pestře. Tři lidé, tři různé varianty, různá jména.
   - Kdo sdílí screenshot, ten má přednost — je to nejlepší materiál ke zmínce

4. **Pomoc zaseknutým** — když někdo píše *"mám chybu"* nebo *"nefunguje mi to"*:
   - Jednoduchá chyba (překlep, chybný prompt): odpovídá rovnou
   - Instalační chyba: odkazuje na FAQ ve skillu (`.claude/skills/claude-code-guide/references/faq.md`)
   - Nejasná chyba: řekne účastníkovi, ať se zeptá přímo Claude Code — a označí to Slavovi, aby se k tomu mohl vrátit

### Po uzavření (přechod)

Jakmile Ondřej řekne *"Petro, co jsme v chatu viděli?"*, má patnáct, dvacet vteřin na shrnutí úspěchů:

**Dobrý formát:**
> "Tři lidi postavili osobní stránku — Marie, Tom, Jana. Dva to-do list — Pavel, Lucie. Honzík vylepšil svoji stránku a přidal tmavý režim. Vypadá to super."

**Špatný formát:**
- Čtení dlouhých pasáží z chatu
- Vyjmenování deseti jmen
- Technické komentáře k výsledkům

### Když je v chatu ticho

Pokud běží "Zkuste si to sami" a chat je tichý (méně než tři reakce v prvních pěti minutách):

1. Petra sama do chatu napíše: *"Já si tady taky něco stavím, zkouším variantu A…"*
2. Nebo pošle screenshot Slavovy demo obrazovky jako *"podívejte, co se tam zrovna děje"*
3. Nebo přímo vyzve: *"Kdo už má něco? Napište do chatu jedno slovo — hotovo, zaseknu se, nebo ještě ne."*

---

## Na co klást důraz v každé části

### Pro každý level:
- **Level 0:** Claude Code je agent — ne chatbot, ne editor. Běží v terminálu, ale stejný engine je i v desktopové aplikaci, na webu a v rozšířeních.
- **Level 1:** Dívejte se, jak agent přemýšlí — plánuje, tvoří, opravuje. A ptá se, než udělá něco, co by mohlo vadit.
- **Level 2:** Jeden nástroj, spousta použití — od webů přes e-maily po automatizace. Co vidíte, je zrcadlo vaší skutečné práce.
- **Level 3:** S CLAUDE.md, MCP a skilly se z Claude Code stává platforma, kterou si rozšiřujete sami.

### Obecné principy:
- Nemusíte umět programovat — Claude Code programuje za vás
- Terminál vypadá strašidelně, ale je to jen místo, kam píšete příkazy
- Lepší zadání = lepší výsledek. Buďte konkrétní.
- Výstup si vždycky zkontrolujte — agent je mocný, ale ne neomylný
- Claude Code se rychle vyvíjí — co dnes neumí, zítra možná ano

---

## Tipy pro živé demo

### Příprava:
- Mějte přichystanou prázdnou složku pro každé demo
- Ověřte, že Claude Code funguje a je aktuální
- Mějte po ruce záložní Anthropic účet (pro případ rate limitů)
- Všechna dema si projděte předem — agent by vás na živo neměl překvapit
- `.claude/skills/claude-code-guide/` mějte naklonovaný a otestovaný před webinářem

### Během dema:
- Mluvte nahlas o tom, co se děje — *"Claude Code si právě čte soubory, aby pochopil strukturu…"*
- Když nastane chyba, nezděste se — ukažte, jak ji agent sám opraví (*tohle je demo*)
- Držte prompty jednoduché a čitelné — publikum musí vidět, co jste napsali
- Zvětšete si font v terminálu (minimálně 18 px) — vzdálení účastníci musí číst

### Časový management:
- Když Level 0 zabere víc času, nejsnáz se krátí Level 2 (vynechte slovní zmínku třetího workflow)
- Oba "Zkuste si to sami" jsou posvátné — nikdy je nezkracujte pod pět minut
- Level 3 můžete zkrátit o MCP demo, pokud nestíháte (odhalení skillu nechte — to je klíčový moment)
- Q&A na konci může přetéct — nechte prostor pro otázky

---

## Technické požadavky

### Pro lektora:
- Claude Code nainstalovaný a funkční (otestované předem)
- Anthropic účet s dostatečným kreditem / Max plánem
- Záložní Anthropic účet pro případ rate limitů
- Stabilní internet (ideálně kabel, ne Wi-Fi)
- Terminál se zvětšeným fontem (18 px+)
- Zoom s nasdílenou obrazovkou
- Přichystané prázdné složky pro každé demo
- Companion skill naklonovaný a otestovaný

### Pro účastníky:
- Počítač s terminálem (Mac/Linux/Windows s PowerShell nebo WSL)
- Stabilní internet
- Nainstalovaný Node.js (zmíněno v přípravném e-mailu)
- Anthropic účet (zmíněno v přípravném e-mailu)
- **Nové:** Volitelně naklonovaný repozitář webináře (pro companion skill)

---

## Přípravný email pro účastníky

> **Předmět:** Intro do Claude Code — jak se na to připravit (5 minut)
>
> Ahoj,
>
> za pár dní se uvidíme na webináři **Intro do Claude Code**. Abychom mohli rovnou naskočit a neřešili technické problémy, prosíme vás o krátkou přípravu — zabere to maximálně pět minut.
>
> **Co opravdu potřebujeme, abyste udělali předem:**
>
> 1. **Node.js** — stáhněte si ho z [nodejs.org](https://nodejs.org), verze 18 nebo novější
> 2. **Účet u Anthropic** — založte si ho na [claude.com](https://claude.com), pokud ho ještě nemáte
> 3. **Zkontrolujte terminál** — otevřete si terminál (Mac: `Cmd+Space` → "Terminal"; Windows: `Win` → "PowerShell") a napište `node --version`. Když uvidíte číslo verze, jste připraveni.
>
> **Volitelné (pokud máte chuť si ušetřit čas):**
>
> 4. Můžete si rovnou nainstalovat Claude Code: `npm install -g @anthropic-ai/claude-code`. Uděláme to společně, ale kdo už to bude mít, může hned na živo pracovat.
> 5. Můžete si naklonovat repozitář webináře, ať máte všechny materiály po ruce: `git clone https://github.com/aibility/claude-code-90-webinar.git`
>
> **Co vás čeká:**
>
> Během devadesáti minut vám ukážeme, co Claude Code umí, společně si ho nainstalujete a dostanete dva prostory, kdy si sami něco postavíte — s naší podporou v chatu. Odcházíte s nainstalovaným nástrojem, prvním reálným projektem a cheat sheetem na doma.
>
> Po webináři budete mít přístup k nahrávce a do naší **Circle komunity**, kde se můžete dál ptát a sdílet, co jste postavili.
>
> Programování umět nemusíte. Stačí počítač, internet a otevřená hlava.
>
> Těšíme se na vás!
>
> — Ondřej, Slava a Petra @ Aibility

> **Pro organizátora (Petra):** Tenhle e-mail odeslat minimálně dva dny před webinářem (tj. do 14. 4. 2026 večer). Kdyby nešlo dřív, pošlete co nejdřív. Kdyby někdo odepsal s problémem při instalaci Node.js, nabídněte krátký hovor, nebo ho pošlete na `cheat-sheet/claude-code-quickstart-cs.md`.
