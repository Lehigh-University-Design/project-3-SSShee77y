const idMap = new Map([
    // Suspects
    ['mc-coy', 'Richard<br>McCoy Jr.'],
    ['rackstraw', 'Robert<br>Rackstraw'],
    ['weber', 'Duane<br>Weber'],
    ['christiansen', 'Kenneth<br>Christiansen'],
    ['smith', 'William J.<br>Smith'],
    ['dayton', 'Barbara<br>Dayton'],
]);

const infoMap = new Map([
    ['Richard<br>McCoy Jr.',
        'McCoy hijacked a plane in 1972 using a similar method to Cooper\'s and was arrested. Some believed he could be Cooper, but he was killed in a shootout with law enforcement in 1974.'
        + '<br><br>Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Etiam vel enim nibh. Curabitur egestas turpis in mauris malesuada interdum. Duis nec pellentesque leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae:'
        + '<ul><li>Nulla facilisi</li>'
        + '<ul><li>Vestibulum libero</li>'
        + '<ul><li>Dapibus luctus</li>'
        + '<br><br>Donec iaculis, risus et sagittis posuere, magna tellus sollicitudin nulla, quis convallis leo augue vel tellus. Maecenas libero magna, finibus commodo elit gravida, vestibulum tristique massa. Maecenas vehicula vehicula euismod. Vestibulum pretium sed eros laoreet accumsan.'],
    ['Robert<br>Rackstraw',
        'A Vietnam War veteran with a criminal record who boasted about being Cooper. Investigators looked into him extensively but found insufficient evidence to charge him.'
        + '<br><br>Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Etiam vel enim nibh. Curabitur egestas turpis in mauris malesuada interdum. Duis nec pellentesque leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae:'
        + '<ul><li>Nulla facilisi</li>'
        + '<ul><li>Vestibulum libero</li>'
        + '<ul><li>Dapibus luctus</li>'
        + '<br><br>Donec iaculis, risus et sagittis posuere, magna tellus sollicitudin nulla, quis convallis leo augue vel tellus. Maecenas libero magna, finibus commodo elit gravida, vestibulum tristique massa. Maecenas vehicula vehicula euismod. Vestibulum pretium sed eros laoreet accumsan.'],
    ['Duane<br>Weber',
        'Weber\'s wife claimed he confessed to her on his deathbed, and his resemblance to composite sketches led to speculation. Additionally, Weber had military experience and a criminal history.'
        + '<br><br>Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Etiam vel enim nibh. Curabitur egestas turpis in mauris malesuada interdum. Duis nec pellentesque leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae:'
        + '<ul><li>Nulla facilisi</li>'
        + '<ul><li>Vestibulum libero</li>'
        + '<ul><li>Dapibus luctus</li>'
        + '<br><br>Donec iaculis, risus et sagittis posuere, magna tellus sollicitudin nulla, quis convallis leo augue vel tellus. Maecenas libero magna, finibus commodo elit gravida, vestibulum tristique massa. Maecenas vehicula vehicula euismod. Vestibulum pretium sed eros laoreet accumsan.'],
    ['Kenneth<br>Christiansen',
        'A former airline employee with parachute experience and a resemblance to composite sketches of D.B. Cooper. His brother claimed Christiansen confessed to being Cooper on his deathbed.'
        + '<br><br>Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Etiam vel enim nibh. Curabitur egestas turpis in mauris malesuada interdum. Duis nec pellentesque leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae:'
        + '<ul><li>Nulla facilisi</li>'
        + '<ul><li>Vestibulum libero</li>'
        + '<ul><li>Dapibus luctus</li>'
        + '<br><br>Donec iaculis, risus et sagittis posuere, magna tellus sollicitudin nulla, quis convallis leo augue vel tellus. Maecenas libero magna, finibus commodo elit gravida, vestibulum tristique massa. Maecenas vehicula vehicula euismod. Vestibulum pretium sed eros laoreet accumsan.'],
    ['William J.<br>Smith',
        'A former Army paratrooper and explosives expert who confessed to being Cooper in a deathbed letter. However, his confession was considered dubious.'
        + '<br><br>Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Etiam vel enim nibh. Curabitur egestas turpis in mauris malesuada interdum. Duis nec pellentesque leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae:'
        + '<ul><li>Nulla facilisi</li>'
        + '<ul><li>Vestibulum libero</li>'
        + '<ul><li>Dapibus luctus</li>'
        + '<br><br>Donec iaculis, risus et sagittis posuere, magna tellus sollicitudin nulla, quis convallis leo augue vel tellus. Maecenas libero magna, finibus commodo elit gravida, vestibulum tristique massa. Maecenas vehicula vehicula euismod. Vestibulum pretium sed eros laoreet accumsan.'],
    ['Barbara<br>Dayton',
        'Claimed to be D.B. Cooper in a book she wrote, alleging she underwent gender reassignment surgery after the hijacking. However, her story lacked corroborating evidence.'
        + '<br><br>Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Etiam vel enim nibh. Curabitur egestas turpis in mauris malesuada interdum. Duis nec pellentesque leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae:'
        + '<ul><li>Nulla facilisi</li>'
        + '<ul><li>Vestibulum libero</li>'
        + '<ul><li>Dapibus luctus</li>'
        + '<br><br>Donec iaculis, risus et sagittis posuere, magna tellus sollicitudin nulla, quis convallis leo augue vel tellus. Maecenas libero magna, finibus commodo elit gravida, vestibulum tristique massa. Maecenas vehicula vehicula euismod. Vestibulum pretium sed eros laoreet accumsan.'],
])