// Prework page — interactivity
// - Tab switching (generic [data-tabs])
// - OS detection → highlight the right tab in [data-tabs] groups containing [data-os]
// - Copy-to-clipboard on every .code-block
// - Smooth scroll for in-page anchors

(function () {
    // -----------------------------------------------------------------------
    // Tab switching — uses direct-child iteration (no :scope, works in every
    // modern browser and across nested tab groups)
    // -----------------------------------------------------------------------
    function activateTab(group, targetKey) {
        const tablist = Array.from(group.children).find((el) => el.classList.contains('tabs__list'));
        if (tablist) {
            Array.from(tablist.children).forEach((btn) => {
                if (btn.classList && btn.classList.contains('tabs__button')) {
                    btn.setAttribute('aria-selected', btn.dataset.tab === targetKey ? 'true' : 'false');
                }
            });
        }
        Array.from(group.children).forEach((panel) => {
            if (panel.classList && panel.classList.contains('tabs__panel')) {
                panel.setAttribute('aria-hidden', panel.dataset.panel === targetKey ? 'false' : 'true');
            }
        });
    }

    function initTabs() {
        // Event delegation — one listener, handles nested tabs naturally.
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('.tabs__button');
            if (!btn) return;
            const group = btn.closest('[data-tabs]');
            if (!group) return;
            activateTab(group, btn.dataset.tab);
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
            // Only look at direct children of this group's tablist
            const tablist = Array.from(group.children).find((el) => el.classList.contains('tabs__list'));
            if (!tablist) return;
            const match = Array.from(tablist.children).find((btn) => btn.dataset && btn.dataset.os === os);
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
