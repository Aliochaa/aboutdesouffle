$(function() {

    $("#industries").hover(
        function() {
            $(this).attr("src", "img/choix_industries_hover.png");
        },
        function() {
            $(this).attr("src", "img/choix_industries.png");
        }
    );

    $("#chauffage").hover(
        function() {
            $(this).attr("src", "img/choix_chauffage_hover.png");
        },
        function() {
            $(this).attr("src", "img/choix_chauffage.png");
        }
    );

    $("#trafic").hover(
        function() {
            $(this).attr("src", "img/choix_trafic_hover.png");
        },
        function() {
            $(this).attr("src", "img/choix_trafic.png");
        }
    );

    var vimeoPlayer = document.querySelector('iframe');

    $f(vimeoPlayer).addEvent('ready', ready);

    function ready(player_id) {

        froogaloop = $f(player_id);


        froogaloop.addEvent('pause',
            function(data) {
                froogaloop.api('getCurrentTime', function(current_time, player_id) {
                    froogaloop.api('getDuration', function(duration, player_id) {
                        if (current_time < duration - 2) {
                            $('#choix').fadeIn(300);
                        }
                    });
                });
            });


        froogaloop.addEvent('play',
            function(data) {
                $('#choix').fadeOut(300);
            });



        froogaloop.addEvent('finish',
            function(data) {
                var lavideo = $("#iframe-video").attr("data-vid");
                $('#vimeo').html('<img id="img_fond" class="all_screen" src="img/img_fond.png" width="1000" height="580" />');
                $(".outro-wrapper").fadeOut();
                $("#choix").fadeIn(300);
            });

        froogaloop.addEvent('playProgress',
            function(data) {
                froogaloop.api('getCurrentTime', function(current_time, player_id) {
                    froogaloop.api('getDuration', function(duration, player_id) {
                        if (current_time > duration - 7) {
                            $("#choix").fadeIn(300);
                        }
                        if (current_time < duration - 7) {
                            $("#choix").fadeOut(300);
                        }
                        if (current_time > duration - 0.5) {
                            froogaloop.api('pause');
                        }
                    });
                });
            });
    }
});
