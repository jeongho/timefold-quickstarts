
var chart_bestScoreProblemStatisticChart1_3a237 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_3a237'), {
    type: 'line',
    data: {
        labels: [
            4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 77, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 139, 140, 141, 142, 143, 144, 145, 146, 148, 149, 150, 153, 154, 155, 156, 158, 160, 162, 164, 165, 166, 168, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 197, 201, 203, 204, 205, 206, 207, 208, 209, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 225, 226, 228, 230, 231, 232, 233, 237, 238, 239, 240, 242, 243, 244, 245, 246, 247, 248, 249, 251, 253, 255, 256, 257, 258, 261, 263, 264, 265, 266, 267, 270, 271, 273, 274, 275, 276, 277, 287, 288, 295, 298, 299, 300, 305, 306, 308, 310, 316, 319, 320, 321, 324, 329, 331, 332, 334, 335, 337, 338, 340, 343, 349, 351, 352, 354, 358, 362, 364, 365, 371, 376, 379, 380, 382, 384, 386, 387, 388, 389, 400, 403, 419, 421, 423, 425, 428, 434, 437, 440, 443, 451, 452, 453, 459, 460, 461, 462, 475, 476, 479, 480, 482, 483, 485, 486, 488, 489, 495, 502, 504, 506, 508, 513, 515, 518, 535, 548, 550, 552, 554, 555, 558, 559, 560, 561, 563, 564, 566, 568, 570, 571, 572, 573, 582, 587, 588, 589, 590, 594, 598, 607, 614, 615, 617, 619, 620, 621, 630, 631, 635, 638, 649, 651, 652, 653, 656, 664, 672, 676, 680, 682, 683, 689, 704, 711, 716, 724, 728, 730, 735, 744, 753, 755, 756, 763, 764, 769, 771, 772, 778, 782, 783, 786, 787, 789, 791, 793, 803, 804, 806, 812, 813, 816, 817, 818, 828, 836, 837, 841, 845, 850, 851, 859, 861, 862, 863, 873, 878, 879, 881, 883, 884, 893, 895, 900, 901, 908, 909, 910, 914, 916, 917, 920, 927, 929, 941, 945, 949, 951, 966, 968, 975, 981, 1012, 1014, 1018, 1024, 1027, 1033, 1040, 1046, 1048, 1058, 1059, 1061, 1064, 1069, 1075, 1111, 1116, 1117, 1119, 1120, 1121, 1122, 1138, 1147, 1149, 1173, 1184, 1185, 1189, 1197, 1216, 1217, 1218, 1223, 1237, 1238, 1241, 1246, 1254, 1259, 1262, 1270, 1275, 1280, 1285, 1309, 1317, 1320, 1325, 1328, 1333, 1341, 1355, 1367, 1368, 1370, 1371, 1380, 1382, 1385, 1396, 1412, 1418, 1435, 1441, 1454, 1459, 1461, 1471, 1478, 1486, 1491, 1496, 1510, 1517, 1518, 1527, 1545, 1546, 1550, 1556, 1557, 1567, 1572, 1573, 1574, 1579, 1591, 1597, 1599, 1601, 1605, 1636, 1659, 1667, 1673, 1674, 1676, 1685, 1691, 1701, 1704, 1710, 1716, 1733, 1755, 1758, 1765, 1790, 1816, 1830, 1855, 1890, 1909, 1916, 1927, 1930, 1938, 1952, 2022, 2024, 2029, 2034, 2037, 2041, 2051, 2058, 2065, 2068, 2079, 2115, 2121, 2122, 2134, 2140, 2141, 2144, 2152, 2156, 2163, 2165, 2207, 2225, 2234, 2235, 2239, 2241, 2247, 2250, 2252, 2270, 2296, 2300, 2310, 2318, 2325, 2326, 2332, 2360, 2363, 2367, 2418, 2438, 2452, 2460, 2463, 2469, 2484, 2521, 2567, 2625, 2628, 2638, 2642, 2646, 2648, 2661, 2669, 2672, 2675, 2677, 2702, 2726, 2734, 2742, 2776, 2800, 2818, 2826, 2842, 2860, 2868, 2872, 2877, 2878, 2896, 2932, 2934, 2943, 2950, 2958, 2977, 3001, 3010, 3029, 3045, 3072, 3081, 3083, 3100, 3121, 3142, 3150, 3153, 3156, 3162, 3187, 3195, 3203, 3212, 3260, 3367, 3373, 3391, 3410, 3416, 3466, 3474, 3503, 3512, 3513, 3519, 3528, 3556, 3572, 3583, 3610, 3629, 3635, 3639, 3642, 3683, 3691, 3693, 3694, 3700, 3701, 3747, 3764, 3783, 3791, 3838, 3846, 3856, 3874, 3914, 3921, 3930, 3939, 4030, 4035, 4055, 4073, 4104, 4106, 4125, 4136, 4146, 4151, 4155, 4159, 4167, 4194, 4196, 4200, 4204, 4355, 4356, 4365, 4369, 4386, 4396, 4400, 4406, 4444, 4460, 4515, 4536, 4575, 4632, 4642, 4665, 4682, 4697, 4704, 4708, 4719, 4738, 4743, 4756, 4761, 4771, 4782, 4799, 4828, 4843, 4921, 4940, 4944, 4948, 4988, 5011, 5119, 5129, 5140, 5159, 5176, 5187, 5222, 5258, 5353, 5376, 5388, 5433, 5444, 5459, 5465, 5467, 5481, 5489, 5522, 5577, 5608, 5673, 5738, 5749, 5755, 5773, 5807, 5810, 5818, 5829, 5932, 5944, 5967, 5990, 6029, 6049, 6065, 6089, 6136, 6171, 6181, 6218, 6231, 6244, 6272, 6284, 6426, 6466, 6470, 6471, 6472, 6474, 6475, 6476, 6478, 6509, 6526, 6547, 6562, 6655, 6667, 6719, 6721, 6732, 6743, 6755, 6767, 6779, 6804, 6867, 6919, 6971, 6999, 7090, 7117, 7129, 7141, 7149, 7163, 7166, 7189, 7215, 7268, 7301, 7322, 7351, 7402, 7415, 7500, 7504, 7535, 7549, 7563, 7577, 7642, 7720, 7721, 7764, 7782, 7851, 7877, 7891, 7947, 7967, 8093, 8108, 8122, 8127, 8132, 8133, 8135, 8148, 8174, 8201, 8204, 8227, 8444, 8498, 8570, 8594, 8600, 8614, 8705, 8768, 8793, 8796, 8847, 9119, 9188, 9225, 9259, 9264, 9289, 9339, 9382, 9515, 9519, 9526, 9529, 9542, 9619, 9634, 9650, 9693, 9727, 9813, 9899, 10001, 10033, 10084, 10167, 10211, 10225, 10340, 10355, 10465, 10467, 10612, 10671, 10685, 10759, 10775, 10967, 11015, 11088, 11105, 11212, 11289, 11335, 11365, 11391, 11401, 11424, 11563, 11593, 11688, 11734, 11749, 11828, 11929, 11940, 11953, 11981, 12044, 12245, 12295, 12338, 12386, 12403, 12445, 12650, 12793, 12853, 12884, 12900, 12901, 12915, 12932, 13069, 13135, 13143, 13204, 13318, 13325, 13471, 13611, 13627, 13691, 13738, 13753, 13787, 13802, 13888, 13972, 13989, 14030, 14182, 14200, 14379, 14394, 14774, 14807, 15099, 15167, 15202, 15219, 15366, 15416, 15477, 15544, 15559, 15575, 15655, 15689, 15776, 15809, 15825, 15841, 15921, 16054, 16069, 16297, 16329, 16546, 16580, 16699, 16772, 16914, 16920, 16989, 16990, 17192, 17226, 17260, 17723, 17915, 18120, 18139, 18166, 18173, 18209, 18578, 18659, 18716, 18733, 18855, 19051, 19123, 19220, 19355, 19408, 19873, 19890, 19906, 19958, 19975, 20063, 20215, 20221, 20274, 20283, 20587, 20626, 20796, 20840, 20865, 20905, 20938, 20989, 21319, 21476, 21564, 21581, 21584, 21687, 21703, 21741, 21827, 21844, 22097, 22221, 22239, 22345, 22380, 22513, 22529, 22794, 23105, 23128, 23139, 23384, 23420, 23475, 23567, 23572, 23667, 24136, 24226, 24298, 24316, 24370, 24646, 25274, 25548, 25701, 25776, 25855, 26068, 26477, 26585, 26743, 26893, 26914, 26935, 27304, 27361, 27746, 27763, 27848, 27993, 28087, 28146, 28225, 28777, 28987, 29026, 29148, 29227, 29349, 29864, 29985, 30160, 30199, 30590, 30629, 30650, 30701, 31166, 31227, 31670, 31736, 32071, 32113, 32237, 32256, 32550, 32731, 33130, 33371, 34751, 34772, 36127, 36678, 38739, 38855, 39074, 39177, 39477, 39984, 42414, 42484, 43526, 43644, 43955, 44165, 44286, 44829, 44834, 45617, 49496, 49567, 50515, 50730, 50797, 54437, 54672, 55210, 55222, 59214, 60454, 63981, 64113, 64718, 64981, 66185, 66420, 67639, 67662, 67683, 67920, 69221, 69259, 70584, 70589, 71918, 72194, 72336, 72355, 74266, 74791, 75793, 76876, 77272, 78671, 79388, 79593, 80329, 80869, 83826, 83846, 84590, 84688, 86188, 86283, 87825, 88154, 91242, 91359, 92150, 92315, 98898, 105574, 105905, 109326, 109490, 111257, 111443, 113202, 113549, 115378, 116212, 117295, 117298, 117299, 117308, 119834, 120069, 121018, 121723, 123590, 123603, 126469, 127204, 130099, 130351, 133441, 133448, 134077, 134703, 134704, 135260, 135290, 136297, 136349, 137111, 137113, 138417, 138421, 138422, 138423, 138424, 138426, 138427, 138452, 143047, 143052, 143053, 144382, 144402, 144844, 144845, 144847, 144848, 144849, 144850, 144852, 144861, 146460, 148927, 149675, 151716, 151854, 152398, 152399, 153757, 154140, 154141, 154142, 156015, 158698, 158699, 158700, 159369, 159692, 159802, 160764, 160817, 160818, 161663, 162750, 162751, 162916, 162947, 162959, 163730, 165731, 165799, 165800, 166642, 166954, 168424, 168556, 168903, 168904, 170244, 170315, 170597, 171080, 171665, 171899, 172289, 172336, 172518, 173621, 173628, 174498, 174916, 175504, 176469, 176515, 176813, 176881, 177258, 177971, 178217, 178218, 178953, 180707, 180708, 180952, 181053, 181900, 182722, 183060, 183387, 183924, 184610, 184611, 185674, 186846, 187383, 187536, 187872, 188064, 188923, 189148, 191275, 191398, 191399, 191687, 191783, 191900, 193694, 194195, 194429, 194807, 194834, 194835, 194868, 196533, 197136, 198192, 198193, 198194, 198197, 199692, 200632, 201092, 201093, 201837, 201951, 202980, 203076, 204304, 204361, 204429, 204852, 205462, 205645, 205843, 206023, 207934, 207963, 207966, 209054, 209195, 209579, 210531, 211090, 212018, 212112, 213295, 213478, 214636, 215728, 216466, 216481, 217546, 217612, 217666, 218302, 218730, 218935, 219532, 220917, 220919, 222072, 222207, 223179, 223369, 224334, 224424, 225054, 225336, 225531, 227368, 227650, 228042, 230221, 230332, 231753, 231792, 231906, 232099, 233202, 233374, 233405, 233663, 234666, 234934, 236133, 236140, 236141, 236728, 239198, 239517, 240923, 241381, 244128, 244311, 245666, 245856, 247282, 247705, 248744, 248747, 249092, 249524, 250725, 250918, 251350, 251513, 252333, 252409, 254406, 254415, 258459, 258894, 258895, 259392, 260071, 260368, 261534, 262271, 263984, 264391, 266397, 266537, 279047, 280014, 283923, 285218, 285406, 285672, 287042, 287066, 295357, 295379, 299562, 300154, 301585, 301674, 308721, 309395, 317978, 318015, 320925, 320974, 332554, 333834, 338227, 338243, 339741, 339810, 347267, 354761, 355284, 365863, 366587, 387992, 388270, 406776, 407030, 410154, 411387, 427045, 428366, 433119, 433630, 448052, 448604, 456645, 456872, 458511, 460182, 465901, 467556, 467872, 482929, 483240, 494951, 494980, 500087, 500536, 500555, 505712, 505756, 519587, 520521, 520531, 520886, 522661, 522702, 536964, 539466, 543114, 543342, 552611, 553116, 555004, 555620, 576473, 577031, 582813, 585403, 593185, 593966, 599821, 600000
        ],
        datasets: [
            {
                  label: 'HILL_CLIMBING',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -597, -594, -590, -586, -584, -580, -575, -573, -570, -565, -562, -560, -557, -553, -549, -544, -541, -536, -535, -531, -528, -526, -522, -521, -516, -512, -510, -507, -505, -504, -503, -501, -498, -496, -495, -493, -490, -488, -488, -485, -481, , -481, -478, -477, -476, -475, -473, -471, -468, -467, , , -467, -466, -466, -465, -462, -461, -458, -457, -455, -454, -453, -452, -451, -450, -450, -448, , , -448, -447, -445, -444, -443, -441, , -441, -440, , -439, -437, -436, -435, -433, -431, -431, -430, -430, -428, -428, -426, , , -426, -424, -423, , -423, -422, -422, -421, -421, -420, , , -420, -418, -417, -417, , -415, -414, -414, -412, , -412, -411, , -411, -409, -408, -408, -406, -405, -405, -404, -401, -400, , -400, -399, , -397, -396, -393, , -392, , -392, -391, -390, -389, , , , , -389, -388, -387, -387, -386, , , -386, -385, , , -385, -384, -383, , , , , , , -383, -382, -382, , -381, -381, -380, , , , , -380, -379, , , -377, , , , , , , -377, -375, -375, -374, , -374, , -372, -372, -371, -371, -370, , -370, , -369, , , -369, , , -368, -368, , -367, , , -367, -365, , -364, , -364, , -363, -363, , , -362, , , , , , , -362, -361, -360, , , -360, -359, -358, -357, -357, -356, , -356, -355, , -355, -353, , -352, , -352, -351, , -351, , , -350, , , , , -350, -349, , , , , , , -349, -348, , , -348, , -347, , , , , , , -347, -346, -346, -345, -344, , , , -343, , , , , -343, -342, -341, , , , , , , -341, -340, -339, -339, , -338, , , , , , , , , , , , , , , -338, -337, -337, -336, -335, -334, , -334, -333, , , , , -333, -332, -332, , -331, , , , -331, -330, , , , , , , , , , , , , , , , , -330, -329, , , , -329, -328, , , , -328, -327, -326, -326, -325, -325, -324, -323, , , , -323, -322, , , , , , , , , , -322, -321, , , , , -321, , -320, -320, , -319, , , , , , , , -319, -318, , , -318, -317, , -317, -316, , , , , , , , , , -316, -315, , , , , -315, -314, , , , , , , , -314, , -313, , -313, , -312, , , -312, -311, , , , , -311, , , -310, , , , , , -310, -309, , , , -309, , , , , -308, , , , , , , , , , , , , , , , , -308, -307, , , , , , , -307, , -306, , , , , , , , , , , -306, -305, , , -305, , -304, , , , , , , , , , , , , , -304, -303, , , , , , , -303, , , , , , -302, , , , , -302, , -301, -300, , , , , , -300, , , , , -299, -299, -298, , -297, , -297, , -296, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -296, , , , , , , -295, , , , , , -294, , , , , , , , , , , , , , , , , , -294, , -293, , , , , , , , , , , , , , , , , -293, -292, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -292, , -291, -291, -290, , , , , , , , , , , , , , , , , , , , , , , , , , , -290, , , , , , , -289, , , , -289, , , -288, , , , , , , , , , , , -288, , -287, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -287, , -286, , , , , , , , , , , , , , , , , , , , , , -286, -285, -285, -284, , , , -284, , -283, , , -283, , , -282, , , , , , , , , , , , , , , -282, , , , , , , -281, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -281, -280, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -280, -279, , , , , -279, , , , , , , , , -278, , , , , , , , , , , , , -278, , , -277, , , , , , , , , , , , , , , , , , , , -277, , , , , , , , -276, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -276
                  ]
                }, 
{
                  label: 'TABU_SEARCH',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , -598, -598, , , , , -597, , , , , , -596, -596, -595, -594, , -593, , , -592, , -592, -591, , -590, -589, -589, , , , -588, , -588, -587, , , , , -587, -586, -585, , , , , -585, , , -584, -583, , , , , , , , , , , -583, -582, , -581, -580, -579, , , , , , , , , , , , , , , , , , , , , -579, , , -578, , -577, , , , , , , , , , , , , , , -577, , -576, , , , , , -575, , , , , , , , , , -575, , , , , , , -574, , , -574, -573, , , -573, , -572, -572, -571, , , , , , , -571, , , , , , , , -570, , -570, -569, , -568, , , , , , , , , -568, -567, , -567, , -566, , , , -566, , , , , , , , , -565, , , -565, , , -564, , -563, , , , -562, -562, , , , , -561, , -561, -560, , , , , -560, -559, , -559, , -558, , , , , , , , , , , , , , , , , -558, , , , , , , -557, -556, , -556, , -555, , , , , -555, , , -554, , -553, , , -553, -552, , -552, , , -551, , , -551, -550, , , , -550, -549, -549, -548, -548, -547, , , , , , , , , , -547, , , , , , , -546, -546, -545, , -544, , , , , , -544, , -543, , , , , , , , , , , , , , , , , , , -543, -542, , , , , , , , , , -542, , -541, -541, , , , -540, -540, -539, -538, , , , -538, -537, -536, -536, -535, -534, , , , , , , , , , , , -534, -533, , , , , , , , , -533, , , , , -532, -532, -531, , -530, -530, -529, , -529, , , -528, -528, , , , -527, , , , , -527, -526, , , , , , , , , , -526, , -525, , , -525, -524, , , , , , , -524, -523, , , , , -522, , , -522, -521, , , , , , , , , -521, , -520, , , -520, , , -519, , , , , -519, -518, , -518, -517, -517, -516, , , , , -516, -515, , -515, , , -514, , , , , -514, -513, -513, -512, -511, , , , -511, , -510, -510, -509, , , , , -509, , -508, -508, , -507, , , , -507, -506, -505, , , , , , , , , , , -505, , -504, -503, -503, -502, , -502, -501, -501, -500, , , , -500, -499, , -499, -498, , , , -498, , -497, , -496, -495, -494, , -493, , , , , -493, , , , -492, , -491, , , -491, , , -490, , , , , , , , , , , , -490, , -489, , -489, , , , -488, , -488, -487, , , -487, , -486, , -485, , , , -484, -483, -483, , -482, , , -482, -481, -480, -480, -479, , , , , , -479, -478, , , , -478, -477, -477, -476, -476, , , -475, , , , -475, , -474, -474, -473, -473, -472, , , -472, -471, -470, , -470, -469, , , , -469, -468, -468, , -467, -467, -466, , -465, , , , , -465, , , -464, -464, -463, -463, , -462, -462, -461, , -461, , -460, , , -460, , -459, , -459, -458, -458, , -457, , , -457, , , -456, -456, , -455, , -455, -454, , -453, , , -453, -452, , -452, -451, -450, , -450, , -449, , , , , -449, , -448, , , , -448, , -447, , -447, -446, , -446, -445, , -444, -443, -443, -442, -442, -441, -440, -440, -439, , , -439, , -438, -437, , , , -437, -436, , -435, -435, , -434, -433, -433, -432, -432, -431, , , -431, -430, -430, , -429, , -429, -428, -428, -427, -427, -426, , , , , , , , , , , , -426, -425, -425, , -424, -424, -423, -423, -422, , , , , , -422, -421, , -420, , , -420, , -419, -419, , -418, , -418, -417, , , -417, -416, -416, -415, -415, , -414, , , -414, -413, -412, , , -412, -411, -410, , , , , -410, -409, -409, , -408, , , , , -408, -407, , -407, , -406, , , -406, , , -405, , -405, -404, -404, , , -403, , -402, -401, -401, -400, , -400, -399, , , -399, -398, -398, -397, -397, -396, , , -396, -395, -395, -394, -393, , , -393, -392, -391, -390, -389, -388, , , -387, -387, -386, , -386, -385, -385, , , -384, -384, -383, , , -383, -382, -381, , , , -381, -380, -379, , -379, -378, , , , , , , -378, -377, -377, -376, -375, -374, -374, -373, , -373, -372, , -372, -371, -371, -370, , , , -370, -369, -368, -368, , -367, -367, -366, -365, -365, -364, -364, -363, -362, -362, -361, -361, -360, -360, -359, -359, -358, -358, -357, , -357, , -356, -356, -355, -354, -354, -353, , -352, , -352, -351, , , -351, -350, -350, , -349, , -349, -348, -348, -347, -347, -346, -345, -345, -344, , , -343, -343, -342, -342, , , , -341, -340, , -340, -339, -339, , -338, -337, , -337, -336, -336, , -335, -335, -334, , , , , , , -334, -333, -333, -332, , , -332, -331, -331, -330, -329, -329, -328, -328, -327, -326, -326, -325, -325, , -324, -323, -322, -321, -321, -320, , , , -320, -319, -319, -318, , -318, -317, -317, -316, -316, -315, -314, -314, -313, -313, -312, , , -312, -311, , , -311, -310, , , -310, -309, -309, -308, , , -308, -307, , , -307, -306, -306, -305, , , , , -304, , , , -304, , , , -303, -303, -302, -302, -301, , , , , , , , , , , -300, , -300, , , , , , , , -299, -299, , , -298, , , -298, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -297, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -296, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -296
                  ]
                }, 
{
                  label: 'LATE_ACCEPTANCE (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -596, -592, -586, -584, -578, -572, -569, -566, -561, -557, -550, -545, -542, -539, -534, -531, -530, -524, -521, -518, -514, -513, -512, -511, -508, -504, -501, -499, -499, -497, -494, -490, -489, -486, -484, -484, , -483, -480, -479, -479, -477, -476, -473, -471, -470, -469, -467, -466, , , -465, , -465, , -464, -462, , -462, -461, -460, -459, , -459, -458, , , -457, -456, -456, , , , -455, -452, , -450, -449, -448, , , , -448, -447, , -444, , , , , -443, -442, -442, -441, , , -440, -440, -437, , -437, -436, , -434, -434, -433, -430, , -429, , , , , , , , , -429, -428, -426, -424, -423, , , -423, , , , , -422, -421, -418, -416, -415, -414, , , , -414, -413, , , , , , , , , -412, , , , , , -412, -411, -411, , -409, -406, -405, -405, -404, -403, -403, -402, -401, , , , , , -401, , , -400, , , , , , , , , , , , -400, -399, -398, , , , , , , , , , , , , , , -398, -397, -396, -396, -395, -394, -394, -393, , , -393, , , -392, , -392, -390, , , , , , , -390, -389, -388, -388, -387, -386, -384, -384, -383, , , , -383, , , , , , , , -381, , , , , , , , , , , -381, , , -380, -380, , -379, , -379, , , , -377, , , -376, -375, -375, , , , , -374, , , , , , , , , , , , , -374, -373, -373, , -372, -372, -370, -370, , , , , , , -369, , -368, , , , , , -368, , , , , , , , -367, -367, , , , , , , , , , , , , , , -366, -365, -365, -364, , , , , , , , -364, , , , , , , -362, -361, -361, , , , , , -360, -359, , -359, , -358, -358, -357, -357, , , , , , , , , -356, , , , , , -356, -355, , , , , , , , , , -354, , , , -354, , -353, -352, , , , , -352, , , , -351, -351, -350, -349, -349, , -348, -348, , , , -347, , , , , -347, -346, , -346, -345, -344, , , , , -343, -342, , , , , , -342, -341, -341, -340, -339, , , , , , , , -339, , , , , -338, -337, -337, , , , , , , , -336, -336, , , -334, , , , , -334, -333, , , , , , , , , , , -333, -332, -331, , , , , , , -330, -330, , , -329, , , , , -329, -328, -328, , , , -327, -327, -326, , , , , -326, -325, , , , , , , , -325, -324, , , , -324, -323, -323, , , , , -322, -321, , , , , -321, -320, , , , , , -320, -319, -319, , , , , , -318, , , -318, , , -317, -317, , , , , -316, , , , -316, , -315, , -315, -314, , -314, , -313, -313, -312, , , , , -312, , , , , -311, , , , , , , , -311, , -310, , , -309, , , , -309, -308, -308, -307, -307, , , -306, , , , , , , , , -306, , -304, , , , , , , , , , , -304, , , , -303, , , -303, -302, -302, , , , -301, , , , , , , , , , , , , , , , , , , , , , , , , -301, -300, , -299, , , , , , , , -299, -298, , -298, -297, , , , , , , , -297, , -296, -295, , , , , , , -295, , , , , , -294, , , -294, , -293, -292, -292, , -291, , -290, , , -290, , , -289, , , , , , , , , , , -289, , -288, , , -287, , -287, , -286, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -286, -285, , , , -285, , , , , , -284, , -284, -283, -282, , , , , -282, -281, , , , , , , , , , -281, -280, , , , , , , , -280, -279, , , , -279, -278, , , , , , , , , , , , , , -278, -277, , , , , , , , , , , , -277, , -276, , , , -276, , , -275, , , , , , , , -275, -274, , , , , , , -274, -273, , , , , , , , , , , , , , -273, -272, , , , -272, , , , , , , , , , , , , , -271, , , , , , -270, , , , , , , -270, -269, , , , , , , , , , , , , , , , , -269, -268, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -268, -267, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -267
                  ]
                }, 
{
                  label: 'GREAT_DELUGE',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -598, -595, -589, -586, -582, -576, -571, -569, -564, -561, -555, -547, -543, -539, -535, -532, -531, -524, -522, -518, -514, -513, -512, -512, -508, -504, -503, -499, -499, -498, -495, -493, -489, -488, -486, -484, -484, , -482, -480, -479, -479, -477, -476, -473, -471, -470, -469, -468, -467, -466, , , -465, , -465, , -464, -462, -462, -461, , , , , , , -461, -460, -458, -455, -454, , -454, -453, , , -453, , -452, -451, -449, -448, -447, -445, , , , , , , -442, -441, , -440, -438, -436, -434, -432, -432, -431, -431, -430, , -430, -429, -428, , -428, -427, -427, , -426, , , , , , , , , , , , , , , , , , -425, -425, -423, -422, , -420, -419, -416, , , , , , -416, , -415, -415, , , , , , , -414, , , -414, , -413, -413, , , -411, , -411, -410, -410, , , -409, , -409, -408, , , , , -407, , , -406, -405, -404, -403, -402, , -402, -401, , , -401, -400, , , -400, -399, , , -399, -397, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -397, -396, -396, -395, -394, -393, -393, , , -392, -392, -391, -389, -388, -388, , , , , , , , , , , , , , , , , , , -387, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -387, -386, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -385, -385, -383, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -382, -381, -380, , -380, -379, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -379, -378, -378, -377, -377, -376, -376, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -375, -375, -374, -374, , , , , , , , , , , -373, -373, , -372, -371, , , , , -371, -370, -369, -369, -368, -368, -367, -367, -366, -366, -365, -365, -363, , , -363, -362, -362, -361, -361, -360, -360, -359, , -358, -357, -357, -356, -355, -355, , -354, -353, -353, -351, -351, -349, -349, -348, , , -348, -347, -347, -346, -346, -345, -344, -344, , , -343, -343, -342, -342, -341, -341, -340, -340, -339, -339, -338, -338, -337, -337, -336, , -335, , -335, -334, -334, -333, -332, -332, -331, , , -331, , -330, -329, , -328, -328, -327, -327, -326, -326, -325, , , -325, -324, -324, -323, -323, -322, -322, -321, -321, -320, -320, -319, -318, , -318, , -317, , -317, -316, -316, -315, , -315, -314, -314, -313, -313, -312, -312, -311, -311, -310, , , -310, -309, , , -309, -308, -308, -307, -307, -306, -306, -305, -305, , , -304, -304, -303, -303, -302, -302, -301, -301, -300, -300, -299, -299, , -298, , -298, -297, , -297, -296, -296, -295, -295, -294, -294, , -293, -292, , -292, -291, , -291, -290, -290, , -289, , -289, , , -288, -288, -287, -287, -286, -286, -285, -285, -284, -284, -282, -282, -281, -281, -280, -280, -279, , , -279, -278, -278, -277, , , -277, -276, -276, -275, -275, -274, -274, , -273, , -273, -272, -272, -271, -271, -270, , , -270, -269, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -269
                  ]
                }, 
{
                  label: 'VARIABLE_NEIGHBORHOOD_DESCENT',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -598, -598, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -597, -597, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -596, , , , , , , -596, , , , , , , , , , , , , , , , , , , , -595, , , , , , , , , , , , -595, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -594, , , , , , , , , -594, , , , , , , , , , , , , , , , , , , -593, , , , , , , , , -593, , , , , , , , , , , , , , , , , , , -592, , , , , , , , , , -591, , , , , , , -591, , , , , , , , , , , , , , -590, , , -590, , , , , , , , , , , , , , , , , , , , , , , , , , , , -589, , , -589, , , , , , , , , , , , -588, , , , , , , -588, , , , , , , , , , , , , , , , -587, -587, , , , , , , , , , , , , , , , , , , , , , , , , , -586, -586, , , , , , , , , , , , , , , , , -585, , -585, , , , , , , , , , , , , -584, , , , , -584, , , , , , , , , , -583, , , , -582, , -582, , , , , , , , , , , , , -581, , , , , , , , , , , , , , -580, -580, , , , , , , , , , -579, -579, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -578, , , , -578, , , , , , , , , -577, , , , -577, , , , , , , , , -576, , -576, , , , , , , , , -575, , , , , , , , , , , -575, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -574, -574, , , , , , , , , , , , , , , , , , , , -573, -573, , , , , , , , , , -572, , , -572, , , , , , -571, , , , , -571, , , , , , , , , , , , , , , -570, , , , , , , , , , , , , , , , , , , , , , , , , , , , , -569, , -569, -568, , -568, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -567, -567, , , , , , , , , , , , , , , , -566, -566, , , , -565, -565, , , , , -564, -564, , , , , , , , , -563, -563, , , , , , , , , , , -562, , , -562, , , , , , , -561, , , , , -561, , , , , , , , , , , , , , , , , , , , -560, , -560, , , , , , , -559, , -559, , , -558, -558, , , , -557, , -557, , , , , , , , , , , , , , , , , -556, -556, , , -555, , , , , , , -554, , , , -554, , , , , , , -553, -553, , , , , , -552, -552, , , , , , , , , , , , , , , , , , , , , -551, , -551, , , , , -550, , , , , , , , , , , , -549, -549, , , -548, -548, , , -547, -547, , , , , -546, -546, , , -545, -545, , , , , -544, -544, -543, -543, , -542, -542, -541, , -541, -540, -540, , , , , , -539, -539, -538, -538, -537, -537, -536, -536, -535, -535, , -534, , -534, -533, -533, -532, -532, -531, -531, , , -530, -530, , -529, -529, , -528, -528, -527, -527, -526, -526, -525, -525, -524, -524, -523, -523, -522, -522, -521, -521, -520, -519, -519, -518, -518, -517, -517, -516, -516, -515, -515, , , , , -514, -514, -513, -513, -512, -512, -511, -511, -510, -510, , , , , , -509, -509, -508, -508, , , , , , , , , , , , , , -507, -507, , , , , , , , , -506, , , , , , , , , , , , , , , , -505, -505, , , , , , , , , -504, -504, , , , , , , , , , , , , , , , -503, , -503, , , , , , , , -502, -502, , -501, , , -501, , , , , , , , -500, -500, , , , , , , , , , , , , , -499, , -499, , -498, , , , , -498, , , , , , , , , , , -497, -497, , , -496, -496, , , , , , , , , , -495, -495, , , , , , , , , , , , , -494, , -494, , , -493, , , , , , , , -492, , , -492, , , -491, , , , -490, , -490, , -489, -489, , , , , , , , , , , , , , , , , , -488, -488, , , , , -487, -487, , , , , , , , -486, , -486, , , , , , , -485, -485, , , -484, -484, -483, -483, -482, -482, -481, -481, -480, -480, -479, -479, -478, -478, -477, -477, -476, -476, -475, -475, -474, -474, -473, -472, -472, -471, -471, -470, -470, -469, -469, -468, -468, -467, -467, -466, -466, -465, -465, -464, -464, -463, -462, -462, -461, -461, -460, -460, -459, -459, -458, -458, -457, -456, -456, -455, -455, -454, -454, -453, -453, -452, -452, -451, -451, -450, -450, -449, -449, -448, -448, -447, -447, -446, -446, -445, -445
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
                text: 'oled-bench-20c-101o-30ts-baking-maint best medium score statistic'
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
  chart_bestScoreProblemStatisticChart1_3a237.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_3a237.resize();
});
