$(function() {

    $("#industries").hover(
        function() {
            $(this).attr("src", "img/choix_industries_hover.png");
        }, function() {
            $(this).attr("src", "img/choix_industries.png");
        }
    );

    $("#chauffage").hover(
        function() {
            $(this).attr("src", "img/choix_chauffage_hover.png");
        }, function() {
            $(this).attr("src", "img/choix_chauffage.png");
        }
    );

    $("#trafic").hover(
        function() {
            $(this).attr("src", "img/choix_trafic_hover.png");
        }, function() {
            $(this).attr("src", "img/choix_trafic.png");
        }
    );

    var vimeoPlayer = document.querySelector('iframe');

    $f(vimeoPlayer).addEvent('ready', ready);

    function ready(player_id) {

        froogaloop = $f(player_id);


        froogaloop.addEvent('pause',
            function(data) {
                var current_time,
                    duration;
                froogaloop.api('getCurrentTime', function(value, player_id) {
                    current_time = value;
                    froogaloop.api('getDuration', function(value, player_id) {
                        duration = value;
                        if (current_time < duration-2) {
                            var lavideo = $("#iframe-video").attr("data-vid");
                            if (lavideo == "A") {
                                $("#skip_teaser").fadeIn(300);
                            } else {
                                $("#skip_intro").fadeIn(300);
                            }

                        }
                    });
                });
            });


        froogaloop.addEvent('play',
            function(data) {
                $(".skip").fadeOut();
                $('#choix').fadeOut(300);
            });



        froogaloop.addEvent('finish',
            function(data) {
                var lavideo = $("#iframe-video").attr("data-vid");
                if (lavideo == "A") {
                    $("#iframe-video").attr("src", "http://player.vimeo.com/video/92084718?api=1&amp;player_id=iframe-video&amp;color=d7c49b&amp;autoplay=1");
                    $("#iframe-video").attr("data-vid", "B");
                } else {
                    //$('#vimeo').html('<img id="img_fond" class="all_screen" src="img/img_fond.png" width="1000" height="580" />');
                    // $(".outro-wrapper").fadeOut();
                    // $("#choix").fadeIn(300);
                }
            });

        froogaloop.addEvent('playProgress',
            function(data) {
                var lavideo = $("#iframe-video").attr("data-vid");
                if (lavideo == "B") {
                    var current_time,
                        duration;
                    froogaloop.api('getCurrentTime', function(value, player_id) {
                        current_time = value;
                        froogaloop.api('getDuration', function(value, player_id) {
                            duration = value;
                            if (current_time > duration-7) {
                                $("#choix").fadeIn(300);
                            }
                            if (current_time < duration-7) {
                                $("#choix").fadeOut(300);
                            }
                            if (current_time > duration-0.2) {
                                froogaloop.api('pause');
                            }
                        });
                    });
                }
            });
    }

    $("#skip_teaser").on('click',function() {
        $('.skip').fadeOut();
        $("#iframe-video").attr("src", "http://player.vimeo.com/video/92084718?api=1&amp;player_id=iframe-video&amp;color=d7c49b&amp;autoplay=1");
        $("#iframe-video").attr("data-vid", "B");
        $('#iframe-video').load(function(e) {
            froogaloop.api('play');
        });
    });
    $("#skip_intro").on('click',function() {
        $('.skip').fadeOut();
        $('#iframe-video').load(function(e) {
            froogaloop.api('pause');
        });
        $('#choix').fadeIn(300);
    });
});