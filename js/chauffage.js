$(function() {

	if($('#chauffage').length) {
		$('#rubrique #rubrique4 a').addClass('ici');
	
		var southWest = new L.LatLng(44.9055, 5.44098),
	    northEast = new L.LatLng(45.328496, 5.977249),
	    selected = [];

		// var cloudmadeUrl = 'http://{s}.tile.cloudmade.com/de93878ad9074fe284139be40eca408b/{styleId}/256/{z}/{x}/{y}.png',
		// cloudmadeAttribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>';

		// var minimal = L.tileLayer(cloudmadeUrl, {
		// 	styleId: 126106,
		//     attribution: cloudmadeAttribution
		// });

		var minimal = L.mapbox.tileLayer('julesbonnard.hmk3p3hp');
		minimal.on('ready', function() {

			var googleLayer = new L.Google('SATELLITE');

			var baseLayers = {"Minimal" : minimal, 'Carte Satellite' : googleLayer};

			var map = L.map('map', {
			    center: new L.LatLng(45.15, 5.72),
			    zoom: 11,
			    maxZoom: 13,
			    minZoom: 10,
			    maxBounds: new L.LatLngBounds(southWest, northEast),
			    bounceAtZoomLimits: false
			});

			map.addLayer(minimal);

			function colorer(propriete) {
				var couleur;
				switch(propriete)
					{
					case 'Bois':
					  couleur = '#663E10';
					  break;
					case 'Transport':
					  couleur = '#046380';
					  break;
					case 'Industrie':
						couleur = '#FFF168';
						break;
					default:
					  couleur = '#bdbdbd';
					}
					return couleur;
			}

			function nombre(nombre) {
				nombre = nombre.replace('%','');
				nombre = nombre.replace(',','.');
				nombre = parseFloat(nombre);
				return nombre;
			}

			function update_graph(feature) {
				$('#graph_title').html('<h4>Répartition pour <br />'+feature.properties.nom);
		    	chart.series[0].setData([
		    			{
		    				name:'Agriculture',
		    				y:nombre(feature.properties.data_chauffage_PM10_agriculture),
		    				color:'#677E52'
		    			},
		    			{
		    				name:'Industrie',
		    				y:nombre(feature.properties.data_chauffage_PM10_industrie),
		    				color:'#FFF168'
		    			},
		    			{
		    				name:'Résidentiel sans chauffage au bois',
		    				y:nombre(feature.properties.data_chauffage_PM10_Residentiel_autres),
		    				color:'#B9121B'
		    			},
		    			{
		    				name:'Chauffage au bois',
		    				y:nombre(feature.properties.data_chauffage_PM10_Residentiel_bois),
		    				color:'#663E10'
		    			},
		    			{
		    				name:'Tertiaire',
		    				y:nombre(feature.properties.data_chauffage_PM10_Tertiaire),
		    				color:'#FF5B2B'
		    			},
		    			{
		    				name:'Transports',
		    				y:nombre(feature.properties.data_chauffage_PM10_transports),
		    				color:'#046380'
		    			}
		    		]
		    	);
			}

			$.getJSON( "data/chauffage.geojson", function( data ) {
				var communes = new L.geoJson(data, {
				    style: function (feature) {
				        return {
				        	fillOpacity: 0.4, 
				        	opacity: 1,
				        	stroke: true,
				        	weight: 1,
				        	color: colorer(feature.properties.data_chauffage_Poll_max_pm10)
				        };
				    },
				    onEachFeature: function(feature, layer) {
						layer.on('mouseover', function () {
		                    layer.setStyle({fillOpacity: 0.8});
		                });
		                layer.on('mouseout', function () {
		                	if(layer !== selected) {
		                		layer.setStyle({fillOpacity: 0.4});
		                	}
		                });
		                layer.on('click',function() {
		                	communes.setStyle({fillOpacity: 0.4});
		                	layer.setStyle({fillOpacity: 0.8});
		                	update_graph(feature);
		                	selected = layer;
		                });
				    }
				}).addTo(map);
				update_graph(data.features[36]);
			});

			// function onMapClick(e) {
			//     alert("You clicked the map at " + e.latlng);
			// }

			// map.on('click', onMapClick);

			// var titre = L.control();

			// titre.onAdd = function (map) {
			//   var divTitre = L.DomUtil.create('div', 'titre'); 
			//   divTitre.innerHTML = '<h4>Chauffage au bois : principal polluant en milieu rural</h4>';
			//   return divTitre;
			// };

			// titre.addTo(map); 

			var overlayMaps = {
				
			};

			L.control.layers(baseLayers, overlayMaps,{position: 'bottomleft'}).addTo(map);

			// var legend = L.control({position: 'bottomleft'}); 

			// legend.onAdd = function (map) {
			//  var divLeg = L.DomUtil.create('div', 'my-legend');
			//  divLeg.innerHTML = $('.legende').html();
			//  return divLeg;
			// }; 

			// legend.addTo(map);

			$('#graph').highcharts({
		        chart: {
		            plotBackgroundColor: null,
		            plotBorderWidth: null,
		            plotShadow: false,
		            backgroundColor:null
		        },
		        title: false,
		        tooltip: {
		    	    pointFormat: '<b>{point.percentage:.1f}%</b>'
		        },
		        plotOptions: {
		            pie: {
		                allowPointSelect: false,
		                dataLabels: {
		                    enabled: false,
		                    color: '#000000',
		                    connectorColor: '#000000',
		                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
		                }
		            }
		        },
		        series: [{
		            type: 'pie',
		            data: null
		        }]
		    });
			var chart = $('#graph').highcharts();
		});
		$('#timeline li').removeClass('select').addClass('grise');
		$('#timeline li:nth-of-type(8)').addClass('select');
	}
});