# Průvodce lektora — Claude Code Masterclass

## Obsah

- [Časový rozvrh (90 minut)](#časový-rozvrh-90-minut)
- [Klíčové body k zdůraznění](#klíčové-body-k-zdůraznění)
- [Tipy pro live demo](#tipy-pro-live-demo)
- [Technické požadavky](#technické-požadavky)

## Časový rozvrh (90 minut)

### Level 0: Úvod & Instalace (15 minut)

- **0–3 min:** Představení, cíle webináře
  - "Za 90 minut uvidíte, co Claude Code umí a proč o něm všichni mluví"
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
- **20–25 min:** Anatomie agentovy práce
  - Jak číst výstup Claude Code — co znamenají jednotlivé kroky
  - "Thinking" — uvažování nad úkolem
  - Tvorba souborů — autonomní generování celé struktury projektu
  - Self-correction — když něco nefunguje, opraví to sám
- **25–30 min:** Výsledek a iterace
  - Otevření vytvořené stránky v prohlížeči
  - Ukázka iterace: "Přidej sekci s mými projekty a změň barvy na tmavé"
  - Claude Code upraví existující soubory — pochopí kontext
- **30–35 min:** Klíčové poznatky z Level 1
  - Agent ≠ chatbot — neodpovídá, ale dělá
  - Kontext je král — Claude Code vidí celý projekt
  - Iterace je přirozená — můžete upřesňovat za chodu

### Level 2: Showcase workflow (30 minut)

- **35–42 min:** Workflow 1 — Webová aplikace od nuly
  - Demo: Vytvoření jednoduché webové aplikace
  - Možnosti (lektor vybere podle publika):
    - Osobní portfolio / bio stránka
    - Business landing page s hero sekcí, funkcemi, ceníkem
    - Interaktivní nástroj (kalkulačka, kvíz, formulář)
  - Ukázat celý cyklus: zadání → tvorba → preview → iterace
- **42–49 min:** Workflow 2 — Výzkum a analýza
  - Demo: Analýza dat nebo vytvoření strukturovaného reportu
  - Příklady:
    - Zpracování CSV dat a vytvoření vizualizace
    - Rešerše tématu a vytvoření briefu
    - Analýza dokumentu a extrakce klíčových informací
- **49–56 min:** Workflow 3 — Automatizace a obsah
  - Demo: Automatizace opakující se práce
  - Příklady:
    - Hromadné zpracování souborů (přejmenování, konverze, organizace)
    - Generování marketingového obsahu (emaily, příspěvky, prezentace)
    - Transformace dat z jednoho formátu do druhého
- **56–65 min:** Co dalšího Claude Code umí
  - Rychlý přehled dalších možností (1–2 minuty na každé):
    - Debugging a oprava chyb v existujícím kódu
    - Práce s Git repozitáři
    - Vytváření dokumentace
    - Refactoring a vylepšování kódu

### Level 3: Pokročilé funkce (15 minut)

- **65–72 min:** CLAUDE.md — váš osobní manuál pro Claude Code
  - Co je CLAUDE.md a proč ho chcete
  - Jak vytvořit pravidla pro konzistentní výstup
  - Příklady: komunikační styl, formát výstupů, oblíbené technologie
  - Live demo: vytvoření CLAUDE.md a ukázka rozdílu ve výstupu
- **72–77 min:** MCP servery — rozšíření možností
  - Co jsou MCP (Model Context Protocol) servery
  - Příklady užitečných MCP:
    - Připojení k databázím
    - Integrace s externími API
    - Práce s cloudovými službami
  - Jak nainstalovat a nakonfigurovat MCP
- **77–80 min:** Tipy pro power usery
  - Slash commands (/help, /clear, /compact)
  - Jak efektivně formulovat prompty pro agenta
  - Kdy Claude Code použít a kdy ne
  - Bezpečnost: co nikdy nezadávat (hesla, API klíče v promptech)

### Q&A + Next Steps (10 minut)

- **80–85 min:** Otázky a odpovědi
  - Otevřená diskuze
  - Časté otázky: cena, bezpečnost dat, limity, porovnání s jinými nástroji
- **85–90 min:** Další kroky
  - Jak začít sami: odkaz na Quick Start guide
  - Zdroje: dokumentace, GitHub, komunita
  - Pozvánka na další webináře / masterclass

## Klíčové body k zdůraznění

### Pro každý level:
- **Level 0:** Claude Code je agent — ne chatbot, ne editor. Zadáte úkol, on ho udělá.
- **Level 1:** Sledujte, jak myslí — plánuje, tvoří, opravuje. To je ta revoluce.
- **Level 2:** Jeden nástroj, desítky workflow — od webů po analýzy.
- **Level 3:** S CLAUDE.md a MCP se z Claude Code stává váš osobní vývojář.

### Obecné principy:
- Nemusíte umět programovat — Claude Code programuje za vás
- Terminál vypadá strašidelně, ale je to jen místo, kam píšete příkazy
- Čím lepší zadání, tím lepší výsledek — buďte konkrétní
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
- Level 2 je nejflexibilnější — můžete přeskočit/zkrátit workflow podle času
- Pokud instalace zabere víc času, zkraťte Level 2
- Q&A může běžet přes čas — nechte prostor pro otázky

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
