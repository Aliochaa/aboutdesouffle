<?php
require_once('header.php');
?>

		<!-- MAIN -->
		<div id="industries">
			<!-- BLOC LEGENDE -->
			<div id="legende"><img class="picto" src="img/picto_industries.png" alt="picto_industries.png"/>
				<!-- LEGENDE_MOTIF -->
				<ul id="industry">
					<li>PAPETERIE <img src="img/yellow.png" alt="papeterie.png"/></li>
					<li>CHIMIE <img src="img/blue.png" alt="chimie.png"/></li>
					<li>CIMENTERIE <img src="img/purple.png" alt="cimenterie.png"/></li>
					<li>CHAUFFERIE <img src="img/red.png" alt="chaufferie.png"/></li>
				</ul>
				<!-- FIN LEGENDE_MOTIF -->
				<!-- FILTRE -->
				<h2 class="titre_legende">Sélection des polluants</h2>
				<ul id="filtre">
					<li id="rien">Sans polluant</li>
					<li id="NO2" class="filtre_actif">NO₂ - Dioxyde d'azote</li>
					<li  id="COVNM">COVNM - Composés</br> organiques volatils</li>
					<li id="CO" >CO - Monoxydes de carbone</li>
					<li id="SO2">SO₂ - Oxydes de souffre</li>
				</ul>
				<div id='legend-source'>
					<strong>Données</strong>
					<a href="http://www.irep.ecologie.gouv.fr/IREP/index.php" target="_blank">iREP</a><br />
				</div>

			</div>

			<a id="aide" href="#"><img src="img/aide_industries.png"></a>
			<div id="aide_industries">
				<a class="close" href="#"><img id="fermer" src="img/croix.png"></a>
				<h2>AIDE</h2>
				<p>La taille des cercles de polluants indique la quantité de polluants émises par an. Elle ne désigne pas la zone géographique impactée par ses polluants.<br />
					<a href="http://www.irep.ecologie.gouv.fr/IREP/index.php" target="_blank">Source iREP</a></p>
				<img id="aide_cercle" src="img/legende_cercles.png">
			</div>
			<!-- FIN BLOC LEGENDE -->
			<!-- BLOC INFOS -->
			<div id="infos">
				<h2>Pont-de-Claix : l’axe chimique</h2>
				<p style="width:auto; height:120px; overflow-y:scroll;">Le Registre français des émissions polluantes (iREP) permet d’identifier les industries de l’agglomération grenobloise et l’évolution de leur impact sur l’environnement. Nous avons sélectionné les principaux polluants pris en compte dans l’indice atmosphérique puis localisé et catégorisé les usines qui en sont à l'origine. Depuis une dizaine d’années, les émissions de dioxyde de souffre, un gaz irritant produit par les industries chimiques, ont fortement diminué. Par ailleurs, des actions sont menées avec les chaufferies de Grenoble pour diminuer leurs émissions d’oxydes d’azote. Enfin, le nouveau Plan de protection de l’atmosphère prévoit de réduire les émissions de particules fines dans le secteur des carrières, ici non renseignées.</p>
				
				<iframe class="video_infos" src="//player.vimeo.com/video/92084719?api=1&amp;amp;color=d7c49b" width="260" height="200" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> 
				
			</div>			
			<!-- FIN BLOC -->
			<!-- PICTO VIDEO -->
			
			<!-- FIN PICTO VIDEO -->

			<!-- MAP -->
			<div id="map-container">

			<div id="map"></div>
			</div>
			<!-- FIN MAP -->
		</div>
		<!-- FIN MAIN -->

<?php
$jesuisou = array("2012","2011","2010","2009","2008","2007","2006","2005","2004","2003");
require_once('footer.php');
?>