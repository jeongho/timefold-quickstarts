
var chart_scoreCalculationSpeedSummaryChart_e4873 = new Chart(document.getElementById('chart_scoreCalculationSpeedSummaryChart_e4873'), {
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
                    139326, 51523, 140249, 21083, 31687, 9053, 21975, 10108, 14606, 7686, 16046, 8087, 14509, 7244
                  ]
                }, 
{
                  label: 'TABU_SEARCH',
                    borderWidth: 1
                  ,
                  data: [
                    486863, 68848, 468726, 25997, 49153, 13470, 31149, 21661, 26844, 24477, 38945, 40816, 50411, 43204
                  ]
                }, 
{
                  label: 'LATE_ACCEPTANCE',
                    borderWidth: 1
                  ,
                  data: [
                    130910, 51163, 136530, 21130, 32098, 10456, 22782, 12704, 17310, 9808, 19118, 10237, 13817, 8932
                  ]
                }, 
{
                  label: 'GREAT_DELUGE',
                    borderWidth: 1
                  ,
                  data: [
                    501464, 68737, 491169, 43772, 50896, 24534, 35297, 21511, 28925, 13744, 25792, 12047, 18910, 10410
                  ]
                }, 
{
                  label: 'VARIABLE_NEIGHBORHOOD_DESCENT',
                    borderWidth: 1
                  ,
                  data: [
                    937815, 113692, 928214, 54706, 119543, 71093, 119163, 134306, 197782, 203599, 314325, 305089, 371564, 255895
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
                text: 'Score calculation speed summary (higher is better)'
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
                    text: 'Score calculation speed per second (logarithmic)'
                },
                ticks: {
                },
                type: 'logarithmic',
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
  chart_scoreCalculationSpeedSummaryChart_e4873.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_scoreCalculationSpeedSummaryChart_e4873.resize();
});
