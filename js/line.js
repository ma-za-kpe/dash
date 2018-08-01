$(function(){
  $.ajax({
    url: 'http://localhost/dash/api/line.php',
    type: 'GET',
    success : function(data) {
      chartData = data;
      var chartProperties = {
        "caption": "Number of schools enrolled",
        "xAxisName": "Time(months)",
        "yAxisName": "Nmmber of students",
        "yAxisMaxValue": "800",
        "yAxisMinValue": "0",
        "numDivLines" : "8",
        "rotatevalues": "1",
        "theme": "zune",
        "bgColor": "#ffffff",
        "placeLabelsInside": "1",
        "showValues": "0",
        "plotSpacePercent":"320",
        "baseFontSize": "10",
        "showvalues": "0",
        "anchorRadius": "4",
        "anchorBorderThickness": "2",
        "theme" : "fint"
        "lineColor" : "#222222"
      };
      apiChart = new FusionCharts({
        type: 'line',
        renderAt: '3chart-container',
        width: '850',
        height: '350',
        dataFormat: 'json',
        dataSource: {
          "chart": chartProperties,

      "data": chartData

         }
   }).render();
    }
  });
});
