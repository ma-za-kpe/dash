FusionCharts.ready(function() {
    var revenueChart = new FusionCharts({
        type: 'stackedbar2d',
        renderAt: '4chart-container',
        width: '450',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "theme": "fint",
                "caption": "A ratio of O-level to both O and A-level Schools",
                "xAxisname": "",
                "yAxisName": "",
                "paletteColors": "#1e5275,#1aaf5d",
                //Showing the Cumulative Sum of stacked data
                "showSum": "1",
                "valueFont": "Arial",
                "valueFontColor": "#000000",
                "valueFontSize": "22",
                "valueFontBold": "1"
            },
            "categories": [
                {
                    "category": [
                        {"label": ""}

                    ]
                }
            ],
            "dataset": [
                {
                    "seriesname": " O-Level",
                    "data": [
                        {"value": "247"}

                    ]
                },
                {
                    "seriesname": "O and A Level",
                    "data": [
                        {"value": "470"}

                    ]
                }
            ]
        }
    }).render();
});
