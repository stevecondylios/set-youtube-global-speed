function setPlaybackRate() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => video.playbackRate = 1.5);
}

// Set playback rate initially
setPlaybackRate();

// Monitor for changes and set playback rate as needed
new MutationObserver(() => {
    setPlaybackRate();
}).observe(document.body, { childList: true, subtree: true });
