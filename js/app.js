$(function(){
  $.ajax({
    url: 'http://localhost/dash/chart_data.php',
    type: 'GET',
    success : function(data) {
      chartData = data;
      var chartProperties = {
        "caption": "Level of tuition fee across all partner schools",
        "xAxisName": "School",
        "yAxisName": "LEVEL OF TUTION (UGX)",
        "yAxisMaxValue": "4000000",
        "yAxisMinValue": "0",
        "numDivLines" : "8",
        "rotatevalues": "1",
        "theme": "zune",
        "bgColor": "#89cdf9",
        "placeLabelsInside": "1",
        "showValues": "0",

      };
      apiChart = new FusionCharts({
        type: 'bar2d',
        renderAt: 'chart-container',
        width: '950',
        height: '350',
        dataFormat: 'json',
        dataSource: {
          "chart": chartProperties,

      "data": [
               {
                   "label": "Iganga Parents Secondary School",
                   "value": "3549000"
               },
               {
                   "label": "Bukooli College, Bugiri",
                   "value": "3102400"
               },
               {
                   "label": "Green Hill Academy School",
                   "value": "1600000"
               },
               {
                   "label": "Taibah International School",
                   "value": "1600000"
               },{
            //Setting data as vline data
            "vline": "true",
            //Adding label
            "label": "970000",
            "linePosition": "900000"
        },
               {
                   "label": "St Mary.s College Kisubi",
                   "value": "900000"
               },
               {
                   "label": "Kawempe Muslim Secondary School",
                   "value": "800000"
               },
               {
                   "label": "Our Lady of Africa Secondary School, Namilyango",
                   "value": "790000"
               },
               {
                   "label": "Wanyange Girls Secondary School",
                   "value": "780000"
               },
               {
                   "label": "Uganda Martrys High School, Rubaga",
                   "value": "760000"
               }],
               "trendlines": [{
          "line": [{
            "startvalue": "700000",
            "color": "#222222",
            "valueOnRight": "1",
            "displayvalue": "Monthly Target"
          }]
        }]

         }
   }).render();
    }
  });
});
