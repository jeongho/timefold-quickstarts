
var chart_timeSpentScalabilitySummaryChart_50c98 = new Chart(document.getElementById('chart_timeSpentScalabilitySummaryChart_50c98'), {
    type: 'line',
    data: {
        labels: [
            6789, 37878249, 139260438
        ],
        datasets: [
            {
                  label: 'HILL_CLIMBING',
                    borderWidth: 1
                  ,
                  data: [
                    1800000, 1800000, 1800001
                  ]
                }, 
{
                  label: 'TABU_SEARCH',
                    borderWidth: 1
                  ,
                  data: [
                    1800000, , 1800000
                  ]
                }, 
{
                  label: 'LATE_ACCEPTANCE (favorite)',
                    borderWidth: 4
,
                  data: [
                    1800000, , 1800000
                  ]
                }, 
{
                  label: 'GREAT_DELUGE',
                    borderWidth: 1
                  ,
                  data: [
                    1800000, , 1800000
                  ]
                }, 
{
                  label: 'VARIABLE_NEIGHBORHOOD_DESCENT',
                    borderWidth: 1
                  ,
                  data: [
                    1800000, , 1800000
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
                text: 'Time spent scalability summary (lower is better)'
            },
            tooltip: {
                callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            return label + ": " + humanizeTime(context.parsed.y);
                        }
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Problem scale'
                },
                ticks: {
                        stepSize: 1000000
                        
                },
                suggestedMin: 0,
                suggestedMax: 139260438,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Time spent'
                },
                ticks: {
                        stepSize: 10000
                        ,
                        callback: function(value, index, ticks) {
                            return humanizeTime(value);
                        }
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
  chart_timeSpentScalabilitySummaryChart_50c98.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_timeSpentScalabilitySummaryChart_50c98.resize();
});
