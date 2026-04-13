# Časté otázky

Odpovědi na to, na co se účastníci webináře ptají nejčastěji. Když se vás někdo zeptá, najděte relevantní sekci a odpovězte stručně. **Nekopírujte** celý soubor do chatu — vytáhněte jen to, co se ptal.

## Cena a plány

### Kolik Claude Code stojí?

Claude Code je součástí předplatného Claude od Anthropic. Jsou tři hlavní plány:

| Plán | Cena | Co za to máte |
|------|------|---------------|
| **Claude Pro** | $20/měsíc | Přístup k Claude Code, základní limity, všechny modely |
| **Claude Max 5×** | $100/měsíc | Pětinásobné limity — pro pravidelné používání |
| **Claude Max 20×** | $200/měsíc | Dvacetinásobná kapacita — pro každodenní intenzivní práci |

Alternativa: platit přes API credits (účtuje se za spotřebu tokenů, žádné měsíční předplatné). Hodí se pokročilým, kteří chtějí mít náklady pod plnou kontrolou.

**Doporučení:** Začněte s Claude Pro za $20. Je to minimum pro Claude Code a po pár týdnech zjistíte, jak moc ho opravdu používáte. Pak se můžete posunout výš.

### Je nějaká zkušební verze zdarma?

Ano — Claude Pro má při první registraci sedmidenní trial. Stačí si založit účet na [claude.com](https://claude.com) a zvolit Pro plán.

### Platí se za každý prompt zvlášť?

Ne. Předplatné pokrývá "rozumné používání" v rámci limitů plánu. Limity jsou definované jako počet tokenů za pětihodinové okno a resetují se samy. Za překročení vám nikdy nepřijde účet — buď pracujete, nebo čekáte, až se okno obnoví.

Jen u API credits se účtuje doopravdy podle spotřeby.

### Co když vyčerpám limit?

Claude Code vám to řekne a musíte počkat do resetu (maximálně pět hodin), nebo se přepnout na vyšší plán. Nikdy vám za to nepřijde účet — Anthropic prostě zastaví, dokud se limit neobnoví.

---

## Bezpečnost a data

### Co se stane s mým kódem a daty, když používám Claude Code?

Anthropic u placených plánů **vaše data nepoužívá k tréninku modelů**. Tohle je důležitý rozdíl proti některým free verzím jiných AI nástrojů. Vaše data jdou k Anthropicu jen proto, aby Claude Code mohl splnit váš požadavek, a pak se zahodí.

### Můžu na Claude Code pustit citlivý projekt?

Záleží na tom, jak moc je citlivý:

- **Běžný pracovní kód a texty:** Ano, žádný problém
- **Osobní údaje klientů, zdravotní data, finanční údaje:** Jen když máte plán, který to pokrývá. Enterprise nabízí HIPAA compliance, audit logy a další záruky
- **Hesla, API klíče, tajná nastavení:** **Nikdy** je nevkládejte přímo do promptů — Claude Code by je mohl omylem zmínit v logu

**Jednoduché pravidlo:** Když byste to klidně poslali kolegovi mailem, můžete to dát i Claude Code. Když ne, nedávejte.

### Co když Claude Code něco smaže nebo rozbije?

Claude Code se **před každou riskantní akcí ptá na povolení** — mazání souborů, instalace balíčků, spouštění příkazů. Vy rozhodujete. Nic se neděje za vašimi zády.

Nejlepší zlozvyk pro začátečníky: pracujte ve složkách, které jsou v gitu nebo mají zálohu. Když se něco rozbije, `git checkout .` vrátí všechno zpátky.

### Vidí Anthropic mé soubory?

Claude Code posílá obsah souborů na Anthropic API jen v takovém rozsahu, jaký potřebuje k vašemu zadání. Neposílá celý disk a neposílá soubory, o které ho nepožádáte. V logu zůstává jen to, co bylo součástí konverzace.

---

## Instalace

### `node --version` mi hlásí "command not found"

Node.js ještě nemáte nainstalovaný. Stáhněte ho z [nodejs.org](https://nodejs.org) — zvolte LTS verzi (18 nebo novější). Po instalaci **zavřete terminál a otevřete ho znovu**, jinak stará session neuvidí nový příkaz. Pak zkuste `node --version` znovu.

### `npm install -g @anthropic-ai/claude-code` hlásí permission error

Na Macu a Linuxu **nepoužívejte `sudo`** — způsobuje jiné problémy, které se špatně ladí. Místo toho buď použijte [nvm](https://github.com/nvm-sh/nvm) (správce verzí Node.js), nebo nativní instalátor:

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

Ten nevyžaduje npm vůbec.

### `claude` hlásí "command not found" hned po instalaci

Pravděpodobně proběhla instalace v pořádku, ale binárka Claude Code není na PATH. Zkuste:

1. Zavřete a znovu otevřete terminál (nejčastější řešení)
2. Ověřte, kde Claude Code vlastně je: `which claude` (macOS/Linux) nebo `where claude` (Windows)
3. Když to nepomůže, zkuste nativní instalátor z [claude.com](https://claude.com) místo npm

### Jak se přihlásím po prvním spuštění?

Při prvním spuštění Claude Code otevře prohlížeč se stránkou Anthropic. Tam se přihlásíte (nebo zaregistrujete), potvrdíte autorizaci, a prohlížeč se přepne na "hotovo". Terminál mezitím sám ví, že jste prošli, a pokračuje.

### Na Windows mi hlásí chybu s WSL

Na Windows je doporučené rozjet Claude Code pod **WSL2** (Windows Subsystem for Linux). Otevřete si PowerShell jako správce a spusťte:

```powershell
wsl --install
```

Pak počítač restartujte a Claude Code spouštějte uvnitř WSL.

Alternativa pro ty, kdo WSL nechtějí: nativní Windows instalátor.

```powershell
irm https://claude.ai/install.ps1 | iex
```

Vyžaduje Git for Windows.

---

## Používání

### Claude Code jen "přemýšlí" a nic nedělá

Claude Code si může nad složitějším úkolem přemýšlet třicet vteřin až minutu. Nad komplikovanějšími projekty i delší. Když to ale trvá víc než dvě minuty bez jakéhokoli výstupu:

1. Zkontrolujte internet
2. Mrkněte na status Anthropic: [status.anthropic.com](https://status.anthropic.com)
3. Pokud všechno vypadá v pořádku, stiskněte `Esc` (přeruší to aktuální akci) a zkuste prompt znovu

### Agent udělal něco jiného, než jsem chtěl/a

To je úplně normální. Přesnost se nedosahuje perfektním prvním promptem, ale iterací. Řekněte Claude Code, co byste chtěli místo toho:

```
Ne tohle — místo toho zkus [co chcete].
```

Claude Code si pamatuje kontext, takže si nemusíte znovu vysvětlovat od začátku.

### Jak Claude Code opustím?

Napište `/exit` nebo stiskněte `Ctrl+D`. Klávesa `Esc` jen **přeruší** aktuální akci agenta — neukončí celé Claude Code.

### Co dělá `/clear`?

Vymaže historii aktuální konverzace. Hodí se, když začínáte nový úkol a nechcete, aby starý kontext ovlivňoval výsledek.

### Co dělá `/compact`?

Zkomprimuje historii dlouhé konverzace, aby se vešla do kontextového okna. Hodí se, když jste v delší session a máte pocit, že Claude Code začíná "zapomínat" staré věci.

### Můžu vrátit změny, které agent udělal?

V git repozitáři ano: `git checkout .` vrátí všechny neuložené změny. `git reset --hard HEAD` vrátí i commity — ale tohle používejte opatrně, o poslední commity byste přišli.

Když nejste v gitu, agent obvykle má zálohu v `/tmp`, ale není to stoprocentní jistota. **Nejlepší pravidlo:** pracujte vždy v git repozitáři nebo alespoň se zálohou.

---

## Modely — který zvolit?

### Sonnet, Opus, Haiku — který použít?

| Model | Kdy se hodí |
|-------|-------------|
| **Haiku** | Velmi jednoduché věci — rychlé přečtení souboru, drobné úpravy, vyhledávání |
| **Sonnet** | 90 % běžné práce — rychlý, dost chytrý, levnější |
| **Opus** | Komplikované úkoly, velké refactoring, když Sonnet přestává stíhat |

**Výchozí model je Sonnet.** Pro většinu účastníků webináře bude úplně stačit. Když vám nestačí, přepnete se.

### Jak se přepne model?

V Claude Code napíšete `/model` a vyberete si.

---

## Kdy Claude Code nepoužívat

### Co Claude Code neumí dobře?

- **Kreativní psaní vysoké úrovně** — umí pěkně strukturovaný obsah (emaily, reporty, LinkedIn příspěvky), ale poezii nebo umělecké texty radši nechte jiným
- **Obrazová tvorba** — Claude Code píše kód a text, ne obrázky. Na obrázky použijte jiný nástroj
- **Aktuální data bez web search MCP** — bez webového MCP nevidí, co je na internetu teď
- **Vysoce odborná znalost** — medicína, právo, finance: konzultujte s odborníkem, výstup berte jako hrubý první nápad, ne jako hotovou radu

### Kdy Claude Code radši vůbec nepoužít

- **Citlivé osobní údaje klientů**, pokud k tomu nemáte Enterprise plán
- **Produkční databáze** bez testovacího prostředí
- **Právní texty** bez kontroly odborníka
- **Úkoly, kde potřebujete stoprocentní přesnost** — agent může chybovat, výstup si vždycky zkontrolujte

---

## Co dělat po webináři

### Dobře — a teď co?

1. Otevřete si `cheat-sheet/claude-code-quickstart-cs.md` — je to průvodce prvních třiceti minut
2. Vyberte si jeden reálný úkol ze své práce a zkuste ho
3. Přidejte se do naší Circle komunity (odkaz dostanete v závěru webináře)
4. Napište si CLAUDE.md pro svůj pracovní projekt

### Kam se podívat pro další učení?

- **Cheat sheet** v tomhle repozitáři
- **Oficiální dokumentace:** [code.claude.com/docs](https://code.claude.com/docs)
- **Circle komunita** — sdílejte projekty a ptejte se
- **Další webináře a kurzy** na [aibility.cz](https://aibility.cz)

### Můžu si najmout konzultanta nebo mentora?

Ano — Aibility dělá individuální i firemní konzultace. Víc najdete na [aibility.cz](https://aibility.cz), nebo napište Petře.
