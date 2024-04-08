let suspectsIDs = ['mccoy', 'rackstraw', 'weber', 'christiansen', 'smith', 'dayton'];

for (let i = 0; i < suspectsIDs.length; i++) {
    let suspect = document.getElementById(suspectsIDs[i]);
    let suspectInfo = getInfoForID(suspectsIDs[i]);
    suspect.querySelector('h3').innerHTML = suspectInfo[0];
    suspect.querySelector('img').src = suspectInfo[1][0];
    suspect.querySelector('p').innerHTML = suspectInfo[1][1].split('<br>')[0];
}