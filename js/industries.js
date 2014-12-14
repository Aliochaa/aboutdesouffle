$(function() {

	if($('#industries').length) {
		$('#rubrique #rubrique3 a').addClass('ici');

		var minimal = L.mapbox.tileLayer('julesbonnard.hmk3p3hp');
		minimal.on('ready', function() {

			var etablissements = {},
			rejets = {
				CO2: {},
				NO2: {},
				CO: {},
				SO2: {},
				COVNM: {}
			},
			layers = {
				CO2: new L.LayerGroup(),
				COVNM: new L.LayerGroup(),
				CO: new L.LayerGroup(),
				NO2: new L.LayerGroup(),
				SO2: new L.LayerGroup()
			},
			colors = {
				 CO2: '#f2443c',
				 NO2: '#f2443c',
				 CO: '#f2443c',
				 SO2: '#f2443c',
				 COVNM: '#f2443c'
					}
			opacityNormal = 0.1,
			etablissements_layer = new L.LayerGroup(),
			southWest = new L.LatLng(44.9555, 5.44098),
	    	northEast = new L.LatLng(45.428496, 6.077249),
		    	coefficient = 6,
		    	year = 2012;

		    	var Chimie = new L.icon({
			    iconUrl: 'img/blue.png',
			    iconSize: [32, 37],
			    iconAnchor: [16, 37],
			    popupAnchor: [0, -37],
			});
			var Chaufferie = new L.icon({
			    iconUrl: 'img/red.png',
			    iconSize: [32, 37],
			    iconAnchor: [16, 37],
			    popupAnchor: [0, -37],
			});
			var Papeterie = new L.icon({
			    iconUrl: 'img/yellow.png',
			    iconSize: [32, 37],
			    iconAnchor: [16, 37],
			    popupAnchor: [0, -37],
			});
			var Cimenterie = new L.icon({
			    iconUrl: 'img/purple.png',
			    iconSize: [32, 37],
			    iconAnchor: [16, 37],
			    popupAnchor: [0, -37],
			});

			//var cloudmadeUrl = 'http://{s}.tile.cloudmade.com/fb5ddc78fe8b4495b0932f8b2b229c84/{styleId}/256/{z}/{x}/{y}.png',
			//cloudmadeAttribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>';

			// var minimal = L.tileLayer(cloudmadeUrl, {
			// 	styleId: 125254,
			//     attribution: cloudmadeAttribution
			// });

			//fonction pour séparer les milliers (ne pas toucher)
			function format(valeur,decimal,separateur) {
			// formate un chiffre avec 'decimal' chiffres après la virgule et un separateur
			  var deci=Math.round( Math.pow(10,decimal)*(Math.abs(valeur)-Math.floor(Math.abs(valeur)))) ; 
			  var val=Math.floor(Math.abs(valeur));
			  if ((decimal==0)||(deci==Math.pow(10,decimal))) {val=Math.floor(Math.abs(valeur)); deci=0;}
			  var val_format=val+"";
			  var nb=val_format.length;
			  for (var i=1;i<4;i++) {
			    if (val>=Math.pow(10,(3*i))) {
			      val_format=val_format.substring(0,nb-(3*i))+separateur+val_format.substring(nb-(3*i));
			    }
			  }
			  if (decimal>0) {
			    var decim=""; 
			    for (var j=0;j<(decimal-deci.toString().length);j++) {decim+="0";}
			    deci=decim+deci.toString();
			    val_format=val_format+"."+deci;
			  }
			  if (parseFloat(valeur)<0) {val_format="-"+val_format;}
			  return val_format;
			}
		          
			var googleLayer = new L.Google('SATELLITE');

			var baseLayers = {"Minimal" : minimal, 'Carte Satellite' : googleLayer};

			var map = L.map('map', {
			    center: new L.LatLng(45.188529, 5.724524),
			    zoom: 11,
			    maxZoom: 16,
			    minZoom: 11,
			    maxBounds: new L.LatLngBounds(southWest, northEast),
			    bounceAtZoomLimits: false
			});

			map.addLayer(minimal);

			function setSizeCircle(attr){
			  return Math.sqrt(attr/Math.PI)*coefficient;
			}

			function addMouseover(feature) {
				$.each(rejets,function(key,value) {
					$.each(rejets[key],function(key2,value2) {
						if(rejets[key][key2] && key2 !== feature) {
							rejets[key][key2].setStyle({fillOpacity: 0})
						}
					});
				});
				if(rejets.CO2[feature]) {
					rejets.CO2[feature].setStyle({weight: 5})
				}
				if(rejets.NO2[feature]) {
					rejets.NO2[feature].setStyle({weight: 5})
				}
				if(rejets.SO2[feature]) {
					rejets.SO2[feature].setStyle({weight: 5})
				}
				if(rejets.CO[feature]) {
					rejets.CO[feature].setStyle({weight: 5})
				}
				if(rejets.COVNM[feature]) {
					rejets.COVNM[feature].setStyle({weight: 5})
				}
			}
			function addMouseout(feature) {
				$.each(rejets,function(key,value) {
					$.each(rejets[key],function(key2,value2) {
						if(rejets[key][key2] && key2 !== feature) {
							rejets[key][key2].setStyle({fillOpacity: opacityNormal})
						}
					});
				});
				if(rejets.CO2[feature]) {
					rejets.CO2[feature].setStyle({weight: 2})
				}
				if(rejets.NO2[feature]) {
					rejets.NO2[feature].setStyle({weight: 2})
				}
				if(rejets.SO2[feature]) {
					rejets.SO2[feature].setStyle({weight: 2})
				}
				if(rejets.CO[feature]) {
					rejets.CO[feature].setStyle({weight: 2})
				}
				if(rejets.COVNM[feature]) {
					rejets.COVNM[feature].setStyle({weight: 2})
				}
			}

			function formatPopup(objet,polluant,annee,unite){
				return "<b>"+objet.nom_etablissement+"</b><br />"+polluant+" en "+annee+" : "+format(objet.polluants[polluant][polluant+" "+annee],0," ")+" "+unite;
			}

			$.getJSON('data/industries.json', function(donnees) {

				function changeYear(newYear) {
					$.each(donnees.etablissements,function(key,value) {
						$.each(rejets,function(key2,value2) {
							if(key2!=='CO2') {
								var unite = "";
								if(key2 == 'CO2') {
									unite = 't/an';
								}
								else {
									unite = 'kg/an';
								}
								if(value.polluants[key2] != null) {
									if(value.polluants[key2][key2+" "+newYear] != null) {
										if(rejets[key2][value.nom_etablissement]) {
											rejets[key2][value.nom_etablissement].setRadius(setSizeCircle(value.polluants[key2][key2+" "+newYear]));
											rejets[key2][value.nom_etablissement]['popup'].setContent(formatPopup(value,key2,newYear,unite));
										}
										else {
											rejets[key2][value.nom_etablissement] = L.circle([value.latitude, value.longitude], 
																				setSizeCircle(value.polluants[key2][key2+" "+newYear]),
																				{
																					fill: true,
																					color: colors[key2], 
																					fillColor: colors[key2], 
																					fillOpacity: opacityNormal, 
																					weight: 2
																				}
																				);
											rejets[key2][value.nom_etablissement]['popup'] = new L.popup().setContent(formatPopup(value,key2,newYear,unite));
											rejets[key2][value.nom_etablissement].bindPopup(rejets[key2][value.nom_etablissement]['popup']);
											layers[key2].addLayer(rejets[key2][value.nom_etablissement]);
										}
									}
									else {
										if(rejets[key2][value.nom_etablissement]) {
											map.removeLayer(rejets[key2][value.nom_etablissement]['popup']);
											map.removeLayer(rejets[key2][value.nom_etablissement]);
											layers[key2].removeLayer(rejets[key2][value.nom_etablissement]);
											delete rejets[key2][value.nom_etablissement];
										}
									}
								}
							}
						});
					});
				}
				changeYear(year);

				$.each(donnees.etablissements,function(key,value) {
					if(value.categorie=='chimie') {
						etablissements[value.nom_etablissement] = L.marker([value.latitude, value.longitude], {
							icon: Chimie
						});
					}
					else if(value.categorie=='chaufferie') {
						etablissements[value.nom_etablissement] = L.marker([value.latitude, value.longitude], {
							icon: Chaufferie
						});
					}
					else if(value.categorie=='papeterie') {
						etablissements[value.nom_etablissement] = L.marker([value.latitude, value.longitude], {
							icon: Papeterie
						});
					}
					else if(value.categorie=='cimenterie') {
						etablissements[value.nom_etablissement] = L.marker([value.latitude, value.longitude], {
							icon: Cimenterie
						});
					}
					etablissements_layer.addLayer(etablissements[value.nom_etablissement]).addTo(map);
					etablissements[value.nom_etablissement].on('mouseover', function(e){
					    addMouseover(value.nom_etablissement);
					});
					etablissements[value.nom_etablissement].on('mouseout', function(e){
					    addMouseout(value.nom_etablissement);
					});
					etablissements[value.nom_etablissement].bindPopup("<b>"+value.nom_etablissement+"</b><br>");
				});

				$('#timeline #annees li').on('click',function(d) {
					changeYear($(this).text());
					year = $(this).text();
					$('#timeline li').removeClass('select');
					$(this).addClass('select');
				});
				$('#timeline #annees li').on('mouseover',function(d) {
					changeYear($(this).text());
				});
				$('#timeline #annees').on('mouseout',function(d) {
					changeYear(year);
				});
			});

			L.control.layers(baseLayers,null,{position: 'bottomleft'}).addTo(map);

			$('#filtre li').on('click',function(d) {
				if(d.currentTarget.id !== 'rien') {
					if(map.hasLayer(layers[d.currentTarget.id])==false) {
						layers[d.currentTarget.id].addTo(map);
					}
					$.each(layers,function(key,value) {
						if(key !== d.currentTarget.id) {
							map.removeLayer(layers[key]);
						}
					});
				}
				else {
					$.each(layers,function(key,value) {
						map.removeLayer(layers[key]);
					});
				}

				
					
				$('#filtre li').removeClass('filtre_actif');
				$(this).addClass('filtre_actif');
			});
			layers['NO2'].addTo(map);
		});
		$('#timeline li').removeClass('select').addClass('grise');
		$('#timeline li:nth-of-type(10)').addClass('select');
	}
});