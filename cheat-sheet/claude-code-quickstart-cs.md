# Claude Code — Váš první půlhodina

Průvodce krok za krokem. Otevřete terminál a začněte.

## 1. Instalace (5 min)

### Předpoklady
- Node.js nainstalovaný ([nodejs.org](https://nodejs.org))
- Anthropic účet ([anthropic.com](https://www.anthropic.com))

### Instalace
```bash
npm install -g @anthropic-ai/claude-code
```

### Ověření
```bash
claude --version
```

## 2. První spuštění (2 min)

```bash
mkdir muj-projekt
cd muj-projekt
claude
```

Claude Code se spustí a provede vás přihlášením k Anthropic účtu.

## 3. Váš první úkol (5 min)

Zadejte do Claude Code:
```
Vytvoř jednoduchou webovou stránku s nadpisem "Ahoj světe"
a krátkým textem o mně. Jméno: [vaše jméno].
Použij moderní design.
```

Sledujte, jak agent:
1. Přemýšlí o úkolu
2. Vytváří soubory
3. Kontroluje výsledek

Otevřete `index.html` v prohlížeči — máte svou první stránku.

## 4. Iterace (5 min)

Upřesněte výsledek:
```
Přidej tmavé téma a sekci s třemi kartami o mých dovednostech.
```

```
Přidej kontaktní formulář na konec stránky.
```

```
Uprav design — chci víc bílého prostoru a větší nadpisy.
```

Každý prompt staví na předchozí práci. Claude Code si pamatuje kontext.

## 5. Zkuste další workflow (10 min)

### Analýza dat
```
Vytvoř ukázkový CSV soubor s prodejními daty (100 řádků).
Pak ho analyzuj a vytvoř HTML report s grafy.
```

### Automatizace
```
Vytvoř bash skript, který přejmenuje všechny .txt soubory
v aktuální složce na formát YYYY-MM-DD_nazev.txt
```

### Obsah
```
Napiš 3 LinkedIn příspěvky o produktivitě s AI.
Každý: hook, hlavní myšlenka, call to action.
Ulož jako samostatné soubory.
```

## 6. Nastavte si CLAUDE.md (3 min)

Vytvořte soubor `CLAUDE.md` v kořenu projektu:
```markdown
# Pravidla projektu

- Piš vždy česky
- Používej neformální profesionální tón
- Komentáře v kódu česky
- Responzivní design vždy
```

Od teď Claude Code v tomto projektu automaticky dodržuje vaše pravidla.

## Užitečné příkazy

| Příkaz | Co dělá |
|--------|---------|
| `claude` | Spustí Claude Code |
| `/help` | Zobrazí nápovědu |
| `/clear` | Vyčistí kontext |
| `/compact` | Zkomprimuje historii |
| `/cost` | Ukáže spotřebu |
| `/model` | Přepne model (Haiku / Sonnet / Opus) |
| `/exit` | Ukončí Claude Code |
| `Esc` | Přeruší aktuální akci agenta (neukončí) |
| `Ctrl+C` | Přeruší nebo ukončí z prázdného promptu |

## Tipy pro lepší výsledky

1. **Buďte konkrétní** — "landing page pro fitness studio" > "webová stránka"
2. **Definujte strukturu** — "sekce: hero, služby, ceník, kontakt"
3. **Iterujte** — začněte jednoduše, pak upřesňujte
4. **Dejte kontext** — "jsem marketér, potřebuji..." nebo "toto je pro klienta..."
5. **Nebojte se experimentovat** — nejhorší, co se stane, je špatný výsledek

## Další zdroje

- [Claude Code dokumentace](https://docs.anthropic.com/en/docs/claude-code)
- [Anthropic](https://www.anthropic.com)
- [Claude Code GitHub](https://github.com/anthropics/claude-code)
