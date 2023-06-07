
var chart_bestScoreProblemStatisticChart1_11bd1 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_11bd1'), {
    type: 'line',
    data: {
        labels: [
            4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25, 26, 27, 28, 31, 32, 35, 36, 37, 38, 40, 41, 42, 44, 45, 46, 48, 49, 55, 60, 62, 65, 69, 73, 76, 79, 80, 83, 84, 86, 87, 88, 89, 95, 96, 103, 104, 105, 107, 110, 111, 113, 119, 121, 125, 127, 139, 145, 149, 150, 152, 154, 157, 160, 161, 167, 173, 178, 179, 184, 185, 186, 188, 193, 205, 207, 213, 217, 219, 220, 226, 227, 234, 238, 260, 264, 277, 285, 293, 297, 298, 320, 332, 337, 345, 351, 363, 364, 374, 378, 383, 401, 406, 415, 420, 438, 443, 449, 450, 477, 516, 518, 540, 564, 566, 582, 595, 619, 626, 636, 643, 677, 683, 703, 770, 798, 836, 856, 957, 959, 1015, 1060, 1065, 1070, 1124, 1138, 1176, 1229, 1246, 1420, 1423, 1492, 1495, 1579, 1683, 1738, 1741, 1840, 1877, 1913, 1931, 1971, 1996, 2596, 2598, 2623, 2652, 2727, 3065, 3148, 3266, 3279, 3483, 3518, 3979, 3988, 4173, 4216, 4248, 4275, 4480, 4492, 5057, 5061, 5247, 5251, 5292, 5296, 5660, 6494, 6499, 7008, 10791, 10792, 13900, 13902, 18525, 18527, 18717, 18722, 25439, 25445, 40673, 40681, 41583, 44289, 66243, 68250, 68629, 69213, 70518, 70519, 83726, 84236, 86555, 87010, 91599, 91994, 94426, 99313, 105249, 107960, 600000
        ],
        datasets: [
            {
                  label: 'HILL_CLIMBING',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -92, , , -90, -89, -87, -86, -85, -85, -84, -83, , , -83, -82, , -79, -78, -77, , -76, , -76, -75, -74, , -73, -72, -71, -71, -70, -70, -68, , -67, -66, , , , -66, -65, , , -65, -64, , -64, , -63, , , -63, , , , , -62, , -61, , -61, -59, -59, -58, , -58, , , , -57, , , -56, , , -56, , , -55, , -55, , -54, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -54
                  ]
                }, 
{
                  label: 'TABU_SEARCH',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , -92, , , , , , , , , , , , , -91, , , -90, , , , , -89, , , , , -89, , , -88, , -88, , , , , -87, , , , , -87, , , , , -86, , -85, -84, , , , , , , , , , , -84, , , -83, , , , , , -83, -82, , -82, , , -81, , -81, , -80, , , , , , , , -79, -79, -78, -78, -77, -77, , -76, -76, -75, -75, -74, , , -74, , , -73, , , , -73, -72, -72, , , , -71, , -71, , , -70, -69, , , -69, -68, -68, , -67, , -66, -65, -65, , , -64, , , -63, , -63, -62, , , , , , , -61, -61, , , -60, -59, , -59, , , , , -58, -57, -57, -56, -56, -55, -55, -54, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -54
                  ]
                }, 
{
                  label: 'LATE_ACCEPTANCE (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -89, -85, -80, -77, -76, -73, , , , , , -72, -70, , , , , -70, , , -69, -67, , , , , , , , , , , -67, , , , -66, -65, , , , , , , , , , , , , , , , , -65, -63, , , , , , , , , , , , , -63, , , -62, , , , , , -61, , , , , , , -61, -60, -60, -59, -59, -58, , -58, , , , , , -57, , , , , , , , , , , , , , -56, , , , , -56, -55, , , , , , , , -55, -54, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -54
                  ]
                }, 
{
                  label: 'GREAT_DELUGE',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -89, -86, -85, -84, -78, -77, -73, , , , , , , -73, , , -72, , , -72, -71, , , , , , , , , , , , , , , , , , , , , , , , , , , , -70, , -70, -69, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -69, , , , , , , , , , , , , , , , , , -68, -68, , , , , , , , -67, , , , , , , , , , , , , , , , , , , , , , , , , , , -67, , -66, , , , , , , , , , , , , -66, , , , , , , , , , , , , , -65, , , , , , , , , , , , , , , , , , , -65, -64, , , , , , , , , , , -64, -62, , -61, -61, -60, -60, -59, -59, -58, -58, -57, -57, -56, -56, -55, -55, -54, -54
                  ]
                }, 
{
                  label: 'VARIABLE_NEIGHBORHOOD_DESCENT',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , -92, , -92, , , -91, , -91, , , , , , , , -90, , , , , -89, -89, , , , , , , , , , , , , -88, , , -87, -87, , , , , , , , , , , , , , , -86, , -86, , , , , , , -85, , , , -85, , , , , , , , , , , , , , , , , , , , -84, -84, , , , , , , , , , , , -83, -83, , , , , -82, -82, , , , , , , , , -81, , -80, -80, , , , , , , , -79, , -78, , , , -77, -77, , -76, -76, , , , , -75, -75, -74, -74, -73, -73, , , -72, -72, , , , , -71, -71, -70, -70, , , , , , , , , , -69, -69, -68, -68, -67, -67, -66, -66, -65, -65, -64, -64, -63, -63, -62, -61, -61, -60, , , -59, -59, -58, -58, -57, -57, -56, -56, -55, -55, , , -54, , , , , , , , , , , , , , , , -54
                  ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        spanGaps: true,
        plugins: {
            title: {
                display: true,
                text: 'oled-bench-4c-21o-30ts-baking-maint best medium score statistic'
            },
            tooltip: {
                callbacks: {
                        title: function(context) {
                            return humanizeTime(context[0].parsed.x);
                        }
                        
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time spent'
                },
                ticks: {
                        stepSize: 10000
                        ,
                        callback: function(value, index) {
                            return humanizeTime(value);
                        }
                },
                suggestedMin: 0,
                suggestedMax: 600000,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best medium score'
                },
                ticks: {
                        stepSize: 1
                        
                },
                type: 'linear',
                display: true
            }
        },
watermark: {
    image: "website/webjars/timefold/img/timefold-logo-stacked-positive.svg",
    x: 15,
    y: 15,
    width: 48,
    height: 50,
    opacity: 0.1,
    alignX: "right",
    alignY: "bottom",
    alignToChartArea: true,
    position: "front",
}    },
plugins: [{ 
    id: 'customPlugin',
    beforeDraw: (chart, args, options) => {
          const ctx = chart.canvas.getContext('2d');
          ctx.save();
          ctx.globalCompositeOperation = 'destination-over';
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, chart.canvas.width, chart.canvas.height);
          ctx.restore();
    }
}]
});

window.addEventListener('beforeprint', () => {
  chart_bestScoreProblemStatisticChart1_11bd1.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_11bd1.resize();
});
