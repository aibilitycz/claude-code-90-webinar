# Level 1: První úkol

**Délka:** 20 minut
**Cíl:** Účastníci uvidí, jak Claude Code přijme úkol, analyzuje ho, naplánuje kroky a autonomně vytvoří kompletní projekt.

## Zadání prvního úkolu

### Příprava
```bash
mkdir muj-prvni-projekt
cd muj-prvni-projekt
claude
```

### První prompt
```
Vytvoř mi osobní webovou stránku s mým jménem a kontaktem.
Jméno: [vaše jméno]
Email: [váš email]
Popis: [krátký popis, co děláte]
```

### Co se stane:
1. Claude Code si přečte zadání
2. Naplánuje strukturu projektu
3. Vytvoří soubory (HTML, CSS, případně JS)
4. Zkontroluje, zda vše funguje

## Anatomie agentovy práce

### Fáze 1: Thinking (Uvažování)
Claude Code nejprve přemýšlí o úkolu:
- Co přesně potřebuje vytvořit?
- Jakou strukturu zvolit?
- Jaké technologie použít?

> Tuto fázi vidíte v terminálu — agent vám ukazuje, jak přemýšlí.

### Fáze 2: Autonomní tvorba souborů
Agent začne tvořit — a tady je ta magie:
- Vytváří **celé soubory** najednou, ne řádek po řádku
- Vytváří **správnou strukturu** — HTML, CSS, obrázky na správných místech
- **Rozumí kontextu** — ví, co patří kam

Příklad výstupu:
```
Vytvářím strukturu projektu:
  index.html    — hlavní stránka
  styles.css    — styly a design
  script.js     — interaktivní prvky
```

### Fáze 3: Self-correction (Samooprava)
Tohle je klíčový rozdíl oproti chatbotům:
- Pokud Claude Code narazí na chybu, **nezastaví se**
- Přečte chybovou hlášku, pochopí problém
- Opraví kód a zkusí znovu
- Celý cyklus proběhne automaticky — vy jen sledujete

### Fáze 3.5: Povolení — agent se ptá, než udělá něco důležitého

Důležitý detail: než Claude Code provede potenciálně nebezpečnou akci, **zeptá se vás na povolení**:

```
Claude Code chce spustit příkaz: npm install chart.js
Povolit? [y/N]
```

```
Claude Code chce smazat soubor: old-backup.html
Povolit? [y/N]
```

Můžete:
- **Povolit** (`y`) — agent pokračuje
- **Odmítnout** (`n`) — agent najde jinou cestu

> **Proč je to důležité:** Claude Code skutečně mění soubory na vašem počítači. Bezpečnostní kontrola zajišťuje, že nikdy neudělá něco, co nechcete. Konečné rozhodnutí je **vždy na vás**.

### Fáze 4: Výsledek
- Hotový projekt ve vaší složce
- Můžete otevřít v prohlížeči a vidět výsledek
- Vše je připravené k dalším úpravám

## Kontrola výstupu — vždy se podívejte, co vzniklo

Claude Code je mocný, ale není neomylný. Než budete pokračovat, **vždy si projděte výsledek**:

| Co kontrolovat | Jak |
|---------------|-----|
| **Vizuální výsledek** | Otevřete stránku/soubor a projděte si ho |
| **Kroky agenta** | Přečtěte si výstup v terminálu — co vytvořil, co změnil |
| **Faktická správnost** | Pokud text obsahuje údaje nebo čísla, ověřte je |
| **Funkčnost** | Klikněte na tlačítka, vyplňte formuláře, otestujte odkazy |

> **Pravidlo:** Čím důležitější je výstup, tím důkladnější kontrola. Osobní stránka na zkoušku? Stačí pohled. Prezentace pro klienta? Detail po detailu.

## Iterace — upřesňování za chodu

Důležité pochopení: s Claude Code **nemusíte vědět vše předem**. Můžete iterovat:

### Příklad iterace:
```
Přidej sekci "Moje projekty" se třemi kartami.
Každá karta má název, popis a odkaz.
Použij tmavé barvy — dark mode.
```

Claude Code:
- Přečte existující soubory
- Pochopí aktuální strukturu
- Přidá novou sekci **tak, aby pasovala** do existujícího designu
- Upraví styly pro dark mode

### Další iterace:
```
Přidej animace při scrollování — karty ať se plynule objevují.
```

```
Přidej kontaktní formulář na konec stránky.
```

Každá iterace staví na předchozí práci. Claude Code si pamatuje kontext celého projektu.

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
- Díky tomu dělá informovaná rozhodnutí
- Čím víc kontextu má, tím lepší výsledek

### Iterace je přirozená
- Nemusíte zadávat perfektní prompt napoprvé
- Začněte jednoduše, pak upřesňujte
- Každá iterace je rychlejší, protože agent už zná kontext

## Checkpoint

Po Level 1 byste měli chápat:
- [ ] Jak zadat úkol Claude Code
- [ ] Co znamenají jednotlivé fáze agentovy práce
- [ ] Že agent se sám opravuje, když narazí na problém
- [ ] Že agent se ptá na povolení před nebezpečnými akcemi
- [ ] Jak zkontrolovat a ověřit výstup agenta
- [ ] Jak iterovat a upřesňovat výsledek
- [ ] Rozdíl mezi chatbotem a agentem
