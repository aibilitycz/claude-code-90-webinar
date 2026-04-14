// Prework page — light interactivity
// - Step progress saved to localStorage (survives refresh)
// - Copy-to-clipboard on <pre><code> blocks (added in later workstream)
// - OS detection for Step 3 (Git) and Step 2 (CLI subsection) (added in later workstream)

(function () {
    const STORAGE_KEY = 'aibility-prework-progress';

    function loadProgress() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : {};
        } catch (e) {
            return {};
        }
    }

    function saveProgress(progress) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
        } catch (e) {
            // localStorage unavailable (private mode, etc.) — silently ignore
        }
    }

    function applyProgress() {
        const progress = loadProgress();
        document.querySelectorAll('.steps-strip__item').forEach((item) => {
            const step = item.dataset.step;
            if (progress[step]) {
                item.classList.add('is-done');
            }
        });
    }

    function markDone(step) {
        const progress = loadProgress();
        progress[step] = true;
        saveProgress(progress);
        applyProgress();

        const next = document.querySelector(`#krok-${parseInt(step, 10) + 1}`);
        if (next) {
            next.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        applyProgress();

        document.querySelectorAll('[data-mark-done]').forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                markDone(btn.dataset.markDone);
            });
        });
    });
})();
