
var chart_worstScoreDifferencePercentageSummaryChart1_52e97 = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart1_52e97'), {
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
                    64.23770781747436, 63.201169376941344, 69.60095906833362, 67.73498518718017, 37.97752808988764, 45.58969276511397, 0, 0, 62.58706467661691, 64.34740882917467, 0, 0, 6.666666666666667, 37.64705882352941
                  ]
                }, 
{
                  label: 'TABU_SEARCH',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    61.761584718783155, 51.34295633107985, 61.722897756465144, 40.129275518448694, 33.48314606741573, 41.62537165510407, 0, 0, 57.91044776119403, 60.50863723608445, 0, 0, 1.6666666666666667, 37.05882352941177
                  ]
                }, 
{
                  label: 'LATE_ACCEPTANCE (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    64.34382737884683, 63.40215603873561, 70.04624079465663, 68.37238531286471, 40, 47.37363726461844, 0, 0, 63.084577114427866, 64.68330134357005, 0, 0, 11.666666666666666, 38.23529411764706
                  ]
                }, 
{
                  label: 'GREAT_DELUGE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    64.2023346303502, 51.92764480175407, 65.43928754923787, 56.07325612712093, 39.550561797752806, 47.17542120911794, 0, 0, 62.68656716417911, 53.69481765834932, 0, 0, 11.666666666666666, 37.64705882352941
                  ]
                }, 
{
                  label: 'VARIABLE_NEIGHBORHOOD_DESCENT',
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
  chart_worstScoreDifferencePercentageSummaryChart1_52e97.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart1_52e97.resize();
});