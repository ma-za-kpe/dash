$(function(){
  $.ajax({
    url: 'http://localhost/dash/api/line.php',
    type: 'GET',
    success : function(data) {
      chartData = data;
      var chartProperties = {
        "caption": "Number of schools enrolled over time, with a projection for the next 12 months",
        "xAxisName": "Time(months)",
        "yAxisName": "Number of schools enrolled",
        "yAxisMaxValue": "40",
        "yAxisMinValue": "0",
        "numDivLines" : "8",
        "showValues": "0",
        "lineThickness": "3",
        "yAxisNameFontSize": "15",
        "legendItemFontSize": "12",
        "anchorRadius": "4",
        "anchorBorderThickness": "2",
      };
      apiChart = new FusionCharts({
        type: 'line',
        renderAt: '3chart-container',
        width: '850',
        height: '350',
        dataFormat: 'json',
        dataSource: {
          "chart": chartProperties,

      "data": [
               {
                   "label": "23-11-2009",
                   "value": "31"
               },
               {
                   "label": "9-4-10",
                   "value": "33"
               },
               {
                   "label": "9-10-2011",
                   "value": "28"
               },
               {
                   "label": "24-10-2012",
                   "value": "20"
               },
               {
                   "label": "11-9-2013",
                   "value": "27"
               },
               {
                   "label": "11-12-14",
                   "value": "27"
               },
               {
                   "label": "1-5-2015",
                   "value": "24"
               },
               {
                   "label": "15-11-2016",
                   "value": "35"
               },
               {
                   "label": "17-09-201",
                   "value": "32"
               },{
                   "label": "4-9-2018",
                   "color":"#840f0d",
                   "value": "40"
               }
             ]

         }
   }).render();
    }
  });
});
