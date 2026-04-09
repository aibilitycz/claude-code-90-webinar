# Průvodce lektora — Claude Code Masterclass

## Obsah

- [Rozdělení prezentujících](#rozdělení-prezentujících)
- [Časový rozvrh (90 minut)](#časový-rozvrh-90-minut)
- [Klíčové body k zdůraznění](#klíčové-body-k-zdůraznění)
- [Tipy pro live demo](#tipy-pro-live-demo)
- [Technické požadavky](#technické-požadavky)

## Rozdělení prezentujících

| Čas | Sekce | Kdo | Minuty |
|-----|-------|-----|--------|
| 0–35 | Level 0 (intro, instalace) + Level 1 (první úkol) | **Prezentující 1** | 35 min |
| 35–37 | Micro-Q&A #1 — předání slova | **Oba** | 2 min |
| 37–78 | Level 2 (workflow showcase) + Level 3 (pokročilé) | **Prezentující 2** | 41 min |
| 78–90 | Q&A + Závěr | **Oba** | 12 min |

> **Poznámka:** Micro-Q&A v 35. minutě slouží jako přirozený moment pro předání. Konkrétní obsazení rolí bude rozhodnuto později.

## Časový rozvrh (90 minut)

### Level 0: Úvod & Instalace (15 minut)

- **0–3 min:** Otevření příběhem + cíle webináře
  - **Příběh (60 sekund):** "Minulý týden jsem potřeboval landing page pro nový produkt. Designér měl termín za dva týdny. Otevřel jsem terminál, napsal jednu větu, a za 4 minuty jsem měl hotovou stránku — responsivní, s animacemi, připravenou k nasazení. To, co uvidíte dnes, není sci-fi. Je to nástroj, který můžete použít zítra ráno."
  - **Before/After:** Ukažte screenshot — "Toto je prompt. Toto je výsledek. 4 minuty."
  - Cíl: pochopení, inspirace, vědět jak začít
- **3–5 min:** Co je Claude Code
  - AI agent v terminálu — ne chat, ne editor, ale autonomní spolupracovník
  - Čte soubory, píše kód, spouští příkazy, opravuje chyby — sám
- **5–7 min:** Claude Code vs Cursor vs ChatGPT
  - ChatGPT: odpovídá na otázky (konverzace)
  - Cursor: AI v editoru kódu (asistence při psaní)
  - Claude Code: autonomní agent (zadáte úkol, on ho udělá celý)
- **7–9 min:** Cena a plány
  - Anthropic Max plan — co obsahuje, kolik stojí
  - API credits — alternativa pro pokročilé
  - Typické měsíční náklady podle intenzity používání
- **9–11 min:** Terminál za 2 minuty
  - Jak otevřít terminál (Mac: Terminal/iTerm, Windows: PowerShell/WSL)
  - "Tohle je místo, kam píšete příkazy. Nic víc nepotřebujete vědět."
  - Ukázka: napíšu příkaz, zmáčknu Enter, vidím výsledek
- **11–15 min:** Živá instalace
  - `npm install -g @anthropic-ai/claude-code` (nebo aktuální instalační příkaz)
  - Přihlášení k Anthropic účtu
  - Spuštění `claude` — první obrazovka

### Level 1: První úkol (20 minut)

- **15–20 min:** Zadání prvního úkolu
  - Otevřít prázdnou složku
  - Zadat jednoduchý prompt: "Vytvoř mi osobní webovou stránku s mým jménem a kontaktem"
  - Ukázat, jak Claude Code:
    - Analyzuje požadavek
    - Plánuje kroky
    - Vytváří soubory (HTML, CSS, JS)
    - Kontroluje svou práci
- **20–27 min:** Anatomie agentovy práce
  - Jak číst výstup Claude Code — co znamenají jednotlivé kroky
  - "Thinking" — uvažování nad úkolem
  - Tvorba souborů — autonomní generování celé struktury projektu
  - Self-correction — když něco nefunguje, opraví to sám
  - **Bezpečnostní pojistka:** ukažte moment, kdy agent žádá o povolení
    - "Vidíte? Claude Code se zeptal, než spustil příkaz. Vy rozhodujete."
  - **Kontrola výstupu:** otevřete výsledek a projděte ho s publikem
    - "Agent je mocný, ale ne neomylný — vždy si projděte, co vytvořil."
- **27–31 min:** Výsledek a iterace
  - Otevření vytvořené stránky v prohlížeči
  - Ukázka iterace: "Přidej sekci s mými projekty a změň barvy na tmavé"
  - Claude Code upraví existující soubory — pochopí kontext
- **31–35 min:** Klíčové poznatky z Level 1
  - Agent ≠ chatbot — neodpovídá, ale dělá
  - Kontext je král — Claude Code vidí celý projekt
  - Iterace je přirozená — můžete upřesňovat za chodu
  - Agent se ptá na povolení — vy máte vždy poslední slovo

### Micro-Q&A (2 minuty)

- **35–37 min:** Rychlé otázky z publika
  - "Než půjdeme dál — máte otázky k tomu, co jste viděli?"
  - Odpovězte 2–3 otázky, složitější zaparkujte na závěrečné Q&A

### Level 2: Showcase workflow (25 minut)

- **37–46 min:** Workflow 1 — Webová aplikace od nuly
  - Demo: Vytvoření jednoduché webové aplikace
  - Možnosti (lektor vybere podle publika):
    - Osobní portfolio / bio stránka
    - Business landing page s hero sekcí, funkcemi, ceníkem
    - Interaktivní nástroj (kalkulačka, kvíz, formulář)
  - Ukázat celý cyklus: zadání → tvorba → preview → iterace
- **46–54 min:** Workflow 2 — Práce s dokumenty a emaily
  - Demo: Zpracování dokumentu nebo příprava komunikace
  - Příklady:
    - Shrnutí dlouhého PDF do executive summary
    - Příprava 3 variant emailu pro klienta (formální, stručná, přátelská)
    - Vytvoření briefu z podkladových materiálů
  - Zdůraznit: "Tohle je úkol, který děláte každý týden. Teď trvá 3 minuty."
- **54–61 min:** Workflow 3 — Automatizace a obsah
  - Demo: Automatizace opakující se práce
  - Příklady:
    - Hromadné zpracování souborů (přejmenování, konverze, organizace)
    - Generování marketingového obsahu (emaily, příspěvky, prezentace)
    - Transformace dat z jednoho formátu do druhého
- **61–62 min:** Co dalšího Claude Code umí (slovní přehled — bez live demo)
  - Rychlý výčet: debugging, Git, dokumentace, refactoring, testování, konverze
  - "Tohle všechno si vyzkoušíte doma — v cheat sheetu máte příklady"

### Micro-Q&A (2 minuty)

- **62–64 min:** Rychlé otázky z publika
  - "Viděli jste tři různé workflow. Co vás zaujalo nejvíc?"
  - Odpovězte 2–3 otázky, složitější zaparkujte na závěr

### Level 3: Pokročilé funkce (14 minut)

- **64–70 min:** CLAUDE.md — váš osobní manuál pro Claude Code
  - Co je CLAUDE.md a proč ho chcete
  - Jak vytvořit pravidla pro konzistentní výstup
  - Příklady: komunikační styl, formát výstupů, oblíbené technologie
  - Live demo: vytvoření CLAUDE.md a ukázka rozdílu ve výstupu
- **70–74 min:** MCP servery — rozšíření možností
  - Co jsou MCP (Model Context Protocol) servery
  - **Live demo:** Instalace jednoho MCP (web search) za 2 minuty
    - Před MCP: "Co je nového v AI?" → "Nemám přístup k aktuálním info..."
    - Po MCP: agent vyhledá na webu a shrne výsledky
  - Zmínit další MCP: databáze, GitHub, Google Drive, Slack
- **74–76 min:** Paměť a přepínání modelů
  - Paměť: Claude Code si pamatuje preference mezi konverzacemi
  - Modely: Sonnet (rychlý) vs Opus (chytřejší) — přepínáte příkazem `/model`
- **76–78 min:** Tipy pro power usery
  - Slash commands (/help, /clear, /compact, /model, /cost)
  - Kdy Claude Code použít a kdy ne
  - Bezpečnost: co nikdy nezadávat (hesla, API klíče v promptech)

### Q&A + Závěr (12 minut)

- **78–86 min:** Otázky a odpovědi
  - Otevřená diskuze — zaparkované otázky z micro-Q&A + nové
  - Časté otázky: cena, bezpečnost dat, limity, porovnání s jinými nástroji
  - Pokud zbude čas: živá ukázka na přání publika ("Co chcete vidět?")
- **86–90 min:** Závěr — co dělat zítra ráno
  - **Konkrétní první krok:** "Zítra otevřete terminál, nainstalujte Claude Code, a zadejte jeden úkol ze svého reálného pracovního dne."
  - Odkaz na Quick Start guide — "Tohle je váš průvodce prvních 30 minut"
  - Zdroje: dokumentace, GitHub, komunita
  - **Závěrečná myšlenka:** "Před rokem jste potřebovali vývojáře na každou technickou věc. Dnes máte v terminálu spolupracovníka, který nikdy nespí, nikdy se neurazí a zvládne víc, než si myslíte. Jediné, co potřebujete, je říct mu, co chcete."
  - Pozvánka na další webináře / masterclass

## Klíčové body k zdůraznění

### Pro každý level:
- **Level 0:** Claude Code je agent — ne chatbot, ne editor. Zadáte úkol, on ho udělá.
- **Level 1:** Sledujte, jak myslí — plánuje, tvoří, opravuje. A ptá se, než udělá něco riskantního.
- **Level 2:** Jeden nástroj, desítky workflow — od webů přes emaily po automatizace.
- **Level 3:** S CLAUDE.md, MCP a pamětí se z Claude Code stává váš osobní vývojář.

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

### Během demo:
- Narážejte nahlas — "teď Claude Code čte soubory, protože potřebuje pochopit strukturu..."
- Když nastane chyba, nebojte se — ukažte, jak ji agent sám opraví
- Držte prompty jednoduché a čitelné — publikum musí vidět, co jste zadali
- Zvětšete font v terminálu (min. 18px) — vzdálení účastníci musí číst

### Časový management:
- Micro-Q&A (35. a 62. minuta) pomáhají řídit tempo — pokud nestíháte, zkraťte je
- Level 2 je nejflexibilnější — můžete přeskočit workflow nebo zkrátit iterace
- Pokud instalace zabere víc času, zkraťte Level 2
- "Co dalšího umí" je záměrně jen slovní přehled — nedělat live demo
- Q&A na konci může běžet přes čas — nechte prostor pro otázky

## Technické požadavky

### Pro lektora:
- Claude Code nainstalovaný a funkční
- Anthropic účet s dostatečným kreditem / Max plánem
- Stabilní internetové připojení
- Terminál se zvětšeným fontem (18px+)
- Zoom s nasdílenou obrazovkou
- Připravené prázdné složky pro každé demo

### Pro účastníky:
- Počítač s přístupem k terminálu (Mac/Linux/Windows s WSL)
- Stabilní internet
- Node.js nainstalovaný (zmínit v přípravném emailu)
- Anthropic účet (zmínit v přípravném emailu)

### Přípravný email — co poslat účastníkům:
1. Nainstalujte si Node.js z [nodejs.org](https://nodejs.org)
2. Vytvořte si účet na [anthropic.com](https://www.anthropic.com)
3. Otevřete terminál a ověřte, že funguje `node --version`
4. Nic víc — zbytek uděláme společně na webináři
