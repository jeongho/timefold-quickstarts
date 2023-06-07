
var chart_bestScoreScalabilitySummaryChart1_2d829 = new Chart(document.getElementById('chart_bestScoreScalabilitySummaryChart1_2d829'), {
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
                    -71, -54, -136, -56, -107, -106, -276, -543, -376, -740, -1009, -2011, -1756, -3505
                  ]
                }, 
{
                  label: 'TABU_SEARCH',
                    borderWidth: 1
                  ,
                  data: [
                    -71, -54, -136, -59, -107, -107, -293, -588, -418, -817, -1072, -2160, -1985, -4817
                  ]
                }, 
{
                  label: 'LATE_ACCEPTANCE (favorite)',
                    borderWidth: 4
,
                  data: [
                    -71, -54, -136, -53, -107, -105, -267, -531, -371, -736, -1008, -2002, -1747, -3466
                  ]
                }, 
{
                  label: 'GREAT_DELUGE',
                    borderWidth: 1
                  ,
                  data: [
                    -71, -54, -136, -53, -107, -106, -269, -533, -375, -739, -1011, -2009, -1766, -3562
                  ]
                }, 
{
                  label: 'VARIABLE_NEIGHBORHOOD_DESCENT',
                    borderWidth: 1
                  ,
                  data: [
                    -71, -54, -136, -59, -107, -139, -383, -941, -923, -2030, -2780, -5430, -5787, -11106
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
                text: 'Best medium score scalability summary (higher is better)'
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
                    text: 'Best medium score'
                },
                ticks: {
                        stepSize: 100
                        
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
  chart_bestScoreScalabilitySummaryChart1_2d829.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreScalabilitySummaryChart1_2d829.resize();
});
