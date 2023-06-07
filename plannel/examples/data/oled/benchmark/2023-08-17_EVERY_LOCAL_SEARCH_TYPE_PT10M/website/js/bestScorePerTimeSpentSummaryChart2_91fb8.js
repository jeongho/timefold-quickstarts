
var chart_bestScorePerTimeSpentSummaryChart2_91fb8 = new Chart(document.getElementById('chart_bestScorePerTimeSpentSummaryChart2_91fb8'), {
    type: 'line',
    data: {
        labels: [
            600000, 600001
        ],
        datasets: [
            {
                  label: 'HILL_CLIMBING',
                    borderWidth: 1
                  ,
                  data: [
                    593593, 
                  ]
                }, 
{
                  label: 'TABU_SEARCH',
                    borderWidth: 1
                  ,
                  data: [
                    519470, 186865
                  ]
                }, 
{
                  label: 'LATE_ACCEPTANCE (favorite)',
                    borderWidth: 4
,
                  data: [
                    -539043, 
                  ]
                }, 
{
                  label: 'GREAT_DELUGE',
                    borderWidth: 1
                  ,
                  data: [
                    -565236, 
                  ]
                }, 
{
                  label: 'VARIABLE_NEIGHBORHOOD_DESCENT',
                    borderWidth: 1
                  ,
                  data: [
                    -37, 
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
                text: 'Best soft score per time spent summary (higher left is better)'
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
                suggestedMax: 600001,
                type: 'linear',
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
  chart_bestScorePerTimeSpentSummaryChart2_91fb8.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScorePerTimeSpentSummaryChart2_91fb8.resize();
});
