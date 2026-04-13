# FAQ — Časté otázky

Odpovědi na nejčastější otázky účastníků webináře. Když se vás uživatel zeptá, vyberte relevantní sekci a odpovězte stručně. Nepřepisujte celou FAQ do chatu.

## Cena a plány

### Kolik Claude Code stojí?

Claude Code je zahrnutý v Claude předplatném od Anthropic. K dispozici jsou tři hlavní plány:

| Plán | Cena | Co získáte |
|------|------|-----------|
| **Claude Pro** | $20/měsíc | Claude Code přístup, základní limity, všechny modely |
| **Claude Max 5×** | $100/měsíc | 5× vyšší limity — pro pravidelné používání |
| **Claude Max 20×** | $200/měsíc | 20× kapacita — pro intenzivní každodenní práci |

Alternativně můžete platit přes API credits (platíte za spotřebu tokenů, žádné měsíční předplatné) — vhodné pro pokročilé uživatele, kteří chtějí plnou kontrolu nad náklady.

**Doporučení:** Začněte s Claude Pro ($20). Je to minimum pro Claude Code a zjistíte, jak moc ho používáte, než se rozhodnete o přechodu na vyšší plán.

### Je nějaká zkušební verze?

Ano — Claude Pro má 7denní free trial při první registraci. Stačí vytvořit účet na [claude.com](https://claude.com) a vybrat Pro plán.

### Platí se za každý prompt zvlášť?

Ne — předplatné pokrývá "rozumné používání" v rámci limitů plánu. Limity jsou definované jako "počet tokenů za 5hodinové okno" a resetují se automaticky. Pouze API credits jsou pay-per-use.

### Co když vyčerpám limit?

Claude Code vám to řekne a musíte počkat do resetu (max 5 hodin), nebo přejít na vyšší plán. Nikdy vám nepřijde účet za "překročení" — buď pracujete, nebo čekáte.

---

## Bezpečnost a data

### Co se děje s mým kódem / daty, když používám Claude Code?

Anthropic v rámci placených plánů **nepoužívá vaše data k tréninku modelů** (toto je klíčový rozdíl od některých free verzí jiných nástrojů). Vaše data jsou používána pouze ke zpracování vašich požadavků a pak zahozena.

### Můžu Claude Code pustit na citlivý projekt?

Záleží na tom, co "citlivý" znamená:
- **Kód s běžným business logikem:** ano, bez problému
- **Osobní údaje zákazníků, zdravotní data, finanční údaje:** jen pokud máte odpovídající plán (Enterprise nabízí HIPAA compliance, audit logy a další zajištění)
- **API klíče, hesla, tajné konfigurace:** nikdy je nevkládejte přímo do promptů — Claude Code může omylem ukázat jejich hodnoty v logu

**Zlaté pravidlo:** Pokud byste to poslali kolegovi mailem, můžete to dát Claude Code. Pokud ne, nedávejte.

### Co když Claude Code něco smaže / rozbije?

Claude Code se **ptá na povolení před každou riskantní akcí** — smazání souborů, instalace balíčků, spuštění příkazů. Vy rozhodujete, nic se neděje za vaším vědomím.

Zlaté pravidlo pro začátečníky: pracujte ve složkách, které mají git nebo backup. Pokud se něco pokazí, `git checkout .` to vrátí zpět.

### Vidí Anthropic mé soubory?

Claude Code posílá obsah souborů do Anthropic API pouze v rozsahu, který potřebuje k vašemu úkolu. Nikdy neposílá celý disk, nikdy neposílá soubory, o které ho nepožádáte. Logy obsahují jen to, co bylo součástí konverzace.

---

## Instalace

### `node --version` hlásí "command not found"

Node.js není nainstalovaný. Stáhněte ho z [nodejs.org](https://nodejs.org) (verze LTS, 18+). Po instalaci zavřete a znovu otevřete terminál, pak to zkuste znovu.

### `npm install -g @anthropic-ai/claude-code` hlásí permission error

Na Macu/Linuxu nepoužívejte `sudo` — způsobuje jiné problémy. Místo toho použijte [nvm](https://github.com/nvm-sh/nvm) pro správu Node.js verzí, nebo nativní installer:

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

### `claude` hlásí "command not found" po instalaci

Pravděpodobně npm nainstaloval Claude Code, ale jeho binárka není na PATH. Zkuste:
1. Zavřete a znovu otevřete terminál
2. Ověřte kde je `claude`: `which claude` (macOS/Linux) nebo `where claude` (Windows)
3. Pokud to nepomůže, použijte nativní installer z [claude.com](https://claude.com)

### Jak se přihlásím po spuštění `claude`

Při prvním spuštění Claude Code otevře prohlížeč se stránkou Anthropic, kde se přihlásíte. Po přihlášení prohlížeč zobrazí "úspěch" a terminál pokračuje.

### Windows mi hlásí chybu s WSL

Na Windows je doporučené použít WSL2 (Windows Subsystem for Linux). Stačí otevřít PowerShell jako admin a spustit `wsl --install`, pak restartovat počítač. Pak spusťte Claude Code uvnitř WSL.

Alternativně: použijte nativní Windows installer:
```powershell
irm https://claude.ai/install.ps1 | iex
```
Vyžaduje Git for Windows.

---

## Používání

### Claude Code mi jen "přemýšlí" a nic nedělá

Claude Code může přemýšlet nad složitějším úkolem 30–60 sekund. Pokud je to přes 2 minuty bez výstupu:
1. Zkontrolujte internetové připojení
2. Zkontrolujte status Anthropic: [status.anthropic.com](https://status.anthropic.com)
3. Pokud vše funguje, stiskněte `Esc` pro přerušení a zkuste prompt znovu

### Agent udělal něco jiného, než jsem chtěl/a

Je to normální — přesnost dosáhnete iterací, ne perfektním prvním promptem. Řekněte Claude Code co chcete jinak:
```
To není úplně ono — místo toho zkus [co chcete].
```

### Jak Claude Code opustím

Napište `/exit` nebo stiskněte `Ctrl+D`. Klávesa `Esc` pouze **přeruší** aktuální akci agenta, neukončí celý Claude Code.

### Co dělá `/clear`?

Vyčistí historii konverzace. Užitečné, když přecházíte na nový úkol a nechcete, aby starý kontext ovlivnil výsledek.

### Co dělá `/compact`?

Zkomprimuje historii dlouhé konverzace, aby se vešla do kontextového okna. Užitečné při delších sessions, kdy si Claude Code "zaplnil paměť".

### Můžu vrátit změny, které agent udělal?

Pokud pracujete v git repozitáři: ano, `git checkout .` vrátí všechny neuložené změny. `git reset --hard HEAD` vrátí i commity (opatrně).

Pokud ne v git: agent má backup v /tmp, ale není na to stoprocentní spoleh. **Vždy pracujte v git repozitáři nebo se zálohou.**

---

## Modely a výběr

### Sonnet vs Opus — který použít?

| Model | Kdy použít |
|-------|-----------|
| **Sonnet** | 90 % úkolů — rychlejší, levnější, pro běžnou práci |
| **Opus** | Složité úkoly, velké refactoring, když Sonnet "nestíhá" myslet |
| **Haiku** | Velmi rychlé a jednoduché úkoly (čtení, prohledávání, jednoduché úpravy) |

**Default:** Sonnet. Přepnete příkazem `/model` v Claude Code. Pro většinu účastníků webináře bude Sonnet naprosto stačit.

### Jak se přepne model?

V Claude Code napište `/model` a vyberte z nabídnutých možností.

---

## Omezení a kdy Claude Code nepoužívat

### Co Claude Code neumí dobře?

- **Kreativní psaní vysoké úrovně** — je dobré na strukturovaný obsah (emaily, reporty, LinkedIn posty), ale na poezii nebo umělecké texty jsou lepší jiné nástroje
- **Obrazová práce** — Claude Code generuje kód a text, ne obrázky
- **Real-time data bez MCP** — bez web search MCP nevidí aktuální informace z internetu
- **Velmi specializované znalosti** — medicína, právo, finance: vždy konzultujte odborníka, neberte výstup jako hotovou radu

### Kdy Claude Code NEPOUŽÍVAT

- **Citlivé osobní údaje zákazníků** bez Enterprise plánu
- **Produkční databáze** bez testovacího prostředí
- **Právní dokumenty** bez kontroly odborníka
- **Úkoly, kde potřebujete 100% přesnost** — agent může udělat chyby, vždy kontrolujte výstup

---

## Po webináři

### Co teď mám dělat?

1. Otevřete `cheat-sheet/claude-code-quickstart-cs.md` — ten vás provede "prvními 30 minutami"
2. Zkuste jeden reálný úkol ze své práce
3. Přidejte se do Circle komunity (odkaz dostanete v závěru webináře)
4. Vytvořte si CLAUDE.md pro svůj pracovní projekt

### Kam jít pro další učení?

- **Cheat sheet** v tomto repozitáři
- **Oficiální dokumentace:** [code.claude.com/docs](https://code.claude.com/docs)
- **Circle komunita** — sdílejte své projekty a ptejte se
- **Další webináře a masterclassy** na [aibility.cz](https://aibility.cz)

### Můžu si najmout mentora nebo konzultanta?

Ano — Aibility nabízí individuální a firemní konzultace. Informace najdete na [aibility.cz](https://aibility.cz) nebo se ptejte Petry.
