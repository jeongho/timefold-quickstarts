
var chart_bestScoreScalabilitySummaryChart2_54f11 = new Chart(document.getElementById('chart_bestScoreScalabilitySummaryChart2_54f11'), {
    type: 'line',
    data: {
        labels: [
            6789, 15035, 25254, 39494, 55205, 145180, 402969, 1483398, 1511219, 5554721, 9421179, 34630981, 37878249, 139260438
        ],
        datasets: [
            {
                  label: 'HILL_CLIMBING (favorite)',
                    borderWidth: 4
,
                  data: [
                    -1, -1178, -1, 6963, 1108, 32645, 13949, 69493, 45673, 181706, 86457, 275758, 87331, 128193
                  ]
                }, 
{
                  label: 'TABU_SEARCH',
                    borderWidth: 1
                  ,
                  data: [
                    -1, -1182, -1, 6476, 1151, 33339, 13864, 59604, 44802, 151910, 89193, 193304, 98301, 123561
                  ]
                }, 
{
                  label: 'LATE_ACCEPTANCE',
                    borderWidth: 1
                  ,
                  data: [
                    -1, -1178, -1, 6337, 1164, 32188, 15033, 42290, 9447, -48736, -87879, -223483, -334047, -573042
                  ]
                }, 
{
                  label: 'GREAT_DELUGE',
                    borderWidth: 1
                  ,
                  data: [
                    -1, -1271, -1, -2431, 909, -849, -13168, -18602, -44950, -63758, -132930, -223842, -297700, -546186
                  ]
                }, 
{
                  label: 'VARIABLE_NEIGHBORHOOD_DESCENT',
                    borderWidth: 1
                  ,
                  data: [
                    -1, -1180, -1, 6258, 983, 12350, 4484, 6824, 2848, 3523, 1293, 494, -98, -79
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
                text: 'Best soft score scalability summary (higher is better)'
            },
            tooltip: {
                callbacks: {
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Problem scale (logarithmic)'
                },
                ticks: {
                },
                suggestedMin: 0,
                suggestedMax: 139260438,
                type: 'logarithmic',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score'
                },
                ticks: {
                        stepSize: 10000
                        
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
  chart_bestScoreScalabilitySummaryChart2_54f11.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreScalabilitySummaryChart2_54f11.resize();
});
