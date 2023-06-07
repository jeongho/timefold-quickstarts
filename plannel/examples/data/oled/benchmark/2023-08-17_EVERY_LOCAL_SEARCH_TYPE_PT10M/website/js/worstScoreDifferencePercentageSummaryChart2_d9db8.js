
var chart_worstScoreDifferencePercentageSummaryChart2_d9db8 = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart2_d9db8'), {
    type: 'bar',
    data: {
        labels: [
            'oled-bench-100c-501o-30ts-baking-maint', 'oled-bench-100c-501o-60ts-baking-maint', 'oled-bench-200c-1001o-30ts-baking-maint', 'oled-bench-200c-1001o-60ts-baking-maint', 'oled-bench-20c-101o-30ts-baking-maint', 'oled-bench-20c-101o-60ts-baking-maint', 'oled-bench-2c-11o-30ts-baking-maint', 'oled-bench-2c-11o-60ts-baking-maint', 'oled-bench-40c-201o-30ts-baking-maint', 'oled-bench-40c-201o-60ts-baking-maint', 'oled-bench-4c-21o-30ts-baking-maint', 'oled-bench-4c-21o-60ts-baking-maint', 'oled-bench-6c-31o-30ts-baking-maint', 'oled-bench-6c-31o-60ts-baking-maint'
        ],
        datasets: [
            {
                  label: 'HILL_CLIMBING',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    3261.0931435963776, 14187.798960138647, 145823.62204724408, 1604405.4054054054, 53.87160820648577, 391.6322386387508, 0, 0, 500.5317079496823, 2749.8577631381945, 7.317073170731707, 21.892189218921892, 10.752346111022746, 30.522361216578076
                  ]
                }, 
{
                  label: 'TABU_SEARCH',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    2988.8745148771022, 14449.844020797227, 147237.79527559056, 1404072.972972973, 51.05890138980808, 324.43106225054265, 0, 0, 480.3008688886007, 2626.1715825722413, 7.002360346184107, 26.62266226622662, 0.25449339907746144, 32.612605411454375
                  ]
                }, 
{
                  label: 'LATE_ACCEPTANCE (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    2949.7089262613194, -2311.1265164644715, -141359.05511811023, -1456772.972972973, 65.97176262960511, 394.6572368881731, 0, 0, 575.6322137206588, 2405.614612966013, 7.317073170731707, 28.16281628162816, 0.795291872117067, 28.803804803964674
                  ]
                }, 
{
                  label: 'GREAT_DELUGE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -4662.710219922381, -8185.1299826689765, -277616.5354330709, -1527564.8648648649, 51.90822854621663, 374.14746866465936, 0, 0, 501.8674620671767, -1109.911663422668, 0, 0, -1.0179735963098457, -85.77994484632909
                  ]
                }, 
{
                  label: 'VARIABLE_NEIGHBORHOOD_DESCENT',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7.238394964594807, 17.601760176017603, 0, 0
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
  chart_worstScoreDifferencePercentageSummaryChart2_d9db8.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart2_d9db8.resize();
});