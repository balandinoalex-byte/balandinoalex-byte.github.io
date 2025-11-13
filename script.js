const videoElement = document.getElementById('videoElement');

// Check for getUserMedia support
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            videoElement.srcObject = stream;
            videoElement.play();
        })
        .catch(function(err) {
            console.error("An error occurred: " + err);
        });
} else {
    console.log("getUserMedia not supported on this browser/app version.");
}


