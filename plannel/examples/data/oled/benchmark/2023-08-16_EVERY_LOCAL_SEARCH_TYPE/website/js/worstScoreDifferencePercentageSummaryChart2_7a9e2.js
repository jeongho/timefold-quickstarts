
var chart_worstScoreDifferencePercentageSummaryChart2_7a9e2 = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart2_7a9e2'), {
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
                    6586.542923433874, 55721.457489878536, 89213.26530612244, 162369.62025316455, 211.08385370205175, 918.3616647127785, 0, 0, 1503.686797752809, 5057.706500141924, 7.317073170731707, 12.71617497456765, 386.42533936651586, 164.33198380566802
                  ]
                }, 
{
                  label: 'TABU_SEARCH',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    6798.143851508121, 39030.36437246964, 100407.14285714286, 156506.32911392406, 209.18822479928636, 773.4466588511137, 0, 0, 1473.1039325842696, 4211.9500425773485, 7.002360346184107, 17.09053916581892, 366.39243109831347, 169.95141700404858
                  ]
                }, 
{
                  label: 'LATE_ACCEPTANCE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -6896.519721577726, -45339.47368421053, -340764.28571428574, -725269.6202531646, 235.25869759143623, 519.7245017584994, 0, 0, 231.7064606741573, -1483.3664490491058, 7.317073170731707, 18.413021363173957, 360.6746194981489, 160.6315789473684
                  ]
                }, 
{
                  label: 'GREAT_DELUGE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -10380.742459396752, -45412.14574898785, -303675.51020408166, -691274.6835443038, -393.66636931311325, -372.59671746776087, 0, 0, -1678.300561797753, -1909.764405336361, 0, -7.527975584944049, 0, -106.87449392712551
                  ]
                }, 
{
                  label: 'VARIABLE_NEIGHBORHOOD_DESCENT',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7.159716758457907, 0, 357.4249280131633, 0
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
  chart_worstScoreDifferencePercentageSummaryChart2_7a9e2.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart2_7a9e2.resize();
});