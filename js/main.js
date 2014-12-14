$(function() {

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});


$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});

	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

    $("#info_atmo").click(function(){

        $('#infos_bulle_atmo').fadeIn(300);        
    }); 

    $(".croix").click(function(){

        $('#infos_bulle_atmo').fadeOut(300);        
    }); 


    $("#aide").click(function(){

        $('#aide_industries').fadeIn(300);        
    }); 

    $("#fermer").click(function(){

        $('#aide_industries').fadeOut(300);        
    }); 
    
    
});