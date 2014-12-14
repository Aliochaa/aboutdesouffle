$(function() {


  var width = 900,
    height = 150,
    cellSize = 15, // cell size
    startYear = 1994,
    endYear = 2013,
    currentYear = startYear,
    play,
    tangle;

  var day = d3.time.format("%w"),
    week = d3.time.format("%U"),
    format = d3.time.format("%Y-%m-%d");

  var poll = 'ATMO',
    type = 'chrono';

  function findPolMax(array) {
    if (array.PM10 + array.SO2 + array.NO2 + array.O3 > 0) {
      var polMax = '';
      if (array.SO2 > array.PM10) {
        polMax = 'SO2';
      }
      if (array.NO2 > array.SO2) {
        polMax = 'NO2';
      }
      if (array.O3 > array.NO2) {
        polMax = 'O3';
      }
      if (array.PM10 > array.O3) {
        polMax = 'PM10';
      }
      return polMax;
    }
  }

  function monthPath(t0) {
    var t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0),
      d0 = +day(t0),
      w0 = +week(t0),
      d1 = +day(t1),
      w1 = +week(t1);
    return "M" + (w0 + 1) * cellSize + "," + d0 * cellSize + "H" + w0 * cellSize + "V" + 7 * cellSize + "H" + w1 * cellSize + "V" + (d1 + 1) * cellSize + "H" + (w1 + 1) * cellSize + "V" + 0 + "H" + (w0 + 1) * cellSize + "Z";
  }

  //Création du conteneur du calendrier
  var svg = d3.select("#dataviz_atmo")
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('class', 'dataviz')
    .append('g')
    .attr('transform', 'translate(25,25)');

    //Création du texte de l'année
  var text = svg
    .append("text")
    .attr("transform", "translate(-6," + cellSize * 3.5 + ")rotate(-90)")
    .style("text-anchor", "middle")
    .style("fill",'white');

  var text_months_data = ['Janv.', 'Fév.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'];
  var text_months = svg
    .selectAll('.text_months')
    .data(text_months_data)
    .enter()
    .append('text')
    .attr('y', 8 * cellSize)
    .attr('x', function(d, i) {
      return i * cellSize * 4.45 + 25;
    })
    .attr('text-anchor', 'middle')
    .attr('font-size', 14)
    .style("fill","white")
    .text(function(d) {
      return d;
    });

  var rect;

  var par_date, par_place;

  function changeYear(year) {
    currentYear = year;
    if (type == "regroup") {
      poll = 'ATMO';
      $('#selectpoll').val('ATMO');
  }

    //Modif text
    text.text(year);

    //Modif des jours de l'année
    rect = svg.selectAll('.day').data(d3.time.days(new Date(year, 0, 1), new Date(year + 1, 0, 1)));

    rect.enter().append('rect')
      .attr('class', 'day')
      .attr('width', cellSize)
      .attr('height', cellSize)
      .on('mouseover', function(d) {
        d3.select(this).style('stroke', 'black');
      })
      .on('mouseout', function(d) {
        d3.select(this).style('stroke', '#ccc');
      });

    rect
      .attr('x', function(d) {
        return week(d) * cellSize;
      })
      .attr('y', function(d) {
        return day(d) * cellSize;
      })
      .attr("class", function(d) {
        d = format(d);
        if (type == 'chrono') {
          return 'day ATMO' + par_date[d][poll];
        } else if (type == 'par_pol') {
          return 'day ' + findPolMax(par_date[d]);
        } else {
          return 'day ATMO' + par_place[d][poll];
        }
      })
      .attr('title', function(d) {
        d = format(d);
        if (type == 'chrono' || type == "par_pol") {
          return par_date[d].Date + "," + par_date[d].ATMO + "," + par_date[d].PM10 + "," + par_date[d].SO2 + "," + par_date[d].NO2 + "," + par_date[d].O3;
        } else {
          return par_place[d].Date + "," + par_place[d].ATMO + "," + par_place[d].PM10 + "," + par_place[d].SO2 + "," + par_place[d].NO2 + "," + par_place[d].O3;
        }
      });

    rect.exit().remove();


    //Ajouter les mois
    var month = svg.selectAll('.month')
      .data(d3.time.months(new Date(year, 0, 1), new Date(year + 1, 0, 1)))

    month.enter().append('path')
      .attr('class', 'month');

    month.exit().remove();

    month.transition().duration(200).attr('d', monthPath);

    if (type == 'regroup') {
      month.attr('stroke-opacity', 0);
      text_months.attr('opacity', 0)
    } else {
      month.attr('stroke-opacity', 1);
      text_months.attr('opacity', 1)
    }
  }

  function nextYear() {
    changeYear(currentYear);
    // tangle.setValue("annee", currentYear);
    if (currentYear >= endYear) {
      clearInterval(play);
    }
    currentYear++;
  }

  d3.csv("data/atmo.csv", function(error, csv) {

    par_date = d3.nest()
      .key(function(d) {
        return d.Date;
      })
      .rollup(function(d) {
        return {
          ATMO: d[0].ATMO,
          Date: d[0].Date,
          PM10: d[0].PM10,
          SO2: d[0].SO2,
          NO2: d[0].NO2,
          O3: d[0].O3
        };
      })
      .map(csv);

    par_place = d3.nest()
      .key(function(d) {
        return d.Place;
      })
      .rollup(function(d) {
        return {
          ATMO: d[0].ATMO,
          Date: d[0].Date,
          PM10: d[0].PM10,
          SO2: d[0].SO2,
          NO2: d[0].NO2,
          O3: d[0].O3
        };
      })
      .map(csv);

    $('#dataviz_atmo_select').on('change',function(e) {
       changeYear(parseInt(e.currentTarget.value));
    });
    changeYear(endYear);

    $('#playATMO').on('click', function() {
      if (play == null) {
        $(this).text("Stop");
        currentYear = startYear;
        play = setInterval(nextYear, 1000);
      } else {
        $(this).text("Lecture");
        clearInterval(play);
        play = null;
      }
    });

    $('#selectpoll').on('change', function() {
      clearInterval(play);
      $('#playATMO').text("Lecture");
      play = null;
      poll = $(this)[0].value;
      changeYear(currentYear);
    });

    $('#selecttype').on('change', function() {
      clearInterval(play);
      $('#playATMO').text("Lecture");
      play = null;
      type = $(this)[0].value;
      if ($(this)[0].value == 'regroup' || $(this)[0].value == 'par_pol') {
        $('#selectpoll').attr('disabled', 'disabled');
      } else {
        $('#selectpoll').removeAttr('disabled');
      }
      if ($(this)[0].value == 'par_pol') {
        $('#legend').show();
      } else {
        $('#legend').hide();
      }
      changeYear(currentYear);
    });
  });

  function isdefined(value) {
    if (value == '') {
      return 'Non renseigné';
    } else {
      return value;
    }
  }

  $(document).tooltip({
    show: false,
    track: true,
    hide: false,
    items: ".day",
    tooltipClass: "custom-tooltip-styling",
    content: function() {
      var element = $(this);
      if (element.is(".day")) {
        var text = element.attr('title').split(',');
        var date = text[0].split('-');
        var months = [' ', 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
        return 'Indice ATMO du <strong>' + date[2] + ' ' + months[+date[1]] + ' ' + date[0] + '</strong> : ' + isdefined(text[1]) + '<hr /><table><tr><th>Particules</th><th>Dioxyde de souffre</th><th>Dioxyde d\'azote</th><th>Ozone</th><tr><td>' + isdefined(text[2]) + '</td><td>' + isdefined(text[3]) + '</td><td>' + isdefined(text[4]) + '</td><td>' + isdefined(text[5]) + '</td></tr></table>';
      }
    }
  });
});