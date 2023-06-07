
var chart_worstScoreDifferencePercentageSummaryChart1_d7544 = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart1_d7544'), {
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
                    64.45762120683641, 62.31594255589893, 68.30349531116795, 64.33823529411765, 45.562130177514796, 48.262910798122064, 0, 0, 64.60674157303372, 64.24870466321244, 0, 1.834862385321101, 39.784946236559136, 53.30396475770925
                  ]
                }, 
{
                  label: 'TABU_SEARCH',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    48.7966515521451, 30.812579530994366, 36.58994032395567, 17.261477761836442, 41.42011834319527, 41.220657276995304, 0, 0, 58.98876404494382, 44.229863400847854, 0, 1.834862385321101, 35.483870967741936, 52.42290748898678
                  ]
                }, 
{
                  label: 'LATE_ACCEPTANCE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    64.80641785838856, 62.78858389383748, 67.7919863597613, 63.477403156384504, 47.337278106508876, 50.140845070422536, 0, 0, 65.2621722846442, 65.19076778144137, 0, 1.834862385321101, 43.01075268817204, 53.74449339207048
                  ]
                }, 
{
                  label: 'GREAT_DELUGE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    49.35472619462853, 52.09961825122706, 52.156862745098046, 55.980989956958396, 25.83826429980276, 33.23943661971831, 0, 0, 45.50561797752809, 49.364107395195475, 0, 1.834862385321101, 0, 17.62114537444934
                  ]
                }, 
{
                  label: 'VARIABLE_NEIGHBORHOOD_DESCENT',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31.182795698924732, 0
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
                text: 'Worst medium score difference percentage summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Worst medium score difference percentage'
                },
                ticks: {
                        stepSize: 1
                        
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
  chart_worstScoreDifferencePercentageSummaryChart1_d7544.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart1_d7544.resize();
});