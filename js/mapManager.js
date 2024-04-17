mapboxgl.accessToken = 'pk.eyJ1IjoiY29kaW5nYWxlbGVvMjYiLCJhIjoiY2x1anNxcGNnMGQ0ZzJucjBkc3M3Nml3eCJ9.ZLAvpZ2wIAw8jPVbgcKIFA';

// Timeline stuff
const eventInfo = document.getElementById('timeline-info');
const timelineTitle = document.getElementById('timeline-title');
const timeline = document.getElementById('timeline');

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/codingaleleo26/clublyh0k01x601nwb3f6ci8i',
    center: [-122.803, 46.489],
    zoom: 7.5,
    bearing: 90,
    pitch: 30,
});

map.on('load', () => {
    map.addSource('poi', {
        type: 'geojson',
        data: './geodata/features.geojson'
    });

    map.addLayer({
        'id': 'poi',
        'type': 'circle',
        'source': 'poi',
        'paint': {
            'circle-radius': 4,
            'circle-stroke-width': 2,
            'circle-color': '#808080',
            'circle-stroke-color': '#eeeeee'
        },
        'filter': ['==', '$type', 'Point']
    });

    // Flightpath
    map.addLayer({
        'id': 'flightpath-points',
        'type': 'circle',
        'source': 'poi',
        'paint': {
            'circle-radius': 4,
            'circle-stroke-width': 2,
            'circle-color': '#808080',
            'circle-stroke-color': '#eeeeee'
        },
        'filter': ['==', 'name', 'Flight Path (Seattle to Reno)'],
    });
    map.addLayer({
        'id': 'flightpath-lines',
        'type': 'line',
        'source': 'poi',
        'paint': {
            'line-width': 1.5,
            'line-color': '#eeeeee',
            'line-dasharray': [2, 2]
        },
        'filter': ['==', 'name', 'Flight Path (Seattle to Reno)'],
    });

    // Dropzone coloring
    map.addLayer({
        'id': 'dropzone-lines',
        'type': 'line',
        'source': 'poi',
        'paint': {
            'line-width': 3,
            'line-color': '#40b0c0',
        },
        'filter': ['==', 'name', 'Suspected Drop Zone']
    });
    map.addLayer({
        'id': 'dropzone-fill',
        'type': 'fill',
        'source': 'poi',
        'paint': {
            'fill-color': '#40b0c0',
            'fill-opacity': 0.1
        },
        'filter': ['==', 'name', 'Suspected Drop Zone']
    });

    document.getElementById('e-01').addEventListener('click', function() {
        map.flyTo({
            center: [-122.803, 46.489],
            zoom: 7.5,
            bearing: 90,
            pitch: 30,
            essential: true,
            duration: 4000,
        });
        timeline.parentNode.scrollLeft = 0;
        timeline.style.transform = 'translateX(0px)';
        timelineTitle.style.transform = 'translateY(0px)';
        timelineTitle.style.opacity = '1';
        eventInfo.innerHTML = '';
    });
    document.getElementById('e-02').addEventListener('click', function() {
        map.flyTo({
            center: [-122.594157, 45.589328],
            zoom: 12,
            bearing: 0,
            pitch: 30,
            essential: true,
            duration: 4000,
        });
        timeline.parentNode.scrollLeft = 0;
        timeline.style.transform = 'translateX(-190px)';
        timelineTitle.style.transform = 'translateY(-400px)';
        timelineTitle.style.opacity = '0';
        eventInfo.innerHTML = 'A man with a briefcase going by the name Dan Cooper purchased a one way ticket for Seattle, Washington at Portland International Airport, boarding Northwest Airlines Flight 305.';
    });
    document.getElementById('e-03').addEventListener('click', function() {
        map.flyTo({
            center: [-122.594157, 45.589328],
            zoom: 12,
            bearing: 0,
            pitch: 30,
            essential: true,
            duration: 3000,
        });
        timeline.parentNode.scrollLeft = 0;
        timeline.style.transform = 'translateX(-380px)';
        timelineTitle.style.transform = 'translateY(-400px)';
        timelineTitle.style.opacity = '0';
        eventInfo.innerHTML = 'Once the flight took off, Cooper passed a note to flight attendant Florence Schaffner which stated that he had a bomb and would want the flight attendant to sit next to him.'
    });
    document.getElementById('e-04').addEventListener('click', function() {
        map.flyTo({
            center: [-122.594157, 45.589328],
            zoom: 12,
            bearing: 0,
            pitch: 30,
            essential: true,
            duration: 5000,
        });
        
        timeline.parentNode.scrollLeft = 0;
        timeline.style.transform = 'translateX(-570px)';
        timelineTitle.style.transform = 'translateY(-400px)';
        timelineTitle.style.opacity = '0';
        eventInfo.innerHTML = 'Cooper showed the briefcase with the bomb and told Schaffner his demands: $200,000 in negotiable American currency in a knapsack, two front parachutes, and two back parachutes by 5 PM.'
    });
    document.getElementById('e-05').addEventListener('click', function() {
        map.flyTo({
            center: [-122.302697, 47.443570], 
            zoom: 10,
            bearing: 70,
            pitch: 30,
            essential: true,
            duration: 5000,
        });
        
        timeline.parentNode.scrollLeft = 0;
        timeline.style.transform = 'translateX(-760px)';
        timelineTitle.style.transform = 'translateY(-400px)';
        timelineTitle.style.opacity = '0';
        eventInfo.innerHTML = 'Flight 305 went into a holding pattern over Seattle as ground control at the Seattle-Tacoma International Airport began discussing the matter with the crew of the 727 while procuring the demands.'
    });
    document.getElementById('e-06').addEventListener('click', function() {
        map.flyTo({
            center: [-122.302697, 47.443570], 
            zoom: 12,
            bearing: 90,
            pitch: 30,
            essential: true,
            duration: 3000,
        });
        
        timeline.parentNode.scrollLeft = 0;
        timeline.style.transform = 'translateX(-950px)';
        timelineTitle.style.transform = 'translateY(-400px)';
        timelineTitle.style.opacity = '0';
        eventInfo.innerHTML = 'Flight 305 touches down in Seattle, and Cooper allows the 36 passengers (most of whom did not know they had been hijacked) to leave the plane in exchange for the ransom money and parachutes.'
    });
    document.getElementById('e-07').addEventListener('click', function() {
        map.flyTo({
            center: [-122.302697, 47.443570], 
            zoom: 12,
            bearing: 90,
            pitch: 30,
            essential: true,
            duration: 3000,
        });
        
        timeline.parentNode.scrollLeft = 0;
        timeline.style.transform = 'translateX(-1140px)';
        timelineTitle.style.transform = 'translateY(-400px)';
        timelineTitle.style.opacity = '0';
        eventInfo.innerHTML = 'After a delay in refueling, Cooper became impatient and wanted to "get this show on the road." He then told the cockpit crew his flight plan: a path toward Mexico City at 100 knots and maximum 10,000 foot altitude with the landing gears deployed, wing flaps at 15 degrees, and the cabin unpressurized.'
    });
    document.getElementById('e-08').addEventListener('click', function() {
        map.flyTo({
            center: [-122.302697, 47.443570], 
            zoom: 10,
            bearing: 70,
            pitch: 30,
            essential: true,
            duration: 4000,
        });
        
        timeline.parentNode.scrollLeft = 0;
        timeline.style.transform = 'translateX(-1330px)';
        timelineTitle.style.transform = 'translateY(-400px)';
        timelineTitle.style.opacity = '0';
        eventInfo.innerHTML = 'Flight 305 takes off from Seattle, with Cooper and the pilots agreeing on heading south towards Reno as a refueling stop, as there was not enough fuel for Mexico City.'
    });
    document.getElementById('e-09').addEventListener('click', function() {
        map.flyTo({
            center: [-122.6506, 46.0871],
            zoom: 10,
            bearing: 45,
            pitch: 30,
            essential: true,
            duration: 4000,
        });
        
        timeline.parentNode.scrollLeft = 0;
        timeline.style.transform = 'translateX(-1520px)';
        timelineTitle.style.transform = 'translateY(-400px)';
        timelineTitle.style.opacity = '0';
        eventInfo.innerHTML = 'After Cooper told the flight attendant to go into the cockpit and not to return, he opened the rear staircase of the plane.'
    });
    document.getElementById('e-10').addEventListener('click', function() {
        map.flyTo({
            center: [-122.541, 45.894],
            zoom: 10.5,
            bearing: 60,
            pitch: 30,
            essential: true,
            duration: 5000,
        });
        
        timeline.parentNode.scrollLeft = 0;
        timeline.style.transform = 'translateX(-1710px)';
        timelineTitle.style.transform = 'translateY(-400px)';
        timelineTitle.style.opacity = '0';
        eventInfo.innerHTML = 'The aircraft experienced a sudden upward movement, causing the flight crew to assume that Cooper had jumped from the rear of the plane.'
    });
    document.getElementById('e-11').addEventListener('click', function() {
        map.flyTo({
            center: [-119.771395, 39.499964],
            zoom: 10,
            bearing: 65,
            pitch: 30,
            essential: true,
            duration: 5000,
        });
        
        timeline.parentNode.scrollLeft = 0;
        timeline.style.transform = 'translateX(-1900px)';
        timelineTitle.style.transform = 'translateY(-400px)';
        timelineTitle.style.opacity = '0';
        eventInfo.innerHTML = 'The plane lands safely at Reno-Tahoe International Airport and the police search the plane, hesitant of the hijacker and bomb. They, however, find neither Cooper, the bomb, or the ransom money.'
    });
    document.getElementById('e-12').addEventListener('click', function() {
        map.flyTo({
            center: [-122.543, 45.934],
            zoom: 11.5,
            bearing: 85,
            pitch: 30,
            essential: true,
            duration: 5000,
        });
        
        timeline.parentNode.scrollLeft = 0;
        timeline.style.transform = 'translateX(-2090px)';
        timelineTitle.style.transform = 'translateY(-400px)';
        timelineTitle.style.opacity = '0';
        eventInfo.innerHTML = 'The FBI searched the approximate landing zone of Cooper\'s jump, but after a lengthy investigation, could not find any additional clues on Cooper\'s (or the ransom money\'s) whereabouts.'
    });
});

