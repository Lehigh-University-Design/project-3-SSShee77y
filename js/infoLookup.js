// Main function to read IDs, match with info, and display
function getInfoForID(id) {
    let header = idMap.get(id); 
    let body = '';

    // Match IDs and display info
    if (header != undefined) {
        body = infoMap.get(header);
        if (body != undefined) {
            // console.log(header);
            // console.log(body);
        }
    }

    return [header, body];
}

const idMap = new Map([
    // Suspects
    ['mccoy', 'Richard<br>McCoy Jr.'],
    ['rackstraw', 'Robert<br>Rackstraw'],
    ['weber', 'Duane<br>Weber'],
    ['christiansen', 'Kenneth<br>Christiansen'],
    ['smith', 'William J.<br>Smith'],
    ['dayton', 'Barbara<br>Dayton'],

    // Evidence
    ['blacktie', 'Black clip-on tie'],
    ['hair', 'Hair samples'],
    ['cigars', 'Cigarette butts'],
    ['parachutes', 'Recovered parachutes'],
    ['placard', '727 instruction placard'],
    ['ransommoney', 'Recovered ransom money'],
]);

const infoMap = new Map([
    // Suspects
    ['Richard<br>McCoy Jr.',
        ['images/suspect-mccoy.svg',
        'Suspected due to similarities between the DB Cooper and McCoy hijackings, including the manner of operation and demands.'
        + '<br><br>Richard McCoy Jr. was a former Green Beret and a helicopter pilot in the Army during the Vietnam War. He was discharged from the Army due to injuries sustained in combat. McCoy later became known as a copycat hijacker after he successfully hijacked a plane in 1972 using methods similar to those employed by DB Cooper.'
        + '<br><br><b>Traits matching Cooper:</b> Experience as a pilot and military background.'
        + '<br><br><b>Traits not matching:</b> His alibi for the DB Cooper incident was verified.'
        + '<br><br><b>Outcome:</b> Shot and killed by law enforcement officers during an attempted escape from prison in 1974.']],
    ['Robert<br>Rackstraw',
        ['images/suspect-rackstraw.svg',
        'Suspected due to his background as a Vietnam War veteran with parachute training.'
        + '<br><br>Robert Rackstraw was a Vietnam War veteran and a helicopter pilot with experience in special operations. He had a criminal record for fraud and was known for his intelligence and manipulative behavior.'
        + '<br><br><b>Traits matching Cooper:</b> Military experience, knowledge of parachuting.'
        + '<br><br><b>Traits not matching:</b> Rackstraw\'s whereabouts at the time of the hijacking are unclear, and he denied involvement.'
        + '<br><br><b>Outcome:</b> Rackstraw lived until 2019, and despite being investigated multiple times, no conclusive evidence linked him to the DB Cooper case.']],
    ['Duane<br>Weber',
        ['images/suspect-weber.svg',
        'Suspected due to his wife\'s claim that he confessed to being DB Cooper on his deathbed.'
        + '<br><br>Duane Weber was born in 1924 and served in the Navy during World War II. He had a history of criminal behavior, including theft and forgery. Weber married multiple times and lived a transient lifestyle.'
        + '<br><br><b>Traits matching Cooper:</b> Mysterious past, possible military background.'
        + '<br><br><b>Traits not matching:</b> Conflicting alibi for the time of the hijacking.'
        + '<br><br><b>Outcome:</b> Died in 1995, and his wife\'s claim remains the primary basis for suspicion, but no definitive evidence ties him to the crime.']],
    ['Kenneth<br>Christiansen',
        ['images/suspect-christiansen.svg',
        'Suspected due to his background as a Northwest Airlines employee with knowledge of aircraft and parachutes.'
        + '<br><br>Born in 1924, Kenneth Christiansen was a World War II veteran and a Northwest Airlines employee. He worked as a purser, responsible for flight crew coordination and passenger service.'
        + '<br><br><b>Traits matching Cooper:</b> Aviation experience, familiarity with the Boeing 727 aircraft.'
        + '<br><br><b>Traits not matching:</b> Lack of criminal record or known motive for hijacking.'
        + '<br><br><b>Outcome:</b> Died in 1994, and his family discovered possible evidence, such as a large sum of money and a key after his death, but inconclusive proof linking him to the hijacking.']],
    ['William J.<br>Smith',
        ['images/suspect-smith.svg',
        'Suspected due to his resemblance to the DB Cooper composite sketch and the money in his possession after the hijacking.'
        + '<br><br>William J. Smith was a World War II veteran who enlisted in the United States Navy, undergoing combat air crew training. He worked for the Lehigh Valley Railroad but was affected by Penn Central\'s bankruptcy.'
        + '<br><br><b>Traits matching Cooper:</b> Physical resemblance to composite sketch, possession of money.'
        + '<br><br><b>Traits not matching:</b> Limited evidence linking him to the hijacking, lack of corroborating testimony.'
        + '<br><br><b>Outcome:</b> Died in 1980, and while his widow believed he was DB Cooper, no concrete evidence supports this claim.']],
    ['Barbara<br>Dayton',
        ['images/suspect-dayton.svg',
        'Suspected based on her gender identity, background in aviation, and her claims about being D.B. Cooper.'
        + '<br><br>Barbara Dayton was a recreational pilot and University of Washington librarian. Assigned male at birth, but later underwent sex reassignment surgery, she served in the U.S. Merchant Marine and in the Army during World War II.'
        + '<br><br><b>Traits matching Cooper:</b> Aviation knowledge and experience.'
        + '<br><br><b>Traits not matching:</b> Lack of evidence tying her to the crime, and Dayton\'s physical description did not match.'
        + '<br><br><b>Outcome:</b> Died in 2002 with no evidence being found to implicate her in the DB Cooper case.']],

    // Evidence
    
    ['Black clip-on tie',
        ['images/evidence-black-tie.svg',
        'FBI agents found a black clip-on necktie in seat 18-E, where Cooper had been seated. Attached to the tie was a gold tie-clip with a circular mother-of-pearl setting in the center of the clip. The FBI built a partial DNA profile from samples found on Cooper\'s tie by 2001.']],
    ['Hair samples',
        ['images/evidence-xmark.svg',
        'FBI agents found two hair samples in Cooper\'s seat: a single strand of limb hair on the seat, and a single strand of brown Caucasian head hair on the headrest. In 2002, when attempting DNA profiling, the FBI discovered the hair sample had been lost.']],
    ['Cigarette butts',
        ['images/evidence-xmark.svg',
        'In the armrest ashtray, FBI agents found eight Raleigh filter tipped cigarette butts, but the investigators were unable to find fingerprints. In 1998, the FBI sought to extract DNA from the cigarette butts, but discovered the butts had been destroyed.']],
    ['Recovered parachutes',
        ['images/evidence-parachute-bag.svg',
        'FBI agents found one set of parachutes left behind by Cooper. However, the one Cooper selected for his jump was the older and potentially inferior military parachute as his main chute, signifying prior parachuting or military experience.']],
    ['727 instruction placard',
        ['images/evidence-placard.svg',
        'In November 1978, a hunter found the 727\'s instruction placard for lowering the aft airstair. The placard was found near a logging road about 13 miles (21 km) east of Castle Rock, Washington, and north of Lake Merwin, within Flight 305\'s basic flight path']],
    ['Recovered ransom money',
        ['images/evidence-tina-bar-money.svg',
        'On February 10, 1980, eight-year-old Brian Ingram was vacationing with his family on the Columbia River at a location called Tina Bar. The ransom money had matching serial numbers and totaled to $5,880. However, the money raised far more questions than it answered.']],
]);

        'TEMPORARTY'
        + '<br><br>TEMPORARTY'
        + '<br><br><b>Traits matching Cooper:</b> TEMPORARTY'
        + '<br><br><b>Traits not matching:</b> TEMPORARTY'
        + '<br><br><b>Outcome:</b> TEMPORARTY'