mapboxgl.accessToken = 'pk.eyJ1IjoiY29kaW5nYWxlbGVvMjYiLCJhIjoiY2x1anNxcGNnMGQ0ZzJucjBkc3M3Nml3eCJ9.ZLAvpZ2wIAw8jPVbgcKIFA';
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

    map.addLayer({
        'id': 'poi-labels',
        'type': 'circle',
        'source': 'poi',
        'layout': {
            'text-field': ['get', 'name'],
            'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
            'text-radial-offset': 0.5,
            'text-justify': 'auto'
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

    const eventInfo = document.getElementById('timeline-info');
    const timeline = document.getElementById('timeline');

    document.getElementById('e-01').addEventListener('click', function() {
        map.flyTo({
            center: [-122.803, 46.489],
            zoom: 7.5,
            bearing: 90,
            pitch: 30,
            essential: true
        });
        timeline.style.transform = 'translateX(0px)'
        eventInfo.innerHTML = 'The NORJAK Case (D.B. Cooper)'
    });
    document.getElementById('e-02').addEventListener('click', function() {
        map.flyTo({
            center: [-122.594157, 45.589328],
            zoom: 12,
            bearing: 0,
            pitch: 30,
            essential: true
        });
        timeline.style.transform = 'translateX(-190px)'
        eventInfo.innerHTML = 'A man with a briefcase going by the name Dan Cooper purchased a one way ticket for Seattle, Washington at Portland International Airport, boarding Northwest Airlines Flight 305.'
    });
    document.getElementById('e-03').addEventListener('click', function() {
        map.flyTo({
            center: [-122.594157, 45.589328],
            zoom: 12,
            bearing: 0,
            pitch: 30,
            essential: true
        });
        timeline.style.transform = 'translateX(-380px)'
        eventInfo.innerHTML = 'Once the flight took off, Cooper passed a note to flight attendant Florence Schaffner which stated that he had a bomb and would want the flight attendant to sit next to him.'
    });
    document.getElementById('e-04').addEventListener('click', function() {
        map.flyTo({
            center: [-122.594157, 45.589328],
            zoom: 12,
            bearing: 0,
            pitch: 30,
            essential: true
        });
        timeline.style.transform = 'translateX(-570px)'
        eventInfo.innerHTML = 'Cooper showed the briefcase with the bomb and told Schaffner his demands: $200,000 in negotiable American currency in a knapsack, two front parachutes, and two back parachutes by 5 PM.'
    });
});

