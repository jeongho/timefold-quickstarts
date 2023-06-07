
var chart_worstScoreDifferencePercentageSummaryChart2_5c094 = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart2_5c094'), {
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
                    240036, 651746, 168937, 301155, 200750, 758210, 0, 0, 244265, 1043604.9999999999, 43250, 140150, 306133.3333333334, 1010666.6666666666
                  ]
                }, 
{
                  label: 'FIRST_FIT - TABU_SEARCH',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    214671.99999999997, 443097.99999999994, 129613.00000000001, 207921, 200010, 684990, 0, 0, 256675, 825900, 42500, 138750, 269233.3333333334, 1009900
                  ]
                }, 
{
                  label: 'FIRST_FIT - LATE_ACCEPTANCE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -9016, -83514, -105020, -177915, 201020, 603410, 0, 0, 197425, 28705, 43100, 140550, 306500, 1169000
                  ]
                }, 
{
                  label: 'FIRST_FIT - GREAT_DELUGE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -81902, -125782, -107183.99999999999, -200030, -28030, -2560, 0, 0, -59795.00000000001, -74975, 41900, 136250, 40533.33333333333, 139333.3333333333
                  ]
                }, 
{
                  label: 'FIRST_FIT - VARIABLE_NEIGHBORHOOD_DESCENT',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    2366, 824, 0, 0, 52640, 62529.99999999999, 0, 0, 12755, 15430.000000000002, 42450, 134100, 278633.3333333334, 505900
                  ]
                }, 
{
                  label: 'FIRST_FIT_DECREASING - HILL_CLIMBING',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    237902, 650388, 168885, 302104, 200750, 758210, 0, 0, 244265, 1043604.9999999999, 43250, 140150, 306133.3333333334, 1010666.6666666666
                  ]
                }, 
{
                  label: 'FIRST_FIT_DECREASING - TABU_SEARCH',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    214148, 448952.00000000006, 128858, 209030.00000000003, 200010, 684980, 0, 0, 256750, 825850, 42500, 138750, 269233.3333333334, 1009900
                  ]
                }, 
{
                  label: 'FIRST_FIT_DECREASING - LATE_ACCEPTANCE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -10142, -83792, -109488.00000000001, -178005, 201080, 602020, 0, 0, 198690, 27825, 43100, 140550, 306500, 1169000
                  ]
                }, 
{
                  label: 'FIRST_FIT_DECREASING - GREAT_DELUGE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -81902, -125782, -107183.99999999999, -200030, -28030, -2560, 0, 0, -59795.00000000001, -74975, 41900, 136250, 40533.33333333333, 139333.3333333333
                  ]
                }, 
{
                  label: 'FIRST_FIT_DECREASING - VARIABLE_NEIGHBORHOOD_DESCENT',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    2366, 824, 0, 0, 52640, 62529.99999999999, 0, 0, 12395, 15030.000000000002, 42450, 134050, 278633.3333333334, 496533.3333333333
                  ]
                }, 
{
                  label: 'WEAKEST_FIT - HILL_CLIMBING',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    240036, 650398, 168223, 304924, 200750, 758200, 0, 0, 244265, 1043704.9999999999, 43250, 140150, 306133.3333333334, 1010333.3333333334
                  ]
                }, 
{
                  label: 'WEAKEST_FIT - TABU_SEARCH',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    214669.99999999997, 442780, 128947, 213873, 200010, 684980, 0, 0, 256675, 825820.0000000001, 42500, 138750, 269233.3333333334, 1009900
                  ]
                }, 
{
                  label: 'WEAKEST_FIT - LATE_ACCEPTANCE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -9534, -83792, -107057, -180909, 201080, 599570, 0, 0, 201340, 29630, 43100, 140550, 306500, 1169000
                  ]
                }, 
{
                  label: 'WEAKEST_FIT - GREAT_DELUGE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -81902, -125782, -107183.99999999999, -200030, -28030, -2560, 0, 0, -59795.00000000001, -74975, 41900, 136250, 40533.33333333333, 139333.3333333333
                  ]
                }, 
{
                  label: 'WEAKEST_FIT - VARIABLE_NEIGHBORHOOD_DESCENT',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    2366, 682, 0, 0, 52640, 61829.99999999999, 0, 0, 12555, 15430.000000000002, 42450, 134050, 278633.3333333334, 505900
                  ]
                }, 
{
                  label: 'WEAKEST_FIT_DECREASING - HILL_CLIMBING',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    237688, 651580, 168885, 300999, 200750, 758200, 0, 0, 244265, 1043704.9999999999, 43250, 140150, 306133.3333333334, 1010666.6666666666
                  ]
                }, 
{
                  label: 'WEAKEST_FIT_DECREASING - TABU_SEARCH',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    214616, 443478, 127913.00000000001, 212071.99999999997, 200010, 684980, 0, 0, 256675, 825850, 42500, 138750, 269233.3333333334, 1009900
                  ]
                }, 
{
                  label: 'WEAKEST_FIT_DECREASING - LATE_ACCEPTANCE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -8678, -83792, -109271, -178065, 201080, 602020, 0, 0, 200765, 29630, 43100, 140550, 306500, 1169000
                  ]
                }, 
{
                  label: 'WEAKEST_FIT_DECREASING - GREAT_DELUGE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -81902, -125782, -107183.99999999999, -200030, -28030, -2560, 0, 0, -59795.00000000001, -74975, 41900, 136250, 40533.33333333333, 139333.3333333333
                  ]
                }, 
{
                  label: 'WEAKEST_FIT_DECREASING - VARIABLE_NEIGHBORHOOD_DESCENT',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    2366, 682, 0, 0, 52640, 61829.99999999999, 0, 0, 12395, 15430.000000000002, 42450, 134100, 278633.3333333334, 496533.3333333333
                  ]
                }, 
{
                  label: 'STRONGEST_FIT - HILL_CLIMBING (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    237846, 707880, 162233, 294464, 199850, 760670, 0, 0, 274470, 1002850, 43150, 140000, 307466.6666666666, 1001333.3333333334
                  ]
                }, 
{
                  label: 'STRONGEST_FIT - TABU_SEARCH',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    164044, 256200, 88245, 104138.00000000001, 183050, 741740, 0, 0, 248015, 583040, 42450, 140050, 305766.6666666666, 995433.3333333334
                  ]
                }, 
{
                  label: 'STRONGEST_FIT - LATE_ACCEPTANCE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    2678, -100422, -105181, -178401, 199720, 541580, 0, 0, 203595, 25170, 43300, 139950, 305166.6666666666, 1152166.6666666665
                  ]
                }, 
{
                  label: 'STRONGEST_FIT - GREAT_DELUGE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -84648, -130526, -107422, -191000, -21100, -5070, 0, 0, -65765, -87370, 41750, 135700, 41900, 120366.66666666667
                  ]
                }, 
{
                  label: 'STRONGEST_FIT - VARIABLE_NEIGHBORHOOD_DESCENT',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    2004, 6388, 1002, 3194, 16230.000000000002, 32460.000000000004, 0, 0, 5120, 15969.999999999998, 42700, 134700, 184766.6666666667, 141633.3333333333
                  ]
                }, 
{
                  label: 'STRONGEST_FIT_DECREASING - HILL_CLIMBING',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    234156, 675812, 171630, 293363, 190450, 748620, 0, 0, 275800, 959745.0000000001, 42600, 139800, 306333.3333333334, 1000466.6666666666
                  ]
                }, 
{
                  label: 'STRONGEST_FIT_DECREASING - TABU_SEARCH',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    174454, 253240, 95615, 104208.99999999999, 171120, 641790, 0, 0, 235355.00000000003, 650620, 43100, 138700, 270866.6666666666, 832800
                  ]
                }, 
{
                  label: 'STRONGEST_FIT_DECREASING - LATE_ACCEPTANCE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -5992, -101292, -103795, -179457, 196650, 366840, 0, 0, 158900, 59579.99999999999, 43200, 140550, 307300, 1150566.6666666665
                  ]
                }, 
{
                  label: 'STRONGEST_FIT_DECREASING - GREAT_DELUGE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -80794, -126946, -105843, -187487, -27100, -7290.000000000001, 0, 0, -64950, -78385, 40850, 135400, 46700, 122033.33333333333
                  ]
                }, 
{
                  label: 'STRONGEST_FIT_DECREASING - VARIABLE_NEIGHBORHOOD_DESCENT',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    2358, 7742, 1095, 3871, 14430.000000000002, 40370, 0, 0, 7365.000000000001, 19465, 42700, 131950, 202800, 141300
                  ]
                }, 
{
                  label: 'CHEAPEST_INSERTION - HILL_CLIMBING',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                  ]
                }, 
{
                  label: 'CHEAPEST_INSERTION - TABU_SEARCH',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                  ]
                }, 
{
                  label: 'CHEAPEST_INSERTION - LATE_ACCEPTANCE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                  ]
                }, 
{
                  label: 'CHEAPEST_INSERTION - GREAT_DELUGE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                  ]
                }, 
{
                  label: 'CHEAPEST_INSERTION - VARIABLE_NEIGHBORHOOD_DESCENT',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
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
                text: 'Worst soft score difference percentage summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Worst soft score difference percentage'
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
  chart_worstScoreDifferencePercentageSummaryChart2_5c094.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart2_5c094.resize();
});