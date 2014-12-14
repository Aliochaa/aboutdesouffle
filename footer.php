		<a id="infos_pol" class="popup-modal" href="#info_polluant">
				<img src="img/info_picto.png">
		</a>
		 <div id="info_polluant" class="white-popup-block mfp-hide">
			
			<a class="popup-modal-dismiss" href="#"><img src="img/fleche.png"/></a>
			<img class="img_pol" src="img/description polluants PPA.jpg">
		</div>
		<!-- BLOC ATMO -->
		<div id="atmo_day">
			<!-- TITRE -->
			<h2>INDICE ATMOSPHERIQUE</h2>
			
			<!-- DATE -->
			<h6 class="date">Aujourd'hui</h6><br />
			
			<!-- CARRE -->
			<div id="carre_atmo">
				<h1>...</h1>
				<hr></hr>
				<h6>10</h6>
			</div>
			
			<!-- LIEN POPUP -->
			<h6 class="previsions"><a class="popup-modal" href="#test-modal">Voir les prévisions</a></h6>
		</div>

		<!-- POPUP ATMO -->
		<div id="test-modal" class="white-popup-block mfp-hide">
			<!-- FERMETURE POPUP -->
			<a class="popup-modal-dismiss" href="#"><img src="img/fleche.png"/></a>

			<!-- BLOC PREV ATMO -->
			<div id="indice_day">
			   	<div id="yesterday" class="bloc_day">
			   		<p class="jour">Hier</p>
			   		<span class="date">Hier</span><br />
			    	<p class="ATMO">...</p><br />
			    	<table class="details">
			   			<tr>
		    				<td class="pm10"><span title="particule fines" class="pm10">...</span></td>
		    				<td><span title="dioxyde de souffre" class="no2">...</span></td>
		    				<td><span title="dioxyde d'azote" class="so2">...</span></td>
		    				<td><span title="ozone" class="o3">...</span></td>
		    			</tr>
		    		</table>
		   
		    	</div>
		    	<div id="today" class="bloc_day">
		    		<p class="jour">Aujourd'hui</p>
		    		<span class="date">Aujourd'hui</span><br />
		    		<p class="ATMO">...</p><br />
		    		<table class="details">
		    			<tr>
		    				<td><span title="particule fines" class="pm10">...</span></td>
		    				<td><span title="dioxyde de souffre" class="no2">...</span></td>
		    				<td><span title="dioxyde d'azote" class="so2">...</span></td>
		    				<td><span title="ozone" class="o3">...</span></td>
		    			</tr>
		    		</table>
		    	</div>
		    	<div id="tomorrow" class="bloc_day">
		    		<p class="jour">Demain</p>
		    		<span class="date">Demain</span><br />
		    		<p class="ATMO">...</p>
		    	</div>
		    	<p class="titremiddle">HISTORIQUE DE L'INDICE ATMO</p>
		    	<a class="sourceair" href="http://www.air-rhonealpes.fr" target="_blank">Source Air Rhône-Alpes</a>
		    			
		    			<select id="dataviz_atmo_select">
		    				<option value="2013">2013</option>
							<option value="2012">2012</option>
							<option value="2011">2011</option>
							<option value="2010">2010</option>
							<option value="2009">2009</option>
							<option value="2008">2008</option>
							<option value="2007">2007</option>
							<option value="2006">2006</option>
							<option value="2005">2005</option>
							<option value="2004">2004</option>
							<option value="2003">2003</option>
							<option value="2002">2002</option>
							<option value="2001">2001</option>
							<option value="2000">2000</option>
							<option value="1999">1999</option>
							<option value="1998">1998</option>
							<option value="1997">1997</option>
							<option value="1996">1996</option>
							<option value="1995">1995</option>
							<option value="1994">1994</option>
						</select>
		    				<!-- BLOC ANNEE -->
				<div id="dataviz_atmo">
				</div>
					<div id="side">

						<!-- <p id="TKAtmo">Visualiser la pollution de l'année <span class="TKAdjustableNumber" data-var="annee" data-min="1994" data-max="2013"> </span></p> -->
						<div class="dropdown">
							<select id="selecttype">
								<option value="chrono">Vue calendaire</option>
								<option value="par_pol">Vue par polluant</option>
								<option value="regroup">Vue graphique</option>
							</select>
						</div>
						<button id="playATMO">Lecture<img src="img/lecture.png"></button>
						
						<div id="legend">
							<p class="legend PM10">Particules fines<span class="red"></span></p>
							<p class="legend SO2">Dioxyde de souffre<span class="blue"></span></p>
							<p class="legend NO2">Dioxyde d'azote<span class="green"></span></p>
							<p class="legend O3">Ozone<span class="yellow"></span></p>
						</div>
					</div>
			<!-- FIN BLOC ANNEE -->	
			</div>
			<!-- FIN BLOC PREV ATMO -->
			<a id="info_atmo" href="#"><img src="img/info_picto_atmo.png"></a>
			<div id="infos_bulle_atmo">
				<a class="croix" href="#"><img src="img/croix.png"></a>
				<h2> PRÉVISION DU JOUR </h2>
				<p></p>
			</div>
	
		</div>
		<!-- FIN POPUP ATMO -->

		<!-- TIMELINE -->

		<div id="timeline">
			<!-- ANNEES -->
			<div id="annees">
				<ul>
		         	<li class="<?php echo (in_array("2003", $jesuisou) ? "data_ok" : "data_no" ); ?>">2003</li>
		         	<li class="<?php echo (in_array("2004", $jesuisou) ? "data_ok" : "data_no" ); ?>">2004</li>
		         	<li class="<?php echo (in_array("2005", $jesuisou) ? "data_ok" : "data_no" ); ?>">2005</li>
		         	<li class="<?php echo (in_array("2006", $jesuisou) ? "data_ok" : "data_no" ); ?>">2006</li>
		         	<li class="<?php echo (in_array("2007", $jesuisou) ? "data_ok" : "data_no" ); ?>">2007</li>
		         	<li class="<?php echo (in_array("2008", $jesuisou) ? "data_ok" : "data_no" ); ?>">2008</li>
		         	<li class="<?php echo (in_array("2009", $jesuisou) ? "data_ok" : "data_no" ); ?>">2009</li>
		         	<li class="<?php echo (in_array("2010", $jesuisou) ? "data_ok" : "data_no" ); ?>">2010</li>
		         	<li class="<?php echo (in_array("2011", $jesuisou) ? "data_ok" : "data_no" ); ?>">2011</li>
		         	<li class="<?php echo (in_array("2012", $jesuisou) ? "data_ok" : "data_no" ); ?> select">2012</li>		         	
     			</ul>
         	</div>
         	<!-- FIN ANNEES -->
         	
         	<!-- CREDITS -->
         	<div id="credit">
         		<ul>
         			<li><a class="popup-modal" href="#sources">SOURCES</li>
         			<li> | </li>
         			<li><a class="popup-modal" href="#credits">CREDITS</a></li>
         		</ul>
         		<div id="sources" class="mfp-hide white-popup-block">
         			<a class="popup-modal-dismiss" href="#"><img src="img/fleche.png"/></a>
         			<div id="titresources">Sources</div>
         			<div id="index"> 
         				<ul>
         					<li class="alphabet">A | AIDE MEMOIRE</li>
         					<li class="listing">Qualité de l'air ambiant (extérieur) et santé. <br/>Site de l'OMS. Aide mémoire N°313. Mars 2014. Informations générales sur la pollution. <br/>Description des polluants <br/><a href="http://www.who.int/mediacentre/factsheets/fs313/fr/"  target="_blank">consulter le lien</a></li>
         					<li class="listing">Loi n° 96-1236 du 30 décembre 1996 sur l'air et l'utilisation rationnelle de l'énergie <br/><a href="http://www.legifrance.gouv.fr/affichTexte.do?cidTexte=LEGITEXT000005622536&dateTexte=20091103" target="_blank">consulter le lien</a></li>
         					<li class="alphabet">B | BROCHURE</li>
         					<li class="listing">Développement durable. Actions et résultats 2011. Plateforme chimique de Pont-de-Claix.<br/><a href="http://www.plateformechimiquedupontdeclaix.com/wp-content/uploads/2013/06/brochure-JDD-2012_fichier-controle.pdf "  target="_blank">consulter le lien</a></li>
         					<li class="listing">Compagnie de chauffage intercommunale de l'agglomération grenobloise (CCIAG).<br/><a href="http://www.cciag.fr/sites/default/files/files/CCIAG-Plaquette.pdf"  target="_blank">consulter le lien</a></li>
         					<li class="alphabet">C | CLASSEMENT</li>
         					<li class="listing">Classement par l’OMS des villes françaises les plus polluées (classement septembre 2012) <br/><a href="http://www.linternaute.com/actualite/monde/classement-des-villes-selon-pollution-de-l-air/particules-fines-classement-des-villes-francaises.shtml" target="_blank">consulter le lien</a></li>
         					<li class="listing">Statistiques des indices ATMO sur Grenoble depuis le 1er avril 1994 jusqu'au 31 décembre 2013<br/><a href="http://www.air-rhonealpes.fr/site/media/voir/649236#Media/extraire/649236" target="_blank">consulter le lien</a></li>
         					<li class="alphabet">E | ETUDE</li>
         					<li class="listing">Étude : Santé et qualité de l’air extérieur <br/><a href="http://www.developpement-durable.gouv.fr/IMG/pdf/rapport_CCEE_sante_et_qualite_de_l_air_23_07_2012.pdf" target="_blank">consulter le lien</a></li>
         					<li class="listing">Article : La combustion du bois et ses impacts sur la qualité de l'air de Jean-Pierre SAWERYSYN<br/><a href="http://www.appa.asso.fr/_docs/7/fckeditor/file/Revues/AirPur/Airpur_81_Sawerysyn.pdf" target="_blank">consulter le lien</a></li>
         					<li class="alphabet">R | RAPPORT</li>
         					<li class="listing">Plan de Protection de l'atmosphère de Grenoble 2005 - 2010<br/><a href="PPA_grenoble_cle74c915-2.pdf" target="_blank">consulter le lien</a></li>
         					<li class="listing">Révision du Plan de Protection de l'atmosphère de la région Grenobloise Fév. 2014<br/><a href="PPA_Grenoble_version_finale_mis_en_forme_cle741c3c.pdf" target="_blank">consulter le lien</a></li>
         					<li class="listing">Rapport d'activité 2012 Air Rhône-Alpes <br/><a href="http://ra2012.air-rhonealpes.fr/publications/38_diagnostic_2012_RA2012.pdf" target="_blank">consulter le lien</a></li>
         					<li class="listing">Rapport d’information N° 3088 de l’Assemblée Nationale du 23 mai 2001 sur la pollution atmosphérique <br/><a href="http://www.assemblee-nationale.fr/rap-info/i3088.asp" target="_blank">consulter le lien</a></li>
         					<li class="listing">Rapport de l’OMS du 17/10/13 qui classe la pollution atmosphérique comme « cancérigène »<br/>Rapport: « Outdoor air pollution a leading environmental cause of cancer deaths » <br/><a href="http://www.iarc.fr/en/media-centre/iarcnews/pdf/pr221_E.pdf"  target="_blank">consulter le lien</a></li>
         					<li class="listing">Impact sanitaire de la pollution atmosphérique sur l'agglomération grenobloise <br/><a href="http://opac.invs.sante.fr/doc_num.php?explnum_id=4284" target="_blank">consulter le lien</a></li>
         					<li class="alphabet">S | SYNTHESE</li>
         					<li class="listing">Document de présentation et de synthèse du Programme de Surveillance Air et Santé 9 villes (PSAS 9)<br/>Produit par l'institut national de veille sanitaire <br/><a href="http://www.invs.sante.fr/publications/2002/psas_020624/001-074_Air_Sant%E9.pdf" target="_blank">consulter le lien</a></li>
         					<li class="listing">Document synthèse : Impact sanitaire de la pollution atmosphérique dans neuf villes françaises <br/><a href="http://www.aphekom.org/c/document_library/get_file?uuid=b178074e-82fc-4d38-be0d-9ab526df2580&groupId=10347"  target="_blank">consulter le lien</a></li>
         					<li class="alphabet">&nbsp;</li>
         					<li class="alphabet">&nbsp;</li>
         					<li class="alphabet">&nbsp;</li>
         					<li class="alphabet">&nbsp;</li>
         				</ul>
         			</div>
         		</div>
         		<div id="credits" class="mfp-hide white-popup-block">
	         			<a class="popup-modal-dismiss" href="#"><img src="img/fleche.png"/></a>
					<div id="titrecredits">Crédits</div>
					<div id="pagecredits">
						<div id="colonnegche">
							<div id="equipe">L'équipe</div>
							<h3></h3>
							<div id="listeNom">
								<ul>
						         	<li classe="texteorange">Pierre Baguet</li>
						         	<li classe="texteorange">Pierre Bascugnana</li>
						         	<li classe="texteorange">Jules Bonnard</li>
						         	<li classe="texteorange">Xavier Bonnehorgne</li>
						         	<li classe="texteorange">Stéfany Durand</li>
						         	<li classe="texteorange">Pierre-Sofiane Kadri</li>
					         	</ul>
							</div>
							<div id="fonctionequipe">
								<ul>
						         	<li>Intégration - Conception</li>
						         	<li>Prises de vue vidéos - Cadrage - Montage</li>
						         	<li>Visualisation de données</li>
						         	<li>Expertise et commentaires vidéos</li>
						         	<li>Intégration - Conception</li>
						         	<li>Interviews</li>
					         	</ul>
					        </div>
					        <p class="description">Ce webdocumentaire a été réalisé par les étudiants de l'IEP de Grenoble et de Supcréa dans le cadre d'un projet de fin d'études. Les étudiants en journalisme amènent le sujet et réalisent les interviews, les prises de vues et le contenu rédactionnel et les web-designers proposent un design en adéquation avec le sujet, une navigation juste et originale et assurent l’intégration et la mise en ligne du sujet.</p>
							<div id="logosecole">
								<a href="http://www.sciencespo-grenoble.fr" target="_blank"><img src="img/logosciencespo.png" alt="logo_sciencespo"></a>
								<a href="http://www.supcrea.com"  target="_blank"><img src="img/logosupcrea.png" alt="logo_supcrea"></a>
							</div>
						</div>
						<div id="colonnedte">
							<div id="experts">Les experts</div>
							<h3></h3>
							<div id="listeexperts">
								<ul>
						         	<li classe="texteorange">Raphael Gautier<br/><br/><br/></li>
						         	<li classe="texteorange">Philippe Coutard<br/><br/><br/><br/></li>
						         	<li classe="texteorange">Nicolas Vigier<br/><br/></li>
						         	<li classe="texteorange">Samuel<br/><br/></li>
						         	<li classe="texteorange">Jérémy Moreira<br/>Michel Lacagnina <br/></li>
						         	<li classe="texteorange">Patrick Pouchot<br/><br/><br/><br/><br/></li>
						         	<li classe="texteorange">Nicolas Giraud</li>
					         	</ul>
							</div>
							<div id="fonctions">
								<ul>
						         	<li>Consultant associé, Développement durable. Société ARGOS <br/><a href="http://www.argos-consultants.fr/argos.php" target="_blank">En savoir + sur ARGOS</a></li>
						         	<li>Responsable d'exploitation Direction interdépartementale des routes (DIR) Centre-Est<br/><a href="http://www.enroute.centre-est.developpement-durable.gouv.fr/" target="_blank">En savoir + sur la DIR</a></li>
						         	<li>Ingénieur à Air Rhône-Alpes<br/><a href="http://www.air-rhonealpes.fr/site/accueil/monaccueil/all/" target="_blank">En savoir + sur Air Rhône-Alpes</a></li>
						         	<li>Contrôleur technique. NORISKO Auto<br/><a href="http://www.dekra-norisko.fr/" target="_blank">En savoir + sur NORISKO</a></li>
						         	<li>Conseillers en énergie. Société O'Thermie<br/><a href="http://www.othermie.fr/" target="_blank">En savoir + sur O'Thermie</a></li>
						         	<li>Responsable Communication. Société Vencorex. Plateforme chimique de Pont-de-Claix<br/><a href="http://www.plateformechimiquedupontdeclaix.com/" target="_blank">En savoir + sur la Plateforme chimique</a><br/><a href="http://www.vencorex.com/" target="_blank">En savoir + sur Vencorex</a></li>
						         	<li>Adjoint au directeur technique de la compagnie de chauffage de Grenoble<br/><a href="http://www.cciag.fr/" target="_blank">En savoir + sur la CCIAG</a></li>
					         	</ul>
					        </div>
						</div>
					</div>
         		</div>
         	</div>
         	<!-- FIN CREDITS -->
		</div>
		<!-- FIN TIMELINE -->


		<!-- JS Librairies -->
		<script type="text/javascript" src="js/jquery-1.11.0.min.js"></script>
		<script type="text/javascript" src="js/jquery.magnific-popup.min.js"></script>
		<script type="text/javascript" src="js/jquery-ui.js"></script>
		<script type="text/javascript" src="js/highcharts.js"></script>
		<script type="text/javascript" src="https://api.tiles.mapbox.com/mapbox.js/v1.6.2/mapbox.js"></script>
		<script type="text/javascript" src="js/gmaps.js"></script>
		<script type="text/javascript" src="js/google-layer.js"></script>
		<script type="text/javascript" src="js/d3.v3.min.js"></script>

		<!-- JS Perso -->
		<script type="text/javascript" src="js/main.js"></script>
		<script type="text/javascript" src="js/industries.js"></script>
		<script type="text/javascript" src="js/chauffage.js"></script>
		<script type="text/javascript" src="js/traffic.js"></script>
		<script type="text/javascript" src="js/api_atmo.js"></script>
		<script type="text/javascript" src="js/dataviz_atmo.js"></script>
	</body>
</html>
