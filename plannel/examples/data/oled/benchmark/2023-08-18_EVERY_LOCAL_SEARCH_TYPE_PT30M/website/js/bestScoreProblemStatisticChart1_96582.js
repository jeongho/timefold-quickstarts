
var chart_bestScoreProblemStatisticChart1_96582 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_96582'), {
    type: 'line',
    data: {
        labels: [
            3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 47, 48, 49, 50, 51, 52, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 74, 75, 76, 80, 86, 87, 88, 89, 90, 91, 92, 93, 94, 96, 98, 99, 100, 101, 102, 103, 104, 105, 106, 111, 114, 117, 121, 128, 129, 131, 135, 136, 139, 141, 143, 145, 146, 147, 150, 152, 155, 157, 160, 161, 162, 165, 167, 168, 169, 170, 175, 207, 208, 209, 210, 213, 214, 216, 218, 221, 222, 226, 228, 229, 230, 232, 233, 234, 235, 237, 238, 246, 250, 257, 261, 271, 274, 278, 283, 284, 290, 296, 297, 300, 303, 304, 309, 313, 317, 321, 322, 326, 329, 343, 352, 357, 373, 378, 382, 386, 393, 395, 396, 402, 404, 425, 429, 444, 471, 483, 493, 497, 500, 505, 510, 516, 521, 533, 547, 554, 558, 559, 568, 575, 576, 581, 602, 603, 619, 642, 653, 654, 663, 666, 671, 672, 674, 689, 690, 698, 727, 731, 738, 740, 741, 743, 746, 747, 768, 774, 786, 809, 810, 816, 850, 882, 900, 943, 983, 988, 1010, 1020, 1026, 1039, 1041, 1042, 1071, 1073, 1076, 1081, 1090, 1120, 1125, 1130, 1139, 1159, 1198, 1213, 1215, 1236, 1249, 1253, 1256, 1267, 1287, 1297, 1352, 1354, 1401, 1405, 1415, 1421, 1444, 1448, 1505, 1598, 1603, 1625, 1646, 1648, 1655, 1683, 1721, 1724, 1741, 1776, 1781, 1786, 1788, 1791, 1836, 1849, 1854, 1876, 1878, 1896, 1910, 1935, 1967, 1986, 1991, 1998, 2039, 2055, 2089, 2100, 2131, 2134, 2146, 2148, 2149, 2175, 2228, 2244, 2261, 2269, 2290, 2293, 2323, 2495, 2522, 2575, 2604, 2610, 2615, 2670, 2672, 2673, 2726, 2741, 2758, 2771, 2816, 2835, 2858, 2888, 2930, 2944, 2967, 2968, 2973, 2974, 3068, 3096, 3100, 3132, 3160, 3188, 3215, 3304, 3308, 3324, 3424, 3498, 3522, 3524, 3542, 3587, 3594, 3633, 3706, 3717, 3718, 3759, 3765, 3787, 3819, 3850, 3866, 3898, 3932, 4003, 4021, 4087, 4128, 4144, 4190, 4206, 4210, 4211, 4241, 4247, 4256, 4346, 4400, 4518, 4538, 4653, 4670, 4688, 4714, 4738, 4784, 4802, 4858, 4866, 4951, 4977, 5086, 5087, 5122, 5248, 5268, 5307, 5329, 5432, 5562, 5616, 5644, 5710, 5725, 5759, 5822, 5840, 5841, 5889, 5936, 6044, 6064, 6122, 6183, 6318, 6590, 6793, 6876, 6912, 6917, 6998, 7057, 7085, 7238, 7299, 7317, 7321, 7448, 7454, 7557, 7600, 7630, 7656, 7688, 7715, 7756, 7768, 7799, 7836, 7862, 8194, 8238, 8244, 8361, 8387, 8395, 8423, 8561, 8583, 8605, 8711, 8734, 8915, 8970, 9094, 9198, 9249, 10065, 10087, 10093, 10165, 10226, 10365, 10542, 10765, 10786, 10833, 11063, 11065, 11066, 11068, 11254, 11319, 11367, 11634, 12979, 13033, 13037, 13109, 13730, 13807, 13908, 13922, 14101, 14319, 14469, 14503, 14530, 14556, 14673, 14836, 15231, 15242, 15426, 16015, 16136, 16908, 16935, 17199, 17280, 18519, 18545, 18951, 19079, 19486, 20315, 20415, 21247, 21269, 21497, 21502, 21503, 21631, 22481, 24337, 24472, 24938, 25649, 25706, 25836, 26090, 26103, 26354, 28154, 28168, 29474, 29854, 30140, 30215, 30772, 31156, 31708, 31974, 33110, 33120, 35464, 35664, 38629, 38716, 39924, 39985, 40603, 41843, 42171, 42175, 42681, 43480, 43608, 45532, 45923, 48240, 48903, 48983, 52042, 54181, 54537, 56685, 56971, 58771, 60610, 61716, 62855, 62868, 63662, 64415, 66339, 68658, 68814, 70809, 70810, 71219, 71362, 71780, 72626, 73555, 73558, 73560, 75132, 83560, 86167, 89223, 91878, 92326, 92776, 92952, 102143, 112703, 112718, 115990, 116916, 117823, 129172, 129367, 150102, 160751, 160767, 173134, 174348, 177423, 177989, 190315, 190658, 191481, 192827, 200563, 202874, 205842, 205843, 205845, 205848, 205850, 208385, 218192, 218193, 226345, 231603, 231605, 236090, 236092, 236094, 236095, 249439, 250240, 253974, 254247, 262117, 265172, 268068, 268328, 268830, 277454, 278571, 279558, 281259, 287284, 287690, 293111, 295902, 304553, 305731, 305761, 309594, 309611, 314561, 320532, 323777, 330385, 330441, 331593, 333911, 341897, 344521, 345795, 345796, 358751, 358752, 367632, 369466, 375717, 375820, 381284, 381652, 391726, 391733, 391734, 400195, 406336, 408501, 422967, 423759, 424610, 424638, 1009017, 1800000
        ],
        datasets: [
            {
                  label: 'HILL_CLIMBING',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -170, -165, -162, -157, -152, -147, -141, -138, -134, -133, -131, -127, -125, -124, -120, -119, , -119, -117, -112, -111, -110, -109, -107, -105, -104, -103, -99, -98, -96, -95, -94, -94, -93, -92, -92, -91, , , -91, -90, , , , , -90, -89, -89, -88, -87, , , -86, -86, -85, -84, , , , , , , , , , , , , -84, -83, , -83, -82, -81, -80, -79, , , , , -79, -78, , -77, -77, , , -76, -76, -75, , , , , , , , , -75, -74, , -74, -73, , , , -73, , , , -72, , , -71, , , , , -71, -70, , , -69, , -69, -68, , -68, , , -67, , , -67, , , -66, -66, , -65, , , , , , , -65, , , -64, , , , , , , , , , , , , , , , -64, -63, -63, , -62, , , , -62, -61, , , , , , , , , , , , , , , -61, , , , -60, , , , , , , , , , , , , -60, , , -59, -58, , , , , , , , , , -58, -57, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -57, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -56, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -56
                  ]
                }, 
{
                  label: 'TABU_SEARCH',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -175, , , , , , , -174, , , , , , , -173, -172, , -171, , , , , -171, , , -170, , , , , , , , -170, , , , , -169, , -169, , , , , , , -168, , , -168, , , , , -167, , , -167, , , , , -166, , , -166, , , , , , , , -165, , , , , , , , -165, , , , -164, -164, -163, , , -163, , -162, , , , , , -161, , -161, , -160, -160, , , , -159, , , , , -159, , , , -158, , -157, , , -157, , -156, , , , , , , , , , , , -156, -155, -155, -154, , , , -154, , , , , -153, -152, -152, , , , -151, -151, -150, -150, -149, -148, , , , , , , , -148, -147, , , -147, -146, , , , -146, -145, -145, -144, , , -144, , , , -143, -142, -142, , -141, -141, , -140, , -139, , -138, , , , -138, , -137, -137, , , , , , -136, -135, -134, , , , , , , , , , -134, , , , -133, , -133, , , -132, -132, -131, , -131, -130, -130, -129, , , , -129, , , -128, -127, -126, , , , , , , , -126, , , , -125, , , -125, -124, , , -124, -123, , , -123, , -122, , , , , , , -122, , , , , -121, -121, -120, -120, , -119, -119, , , -118, -118, -117, , -117, , -116, , -116, -115, -115, , -114, , , -114, , , -113, -112, , -112, , , -111, -111, , , , , -110, , , -110, -109, -108, -108, -107, , -107, -106, , -106, , , -105, -105, , -104, , , -104, -103, , , -103, -102, -102, , -101, -101, -100, , -100, -99, , , , , -99, , -98, , , , , -98, -97, -97, -96, , -96, -95, , , , -95, , , , -94, -93, , , -93, -92, -92, -91, , , -91, -90, -90, , , -89, -88, -88, -87, -87, -86, -86, , -85, , -84, -84, -83, -83, -82, , , -82, , , -81, , , , -81, -80, -80, , -79, , -79, -78, , , -77, -77, , , , -76, , -76, -75, , -75, -74, -73, -73, -72, -72, , , -71, -71, -70, -69, , , , , , , -68, -68, -67, , , , -67, -66, -66, -65, , , , , -65, , -64, -63, , -63, , , , , , , , -62, -62, , , , , , , , , , , , , , -61, , , , , -60, , , , , , , , , , , , , , , , , , , , , , , , , , , -60, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -59, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -59
                  ]
                }, 
{
                  label: 'LATE_ACCEPTANCE (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , -170, -169, -164, -161, -157, -154, -150, -149, -148, -146, -142, -139, -138, -136, -135, -134, -133, , , , , , , -133, , -131, -130, -127, -127, -126, -125, -124, -124, -121, -120, -119, , -116, -116, -115, -115, -114, , , -113, , -112, -111, -111, , , , , , -110, , , , , , -110, , , , , -109, -108, , , , , , , , , , , , , , -108, , , -107, -107, -106, -105, , , , , -105, -104, , -103, -102, , , , , , , , , , , , -102, , -101, , -101, -100, -98, , , , , , , , , , , , , , -98, , -97, -96, , -96, , , , -95, , , , , , -94, , , -94, , , -93, -92, , , , -92, -91, , , , , , , , , , , , -91, , -89, , , , , , , -89, -88, -87, , , , , -87, -86, -86, -85, , , , , , , , , -85, , -84, , , , , -83, -83, -81, , , , , , , -80, , , , , -80, -79, , , , , , -79, -78, , , , -78, , -77, , -77, , , , , -76, , , , , -76, -74, -74, , , , , , , , , -73, -73, -72, , -72, , -71, , , , -71, -70, , , , , , , -70, , , , , , -69, -69, -68, -67, , , -67, , , -66, , , , , , , , -66, -65, , , , , , -65, , -64, , , , -64, , -63, -63, , , -62, , , , , , , , , -62, , -61, , , , , , , , , , -61, , , -60, , -60, -59, , , -59, , , -58, , , -58, -57, , , , , , , , -57, , , , -56, , , , , , , , -56, -55, , , , , , , , , -55, -54, , , , , , , -54, -53, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -53
                  ]
                }, 
{
                  label: 'GREAT_DELUGE',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -174, -169, -166, -162, -156, -153, -149, -148, -145, -144, -140, -138, -136, -134, -133, -133, , , , , , , , , , , , -130, -128, -126, -125, -125, , -124, , -124, -123, , , , -123, , , , -120, , -120, -118, -117, , , , -117, -114, , , , -113, -113, -112, -111, -110, , -110, -108, -107, -106, , , , , , , , , -106, -105, -104, -104, -102, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -102, , , , , , , , -100, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -100, -98, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -97, -96, -95, -95, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -94, -93, -93, , , , , , , , , , , , , , , , , , , , , -92, -92, -91, -91, -90, -90, -89, -88, -87, -87, -86, -86, -85, -85, -84, -84, -83, -82, -82, -81, -80, -79, -79, -78, -78, -77, -77, -76, -76, -75, -75, -74, -73, -73, -72, -72, -71, -71, -69, -69, -68, -68, -67, -66, , , , -66, -65, -65, -64, -64, -63, -63, -62, -62, -61, -61, -60, -60, -59, -59, -58, -58, -57, -57, -56, -56, -55, -55, -54, -54, -53, , , , -53
                  ]
                }, 
{
                  label: 'VARIABLE_NEIGHBORHOOD_DESCENT',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -175, , , , , , , , , , , , , -174, , , -174, , , , , , , , , , , , , , , , , , -173, , , , -173, , , , , , , -172, , , , , -172, , , , , , , , , , -171, , , , , , -171, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -170, , , , -170, , , , , , , -169, , , , , -169, , , , -168, , , , -168, , , , , , , , , , , -167, , , , , , , , , , -166, , , -166, , , , , , , -165, , -165, , , , , , , -164, , , , , , , , , , , , , , , , , , , , -163, , , , -163, , , , , , , , , , , , -162, , -162, , , , , , , , , -161, , -161, , , , , , , , , -160, -160, , , , , -159, , , , , , -159, , , , , , , , , , , , , -158, -158, , , , -157, -157, , -156, , -156, , , , -155, -155, , , , , , -154, -154, , , , -153, , -153, , -152, , , , , -152, , , -151, -151, , , , , , -150, , , -150, , , , , -149, , , , , , , , , , , , , -149, , , , , , -148, -148, , , , -147, , -147, , -146, -146, , , , , , , , , , , , , , , , , -145, , , , , , , , , -145, , , , , , , -144, , , , , -144, , -143, -143, , , , , , , -142, , , -142, , , , -141, -140, -140, , , , , , , , , -139, -139, , , , -138, -138, , , , , , , , -137, , -137, , , , , , -136, -136, , -135, -135, , -134, -134, , , , , -133, , -133, , , -132, -132, , , -131, -131, -130, , -130, , , -129, , , , , , , -128, -128, , , , , -127, -127, , , , , , , , -126, -125, -125, , , , , -124, -124, -123, -123, , -122, , , -122, , -121, -121, -120, -119, -119, -118, -118, , , -117, -117, -116, -116, -115, -114, -114, -113, -113, -112, -112, -111, -111, , -110, -110, -109, -108, , -108, -107, -107, -106, -105, -105, -104, -104, -103, -103, -102, -102, -101, -101, -100, -100, -99, -99, -98, -98, -97, -97, -96, -95, -95, -94, , -93, -93, -92, -92, -91, -90, -90, -89, -88, -87, -86, -86, -85, -84, -83, -82, -82, -81, -81, -80, -79, -79, -78, -78, -77, -77, -76, -76, , , , -75, -74, -73, -72, -71, -71, -70, -70, -69, -68, -68, -67, -66, -66, -65, -65, -64, -63, -63, -62, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -61, -61, , , , , , , , , , , , , , , , , , , , , , , , , , , , -60, -60, -59, -59
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
                suggestedMax: 1800000,
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
  chart_bestScoreProblemStatisticChart1_96582.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_96582.resize();
});
