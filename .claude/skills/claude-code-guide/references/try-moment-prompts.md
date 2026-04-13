# Prompty pro "Zkuste si to sami"

Hotové prompty pro oba momenty, kdy si účastníci zkouší něco sami. Každý je navržený tak, aby **do tří minut něco reálně stálo** — zbytek z osmiminutového okna je na iteraci a hraní.

---

## Jak účastníkovi poradit, kde prompt zadat

Claude Code běží na víc místech. Účastník nemusí nutně sedět v terminálu. Když se vás ptá, **neříkejte "otevřete terminál"** — raději se zeptejte, kde Claude Code má, a přizpůsobte se:

- **V desktopové aplikaci Claude** → stačí kliknout na "New project" nebo otevřít novou chat místnost a prompt vložit
- **V prohlížeči na [claude.ai/code](https://claude.ai/code)** → otevřít nový projekt, prompt vložit
- **V terminálu (CLI)** → napsat `claude` a prompt vložit do chatu, který se objeví
- **V rozšíření pro VS Code / Cursor / JetBrains** → otevřít Claude Code panel a prompt vložit
- **V iOS aplikaci Claude** → otevřít chat, prompt napsat

**Důležité:** Prompty níže jsou napsané tak, aby si **Claude Code sám vytvořil složku**, když ji potřebuje. Účastník nemusí předem dělat `mkdir` ani nic v Finderu. Když Claude Code řekne *"Smím vytvořit novou složku?"*, stačí odpovědět `y` a jede se dál.

Pokud je účastník na CLI a chce si složku přichystat sám (čistší přehled), může ji samozřejmě vytvořit před spuštěním `claude`. Ale není to nutné.

---

## Zkuste si to sami #1 (minuty 30–38) — První vlastní úkol

Účastník má právě spuštěný Claude Code, viděl demo v Level 1, ale sám ještě nic nezadal. Cíl: něco hotového, co se dá ukázat v chatu.

### Varianta A — Osobní stránka

**Pro koho:** Pro ty, kdo chtějí rychlý a jasně viditelný výsledek. Bezpečná volba, kterou doporučujte, když si někdo neví rady.

**Co z toho bude:** Jednoduchá, pěkně vypadající HTML stránka se jménem, profesí a kontaktem. Otevře se ve webovém prohlížeči.

**Prompt ke zkopírování:**
```
Vytvoř mi novou složku "moje-stranka" a v ní jednoduchou osobní stránku
jako index.html.

Obsah stránky:
- Jméno: [vaše jméno]
- Čím se zabývám: [jednou větou]
- Email: [váš email]

Vzhled: čistý, moderní, tmavé pozadí. Až budeš hotový, řekni mi,
jak si ji otevřu v prohlížeči.
```

**Čas do výsledku:** Jedna až dvě minuty. Claude Code se během práce zeptá na povolení některých akcí (vytvoření složky, uložení souboru) — stačí odpovídat `y`.

**Když zbývá čas:** *"Přidej na konec stránky jednoduchý kontaktní formulář."*

---

### Varianta B — Malá aplikace: to-do list

**Pro koho:** Kdo chce uvidět, že i skutečná aplikace může vzniknout za chvilku. O něco techničtější než Varianta A, pořád ale jednoduché.

**Co z toho bude:** Funkční to-do list v jednom HTML souboru. Přidávání, odškrtávání, mazání položek — a pamatuje si je i po zavření stránky.

**Prompt:**
```
Vytvoř mi novou složku "todo" a v ní jednoduchý to-do list jako
jediný HTML soubor (index.html).

Funkce:
- přidat novou položku
- odškrtnout hotovou
- smazat položku
- položky se ukládají v prohlížeči (localStorage), ať se neztratí

Vzhled: minimalistický, světlé pozadí, modrá jako doplňková barva.
Až budeš hotový, dej mi vědět, kde index.html najdu.
```

**Čas do výsledku:** Dvě minuty.

**Když zbývá čas:** *"Nahoru přidej počítadlo, kolik věcí ještě zbývá udělat."*

---

### Varianta C — Stránka o něčem, co vás baví

**Pro koho:** Kdo chce něco osobnějšího, méně "technického". Skvělé pro lidi, kteří nechtějí, aby výsledek vypadal jako ukázka kódu.

**Co z toho bude:** Typograficky vyladěná stránka o vašem oblíbeném tématu — mohla by to být vizitka vaší vášně.

**Prompt:**
```
Vytvoř mi novou složku "co-me-bavi" a v ní stránku o něčem, co mě baví:
[napište jednou větou — třeba "italská kuchyně", "severská literatura",
"běh na dlouhé tratě"].

Struktura stránky:
- úvodní sekce s velkým nadpisem a jednou větou, proč mě to baví
- tři bloky, ve kterých řeknu to nejdůležitější
- závěr s osobní poznámkou

Styl: teplé barvy, hodně prostoru, důraz na typografii. Ulož jako
index.html a dej mi vědět, jak si ji otevřu.
```

**Čas do výsledku:** Dvě minuty.

**Když zbývá čas:** *"Do úvodní sekce přidej obrázek na pozadí — stačí placeholder."*

---

## Zkuste si to sami #2 (minuty 58–66) — Pracovní úkol

Účastník viděl Level 2 s pracovními workflow. Cíl: něco, co by mohli reálně použít v práci.

### Varianta A — Zpracovat dokument

**Pro koho:** Kdo každý týden čte dlouhé texty, reporty, emaily nebo PDF.

**Co z toho bude:** Strukturovaný souhrn vašeho dokumentu — hotový a k použití.

**Jak na to:** Mějte nachystaný nějaký textový soubor, email nebo PDF. Klidně z vaší reálné práce. Zkopírujte ho (nebo obsah) na místo, kde Claude Code pracuje (pokud jste v desktopu, prostě řekněte Claude Code, kde soubor máte — on si pro něj dojde; v CLI ho přetáhněte do pracovní složky).

**Prompt:**
```
Mám soubor, který chci zpracovat — [jméno souboru, nebo vlož sem jeho
obsah přímo, pokud není velký]. Přečti ho a udělej:

- shrnutí na pět vět
- tři hlavní myšlenky jako bullet points
- dva návrhy, co s tím dál

Výstup ulož jako shrnuti.md vedle původního souboru.
```

**Čas do výsledku:** Minuta až dvě.

**Když zbývá čas:** *"Teď mi to samé napiš jako krátký email šéfovi."*

---

### Varianta B — Tři verze LinkedIn příspěvku

**Pro koho:** Marketéři a kdokoli, kdo píše na sociální sítě.

**Co z toho bude:** Tři soubory se třemi verzemi příspěvku — každá jinou rukou. Vyberete si nejlepší a pošlete.

**Prompt:**
```
Vytvoř složku "linkedin" a v ní tři verze LinkedIn příspěvku na téma:
[napište téma — třeba "jak mi AI mění práci", "co mě za poslední měsíc
překvapilo", "nástroj, který bych doporučil všem ve své branži"].

Každá verze má:
- první větu, která zaujme
- hlavní myšlenku (tři až čtyři věty)
- otázku nebo výzvu na konci

Verze 1: osobní, uvolněná
Verze 2: s daty a fakty, profesionálnější
Verze 3: provokativní, s jasným názorem

Každou verzi ulož jako samostatný .md soubor ve složce linkedin.
```

**Čas do výsledku:** Dvě minuty.

**Když zbývá čas:** *"Která verze by u mé cílovky nejspíš fungovala nejlíp? A proč?"*

---

### Varianta C — Vylepšit to, co jste postavili v #1

**Pro koho:** Kdo má z prvního kola něco funkčního a chce to dotáhnout. Doporučujte, když chce někdo pokračovat ve stejném projektu.

**Co z toho bude:** Vylepšená verze vašeho projektu z prvního kola — responzivní, s lepší typografií a jednou novou funkcí.

**Prompt:**
```
Vrať se k projektu z první části (složka [moje-stranka / todo /
co-me-bavi — podle toho, co jsi dělal]). Udělej tři věci:

1. Ať to vypadá dobře i na mobilu (responzivní design)
2. Přidej jednu novou sekci nebo funkci, která by tam logicky patřila
3. Zvětši nadpisy a udělej lepší proporce

Až budeš hotový, řekni mi, co jsi změnil a proč.
```

**Čas do výsledku:** Dvě až tři minuty.

**Když zbývá čas:** *"A teď do rohu přidej přepínač na tmavý režim."*

---

## Jak účastníkovi pomoct vybrat si

Když se někdo zeptá *"co si mám zkusit?"*, neházejte na něj všechny tři varianty najednou:

1. **Zeptejte se ho:** *"Chcete spíš něco osobního (stránka o sobě), jednoduchou aplikaci (to-do list), nebo něco kreativního (stránka o tom, co vás baví)?"*
2. **Když si neumí vybrat:** Doporučte Variantu A. U #1 je to osobní stránka, u #2 zpracování dokumentu. Jsou to nejjistější sázky.
3. **Když nechce nic předpřipraveného:** Respektujte to. Nabídněte jen, že mu pomůžete: *"Řekněte mi jednou větou, co chcete postavit, a já vám to pomůžu přeložit do promptu."*

## Co když účastník neví, kam prompt zadat

Zjistěte, kde Claude Code má (viz sekci nahoře "Jak účastníkovi poradit, kde prompt zadat"), a přizpůsobte se:

- **Desktop app:** *"Klikněte v Claude Code na 'New project' (nebo vytvořte novou chat místnost), vložte prompt do okýnka a pošlete."*
- **Web (claude.ai/code):** *"Otevřete nový projekt, prompt vložte do chatu a odešlete."*
- **CLI:** *"Spusťte `claude` v libovolné složce, pak prompt vložte a stiskněte Enter."*
- **VS Code / Cursor / JetBrains rozšíření:** *"Otevřete Claude Code panel, prompt vložte."*
- **iOS:** *"V Claude iOS aplikaci otevřete chat a prompt napište."*

Claude Code se během práce bude ptát na povolení — vytvoření složky, uložení souboru, spuštění příkazu. Stačí odpovídat `y` (ano) nebo `n` (ne).

## Co když Claude Code hlásí chybu

Podívejte se do `faq.md` ve stejné složce — nejčastější chyby jsou tam. Když tam daná chyba není, požádejte účastníka, ať zkopíruje text chyby, a společně ji zkuste rozluštit.
