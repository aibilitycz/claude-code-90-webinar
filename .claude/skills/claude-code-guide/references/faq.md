# Časté otázky

Odpovědi na to, na co se účastníci webináře ptají nejčastěji. Když se vás někdo zeptá, najděte relevantní sekci a odpovězte stručně. **Nekopírujte** celý soubor do chatu — vytáhněte jen to, co se ptal.

## Cena a plány

### Kolik Claude Code stojí?

Claude Code je součástí předplatného Claude od Anthropic. Jsou tři hlavní plány:

| Plán | Cena | Co za to máte |
|------|------|---------------|
| **Claude Pro** | $20/měsíc | Přístup k Claude Code, základní limity, všechny modely |
| **Claude Max 5×** | $100/měsíc | Pětinásobné limity — pro pravidelné používání |
| **Claude Max 20×** | $200/měsíc | Dvacetinásobná kapacita — pro každodenní intenzivní práci |

Alternativa: platit přes API credits (účtuje se za spotřebu tokenů, žádné měsíční předplatné). Hodí se pokročilým, kteří chtějí mít náklady pod plnou kontrolou.

**Doporučení:** Začněte s Claude Pro za $20. Je to minimum pro Claude Code a po pár týdnech zjistíte, jak moc ho opravdu používáte. Pak se můžete posunout výš.

### Je nějaká zkušební verze zdarma?

Ano — Claude Pro má při první registraci sedmidenní trial. Stačí si založit účet na [claude.com](https://claude.com) a zvolit Pro plán.

### Platí se za každý prompt zvlášť?

Ne. Předplatné pokrývá "rozumné používání" v rámci limitů plánu. Limity jsou definované jako počet tokenů za pětihodinové okno a resetují se samy. Za překročení vám nikdy nepřijde účet — buď pracujete, nebo čekáte, až se okno obnoví.

Jen u API credits se účtuje doopravdy podle spotřeby.

### Co když vyčerpám limit?

Claude Code vám to řekne a musíte počkat do resetu (maximálně pět hodin), nebo se přepnout na vyšší plán. Nikdy vám za to nepřijde účet — Anthropic prostě zastaví, dokud se limit neobnoví.

---

## Bezpečnost a data

### Co se stane s mým kódem a daty, když používám Claude Code?

Anthropic u placených plánů **vaše data nepoužívá k tréninku modelů**. Tohle je důležitý rozdíl proti některým free verzím jiných AI nástrojů. Vaše data jdou k Anthropicu jen proto, aby Claude Code mohl splnit váš požadavek, a pak se zahodí.

### Můžu na Claude Code pustit citlivý projekt?

Záleží na tom, jak moc je citlivý:

- **Běžný pracovní kód a texty:** Ano, žádný problém
- **Osobní údaje klientů, zdravotní data, finanční údaje:** Jen když máte plán, který to pokrývá. Enterprise nabízí HIPAA compliance, audit logy a další záruky
- **Hesla, API klíče, tajná nastavení:** **Nikdy** je nevkládejte přímo do promptů — Claude Code by je mohl omylem zmínit v logu

**Jednoduché pravidlo:** Když byste to klidně poslali kolegovi mailem, můžete to dát i Claude Code. Když ne, nedávejte.

### Co když Claude Code něco smaže nebo rozbije?

Claude Code se **před každou riskantní akcí ptá na povolení** — mazání souborů, instalace balíčků, spouštění příkazů. Vy rozhodujete. Nic se neděje za vašimi zády.

Nejlepší zlozvyk pro začátečníky: pracujte ve složkách, které jsou v gitu nebo mají zálohu. Když se něco rozbije, `git checkout .` vrátí všechno zpátky.

### Vidí Anthropic mé soubory?

Claude Code posílá obsah souborů na Anthropic API jen v takovém rozsahu, jaký potřebuje k vašemu zadání. Neposílá celý disk a neposílá soubory, o které ho nepožádáte. V logu zůstává jen to, co bylo součástí konverzace.

---

## Instalace

### Jak Claude Code nainstaluju? / Kde ho mám otevřít?

**Nejdřív si vyberte, kde chcete Claude Code mít.** Nemusíte přes terminál — to je jen jedna z šesti cest. Vyberte podle toho, co vám sedí:

| Kde | Pro koho | Jak na to |
|-----|----------|-----------|
| **🖥️ Desktopová aplikace** (Mac/Windows) | **Většina lidí** — nejjednodušší start, vypadá jako normální aplikace | Stáhněte z [claude.com/download](https://claude.com/download), nainstalujte, přihlaste se. Hotovo. |
| **🌐 Web** ([claude.ai/code](https://claude.ai/code)) | Když nechcete nic instalovat, nebo jste na cizím počítači | Otevřete v prohlížeči, přihlaste se. Žádná instalace. |
| **📱 iOS aplikace** | Na cestách, na telefonu nebo iPadu | Stáhněte z App Store ("Claude"), přihlaste se. |
| **🧩 VS Code / JetBrains** | Vývojáři, kteří už v editoru žijí | Nainstalujte rozšíření z marketplace daného editoru. |
| **⌨️ Terminál (CLI)** | Power users, devops, nejlépe vidíte, co agent dělá | Viz níže — `npm install -g @anthropic-ai/claude-code` nebo nativní instalátor. |

**Důležité:** Ať si vyberete cokoli, je to **stejný Claude Code**. Stejný účet, stejná paměť, stejné CLAUDE.md, stejné MCP servery, stejné skilly a pluginy. Můžete začít ráno na desktopu a večer pokračovat na webu — všechno tam najdete.

**Pro webinář:** My ho ukazujeme v terminálu, protože tam nejlíp vidíte, jak agent pracuje krok po kroku. Ale **vy nemusíte být v terminálu**, abyste mohli sledovat — desktop nebo web fungují stejně dobře. Aktivace společníka (našeho skillu) je v desktopu/webu chvilku jiná, návod je v `README.md` repozitáře.

### Instalace přes terminál (CLI)

Když chcete být v terminálu — buď proto, že vám to sedí, nebo protože my ho během webináře ukazujeme tam — máte dvě cesty:

**1) Nativní instalátor** (doporučeno, nepotřebuje Node.js)

```bash
# macOS / Linux
curl -fsSL https://claude.ai/install.sh | bash

# Windows (PowerShell)
irm https://claude.ai/install.ps1 | iex
```

**2) Přes npm** (když už Node.js máte)

```bash
npm install -g @anthropic-ai/claude-code
```

Pak spusťte `claude` v jakékoliv složce. Při prvním spuštění se otevře prohlížeč k přihlášení.

### `node --version` mi hlásí "command not found"

Node.js ještě nemáte nainstalovaný. Stáhněte ho z [nodejs.org](https://nodejs.org) — zvolte LTS verzi (18 nebo novější). Po instalaci **zavřete terminál a otevřete ho znovu**, jinak stará session neuvidí nový příkaz. Pak zkuste `node --version` znovu.

### `npm install -g @anthropic-ai/claude-code` hlásí permission error

Na Macu a Linuxu **nepoužívejte `sudo`** — způsobuje jiné problémy, které se špatně ladí. Místo toho buď použijte [nvm](https://github.com/nvm-sh/nvm) (správce verzí Node.js), nebo nativní instalátor:

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

Ten nevyžaduje npm vůbec.

### `claude` hlásí "command not found" hned po instalaci

Pravděpodobně proběhla instalace v pořádku, ale binárka Claude Code není na PATH. Zkuste:

1. Zavřete a znovu otevřete terminál (nejčastější řešení)
2. Ověřte, kde Claude Code vlastně je: `which claude` (macOS/Linux) nebo `where claude` (Windows)
3. Když to nepomůže, zkuste nativní instalátor z [claude.com](https://claude.com) místo npm

### Jak se přihlásím po prvním spuštění?

Při prvním spuštění Claude Code otevře prohlížeč se stránkou Anthropic. Tam se přihlásíte (nebo zaregistrujete), potvrdíte autorizaci, a prohlížeč se přepne na "hotovo". Terminál mezitím sám ví, že jste prošli, a pokračuje.

### Na Windows mi hlásí chybu s WSL

Na Windows je doporučené rozjet Claude Code pod **WSL2** (Windows Subsystem for Linux). Otevřete si PowerShell jako správce a spusťte:

```powershell
wsl --install
```

Pak počítač restartujte a Claude Code spouštějte uvnitř WSL.

Alternativa pro ty, kdo WSL nechtějí: nativní Windows instalátor.

```powershell
irm https://claude.ai/install.ps1 | iex
```

Vyžaduje Git for Windows.

---

## Používání

### Claude Code jen "přemýšlí" a nic nedělá

Claude Code si může nad složitějším úkolem přemýšlet třicet vteřin až minutu. Nad komplikovanějšími projekty i delší. Když to ale trvá víc než dvě minuty bez jakéhokoli výstupu:

1. Zkontrolujte internet
2. Mrkněte na status Anthropic: [status.anthropic.com](https://status.anthropic.com)
3. Pokud všechno vypadá v pořádku, stiskněte `Esc` (přeruší to aktuální akci) a zkuste prompt znovu

### Agent udělal něco jiného, než jsem chtěl/a

To je úplně normální. Přesnost se nedosahuje perfektním prvním promptem, ale iterací. Řekněte Claude Code, co byste chtěli místo toho:

```
Ne tohle — místo toho zkus [co chcete].
```

Claude Code si pamatuje kontext, takže si nemusíte znovu vysvětlovat od začátku.

### Jak Claude Code opustím?

Napište `/exit` nebo stiskněte `Ctrl+D`. Klávesa `Esc` jen **přeruší** aktuální akci agenta — neukončí celé Claude Code.

### Co dělá `/clear`?

Vymaže historii aktuální konverzace. Hodí se, když začínáte nový úkol a nechcete, aby starý kontext ovlivňoval výsledek.

### Co dělá `/compact`?

Zkomprimuje historii dlouhé konverzace, aby se vešla do kontextového okna. Hodí se, když jste v delší session a máte pocit, že Claude Code začíná "zapomínat" staré věci.

### Můžu vrátit změny, které agent udělal?

V git repozitáři ano: `git checkout .` vrátí všechny neuložené změny. `git reset --hard HEAD` vrátí i commity — ale tohle používejte opatrně, o poslední commity byste přišli.

Když nejste v gitu, agent obvykle má zálohu v `/tmp`, ale není to stoprocentní jistota. **Nejlepší pravidlo:** pracujte vždy v git repozitáři nebo alespoň se zálohou.

---

## Modely — který zvolit?

### Sonnet, Opus, Haiku — který použít?

| Model | Kdy se hodí |
|-------|-------------|
| **Haiku** | Velmi jednoduché věci — rychlé přečtení souboru, drobné úpravy, vyhledávání |
| **Sonnet** | 90 % běžné práce — rychlý, dost chytrý, levnější |
| **Opus** | Komplikované úkoly, velké refactoring, když Sonnet přestává stíhat |

**Výchozí model je Sonnet.** Pro většinu účastníků webináře bude úplně stačit. Když vám nestačí, přepnete se.

### Jak se přepne model?

V Claude Code napíšete `/model` a vyberete si.

---

## Spolehlivost a halucinace

### Jak Claude Code přimět, aby si nic nevymýšlel?

Tohle je nejdůležitější otázka, kterou si můžete položit. Princip je stejný u všech AI nástrojů: agent musí čerpat z **reálných zdrojů**, ne z paměti modelu. Když agent píše z paměti, halucinace jsou jen otázkou času.

Tři kroky, jak na to:

**1. Nechte ho číst soubory.** Claude Code to dělá automaticky — když mu zadáte úkol ve vašem projektu, sám si vyhledá relevantní soubory, otevře je a teprve potom začne psát. Vy jen pozorujete, jestli to dělá. V terminálu uvidíte hlášku jako *"Reading X.md"* nebo *"Looking at Y"* — to je dobré znamení.

**2. Nainstalujte si web search MCP.** Když se ptáte na něco aktuálního — cenu produktu, verzi knihovny, co se právě děje ve vašem oboru — bez webového MCP serveru agent odpoví ze své zastaralé paměti. S MCP si to ověří v reálném čase. Instalace je dvě minuty: napište `/plugin` v Claude Code, najděte web search MCP, nainstalujte.

**3. Napište si pravidlo do CLAUDE.md.** Jedna věta, kterou si tam vložíte:

```markdown
## Pravidlo: nejdřív číst, pak psát

Než cokoli upravíš nebo navrhneš, nejdřív si přečti relevantní existující
soubory. U knihoven a služeb si ověř aktuální dokumentaci přes web search.
Nikdy si nevymýšlej z paměti.
```

S touhle větou v projektovém nebo osobním (`~/.claude/CLAUDE.md`) souboru se Claude Code stává dramaticky spolehlivějším.

### Znamená to, že Claude Code nikdy nehalucinuje?

Ne. Žádný AI nástroj nemá nulovou míru chyby. Tahle tři pravidla míru chyb dramaticky sníží, ale výstup si vždycky kontrolujte. *Číst před psaním* je princip pro agenta. *Kontrolovat po dokončení* je princip pro vás.

### Jak poznám, že mě Claude Code "obelhal"?

Nejčastější známky halucinace:
- Cituje konkrétní článek nebo studii — **ověřte si, že existuje**
- Uvádí konkrétní číslo, datum nebo cenu — **ověřte si, že je aktuální**
- Píše kód, který volá funkci nějaké knihovny — **ověřte si, že ta funkce v té verzi knihovny existuje**
- Tvrdí, že "X dělá Y" o nějakém produktu — **ověřte si v dokumentaci tohoto produktu**

Když si nejste jistí, požádejte Claude Code přímo: *"Ověř si tohle přes web search a řekni mi, jestli to pořád platí."* Pokud má web search MCP, udělá to a buď potvrdí, nebo opraví.

---

## Co Claude Code umí, co neumí, a kdy ho nepoužívat

### Co Claude Code v základu nedělá

Tohle jsou věci, které Claude Code **nativně** (bez rozšíření) nedělá:

- **Vysoce kreativní psaní** — strukturovaný obsah (emaily, reporty, příspěvky) zvládne skvěle, na poezii nebo umělecké texty jsou lepší specializované nástroje
- **Generování obrázků, zvuku, videa** — sám od sebe neumí
- **Čtení živých dat z internetu** — bez připojeného MCP serveru nevidí, co je na webu teď
- **Hluboká odborná znalost** v úzkých oborech — medicína, právo, finance: výstup berte jako první návrh, ne jako hotovou radu, a vždycky ho dejte zkontrolovat odborníkovi

### Ale — spousta toho jde přes pluginy a skilly

Tohle je důležitý moment. Většina věcí, které Claude Code "neumí", se dají přidat přes **plugin z marketplace** nebo přes **skill**. V dubnu 2026 je to takhle:

- **Generování obrázků** → přes skill, který volá Gemini Nano Banana Pro nebo FLUX. Napíšete *"udělej mi logo"* a obrázek vznikne přímo ve vašem projektu.
- **Generování zvuku** → přes skill napojený na ElevenLabs. Text-to-speech, podcasty, voice cloning.
- **Čtení živých dat z internetu** → přes web search MCP server (instalace dvě minuty)
- **Přístup k databázím** → přes PostgreSQL / MySQL / SQLite MCP server
- **GitHub, Linear, Notion, Slack, Figma, Vercel, Firebase, Sentry** → oficiální pluginy v marketplace, jeden klik instalace
- **PR review, deployment, monitoring** → všechno jsou pluginy, které si nainstalujete

Víc o pluginech, skillech a marketplace najdete v `extensibility.md` ve stejné složce. Pravidlo: pokud vám něco chybí, **podívejte se nejdřív do marketplace** (`/plugin` uvnitř Claude Code), a až potom řekněte, že to nejde.

### Kdy Claude Code radši vůbec nepoužít

Tohle jsou skutečná omezení, která pluginem nevyřešíte:

- **Citlivé osobní údaje klientů** — pokud k tomu nemáte Enterprise plán s HIPAA compliance
- **Produkční databáze** bez testovacího prostředí — i s MCP serverem si dejte pozor, ať máte pojistky proti nechtěným zápisům
- **Právní texty bez kontroly odborníka** — první draft dobrý, finální verze nikdy
- **Úkoly, kde potřebujete stoprocentní přesnost** — agent může chybovat. Výstup si vždycky zkontrolujte.

---

## Pluginy, skilly, marketplace — jak si Claude Code rozšířit

### Co je to plugin a skill?

- **Skill** je obyčejný markdown soubor, který Claude Code čte, když dává smysl. Popisuje kontext nebo postup pro nějakou úlohu. Ten, se kterým zrovna mluvíte, je přesně takový skill — průvodce webinářem.
- **Plugin** je balíček, který obsahuje skilly, slash commandy, subagenty, MCP servery nebo hooky pod jednou střechou. Instalujete ho jedním krokem a hned funguje.

### Kde najdu pluginy?

Anthropic má oficiální **marketplace s pluginy**. Dostanete se tam dvěma cestami:

1. **Uvnitř Claude Code:** napište slash command `/plugin`. Otevře se interaktivní panel, kde si můžete procházet dostupné pluginy, instalovat je, aktualizovat a tak dále.
2. **V prohlížeči:** [claude.com/plugins](https://claude.com/plugins)

V oficiálním marketplace najdete pluginy pro GitHub, Linear, Notion, Figma, Vercel, Firebase, Slack, Jira/Confluence, Sentry a mnohé další.

### Jak plugin nainstaluju?

Uvnitř Claude Code napište:

```
/plugin
```

Otevře se panel. Najděte si plugin v záložce **Discover** a potvrďte instalaci. Nebo přímo:

```
/plugin install github@claude-plugins-official
```

Plugin je ihned aktivní. Když ho chcete vypnout, `/plugin disable <jmeno>`.

### Dá se použít i něco mimo oficiální marketplace?

Ano. Kdokoli může vytvořit vlastní marketplace (je to jen git repo s `marketplace.json` souborem). Komunitní marketplace přidáte takto:

```
/plugin marketplace add owner/repo
```

Pak se jeho pluginy objeví v záložce Discover.

### Skilly — kam si je přidám?

Skilly najdete Claude Code ve čtyřech umístěních (v tomto pořadí priorit):

| Úroveň | Kde | Pro co platí |
|--------|-----|--------------|
| Enterprise | Firemní nastavení | Celá organizace |
| Uživatelská | `~/.claude/skills/` | Váš uživatel, všude |
| Projektová | `.claude/skills/` v projektu | Tenhle konkrétní projekt |
| Plugin | Uvnitř nainstalovaného pluginu | Všude, kde je plugin aktivní |

Vlastní skill si přidáte tak, že vytvoříte složku `~/.claude/skills/jmeno-skillu/` a dovnitř vložíte `SKILL.md`. Bez instalace, bez kompilace.

### Co všechno jde přes skilly a pluginy?

Krátký přehled:

- **Práce se souborovým systémem** → nativně, bez pluginu
- **Git, commity, PR** → nativně + GitHub plugin pro plnou integraci
- **Deployment** → Vercel, Firebase plugin
- **Databáze** → PostgreSQL / MySQL / SQLite MCP servery
- **Design** → Figma plugin
- **Projektový management** → Linear, Notion, Jira/Confluence pluginy
- **Generování obrázků** → skill volající Gemini nebo FLUX
- **Generování zvuku a podcastů** → skill volající ElevenLabs
- **Browser automation** → agent-browser skill (ovládání webu za vás)
- **Slack, Discord, email** → komunikační pluginy

**Víc o tomhle tématu** je v `extensibility.md` ve stejné složce — včetně praktických příkladů.

---

## Co dělat po webináři

### Dobře — a teď co?

1. Otevřete si `cheat-sheet/claude-code-quickstart-cs.md` — je to průvodce prvních třiceti minut
2. Vyberte si jeden reálný úkol ze své práce a zkuste ho
3. Přidejte se do naší Circle komunity (odkaz dostanete v závěru webináře)
4. Napište si CLAUDE.md pro svůj pracovní projekt

### Kam se podívat pro další učení?

- **Cheat sheet** v tomhle repozitáři
- **Oficiální dokumentace:** [code.claude.com/docs](https://code.claude.com/docs)
- **Circle komunita** — sdílejte projekty a ptejte se
- **Další webináře a kurzy** na [aibility.cz](https://aibility.cz)

### Můžu si najmout konzultanta nebo mentora?

Ano — Aibility dělá individuální i firemní konzultace. Víc najdete na [aibility.cz](https://aibility.cz), nebo napište Petře.
