<?php
require_once('header.php');
?>

		<!-- MAIN -->
		<div id="trafic">
			<!-- BLOC LEGENDE -->
			<div id="legende">
				<!-- PICTO / -->
				<img class="picto" src="img/picto_trafic.png" alt="picto_trafic"/>
				
				<!-- POLLUANTS -->
				<h2 class="titre_legende">Dispersion des polluants</h2>
				<ul id="filtre">
					<li id="NO2" class="filtre_actif">NO₂ - Dioxyde d'azote</li>
					<li id="PM10moy">PM10 - Particules fines</li>
					<li id="PM25">PM2.5 - Particules très fines</li>
					<li id="O3" >O₃ - Ozone</li>
				</ul>
				<img id="legend_ara_trafic" src="img/legende_NO2.png" width="100%" />			
				
				<div id='legend-source'>
					<h2 class="legende">Moyenne annuelle en µg/m³</h2>
					<strong>Données </strong>
					<a href="http://www.air-rhonealpes.fr/" target="_blank">Air Rhône-Alpes</a><br />
				</div>
				<!-- /POLLUANTS -->

			</div>
			<!-- /BLOC LEGENDE -->

			<!-- BLOC INFOS -->
			<div id="infos">
				<h2>Oxydes d’azote : la menace invisible</h2>
				<p style="width:auto;height:120px; overflow-y:scroll;">Cette modélisation de dispersion des polluants a été réalisée grâce aux relevés des stations fixes et mobiles de mesure de la qualité de l’air, mais également grâce à des données topographiques, météorologiques et de trafic. L’ozone, formée par l’action du rayonnement solaire sur des produits chimiques industriels, est le polluant le plus diffus dans la basse atmosphère grenobloise. Suivent les particules, dont les plus fines (2,5 micromètres) sont portées par les vents très loin de leurs lieux d’émission. Les oxydes d’azotes, produits à 70% par les moteurs essence et diesel, et dangereux pour les voies respiratoires, sont en revanche localisés en très forte concentration à proximité immédiate des axes routiers.</p>
				<!--VIDEO  -->
				<iframe class="video_infos" src="http://player.vimeo.com/video/92126737?api=1&amp;amp;color=d7c49b" width="260" height="200" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> 
				<!-- /VIDEO -->				
			</div>			
			<!--  /BLOC INFOS -->

			<!-- MAP -->
			<div id="map-container">

			<div id="map"></div>
			</div>
			<!-- FIN MAP -->
		</div>
		<!-- FIN MAIN -->

<?php
$jesuisou = array("2012");
require_once('footer.php');
?>