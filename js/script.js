window.addEventListener('load', function () {
    waterManager();
    setFader(0);
    randomStringMap();
});

window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    parallaxStringMap(scrollPosition / 5);
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
    let randomValue = Math.random();
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
    let navIcon = document.getElementById("nav-icon");
    sidenav.classList.toggle("side-nav-open");

    if (sidenav.classList.contains("side-nav-open")) {
        navIcon.src = "images/nav-close-icon.svg";
        navIcon.style.transform = 'translateY(0px) rotate(270deg)';
    } else {
        navIcon.src = "images/nav-dropdown-icon.svg";
        navIcon.style.transform = '';
    }
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

/*
 *  Random lines generator
 */

function randomStringMap() {
    let stringMap = document.getElementById('string-map');
    if (stringMap == null) {
        return;
    }

    let totalHeight = document.body.scrollHeight;
    stringMap.style.height = totalHeight + 'px';
    let heightPart = totalHeight / stringMap.children.length;

    for (let i = 0; i < stringMap.children.length; i++) {
        let child = stringMap.children[i];
        let rotateValue = (i%2) == 1 ? -5 + (Math.random() * -25) : 5 + (Math.random() * 25);
        let yValue = ((i+1) * heightPart) - 50 + (Math.random() * 101);
        child.style.transform = `rotate(${rotateValue}deg) translateY(${yValue}px)`
    }
}

function parallaxStringMap(scrollFactor) {
    let stringMap = document.getElementById('string-map');
    if (stringMap == null) {
        return;
    }

    for (let i = 0; i < stringMap.children.length; i++) {
        let child = stringMap.children[i];
        child.style.top = `${scrollFactor}px`;
    }
}