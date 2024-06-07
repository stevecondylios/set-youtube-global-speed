let lastUrl = window.location.href; // Store the initial URL

function setPlaybackRate() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        if (video.playbackRate !== 1.5) {
            video.playbackRate = 1.5;
        }
    });
}

// Function to handle URL changes
function handleUrlChange() {
    if (window.location.href !== lastUrl) {
        lastUrl = window.location.href; // Update the last known URL
        setTimeout(setPlaybackRate, 500); // Set the playback rate on new URL (new video load)
    }
}

// Monitor URL changes via setInterval
setInterval(handleUrlChange, 1000); // Check every second

// Initial application of the playback rate
setPlaybackRate();
