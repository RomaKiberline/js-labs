document.addEventListener('DOMContentLoaded', () => {
    const logoContainer = document.querySelector('.logo-container');
    const toggleButton = document.getElementById('toggleAnimation');
    let isPlaying = true;
    let autoStopTimer;

    function toggleAnimations() {
        isPlaying = !isPlaying;
        logoContainer.classList.toggle('paused');
        toggleButton.textContent = isPlaying ? 'Зупинити анімацію' : 'Запустити анімацію';
    }

    toggleButton.addEventListener('click', toggleAnimations);
    logoContainer.addEventListener('click', toggleAnimations);

    function startAutoStopTimer() {
        if (autoStopTimer) {
            clearTimeout(autoStopTimer);
        }
        autoStopTimer = setTimeout(() => {
            if (isPlaying) {
                toggleAnimations();
            }
        }, 12000);
    }

    startAutoStopTimer();

    toggleButton.addEventListener('click', () => {
        if (isPlaying) {
            startAutoStopTimer();
        }
    });

    logoContainer.addEventListener('mouseover', () => {
        if (!isPlaying) {
            logoContainer.style.transform = 'scale(1.05)';
        }
    });

    logoContainer.addEventListener('mouseout', () => {
        logoContainer.style.transform = 'scale(1)';
    });
});
