<?php 
		header("Access-Control-Allow-Origin: *");
		header("Content-Type: application/json");
		Header("Cache-Control: must-revalidate");
		Header("Expires: Wed, 16 Apr 2014 01:06:56 GMT");
		$maj = 1397588816;
		if(time()>($maj+60*60*6)) {
			include('scraping.php');
		}
		else {
		?>
		{"maj":"2014-04-15 21:06","0":{"date":"2014-04-14","polluants":{"Particule PM10":"4","Dioxyde de soufre":"1","Dioxyde d'azote":"3","Ozone":"5"},"titre":"Indice ATMO - 14\/04\/2014","atmo":"5","texte":""},"1":{"date":"2014-04-15","polluants":{"Particule PM10":"3","Dioxyde de soufre":"1","Dioxyde d'azote":"1","Ozone":"4"},"titre":"Indice ATMO - 15\/04\/2014","atmo":"4","texte":"Mardi 15 avril, la qualit\u00e9 de l'air est bonne sur la majorit\u00e9 des agglom\u00e9rations surveill\u00e9es avec un indice \u00e9gal \u00e0 4, sur une \u00e9chelle de 1 \u00e0 10. Sur l'est de la r\u00e9gion, l'indice pourra prendre la valeur de 5 (moyen).  Mercredi 16 avril, la qualit\u00e9 de l'air devrait peu \u00e9voluer. Les indices seront compris entre 4 et 5 (bon \u00e0 moyen), selon les agglom\u00e9rations."},"2":{"date":"2014-04-16","polluants":{"Ozone":""},"titre":"Indice ATMO - 16\/04\/2014","atmo":"5","texte":""}} 
		<?php } ?>