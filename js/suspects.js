let suspectsIDs = ['mccoy', 'rackstraw', 'weber', 'christiansen', 'smith', 'dayton'];

for (let i = 0; i < suspectsIDs.length; i++) {
    let suspect = document.getElementById(suspectsIDs[i]);
    let suspectInfo = getInfoForID(suspectsIDs[i]);
    suspect.querySelector('h3').innerHTML = suspectInfo[0];
    suspect.querySelector('img').src = suspectInfo[1][0];
    suspect.querySelector('p').innerHTML = suspectInfo[1][1].split('<br>')[0];
}

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