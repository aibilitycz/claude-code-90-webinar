# Příprava pro Level 3 — setup guide

Tento soubor je **pro lektora** — projděte ho den před webinářem, ať je na živém demu všechno připojené a ověřené.

---

## 1. Kiwi MCP (vyhledávání letů)

### Co to je

Vzdálený MCP server provozovaný Kiwi.com. Žádná lokální instalace, žádný API klíč. Server běží na `mcp.kiwi.com`.

### Instalace

```bash
claude mcp add --transport http kiwi-com-flight-search https://mcp.kiwi.com
```

### Ověření

```bash
claude mcp list
```

Měli byste vidět `kiwi-com-flight-search` se statusem `connected`. Nebo uvnitř session: `/mcp`.

### Test

```
Najdi přímý let Praha → Lisabon na příští pátek, zpáteční v neděli, ekonomická třída, do 12000 Kč.
```

Pokud vrátí výsledky s cenami — funguje.

### Troubleshooting

- **"Tool not found"** → restartujte Claude Code (`/exit` + `claude`)
- **Timeout** → `mcp.kiwi.com` dočasně nedostupný, zkuste za minutu
- **Žádné výsledky** → zkuste jiný termín nebo trasu

---

## 2. TypeUI design skill (vizuální styl)

### Co to je

Design skill z [typeui.sh](https://www.typeui.sh/design-skills) — markdown soubor, který agentovi říká, jak má stavět UI. 57 stylů k dispozici.

### Instalace

```bash
npx typeui.sh pull bento
```

Vytvoří `.claude/skills/bento/SKILL.md`.

### Ověření

```bash
ls .claude/skills/bento/SKILL.md
```

Soubor existuje → funguje. Skill se automaticky načte při startu Claude Code v tomhle projektu.

### Optional: druhý styl pro bonus demo

```bash
npx typeui.sh pull glassmorphism
```

Pokud zbude čas na konci L3, swap na jiný styl živě.

### Troubleshooting

- **"npx: command not found"** → Node.js není v PATH, zkuste `which node`
- **Skill se nenačítá** → ověřte, že jste ve správném projektu (`pwd`)

---

## 3. Subagent — `foto-detektiv` (tvoří se živě v demu)

### Co to je

Subagent v `.claude/agents/<jméno>.md`. Hlavní Claude Code si ho sám zavolá podle `description`. Foto-detektiv analyzuje wishlist fotky ve stylu Sherlocka Holmese, má fialový tag a začíná ASCII bannerem s lupou.

Prompt pro živou tvorbu je v `prompty.md` krok 1.

### Ověření před webinářem

Pusť prompt z kroku 1 v prompty.md → Claude Code by měl vytvořit `.claude/agents/foto-detektiv.md` s frontmatterem (`name`, `description`, `tools`, `color: purple`) a tělem. Pak v repu:

```bash
rm -f .claude/agents/foto-detektiv.md
```

Aby demo bylo skutečně živé. **V repu žádná šablona nezůstává** — jediný fallback je předtočený screencast (viz sekce 8).

---

## 4. Slash command — `/pohlednice` (tvoří se živě v demu)

### Co to je

Vlastní slash command v `.claude/commands/pohlednice.md`. Po buildu dashboardu napíšeš `/pohlednice` a Claude napíše hravou pohlednici z destinace s drobnou lží prozrazenou v PS.

Prompt pro živou tvorbu je v `prompty.md` krok 4.

### Ověření před webinářem

Pusť prompt z kroku 4 → vznikne `.claude/commands/pohlednice.md`. V Claude Code napiš `/` a měl bys vidět `/pohlednice` v nabídce. Pak:

```bash
rm -f .claude/commands/pohlednice.md
```

**V repu žádná šablona nezůstává.**

---

## 5. Hook — automatické otevření + hlas (tvoří se živě v demu)

### Co to je

Hook je automatická akce na události. `PostToolUse` s matcherem `Write` se spouští pokaždé, když agent zapíše soubor — spolehlivější než grep transcriptu.

Prompt pro živou tvorbu je v `prompty.md` krok 2.

### Ověření před webinářem

Pusť prompt z kroku 2 → vznikne `.claude/settings.json`. Zapiš libovolný HTML do `vystupy/` a ověř, že se otevře prohlížeč + Mac promluví. Pak:

```bash
rm -f .claude/settings.json
```

**V repu žádná šablona nezůstává.** Tohle je očekávaná finální podoba souboru (jen pro referenci, když agent zajde na scestí):

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write",
        "hooks": [
          {
            "type": "command",
            "command": "f=$(jq -r '.tool_input.file_path'); case \"$f\" in *vystupy/*.html) open \"$f\"; say -v Zuzana 'Dashboard je připraven, koukej do prohlížeče' ;; esac"
          }
        ]
      }
    ]
  }
}
```

### Co to dělá

Kdykoli agent zapíše HTML do `vystupy/`:
1. Otevře ho v prohlížeči (`open`)
2. Český hlas **Zuzana** to oznámí (`say -v Zuzana …`) — slyšitelné v reproduktorech Zoomu

Pro jiné soubory hook zůstane potichu.

### Ověření

1. V Claude Code napište: `Vytvoř vystupy/test.html s nadpisem "Test".`
2. Po dokončení by se měl otevřít prohlížeč + Mac promluvit.

### Troubleshooting

- **Prohlížeč se neotevře** → cesta v `tool_input.file_path` je absolutní, `open` to zvládne; ověř, že soubor skutečně vznikl.
- **Mac nemluví** → otestuj `say -v Zuzana test` v terminálu. Pokud hlas chybí: System Settings → Accessibility → Spoken Content → System Voice → Manage Voices → Zuzana (Czech).
- **Hook se nespustí** → ověř JSON: `jq . .claude/settings.json`
- **Chceš bez zvuku** → odeber `; say -v Zuzana …` z příkazu, zachová jen `open`.

### Po webináři

Pokud nechceš, aby se prohlížeč otvíral po každém HTML, smaž `PostToolUse` blok z `.claude/settings.json`.

---

## 6. Wishlist fotky

### Co potřebujete

2–3 fotky Lisabonu (nebo jiné destinace) ve složce `demo-files/wishlist/`:

| Soubor | Co na fotce |
|--------|-------------|
| `wish1.jpg` | Praia da Ursa — skalní jehla v Atlantiku |
| `wish2.jpg` | Plážový bar na Costa da Caparica — palmy, dřevo |
| `wish3.jpg` | Maják Santa Marta v Cascais — bílo-červený |
| `wish4.jpg` | Surf na Carcavelos — čistá levá vlna |
| `wish5.webp` | Pastéis de nata se skořicí |

### Kde vzít fotky

- Vlastní fotky z dovolené (ideální — autentické)
- Unsplash: [unsplash.com/s/photos/lisbon](https://unsplash.com/s/photos/lisbon) (licence free)
- Uložit do `level-3-advanced/demo-files/wishlist/`

### wishlist.md

Soubor `demo-files/wishlist.md` už je připravený — popis ke každé fotce. Upravte podle skutečných fotek.

---

## 7. Kontrolní seznam — den před webinářem

### Služby
- [ ] `claude mcp list` → `kiwi-com-flight-search` connected
- [ ] Test Kiwi: "Najdi let Praha → Lisabon" → vrací lety s cenami
- [ ] `.claude/skills/bento/SKILL.md` existuje (jediný předpřipravený artefakt)
- [ ] `.claude/agents/`, `.claude/commands/`, `.claude/settings.json` **NEEXISTUJÍ** v repu — tvoří se živě v demu
- [ ] Zkušebně pusť prompty z kroků 1, 2 a 4 v `prompty.md` → ověř, že všechny tři artefakty vzniknou správně. Pak je smaž: `rm -rf .claude/agents .claude/commands .claude/settings.json`
- [ ] `say -v Zuzana test` v terminálu funguje

### Soubory
- [ ] `demo-files/CLAUDE.md` — travel preferences + "číst, ne hádat"
- [ ] `demo-files/wishlist/` — 2–3 fotky destinace
- [ ] `demo-files/wishlist.md` — popis ke každé fotce
- [ ] `demo-files/prompty.md` — všechny prompty připravené
- [ ] Složka `vystupy/` existuje (pro výstup dashboardu)

### Dry run
- [ ] Spustit hlavní prompt celý → agent dokončí do 90 sekund
- [ ] Hook otevře prohlížeč + notifikace vyskočí
- [ ] Dashboard vypadá dobře v prohlížeči

---

## 8. Fallback plán

| Co selže | Co udělat |
|----------|-----------|
| Živá tvorba subagenta/hooku/commandu selže | Předtočený screencast ze zkoušky (10 sekund) — popis reálné podoby souboru je v tomto `setup.md` jako reference |
| Kiwi MCP timeout | Předtočený screencast ze zkoušky (10 sekund) |
| Hook nefunguje | Otevřít `vystupy/travel-planner.html` ručně — nic se nestane |
| Hlas Zuzana chybí | Hook otevře prohlížeč bez hlasu, stále vypadá jako automatizace |
| Dashboard vypadá špatně | "Na webináři je to živé — uvidíte, reálný agent, reálná data. Doma si s tím pohrajete." |
| Všechno padne | Přeskočit na marketplace prohlídku, nezdržovat se debugováním |

> **Klíčové:** nikdy neopravujte MCP live na webináři. Buď funguje, nebo přeskočíte. Publikum nezná rozdíl.
