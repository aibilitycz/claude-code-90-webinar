// Prework page — interactivity
// - Tab switching (generic [data-tabs])
// - OS detection → highlight the right tab in [data-tabs] groups containing [data-os]
// - Copy-to-clipboard on every .code-block
// - Smooth scroll for in-page anchors

(function () {
    // -----------------------------------------------------------------------
    // Tab switching
    // -----------------------------------------------------------------------
    function activateTab(tabGroup, targetKey) {
        const buttons = tabGroup.querySelectorAll(':scope > .tabs__list > .tabs__button');
        const panels = tabGroup.querySelectorAll(':scope > .tabs__panel');

        buttons.forEach((btn) => {
            const isTarget = btn.dataset.tab === targetKey;
            btn.setAttribute('aria-selected', isTarget ? 'true' : 'false');
        });

        panels.forEach((panel) => {
            const isTarget = panel.dataset.panel === targetKey;
            panel.setAttribute('aria-hidden', isTarget ? 'false' : 'true');
        });
    }

    function initTabs() {
        document.querySelectorAll('[data-tabs]').forEach((group) => {
            const buttons = group.querySelectorAll(':scope > .tabs__list > .tabs__button');
            buttons.forEach((btn) => {
                btn.addEventListener('click', () => {
                    activateTab(group, btn.dataset.tab);
                });
            });
        });
    }

    // -----------------------------------------------------------------------
    // OS detection
    // -----------------------------------------------------------------------
    function detectOS() {
        const platform = (navigator.userAgentData?.platform || navigator.platform || '').toLowerCase();
        const ua = navigator.userAgent.toLowerCase();
        if (platform.includes('mac') || ua.includes('macintosh')) return 'mac';
        if (platform.includes('win') || ua.includes('windows')) return 'win';
        if (platform.includes('linux') || ua.includes('linux')) return 'linux';
        return null;
    }

    function applyOsHighlight() {
        const os = detectOS();
        if (!os) return;
        document.querySelectorAll('[data-tabs]').forEach((group) => {
            const match = group.querySelector(`:scope > .tabs__list > .tabs__button[data-os="${os}"]`);
            if (match) {
                activateTab(group, match.dataset.tab);
            }
        });
    }

    // -----------------------------------------------------------------------
    // Copy-to-clipboard
    // -----------------------------------------------------------------------
    function initCopyButtons() {
        document.querySelectorAll('.code-block').forEach((block) => {
            const code = block.querySelector('pre code');
            if (!code) return;

            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'code-block__copy';
            button.innerHTML = '<i class="iconoir-copy"></i> <span>Kopírovat</span>';
            button.setAttribute('aria-label', 'Zkopírovat kód');

            button.addEventListener('click', async () => {
                const text = code.innerText;
                try {
                    await navigator.clipboard.writeText(text);
                    button.classList.add('is-copied');
                    button.querySelector('span').textContent = 'Zkopírováno';
                    setTimeout(() => {
                        button.classList.remove('is-copied');
                        button.querySelector('span').textContent = 'Kopírovat';
                    }, 2000);
                } catch (e) {
                    // Clipboard API not available (e.g. insecure context) — graceful fallback
                    const range = document.createRange();
                    range.selectNode(code);
                    window.getSelection().removeAllRanges();
                    window.getSelection().addRange(range);
                    button.querySelector('span').textContent = 'Vyberte a zkopírujte';
                }
            });

            block.appendChild(button);
        });
    }

    // -----------------------------------------------------------------------
    // Smooth scroll (respects prefers-reduced-motion)
    // -----------------------------------------------------------------------
    function initSmoothScroll() {
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) return;

        document.querySelectorAll('a[href^="#"]').forEach((link) => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href').slice(1);
                if (!targetId) return;
                const target = document.getElementById(targetId);
                if (!target) return;
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    }

    // -----------------------------------------------------------------------
    // Init
    // -----------------------------------------------------------------------
    document.addEventListener('DOMContentLoaded', () => {
        initTabs();
        applyOsHighlight();
        initCopyButtons();
        initSmoothScroll();
    });
})();
