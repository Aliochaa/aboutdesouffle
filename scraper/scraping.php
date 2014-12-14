<?php
	ini_set('display_errors', 0); 

	// Inclusion du parser Goutte
	require_once 'simple_html_dom.php';

	//Définition du tableau de résultats
	$dates = array();
	$dates['maj'] = date('Y-m-d H:i',time()); //Date de dernière mise à jour
	$dates[0]['date'] = date('Y-m-d',time()-86400); //Date d'hier
	$dates[0]['polluants'] = array();
	$dates[1]['date'] = date('Y-m-d',time());
	$dates[1]['polluants'] = array();
	$dates[2]['date'] = date('Y-m-d',time()+86400);
	$dates[2]['polluants'] = array();

	$i = 0;
	foreach($dates as $key => $date) {
		if($key !== "maj") {

			$html = file_get_html('http://www.air-rhonealpes.fr/site/indice/geolocaliser/ATMO/'.$date['date'].',00-00/agglomeration-de-grenoble');

			$part = $html->find('div',-2)->find('table',0);
			
			$dates[$i]['titre'] = trim($part->find('tr td',1)->plaintext);
		    $dates[$i]['atmo'] = trim($part->find('tr td',0)->plaintext);
		    $dates[$i]['texte'] = trim($part->find('tr td',3)->plaintext);
		    $polluants = $part->find('tr td',5);
		    $a = 1;
		    foreach($polluants->find('tr td') as $element) {
			    $polluant = explode('<br />',$polluants->find('tr td',$a-1)->innertext);
		    	$dates[$i]['polluants'][trim($polluant[0])] = trim($polluant[1]);
		    	$a++;
			}
			$i++;
		}
	}

	$output = json_encode($dates);

	$offset = 60 * 60 * 2;
	$ExpStr = "Expires: ".gmdate("D, d M Y H:i:s", time() + $offset)." GMT";

	$file = fopen('atmo.php', 'w');
	fwrite($file,"<?php 
		header(\"Access-Control-Allow-Origin: *\");
		header(\"Content-Type: application/json\");
		Header(\"Cache-Control: must-revalidate\");
		Header(\"".$ExpStr."\");
		\$maj = ".time().";
		if(time()>(\$maj+60*60*6)) {
			include('scraping.php');
		}
		else {
		?>
		".$output." 
		<?php } ?>");
	fclose($file);

	echo $output;
?>