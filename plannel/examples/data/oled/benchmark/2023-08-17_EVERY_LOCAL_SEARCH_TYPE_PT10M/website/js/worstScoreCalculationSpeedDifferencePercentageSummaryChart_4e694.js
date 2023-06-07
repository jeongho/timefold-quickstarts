
var chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_4e694 = new Chart(document.getElementById('chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_4e694'), {
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
                    0, 0, 0, 0, 3.6226986955008087, 0, 7.341053634687493, 0.27751696025995587, 0, 0, 2.562165564998426, 1.3903108711839167, 0, 0
                  ]
                }, 
{
                  label: 'TABU_SEARCH',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    42.5662189135243, 126.85654473336272, 97.48214829605062, 282.0260123357468, 25.485859392598964, 34.746250465517825, 281.83919951938014, 216.6128830679404, 25.27504419175263, 58.9404319857748, 34.04049942293568, 16.727941176470587, 16.280246572821785, 9.084052627168356
                  ]
                }, 
{
                  label: 'LATE_ACCEPTANCE (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    11.126395856934778, 32.844865579550465, 23.625164980202378, 24.17538213998391, 0, 0.5721637268510682, 0, 0, 3.34010500488088, 18.46660739501072, 0, 0, 0.02760143527463428, 0.955333947875639
                  ]
                }, 
{
                  label: 'GREAT_DELUGE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    61.35836435237633, 84.34332304980168, 79.09912348979661, 67.70581925449181, 38.2994409289181, 58.343772217896195, 311.10604710903027, 226.82717358910187, 59.00852175289555, 114.06830186705716, 49.184765502045956, 18.898920327624722, 49.360566749470976, 98.7178412804827
                  ]
                }, 
{
                  label: 'VARIABLE_NEIGHBORHOOD_DESCENT',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    1114.5735555915196, 2495.813133539004, 2141.8863582523945, 3005.65164923572, 251.53898138477606, 472.5598402004266, 612.2814940647594, 504.2963855498906, 575.3159380523969, 1298.2584592856022, 137.1377609904522, 116.64766381236038, 94.57171772932192, 245.80155870275706
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
                text: 'Worst score calculation speed difference percentage summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Worst score calculation speed difference percentage'
                },
                ticks: {
                        stepSize: 10
                        
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
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_4e694.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_4e694.resize();
});