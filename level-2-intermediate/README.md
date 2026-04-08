# Level 2: Showcase workflow

**Délka:** 30 minut
**Cíl:** Účastníci uvidí různorodé workflow — od tvorby webových aplikací po výzkum, automatizaci a tvorbu obsahu. Pochopí šíři možností Claude Code.

## Workflow 1: Webová aplikace od nuly (7 min)

### Demo — lektor vybere jednu z variant:

#### Varianta A: Osobní portfolio
```
Vytvoř moderní osobní portfolio stránku.
Sekce: O mně, Projekty (3 karty), Kontakt.
Design: minimalistický, tmavé téma, plynulé animace.
Responzivní — musí fungovat na mobilu.
```

#### Varianta B: Business landing page
```
Vytvoř landing page pro fiktivní SaaS produkt "TaskFlow".
Sekce: Hero s CTA, 3 klíčové funkce s ikonami, ceník (3 plány), FAQ, footer.
Design: profesionální, světlé téma, modro-bílá paleta.
```

#### Varianta C: Interaktivní nástroj
```
Vytvoř kalkulačku návratnosti investic (ROI calculator).
Uživatel zadá: počáteční investice, měsíční výnosy, doba v měsících.
Zobraz výsledek jako graf a tabulku.
Přidej vysvětlení výpočtu.
```

### Co ukázat publiku:
- Celý cyklus od promptu po hotový produkt
- Jak Claude Code volí technologie (HTML/CSS/JS, nebo framework)
- Preview výsledku v prohlížeči
- Jednu iteraci: "Změň barvy / přidej sekci / uprav text"

## Workflow 2: Výzkum a analýza (7 min)

### Demo — zpracování dat

```
Analyzuj tento CSV soubor s prodejními daty.
Vytvoř přehledný HTML report s:
- Celkové tržby po měsících (graf)
- Top 5 produktů podle prodeje
- Trend za poslední rok
- Doporučení na základě dat
```

### Alternativní demo — rešerše
```
Vytvoř strukturovaný brief o trendu "AI agenti v podnikání".
Struktura: Definice, Aktuální stav (2026), Klíčové nástroje,
Příležitosti pro malé firmy, Rizika, Doporučení.
Formát: profesionální dokument v Markdown.
```

### Co ukázat publiku:
- Claude Code umí pracovat s daty (CSV, JSON, Excel přes MCP)
- Vytváří vizualizace a grafy
- Generuje strukturované reporty
- Kombinuje analýzu s doporučeními

## Workflow 3: Automatizace a obsah (7 min)

### Demo — automatizace

```
V této složce je 50 fotek z výletu.
Přejmenuj je podle data vytvoření ve formátu YYYY-MM-DD_001.jpg
Vytvoř HTML galerii s náhledy a lightbox efektem.
Seřaď podle data.
```

### Alternativní demo — tvorba obsahu

```
Vytvoř sérii 5 LinkedIn příspěvků o produktivitě s AI nástroji.
Každý příspěvek:
- Hook (první věta, která zaujme)
- Hlavní myšlenka (3-4 věty)
- Call to action
Styl: profesionální ale přístupný, žádný cringe.
Ulož jako samostatné soubory.
```

### Co ukázat publiku:
- Claude Code zvládá hromadné operace se soubory
- Generuje obsah v požadovaném stylu a formátu
- Pracuje s existujícími soubory (ne jen tvoří nové)
- Automatizuje opakující se práci

## Workflow 4: Co dalšího umí (9 min)

Rychlý přehled — 2 minuty na každé:

### Debugging a oprava chyb
```
V tomhle projektu nefunguje kontaktní formulář.
Najdi problém a oprav ho.
```
- Claude Code přečte kód, najde chybu, opraví ji
- Ukázka diagnostického procesu agenta

### Práce s Git
```
Podívej se na historii tohoto projektu.
Co se změnilo v posledním týdnu?
Vytvoř shrnutí změn.
```
- Claude Code rozumí verzování
- Může commitovat, vytvářet branches, analyzovat historii

### Dokumentace
```
Projdi tento projekt a vytvoř kompletní README.md.
Zahrň: co projekt dělá, jak ho nainstalovat, jak ho používat.
```
- Automatická tvorba dokumentace z existujícího kódu
- Pochopení struktury projektu

### Refactoring
```
Tento kód je nepřehledný.
Vylepši strukturu, přidej komentáře, rozděl do logických celků.
```
- Claude Code chápe best practices
- Vylepšuje kód bez změny funkcionality

## Klíčové poznatky

### Jeden nástroj, desítky workflow
Claude Code není specializovaný na jednu věc. Můžete ho použít pro:
- Tvorbu webů a aplikací
- Analýzu dat a reporty
- Automatizaci souborových operací
- Generování obsahu
- Debugging a opravy
- Dokumentaci
- A mnohem víc...

### Kvalita promptu = kvalita výsledku
- Buďte konkrétní: "moderní design" vs "minimalistický design, tmavé téma, plynulé animace"
- Definujte strukturu: "sekce: hero, funkce, ceník, FAQ"
- Specifikujte formát: "HTML report s grafy" vs "report"

### Iterujte, neoptimalizujte prompt
- Lepší je zadat jednoduchý prompt a pak upřesnit
- Než strávit 10 minut formulováním "perfektního" promptu

## Checkpoint

Po Level 2 byste měli chápat:
- [ ] Šíři workflow, které Claude Code zvládá
- [ ] Jak formulovat prompty pro různé typy úkolů
- [ ] Že Claude Code pracuje s existujícími soubory (nejen tvoří nové)
- [ ] Principy efektivního zadávání úkolů
