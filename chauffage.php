<?php
require_once('header.php');
?>

		<!-- MAIN -->
		<div id="chauffage">
			<!-- BLOC LEGENDE -->
			<div id="legende">
				<!-- PICTO / -->
				<img class="picto" src="img/picto_chauffage.png" alt="picto_chauffage"/>
				
				<!-- POLLUANTS -->
				<div class="legende">
					<div class='legend-title'>Principale origine <br />des émissions de particules fines</div>
					<div class='legend-scale'>
					  	<ul class='legend-labels'>
							<li><span style='background:#663E10;'></span>Chauffage au bois</li>
							<li><span style='background:#046380;'></span>Transports</li>
							<li><span style='background:#FFF168;'></span>Industrie</li>
						</ul>
					</div>
					<div style="clear:both;"></div>
					<div id="graph_title" class="legend-title"></div>
					<div id="graph"></div>
					<div class='legend-source'>
						<strong>Données</strong><br /><a href="http://www.air-rhonealpes.fr/" target="_blank">Air Rhône-Alpes</a><br />
					</div>
				</div>
				<!-- /POLLUANTS -->
			</div>
			<!-- /BLOC LEGENDE -->

			<!-- BLOC INFOS -->
			<div id="infos">
				<h2>Feu de bois : le fléau rural</h2>
				<p style="width:auto;height:120px; overflow-y:scroll;">Le cadastre des émissions polluantes permet d’identifier l’origine des particules fines (PM10) au sein de la Metro, la communauté d'agglomération de Grenoble. Si les axes routiers sont à l’origine de la majorité des émissions dans les communes qu’ils traversent, les communes péri-urbaines et rurales voient la majeure partie de leurs émissions causées par le chauffage individuel au bois. L’hiver, ces cendres volatiles sont à l’origine des forts épisodes de pollution dans toute l’agglomération. Malheureusement, Air Rhône-Alpes ne souhaite pas diffuser les données quantitatives des émissions de chaque commune, jugées trop sensibles.</p>
				<!--VIDEO  -->
				<iframe class="video_infos" src="//player.vimeo.com/video/92074710?api=1&amp;amp;color=d7c49b" width="260" height="200" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> 
				<!-- /VIDEO -->				
			</div>			
			<!--  /BLOC INFOS -->

			<!-- MAP -->
			<div id="map-container">
				<div id="map"></div>
			</div>
		</div>
		<!-- FIN MAIN -->

<?php
$jesuisou = array("2010");
require_once('footer.php');
?>