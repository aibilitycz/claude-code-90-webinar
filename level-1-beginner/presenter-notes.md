# Poznámky k Level 1

Doplňkový kontext, odkazy a časté otázky k prvnímu demu. Slouží lektorům jako referenční materiál během živých ukázek — a zároveň jako přehled pro účastníky, kteří si chtějí dohledat detaily po webináři.

---

## Co Claude Code dokáže přečíst a zpracovat

- **Textové soubory** v libovolném jazyce a formátu (kód, `.md`, `.txt`, `.csv`, `.json`, `.yaml`)
- **Obrázky** — PNG, JPG, screenshoty (lze přetáhnout do terminálu nebo vložit ze schránky)
- **PDF** — čte text i strukturu (smlouvy, faktury, reporty)
- **Jupyter notebooky** (`.ipynb`) — včetně výstupů buněk
- **Webové stránky přes URL** — nástroj WebFetch dokáže načíst obsah odkazu
- **Celé adresáře** — pracuje přímo s filesystemem, nic se nenahrává jinam

Podrobnosti: https://docs.claude.com/en/docs/claude-code/overview

---

## Slash příkazy, které je dobré znát

- `/help` — přehled všech příkazů
- `/clear` — vymaže kontext session (užitečné při přepnutí tématu)
- `/compact` — shrne dosavadní konverzaci, šetří kontextové okno
- `/model` — přepnutí mezi modely Opus / Sonnet / Haiku
- `/cost` — spotřeba a náklady aktuální session
- `/resume` — návrat do předchozí session

Podrobnosti: https://docs.claude.com/en/docs/claude-code/slash-commands

---

## Klávesové zkratky a vstupy

- `Shift+Tab` — přepíná mezi plan mode a auto-accept mode
- `Esc` — přeruší Claude během odpovědi
- `Esc Esc` — otevře **rewind menu** (viz sekce Checkpointy níže)
- Prefix `!` — spustí shell příkaz přímo z promptu
- Prefix `#` — přidá zápisek do `CLAUDE.md` jako trvalou paměť
- Přetažení souboru do terminálu ho vloží do promptu jako odkaz

---

## Checkpointy — návrat k dřívějšímu stavu

Claude Code automaticky ukládá stav souborů a konverzace před každým vaším promptem. Když se vám něco nelíbí, nemusíte nic vracet ručně.

**Jak na to:**
- Stiskněte `Esc` dvakrát, nebo napište `/rewind`
- Otevře se seznam vašich předchozích promptů v aktuální session
- Vyberte bod, kam se chcete vrátit, a zvolte jednu z akcí:

| Akce | Co udělá |
|------|----------|
| **Restore code and conversation** | Vrátí zpátky soubory i konverzaci |
| **Restore conversation** | Vrátí jen konverzaci, soubory zůstanou beze změny |
| **Restore code** | Vrátí jen soubory, konverzace zůstane |
| **Summarize from here** | Shrne zbytek konverzace (šetří kontextové okno) |

**Důležitá omezení:**
- Checkpointy sledují jen úpravy souborů, které dělá Claude přes své editor tools
- **Nesledují změny přes bash příkazy** (`rm`, `mv`, `cp`) — ty se vrátit nedají
- Nesledují ani ruční změny, které uděláte v jiném editoru
- Checkpointy se drží ~30 dní a přežijí restart (dostupné i přes `/resume`)

**Pravidlo palce:** checkpoint je rychlý local undo v rámci session, **git je opravdová historie**. Před větší změnou se vyplatí `git commit` — to je záchranná síť, která funguje vždy.

Dokumentace: https://code.claude.com/docs/en/checkpointing

---

## Jak Claude Code vlastně funguje

Stručně pro netechnické publikum:
- Je to terminálová aplikace, která Claudovi dává konkrétní nástroje — čtení, psaní, spouštění příkazů
- Pracuje přímo s vašimi soubory ve vaší složce, žádný oddělený sandbox
- Každé volání nástroje se dopředu ptá na povolení (dokud si lektor nebo uživatel neschválí opakované vzory)
- Kontextové okno = kolik si najednou drží v paměti. Opus 4.6 jich má až 1 milion (přibližně 750 tisíc slov).

---

## Nejčastější otázky účastníků

**Posílá se můj kód Anthropicu?**
Ano, obsah se posílá do Anthropic API. Na placených plánech se ale nepoužívá pro trénink modelů. Detaily v [Acceptable Use Policy](https://www.anthropic.com/legal/aup).

**Může mi Claude Code smazat soubory?**
Jen s vaším svolením. Pro jistotu vždy pracujte v gitu a před rizikovou akcí commitněte — případná změna se dá rychle vrátit.

**Co když si něco vymyslí?**
Může se to stát. Proto je užitečné si změny projít (git diff) a neschvalovat je naslepo.

**Kolik to stojí?**
Závisí na modelu a délce úlohy. Typická drobná úloha vyjde na jednotky centů, větší projekty na pár dolarů. Aktuální ceník: https://www.anthropic.com/pricing

**Co musím mít nainstalované?**
Node.js verze 18 nebo vyšší. Nic dalšího není potřeba.

---

## Zajímavosti, které se hodí zmínit

**O Anthropicu a Claudovi:**
- Jméno **Claude** je poctou Claudu Shannonovi, zakladateli teorie informace (1948) — bez něj by dnešní počítače a AI nevznikly.
- Názvy modelů **Opus / Sonnet / Haiku** jsou metafora z hudby a poezie: opus = rozsáhlá kompozice, sonnet = střední forma, haiku = krátká báseň. Odpovídá to velikosti a hloubce modelu.
- Anthropic založili v roce 2021 sourozenci Dario a Daniela Amodei společně s dalšími výzkumníky z OpenAI — se záměrem postavit AI lab s důrazem na výzkum bezpečnosti.
- **Constitutional AI** je Anthropicův vlastní přístup k trénování — model se učí podle sady psaných principů (ústavy), ne jen z lidské zpětné vazby. Paper: https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback

**O Claude Code, co se dá zmínit:**
- Můžete Claudovi **poslat data přes pipe**: `cat chyba.log | claude "co je špatně?"`
- Claude Code umí číst **obrázky v terminálu** — screenshot chyby stačí přetáhnout do prompt okna.
- Prefix `@` v promptu odkazuje soubor nebo složku: `@src/app.js vysvětli mi tenhle soubor`.
- `CLAUDE.md` podporuje **importy** dalších souborů — `@docs/architecture.md` přenese jeho obsah do kontextu.
- `/doctor` diagnostikuje aktuální session — co je načtené, kde by mohl být problém.
- Existuje **ne-interaktivní režim** pro skripty: `claude -p "zkontroluj tenhle commit"` — vrátí odpověď a skončí.
- **Prompt caching** (standardem v Claude Code) pionýrsky nasadil Anthropic v roce 2024 — opakovaný kontext se platí výrazně levněji.

---

## Odkazy pro další studium

- Dokumentace: https://docs.claude.com/en/docs/claude-code/overview
- Přehled modelů: https://www.anthropic.com/claude
- Anthropic Cookbook (příklady použití): https://github.com/anthropics/anthropic-cookbook
- GitHub issues a zpětná vazba: https://github.com/anthropics/claude-code/issues
