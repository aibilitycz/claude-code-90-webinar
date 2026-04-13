# Try Moment Prompts

Hotové prompty pro oba Try Moments. Každý byl navržen tak, aby viditelný výsledek vznikl **do 3 minut** — zbytek z 8-minutového okna je na iteraci a prozkoumání.

---

## Try Moment #1 (minuty 30–38) — První vlastní úkol

Účastník má Claude Code čerstvě nainstalovaný, viděl demo v Levelu 1, ale ještě sám nezadal žádný úkol. Cíl: něco dokončeného, co může ukázat v chatu.

### Varianta A — Osobní vizitková stránka

**Pro koho:** Kdo chce rychlý, jasně hmatatelný výsledek. Default doporučení.

**Příprava:**
```bash
mkdir moje-vizitka
cd moje-vizitka
claude
```

**Prompt (uživatel ho zkopíruje):**
```
Vytvoř mi jednoduchou osobní vizitkovou stránku.
Jméno: [vaše jméno]
Profese: [co děláte]
Email: [váš email]

Design: čistý, moderní, tmavé téma.
Výsledek uložit jako index.html v aktuální složce.
```

**Očekávaný výsledek:** `index.html` s osobní stránkou, kterou lze otevřít v prohlížeči. Čas do prvního výsledku ~1–2 minuty.

**Možná iterace (pokud zbývá čas):** *"Přidej kontaktní formulář na konec stránky."*

---

### Varianta B — Jednoduchý to-do list

**Pro koho:** Kdo chce vidět, že "aplikace" můžou vznikat rychle. Trochu techničtější vibe než vizitka.

**Příprava:**
```bash
mkdir todo-list
cd todo-list
claude
```

**Prompt:**
```
Vytvoř jednoduchou to-do list aplikaci v jednom HTML souboru.
Funkce:
- Přidání nové položky
- Odškrtnutí dokončené položky
- Smazání položky
- Položky se ukládají v prohlížeči (localStorage)

Design: minimalistický, světlé téma, modrá jako akcentní barva.
```

**Očekávaný výsledek:** `index.html` s funkčním to-do listem. Čas do prvního výsledku ~2 minuty.

**Možná iterace:** *"Přidej počítadlo nedokončených položek nahoře."*

---

### Varianta C — Stránka o oblíbeném tématu

**Pro koho:** Kdo chce něco osobnějšího / kreativního. Dobré pro lidi, kteří nechtějí "technicky vypadající" výsledek.

**Příprava:**
```bash
mkdir moje-stranka
cd moje-stranka
claude
```

**Prompt:**
```
Vytvoř stránku o mém oblíbeném tématu: [napište jedno — třeba "italská kuchyně", "skandinávská literatura",
"běh na dlouhé tratě", cokoliv].

Struktura:
- Hero sekce s velkým nadpisem a jednou větou úvodu
- 3 bloky s klíčovými body, které bych chtěl/a říct
- Závěrečná sekce s osobní poznámkou

Styl: teplé barvy, velkorysý prostor, důraz na typografii.
```

**Očekávaný výsledek:** `index.html` se stylově laděnou stránkou. Čas do prvního výsledku ~2 minuty.

**Možná iterace:** *"Přidej obrázek na pozadí hero sekce (stačí placeholder)."*

---

## Try Moment #2 (minuty 58–66) — Pracovní workflow

Účastník viděl Level 2 workflow showcase. Cíl: něco, co by mohl reálně použít v pracovním kontextu.

### Varianta A — Shrnutí dokumentu

**Pro koho:** Kdo často zpracovává dlouhé texty, reporty, emaily, PDF.

**Příprava:** Uživatel si otevře jakýkoliv textový soubor nebo PDF, který má po ruce (může být i email nebo článek uložený jako .txt). Zkopíruje ho do složky webináře.

**Prompt:**
```
V této složce je soubor [jméno-souboru]. Přečti ho a vytvoř:
- Executive summary (max 5 vět)
- 3 hlavní zjištění jako bullet points
- 2 doporučené další kroky

Výstup ulož jako shrnuti.md.
```

**Očekávaný výsledek:** Strukturovaný souhrn. Čas ~1–2 minuty.

**Možná iterace:** *"Přeformuluj to jako email pro manažera."*

---

### Varianta B — Tři varianty LinkedIn příspěvku

**Pro koho:** Marketéři, kdokoliv kdo píše na sociální sítě.

**Příprava:**
```bash
mkdir linkedin-prispevky
cd linkedin-prispevky
claude
```

**Prompt:**
```
Napiš 3 varianty LinkedIn příspěvku na téma:
[Vyber téma — např. "jak AI mění mou práci", "co jsem se naučil za poslední měsíc",
"nástroj, který bych doporučil každému v mé branži"]

Každý příspěvek:
- Hook (první věta musí zaujmout)
- Hlavní myšlenka (3–4 věty)
- Call to action (otázka nebo výzva)

Styl 1: osobní, neformální
Styl 2: profesionální, s daty/fakty
Styl 3: provokativní, s kontroverzním názorem

Ulož každý do samostatného souboru.
```

**Očekávaný výsledek:** Tři `.md` soubory s různými variantami. Čas ~2 minuty.

**Možná iterace:** *"Která varianta by nejlépe fungovala pro mou cílovou skupinu [X]? Vysvětli proč."*

---

### Varianta C — Iterace na Try Moment #1

**Pro koho:** Kdo má v Try Moment #1 něco postaveného a chce to zlepšit. Doporučeno pro kontinuitu.

**Prompt:**
```
Vrať se k projektu z první try-moment. Přidej:
1. Responzivní design — musí vypadat dobře i na mobilu
2. Jednu novou sekci nebo funkci podle toho, co by projektu slušelo
3. Vylepši typografii — větší nadpisy, lepší proporce

Vysvětli, co jsi změnil a proč.
```

**Očekávaný výsledek:** Upravený projekt + vysvětlení změn. Čas ~2–3 minuty.

**Možná iterace:** *"A teď přidej tmavý režim jako přepínač v rohu stránky."*

---

## Pravidla pro výběr varianty

Když se uživatel ptá "co mám zkusit":

1. **Nenabízejte všechny tři najednou** — uživatel je v časovém stresu, dejte mu rozhodnutí snadnější
2. **Zeptejte se:** *"Máte raději osobní projekt (vizitka), aplikaci (to-do list) nebo něco kreativního (stránka o tématu)?"*
3. **Pokud se nerozhodnou:** doporučte Variantu A (Vizitka pro #1, Shrnutí dokumentu pro #2). Jsou to nejjistější sázky.
4. **Pokud uživatel říká, že nechce nic předpřipraveného:** respektujte to, nabídněte pouze strukturu ("Co byste chtěli postavit? Napište mi jednou větou a pomůžu vám to zformulovat jako prompt")

## Co když uživatel neví, jak použít prompt

1. Řekněte mu, ať zkopíruje prompt do svého Claude Code promptu (v terminálu)
2. Vysvětlete, že Claude Code si během práce bude ptát na povolení — to je normální, stačí odpovídat `y`
3. Pokud se zasekne na nějaké chybě, ať se zeptá vás (tohoto skillu) s textem chyby

## Co když Claude Code hlásí chybu

Podívejte se do `faq.md` v této složce — pravděpodobné chyby jsou tam popsané. Pokud tam není, řekněte uživateli, aby zkopíroval text chyby — a pak ho pošle sem.
