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
| **Demo drivers** | Slava i Ondřej | Oba u klávesnice, oba píšou prompty, střídají se podle toho, kdo co vede. Slava vede technickou linku, Ondřej business kontext — ale demo umí oba. |
| **Facilitátorka** | Petra | Otevírá a uzavírá webinář, stará se o chat, ankety, vytahuje úspěchy z "Zkuste si to sami" a pomáhá těm, co se zaseknou |

Konkrétní momenty, kdy si předáváme slovo, jsou v sekci [Co-teaching](#co-teaching--jak-si-to-předáváme).

## Časový rozvrh (90 minut)

| Čas | Sekce | Kdo vede | Minut |
|-----|-------|----------|-------|
| 0–5 | Otevření + představení týmu | Petra | 5 |
| 5–15 | Level 0: Úvod + instalace + první prompt | Slava (demo) + Ondřej (kontext) | 10 |
| 15–30 | Level 1: První úkol | Slava (demo) + Ondřej (reakce) | 15 |
| 30–38 | **Zkuste si to sami #1** | Oba + Petra v chatu | 8 |
| 38–57 | Level 2 | Ondřej (sólo) | 19 |
| 57–65 | **Zkuste si to sami #2** | Oba + Petra v chatu | 8 |
| 65–80 | Level 3: Pokročilé funkce | Slava (demo) + Ondřej (kontext) | 15 |
| 80–90 | Q&A + závěr | Petra moderuje, oba lektoři odpovídají | 10 |

### Level 0: Úvod a instalace (0–15 minut)

#### 0–5 min: Otevření + představení týmu

**Vede:** Petra

Scénář v plném znění je v sekci [Scénáře klíčových momentů](#scénáře-klíčových-momentů) níže.

Petra přivítá publikum, představí Slavu a Ondřeje (oba budou střídavě u klávesnice), vysvětlí svou roli v chatu a nastíní, co se za devadesát minut stane.

#### 5–7 min: Co je to Claude Code

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

> **Důležité:** Dnes ukazujeme instalaci přes terminál a CLI — protože je to nejjasnější způsob, jak vidět, co se děje. Ale Claude Code funguje stejně dobře v **desktopové aplikaci** (stáhnout z [claude.com](https://claude.com)) a v **prohlížeči** na [claude.ai/code](https://claude.ai/code). Účastníci, kteří si stáhli desktop nebo používají web, můžou poslouchat a paralelně si otevřít svou aplikaci. Aktivace společníka pro ně bude chvilku jiná — viz `README.md` v repozitáři pro alternativní cesty.

1. Instalace Claude Code (CLI cesta):
   ```bash
   npm install -g @anthropic-ai/claude-code
   ```
2. Přihlášení — při prvním spuštění `claude` se otevře prohlížeč
3. **Aktivace společníka:**
   ```bash
   git clone https://github.com/aibilitycz/claude-code-90-webinar.git
   cd claude-code-90-webinar
   claude
   ```
   Skill leží v `.claude/skills/claude-code-guide/` uvnitř repozitáře. Když v téhle složce spustíte `claude`, Claude Code si ho sám načte — **žádná instalace, žádná konfigurace navíc**.

4. Rychlý test: zeptat se Claude Code česky *"Co mám zkusit poprvé?"* — měl by odpovědět s konkrétní nabídkou ze společníka.

> **Moment k zdůraznění (Slava):** "Vidíte tu složku `.claude/skills/`? Tam se Claude Code dívá, když ho spustíte v nějakém projektu. Kdokoli si tam může přidat vlastní skill. Dnešní společník je přesně takový — obyčejný markdown, který mu Claude Code čte, když to dává smysl."
>
> **Ondřej navazuje:** "A to je váš společník pro zbytek webináře. Když se zaseknete, zeptejte se přímo Claude Code — skill odpoví. A kdyby vám po webináři chybělo, že funguje jen tady v téhle složce, v README je postup, jak si ho zkopírovat k sobě domů do `~/.claude/skills/`. Pak máte společníka kamkoli jdete."

**Poznámka:** V README Levelu 0 je nová sekce "Švýcarský nůž" — rychlý přehled všech nástrojů (chat/režimy, slash commands, CLAUDE.md, skills, plugins, MCP, hooks). Na webináři tohle pokrývá corner tour z approved plan (12:00–14:00). Slava pojmenuje nástroje, nevysvětluje je — *"Tohle jsou jména, ke každému se dnes vrátíme."*

### Level 1: První úkol (15–30 minut)

**Vede:** Slava u klávesnice, Ondřej v reakcích

- **15–17 min:** Zadání úkolu — landing page pro workshop (viz approved plan)
- **17–24 min:** Agent pracuje — Slava vypráví krok po kroku, Ondřej reaguje přirozeně
- **24–28 min:** Samooprava a ptaní se na povolení — ukázat moment, kdy si Claude Code řekne o schválení
- **28–30 min:** Výsledek v prohlížeči, jedna rychlá iterace

> **Poznámka:** README v `level-1-beginner/` obsahuje rozšířenou 4-prompt verzi (kontext souborů + obrázek → web search → samooprava → iterace). Živé demo sleduje jednodušší verzi z approved plan (jeden prompt + iterace). Rozšířená verze je pro účastníky k vyzkoušení doma.

**Jedno je potřeba během dema zmínit** (kotva pro Level 3): až agent **čte soubor** předtím, než ho začne měnit, někdo z lektorů to nahlas pojmenuje — *agent čte, nehádá*. Nepotřebuje to být scénář, stačí jedna věta. V Level 3 se k tomu vracíme.

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

### Level 2: Skilly, pluginy a marketplaces (38–57 minut)

**Vede:** Ondřej (sólo, 19&nbsp;minut).

Velká myšlenka Levelu&nbsp;2: **Claude&nbsp;Code je platforma, kterou si rozšiřujete sami.** V&nbsp;Aibility tomu říkáme **OHIO princip** (*only handle it once*) — stará rada z&nbsp;papírové éry, kterou Claude&nbsp;Code posouvá dál: vyřeš to napoprvé, pak z&nbsp;toho udělej skill, a&nbsp;příště to nedělej vůbec. Demo&nbsp;A ukazuje zralý konec té smyčky, Demo&nbsp;B její začátek. V&nbsp;mostu Ondřej cituje **Simona Willisona**: *„Claude Skills jsou možná větší věc než MCP"* — věta od&nbsp;respektovaného hlasu, která koncept před skeptickým publikem legitimuje.

> **Změna oproti původnímu plánu:** Místo tří připravených demo workflow (webová aplikace, dokumenty/e-maily, automatizace) ukazujeme dva skutečné skillové příběhy&nbsp;— Bobo content flow a&nbsp;LinkedIn carousel skill. Původní příklady zůstávají v&nbsp;cheat sheetu jako katalog případů užití.

#### 38–41 min · Přechod ze&nbsp;Zkuste si to sami&nbsp;#1

Tři věty, které musí padnout. Žádný scénář&nbsp;— kotvy.

1. *„Právě jste si něco postavili. Kdybyste tu samou věc chtěli udělat příští týden, opsali byste prompt. Za&nbsp;měsíc potřetí. A&nbsp;přesně v&nbsp;tomhle momentě se z&nbsp;promptu má stát skill."*
2. *„V&nbsp;Aibility tomu říkáme **OHIO princip**&nbsp;— only handle it once. Stará rada z&nbsp;papírové éry: dotkneš se papíru, vyřídíš ho a&nbsp;zpátky se k&nbsp;němu nevracíš. S&nbsp;Claude&nbsp;Code to posouváme dál: vyřeš to napoprvé, **pak z&nbsp;toho udělej skill**, a&nbsp;příště to nedělej. Skill to udělá za&nbsp;tebe."*
3. *„**Simon Willison**, autor Djanga a&nbsp;jeden z&nbsp;nejstřízlivějších hlasů v&nbsp;AI, k&nbsp;tomu nedávno napsal jednu větu: že Claude Skills jsou možná větší věc než MCP. Příštích deset minut ukážu proč&nbsp;— na&nbsp;dvou příkladech. Jeden zralý, běží mi každý den. Druhý vznikl z&nbsp;jediné úlohy před pár týdny."*

#### 41–48 min · Demo&nbsp;A — Bobo content flow *(zralý konec smyčky)*

Reálný osobní postup, na&nbsp;kterém Ondřej dělá svůj blog a&nbsp;LinkedIn. Každou noc kolem půl třetí ráno spustí cron Claude&nbsp;Code, ten projde newslettery z&nbsp;e-mailu, RSS, web a&nbsp;poznámky zachycené přes den, sestaví denní brief s&nbsp;úhly pohledu, návrhy LinkedIn postů a&nbsp;osnovu blogového článku, uloží to do&nbsp;Gitu a&nbsp;jde dál spát.

**Pointa, kterou nesmí zapomenout říct:** Tohle není jeden velký prompt. Jsou to **skilly**&nbsp;— pipeline, capture, write-post. Každý je krátký markdown soubor. Ondřej je nepsal najednou; psal je postupně, vždycky ve&nbsp;chvíli, kdy zjistil, že tu samou věc dělá pořád dokola.

**Hlavní body k&nbsp;zasažení:**
- Dnešní brief otevřít jako konkrétní artefakt. Pipeline naživo nespouštět&nbsp;— trvá zhruba minutu a&nbsp;půl, na&nbsp;kameře je to mrtvo.
- Projít obsah briefu: kolik signálů to přečetlo, kolik úhlů nabídlo, kolik návrhů LinkedIn postů. Čísla dělají věc reálnou.
- Silný moment: pipeline vytáhla téma, které si Ondřej zapsal už dřív v&nbsp;týdnu. *„Systém čte moje poznámky a&nbsp;vrací mi je s&nbsp;kontextem."*
- **Otevřít složku se skilly** a&nbsp;ukázat, jak krátké jsou&nbsp;— `pipeline/SKILL.md`, `capture/SKILL.md`, `write-post/SKILL.md`. Pár desítek řádků markdownu. Žádná magie.
- Krátká poznámka na&nbsp;konec: všechno je v&nbsp;open-source sadě **Heart of Gold Toolkit** na&nbsp;GitHubu, instalace přes `/plugin marketplace add ondrej-svec/heart-of-gold-toolkit`. Odkaz pošleme po&nbsp;webináři.

**Příprava před webinářem (Ondřej):**
- Dnešní brief (`content/daily/YYYY-MM-DD.md`) otevřený v&nbsp;editoru
- `content/captures/` zavřené&nbsp;— jsou to osobní poznámky, na&nbsp;sdílené obrazovce nemají co dělat
- Záloha, kdyby dnešní brief chyběl: otevřít `SKILL.md` jednoho ze&nbsp;skillů a&nbsp;projít ho

#### 48–53 min · Demo&nbsp;B — Jak vznikl LinkedIn carousel skill

Druhý příklad je úplně jiného druhu: **skill, který vznikl z&nbsp;jediné úlohy.** Ondřej jednou potřeboval udělat LinkedIn carousel ze&nbsp;série screenshotů. Vyřešil to s&nbsp;Claude&nbsp;Code jako obyčejný prompt. Když to vyšlo, došlo mu, že tuhle úlohu bude dělat pořád&nbsp;— a&nbsp;převedl ji na&nbsp;skill. Dneska ho spouští jednou větou.

**Druhá klíčová věta levelu, musí zaznít nahlas:** *„Potřeboval jsem to jednou. Když to vyšlo, řekl jsem Claude&nbsp;Code: tohle se mi líbí, udělej z&nbsp;toho skill. A&nbsp;on ho napsal sám."*

**Hlavní body k&nbsp;zasažení:**
- Otevřít `SKILL.md` carousel skillu v&nbsp;`heart-of-gold-toolkit`&nbsp;— ukázat hlavičku (`name`, `description`, spouštěcí fráze) a&nbsp;tělo. Markdown. Nic víc.
- Vyvolat skill jednou větou: *„Tady máš tři screenshoty, udělej z&nbsp;nich LinkedIn carousel jako PDF."* Claude&nbsp;Code skill rozpozná sám.
- Ukázat výstup&nbsp;— hotové PDF, připravené k&nbsp;publikování.
- **Pointa k&nbsp;zvýraznění:** skill nemusíte psát rukama. Claude&nbsp;Code ho napíše z&nbsp;toho, co jste právě udělali. Stačí říct.

**Příprava před webinářem (Ondřej):**
- `SKILL.md` carousel skillu otevřený v&nbsp;editoru jako záloha
- Tři připravené screenshoty ve&nbsp;složce, ať živé spuštění trvá pod&nbsp;30&nbsp;vteřin
- Záloha, kdyby generace selhala: otevřít poslední vygenerovaný carousel a&nbsp;ukázat ho jako artefakt

#### 53–57 min · Prohlídka marketplaces *(most do Zkuste si to sami&nbsp;#2)*

Krátká prohlídka čtyř míst, odkud se skilly a&nbsp;pluginy berou. Most do&nbsp;Zkuste si to sami&nbsp;#2.

- `/plugin` → Discover v&nbsp;čisté session. Pár vteřin scroll, ať publikum vidí, že je to reálná aplikace s&nbsp;reálnými položkami.
- **Čtyři ekosystémy** (jmenovat nahlas, každý jednou větou):
  1. **Anthropicův oficiální marketplace**&nbsp;— zabudovaný přímo v&nbsp;`/plugin`. Pluginy ověřené Anthropicem.
  2. **compound-engineering** od&nbsp;Every&nbsp;Inc.&nbsp;— smyčka *plan → work → review → **compound***. Kieran Klaassen z&nbsp;Every ji pojmenoval: poslední krok znamená *„zachyť poznatek jako skill, ať příští session začíná chytřejší."* Je to **přesně to, čemu my říkáme OHIO princip**, jen s&nbsp;jiným jménem. Plugin má přes **10&nbsp;000 hvězd na&nbsp;GitHubu** a&nbsp;používají ho lidi v&nbsp;Googlu i&nbsp;v&nbsp;Amazonu. `github.com/EveryInc/compound-engineering`.
  3. **Heart of Gold Toolkit** od&nbsp;Ondřeje&nbsp;— to, co jste právě viděli. Open source.
  4. **awesome-agent-skills** od&nbsp;VoltAgent&nbsp;— **přes tisíc kurátovaných skillů** od&nbsp;reálných týmů: Anthropic, Google, Vercel, Stripe, Cloudflare, Figma, Sentry. Není to automaticky nagenerovaný balast, ale věci, které firmy doopravdy používají. `github.com/VoltAgent/awesome-agent-skills`.
- **Vyvrácení nejčastější námitky** (jedna věta): *„SKILL.md je otevřený standard&nbsp;— funguje i&nbsp;v&nbsp;Codex CLI, v&nbsp;Cursoru, v&nbsp;Gemini CLI. Neinvestujete do&nbsp;Anthropicu, investujete do&nbsp;přenositelného formátu&nbsp;— a&nbsp;v&nbsp;tom je rozdíl."*
- **Věta na&nbsp;závěr** (jedna, kterou si publikum odnese): *„Každý úkol, který jednou vyřešíte, vás příště udělá rychlejší&nbsp;— protože se z&nbsp;něj stal skill. Tomuhle se neříká produktivita. Tomuhle se říká složené úročení vaší vlastní práce."*
- *„O&nbsp;CLAUDE.md, MCP a&nbsp;pluginech bude víc v&nbsp;Levelu&nbsp;3 za&nbsp;chvíli."* Předání na&nbsp;Zkuste si to sami&nbsp;#2.

**Časový rozpočet:** 19&nbsp;minut sólo (3 most + 7 Demo&nbsp;A + 5 Demo&nbsp;B + 4 prohlídka marketplaces). Pokud Demo&nbsp;A nebo&nbsp;B přetečou, zkrátit prohlídku marketplaces&nbsp;— stačí jmenovat čtyři ekosystémy a&nbsp;ukázat jeden screen `/plugin` Discover. Tvrdě timeboxovat.

### Zkuste si to sami #2 (57–65 minut)

**Vede:** Oba lektoři, Petra v chatu

Plný scénář je v sekci [Scénář: Zkuste si to sami #2](#scénář-zkuste-si-to-sami-2-57–65-minut) níže.

**Ve zkratce:**
- 58:00 — Ondřej: *"Druhá šance si něco zkusit. Teď už víte, jak to funguje."*
- 58:30 — Tři možnosti na obrazovce (A: shrnutí dokumentu, B: LinkedIn příspěvky, C: vylepšit, co jste postavili v #1)
- 59:00 — Účastníci pracují, Slava s Ondřejem průběžně komentují
- 65:30 — Petra vytáhne pár úspěchů z chatu
- 66:00 — Přechod do Levelu 3

### Level 3: Pokročilé funkce — Orchestrace (65–80 minut)

**Vede:** Slava (demo), Ondřej (kontext + "číst, ne hádat" moment)

Velká myšlenka: **Claude Code je platforma, ne aplikace.** Pravidla (CLAUDE.md) + externí služby (MCP) + znalosti (skills) + rozšíření (plugins) + modely = orchestr. Claude Code je dirigent.

- **65–66 min:** **Set stage** — Ondřej: *"Platforma, ne nástroj. Ukaž jim, co to znamená."* Slava rámuje: *"Level 1 byl jeden úkol. Level 3 — Claude Code skládá MCP, pravidla a design do jedné věci."*
- **66–68 min:** **CLAUDE.md quick + "číst, ne hádat"** — ukázat dva typy (`~/.claude/CLAUDE.md` osobní, `./CLAUDE.md` projektový). Vložit travel preferences do CLAUDE.md. **Ondřej doručí klíčovou větu:** *"Agent musí číst, ne hádat. Jedna věta v CLAUDE.md, která dramaticky sníží halucinace."* (Viz [Scénář: číst, ne hádat](#scénář-číst-ne-hádat-66–68-minut).)
- **68–69:30 min:** **Kiwi MCP instalace** — `/plugin` → Discover → "kiwi" → Install. *"Jeden příkaz. Plugin živý."*
- **69:30–72 min:** **Hlavní prompt** — agent čte travel preferences z CLAUDE.md, volá Kiwi MCP pro let Praha → Lisabon, volá Google Calendar MCP pro event. Cíl: ≤90 sekund agent work. Ukázat výsledek.
- **72–74 min:** **Pluginy & marketplace** — `/plugin` Discover, ukázat 2–3 pluginy (github, figma, vercel). Zmínit tři ekosystémy: Anthropic official, compound-engineering, Heart of Gold.
- **74–76:30 min:** **Companion reveal + vytvoření vlastního skillu** — **Ondřej** otevře `.claude/skills/claude-code-guide/SKILL.md` (*"společník je markdown"*), pak Slava jedním promptem vytvoří nový skill `firemni-copywriting` a ověří, že funguje.
- **76:30–77:30 min:** **Modely** — `/model`, Haiku/Sonnet/Opus, jedna věta ke každému.
- **77:30–78:30 min:** **Orchestrace — závěrečný moment:** *"Teď máme všechno: pravidla přes CLAUDE.md, služby přes MCP, znalosti přes skilly, rozšíření přes pluginy, modely pro různé úkoly. Každý dílek je jednoduchý. Dohromady je to orchestr a Claude Code je dirigent."*
- **78:30–80 min:** **Wrap** → předání Petře na Q&A.

> **Klíčové momenty:** "Číst, ne hádat" (66–68, Ondřej vede) a companion reveal + skill creation (74–76:30). MCP demo (69:30–72) je hlavní živá ukázka — fallback: pre-recorded screencast. Pokud čas dojde, zkrátit marketplace a modely.

> **Poznámka:** Approved plan (`docs/plans/2026-04-14-slava-demo-plan.md`) obsahuje detailní beat-by-beat s narracemi a fallback plánem. Tenhle přehled je zkrácená hybridní verze.

### Q&A + závěr (80–90 minut)

**Vede:** Q&A oba lektoři + Petra moderuje; závěr Petra

- **80–88 min:** Otevřené Q&A — odložené otázky + nové, Petra vybírá z chatu
- **88–90 min:** Závěr s Circle komunitou — vede **Petra**, viz [Scénář závěru](#scénář-závěru-88–90-minut)

---

## Scénáře klíčových momentů

Plný text pro šest míst, kde se hodí mít přípravu. Není to striktní script, jsou to kotvy — věci, které byste rádi řekli, i kdyby se zbytek neplánoval.

### Scénář: otevření (0–5 minut)

**Mluví:** Petra (přímo do kamery, přivítání), Slava a Ondřej krátce mávnou

> **[Petra, přivítání, 15 vteřin]**
> "Vítejte. Jsem Petra a za chvíli vás devadesát minut provedeme Claude Codem — tím samým nástrojem, který my sami používáme každý den. Hned vám představím, kdo je tu se mnou."
>
> **[Petra, představení týmu, 30 vteřin]**
> "Tohle je Slava — povede většinu technických ukázek, ruce na klávesnici, ukazuje, jak agent reálně pracuje. A tohle je Ondřej — taky bude u klávesnice a přidává byznys kontext, proč to celé dává smysl. Oba se budou během dema střídat. Já zůstávám v chatu — když se zaseknete, když máte otázku, nebo se jen chcete podělit o to, co vám vychází, pište mi. Vytahuji to nahoru a pomůžu vám dál."
>
> **[Petra, preview 90 minut, 60 vteřin]**
> "Za devadesát minut projdeme čtyři úrovně. **Level 0** — co Claude Code vlastně je a jak si ho během pár minut nainstalujete. **Level 1** — první úkol, ať vidíte agenta v akci. **Level 2** — reálná pracovní workflow, jak ho používáme my. **Level 3** — pokročilé věci, CLAUDE.md, marketplace, MCP. Mezi tím dostanete dva prostory — **Zkuste si to sami** — kdy si sami něco postavíte. Slava i Ondřej tu budou s vámi, já budu v chatu. Na konci je Q&A a krátký závěr s tím, kam jít dál."
>
> **[Petra, přechod ke Slavovi, 10 vteřin]**
> "Slavo, Ondřeji — pojďte na to."

**Délka:** ~2 minuty základního scénáře, k dispozici je 5 minut — Petra má prostor zpomalit, navázat oční kontakt, přidat osobní rovinu. Tempo klidné, věcné. Petra je hostitelka — energii dělá tím, že je sama uvolněná, ne že tlačí.

**Na co si dát pozor:** Nepoužívat slovo "masterclass" ani "hype". Neříkat, že je to nejlepší nástroj na světě. Klidná, věcná autenticita. Petra explicitně řekne, že **oba** lektoři budou u klávesnice — aby publikum nečekalo tag-team.

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
> "Petra vám do chatu pošle přesné prompty. Otevřete si Claude Code, kdekoli ho máte — v terminálu, v desktopové aplikaci, ve webu — zkopírujete si prompt té varianty, která vás nejvíc oslovila, a pošlete ho. Když se zaseknete, zeptejte se přímo Claude Code — společník odpoví. My jsme tu s vámi."

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

### Scénář: Zkuste si to sami #2 (57–65 minut)

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

### Scénář: číst, ne hádat (66–68 minut)

**Mluví:** Ondřej (ten moment vede on, Slava drží editor s CLAUDE.md připravený k úpravě)

Ten moment přijde hned poté, co Slava ukáže dva typy CLAUDE.md a vloží travel preferences. Před přechodem na Kiwi MCP se Ondřej vloží:

> **[Ondřej, 67:00]**
> "Než půjdeme dál — jeden moment, který stojí za to si zapamatovat víc než cokoli jiného z celého dnešního webináře."
>
> **[Pauza, podívat se do kamery]**
>
> "AI nástroje občas něco namixují. Něco si vymyslí. Ne ze zlé vůle — prostě proto, že čerpají z paměti modelu, která je zastaralá. ChatGPT to dělá pořád: ocituje neexistující článek, řekne vám zastaralou cenu, vymyslí si funkci, která neexistuje. Vy si toho ani nemusíte všimnout."
>
> **[Pauza]**
>
> "U Claude Code je tahle past přesně tak možná. Ale máte jednu obranu, kterou ChatGPT nemá."
>
> **[Důraz, k publiku]**
>
> "Pravidlo: **agent musí číst, ne hádat.** Než cokoli napíše, ať si nejdřív přečte zdroj. Vaše soubory, dokumentaci, web — cokoli, co je relevantní. A tohle pravidlo můžete Claude Code dát jednou větou v CLAUDE.md."
>
> **[Slava ukáže obrazovku s CLAUDE.md, do kterého přidává jednu sekci]**

```markdown
## Pravidlo: nejdřív číst, pak psát

Než cokoli upravíš nebo navrhneš, nejdřív si přečti relevantní existující
soubory. U knihoven a služeb si ověř aktuální dokumentaci přes web search.
Nikdy si nevymýšlej z paměti.
```

> **[Ondřej]**
> "Tahle jedna věta. Když si ji dáte do projektového nebo osobního CLAUDE.md, dramaticky snížíte počet halucinací. Není to zázrak — žádný AI nástroj nemá nulovou míru chyby — ale je to nejúčinnější jeden zásah, jaký můžete udělat. **Tohle je moment, kdy si o nástroji můžete říct: tomuhle se dá věřit.**"
>
> **[Pauza, přechod]**
>
> "Právě proto teďka uvidíte, jak agent tyhle travel preferences z CLAUDE.md vezme a kombinuje je s reálnými daty z vnějšího světa. Slavo — ukaž jim Kiwi."

**Délka:** ~90 vteřin. Tempo klidné, důraz na *"agent musí číst, ne hádat"*. Tahle věta by měla být zapamatovatelná.

**Co nedělat:** Nemluvit o "groundingu" jako o terminologii. Nemluvit o "RAG" nebo jiných technických pojmech. Princip je důležitý, ne label.

---

### Scénář: marketplace + companion reveal + skill creation (72–76:30 minut)

**Mluví:** Slava (marketplace + skill creation), Ondřej (companion reveal)

Tahle sekvence má tři části: marketplace prohlídka → companion reveal → živá tvorba vlastního skillu. Slovo *skill* už v Levelu 2 padlo — tady uzavíráme smyčku tím, že ukážeme, jak prostě soubor vypadá, a pak jedním promptem vytvoříme nový.

#### Část 1 — Marketplace (Slava, 72:00–74:00)

**Slava otevře `/plugin` uvnitř Claude Code:**

> **[Slava, 72:00]**
> "MCP demo za námi. Teď se podívejme, kde takové pluginy a rozšíření najdete. Sledujte."
>
> **[Napíše `/plugin`, otevře se panel]**
>
> "Discover záložka — tady je všechno. GitHub, Figma, Vercel, Notion, Slack. Někdo to napsal, otestoval a pověsil sem — vy nainstalujete jedním klikem."
>
> **[Scrolluje seznamem, max 30 sekund]**

Zmínit tři ekosystémy:
1. **Anthropic official** — vestavěný v `/plugin`
2. **compound-engineering** (Every Inc.) — plan → work → review loop
3. **Heart of Gold Toolkit** (Ondřej) — viděli jste v Level 2

#### Část 2 — Companion reveal (Ondřej, 74:00–75:00)

**Ondřej naváže** — v Levelu 2 už slovo *skill* padlo, tady ho uzavřeme. Ondřej otevře `.claude/skills/claude-code-guide/SKILL.md` v editoru a publikum vidí, že společník, kterého celou dobu používali, je obyčejný markdown.

> **[Ondřej, 74:00]**
> "A teď moment, na který jsem čekal. Společník, který vás vedl celé dopoledne — prompty pro 'Zkuste si to sami', odpovědi na instalační problémy, tipy v chatu. Tohle všechno je tenhle soubor."
>
> **[Ukazuje SKILL.md v editoru]**
>
> "Obyčejný markdown. Frontmatter s popisem, tělo s instrukcemi. Žádný kód, žádná konfigurace. Skilly jsou markdown — můžete si napsat vlastní, a za týden budete mít jeden pro svoji práci."

#### Část 3 — Živá tvorba skillu (Slava, 75:00–76:30)

> **[Slava, 75:00]**
> "A teďka — uděláme si vlastní. Jedním promptem."

Prompt (z clipboardu):
```
Vytvoř nový skill v .claude/skills/firemni-copywriting/SKILL.md.
Pravidla: profesionální tón, česky, krátké odstavce, vždy CTA na konci.
```

Agent vytvoří složku + SKILL.md (~30 sekund).

> **[Slava, po dokončení]**
> "Hotovo. Ověříme, jestli to funguje."

Ověřovací prompt:
```
Napiš krátký LinkedIn post o našem webináři.
```

> **[Slava, po výsledku]**
> "Vidíte? Profesionální tón, česky, krátké odstavce, CTA na konci. Skill funguje. Napíšete si vlastní na to, co děláte dvakrát, a máte ho napořád."

**Délka:** ~4.5 minuty celkem (2 min marketplace + 1 min reveal + 1.5 min skill creation).

**Co nedělat:** Nepředstírat překvapení u reveal — účastníci slovo *skill* slyší od Levelu 2. Důraz na moment, kdy Ondřej otevře SKILL.md v editoru a publikum vidí, jak prostá věc to je. A pak na moment, kdy Slava vytvoří nový skill za 30 sekund.

---

### Scénář závěru (88–90 minut)

**Mluví:** Petra (většinu), Slava vstoupí v jednom momentu

> **[Petra, 88:00]**
> "Poslední dvě minuty — co si odnést a co dělat zítra ráno."
>
> **[Petra, 86:15]**
> "Za prvé — konkrétní první krok. Zítra ráno otevřete Claude Code (v terminálu, v desktopové aplikaci, na webu — kde vám vyhovuje) a vezměte nějaký reálný úkol z vaší práce. Nečekejte na velký projekt. Vezměte to nejmenší, co vás napadne — e-mail, report, stránku o vašem týmu — a nechte Claude Code, ať to udělá. Nejhorší, co se může stát, je špatný výsledek. A i ten vás něco naučí."
>
> **[Petra, 86:30]**
> "Za druhé — než se na to vrhnete sami, otevřete si `/plugin` přímo v Claude Code a podívejte se, co je v marketplace. Možná je to, co potřebujete, už dávno hotové — někdo jiný napsal plugin pro GitHub, pro Notion, pro Vercel, pro Figmu. Jeden klik a máte to."
>
> **[Petra, 86:50]**
> "Za třetí — cheat sheet. Odkaz jsem posílala do chatu, ještě jednou ho tam teď pošlu. Je to průvodce vašimi prvními třiceti minutami s Claude Code. Od instalace, přes první projekt, až po tři další workflow. Napsali jsme ho tak, aby stál sám za sebe — nepotřebujete otevřený tenhle webinář."
>
> **[Petra, 87:15]**
> "A za čtvrté, to nejdůležitější — Circle komunita."
>
> **[Pauza, důraz]**
>
> "Součástí vašeho vstupu na tenhle webinář je členství v naší Circle komunitě. Odkaz posílám do chatu, a taky vám přijde e-mailem. V komunitě se můžete ptát, když něco nefunguje, sdílet, co jste postavili, a vidět, co dělají ostatní. Je to místo, kde se učení nezastaví tím, že zavřete Zoom. My jsme tam s vámi. Slava tam tráví čas každý týden."
>
> **[Slava, 87:45]**
> "Když tam sdílíte svůj první projekt, rád se na něj podívám a dám vám zpětnou vazbu. Nemusí to být dokonalé — naopak. První pokusy jsou nejlepší ukázka toho, jak agent pracuje s reálnou prací."
>
> **[Petra, 88:15]**
> "Nahrávka webináře vám přijde e-mailem do dvaceti čtyř hodin — takže když jste si něco nestihli zapsat, budete se k tomu moct vrátit."
>
> **[Petra, 88:45, zavírací myšlenka]**
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

Lineární tok: Petra → Slava → Ondřej → Slava → všichni → Petra.

| Minuta | Situace | Jak si předáváme slovo |
|--------|---------|------------------------|
| **~5:00** | Konec Petřina otevření → Slava (L0 + L1) | Petra: *"Slavo, Ondřeji — pojďte na to."* Slava se chytá klávesnice. |
| **~30:00** | Konec Levelu 1 → Ondřej (Try #1 + L2 + Try #2) | Slava: *"Ondřeji, teď je to na tobě."* Ondřej přebírá a vede až do minuty 65. |
| **~65:00** | Konec Try #2 → Slava (L3) | Ondřej: *"A teď poslední část. Slavo, ukaž jim, co je platforma."* |
| **~80:00** | Konec L3 → Q&A + závěr | Slava předá Petře. Q&A oba lektoři odpovídají, Petra moderuje. Petra uzavírá (88–90). |

### Co dělá ten druhý, když nevede

Když **vede Slava** (demo), Ondřej:
- Je vidět na obrazovce (grid layout, nebo malé okno vedle sdíleného screenu)
- Sleduje chat, čte otázky, ty jednoduché rovnou odepisuje v chatu
- Průběžně komentuje pro publikum: *"Tohle je moment, kterému většina lidí nevěří, dokud to neuvidí."*
- Reaguje emocionálně — smích, překvapení, údiv. Publikum kopíruje vaše reakce.
- Klade "otázky za publikum" Slavovi: *"Slavo, a kdyby se to spletlo — co by se stalo?"*

Když **vede Ondřej** (otevření, context momenty) nebo **Petra** (závěr), Slava:
- Je vidět na obrazovce, doplňuje technický detail, když je potřeba
- Sdílený screen může zůstat v klidové pozici (třeba prázdný `claude` prompt), aby publikum mělo kontext, kam se vrátíme

### Co nedělat

1. **Nepřekrývat se** — pokud mluví Slava, Ondřej počká, až dokončí větu
2. **Nemluvit dlouho v kuse** — nikdo by neměl mít souvislý monolog delší než tři minuty bez reakce toho druhého
3. **Nepoužívat formální přechody typu "a teď bych rád představil…"** — působí strojeně. Přirozenější je prostě se vložit.
4. **Nepředstírat překvapení** — pokud plánovaně mluvíte o skillu v Level 3, neříkejte *"Ach, právě mě napadlo…"*. Publikum to pozná.

### Fallback

Kdyby se při zkoušce ukázalo, že si nesedneme a co-teaching nefunguje, vraťme se k čistšímu rozdělení:

- **Petra:** otevření (0–5), Q&A moderace + závěr (80–90), moderace chatu po celou dobu
- **Slava:** Level 0 + Level 1 (5–30), Level 3 (65–80)
- **Ondřej:** Try #1 + Level 2 + Try #2 (30–65), companion reveal v L3 (74–75)

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
- **Level 1:** Dívejte se, jak agent přemýšlí — plánuje, **čte zdroje**, tvoří, opravuje. A ptá se, než udělá něco, co by mohlo vadit. *Číst, ne hádat — to je největší rozdíl mezi agentem a chatbotem.*
- **Level 2:** Claude&nbsp;Code je platforma, kterou si rozšiřujete sami. Ukazujeme dva workflow, které reálně používáme každý den, a&nbsp;poprvé vyslovujeme slovo *skill*&nbsp;— všechno ostatní v&nbsp;Levelu&nbsp;3 na&nbsp;něm staví.
- **Level 3:** S CLAUDE.md, MCP a skilly se z Claude Code stává platforma, kterou si rozšiřujete sami. **A s pravidlem *"číst, ne hádat"* se stává platformou, které se dá věřit.**

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
- Když Level 0 zabere víc času, nejsnáz se krátí skills&nbsp;& plugins bridge na&nbsp;konci Levelu&nbsp;2&nbsp;— jedno demo můžete o&nbsp;minutu zkrátit, bridge klidně na&nbsp;jednu větu
- Oba "Zkuste si to sami" jsou posvátné — nikdy je nezkracujte pod pět minut
- Level 3 můžete zkrátit o&nbsp;MCP demo, pokud nestíháte (marketplace + pohled dovnitř společníka nechte&nbsp;— to&nbsp;jsou klíčové momenty)
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
> 5. Můžete si naklonovat repozitář webináře, ať máte všechny materiály po ruce: `git clone https://github.com/aibilitycz/claude-code-90-webinar.git`
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
