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
        'McCoy hijacked a plane in 1972 using a similar method to Cooper\'s and was arrested. Some believed he could be Cooper, but he was killed in a shootout with law enforcement in 1974.'
        + '<br><br>Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Etiam vel enim nibh. Curabitur egestas turpis in mauris malesuada interdum. Duis nec pellentesque leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae:'
        + '<ul><li>Nulla facilisi</li>'
        + '<li>Vestibulum libero</li>'
        + '<li>Dapibus luctus</li></ul>'
        + '>Donec iaculis, risus et sagittis posuere, magna tellus sollicitudin nulla, quis convallis leo augue vel tellus. Maecenas libero magna, finibus commodo elit gravida, vestibulum tristique massa. Maecenas vehicula vehicula euismod. Vestibulum pretium sed eros laoreet accumsan.']],
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
        [,
            
        ]],
    ['Cigarette butts',
        [,
            
        ]],
    ['Recovered parachutes',
        ['images/evidence-parachute-bag.svg',
            
        ]],
    ['727 instruction placard',
        ['images/evidence-placard.svg',
            
        ]],
    ['Recovered ransom money',
        ['images/evidence-singular-bill.svg',
            
        ]],
]);