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
- `Esc Esc` — vrátí konverzaci k dřívější zprávě
- Prefix `!` — spustí shell příkaz přímo z promptu
- Prefix `#` — přidá zápisek do `CLAUDE.md` jako trvalou paměť
- Přetažení souboru do terminálu ho vloží do promptu jako odkaz

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

## Odkazy pro další studium

- Dokumentace: https://docs.claude.com/en/docs/claude-code/overview
- Přehled modelů: https://www.anthropic.com/claude
- Anthropic Cookbook (příklady použití): https://github.com/anthropics/anthropic-cookbook
- GitHub issues a zpětná vazba: https://github.com/anthropics/claude-code/issues
