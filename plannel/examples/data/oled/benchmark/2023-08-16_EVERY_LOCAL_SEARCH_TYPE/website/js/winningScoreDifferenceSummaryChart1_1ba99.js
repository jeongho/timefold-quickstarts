
var chart_winningScoreDifferenceSummaryChart1_1ba99 = new Chart(document.getElementById('chart_winningScoreDifferenceSummaryChart1_1ba99'), {
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
                    -1000, -2600, 0, 0, -900, -2000, 0, 0, -700, -2000, 0, 0, -300, -100
                  ]
                }, 
{
                  label: 'TABU_SEARCH',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -45900, -175900, -186000, -525000, -3000, -9500, 0, 0, -6700, -44500, 0, 0, -700, -300
                  ]
                }, 
{
                  label: 'LATE_ACCEPTANCE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 0, -3000, -9600, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                  ]
                }, 
{
                  label: 'GREAT_DELUGE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -44300, -58800, -94700, -93200, -10900, -18000, 0, 0, -21100, -33600, 0, 0, -4000, -8200
                  ]
                }, 
{
                  label: 'VARIABLE_NEIGHBORHOOD_DESCENT',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -185800, -345400, -400600, -717500, -24000, -53400, 0, 0, -69700, -138400, 0, -200, -1100, -12200
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
  chart_winningScoreDifferenceSummaryChart1_1ba99.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_winningScoreDifferenceSummaryChart1_1ba99.resize();
});