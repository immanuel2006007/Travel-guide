document.addEventListener('DOMContentLoaded', function () {
    const exploreButton = document.querySelector('header a');
    exploreButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        document.querySelector('#destinations').scrollIntoView({ behavior: 'smooth' });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Apply fade-in animation when the page loads
    document.body.classList.add('fade-in');

    const fadeLinks = document.querySelectorAll('.fade-link');

    fadeLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default navigation

            // Create fade-out overlay
            const fadeOverlay = document.createElement('div');
            fadeOverlay.classList.add('fade-overlay');
            document.body.appendChild(fadeOverlay);

            // Add fade-out effect
            setTimeout(() => fadeOverlay.classList.add('fade-out'), 10);

            // Navigate to the destination after animation
            const destination = link.getAttribute('data-destination');
            setTimeout(() => {
                window.location.href = destination;
            }, 800); // Match transition duration
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-audio');

    // Ensure the audio starts playing
    audio.play().catch((error) => {
        console.error("Audio playback was prevented:", error);
    });

    // Prevent the audio from being paused or muted
    audio.addEventListener('pause', () => {
        audio.play();
    });

    audio.addEventListener('volumechange', () => {
        if (audio.muted) {
            audio.muted = false;
        }
    });
});

