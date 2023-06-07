
var chart_winningScoreDifferenceSummaryChart2_dbf3f = new Chart(document.getElementById('chart_winningScoreDifferenceSummaryChart2_dbf3f'), {
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
                    12301400, 36776900, 27820800, -376900, -3300, 3913700, 0, 0, 813400, 20298000, -100, -800, -4000, -424500
                  ]
                }, 
{
                  label: 'FIRST_FIT - TABU_SEARCH',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    11033200, 26344500, 23888400, -9700300, -10700, 3181500, 0, 0, 1061600, 15943900, -1600, -3600, -114700, -426800
                  ]
                }, 
{
                  label: 'FIRST_FIT - LATE_ACCEPTANCE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -151200, 13900, 425100, -48283900, -600, 2365700, 0, 0, -123400, 0, -400, 0, -2900, 50500
                  ]
                }, 
{
                  label: 'FIRST_FIT - GREAT_DELUGE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -3795500, -2099500, 208700, -50495400, -2291100, -3694000, 0, 0, -5267800, -2073600, -2800, -8600, -800800, -3038500
                  ]
                }, 
{
                  label: 'FIRST_FIT - VARIABLE_NEIGHBORHOOD_DESCENT',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    417900, 4230800, 10927100, -30492400, -1484400, -3043100, 0, 0, -3816800, -265500, -1700, -12900, -86500, -1938800
                  ]
                }, 
{
                  label: 'FIRST_FIT_DECREASING - HILL_CLIMBING',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    12194700, 36709000, 27815600, -282000, -3300, 3913700, 0, 0, 813400, 20298000, -100, -800, -4000, -424500
                  ]
                }, 
{
                  label: 'FIRST_FIT_DECREASING - TABU_SEARCH',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    11007000, 26637200, 23812900, -9589400, -10700, 3181400, 0, 0, 1063100, 15942900, -1600, -3600, -114700, -426800
                  ]
                }, 
{
                  label: 'FIRST_FIT_DECREASING - LATE_ACCEPTANCE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -207500, 0, -21700, -48292900, 0, 2351800, 0, 0, -98100, -17600, -400, 0, -2900, 50500
                  ]
                }, 
{
                  label: 'FIRST_FIT_DECREASING - GREAT_DELUGE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -3795500, -2099500, 208700, -50495400, -2291100, -3694000, 0, 0, -5267800, -2073600, -2800, -8600, -800800, -3038500
                  ]
                }, 
{
                  label: 'FIRST_FIT_DECREASING - VARIABLE_NEIGHBORHOOD_DESCENT',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    417900, 4230800, 10927100, -30492400, -1484400, -3043100, 0, 0, -3824000, -273500, -1700, -13000, -86500, -1966900
                  ]
                }, 
{
                  label: 'WEAKEST_FIT - HILL_CLIMBING',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    12301400, 36709500, 27749400, 0, -3300, 3913600, 0, 0, 813400, 20300000, -100, -800, -4000, -425500
                  ]
                }, 
{
                  label: 'WEAKEST_FIT - TABU_SEARCH',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    11033100, 26328600, 23821800, -9105100, -10700, 3181400, 0, 0, 1061600, 15942300, -1600, -3600, -114700, -426800
                  ]
                }, 
{
                  label: 'WEAKEST_FIT - LATE_ACCEPTANCE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -177100, 0, 221400, -48583300, 0, 2327300, 0, 0, -45100, 18500, -400, 0, -2900, 50500
                  ]
                }, 
{
                  label: 'WEAKEST_FIT - GREAT_DELUGE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -3795500, -2099500, 208700, -50495400, -2291100, -3694000, 0, 0, -5267800, -2073600, -2800, -8600, -800800, -3038500
                  ]
                }, 
{
                  label: 'WEAKEST_FIT - VARIABLE_NEIGHBORHOOD_DESCENT',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    417900, 4223700, 10927100, -30492400, -1484400, -3050100, 0, 0, -3820800, -265500, -1700, -13000, -86500, -1938800
                  ]
                }, 
{
                  label: 'WEAKEST_FIT_DECREASING - HILL_CLIMBING',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    12184000, 36768600, 27815600, -392500, -3300, 3913600, 0, 0, 813400, 20300000, -100, -800, -4000, -424500
                  ]
                }, 
{
                  label: 'WEAKEST_FIT_DECREASING - TABU_SEARCH',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    11030400, 26363500, 23718400, -9285200, -10700, 3181400, 0, 0, 1061600, 15942900, -1600, -3600, -114700, -426800
                  ]
                }, 
{
                  label: 'WEAKEST_FIT_DECREASING - LATE_ACCEPTANCE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -134300, 0, 0, -48298900, 0, 2351800, 0, 0, -56600, 18500, -400, 0, -2900, 50500
                  ]
                }, 
{
                  label: 'WEAKEST_FIT_DECREASING - GREAT_DELUGE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -3795500, -2099500, 208700, -50495400, -2291100, -3694000, 0, 0, -5267800, -2073600, -2800, -8600, -800800, -3038500
                  ]
                }, 
{
                  label: 'WEAKEST_FIT_DECREASING - VARIABLE_NEIGHBORHOOD_DESCENT',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    417900, 4223700, 10927100, -30492400, -1484400, -3050100, 0, 0, -3824000, -265500, -1700, -12900, -86500, -1966900
                  ]
                }, 
{
                  label: 'STRONGEST_FIT - HILL_CLIMBING (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    12191900, 39583600, 27150400, -1046000, -12300, 3938300, 0, 0, 1417500, 19482900, -300, -1100, 0, -452500
                  ]
                }, 
{
                  label: 'STRONGEST_FIT - TABU_SEARCH',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    8501800, 16999600, 19751600, -20078600, -180300, 3749000, 0, 0, 888400, 11086700, -1700, -1000, -5100, -470200
                  ]
                }, 
{
                  label: 'STRONGEST_FIT - LATE_ACCEPTANCE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    433500, -831500, 409000, -48332500, -13600, 1747400, 0, 0, 0, -70700, 0, -1200, -6900, 0
                  ]
                }, 
{
                  label: 'STRONGEST_FIT - GREAT_DELUGE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -3932800, -2336700, 184900, -49592400, -2221800, -3719100, 0, 0, -5387200, -2321500, -3100, -9700, -796700, -3095400
                  ]
                }, 
{
                  label: 'STRONGEST_FIT - VARIABLE_NEIGHBORHOOD_DESCENT',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    399800, 4509000, 11027300, -30173000, -1848500, -3343800, 0, 0, -3969500, -254700, -1200, -11700, -368100, -3031600
                  ]
                }, 
{
                  label: 'STRONGEST_FIT_DECREASING - HILL_CLIMBING',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    12007400, 37980200, 28090100, -1156100, -106300, 3817800, 0, 0, 1444100, 18620800, -1400, -1500, -3400, -455100
                  ]
                }, 
{
                  label: 'STRONGEST_FIT_DECREASING - TABU_SEARCH',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    9022300, 16851600, 20488600, -20071500, -299600, 2749500, 0, 0, 635200, 12438300, -400, -3700, -109800, -958100
                  ]
                }, 
{
                  label: 'STRONGEST_FIT_DECREASING - LATE_ACCEPTANCE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, -875000, 547600, -48438100, -44300, 0, 0, 0, -893900, 617500, -200, 0, -500, -4800
                  ]
                }, 
{
                  label: 'STRONGEST_FIT_DECREASING - GREAT_DELUGE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -3740100, -2157700, 342800, -49241100, -2281800, -3741300, 0, 0, -5370900, -2141800, -4900, -10300, -782300, -3090400
                  ]
                }, 
{
                  label: 'STRONGEST_FIT_DECREASING - VARIABLE_NEIGHBORHOOD_DESCENT',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    417500, 4576700, 11036600, -30105300, -1866500, -3264700, 0, 0, -3924600, -184800, -1200, -17200, -314000, -3032600
                  ]
                }, 
{
                  label: 'CHEAPEST_INSERTION - HILL_CLIMBING',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    299600, 4189600, 10927100, -30492400, -2010800, -3668400, 0, 0, -4071900, -574100, -86600, -281100, -922400, -3456500
                  ]
                }, 
{
                  label: 'CHEAPEST_INSERTION - TABU_SEARCH',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    299600, 4189600, 10927100, -30492400, -2010800, -3668400, 0, 0, -4071900, -574100, -86600, -281100, -922400, -3456500
                  ]
                }, 
{
                  label: 'CHEAPEST_INSERTION - LATE_ACCEPTANCE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    299600, 4189600, 10927100, -30492400, -2010800, -3668400, 0, 0, -4071900, -574100, -86600, -281100, -922400, -3456500
                  ]
                }, 
{
                  label: 'CHEAPEST_INSERTION - GREAT_DELUGE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    299600, 4189600, 10927100, -30492400, -2010800, -3668400, 0, 0, -4071900, -574100, -86600, -281100, -922400, -3456500
                  ]
                }, 
{
                  label: 'CHEAPEST_INSERTION - VARIABLE_NEIGHBORHOOD_DESCENT',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    299600, 4189600, 10927100, -30492400, -2010800, -3668400, 0, 0, -4071900, -574100, -86600, -281100, -922400, -3456500
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
                text: 'Winning soft score difference summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Winning soft score difference'
                },
                ticks: {
                        stepSize: 1000000
                        
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
  chart_winningScoreDifferenceSummaryChart2_dbf3f.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_winningScoreDifferenceSummaryChart2_dbf3f.resize();
});