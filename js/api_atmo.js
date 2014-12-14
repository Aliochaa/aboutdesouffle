$(function() {

    var color = ['#ccc', '#006837', '#1a9850', '#66bd63', '#a6d96a', '#d9ef8b', '#fee08b', '#fdae61', '#f46d43', '#d73027', '#a50026'];
    var months = [' ', 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    function updateData(data, day) {
        var date = data.date.split('-');
        $('#atmo_day>h6.date').text('Indice du ' + date[2] + ' ' + months[+date[1]] + ' ' + date[0]);
        $('div#' + day + '>span.date').text(date[2] + ' ' + months[+date[1]]);
        $('div#' + day + '>p.ATMO').text(data.atmo);
        $('div#' + day + '>p.ATMO').css('background-color', color[parseInt(data.atmo)]);
        $('div#' + day + ' span.no2').text(data.polluants['Dioxyde d\'azote']);
        $('div#' + day + ' span.so2').text(data.polluants['Dioxyde de soufre']);
        $('div#' + day + ' span.o3').text(data.polluants['Ozone']);
        $('div#' + day + ' span.pm10').text(data.polluants['Particule PM10']);
        $('div#' + day + ' span.pm10').css('background-color', color[parseInt(data.polluants['Particule PM10'])]);
        $('div#' + day + ' span.no2').css('background-color', color[parseInt(data.polluants['Dioxyde d\'azote'])]);
        $('div#' + day + ' span.so2').css('background-color', color[parseInt(data.polluants['Dioxyde de soufre'])]);
        $('div#' + day + ' span.o3').css('background-color', color[parseInt(data.polluants['Ozone'])]);

        if (day == 'today') {
            $('#infos_bulle_atmo>p').text(data.texte);
            $('#carre_atmo h1').text(data.atmo);
            $('#carre_atmo').css('background-color', color[parseInt(data.atmo)]);
        }
    }



    /**
     * Make a X-Domain request to url and callback.
     *
     * @param url {String}
     * @param method {String} HTTP verb ('GET', 'POST', 'DELETE', etc.)
     * @param data {String} request body
     * @param callback {Function} to callback on completion
     * @param errback {Function} to callback on error
     */
    function xdr(url, method, data, callback, errback) {
        var req;

        if (XMLHttpRequest) {
            req = new XMLHttpRequest();

            if ('withCredentials' in req) {
                req.open(method, url, true);
                req.onerror = errback;
                req.onreadystatechange = function() {
                    if (req.readyState === 4) {
                        if (req.status >= 200 && req.status < 400) {
                            callback(req.responseText);
                        } else {
                            errback(new Error('Response returned with non-OK status'));
                        }
                    }
                };
                req.send(data);
            }
        } else if (XDomainRequest) {
            req = new XDomainRequest();
            req.open(method, url);
            req.onerror = errback;
            req.onload = function() {
                callback(req.responseText);
            };
            req.send(data);
        } else {
            errback(new Error('CORS not supported'));
        }
    }

    xdr("http://aboutdesouffle.olympe.in/scraping/atmo.php", 'GET', '', function(data) {
        data = $.parseJSON(data);
        updateData(data[0], 'yesterday');
        updateData(data[2], 'tomorrow');
        updateData(data[1], 'today');
    }, function(error) {
        console.log('Erreur : ' + error);
    });
});