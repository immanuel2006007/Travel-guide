document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('travel-video');

    // Toggle mute/unmute on video click
    video.addEventListener('click', () => {
        video.muted = !video.muted; // Toggle muted state
    });
});
