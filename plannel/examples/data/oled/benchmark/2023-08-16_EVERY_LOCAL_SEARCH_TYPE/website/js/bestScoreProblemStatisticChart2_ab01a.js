
var chart_bestScoreProblemStatisticChart2_ab01a = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart2_ab01a'), {
    type: 'line',
    data: {
        labels: [
            5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 53, 54, 55, 57, 58, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 75, 76, 77, 79, 80, 81, 82, 83, 84, 86, 89, 90, 91, 92, 94, 96, 97, 98, 100, 102, 104, 106, 107, 108, 110, 114, 115, 116, 117, 118, 119, 120, 121, 122, 124, 125, 126, 129, 131, 132, 133, 136, 141, 142, 143, 144, 145, 147, 148, 149, 150, 151, 156, 163, 165, 166, 167, 173, 174, 175, 177, 181, 182, 184, 185, 186, 189, 193, 194, 195, 196, 197, 199, 202, 203, 206, 207, 212, 214, 215, 217, 224, 228, 231, 232, 234, 236, 237, 238, 239, 241, 244, 246, 247, 250, 251, 253, 259, 262, 265, 269, 274, 275, 288, 291, 294, 299, 301, 302, 304, 306, 309, 310, 311, 313, 314, 319, 321, 325, 328, 332, 337, 338, 340, 348, 356, 357, 362, 363, 373, 376, 378, 382, 388, 390, 393, 403, 413, 419, 443, 449, 481, 483, 488, 489, 495, 497, 510, 514, 517, 526, 535, 540, 541, 543, 544, 545, 546, 548, 550, 552, 554, 563, 564, 568, 574, 576, 578, 602, 610, 619, 624, 633, 634, 635, 636, 638, 650, 664, 665, 671, 672, 673, 679, 682, 691, 693, 697, 698, 699, 703, 709, 710, 728, 731, 735, 748, 750, 753, 755, 767, 775, 789, 804, 809, 816, 831, 855, 860, 865, 868, 876, 879, 884, 892, 900, 908, 915, 916, 926, 932, 940, 944, 955, 956, 961, 962, 977, 987, 992, 1016, 1024, 1030, 1033, 1069, 1074, 1077, 1090, 1097, 1114, 1116, 1126, 1129, 1133, 1134, 1136, 1144, 1155, 1156, 1161, 1170, 1180, 1184, 1185, 1190, 1195, 1198, 1209, 1210, 1234, 1237, 1257, 1285, 1304, 1314, 1335, 1344, 1359, 1364, 1367, 1374, 1375, 1393, 1397, 1401, 1402, 1414, 1419, 1420, 1421, 1425, 1427, 1428, 1430, 1431, 1433, 1435, 1439, 1442, 1443, 1447, 1453, 1454, 1463, 1473, 1493, 1497, 1541, 1542, 1546, 1547, 1551, 1561, 1573, 1583, 1592, 1595, 1600, 1601, 1616, 1667, 1679, 1691, 1716, 1737, 1772, 1790, 1793, 1859, 1860, 1863, 1881, 1900, 1914, 1915, 1917, 1918, 1919, 1951, 1956, 1987, 2028, 2034, 2035, 2044, 2046, 2073, 2138, 2152, 2164, 2191, 2228, 2241, 2251, 2277, 2309, 2333, 2346, 2360, 2374, 2439, 2452, 2465, 2577, 2578, 2603, 2605, 2607, 2618, 2799, 2836, 2881, 2892, 2903, 2921, 2982, 3299, 3403, 3417, 3432, 3462, 3595, 3612, 3627, 3674, 3690, 3767, 3787, 3789, 3791, 3794, 3797, 3798, 3827, 3856, 3885, 3932, 3946, 4114, 4147, 4198, 4216, 4287, 4338, 4346, 4441, 4492, 4509, 4576, 4639, 4651, 4664, 4676, 4689, 4862, 4892, 4918, 4920, 4923, 4926, 4929, 4932, 4974, 5030, 5068, 5117, 5133, 5245, 5246, 5281, 5299, 5336, 5449, 5555, 5591, 5611, 5612, 5614, 5775, 5789, 5790, 5937, 6001, 6021, 6022, 6159, 6174, 6245, 6272, 6274, 6277, 6278, 6279, 6292, 6312, 6337, 6351, 6388, 6407, 6432, 6444, 6581, 6622, 6726, 6789, 6790, 6874, 6878, 6884, 6907, 6926, 6953, 7009, 7041, 7069, 7074, 7087, 7088, 7091, 7100, 7110, 7145, 7229, 7309, 7352, 7415, 7431, 7483, 7484, 7533, 7534, 7535, 7536, 7541, 7542, 7543, 7623, 7763, 7867, 7879, 7880, 7882, 7891, 7905, 7957, 7995, 8040, 8093, 8167, 8168, 8169, 8301, 8368, 8386, 8499, 8537, 8555, 8603, 8621, 8639, 8644, 8652, 8680, 8688, 8691, 8703, 8725, 8809, 8829, 8846, 8848, 8851, 8882, 8884, 9083, 9105, 9107, 9116, 9119, 9121, 9257, 9319, 9474, 9479, 9483, 9485, 9501, 9518, 9529, 9562, 9604, 9606, 9682, 9689, 9729, 9760, 9761, 9776, 9782, 9868, 9877, 9881, 9914, 9932, 9933, 9938, 9945, 9947, 9948, 9949, 9975, 10019, 10068, 10148, 10187, 10294, 10300, 10371, 10372, 10554, 10562, 10595, 10683, 10694, 10812, 10831, 10864, 10891, 10894, 10896, 10897, 10910, 10919, 10922, 10981, 11128, 11218, 11219, 11220, 11221, 11274, 11284, 11446, 11449, 11572, 11598, 11600, 11632, 11643, 11646, 11659, 11672, 11902, 12177, 12253, 12255, 12309, 12497, 12502, 12507, 12523, 12539, 12608, 12622, 12630, 12690, 12814, 13087, 13117, 13131, 13186, 13307, 13434, 13440, 13492, 13805, 13967, 14619, 14708, 14744, 15044, 15064, 15084, 15090, 15112, 15118, 15121, 15288, 15455, 16225, 16910, 17059, 17060, 17074, 17138, 17182, 18152, 18180, 19692, 19699, 19700, 19718, 20250, 20472, 21881, 22464, 22875, 22876, 22877, 22879, 22880, 22883, 23832, 23850, 23853, 23867, 23871, 24037, 24201, 24374, 24550, 27440, 27462, 27469, 27511, 27553, 27559, 27567, 27570, 27612, 27619, 27674, 30785, 30810, 31678, 31697, 33439, 33740, 33745, 33769, 33773, 33777, 34945, 34963, 35163, 35387, 35408, 35429, 35450, 37602, 37635, 37642, 37650, 38135, 38139, 38652, 38716, 38726, 38783, 38841, 38842, 38850, 38858, 38886, 38894, 38902, 38911, 38974, 39036, 39107, 39175, 39244, 39315, 41051, 45280, 45300, 45304, 45324, 47555, 47581, 48513, 48570, 48594, 48596, 48621, 48647, 48905, 51350, 51376, 51654, 53139, 53163, 53398, 53419, 53634, 53656, 53673, 53889, 53912, 53929, 54144, 54168, 54184, 54201, 54419, 54444, 54460, 59166, 59247, 59258, 59339, 59427, 63442, 63460, 63704, 64024, 64070, 64084, 64170, 64261, 67368, 67397, 70176, 70195, 70445, 70473, 73549, 73567, 73585, 86960, 86979, 86997, 88065, 88071, 88105, 88137, 92565, 124903, 124915, 124916, 128505, 134874, 134881, 137816, 137824, 139388, 139389, 142851, 142904, 142905, 142906, 142907, 147383, 147406, 155760, 157996, 157997, 160359, 167064, 167865, 167866, 167915, 167916, 167917, 171152, 171154, 171225, 171261, 171319, 171328, 172926, 175065, 175074, 178366, 178367, 180753, 180754, 180755, 180756, 184797, 190972, 193081, 201992, 201993, 202614, 202945, 203305, 204035, 204908, 205025, 205042, 205160, 205280, 205281, 205290, 205299, 207295, 207298, 207299, 207392, 209237, 213615, 214119, 215482, 215787, 215788, 223905, 228007, 228039, 228068, 228106, 232603, 232643, 233149, 233150, 233698, 238312, 238314, 240990, 242049, 242083, 242092, 242554, 242563, 242605, 243013, 247076, 247814, 248462, 248559, 248573, 248613, 249076, 249117, 249158, 253470, 253956, 253957, 254731, 255368, 255369, 255696, 255697, 255698, 255699, 255704, 258378, 258379, 258382, 262239, 270074, 270076, 270077, 270078, 270079, 270082, 270085, 270087, 270091, 270095, 270098, 270101, 270102, 270105, 270114, 270115, 270131, 270142, 270151, 270165, 270168, 270169, 270170, 270176, 270177, 270182, 270195, 270199, 270200, 270203, 270207, 270210, 270220, 270227, 270250, 270251, 270268, 270272, 270292, 270301, 270309, 270335, 270362, 270396, 270415, 270420, 270625, 270652, 270692, 270732, 270815, 271084, 271296, 271427, 271428, 271619, 275645, 275646, 276050, 279611, 279631, 279633, 279641, 279644, 279645, 279651, 279664, 279668, 279675, 279676, 279685, 279688, 279691, 279704, 279705, 279721, 279722, 279742, 279743, 279745, 279753, 279802, 279834, 279867, 279883, 279900, 279912, 279985, 280000, 280030, 280043, 280104, 280215, 280320, 280339, 280439, 280473, 280487, 280506, 280515, 280611, 281565, 281570, 283519, 300000
        ],
        datasets: [
            {
                  label: 'HILL_CLIMBING (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -390, -560, -729, -729, -927, -929, -1091, -1071, -1064, -1055, -1389, -1380, -1151, , -1141, -1131, -1120, -1290, -1255, -1215, -1209, -1209, -1210, -1381, , -1199, -1199, -1369, -1359, -1343, -1310, -1452, -1574, -1562, -1732, -1561, -1543, , -1713, -1681, -1638, -1787, -1786, -1583, -1563, -1554, -1541, -1530, -1523, -1693, , , -1557, , , -1547, -1367, -1109, -1087, -1063, -1233, -1232, -1223, -1192, -1192, -1181, -1093, , -1092, , -1063, -966, -965, -775, -626, , -615, -550, , , , -405, -394, -382, -380, , -381, -343, -285, -279, -427, -407, -577, -575, -551, -558, -548, -343, -350, , , , , -329, -324, , , , -153, , , , , -134, -303, , -473, -471, , , -470, , -420, -423, , -413, , -399, , -398, -397, -567, , , -542, , , -532, -532, , -510, , , -467, , , , , -638, -628, , -585, -545, -535, , -512, -511, -501, -514, -317, -283, , , -282, -453, , -443, , -399, -390, , -208, -207, , , , , , , -178, -177, , , , -13, 74, , , 85, , , , 90, 124, , 158, , 159, , 160, , 184, 185, , , 199, , 209, , 229, 296, 321, 331, 376, , 389, , , , , 419, , , , 420, , , , , , 431, 432, , , 263, , , , , 304, 314, , , , , 324, 465, , , , , , 509, , 549, 559, , 569, , , 580, , , , , , , , , , 590, , 591, , , 601, , , , , , 610, , 611, , 624, , 647, , , , 649, 819, , , , , , 823, , 863, , 868, 878, , 888, , , , , , , , , , 898, 908, , 943, , , 966, , , , , 982, , , , , , , , , , , , , , , , , , , , , , , 1016, , , 1051, , , , , , , , , , , , , 1084, , , , , , , , , , , , , , 1085, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 1096, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 1106, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 1108, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 1108
                  ]
                }, 
{
                  label: 'TABU_SEARCH',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , , -2, , , , , , , , , , , , -172, , , , , , , , , , , , , , , , , , , , , , , , , , -172, , -162, , , , , , -151, , , , , , , , , , , , -151, , , -131, , , , , , , , , , , -349, , , , , , , , , , , , , , , , , , -349, , -338, , , , , , , -508, , , , , , , , , -328, , , , , -498, , , , , -458, , , , , , , -459, , -458, , -278, -248, , , , -208, , , , , , , , , , , , , , , , , -378, , , , , , -548, , -508, , , -497, , , , , , , , , , , , , , -436, , , -606, -605, , , , , , , , -391, , -381, , , -370, -541, , -360, , -325, , , , , , , , -325, , , , , , , , -265, , , -195, -184, , , , -404, -188, , , , , , , , -179, , , -349, , , -339, -328, , -152, , , -128, , , -298, , -132, -97, , , , , -97, -73, , -243, , -242, , -412, , -582, -372, , -171, 28, 44, 54, 69, , , , 70, , 94, , , 124, 144, , , 136, 147, , 246, 251, , 274, , 104, , , 104, , , , , 115, , , -55, 35, 75, , , 245, , , 275, , , 286, 291, 121, 221, 232, , 412, , 447, , 452, , 282, , , , 282, , , , , , , , , 392, , , , , , 427, , 657, 487, , 501, 501, , , , 741, , , 742, , 777, , , 812, 823, 833, 834, 874, 874, 914, , 915, , , , , 920, , 750, , , , , , 751, , 739, , , 751, 871, 701, 702, 882, , 893, , , 917, , 747, 748, 978, 998, 996, 998, 1139, , , , , , , 1144, 1184, , , , 1193, 1194, 1199, 1029, 1195, 1200, 1204, 1202, 1204, 1239, 1259, 1269, 1270, , , , , , 1101, 1141, 1151, 1181, 1221, 1231, 1246, 1426, 1256, 1279, 1359, , , 1599, 1614, 1623, 1453, , , , , , 1453, , , , , , , , 1283, 1114, 1115, 1319, 1329, , , 1321, 1329, 1331, , 1411, 1451, 1461, , , , , , , 1461, 1471, , 1301, , , , , , , , 1131, 1132, , 1302, 1313, 1323, , 1347, , 1348, 1358, , , , , , 1344, 1358, , , , , , , , , , 1359, , 1189, , 1190, , 1020, , , , , , , , , , 1200, , , , , , , , , , , , , , , 1220, 1231, , , 1241, , , , , 1242, , , , , 1243, , 1276, 1286, , , 1287, , , 1117, 1118, , , , , 948, 949, 778, , , , , 949, , 1129, , 1139, 1140, , 970, , , , , , , , , , , , , , , 994, , 1003, 1004, , 1005, , , 991, , 1156, , , , , , , , , , , , 1179, , , 1188, , , , , , , , , , 1018, , , , , , , , 1019, 1199, 1223, , , , , , , , 1223, , , , , , , , 1233, , , , 1234, , , 1065, , , 1105, , , , , , , , , 935, 935, , 936, , 937, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 938, 1107, , 1117, 1121, 1131, 1151, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 1151
                  ]
                }, 
{
                  label: 'LATE_ACCEPTANCE',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -172, -390, -560, -729, -720, -552, -724, -713, , , , -883, -864, -844, -1014, -1592, , -1298, -1292, -1284, , -1276, , , , , -1652, -1429, -1538, , , , , , -1479, , -1464, , -1660, -1659, , , , , , , , , , , , , , -1129, -1349, , , , -1262, -1712, -1803, , , , , , -2059, -2050, -2006, -1972, , , , -2366, -2365, -2219, -2027, , -2363, -2362, -2357, , , , , , , -2052, , , , -1786, , -1900, , , , , , , -2076, -2061, , , , , -1705, , , , , , , , -1430, , , , -1732, , , , , -1385, , -1239, -1409, , , , , -1793, -1937, , , , , -1887, -1803, -1784, -1692, -1731, , , -1459, -1439, -1351, , , -1892, , , , -2021, -1997, , -1862, -2032, , , , , , , , , , , , , , , , , -2137, , , , , , , -2108, , , , , , , , , -2721, , , , -2766, -2653, , , , , , , , , , , , , , , , , , , , , -2482, -2450, -2448, , , , , , , , -2194, , -1974, , , , , , -1950, -1712, -1532, -1628, , , , , , , , , , , -1527, -1459, -1449, , , , , , , , , , , , , , , , , -1534, , , , , , , , , , , , , , -1759, , , , , , -2509, , , , , , , -2113, , , , , , , , , , , -2392, -2388, -2261, , -2185, -2135, , , , , , , , , , , -2021, , , , , -1801, -1705, , , , , -1585, -1518, , -2610, -2585, -2580, , -2505, -2494, -2318, -2273, -2078, -2068, -2058, -2057, , , -2596, -2581, , -2576, -2376, -2298, , , -1856, , , -1823, -2035, -2023, , , -1792, , -1777, , -1726, -1659, , , , , -1548, , , , , -2422, -2420, -2418, -2380, , -2293, , , , , -2372, -2286, , -2239, , , , , , , , , -1752, , , , , , , , , , , , , -1745, -1728, -1643, -1642, -1608, -1828, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -834, -825, , , , , , , , , , , , , , , , , , , , , , , -717, -660, , , , -567, , , -540, -520, -508, -489, -369, -366, -299, , , -263, , -245, -177, -150, -147, -140, -125, -124, , , -107, , , , -88, , -83, , , -53, -52, -15, -5, 74, , , , 75, 127, 142, 153, , 154, 167, 211, , 257, , , , 294, , 297, 298, 302, 323, 324, 325, 343, 363, 373, , 392, , , 422, 431, , , 436, 452, 476, 480, 526, 536, 537, , , 545, 554, , 556, 562, 564, 566, , 568, 569, 603, 613, , 623, , , 625, 629, , 665, 687, , , , 705, 714, 715, , , , 720, , , , , 729, , 730, , , 741, , 755, 756, 757, 768, 781, 792, 793, 802, , , , 810, 811, 812, , 823, , , 830, , 831, 839, , 857, , 870, 881, 882, 890, 894, 895, 904, 915, 916, 926, 936, , 944, 945, , 955, , , , , 956, 957, 970, 971, , 978, 989, , 999, , , 1031, , , , 1032, 1033, , , 1035, , , , 1043, 1054, , , 1064, , , , 1065, 1072, 1084, , 1087, 1096, , 1097, 1098, , , , , 1099, 1106, 1107, 1116, 1117, , , , , , , 1118, 1119, 1129, , , , , 1130, 1141, , , , , , , , , , , , 1151, , , , , , , , , , , , , , , , , , , , , 1152, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 1153, , , , , , , , , 1164, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 1164
                  ]
                }, 
{
                  label: 'GREAT_DELUGE',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , -390, -390, -560, -720, -550, -724, , -722, -713, , , -883, -882, -864, -844, , -843, -1014, -1222, -1592, , , , -1292, , , -1284, -1276, , , , , , , , , -1652, -1429, -1538, , , , , , , , -1558, , -1545, -1715, -1528, , , , , , , , , , , , , , -1343, , , , , , , , , -1534, , , , , , -1793, -1783, , -1773, , , , , , , , , , , , , , , , , , -1959, -1951, , -2113, , -2117, -2289, -2118, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -1472, -1473, , , -1651, -1843, -1820, -1762, -1540, -1539, , , -2038, , -1885, , , , , , , , , -2344, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -1675, -1834, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -1698, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -1413, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -1986, -2220, -2211, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2238, -2078, -2022, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -1877, -1873, -1872, -1780, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -1907, -1837, -1827, -1817, -1816, -1811, -1771, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -3196, -2698, -2715, -1932, -2435, -2295, , , -2009, -1956, -1827, -2004, -1785, -1604, -1569, , , -2265, -1911, -1861, -2403, -2146, -2912, -2901, -2688, -2655, -2484, -2235, -2338, , , , , -1978, , , -2762, -2734, -2257, -2056, -2045, -2038, -2122, -2106, -2712, -2605, -2604, -2406, -2404, -2114, -2022, , , , , , , , , -2741, -2667, -2666, -2205, -2051, -2223, -2198, -2192, -2260, -2135, -2422, , , , , , , -2173, -2150, -2419, -2386, -2364, -2028, -1801, , , , , , -2406, -2326, -2205, -2121, -2010, , , , , , -1992, -3009, -3007, -2809, -2670, -2659, -2576, -2224, -2222, -2211, -2210, -2163, -2152, -1827, -890, -813, -803, -769, -768, -735, -734, -710, -676, -675, -630, -619, -605, -547, -537, -449, -448, -438, -437, -417, -415, -382, -381, -372, -338, -328, -293, -292, -257, -247, -227, -226, -171, -160, -159, -158, -149, -38, -28, -27, -26, -25, -1, 9, 10, 14, 24, 39, , , , 43, 53, 102, 105, 125, 186, 201, 211, 224, 258, 268, 309, 325, 336, 349, 359, 369, 394, 418, 427, 437, 447, 469, 479, 485, 495, 500, 510, 545, 556, 557, 567, 568, 569, 570, 590, 591, 649, 682, 692, 702, 712, 736, 760, 770, 781, 805, 809, 833, 843, 863, 874, 909, , 909
                  ]
                }, 
{
                  label: 'VARIABLE_NEIGHBORHOOD_DESCENT',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , , -2, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -172, , , , , , , , , , , , , , , , , -172, , , -171, , , , , , , , , , , , -151, , , , , , , -151, , , , -150, , , , , , , , , , , -120, , , , , , , , , , , , , , , , , , , , , , , , , , -290, , -110, -75, , , , , , , , , , , , , , , , , , , , , -75, -74, , , , , , , -34, , , , , , , , , , , , , , , , , , , , -204, , , , , -38, -14, 1, 11, 21, , , , , , , , , , , , , , , , , , , 61, 72, , , , , , , , , , , , , , , , , , -98, -97, 137, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 187, , 198, , , , , , , , , , , 248, , 258, 269, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 339, 350, , , , , , , , 350, 351, , 441, , , , , , , , , , , , , , , , 441, 442, 444, , , , , , , , , , , , , 274, 412, 425, 449, 484, 519, , , , , , , , , , , , , , , , , , 519, 529, 530, 531, 538, , 368, 492, 505, 529, 564, 588, 623, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 623, , , , , , , 453, , , , , , , , , , , , , , , 463, 473, , , 474, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 304, , , , , , , , 134, 135, 349, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 369, , 379, 389, , , , , , , 171, 172, 177, 219, 439, , , , 440, 490, , 530, 551, , , , , , , , , , , , 381, 596, 611, , , , , , , , 661, , 682, , , , , 464, 465, 470, 512, , , 343, , , , , , , , 343, 344, 337, , 338, 351, 358, 365, 395, 178, 359, 393, 398, 403, 407, 413, 243, 448, 457, 462, 463, 466, 526, 547, , 377, 378, 548, 557, 592, 584, 585, 593, 603, 613, 623, 633, 463, 653, 684, 693, 523, 524, 354, 544, 580, 590, 444, 619, 620, 659, 824, 825, 849, 889, 899, 909, 919, 929, 939, 949, , 941, 942, 1029, 1040, 870, 871, , , , , , , , 701, 702, 916, 996, 1017, 1027, 1037, 1057, 1066, 1077, 1117, 1126, 1137, 1197, 1205, 1206, 1217, 1297, 1305, 1317, 1147, 1367, 1402, 1412, 1422, 1418, 1419, 1423, 1253, 1483, 1518, 1528, 1538, 1368, 1369, 1365, 1366, 1380, 1389, 1419, 1430, 1440, 1435, 1436, 1437, 1267, 1268, 1472, 1482, 1542, , , , , , , 1372, 1373, , , , , , , , 1433, 1443, , , , , , , , , , , , , 1273, 1274, 1478, 1487, , 1317, 1319, , , , , , , , , , , , , , , , 1149, 1389, 1424, 1434, 1444, 1442, 1477, 1487, , , , , , , , , , , , 1546, 1557, 1567, 1568, 1398, 1399, , , , , , , , 1229, 1231, 1240, 1274, 1275, , , , , , 1105, 1106, 1276, 1284, 1319, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 1149, 1150, 1151, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 983, 983
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
                text: 'oled-bench-4c-21o-60ts-baking-maint best soft score statistic'
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
                        stepSize: 1000
                        ,
                        callback: function(value, index) {
                            return humanizeTime(value);
                        }
                },
                suggestedMin: 0,
                suggestedMax: 300000,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score'
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
  chart_bestScoreProblemStatisticChart2_ab01a.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart2_ab01a.resize();
});
