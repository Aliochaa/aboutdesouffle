$(function() {

	if ($('#trafic').length) {

		$('#rubrique #rubrique2 a').addClass('ici');

		var southWest = new L.LatLng(45.06964, 5.57659),
			northEast = new L.LatLng(45.27271, 5.90515),
			coefficient = 6;

		var imageUrlNO2 = './img/no2.jpg',
			imageUrlPM10moy = './img/pm10-moyenne.jpg',
			imageUrlPM10jours = './img/pm10-jours.jpg',
			imageUrlPM25moy = './img/pm25-moyenne.jpg',
			imageUrlO3 = './img/o3.jpg',
			imageBounds = [
				[45.06964, 5.57659],
				[45.27271, 5.90515]
			];

		var layers = {};
		layers['NO2'] = L.imageOverlay(imageUrlNO2, imageBounds, {
			opacity: .5
		});
		layers['PM10moy'] = L.imageOverlay(imageUrlPM10moy, imageBounds, {
			opacity: .5
		});
		layers['PM10jours'] = L.imageOverlay(imageUrlPM10jours, imageBounds, {
			opacity: .5
		});
		layers['PM25'] = L.imageOverlay(imageUrlPM25moy, imageBounds, {
			opacity: .5
		});
		layers['O3'] = L.imageOverlay(imageUrlO3, imageBounds, {
			opacity: .5
		});

		var googleLayer = new L.Google('SATELLITE');

		var minimal = L.mapbox.tileLayer('julesbonnard.hmk3p3hp');

		var baseLayers = {
			"Minimal": minimal,
			'Carte Satellite': googleLayer
		};

		var map = L.map('map', {
			center: new L.LatLng(45.188529, 5.724524),
			zoom: 13,
			maxZoom: 15,
			minZoom: 13,
			maxBounds: new L.LatLngBounds(southWest, northEast),
			bounceAtZoomLimits: false
		});

		L.control.layers(baseLayers, null, {
			position: 'bottomleft'
		}).addTo(map);


		$('#filtre li').on('click', function(d) {
			if (map.hasLayer(layers[d.currentTarget.id]) == false) {
				layers[d.currentTarget.id].addTo(map);
			}
			$.each(layers, function(key, value) {
				if (key !== d.currentTarget.id) {
					map.removeLayer(layers[key]);
				}
			});
			$('#filtre li').removeClass('filtre_actif');
			$(this).addClass('filtre_actif');
			$('#legend_ara_trafic').attr('src', 'img/legende_' + d.currentTarget.id + '.png');
		});
		minimal.on('ready', function() {
			minimal.addTo(map);
			layers['NO2'].addTo(map);
		});
	}
});