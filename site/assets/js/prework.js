// Prework page — light interactivity
// Currently minimal. Copy-to-clipboard and OS detection will be added
// in the next workstream when the CLI install tabs land.

(function () {
    document.addEventListener('DOMContentLoaded', () => {
        // Smooth-scroll for in-page anchors (respects prefers-reduced-motion)
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
    });
})();
