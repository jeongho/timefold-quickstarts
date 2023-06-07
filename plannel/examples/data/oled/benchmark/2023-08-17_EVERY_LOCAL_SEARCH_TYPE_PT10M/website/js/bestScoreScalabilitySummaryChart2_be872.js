
var chart_bestScoreScalabilitySummaryChart2_be872 = new Chart(document.getElementById('chart_bestScoreScalabilitySummaryChart2_be872'), {
    type: 'line',
    data: {
        labels: [
            6789, 15035, 25254, 39494, 55205, 145180, 402969, 1483398, 1511219, 5554721, 9421179, 34630981, 37878249, 139260438
        ],
        datasets: [
            {
                  label: 'HILL_CLIMBING',
                    borderWidth: 1
                  ,
                  data: [
                    -1, -1178, -1, 6963, 1108, 32658, 13950, 70210, 46307, 190342, 103925, 412203, 185069, 593593
                  ]
                }, 
{
                  label: 'TABU_SEARCH',
                    borderWidth: 1
                  ,
                  data: [
                    -1, -1182, -1, 6303, 1151, 33181, 13695, 60613, 44747, 182081, 95508, 419763, 186865, 519470
                  ]
                }, 
{
                  label: 'LATE_ACCEPTANCE (favorite)',
                    borderWidth: 4
,
                  data: [
                    -1, -1178, -1, 6337, 1165, 32228, 15047, 70642, 52098, 167350, 94297, -63791, -179653, -539043
                  ]
                }, 
{
                  label: 'GREAT_DELUGE',
                    borderWidth: 1
                  ,
                  data: [
                    -1, -1271, -1, 6223, 909, 3558, 13772, 67713, 46410, -67452, -141079, -233256, -352700, -565236
                  ]
                }, 
{
                  label: 'VARIABLE_NEIGHBORHOOD_DESCENT',
                    borderWidth: 1
                  ,
                  data: [
                    -1, -1179, -1, 6287, 1069, 25021, 9066, 14281, 7711, 6679, 3092, 2885, -127, -37
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
  chart_bestScoreScalabilitySummaryChart2_be872.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreScalabilitySummaryChart2_be872.resize();
});
