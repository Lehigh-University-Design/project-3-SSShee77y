
window.addEventListener('load', function () {
    waterManager();
});

/* Wet weather manager */
function waterManager() {
    const numRaindrops = 50;
    const rainContainer = document.getElementById('storm-container');

    for (let i = 0; i < numRaindrops; i++) {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        resetRaindropPosition(raindrop);
        rainContainer.appendChild(raindrop);

        randomTime = 0.1 + Math.random() * 0.4;
        randomTimeMs = randomTime * 1000;
        raindrop.style.animationDuration = `${randomTime}s`;
        raindrop.style.width = `${6 - randomTime * 8}px`;
        raindrop.style.height = `${120 - randomTime * 120}px`;

        setInterval(function () {
            resetRaindropPosition(raindrop);
        }, randomTimeMs);
    }
}

function resetRaindropPosition(raindrop) {
    raindrop.style.left = `${Math.random() * 130}vw`;
}