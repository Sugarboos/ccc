document.addEventListener('DOMContentLoaded', () => {
    // Demo Audio Data - Replace with actual file paths when ready
    const demoData = {
        'Home Services': {
            file: 'assets/audio/demo-home.mp3', // Placeholder
            visual: 'linear-gradient(135deg, #2a1b3d, #121212)'
        },
        'Dental Clinic': {
            file: 'assets/audio/demo-dental.mp3',
            visual: 'linear-gradient(135deg, #1e3a8a, #121212)'
        },
        'Law Firm': {
            file: 'assets/audio/demo-law.mp3',
            visual: 'linear-gradient(135deg, #3f2e18, #121212)'
        },
        'Real Estate': {
            file: 'assets/audio/demo-realestate.mp3',
            visual: 'linear-gradient(135deg, #064e3b, #121212)'
        }
    };

    const playerCard = document.querySelector('.player-card');
    const playButton = document.querySelector('.play-button-large');
    const playIconPatch = playButton.querySelector('path');
    const playOverlay = document.querySelector('.play-overlay');
    const tabs = document.querySelectorAll('.demo-tab');
    const progressBar = document.querySelector('.progress-fill');

    let isPlaying = false;
    let currentAudio = null;
    let activeCategory = 'Home Services';

    // Initialize Tabs
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // UI Update
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Logic Update
            activeCategory = tab.textContent;
            console.log(`Switched to: ${activeCategory}`);

            // Stop current playback if switching
            stopAudio();

            // Here you would also update the background visual if using real images
        });
    });

    // Play/Pause Logic
    function togglePlay() {
        if (isPlaying) {
            pauseAudio();
        } else {
            playAudio();
        }
    }

    function playAudio() {
        isPlaying = true;
        playerCard.classList.add('playing');

        // Update Icons to Pause
        playButton.querySelector('svg').innerHTML = '<rect x="6" y="4" width="4" height="16" fill="white"/><rect x="14" y="4" width="4" height="16" fill="white"/>';
        playOverlay.querySelector('svg').innerHTML = '<rect x="6" y="4" width="4" height="16" fill="white"/><rect x="14" y="4" width="4" height="16" fill="white"/>';

        // Simulate Progress (remove this when real audio is attached)
        simulateProgress();

        // Real Audio Implementation:
        // if (!currentAudio) currentAudio = new Audio(demoData[activeCategory].file);
        // currentAudio.play();
    }

    function pauseAudio() {
        isPlaying = false;
        playerCard.classList.remove('playing');

        // Update Icons to Play
        const playPath = '<path d="M8 5v14l11-7z" style="fill: white;"/>';
        playButton.querySelector('svg').innerHTML = playPath;
        playOverlay.querySelector('svg').innerHTML = playPath;

        // Real Audio:
        // if (currentAudio) currentAudio.pause();
    }

    function stopAudio() {
        pauseAudio();
        progressBar.style.width = '0%';
        // if (currentAudio) { currentAudio.pause(); currentAudio.currentTime = 0; }
    }

    // Fake Progress Bar Animation (Placeholder)
    function simulateProgress() {
        let width = 0;
        const interval = setInterval(() => {
            if (!isPlaying) {
                clearInterval(interval);
                return;
            }
            if (width >= 100) {
                width = 0; // Loop or stop
                stopAudio();
                clearInterval(interval);
            } else {
                width++;
                progressBar.style.width = width + '%';
            }
        }, 100); // Speed of fake progress
    }

    // Event Listeners
    playButton.addEventListener('click', togglePlay);
    playOverlay.addEventListener('click', togglePlay);

});
