let evidenceIDs = ['blacktie', 'hair', 'cigars', 'parachutes', 'placard', 'ransommoney'];

for (let i = 0; i < evidenceIDs.length; i++) {
    let suspect = document.getElementById(evidenceIDs[i]);
    let suspectInfo = getInfoForID(evidenceIDs[i]);
    suspect.querySelector('h3').innerHTML = 'Evidence #' + (i+1) + ' - ' + suspectInfo[0];
    suspect.querySelector('img').src = suspectInfo[1][0];
    suspect.querySelector('p').innerHTML = suspectInfo[1][1];
}