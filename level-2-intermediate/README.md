# Level 2: Dva reálné workflow + skilly a pluginy

**Délka:** 20 minut
**Cíl:** Účastníci uvidí dva workflow, které lektoři reálně používají každý den, a poprvé uslyší slovo *skill* — které se potáhne celým zbytkem webináře.

**Velká myšlenka:** Claude Code není aplikace s pevnými funkcemi. Je to **platforma, kterou si rozšiřujete sami** pomocí skillů a pluginů. Všechno, co v tomhle levelu uvidíte, slouží k dokreslení téhle jedné věty.

## Struktura (38–58 min)

| Čas | Blok | Kdo vede |
|-----|------|----------|
| 38–41 | Most z Try Momentu #1 | Kdokoli |
| 41–48 | **Demo A** — Ondřejova denní obsahová pipeline | Ondřej |
| 48–55 | **Demo B** — Slavův reálný workflow | Slava |
| 55–58 | Skilly & pluginy — most do Try Momentu #2 | Slava |

## Demo A — Denní obsahová pipeline (Ondřej)

Reálný osobní workflow, na kterém Ondřej běží svůj blog. Každou noc kolem 2:30 ráno Claude Code na cronu stáhne signály z RSS, webu a zachycených ranních/večerních myšlenek, vygeneruje denní brief s úhly pohledu, varianty LinkedIn postů a outline blogu, commitne do Gitu a jde spát.

**Co ukázat:**
- Dnešní vygenerovaný brief jako konkrétní artefakt (ne spouštět pipeline naživo — je pomalá)
- Obsah briefu: počet signálů, úhly, LinkedIn drafty — čísla dělají věc reálnou
- Moment, kdy pipeline našla téma, které si Ondřej sám dřív v týdnu zachytil → systém čte poznámky a vrací je s kontextem
- Jednotlivé kousky jsou **skilly**, které Ondřej napsal sám (pipeline, capture, write-post)
- Všechno je v open-source toolkitu **Heart of Gold Toolkit** na GitHubu (`github.com/ondrej-svec/heart-of-gold-toolkit`), instalovatelné přes `/plugin marketplace add ondrej-svec/heart-of-gold-toolkit`

**Pre-webinar příprava (Ondřej):**
- Dnešní brief otevřený v editoru
- `content/captures/` **neotevřené** na sdílené obrazovce (osobní reflexe)
- Fallback, když dnešní brief chybí: projít `SKILL.md` jednoho ze skillů a ukázat, jak krátký a čitelný markdown to je

## Demo B — Slavův reálný workflow (Slava, obsah podle jeho volby)

Druhé demo je Slavova volba — má vést ke skills & plugins bridge, který Slava hned navazuje. Kandidáti:

- **Vlastní workflow se skilly a pluginy** — cokoli, co Slava běžně používá
- **Deep-dive do jednoho pluginu nebo skillu** z oficiálního marketplace nebo z `compound-engineering`
- **Meta: jak jsme postavili tuhle prework stránku** — plán doc, `git log --oneline site/`, živá stránka. Poctivé rámování: stáhli jsme Aibility design system z vedlejšího repozitáře, iterovali přes ~9 commitů, ceny ověřovali živým fetchem z `claude.com/pricing`. Žádný design skill — jen *"ukaž Claude Code existující vzor a řekni mu, ať ho napodobí"*. Tahle varianta existuje, ale není default.

Pre-webinar příprava závisí na Slavově volbě.

## Skilly & pluginy — most do Try Momentu #2 (Slava)

Krátký přechod, půlminutová prohlídka `/plugin` a předání Petře na Try Moment #2.

**Body k předání:**
- Skilly a pluginy jsou způsob, jak si rozšířit Claude Code. Otevřít `/plugin` Discover v čerstvé session — pár oficiálních ukázek, stačí 10–20 vteřin.
- Tři ekosystémy, které stojí za pozornost:
  - **Anthropicův oficiální marketplace** (zabudovaný v `/plugin`)
  - **compound-engineering** od Every Inc. — partnerský plugin, smyčka „plán → práce → review", kterou oba lektoři používají
  - **Heart of Gold Toolkit** od Ondřeje — právě ukázaný v Demo A, open source
- *"Víc o skillech, pluginech a CLAUDE.md v Levelu 3 za chvíli."*
- Předat Petře.

## Checkpoint

Po Level 2 by účastníci měli chápat:
- [ ] Že Claude Code se používá na reálné, dlouhodobé workflow, ne jen na jednorázové úkoly
- [ ] Slovo *skill* — že to je markdown soubor, který rozšiřuje, co Claude Code umí
- [ ] Že skilly a pluginy se instalují přes `/plugin` a že existují tři hlavní ekosystémy
- [ ] Že mají co pustit v Try Momentu #2 — teď už znají víc nástrojů v krabici

## Další věci, které Claude Code zvládá (k rozšíření po webináři)

Level 2 v původním plánu ukazoval tři canned demos: webovou aplikaci, práci s dokumenty a automatizaci. Ty teď nejsou v živém demu, ale tady je krátký přehled pro účastníky, kteří chtějí víc:

| Oblast | Co Claude Code zvládne | Příklad promptu |
|--------|----------------------|-----------------|
| **Tvorba webů** | Portfolio, landing page, interaktivní nástroje od nuly | *"Vytvoř osobní portfolio stránku, sekce O mně, Projekty, Kontakt. Minimalistický design, tmavé téma."* |
| **Dokumenty a e-maily** | Shrnutí PDF, generování variant e-mailů, briefing podklady | *"Přečti tenhle 20stránkový PDF report a vytvoř executive summary, 5 klíčových zjištění a 3 další kroky."* |
| **Automatizace souborů** | Přejmenování, třídění, hromadné operace | *"V této složce je 50 fotek. Přejmenuj je podle data vytvoření a udělej z nich HTML galerii."* |
| **Debugging** | Najde a opraví chyby v existujícím kódu | *"Kontaktní formulář neodesílá — najdi a oprav chybu."* |
| **Git & verzování** | Commituje, analyzuje historii, navrhuje branche | *"Co se v projektu změnilo za poslední týden?"* |
| **Dokumentace** | README, API docs, návody z kódu | *"Projdi projekt a vytvoř kompletní README."* |
| **Refactoring** | Vylepší strukturu bez změny funkce | *"Rozděl tento soubor do logických celků."* |
| **Testování** | Napíše testy pro existující kód | *"Napiš testy pro kontaktní formulář."* |
| **Konverze formátů** | Mezi Excelem, HTML, Markdown, PDF… | *"Převeď tento Excel na webovou tabulku."* |

Víc v `cheat-sheet/claude-code-quickstart-cs.md`.
