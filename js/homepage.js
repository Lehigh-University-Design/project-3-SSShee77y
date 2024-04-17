window.addEventListener('mousemove', function(e) {
    let image = document.getElementById('home-image');
    if (image == null) {
        return;
    }

    // Get mousePos
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    // Get imagePos
    let rect = image.getBoundingClientRect();
    let imageX = rect.left + rect.width / 2;
    let imageY = rect.top;

    // Calculate the distance from the mouse to the center of the object
    let distanceX = mouseX - imageX;
    let distanceY = mouseY - imageY;

    // Translate image
    image.style.transform = `translate(${-distanceX/8}px, ${-distanceY/20}px)`;
});

// Quick hotfix lol
// setInterval(trackCooperText, 100);
function trackCooperText() {
    let cooperText = document.getElementById('cooper-name');

    if (window.innerWidth < 650) {
        cooperText.style.width = 'min-content';
    } else {
        cooperText.style.width = 'max-content';
    }
}

var cooperImage, ctaButton, fadeOverlay;
function homeCTAButton() {
    cooperImage = document.getElementById('home-image');
    ctaButton = document.getElementById('home-button')
    fadeOverlay = document.getElementById('fade-overlay');

    cooperImage.parentElement.style.zIndex = '9999';
    cooperImage.style.opacity = '0.9';
    cooperImage.style.transition = 'all 0.8s ease-in 0s';
    ctaButton.style.zIndex = '9998';
    ctaButton.style.textIndent = '0';
    ctaButton.style.transition = 'all 0.8s ease-in 0s';
    ctaButton.style.backgroundColor = 'transparent';
    ctaButton.style.pointerEvents = 'none';
    ctaButton.children[0].style.opacity = '1';
    fadeOverlay.classList.toggle("red-fade");
    setFader(1);
    setTimeout(fadeButtonHelper, 1500);
}

function fadeButtonHelper() {
    cooperImage.style.opacity = '0';
    cooperImage.style.marginLeft = '70%';
    ctaButton.style.opacity = '0';
    fadeOverlay.classList.toggle("red-fade");
    setTimeout(function() {redirect('timeline.html');}, 1200);
}