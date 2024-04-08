window.addEventListener('load', function () {
    waterManager();
    setFader(0);
});

/*
 *  Wet Weather Manager
 */

function waterManager() {
    const numRaindrops = screen.width / 50 + 5;
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
    randomValue = Math.random();
    raindrop.style.left = `calc(${randomValue * 100}vw + ${randomValue * 50}vh`;
}

/*
 *  Fader and Redirects
 */

function setFader(fadeAmount) {
    const fadeOverlay = document.getElementById('fade-overlay');
    fadeOverlay.style.opacity = fadeAmount;
}

function fadeToRedirect(link) {
    setFader(1);
    setTimeout(function() {redirect(link);}, 610);
}

function redirect(link) {
    window.location.href = link;
}

/*
 *  Navbar
 */

function toggleSidebar() {
    let sidenav = document.getElementById("side-nav");
    sidenav.classList.toggle("side-nav-open");
}

/*
 *  Inspection Popup
 */

function popUpInfo(id) {
    let popup = document.getElementById('info-popup');
    let popupGrid = popup.querySelector('div');

    let suspectInfo = getInfoForID(id);
    let suspectName = suspectInfo[0].split('<br>')[0] + ' ' + suspectInfo[0].split('<br>')[1];
    popupGrid.querySelector('h3').innerHTML = suspectName;
    popupGrid.querySelector('img').src = suspectInfo[1][0];
    popupGrid.querySelector('p').innerHTML = suspectInfo[1][1];

    popup.style.opacity = 1;
    popup.classList.toggle('ignore');
    document.body.style.overflowY = 'hidden';
}

function closePopUp() {
    let popup = document.getElementById('info-popup');

    popup.style.opacity = 0;
    popup.classList.toggle('ignore');
    document.body.style.overflowY = 'auto';
}