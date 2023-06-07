
var chart_winningScoreDifferenceSummaryChart1_afd23 = new Chart(document.getElementById('chart_winningScoreDifferenceSummaryChart1_afd23'), {
    type: 'bar',
    data: {
        labels: [
            'oled-bench-100c-501o-30ts-baking-maint', 'oled-bench-100c-501o-60ts-baking-maint', 'oled-bench-200c-1001o-30ts-baking-maint', 'oled-bench-200c-1001o-60ts-baking-maint', 'oled-bench-20c-101o-30ts-baking-maint', 'oled-bench-20c-101o-60ts-baking-maint', 'oled-bench-2c-11o-30ts-baking-maint', 'oled-bench-2c-11o-60ts-baking-maint', 'oled-bench-40c-201o-30ts-baking-maint', 'oled-bench-40c-201o-60ts-baking-maint', 'oled-bench-4c-21o-30ts-baking-maint', 'oled-bench-4c-21o-60ts-baking-maint', 'oled-bench-6c-31o-30ts-baking-maint', 'oled-bench-6c-31o-60ts-baking-maint'
        ],
        datasets: [
            {
                  label: 'FIRST_FIT - HILL_CLIMBING',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -500, -2100, -2700, -600, -600, -1500, 0, 0, -500, -300, 0, 0, 0, 0
                  ]
                }, 
{
                  label: 'FIRST_FIT - TABU_SEARCH',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -43500, -171600, -173700, -460700, -4100, -7100, 0, 0, -6800, -38700, 0, 0, -400, -300
                  ]
                }, 
{
                  label: 'FIRST_FIT - LATE_ACCEPTANCE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -100, -100, -500, -8800, 0, -100, 0, 0, 0, 0, 0, 0, 0, -100
                  ]
                }, 
{
                  label: 'FIRST_FIT - GREAT_DELUGE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -44300, -58900, -94200, -89800, -10700, -18100, 0, 0, -21100, -32900, 0, 0, -4000, -8200
                  ]
                }, 
{
                  label: 'FIRST_FIT - VARIABLE_NEIGHBORHOOD_DESCENT',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -185700, -345200, -400100, -713900, -24000, -54000, 0, 0, -69800, -139600, 0, -500, -1700, -11200
                  ]
                }, 
{
                  label: 'FIRST_FIT_DECREASING - HILL_CLIMBING',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -500, -2200, -2700, -400, -600, -1500, 0, 0, -500, -300, 0, 0, 0, 0
                  ]
                }, 
{
                  label: 'FIRST_FIT_DECREASING - TABU_SEARCH',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -44000, -170800, -175100, -460100, -4100, -7100, 0, 0, -6800, -38800, 0, 0, -400, -300
                  ]
                }, 
{
                  label: 'FIRST_FIT_DECREASING - LATE_ACCEPTANCE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -100, 0, 0, -7500, 0, -100, 0, 0, 0, -100, 0, 0, 0, -100
                  ]
                }, 
{
                  label: 'FIRST_FIT_DECREASING - GREAT_DELUGE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -44300, -58900, -94200, -89800, -10700, -18100, 0, 0, -21100, -32900, 0, 0, -4000, -8200
                  ]
                }, 
{
                  label: 'FIRST_FIT_DECREASING - VARIABLE_NEIGHBORHOOD_DESCENT',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -185700, -345100, -400100, -713900, -24000, -54000, 0, 0, -69900, -139600, 0, -600, -1700, -11300
                  ]
                }, 
{
                  label: 'WEAKEST_FIT - HILL_CLIMBING',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -500, -2200, -2800, 0, -600, -1500, 0, 0, -500, -300, 0, 0, 0, 0
                  ]
                }, 
{
                  label: 'WEAKEST_FIT - TABU_SEARCH',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -43600, -171500, -174900, -458300, -4100, -7100, 0, 0, -6800, -38900, 0, 0, -400, -300
                  ]
                }, 
{
                  label: 'WEAKEST_FIT - LATE_ACCEPTANCE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -100, 0, -500, -7800, 0, -100, 0, 0, 0, -100, 0, 0, 0, -100
                  ]
                }, 
{
                  label: 'WEAKEST_FIT - GREAT_DELUGE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -44300, -58900, -94200, -89800, -10700, -18100, 0, 0, -21100, -32900, 0, 0, -4000, -8200
                  ]
                }, 
{
                  label: 'WEAKEST_FIT - VARIABLE_NEIGHBORHOOD_DESCENT',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -185700, -345400, -400100, -713900, -24000, -54000, 0, 0, -69800, -139600, 0, -600, -1700, -11200
                  ]
                }, 
{
                  label: 'WEAKEST_FIT_DECREASING - HILL_CLIMBING',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -500, -2200, -2700, -700, -600, -1500, 0, 0, -500, -300, 0, 0, 0, 0
                  ]
                }, 
{
                  label: 'WEAKEST_FIT_DECREASING - TABU_SEARCH',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -43900, -171300, -175400, -459300, -4100, -7100, 0, 0, -6800, -38700, 0, 0, -400, -300
                  ]
                }, 
{
                  label: 'WEAKEST_FIT_DECREASING - LATE_ACCEPTANCE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -100, 0, 0, -7800, 0, -100, 0, 0, 0, -100, 0, 0, 0, -100
                  ]
                }, 
{
                  label: 'WEAKEST_FIT_DECREASING - GREAT_DELUGE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -44300, -58900, -94200, -89800, -10700, -18100, 0, 0, -21100, -32900, 0, 0, -4000, -8200
                  ]
                }, 
{
                  label: 'WEAKEST_FIT_DECREASING - VARIABLE_NEIGHBORHOOD_DESCENT',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -185800, -345300, -400100, -713900, -24000, -54000, 0, 0, -69900, -139600, 0, -500, -1700, -11300
                  ]
                }, 
{
                  label: 'STRONGEST_FIT - HILL_CLIMBING (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    -700, -2300, -1000, -200, -1200, -700, 0, 0, -100, -400, 0, 0, 0, 0
                  ]
                }, 
{
                  label: 'STRONGEST_FIT - TABU_SEARCH',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -53300, -203700, -214800, -534800, -4500, -7900, 0, 0, -6000, -42100, 0, 0, -400, -500
                  ]
                }, 
{
                  label: 'STRONGEST_FIT - LATE_ACCEPTANCE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -100, -800, -300, -10300, 0, -100, 0, 0, 0, 0, 0, 0, 0, 0
                  ]
                }, 
{
                  label: 'STRONGEST_FIT - GREAT_DELUGE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -45400, -59600, -92700, -91700, -10300, -17800, 0, 0, -21200, -33700, 0, 0, -3400, -7900
                  ]
                }, 
{
                  label: 'STRONGEST_FIT - VARIABLE_NEIGHBORHOOD_DESCENT',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -184700, -341600, -397000, -708900, -26200, -54400, 0, 0, -71500, -138000, 0, -700, -3100, -15000
                  ]
                }, 
{
                  label: 'STRONGEST_FIT_DECREASING - HILL_CLIMBING',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -700, -1600, -1600, -1600, -1100, -1800, 0, 0, -1100, -600, 0, 0, 0, 0
                  ]
                }, 
{
                  label: 'STRONGEST_FIT_DECREASING - TABU_SEARCH',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -51600, -198500, -208800, -527200, -3200, -7900, 0, 0, -7500, -44700, 0, 0, -100, -100
                  ]
                }, 
{
                  label: 'STRONGEST_FIT_DECREASING - LATE_ACCEPTANCE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -700, -500, -10000, 0, 0, 0, 0, 0, -100, 0, 0, 0, 0
                  ]
                }, 
{
                  label: 'STRONGEST_FIT_DECREASING - GREAT_DELUGE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -44100, -58100, -93800, -94900, -10300, -18600, 0, 0, -21500, -33800, 0, 0, -3600, -8200
                  ]
                }, 
{
                  label: 'STRONGEST_FIT_DECREASING - VARIABLE_NEIGHBORHOOD_DESCENT',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -185200, -341900, -398000, -709300, -27100, -54200, 0, 0, -71200, -137700, 0, -1100, -2900, -14400
                  ]
                }, 
{
                  label: 'CHEAPEST_INSERTION - HILL_CLIMBING',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -190000, -347500, -401500, -714700, -33200, -60800, 0, 0, -77800, -144100, -3900, -7000, -12300, -22900
                  ]
                }, 
{
                  label: 'CHEAPEST_INSERTION - TABU_SEARCH',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -190000, -347500, -401500, -714700, -33200, -60800, 0, 0, -77800, -144100, -3900, -7000, -12300, -22900
                  ]
                }, 
{
                  label: 'CHEAPEST_INSERTION - LATE_ACCEPTANCE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -190000, -347500, -401500, -714700, -33200, -60800, 0, 0, -77800, -144100, -3900, -7000, -12300, -22900
                  ]
                }, 
{
                  label: 'CHEAPEST_INSERTION - GREAT_DELUGE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -190000, -347500, -401500, -714700, -33200, -60800, 0, 0, -77800, -144100, -3900, -7000, -12300, -22900
                  ]
                }, 
{
                  label: 'CHEAPEST_INSERTION - VARIABLE_NEIGHBORHOOD_DESCENT',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -190000, -347500, -401500, -714700, -33200, -60800, 0, 0, -77800, -144100, -3900, -7000, -12300, -22900
                  ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        resizeDelay: 100,
        spanGaps: true,
        plugins: {
            title: {
                display: true,
                text: 'Winning medium score difference summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Winning medium score difference'
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
  chart_winningScoreDifferenceSummaryChart1_afd23.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_winningScoreDifferenceSummaryChart1_afd23.resize();
});