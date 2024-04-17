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
        'McCoy hijacked a plane in 1972 using a similar method to Cooper\'s and was arrested. Some believed he could be Cooper, but he was killed in a shootout with law enforcement in 1974.']],
    ['Robert<br>Rackstraw',
        ['images/suspect-rackstraw.svg',
        'A Vietnam War veteran with a criminal record who boasted about being Cooper. Investigators looked into him extensively but found insufficient evidence to charge him.'
        + '<br><br>Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Etiam vel enim nibh. Curabitur egestas turpis in mauris malesuada interdum. Duis nec pellentesque leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae:'
        + '<ul><li>Nulla facilisi</li>'
        + '<li>Vestibulum libero</li>'
        + '<li>Dapibus luctus</li></ul>'
        + 'Donec iaculis, risus et sagittis posuere, magna tellus sollicitudin nulla, quis convallis leo augue vel tellus. Maecenas libero magna, finibus commodo elit gravida, vestibulum tristique massa. Maecenas vehicula vehicula euismod. Vestibulum pretium sed eros laoreet accumsan.']],
    ['Duane<br>Weber',
        ['images/suspect-weber.svg',
        'Weber\'s wife claimed he confessed to her on his deathbed, and his resemblance to composite sketches led to speculation. Additionally, Weber had military experience and a criminal history.'
        + '<br><br>Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Etiam vel enim nibh. Curabitur egestas turpis in mauris malesuada interdum. Duis nec pellentesque leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae:'
        + '<ul><li>Nulla facilisi</li>'
        + '<li>Vestibulum libero</li>'
        + '<li>Dapibus luctus</li></ul>'
        + 'Donec iaculis, risus et sagittis posuere, magna tellus sollicitudin nulla, quis convallis leo augue vel tellus. Maecenas libero magna, finibus commodo elit gravida, vestibulum tristique massa. Maecenas vehicula vehicula euismod. Vestibulum pretium sed eros laoreet accumsan.']],
    ['Kenneth<br>Christiansen',
        ['images/suspect-christiansen.svg',
        'A former airline employee with parachute experience and a resemblance to composite sketches of D.B. Cooper. His brother claimed Christiansen confessed to being Cooper on his deathbed.'
        + '<br><br>Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Etiam vel enim nibh. Curabitur egestas turpis in mauris malesuada interdum. Duis nec pellentesque leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae:'
        + '<ul><li>Nulla facilisi</li>'
        + '<li>Vestibulum libero</li>'
        + '<li>Dapibus luctus</li></ul>'
        + 'Donec iaculis, risus et sagittis posuere, magna tellus sollicitudin nulla, quis convallis leo augue vel tellus. Maecenas libero magna, finibus commodo elit gravida, vestibulum tristique massa. Maecenas vehicula vehicula euismod. Vestibulum pretium sed eros laoreet accumsan.']],
    ['William J.<br>Smith',
        ['images/suspect-smith.svg',
        'A former Army paratrooper and explosives expert who confessed to being Cooper in a deathbed letter. However, his confession was considered dubious.'
        + '<br><br>Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Etiam vel enim nibh. Curabitur egestas turpis in mauris malesuada interdum. Duis nec pellentesque leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae:'
        + '<ul><li>Nulla facilisi</li>'
        + '<li>Vestibulum libero</li>'
        + '<li>Dapibus luctus</li></ul>'
        + 'Donec iaculis, risus et sagittis posuere, magna tellus sollicitudin nulla, quis convallis leo augue vel tellus. Maecenas libero magna, finibus commodo elit gravida, vestibulum tristique massa. Maecenas vehicula vehicula euismod. Vestibulum pretium sed eros laoreet accumsan.']],
    ['Barbara<br>Dayton',
        ['images/suspect-dayton.svg',
        'Claimed to be D.B. Cooper in a book she wrote, alleging she underwent gender reassignment surgery after the hijacking. However, her story lacked corroborating evidence.'
        + '<br><br>Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Etiam vel enim nibh. Curabitur egestas turpis in mauris malesuada interdum. Duis nec pellentesque leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae:'
        + '<ul><li>Nulla facilisi</li>'
        + '<li>Vestibulum libero</li>'
        + '<li>Dapibus luctus</li></ul>'
        + 'Donec iaculis, risus et sagittis posuere, magna tellus sollicitudin nulla, quis convallis leo augue vel tellus. Maecenas libero magna, finibus commodo elit gravida, vestibulum tristique massa. Maecenas vehicula vehicula euismod. Vestibulum pretium sed eros laoreet accumsan.']],

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