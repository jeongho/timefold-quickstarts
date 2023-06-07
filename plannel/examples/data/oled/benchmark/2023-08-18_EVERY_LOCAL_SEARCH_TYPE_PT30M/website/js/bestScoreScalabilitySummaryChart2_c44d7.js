
var chart_bestScoreScalabilitySummaryChart2_c44d7 = new Chart(document.getElementById('chart_bestScoreScalabilitySummaryChart2_c44d7'), {
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
                    -1, -1178, -1, 6963, 1108, 32658, 13950, 70407, 46657, 191048, 107479, 430596, 213051, 876511
                  ]
                }, 
{
                  label: 'TABU_SEARCH',
                    borderWidth: 1
                  ,
                  data: [
                    -1, -1182, -1, 6303, 1162, 33181, 13551, 60626, 44531, 183244, 96626, 444865, 207953, 865356
                  ]
                }, 
{
                  label: 'LATE_ACCEPTANCE (favorite)',
                    borderWidth: 4
,
                  data: [
                    -1, -1178, -1, 6337, 1165, 32228, 15047, 70751, 52288, 206972, 123671, 230795, 88678, -304919
                  ]
                }, 
{
                  label: 'GREAT_DELUGE',
                    borderWidth: 1
                  ,
                  data: [
                    -1, -1271, -1, 6223, 909, 3558, 13772, 67856, 46519, 200657, 109785, 436714, 163953, -320146
                  ]
                }, 
{
                  label: 'VARIABLE_NEIGHBORHOOD_DESCENT',
                    borderWidth: 1
                  ,
                  data: [
                    -1, -1179, -1, 6288, 1069, 29440, 13849, 30105, 12906, 12664, 5972, 6891, -1177, -318
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
  chart_bestScoreScalabilitySummaryChart2_c44d7.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreScalabilitySummaryChart2_c44d7.resize();
});
