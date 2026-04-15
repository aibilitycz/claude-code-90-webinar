# Level 2: Skilly, pluginy a marketplace

**Délka:** 19 minut
**Cíl:** Účastníci pochopí, že Claude Code je platforma, kterou si rozšiřují sami — a uvidí dvakrát stejnou smyčku: *"udělej to jednou, pak z toho udělej skill."*

**Velká myšlenka:** Claude Code není aplikace s pevnými funkcemi. Je to **platforma, kterou si rozšiřujete sami**. V Aibility tomu říkáme **OHIO princip** — *only handle it once*. S Claude Code ho posouváme o krok dál: *handle it once, pak z toho udělej skill, a pak ho nebudeš handlovat vůbec.*

Simon Willison — jeden z nejstřízlivějších hlasů v AI prostoru — napsal, že *"Claude Skills jsou možná větší věc než MCP."* Level 2 je ukázka proč.

## Struktura (38–57 min)

| Čas | Blok | Obsah |
|-----|------|-------|
| 38–41 | **Most z Try Momentu #1** | Uvedení teze "udělej to jednou, pak z toho udělej skill" |
| 41–48 | **Demo A — Bobo content flow** | Zralý příklad: denní obsahová pipeline jako sada skillů |
| 48–53 | **Demo B — LinkedIn carousel skill** | Origin story: jednorázová potřeba → skill, který mi to teď dělá vždycky |
| 53–57 | **Marketplace tour** | `/plugin` Discover + čtyři ekosystémy |

Celý Level 2 vede **Ondřej** sólo.

## 38–41 min · Most z Try Momentu #1

Krátký přechod z Try Momentu #1 do velké myšlenky Levelu 2.

**Co říct (kotvy, ne scénář):**
- *"Právě jste něco postavili. Kdybyste to chtěli udělat znovu příští týden, opsali byste ten prompt. A za měsíc potřetí. Tohle je moment, kdy se z promptu stává **skill**."*
- *"V Aibility tomu říkáme OHIO princip — only handle it once. Starý princip z papírového světa: když se něčeho dotkneš, vyřeš to do konce, neodkládej. S Claude Code ho posouváme dál: handle it once, **pak z toho udělej skill**, a příště to nehandluješ vůbec."*
- *"Skill je markdown soubor, který říká Claude Code: 'tohle umíš, tohle dělej takhle.' Jakmile ho máte, nemusíte pokaždé vysvětlovat znovu — Claude Code ho sám načte, když ho potřebuje."*
- *"Simon Willison, autor Djanga a jeden z nejstřízlivějších hlasů v AI, napsal, že Claude Skills jsou možná větší věc než MCP. V dalších deseti minutách vám ukážu proč — přes dva příklady. První je zralý, běží mi každý den. Druhý vznikl z jedné jediné úlohy před pár týdny."*

## 41–48 min · Demo A — Bobo content flow

Reálný osobní workflow, na kterém Ondřej běží svůj blog a LinkedIn. Každou noc kolem 2:30 ráno Claude Code na cronu stáhne signály z RSS, webu a zachycených ranních/večerních myšlenek, vygeneruje denní brief s úhly pohledu, varianty LinkedIn postů a outline blogu, commitne do Gitu a jde spát.

Pointa: **tohle není jeden velký prompt. Jsou to skilly.** Pipeline, capture, write-post — každý z nich je markdown soubor, který Ondřej napsal sám, když si všiml, že tu samou věc dělá pořád dokola.

**Co ukázat:**
- Dnešní vygenerovaný brief jako konkrétní artefakt (ne spouštět pipeline naživo — je pomalá)
- Obsah briefu: počet signálů, úhly, LinkedIn drafty — čísla dělají věc reálnou
- Emocionální moment: pipeline našla téma, které si Ondřej sám dřív v týdnu zachytil → *"systém čte moje poznámky a vrací mi je s kontextem"*
- Otevřít adresář se skilly a ukázat, jak krátké jsou — `pipeline/SKILL.md`, `capture/SKILL.md`, `write-post/SKILL.md`. Pár desítek řádků markdownu. Žádná magie.
- Plug: všechno je v open-source toolkitu **Heart of Gold Toolkit** na GitHubu (`github.com/ondrej-svec/heart-of-gold-toolkit`), instalovatelné přes `/plugin marketplace add ondrej-svec/heart-of-gold-toolkit`

**Pre-webinar příprava:**
- Dnešní brief (`content/daily/YYYY-MM-DD.md`) otevřený v editoru
- `content/captures/` **neotevřené** na sdílené obrazovce (osobní reflexe)
- Fallback, když dnešní brief chybí: projít `SKILL.md` jednoho ze skillů

## 48–53 min · Demo B — LinkedIn carousel skill (origin story)

Druhý příklad je úplně jiný žánr: **skill, který vznikl z jediné úlohy.** Ondřej potřeboval jednou udělat LinkedIn carousel ze screenshotů, jednou to vyřešil s Claude Code, pak si uvědomil, že to bude chtít dělat pořád — a převedl to na skill. Teď ho vyvolá jednou větou.

**Co ukázat:**
- Otevřít `SKILL.md` carousel skillu v `heart-of-gold-toolkit` — ukázat frontmatter (`name`, `description`, trigger fráze) a tělo. Je to markdown. Nic víc.
- Vyvolat skill jednou větou: *"Tady máš tři screenshoty, udělej z nich LinkedIn carousel PDF."* Claude Code skill sám rozpozná a spustí.
- Ukázat výstup — hotové PDF, připravené k publikování.
- Origin story: *"Potřeboval jsem to jednou. Řešil jsem to v Claude Code jako obyčejný prompt. Když to fungovalo, řekl jsem Claude Code: ‚tohle je hezký, udělej z toho skill.' A udělal ho sám."* ← **tohle je druhá klíčová věta levelu**, po "udělej to jednou, pak z toho udělej skill".
- Zdůraznit: **skill nemusíte psát ručně.** Claude Code umí napsat skill z toho, co jste právě udělali. Stačí říct.

**Pre-webinar příprava:**
- `SKILL.md` carousel skillu otevřený v editoru jako fallback
- Tři připravené screenshoty v složce, aby živé vyvolání trvalo < 30 vteřin
- Fallback, když generace selže: otevřít poslední carousel PDF a ukázat ho jako artefakt

## 53–57 min · Marketplace tour

Most do Try Momentu #2. Krátká prohlídka čtyř ekosystémů, kde se skilly a pluginy berou.

**Co ukázat:**
- `/plugin` → Discover v čerstvé session. Pár vteřin scroll, ať publikum vidí, že to je reálná aplikace s reálnými položkami.
- Čtyři ekosystémy, které stojí za pozornost:
  1. **Anthropicův oficiální marketplace** — zabudovaný v `/plugin`. Oficiální pluginy, ověřené Anthropicem.
  2. **compound-engineering** od Every Inc. — smyčka *plan → work → review → **compound***. Kieran Klaassen z Every to pojmenoval: poslední krok, *compound*, znamená „zachyť lekci jako skill, ať příští session začíná chytřejší". Je to **přesně OHIO-to-skill move**, jen s jiným jménem. Plugin má přes **10 000 GitHub stars** a používají ho lidé z Google a Amazonu. Instalace: `/plugin marketplace add EveryInc/compound-engineering`.
  3. **Heart of Gold Toolkit** od Ondřeje — to, co jste právě viděli. Open source, instalace přes `/plugin marketplace add ondrej-svec/heart-of-gold-toolkit`.
  4. **awesome-agent-skills** od VoltAgent — přes **1000 kurátovaných skillů** od reálných týmů: Anthropic, Google, Vercel, Stripe, Cloudflare, Figma, Sentry. Ne AI-generated balast, ale věci, co firmy skutečně používají.

**Pointa před předáním na Try Moment #2:**
- *"Nemusíte si všechno psát sami. A ještě jedna věc — SKILL.md je otevřený standard, funguje i v Codex CLI, Cursoru, Gemini CLI. Neinvestujete do Anthropicu, investujete do přenositelného formátu."*
- **Quotable close:** *"Každá úloha, kterou vyřešíte, vás příště udělá rychlejší — protože se z ní stala skill. Tohle není produktivita. Tohle je compound interest na vaší vlastní práci."*
- *"Víc o CLAUDE.md, MCP a pluginech v Levelu 3 za chvíli."*
- Předat Petře.

**Časový rozpočet:** 19 minut sólo (3 + 7 + 5 + 4). Pokud Demo A nebo B přetečou, zkrátit marketplace tour — stačí jmenovat ekosystémy a ukázat jeden screen `/plugin` Discover.

## Checkpoint

Po Level 2 by účastníci měli chápat:
- [ ] Že Claude Code je **platforma, kterou si rozšiřují sami** — ne aplikace s pevnými funkcemi
- [ ] Frázi *"udělej to jednou, pak z toho udělej skill"* — a vědět, že skill může napsat Claude Code sám
- [ ] Slovo *skill* — markdown soubor s frontmatter a tělem, rozšiřuje, co Claude Code umí
- [ ] Že existují **čtyři marketplace**, odkud se skilly a pluginy berou: Anthropic, Every, Heart of Gold, awesome-agent-skills
- [ ] Že mají co pustit v Try Momentu #2 — a jednu z věcí, kterou zkusí, může být převod promptu na skill

## Odkazy, které pošleme účastníkům po webináři

**Marketplace & toolkity z dema:**
- **Heart of Gold Toolkit** (Ondřej, Demo A + B) — https://github.com/ondrej-svec/heart-of-gold-toolkit
- **compound-engineering** (Every Inc., Kieran Klaassen) — https://github.com/EveryInc/compound-engineering
- **awesome-agent-skills** (VoltAgent, 1000+ kurátovaných skillů) — https://github.com/VoltAgent/awesome-agent-skills
- **Anthropic marketplace** — zabudovaný v `/plugin` Discover, nemá samostatnou URL

**Oficiální dokumentace:**
- **Anthropic — Agent Skills overview** — https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview
- **Claude Code — Plugin marketplaces** — https://code.claude.com/docs/en/plugin-marketplaces
- **Claude Code — Skills docs** — https://docs.claude.com/en/docs/claude-code/skills
- **Claude Code — Plugins docs** — https://docs.claude.com/en/docs/claude-code/plugins

**Doporučené čtení (proč vůbec skilly):**
- **Simon Willison — *Claude Skills are awesome, maybe a bigger deal than MCP*** — https://simonw.substack.com/p/claude-skills-are-awesome-maybe-a
- **Every — Compound Engineering: The Definitive Guide** — https://every.to/source-code/compound-engineering-the-definitive-guide
- **Every — How Every Codes With Agents** — https://every.to/chain-of-thought/compound-engineering-how-every-codes-with-agents
- **Simon Willison — Claude Skills repo (kopie /mnt/skills)** — https://github.com/simonw/claude-skills

## Co Level 2 záměrně **nedělá**

- Neukazuje webovou aplikaci od nuly, dokument processing ani souborovou automatizaci jako canned demo. Všechno tohle Claude Code zvládá — ale v Levelu 2 jde o **skilly jako princip**, ne o katalog use-casů. Use-casy jsou v `cheat-sheet/claude-code-quickstart-cs.md`.
- Neřeší CLAUDE.md ani MCP — to je Level 3.
- Neučí psát skill ručně. Pointa Demo B je opačná: **nechte Claude Code, ať skill napíše za vás.**
