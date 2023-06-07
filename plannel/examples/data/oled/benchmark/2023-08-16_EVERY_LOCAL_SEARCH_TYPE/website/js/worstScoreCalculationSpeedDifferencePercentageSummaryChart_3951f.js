
var chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_3951f = new Chart(document.getElementById('chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_3951f'), {
    type: 'bar',
    data: {
        labels: [
            'oled-bench-100c-501o-30ts-baking-maint', 'oled-bench-100c-501o-60ts-baking-maint', 'oled-bench-200c-1001o-30ts-baking-maint', 'oled-bench-200c-1001o-60ts-baking-maint', 'oled-bench-20c-101o-30ts-baking-maint', 'oled-bench-20c-101o-60ts-baking-maint', 'oled-bench-2c-11o-30ts-baking-maint', 'oled-bench-2c-11o-60ts-baking-maint', 'oled-bench-40c-201o-30ts-baking-maint', 'oled-bench-40c-201o-60ts-baking-maint', 'oled-bench-4c-21o-30ts-baking-maint', 'oled-bench-4c-21o-60ts-baking-maint', 'oled-bench-6c-31o-30ts-baking-maint', 'oled-bench-6c-31o-60ts-baking-maint'
        ],
        datasets: [
            {
                  label: 'HILL_CLIMBING (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0, 0, 5.008323080263444, 0, 0, 0, 6.428844244137194, 2.723943455650773, 0, 0, 0.7036334851357426, 0, 0, 0
                  ]
                }, 
{
                  label: 'TABU_SEARCH',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    142.70846316839086, 404.71126499319894, 264.8476514438735, 496.41082274986195, 41.74744027303755, 114.29560743965177, 271.9066534260179, 243.31355745989893, 83.78748459537177, 218.46213895394223, 34.565994957293356, 55.12039637706315, 23.307878385429017, 48.790456202363856
                  ]
                }, 
{
                  label: 'LATE_ACCEPTANCE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    19.144958245045494, 26.58587857054532, 0, 23.302043070127002, 3.6723549488054603, 25.682627621685793, 0, 0, 18.512939887717376, 27.60863908404892, 0, 1.2970618865780918, 0.22292842574586158, 15.497625096653042
                  ]
                }, 
{
                  label: 'GREAT_DELUGE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    60.737878599027795, 48.967478669469514, 36.86038937540711, 43.70513528437328, 60.623435722411834, 112.81163434903047, 283.060117638072, 259.7517029224346, 98.03505408736136, 78.81863127764767, 34.3490412993765, 60.62107488875564, 107.61751173931604, 171.0040870429692
                  ]
                }, 
{
                  label: 'VARIABLE_NEIGHBORHOOD_DESCENT',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    1858.8994141842204, 3672.585631260047, 2589.1799956575232, 3432.5096631695196, 442.26621160409553, 1228.7099327265532, 616.3814834619204, 579.8608364462023, 1254.114747364097, 2548.95914650013, 122.21527275570236, 277.2619686306687, 159.4792012521937, 685.2976913730255
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
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_3951f.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_3951f.resize();
});