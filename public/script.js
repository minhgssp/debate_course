document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const slides = document.querySelectorAll('.slide');

    // Navigation click handler
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(nav => nav.classList.remove('active'));
            slides.forEach(slide => slide.classList.remove('active'));

            item.classList.add('active');

            const targetId = item.getAttribute('data-target');
            const targetSlide = document.getElementById(targetId);
            if (targetSlide) {
                targetSlide.classList.add('active');
            }
        });
    });

    // Keyboard navigation (Arrow keys & Space/Enter)
    document.addEventListener('keydown', (e) => {
        const activeNav = document.querySelector('.nav-item.active');
        if (!activeNav) return;

        let nextItem;
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            nextItem = activeNav.nextElementSibling;
            if (!nextItem) {
                // Loop back to first
                nextItem = document.querySelector('.nav-item');
            }
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            e.preventDefault();
            nextItem = activeNav.previousElementSibling;
            if (!nextItem || !nextItem.classList.contains('nav-item')) {
                // Loop to last
                const allNavs = document.querySelectorAll('.nav-item');
                nextItem = allNavs[allNavs.length - 1];
            }
        }

        if (nextItem && nextItem.classList.contains('nav-item')) {
            nextItem.click();
            nextItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });

    // ===== Timer Functionality =====
    const timerDisplay = document.getElementById('timer');
    let totalSeconds = 2 * 60 * 60; // 2 hours in seconds
    let timerInterval = null;

    function formatTime(seconds) {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return [h, m, s].map(v => String(v).padStart(2, '0')).join(':');
    }

    function updateTimer() {
        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = "HẾT GIỜ!";
            timerDisplay.style.color = '#ef4444';
            return;
        }
        totalSeconds--;
        timerDisplay.textContent = formatTime(totalSeconds);

        // Warning colors
        if (totalSeconds <= 600) { // Last 10 minutes
            timerDisplay.style.color = '#ef4444';
        } else if (totalSeconds <= 1800) { // Last 30 minutes
            timerDisplay.style.color = '#fbbf24';
        }
    }

    // Start timer on first interaction (click anywhere)
    let timerStarted = false;
    document.addEventListener('click', () => {
        if (!timerStarted && timerDisplay) {
            timerStarted = true;
            timerInterval = setInterval(updateTimer, 1000);
        }
    }, { once: false });

    // ===== Progress Indicator =====
    // Optional: Show slide number
    function updateProgress() {
        const activeIndex = [...navItems].findIndex(item => item.classList.contains('active'));
        const total = navItems.length;
        // Could display somewhere if needed
    }

    navItems.forEach(item => {
        item.addEventListener('click', updateProgress);
    });
});
