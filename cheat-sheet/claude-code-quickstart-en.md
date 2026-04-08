# Claude Code — Your First 30 Minutes

Step-by-step guide. Open your terminal and start.

## 1. Installation (5 min)

### Prerequisites
- Node.js installed ([nodejs.org](https://nodejs.org))
- Anthropic account ([anthropic.com](https://www.anthropic.com))

### Install
```bash
npm install -g @anthropic-ai/claude-code
```

### Verify
```bash
claude --version
```

## 2. First Launch (2 min)

```bash
mkdir my-project
cd my-project
claude
```

Claude Code will launch and guide you through signing in to your Anthropic account.

## 3. Your First Task (5 min)

Type into Claude Code:
```
Create a simple website with the heading "Hello World"
and a short bio about me. Name: [your name].
Use modern design.
```

Watch the agent:
1. Think about the task
2. Create files
3. Verify the result

Open `index.html` in your browser — you have your first page.

## 4. Iterate (5 min)

Refine the result:
```
Add dark theme and a section with three skill cards.
```

```
Add a contact form at the bottom of the page.
```

```
Adjust the design — more whitespace and larger headings.
```

Each prompt builds on previous work. Claude Code remembers the full context.

## 5. Try More Workflows (10 min)

### Data Analysis
```
Create a sample CSV file with sales data (100 rows).
Then analyze it and create an HTML report with charts.
```

### Automation
```
Create a bash script that renames all .txt files
in the current directory to YYYY-MM-DD_filename.txt format.
```

### Content
```
Write 3 LinkedIn posts about AI productivity.
Each: hook, main idea, call to action.
Save as separate files.
```

## 6. Set Up CLAUDE.md (3 min)

Create a `CLAUDE.md` file in your project root:
```markdown
# Project Rules

- Always write in English
- Use professional but approachable tone
- Code comments in English
- Responsive design always
```

From now on, Claude Code automatically follows your rules in this project.

## Useful Commands

| Command | What it does |
|---------|-------------|
| `claude` | Start Claude Code |
| `/help` | Show help |
| `/clear` | Clear context |
| `/compact` | Compress history |
| `/cost` | Show token usage |
| `Ctrl+C` | Cancel current operation |
| `Esc` | Exit Claude Code |

## Tips for Better Results

1. **Be specific** — "landing page for a fitness studio" > "a website"
2. **Define structure** — "sections: hero, services, pricing, contact"
3. **Iterate** — start simple, then refine
4. **Give context** — "I'm a marketer, I need..." or "this is for a client..."
5. **Experiment freely** — the worst that can happen is a bad output

## Resources

- [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code)
- [Anthropic](https://www.anthropic.com)
- [Claude Code GitHub](https://github.com/anthropics/claude-code)
