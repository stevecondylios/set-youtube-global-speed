(function() {
    // Function to change the playback speed to 1.5
    function setDefaultSpeed() {
        const video = document.querySelector('video');
        if (video && video.playbackRate !== 1.5) {
            console.log('Setting playback speed to 1.5');
            video.playbackRate = 1.5;
        }
    }

    // Listen for changes to the video's playback speed
    function monitorSpeedChange() {
        const video = document.querySelector('video');
        if (video) {
            video.onratechange = function(event) {
                if (video.playbackRate !== 1.5) {
                    console.log(`User changed speed to ${video.playbackRate}, stopping automatic change`);
                    // Remove the listener since the user has changed the speed
                    video.removeEventListener('playing', setDefaultSpeedOnStart);
                }
            };
        }
    }

    // Function to set the speed when a video starts playing
    function setDefaultSpeedOnStart() {
        setDefaultSpeed();
        monitorSpeedChange();
    }

    // Attach to the 'playing' event to handle new videos or page changes
    document.addEventListener('DOMContentLoaded', () => {
        const video = document.querySelector('video');
        if (video) {
            video.addEventListener('playing', setDefaultSpeedOnStart);
        }
    });

    // Handle possible Ajax navigation on YouTube (when URL changes without full page reload)
    let lastUrl = location.href; 
    new MutationObserver(() => {
        const url = location.href;
        if (url !== lastUrl) {
            lastUrl = url;
            console.log('URL changed, setting default speed for new content');
            setDefaultSpeed();
        }
    }).observe(document, {subtree: true, childList: true});

    // Initial setup in case the video is already present
    setDefaultSpeed();
})();
