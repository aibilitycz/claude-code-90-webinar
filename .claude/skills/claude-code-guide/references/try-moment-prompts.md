# Prompty pro "Zkuste si to sami"

Hotové prompty pro oba momenty, kdy si účastníci zkouší něco sami. Každý je navržený tak, aby **do tří minut něco reálně stálo** — zbytek osmiminutového okna je na hraní a úpravy.

---

## Zkuste si to sami #1 (minuty 30–38) — První vlastní úkol

Účastník právě nainstaloval Claude Code, viděl demo v Level 1, ale sám ještě nic nezadal. Cíl: něco hotového, co se dá ukázat v chatu.

### Varianta A — Osobní stránka

**Pro koho:** Pro ty, kdo chtějí rychlý a jasně viditelný výsledek. Bezpečná volba, kterou doporučujte, když si někdo neví rady.

**Příprava (vše v jednom terminálu):**
```bash
mkdir moje-stranka
cd moje-stranka
claude
```

**Prompt ke zkopírování:**
```
Udělej mi jednoduchou osobní stránku.
Jméno: [vaše jméno]
Čím se zabývám: [krátce, jednou větou]
Email: [váš email]

Vzhled: čistý, moderní, tmavé pozadí.
Výsledek ulož jako index.html.
```

**Co by mělo vzniknout:** `index.html`, který si otevřete v prohlížeči. Do prvního výsledku to trvá minutu až dvě.

**Když zbývá čas:** *"Přidej na konec kontaktní formulář."*

---

### Varianta B — Malá aplikace: to-do list

**Pro koho:** Kdo chce uvidět, že i skutečná aplikace může vzniknout za chvilku. O něco techničtější než Varianta A, pořád ale jednoduché.

**Příprava:**
```bash
mkdir todo
cd todo
claude
```

**Prompt:**
```
Udělej jednoduchý to-do list — všechno v jednom HTML souboru.
Co to má umět:
- přidat novou položku
- odškrtnout hotovou
- smazat položku
- pamatovat si seznam i po zavření stránky (localStorage)

Vzhled: minimalistický, světlé pozadí, modrá jako doplňková barva.
```

**Co by mělo vzniknout:** Funkční to-do list v jednom `index.html`. První výsledek do dvou minut.

**Když zbývá čas:** *"Nahoru přidej počítadlo, kolik věcí ještě zbývá udělat."*

---

### Varianta C — Stránka o něčem, co vás baví

**Pro koho:** Kdo chce něco osobnějšího, méně "technického". Skvělé pro lidi, kteří nechtějí, aby výsledek vypadal jako ukázka kódu.

**Příprava:**
```bash
mkdir co-me-bavi
cd co-me-bavi
claude
```

**Prompt:**
```
Udělej stránku o něčem, co mě baví: [napište jednou větou — třeba
"italská kuchyně", "severská literatura", "běh na dlouhé tratě"].

Struktura:
- úvodní sekce s velkým nadpisem a jednou větou, proč mě to baví
- tři bloky, ve kterých řeknu to nejdůležitější
- závěr s osobní poznámkou

Styl: teplé barvy, hodně prostoru, důraz na typografii.
```

**Co by mělo vzniknout:** Hezky vypadající `index.html`. První výsledek do dvou minut.

**Když zbývá čas:** *"Do úvodní sekce přidej obrázek na pozadí — stačí placeholder."*

---

## Zkuste si to sami #2 (minuty 58–66) — Pracovní úkol

Účastník viděl Level 2 s pracovními workflow. Cíl: něco, co by mohli reálně použít v práci.

### Varianta A — Zpracovat dokument

**Pro koho:** Kdo každý týden čte dlouhé texty, reporty, emaily nebo PDF.

**Příprava:** Účastník si přetáhne nějaký textový soubor nebo PDF do složky webináře. Klidně email, článek, cokoli textového, co má po ruce.

**Prompt:**
```
Ve složce mám soubor [jméno-souboru]. Přečti ho a udělej:
- shrnutí na pět vět
- tři hlavní myšlenky v odrážkách
- dva návrhy, co s tím dál

Výstup ulož jako shrnuti.md.
```

**Co by mělo vzniknout:** Strukturovaný souhrn. Trvá minutu až dvě.

**Když zbývá čas:** *"A teď mi to samé napiš jako krátký email šéfovi."*

---

### Varianta B — Tři verze LinkedIn příspěvku

**Pro koho:** Marketéři a kdokoli, kdo píše na sociální sítě.

**Příprava:**
```bash
mkdir linkedin
cd linkedin
claude
```

**Prompt:**
```
Napiš tři verze LinkedIn příspěvku na téma:
[napište téma — třeba "jak mi AI mění práci", "co mě za poslední měsíc
překvapilo", "nástroj, který bych doporučil všem ve své branži"].

Každá verze má:
- první větu, která zaujme
- hlavní myšlenku (tři až čtyři věty)
- otázku nebo výzvu na konci

Verze 1: osobní, uvolněná
Verze 2: s daty a fakty, profesionálnější
Verze 3: provokativní, s jasným názorem

Každou verzi ulož do samostatného souboru.
```

**Co by mělo vzniknout:** Tři soubory, tři různé tóny. Do dvou minut.

**Když zbývá čas:** *"Která verze by u mé cílovky nejspíš fungovala nejlíp? A proč?"*

---

### Varianta C — Vylepšit to, co jste postavili v #1

**Pro koho:** Kdo má z prvního kola něco funkčního a chce to dotáhnout. Doporučujte, když chce někdo pokračovat na stejném projektu.

**Prompt:**
```
Vrať se k projektu z první části. Udělej tři věci:
1. Ať to vypadá dobře i na mobilu (responzivní)
2. Přidej jednu novou sekci nebo funkci, která tam chybí
3. Zvětši nadpisy a udělej lepší proporce

Pak mi řekni, co jsi změnil a proč.
```

**Co by mělo vzniknout:** Upravený projekt s vysvětlením změn. Dvě až tři minuty.

**Když zbývá čas:** *"A teď do rohu přidej přepínač na tmavý režim."*

---

## Jak účastníkovi pomoct vybrat si

Když se někdo zeptá *"co si mám zkusit?"*, neházejte na něj všechny tři varianty najednou. Udělejte to jednodušeji:

1. **Zeptejte se ho:** *"Chcete spíš něco osobního (stránka o sobě), jednoduchou aplikaci (to-do list), nebo něco kreativního (stránka o tom, co vás baví)?"*
2. **Když si neumí vybrat:** Doporučte Variantu A. U #1 je to osobní stránka, u #2 zpracování dokumentu. Jsou to nejjistější sázky.
3. **Když nechce nic předpřipraveného:** Respektujte to. Nabídněte jen, že mu pomůžete: *"Řekněte mi jednou větou, co chcete postavit, a já vám to pomůžu přeložit do promptu."*

## Co když účastník neví, jak prompt použít

1. Řekněte mu, ať prompt zkopíruje do okna, kde mu bliká kurzor (do Claude Code v terminálu)
2. Claude Code se ho během práce bude ptát na povolení — to je v pořádku, stačí odpovědět `y` a Enter
3. Když se zasekne na chybě, ať text chyby zkopíruje a zeptá se (tohoto skillu) znovu

## Co když Claude Code hlásí chybu

Podívejte se do `faq.md` ve stejné složce — nejčastější chyby jsou tam. Pokud tam není, řekněte účastníkovi, ať text chyby zkopíruje, a společně se podívejte, co s tím.
