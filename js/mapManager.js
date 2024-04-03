mapboxgl.accessToken = 'pk.eyJ1IjoiY29kaW5nYWxlbGVvMjYiLCJhIjoiY2x1anNxcGNnMGQ0ZzJucjBkc3M3Nml3eCJ9.ZLAvpZ2wIAw8jPVbgcKIFA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/codingaleleo26/clublyh0k01x601nwb3f6ci8i'
});

map.on('load', () => {
    map.addSource('poi', {
        type: 'geojson',
        data: './geodata/features.geojson'
    });

    map.addLayer({
        'id': 'points-of-interest',
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
});