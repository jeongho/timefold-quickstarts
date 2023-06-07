
var chart_bestScoreProblemStatisticChart2_69246 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart2_69246'), {
    type: 'line',
    data: {
        labels: [
            4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 30, 31, 32, 35, 36, 37, 38, 39, 40, 41, 42, 44, 45, 46, 48, 49, 55, 60, 62, 63, 65, 69, 73, 74, 76, 79, 80, 83, 84, 86, 87, 88, 89, 90, 95, 96, 103, 104, 105, 106, 107, 110, 111, 112, 113, 114, 119, 121, 122, 124, 125, 127, 128, 132, 133, 136, 137, 139, 141, 144, 145, 146, 149, 150, 152, 154, 157, 160, 161, 162, 164, 167, 173, 176, 178, 179, 184, 185, 186, 188, 189, 193, 195, 205, 207, 210, 212, 213, 214, 217, 219, 220, 225, 226, 227, 230, 234, 235, 236, 238, 260, 264, 269, 274, 275, 277, 285, 290, 293, 297, 298, 303, 306, 320, 332, 337, 345, 350, 351, 352, 353, 363, 364, 374, 378, 383, 388, 393, 398, 401, 402, 403, 405, 406, 408, 415, 420, 432, 434, 438, 443, 449, 450, 477, 490, 509, 516, 518, 525, 535, 540, 564, 565, 566, 582, 595, 602, 608, 619, 626, 628, 630, 636, 643, 657, 677, 683, 703, 711, 770, 788, 798, 836, 843, 849, 854, 855, 856, 918, 955, 957, 959, 980, 993, 994, 1002, 1003, 1015, 1034, 1036, 1060, 1063, 1064, 1065, 1069, 1070, 1087, 1094, 1119, 1120, 1123, 1124, 1137, 1138, 1176, 1190, 1217, 1229, 1246, 1247, 1248, 1260, 1270, 1289, 1300, 1310, 1312, 1420, 1421, 1423, 1437, 1475, 1476, 1488, 1492, 1495, 1500, 1512, 1529, 1534, 1559, 1579, 1588, 1647, 1666, 1683, 1687, 1718, 1736, 1738, 1741, 1827, 1840, 1877, 1913, 1931, 1950, 1971, 1974, 1979, 1996, 2014, 2063, 2208, 2309, 2359, 2596, 2597, 2598, 2608, 2623, 2652, 2669, 2682, 2712, 2727, 3065, 3148, 3167, 3266, 3279, 3369, 3483, 3518, 3569, 3583, 3687, 3979, 3980, 3982, 3985, 3988, 4173, 4203, 4206, 4209, 4213, 4216, 4248, 4251, 4275, 4480, 4489, 4491, 4492, 5057, 5061, 5247, 5251, 5292, 5296, 5452, 5497, 5636, 5660, 6237, 6494, 6498, 6499, 7008, 10791, 10792, 13900, 13902, 18525, 18527, 18717, 18722, 25439, 25445, 40673, 40675, 40678, 40681, 41583, 44289, 58488, 66243, 68250, 68629, 69213, 70102, 70103, 70518, 70519, 83726, 84236, 84897, 86549, 86555, 87010, 87054, 91053, 91599, 91994, 92498, 94426, 99313, 101944, 101945, 105248, 105249, 107960, 109801, 111666, 114400, 119008, 119017, 119032, 119039, 119040, 119077, 119091, 119110, 119123, 119185, 119403, 141930, 528183, 600000
        ],
        datasets: [
            {
                  label: 'HILL_CLIMBING',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -2, , , -199, -199, -369, -349, -319, -279, -218, -218, , , -208, -367, , -755, -745, , -735, , -905, , -904, -635, -594, -764, , -763, -761, , -931, -751, -756, -755, -926, , -931, -1100, , , , -1071, -1069, -1049, -1016, -1015, , -1014, -984, , -983, , -1153, , -1143, -1123, -1057, , , , , , -1227, , -1187, , , -998, -963, -1133, , -1132, -1092, -1099, , , -1098, -1097, -1021, , -962, -947, -923, , , , , -1092, , , -1079, -1078, -1020, , , , -1004, , , -1173, , -1153, , , , -1323, , , , , -1321, -1302, , , , , , -1301, , , , , -1277, , , , -1267, , , -1227, , , , , , , , , , , , -1212, , , , , , , , , , , , -1201, , , , , , -1199, , , , , , , , -1189, , , -1179, -1178, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -1178
                  ]
                }, 
{
                  label: 'TABU_SEARCH',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , -172, , , , , , , , , , , , , -172, , , , -342, , , , , , -560, , , -380, , , -340, , , -330, , -319, , , , , , -299, , , , , , -288, , , , , -288, , , -458, -628, , , -627, , , , , , , , , -448, , , , -447, , -413, -412, , -188, , , , , , -158, , , , , , , , -118, -118, -78, , -46, , , -46, , 14, 25, , , -145, , , , , , , , , , , , , , , -315, -135, -305, -265, -109, , -50, -50, , -45, , -15, -10, 15, 30, -142, 50, -120, -119, , , , , -80, , , -81, -80, -79, -69, , , -19, , , -9, , -7, , , -177, 68, , , , , , 78, , , , 79, , , , 81, 82, 102, 112, 122, , , , 152, -18, -17, -10, , -10, , , , -179, -402, -255, -225, , , -94, , , , , , , , , , -98, , , , , , , , -268, -267, -223, , , , , , -213, -382, , , , , , , , , , , , , , , , , , , , , , , , , , , -382, -381, , -371, -361, , , , , , , -361, -531, , -530, , , , , , , , , , , , , , , -700, -700, -699, , , -698, -868, -867, , -1037, -1036, , -1206, , , , , , , , , , , , , , , , , , , , , , , , , , , , , -1204, -1203, -1192, , , , , , , , , , , , , , , , , , , , , , , -1183, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -1182, , -1182
                  ]
                }, 
{
                  label: 'LATE_ACCEPTANCE (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -199, -382, -477, -639, -1001, -1181, , , , , , -1538, -1513, , , , , -1257, , , , -1325, -1644, -1569, , , , , -1458, , , , , , , -1175, , , , -1965, -1814, , , , , , , , , , , , , , , , , , , , -1616, -1930, , , , , , , , , , , , , , , -1749, , , , , , , , , , , -1527, , , -1531, , , , , , , , , -2187, -2121, -1989, -1943, -1766, , -1753, , , -1679, -1655, -1595, , -2232, -1851, -2129, , -1864, -2033, , , , , -1601, , , , , , , , , , -1856, , , , , , , , , , , , , , , , , , , , , , , , , , -2207, , -2070, -2060, , , , -1836, -2417, -2053, , , , , , , , , , , , , , -1568, -2470, -2455, -2453, , , , , , , , , -1981, , , , , -1950, -1760, , -1755, -1713, , , -1669, -1664, -1654, -1640, -1605, , -1599, -1556, , , , -1551, -1534, , , , , -1530, , , -1480, , , -1457, -1442, -1434, , -1431, -1423, -1405, -1397, -1378, -1373, -1363, -1362, , , , -1355, -1345, -1335, -1306, , , -1302, -1301, -1299, -1292, -1278, , , -1270, , , -1268, -1241, -1240, , , -1238, , , , , -1229, , , -1228, , -1227, -1218, -1217, -1216, -1197, , -1196, , -1195, , , , -1194, -1193, , , , -1184, , , -1183, , , -1182, -1180, -1179, , , , , , , , , , , , , , , , , , , , , , , , , , , , , -1178, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -1178
                  ]
                }, 
{
                  label: 'GREAT_DELUGE',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -199, -382, -382, -363, -656, -639, -1183, -1181, , , , , , -1159, , , -1227, -1226, , -877, -697, -896, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -1737, -1733, -1497, -2041, , , , , , , , , , , , , , , , , , , , , , , , , , , , , -1824, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -1591, -1550, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -1640, -1444, , , , , , , , , , , , , , , , , -1683, , , , , , , , , , , , , , , , , , , , , , , , , , , -1623, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -1495, , -1362, -1329, , , -1787, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -1605, , , , , , , , , , , , , , , , , , , , , , , , , , , , , -1812, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -1617, -1787, , , , , , , , , , , , , -1731, -1555, , , -2044, -1702, -2641, -2120, -2071, -1743, -1723, -1458, -2240, -2065, -1969, -1950, -2237, -2038, -2024, -1893, -2366, -2203, -1995, -2368, -2365, -2187, -2185, -1932, -2392, -2082, -1971, -1487, -1432, -1408, -1407, -1397, -1396, -1386, -1346, -1345, -1306, -1305, -1271, , , -1271
                  ]
                }, 
{
                  label: 'VARIABLE_NEIGHBORHOOD_DESCENT',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , -220, , -172, , , -342, -341, -122, , , , , , , , , -122, , , , , , -292, -291, , , , , , , , , , , , , , -246, , , , -236, , -225, , , , , , , , , , , , , , , , , -395, , -229, -171, , , , , , , , , , , , , , , , , , -170, , , , -140, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -358, -357, -352, -310, , , , , , , , , , , , , , , , , , , -310, , -309, -269, , , , , , , , -487, -486, -481, -295, -261, , , , , , , , , , , , , , -261, , , , -265, -264, -201, , , , , , , , , , , , , -371, , , -540, , , , , , , , , , , -500, -489, , , , , , , , , -659, -492, -474, -434, , , , , , , , , , , , , , -433, -413, , , , , , , , , -415, -393, -382, , , , , -332, -321, , , , , , , , , , , , , , -491, -490, , , , , , , -490, -489, , -419, , , , , , -436, , -354, , , , , , , , , , , , , , , , , , , -356, -354, -344, -334, -313, -312, -302, -292, -282, -243, -232, -202, -191, -181, -351, -213, -212, -106, -106, -105, -95, -85, -84, -82, , , , -81, , -304, -251, -250, -419, , , -589, -588, -758, -757, -927, -926, -1149, -1095, -1170, -1146, -1103, -1010, , , , -1180, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -1179, -1179
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
                text: 'oled-bench-4c-21o-30ts-baking-maint best soft score statistic'
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
                    text: 'Best soft score'
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
  chart_bestScoreProblemStatisticChart2_69246.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart2_69246.resize();
});