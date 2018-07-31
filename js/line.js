$(function(){
  $.ajax({
    url: 'http://localhost/dash/line.php',
    type: 'GET',
    success : function(data) {
      chartData = data;
      var chartProperties = {
        "caption": "Size of schools based on student numbers",
        "xAxisName": "School",
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
        "baseFontSize": "10"
      };
      apiChart = new FusionCharts({
        type: 'column2d',
        renderAt: '2chart-container',
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
