
var chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_ee4e0 = new Chart(document.getElementById('chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_ee4e0'), {
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
                    0, 0, 0, 0, 7.770332717190389, 3.9919759277833498, 0, 0, 0, 0, 13.932345071385324, 1.3348769737209172, 15.535620344989894, 0
                  ]
                }, 
{
                  label: 'TABU_SEARCH',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    32.040882543802724, 70.55862068965517, 53.76295812586728, 136.78653404743687, 30.896487985212566, 39.061183550651954, 241.22970696969062, 287.0103661796919, 26.379464672422255, 43.91870435058749, 28.965254584871392, 31.58371924343023, 25.442312484425617, 13.151927437641723
                  ]
                }, 
{
                  label: 'LATE_ACCEPTANCE (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0.42180402336145356, 23.44137931034483, 16.28846624765325, 32.22647283856159, 0, 0, 7.435128694327386, 0.3190920537454508, 7.507290734270783, 6.300412829469673, 0, 0, 0, 1.9085411942554797
                  ]
                }, 
{
                  label: 'GREAT_DELUGE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    33.014276443867615, 63.337931034482764, 41.00889723287895, 62.838561591430754, 30.08780036968577, 33.949849548645936, 250.38052707717466, 319.6314917984718, 35.22074322178269, 58.96475071451255, 36.24050311517353, 32.31322881214083, 33.99784035218872, 46.06953892668179
                  ]
                }, 
{
                  label: 'VARIABLE_NEIGHBORHOOD_DESCENT',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    1032.3653471771577, 2391.2206896551725, 2521.7288384621666, 3827.9035960214233, 202.9898336414048, 376.45737211634906, 527.6027143565982, 665.7877261672733, 436.85213524673003, 1204.414099714195, 117.4781742544091, 131.13178597333035, 109.51352548661295, 174.29138321995467
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
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_ee4e0.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_ee4e0.resize();
});