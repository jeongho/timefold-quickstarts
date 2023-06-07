
var chart_worstScoreDifferencePercentageSummaryChart1_ef940 = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart1_ef940'), {
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
                    63.705035971223026, 62.965009208103126, 69.65612579920511, 68.44048262200613, 27.93733681462141, 42.29543039319872, 0, 0, 59.26327193932828, 63.54679802955665, 0, 0, 5.084745762711865, 23.741007194244602
                  ]
                }, 
{
                  label: 'TABU_SEARCH',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    61.43884892086331, 60.22099447513812, 65.69898047347503, 56.627048442283446, 23.49869451697128, 37.51328374070138, 0, 0, 54.71289274106176, 59.75369458128079, 0, 0, 0, 23.021582733812952
                  ]
                }, 
{
                  label: 'LATE_ACCEPTANCE (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    63.7410071942446, 63.13075506445672, 69.81164679453948, 68.7916441563119, 30.287206266318538, 43.57066950053135, 0, 0, 59.804983748645725, 63.74384236453202, 0, 0, 10.16949152542373, 24.46043165467626
                  ]
                }, 
{
                  label: 'GREAT_DELUGE',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    63.63309352517985, 63.00184162062615, 69.48332469327804, 67.92724653340537, 29.765013054830288, 43.35812964930925, 0, 0, 59.37161430119177, 63.5960591133005, 0, 0, 10.16949152542373, 23.741007194244602
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
  chart_worstScoreDifferencePercentageSummaryChart1_ef940.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart1_ef940.resize();
});