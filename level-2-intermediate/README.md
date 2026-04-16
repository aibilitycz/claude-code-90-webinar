# Level 2: Skilly, pluginy a marketplaces

**Délka:** 19 minut
**Cíl:** Účastníci pochopí, že Claude Code je platforma, kterou si rozšiřují sami — a uvidí dvakrát tu samou smyčku. Úkol jednou vyřešíte rukama, podruhé už ho dělá skill za vás.

**Velká myšlenka:** Claude Code není aplikace s pevně danými funkcemi. Je to **platforma, kterou si rozšiřujete sami**. V Aibility tomu říkáme **OHIO princip** — *only handle it once*. Stará rada z papírové éry: dotkneš se papíru, vyřídíš ho a zpátky se k němu nevracíš. S Claude Code ji posouváme dál — vyřeš to napoprvé, **a pak z toho udělej skill**, ať to příště nemusíš dělat vůbec. To už za tebe udělá ten skill.

Simon Willison, autor Djanga a jeden z nejstřízlivějších hlasů v AI, k tomu napsal jednu větu: *„Claude Skills jsou možná větší věc než MCP."* Level 2 je o tom, proč to není přehnané.

## Struktura (38–57 min)

| Čas | Blok | Obsah |
|-----|------|-------|
| 38–41 | **Přechod ze Zkuste si to sami #1** | Uvedení teze: vyřeš to jednou, pak z toho udělej skill |
| 41–48 | **Demo A — Bobo content flow** | Zralý konec smyčky: denní obsahová linka složená ze skillů |
| 48–53 | **Demo B — Jak vznikl LinkedIn carousel skill** | Začátek smyčky: jednorázová úloha se proměnila ve skill |
| 53–57 | **Prohlídka marketplaces** | `/plugin` Discover a čtyři místa, odkud skilly brát |

Celý Level 2 vede **Ondřej** sólo.

## 38–41 min · Přechod ze Zkuste si to sami #1

Tři věty, které musí padnout. Žádný scénář — kotvy.

1. *„Právě jste si něco postavili. Kdybyste tu samou věc chtěli udělat příští týden, opsali byste prompt. Za měsíc potřetí. A přesně v tomhle momentě se z promptu má stát **skill**."*
2. *„V Aibility tomu říkáme OHIO princip — *only handle it once*. Stará rada z papírové éry: dotkneš se papíru, vyřídíš ho a zpátky se k němu nevracíš. S Claude Code to posouváme dál: vyřeš to napoprvé, pak z toho udělej skill, a příště to nedělej. Ten skill to udělá za tebe."*
3. *„Simon Willison, autor Djanga a jeden z nejstřízlivějších hlasů v AI, k tomu nedávno napsal jednu větu: že Claude Skills jsou možná větší věc než MCP. Příštích deset minut ukážu proč. Na dvou příkladech — jeden je zralý a běží mi každý den; druhý vznikl z jediné úlohy před pár týdny."*

## 41–48 min · Demo A — Bobo content flow

Reálný osobní postup, na kterém Ondřej dělá svůj blog a LinkedIn. Každou noc kolem půl třetí ráno spustí cron Claude Code, ten projde newslettery z e-mailu, RSS, web a poznámky zachycené přes den, sestaví denní brief s úhly pohledu, návrhy LinkedIn postů a osnovu blogového článku, uloží to do Gitu a jde dál spát.

Pointa, která musí zaznít nahlas: **tohle není jeden velký prompt. Jsou to skilly.** Pipeline, capture, write-post — každý z nich je krátký markdown soubor. Ondřej je nepsal najednou; psal je postupně, vždycky ve chvíli, kdy zjistil, že tu samou věc dělá pořád dokola.

**Co ukázat:**
- Dnešní brief jako konkrétní artefakt. Pipeline naživo nespouštět — trvá zhruba minutu a půl, na kameře je to mrtvo.
- Projít obsah briefu: kolik signálů to přečetlo, kolik úhlů pohledu nabídlo, kolik návrhů LinkedIn postů. Čísla dělají věc reálnou.
- Silný moment: pipeline vytáhla téma, které si Ondřej zapsal už dřív v týdnu. *„Systém čte moje poznámky a vrací mi je s kontextem."*
- Otevřít složku se skilly a ukázat, jak krátké jsou — `pipeline/SKILL.md`, `capture/SKILL.md`, `write-post/SKILL.md`. Pár desítek řádků markdownu. Žádná magie.
- Krátká poznámka na konec: všechno je v open-source sadě **Heart of Gold Toolkit** na GitHubu, instalace přes `/plugin marketplace add ondrej-svec/heart-of-gold-toolkit`. Odkaz pošleme po webináři.

**Příprava před webinářem (Ondřej):**
- Dnešní brief (`content/daily/YYYY-MM-DD.md`) otevřený v editoru.
- `content/captures/` zavřené. Jsou to osobní poznámky, na sdílené obrazovce nemají co dělat.
- Záloha, kdyby dnešní brief chyběl: otevřít `SKILL.md` jednoho ze skillů a projít ho. Ukáže to, jak krátké a čitelné to ve skutečnosti je.

## 48–53 min · Demo B — Jak vznikl LinkedIn carousel skill

Druhý příklad je úplně jiného druhu: **skill, který vznikl z jediné úlohy.** Ondřej jednou potřeboval udělat LinkedIn carousel ze série screenshotů. Vyřešil to s Claude Code jako obyčejný prompt. Když to vyšlo, došlo mu, že tuhle úlohu bude dělat pořád — a převedl ji na skill. Dneska ho spouští jednou větou.

**Druhá klíčová věta levelu, musí zaznít nahlas:** *„Potřeboval jsem to jednou. Když to vyšlo, řekl jsem Claude Code: tohle se mi líbí, udělej z toho skill. A on ho napsal sám."*

**Co ukázat:**
- Otevřít `SKILL.md` carousel skillu v `heart-of-gold-toolkit` — ukázat hlavičku (`name`, `description`, spouštěcí fráze) a tělo. Markdown. Nic víc.
- Vyvolat skill jednou větou: *„Tady máš tři screenshoty, udělej z nich LinkedIn carousel jako PDF."* Claude Code skill rozpozná sám a spustí ho.
- Ukázat výstup — hotové PDF, připravené k publikování.
- Zdůraznit pointu, kterou si publikum musí odnést: **skill nemusíte psát rukama.** Claude Code ho napíše z toho, co jste právě udělali. Stačí říct.

**Příprava před webinářem (Ondřej):**
- `SKILL.md` carousel skillu otevřený v editoru jako záloha.
- Tři připravené screenshoty ve složce, ať živé spuštění trvá pod 30 vteřin.
- Záloha, kdyby generace selhala: otevřít poslední vygenerovaný carousel a ukázat ho jako artefakt.

## 53–57 min · Prohlídka marketplaces

Most do Zkuste si to sami #2. Krátká prohlídka čtyř míst, odkud se skilly a pluginy berou.

**Co ukázat:**
- `/plugin` → Discover v čisté session. Pár vteřin scroll, ať publikum vidí, že je to reálná aplikace s reálnými položkami.
- Čtyři ekosystémy, každý jednou větou:
  1. **Anthropicův oficiální marketplace** — zabudovaný přímo v `/plugin`. Pluginy ověřené Anthropicem.
  2. **compound-engineering** od Every Inc. — smyčka *plan → work → review → **compound***. Kieran Klaassen z Every ji pojmenoval: poslední krok znamená *„zachyť poznatek jako skill, ať příští session začíná chytřejší."* Je to **přesně to, čemu my říkáme OHIO princip**, jen s jiným jménem. Plugin má přes **10 000 hvězd na GitHubu** a používají ho lidi v Googlu i v Amazonu.
  3. **Heart of Gold Toolkit** — to, co jste právě viděli. Open source, instalace přes `/plugin marketplace add ondrej-svec/heart-of-gold-toolkit`.
  4. **awesome-agent-skills** od VoltAgent — **přes tisíc kurátovaných skillů** od reálných týmů: Anthropic, Google, Vercel, Stripe, Cloudflare, Figma, Sentry. Není to automaticky nagenerovaný balast, ale věci, které firmy doopravdy používají.

**Pointa před předáním Petře:**
- *„Nemusíte si všechno psát sami. A ještě jedna věc, která stojí za to říct nahlas: SKILL.md je otevřený standard. Funguje i v Codex CLI, v Cursoru, v Gemini CLI. Neinvestujete do Anthropicu, investujete do přenositelného formátu — a v tom je rozdíl."*
- **Věta na závěr** (jedna, kterou si publikum odnese): *„Každý úkol, který jednou vyřešíte, vás příště udělá rychlejší — protože se z něj stal skill. Tomuhle se neříká produktivita. Tomuhle se říká složené úročení vaší vlastní práce."*
- *„O CLAUDE.md, MCP a pluginech bude víc v Levelu 3 za chvíli."* Předat Petře.

**Časový rozpočet:** 19 minut sólo (3 + 7 + 5 + 4). Pokud Demo A nebo B přetečou, zkrátit prohlídku marketplaces — stačí jmenovat čtyři ekosystémy a ukázat jeden screen `/plugin` Discover. Tvrdě timeboxovat.

## Checkpoint

Po Levelu 2 by účastníci měli chápat:
- [ ] Že Claude Code je **platforma, kterou si rozšiřují sami** — ne aplikace s pevně danými funkcemi.
- [ ] OHIO princip v jeho rozšířené verzi: vyřeš to jednou, pak z toho udělej skill, příště to nedělej vůbec.
- [ ] Co je **skill** — krátký markdown soubor s hlavičkou a tělem, který říká Claude Code, jak něco dělat.
- [ ] Že existují **čtyři místa**, odkud skilly a pluginy brát: Anthropic, Every, Heart of Gold, awesome-agent-skills.
- [ ] Že nemusí skill psát rukama — Claude Code ho napíše z toho, co jste právě udělali.

## Odkazy do follow-up e-mailu

**Marketplaces a sady z dema:**
- **Heart of Gold Toolkit** (Ondřej, Demo A i B) — https://github.com/ondrej-svec/heart-of-gold-toolkit
- **compound-engineering** (Every Inc., Kieran Klaassen) — https://github.com/EveryInc/compound-engineering
- **awesome-agent-skills** (VoltAgent, přes 1000 kurátovaných skillů) — https://github.com/VoltAgent/awesome-agent-skills
- **Anthropicův marketplace** — zabudovaný v `/plugin` Discover, samostatnou URL nemá

**Oficiální dokumentace:**
- **Anthropic — Agent Skills overview** — https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview
- **Claude Code — Plugin marketplaces** — https://code.claude.com/docs/en/plugin-marketplaces
- **Claude Code — Skills** — https://docs.claude.com/en/docs/claude-code/skills
- **Claude Code — Plugins** — https://docs.claude.com/en/docs/claude-code/plugins

**Doporučené čtení (proč skilly stojí za pozornost):**
- **Simon Willison — *Claude Skills are awesome, maybe a bigger deal than MCP*** — https://simonw.substack.com/p/claude-skills-are-awesome-maybe-a
- **Every — Compound Engineering: The Definitive Guide** — https://every.to/source-code/compound-engineering-the-definitive-guide
- **Every — How Every Codes With Agents** — https://every.to/chain-of-thought/compound-engineering-how-every-codes-with-agents
- **Simon Willison — Claude Skills repo (kopie /mnt/skills)** — https://github.com/simonw/claude-skills

## Co Level 2 záměrně **neukazuje**

- Webovou aplikaci od nuly, zpracování dokumentů ani souborovou automatizaci jako připravené demo. Tohle všechno Claude Code zvládá — jenže v Levelu 2 nám jde o **skilly jako princip**, ne o katalog případů užití. Katalog je v `cheat-sheet/claude-code-quickstart-cs.md`.
- CLAUDE.md a MCP — to je Level 3.
- Návod, jak skill napsat rukama. Pointa Demo B je opačná: **nechte Claude Code, ať skill napíše za vás.**
