# Level 1: První úkol

**Délka:** 15 minut
**Cíl:** Účastníci uvidí agenta v akci — jak pracuje s kontextem souborů, s obrázkem, jak se opravuje a jak iteruje na existujícím projektu.

> **Poznámka:** Na webináři uvidíte zkrácenou verzi — od holého promptu po hotovou stránku. Tady je kompletní varianta se všemi kroky, kterou si můžete projít sami.

## Příprava

### Demo soubory

V repozitáři webináře najdete předpřipravené soubory:

```bash
cd level-1-beginner/demo-files
claude
```

Co tam je:
- `muj-obsah.md` — krátký markdown s informacemi o vás
- `design-inspirace.png` — screenshot designu, který se vám líbí
- `CLAUDE.md` — jednoduchá pravidla (česky, čistý design)

> **Tip:** Před spuštěním si `muj-obsah.md` upravte — napište tam svoje jméno, co děláte, své zájmy. Čím konkrétnější obsah, tím lepší výsledek.

## Od jednoduchého k bohatému — krok po kroku

### Prompt 1a: Holý start (~2 min)

Začneme úplně jednoduše — jen jedna věta, žádné soubory:

```
Vytvoř mi osobní webovou stránku. Jmenuju se Slava, pracuju
v AI firmě Aibility. Ulož do složky `vystupy/01-zaklad/`.
```

**Co pozorujete:**
- Agent vytvoří stránku — ale je generická, nudná, plná vymyšlených frází
- Nemá žádný kontext, tak si vymýšlí

**Princip:** Prompt bez kontextu = generický výsledek. Agent je chytrý, ale není jasnovidec.

### Prompt 1b: Přidáme soubor s kontextem (~2 min)

```
Přečti si muj-obsah.md — tam jsou skutečné informace o mně.
Zkopíruj `vystupy/01-zaklad/` do `vystupy/01-obsah/` a přepiš
stránku v nové složce podle toho, co se tam dozvíš.
```

**Co pozorujete:**
- Agent čte `muj-obsah.md` — v terminálu vidíte *"Reading muj-obsah.md"*
- Stránka je najednou osobní, konkrétní, se skutečným obsahem
- Stejný agent, stejný projekt — jen dostal kontext

**Princip:** Agent čte reálné zdroje, nevymýšlí si z paměti. *(Tomuhle se říká "číst, ne hádat" — vrátíme se k tomu v Levelu 3.)*

### Prompt 1c: Přidáme vizuální inspiraci (~2 min)

```
Podívej se na design-inspirace.png a zkopíruj `vystupy/01-obsah/`
do `vystupy/01-design/`. V nové složce uprav stránku tak, aby co
nejvíc odpovídala tomu, co vidíš na obrázku. Převezmi z něj
všechno, co jde — barevnou paletu, typografii, layout, tvary, styl
tlačítek, spacing, a pokud tam vidíš logo nebo ikony, zkus je napodobit
nebo vytvořit v podobném stylu. Cílem je, aby výsledek vypadal jako
variace té stránky z obrázku, ne jen vzdálená inspirace.
```

**Co pozorujete:**
- Agent analyzuje obrázek — Claude Code je multimodální, vidí obrázky, ne jen text
- Design se změní — barvy, layout, typografie odpovídají inspiraci
- Obsah zůstává, mění se jen vizuál

**Princip:** Kontext nejsou jen texty. Obrázky, screenshoty, diagramy — agent vidí všechno.

### Prompt 2: Web search / grounding (~3 min)

```
Vezmi stránku z `vystupy/01-design/` a zkopíruj ji do `vystupy/02-trendy/`.
Tam se podívej, co jsou aktuální trendy v designu osobních stránek v roce 2026
(použij web search) a přidej jednu sekci, která takovému trendu odpovídá
a ladí se zbytkem stránky. Napiš komentář, odkud jsi trend vzal.
Původní složku nech beze změny.
```

**Co pozorujete:**
- Agent hledá na webu — reálná data, ne paměť z tréninku
- Přidává sekci s odkazem na zdroj

**Poznámka:** Claude Code má přístup k webovému vyhledávání nativně — žádný plugin není potřeba.

### Prompt 3: Samooprava + povolení (~3 min)

```
Zkopíruj poslední složku z `vystupy/` do `vystupy/03-oprava/`.
Otevři stránku z `vystupy/03-oprava/` v prohlížeči a zkontroluj,
že všechno funguje. Pokud najdeš chybu, oprav ji přímo v této složce.
```

**Co pozorujete:**
- Agent chce spustit příkaz (otevřít prohlížeč) — **zeptá se na povolení**
- Vy odpovíte `y` (povolit) nebo `n` (odmítnout)
- Pokud najde chybu — opraví ji sám a zkusí znovu

**Princip:** Claude Code nemění nic na vašem počítači bez vašeho souhlasu.

### Prompt 4: Iterace s plánem (~4 min)

Tenhle krok ukážeme ve **dvou fázích** — nejdřív necháme agenta sestavit plán,
pak teprve začne sahat na kód. Před prvním promptem přepněte do **plan mode**
stiskem `Shift+Tab` (v terminálu uvidíte `⏸ plan mode on`).

**Fáze A — návrh plánu:**

```
Zkopíruj `vystupy/03-oprava/` do `vystupy/04-iterace/`.
V téhle nové složce chci přidat sekci "Co dělám" se třemi kartami
a přepnout celou stránku do tmavého režimu.

Ještě nic neměň — navrhni plán: jaké soubory upravíš, jaké barvy
použiješ pro dark mode, jak budou karty vypadat. Počkej na mé schválení.
```

Projděte si plán. Pokud chcete něco upravit (jiné barvy, jiný počet karet,
jiná struktura), napište to v další zprávě — agent plán přepracuje.

**Fáze B — provedení:**

Jakmile jste s plánem spokojení, stiskněte `Shift+Tab` pro odchod z plan mode
(nebo zvolte *"Yes, and auto-accept edits"*) a napište:

```
Super, jdi na to podle plánu.
```

**Co pozorujete:**
- Plan mode zabrání agentovi dělat změny, dokud plán neschválíte
- Můžete iterovat na plánu bez toho, aby vznikaly zbytečné soubory
- Agent si pamatuje kontext — ví, co na stránce už je
- Ve fázi B doplňuje existující projekt podle odsouhlaseného plánu

**Princip:** U složitějších změn je levnější opravit plán než opravovat kód.
Plan mode je vaše pojistka proti tomu, že agent vyrazí špatným směrem.

## Anatomie agentovy práce

Právě jste viděli všechny fáze v akci. Pojďme si je pojmenovat:

1. **Thinking** — agent přemýšlí o úkolu, plánuje strukturu a postup. Vidíte to v terminálu.
2. **Autonomní tvorba** — vytváří celé soubory najednou. HTML, CSS, JavaScript — cokoliv potřebuje.
3. **Samooprava** — pokud narazí na chybu, nezastaví se. Přečte hlášku, pochopí problém, opraví a zkusí znovu.
4. **Povolení** — než provede nebezpečnou akci (instalace, smazání, spuštění příkazu), zeptá se vás. Konečné rozhodnutí je vždy na vás.
5. **Výsledek** — hotový projekt ve vaší složce, připravený k otevření v prohlížeči.

## Kontrola výstupu — vždy se podívejte, co vzniklo

Claude Code je mocný, ale není neomylný. Než budete pokračovat, **vždy si projděte výsledek**:

| Co kontrolovat | Jak |
|---------------|-----|
| **Vizuální výsledek** | Otevřete stránku/soubor a projděte si ho |
| **Kroky agenta** | Přečtěte si výstup v terminálu — co vytvořil, co změnil |
| **Faktická správnost** | Pokud text obsahuje údaje nebo čísla, ověřte je |
| **Funkčnost** | Klikněte na tlačítka, vyplňte formuláře, otestujte odkazy |

> **Pravidlo:** Čím důležitější je výstup, tím důkladnější kontrola. Osobní stránka na zkoušku? Stačí pohled. Prezentace pro klienta? Detail po detailu.

## Klíčové poznatky

### Agent ≠ Chatbot
| Chatbot | Agent |
|---------|-------|
| Odpovídá na otázky | Plní úkoly |
| Potřebuje přesné instrukce | Domyslí si detaily |
| Výstup: text | Výstup: hotový projekt |
| Chyba = konec | Chyba = opraví sám |

### Kontext je král
- Claude Code vidí **celý váš projekt** — všechny soubory, strukturu, konfiguraci
- Navíc vidí obrázky (multimodální) a může hledat na webu
- Čím víc kontextu má, tím lepší výsledek

### Iterace je přirozená
- Nemusíte zadávat perfektní prompt napoprvé
- Začněte jednoduše, pak upřesňujte
- Každá iterace je rychlejší, protože agent už zná kontext

## Checkpoint

Po Level 1 byste měli chápat:
- [ ] Jak zadat úkol Claude Code
- [ ] Že agent pracuje s kontextem souborů (markdown, obrázky)
- [ ] Že agent umí hledat na webu pro aktuální informace
- [ ] Co znamenají fáze: thinking → tvorba → samooprava → povolení → výsledek
- [ ] Že agent se ptá na povolení před nebezpečnými akcemi
- [ ] Jak zkontrolovat a ověřit výstup agenta
- [ ] Jak iterovat a upřesňovat výsledek
- [ ] Rozdíl mezi chatbotem a agentem
