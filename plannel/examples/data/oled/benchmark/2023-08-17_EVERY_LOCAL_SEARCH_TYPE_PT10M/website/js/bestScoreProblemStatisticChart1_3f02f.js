
var chart_bestScoreProblemStatisticChart1_3f02f = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_3f02f'), {
    type: 'line',
    data: {
        labels: [
            3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 49, 51, 52, 53, 54, 56, 58, 59, 60, 61, 62, 63, 64, 65, 66, 72, 73, 74, 76, 78, 79, 82, 83, 87, 88, 94, 96, 97, 98, 99, 100, 101, 102, 103, 106, 109, 112, 113, 114, 115, 118, 119, 121, 125, 128, 140, 151, 155, 156, 159, 163, 165, 167, 168, 173, 179, 183, 186, 188, 191, 197, 198, 201, 202, 204, 211, 212, 217, 218, 222, 225, 229, 246, 253, 257, 259, 261, 263, 265, 266, 268, 269, 272, 277, 279, 284, 285, 288, 289, 292, 293, 295, 297, 306, 314, 319, 322, 325, 334, 339, 349, 350, 354, 360, 364, 365, 397, 402, 403, 405, 409, 415, 432, 437, 438, 442, 452, 456, 457, 468, 474, 491, 495, 496, 497, 502, 512, 513, 528, 531, 539, 551, 562, 575, 581, 588, 589, 606, 610, 637, 643, 664, 667, 674, 677, 678, 680, 681, 683, 687, 709, 712, 741, 743, 756, 779, 785, 794, 814, 833, 841, 842, 860, 864, 876, 907, 914, 935, 944, 953, 971, 978, 981, 982, 991, 1000, 1012, 1019, 1047, 1063, 1094, 1117, 1145, 1146, 1149, 1158, 1175, 1177, 1233, 1270, 1275, 1277, 1294, 1337, 1346, 1357, 1359, 1365, 1370, 1420, 1432, 1442, 1451, 1473, 1517, 1547, 1548, 1551, 1558, 1575, 1576, 1591, 1657, 1660, 1685, 1691, 1706, 1721, 1726, 1755, 1766, 1787, 1800, 1811, 1845, 1847, 1857, 1879, 1909, 1914, 1918, 1923, 1928, 1935, 1958, 1971, 1983, 2015, 2045, 2058, 2131, 2154, 2179, 2182, 2200, 2232, 2260, 2312, 2376, 2388, 2443, 2458, 2465, 2498, 2535, 2538, 2579, 2611, 2612, 2625, 2632, 2649, 2661, 2676, 2705, 2732, 2738, 2760, 2761, 2789, 2791, 2807, 2827, 2854, 2877, 2892, 3039, 3045, 3083, 3129, 3133, 3176, 3253, 3287, 3310, 3337, 3368, 3371, 3383, 3387, 3415, 3432, 3502, 3521, 3604, 3623, 3640, 3679, 3738, 3743, 3754, 3895, 3948, 4016, 4029, 4047, 4081, 4098, 4102, 4116, 4133, 4183, 4199, 4352, 4409, 4523, 4594, 4614, 4735, 4736, 4769, 4770, 4892, 4928, 4945, 5056, 5111, 5130, 5226, 5324, 5329, 5343, 5344, 5402, 5454, 5458, 5500, 5595, 5854, 6109, 6152, 6234, 6273, 6294, 6344, 6435, 6461, 6511, 6737, 6840, 6858, 6868, 6889, 6930, 6974, 6986, 6991, 7035, 7116, 7147, 7278, 7320, 7344, 7452, 7473, 7497, 7676, 7728, 7734, 7809, 7830, 7870, 7898, 8033, 8052, 8074, 8168, 8263, 8306, 8360, 8570, 8572, 8574, 9063, 9085, 9221, 9353, 9510, 9514, 9577, 9719, 10160, 10168, 10207, 10253, 10971, 11720, 11788, 12252, 12297, 12366, 12440, 13040, 13090, 13113, 13123, 13136, 13307, 13380, 13522, 13695, 13860, 14384, 14394, 14573, 15139, 15257, 15506, 15581, 16009, 16026, 17561, 17577, 17966, 18095, 18489, 19291, 19386, 20197, 20218, 20309, 20429, 20433, 20436, 20555, 23176, 23233, 23308, 23757, 24448, 24616, 24854, 24866, 25106, 26835, 26850, 28117, 28465, 28731, 28803, 29331, 29701, 30235, 30486, 31587, 31597, 33827, 34022, 36858, 36940, 38112, 38171, 38536, 38760, 39963, 40282, 40286, 41519, 41637, 43507, 43891, 46113, 46767, 46843, 49810, 51829, 52176, 54246, 54510, 56247, 57842, 57845, 57846, 58010, 59087, 60182, 60194, 60946, 61677, 63555, 65794, 65946, 67876, 67878, 68270, 68406, 68824, 69617, 72031, 80169, 82624, 85559, 88149, 88573, 89001, 89172, 97946, 108146, 108162, 111325, 112236, 113070, 123980, 124171, 141811, 144162, 144410, 144863, 154507, 154523, 155418, 155705, 156422, 157604, 164394, 166315, 166441, 169044, 169045, 169046, 169048, 169049, 171291, 179780, 179781, 187030, 191586, 191588, 195488, 195489, 195491, 207059, 207772, 211032, 211261, 218163, 220776, 223254, 223505, 223941, 231551, 232552, 233431, 234919, 240283, 240640, 240641, 245368, 247838, 254951, 255943, 255973, 267799, 270321, 275631, 275674, 276587, 278474, 284897, 286908, 287927, 287928, 288811, 297652, 297668, 298384, 298385, 305663, 307124, 312351, 312443, 316968, 317270, 325455, 325460, 332419, 337436, 339287, 351152, 351801, 407584, 600000
        ],
        datasets: [
            {
                  label: 'HILL_CLIMBING',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -169, -165, -161, -156, -152, -147, -142, -139, -134, -133, -130, -126, -123, -119, -119, -117, -117, , -113, -111, -111, -110, -108, -106, -104, -103, -101, -98, , -96, -95, -94, -94, -92, -92, -91, , , -91, -90, , , , , -90, -89, , -89, -88, , -87, , , -86, , -86, -85, -84, , , , , , , , -84, , -83, , , , -83, -82, -82, -80, , -79, -79, , , -78, -78, -77, -77, , -76, -76, , -75, , , , , , -75, , -74, -74, -73, , , -73, , , -72, , , , -71, , , , , , , , , , -71, -70, , , -69, , , -69, -68, -68, -67, -67, , -66, , , , -66, , -65, , , , , -65, -64, , , , , , , -64, -63, -63, , -62, , , , -62, , , -61, , , , , , , , , , , , -61, , -60, , , , , , , , , , -60, , , -59, -58, , , , , , , , , , , -58, , -57, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -57, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -56, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -56
                  ]
                }, 
{
                  label: 'TABU_SEARCH',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -175, , , , -174, , , -173, -172, , -171, , , , -171, , -170, , , , -170, , , , -169, , -169, , , , -168, , -168, , , -167, , -167, , , , -166, , , , -166, , , -165, , , , , -165, , , , -164, , -164, -163, , , , -163, , -162, , , -161, , , , -161, , , -160, -160, , , , , -159, , , , , , , , , -159, , -158, -157, , -157, -156, , , , , , , , , , , -156, , , -155, -155, -154, -154, , -153, , -152, , , -152, , , , -151, , , -151, , , -150, , , -150, , -149, -148, , , , , , -148, -147, , , , , , , -147, , -146, -146, -145, , -145, -144, , , , -144, -143, , -142, , , -142, , -141, , , -141, -140, -139, -138, , , -138, , -137, -137, , -136, -135, , , , -134, , , , , , , , , , , , , , , , , -134, -133, , -133, -132, -132, , , , -131, -131, -130, , -130, -129, , -129, -128, -127, , , -126, , , , , , , -126, , , , , , , , -125, , -125, -124, -124, , -123, , -123, , , -122, , , , -122, , , , -121, -121, , -120, -120, -119, , -119, -118, , , , -118, , -117, -117, , -116, , , , , -116, -115, , , -115, -114, -114, -113, -112, -112, , , -111, , -111, -110, , , , , , , -110, -109, -108, , , -108, -107, , , , , -107, -106, -106, , -105, -105, , -104, -104, -103, , -103, -102, , -102, , , -101, -101, -100, , -100, -99, , -99, , -98, , , , , , -98, -97, , -97, -96, -96, -95, -95, , , -94, -93, , , , -93, -92, -92, -91, -91, -90, -90, -89, -88, , -88, , -87, , -87, , -86, -86, -85, -84, -84, -83, -83, , -82, , -82, -81, , , -81, -80, -80, -79, , , -79, , , , -78, , , -77, -77, -76, , , -76, -75, , , , -75, , -74, -73, -73, , , , , -72, -72, -71, -71, , -70, , -69, -68, , -68, -67, , -67, -66, , , -66, -65, -65, -64, -63, , , , -63, , , , , , , , , -62, -62, , , , , , , , , , , , -61, , , , , , -60, , , , , , , , , , , , , , , , , , , , , , , , , , -60, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -59, , , , , , , , , , , , , , , , , , , -59
                  ]
                }, 
{
                  label: 'LATE_ACCEPTANCE (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -170, -164, -157, -151, -148, -145, -140, -136, -134, -133, , , , -133, -132, -131, -128, -126, -125, -124, -121, -119, -119, -116, , -115, -114, , -113, -112, -111, -111, , -110, , , , , , , , -110, -108, , , , , , , , -108, , , -107, -106, -105, , , , , -104, , , -102, , , , , , -102, -101, -99, -98, , , , , , , , , , , , , , , , , , -98, -97, -96, , , , -95, , , , , , -94, , , -94, -93, -92, , , , -92, -91, , , , , , , , , -91, , , -89, , , , , , , , , , , , , , , -89, -88, -87, , , , , -87, -86, -86, -85, , , , , , , , , , , , , -85, -84, , , , , -83, -81, , , , , -80, , , , , -80, -79, , , , , , , , , , , , , , -79, -78, -78, -77, -77, -76, , , , , -76, -74, -74, , , , , , , , , -73, -73, , -72, , -72, , , -71, , , , , , , -71, -70, , -70, , , , -69, , -69, -68, , -67, -67, , -66, , , , , , , , -66, -65, , , , -65, , -64, , , , , , , , , , , , , , -64, , -63, , , -63, , -62, , , , , , -62, -61, , , , , , , -61, , , -60, , , -60, -59, , , , -59, , , , , -58, , , -58, -57, , , , , , -57, , , -56, , , , , , , -56, , -55, , , , , , , , -55, , -54, , , , -54, -53, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -53
                  ]
                }, 
{
                  label: 'GREAT_DELUGE',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -169, -163, -158, -152, -148, -145, -140, -136, -134, -133, , , , , , , -130, -126, -125, -124, , -123, , , -123, , , -120, -120, -118, -117, , , -114, , , -113, -113, -111, -110, -110, -107, , -106, , , , , , , -105, -104, -104, , -102, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -102, , , , , , , , , , , , , , -100, , , , , , , , , , , , , , , , , , , , , , , , , -100, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -98, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -97, -95, -95, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -94, -93, -93, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -92, , -92, -91, , , -91, -90, -90, -89, -88, , -87, -87, -86, -86, -85, -85, -84, -84, -83, -82, -82, -81, -80, -79, -78, -78, -77, -77, -76, -76, -75, -75, -74, -73, -73, -72, -72, -71, -71, -70, -69, -69, -68, -68, -67, -66, -66, -65, -65, -64, -64, -63, -63, -62, -62, -61, , , , -61, -60, -60, -59, -59, -58, -58, -57, -57, -56, -55, -55, -54, -54, -53, , -53
                  ]
                }, 
{
                  label: 'VARIABLE_NEIGHBORHOOD_DESCENT',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -175, , , , , , , , , , , , , , -174, , , , -174, , , , , , , , , , , , , , -173, , , , , -173, , , , , -172, , , -172, , , , , , , , , -171, , , , , , -171, , , , , , , , , , , , , , , , , , , , -170, , , -170, , -169, -169, , , , , , , , , , -168, , , -168, , , , , , -167, , , , , , , , -166, , , , , -166, , , , , , , , , , -165, , -165, , , , , , , , , , -164, , , , , , , , , , , , , , , , , , , , , , -163, , , , , -163, , , , , , , , , , -162, -162, , , , , , , , -161, , -161, , , , , , , , , -160, , -160, , , , , , , -159, , , , -159, , , , , , , , , , , , , -158, -158, , , , , , -157, -157, , , -156, , , -156, , , , , , , , -155, , -155, , , , , -154, -154, , , , -153, -153, , , -152, , , , -152, , , -151, -151, , , , , , , , , -150, -150, -149, , , , , , , , , , , , -149, , , , , , , -148, , -148, , , , -147, -147, , , , , , -146, -146, , , , , , , , , , , , , , , , , -145, , , , -145, , , , , , , -144, -144, , , -143, , , -143, , , , , , -142, -142, , , -141, -140, -140, , , , , , , , , , -139, , -139, , -138, , -138, , , , , , , , -137, , -137, , , -136, -136, , , , , -135, -135, , -134, -134, -133, , -133, , , , , -132, -132, , , -131, -131, -130, , -130, , , , -129, , , , , , , , -128, , -128, , , -127, -127, , -126, , , -125, -125, , , , , , -124, -124, -123, , -123, -122, -122, -121, -121, -120, -119, -119, , , -118, -118, -117, -117, -116, -116, -115, -114, -114, -113, -113, , -112, -112, -111, -111, -110, , -110, -109, -108, -108, -107, -107, -106, -105, -105, -104, -104, -103, -103, -102, -102, -101, -101, -100, -100, -99, -99, -98, -98, -97, -97, , -96, -95, -95, -94, -93, -93, -92, -92, -91, -90, -90, -89, -88, -87, -86, -86, -85, , , , -84, -83, -82, -82, -81, -81, -80, -79, -79, -78, -78, -77, -77, -76, -76, -75, -74, -73, -72, -71, -71, -70, -70, -69, -68, -68, -67, -66, -66, -65, -65, , -64, , , -63, -63, , , , , , -62, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -61, -61, , , , , , , , , , , , , , , , -60, -60
                  ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        spanGaps: true,
        plugins: {
            title: {
                display: true,
                text: 'oled-bench-6c-31o-30ts-baking-maint best medium score statistic'
            },
            tooltip: {
                callbacks: {
                        title: function(context) {
                            return humanizeTime(context[0].parsed.x);
                        }
                        
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time spent'
                },
                ticks: {
                        stepSize: 10000
                        ,
                        callback: function(value, index) {
                            return humanizeTime(value);
                        }
                },
                suggestedMin: 0,
                suggestedMax: 600000,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best medium score'
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
  chart_bestScoreProblemStatisticChart1_3f02f.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_3f02f.resize();
});
