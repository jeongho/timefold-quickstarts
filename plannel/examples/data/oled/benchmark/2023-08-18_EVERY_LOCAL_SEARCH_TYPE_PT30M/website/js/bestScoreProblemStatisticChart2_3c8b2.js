
var chart_bestScoreProblemStatisticChart2_3c8b2 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart2_3c8b2'), {
    type: 'line',
    data: {
        labels: [
            3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 74, 75, 76, 79, 80, 82, 84, 86, 87, 88, 89, 90, 91, 92, 93, 94, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 111, 112, 114, 117, 121, 122, 125, 126, 127, 128, 129, 131, 135, 136, 139, 141, 142, 143, 145, 146, 147, 149, 150, 151, 152, 155, 157, 160, 161, 162, 165, 166, 167, 168, 169, 170, 171, 174, 175, 177, 180, 184, 189, 190, 194, 200, 202, 207, 208, 209, 210, 213, 214, 215, 216, 218, 219, 221, 222, 225, 226, 228, 229, 230, 232, 233, 234, 235, 237, 238, 241, 246, 247, 250, 251, 254, 257, 260, 261, 263, 271, 273, 274, 276, 278, 281, 283, 284, 285, 290, 296, 297, 300, 303, 304, 307, 309, 313, 317, 321, 322, 323, 324, 325, 326, 329, 343, 349, 352, 357, 362, 373, 378, 386, 393, 395, 396, 401, 402, 404, 408, 414, 425, 429, 434, 444, 449, 454, 461, 464, 468, 471, 478, 483, 487, 493, 497, 498, 500, 505, 507, 510, 516, 520, 521, 525, 533, 539, 547, 548, 552, 553, 554, 555, 557, 558, 559, 568, 571, 575, 576, 581, 587, 596, 602, 603, 619, 625, 631, 632, 642, 650, 653, 654, 663, 666, 668, 671, 672, 673, 674, 678, 689, 690, 691, 697, 698, 702, 715, 727, 731, 738, 740, 741, 743, 744, 746, 747, 753, 763, 768, 774, 786, 793, 794, 803, 809, 810, 812, 813, 816, 822, 829, 837, 844, 846, 850, 852, 859, 860, 867, 877, 882, 885, 893, 896, 899, 900, 901, 902, 910, 919, 921, 923, 929, 940, 943, 948, 949, 951, 953, 960, 971, 976, 982, 983, 988, 989, 1000, 1010, 1020, 1022, 1026, 1027, 1030, 1038, 1039, 1041, 1042, 1051, 1068, 1071, 1073, 1075, 1076, 1081, 1090, 1116, 1118, 1120, 1125, 1126, 1130, 1139, 1146, 1147, 1152, 1159, 1198, 1208, 1210, 1213, 1215, 1216, 1217, 1220, 1221, 1230, 1236, 1249, 1253, 1256, 1267, 1287, 1297, 1329, 1352, 1354, 1356, 1374, 1401, 1402, 1404, 1405, 1415, 1416, 1417, 1419, 1421, 1434, 1444, 1448, 1486, 1505, 1598, 1603, 1625, 1640, 1646, 1648, 1655, 1683, 1701, 1714, 1721, 1724, 1729, 1741, 1776, 1779, 1780, 1781, 1786, 1788, 1791, 1836, 1846, 1849, 1854, 1856, 1857, 1868, 1873, 1874, 1876, 1877, 1878, 1879, 1889, 1896, 1910, 1935, 1960, 1967, 1986, 1987, 1991, 1998, 1999, 2017, 2039, 2050, 2055, 2084, 2089, 2100, 2114, 2131, 2133, 2134, 2146, 2148, 2149, 2175, 2189, 2201, 2228, 2244, 2257, 2261, 2269, 2290, 2293, 2305, 2308, 2316, 2323, 2324, 2339, 2357, 2378, 2415, 2436, 2454, 2468, 2470, 2495, 2520, 2522, 2535, 2548, 2554, 2555, 2558, 2575, 2596, 2604, 2610, 2615, 2631, 2635, 2646, 2658, 2668, 2669, 2670, 2672, 2673, 2726, 2727, 2741, 2758, 2771, 2782, 2783, 2785, 2800, 2816, 2835, 2839, 2858, 2864, 2865, 2866, 2888, 2896, 2897, 2902, 2930, 2943, 2944, 2967, 2968, 2973, 2974, 3051, 3068, 3072, 3096, 3100, 3160, 3174, 3188, 3215, 3232, 3304, 3308, 3324, 3339, 3369, 3382, 3396, 3424, 3425, 3427, 3429, 3430, 3450, 3453, 3460, 3477, 3498, 3522, 3524, 3525, 3526, 3542, 3552, 3558, 3572, 3587, 3594, 3633, 3647, 3665, 3706, 3713, 3717, 3718, 3759, 3765, 3787, 3789, 3803, 3805, 3819, 3850, 3866, 3898, 3932, 3936, 3965, 3969, 3971, 4003, 4021, 4057, 4074, 4087, 4128, 4144, 4160, 4177, 4190, 4193, 4206, 4207, 4208, 4210, 4211, 4222, 4223, 4224, 4241, 4247, 4256, 4272, 4289, 4336, 4346, 4350, 4395, 4400, 4478, 4506, 4513, 4518, 4533, 4538, 4599, 4602, 4603, 4616, 4633, 4653, 4670, 4688, 4706, 4707, 4714, 4735, 4738, 4772, 4784, 4802, 4810, 4811, 4819, 4820, 4821, 4855, 4858, 4859, 4866, 4951, 4952, 4977, 5070, 5086, 5087, 5088, 5095, 5102, 5103, 5117, 5118, 5120, 5122, 5214, 5215, 5255, 5265, 5268, 5303, 5306, 5307, 5329, 5330, 5343, 5393, 5394, 5395, 5397, 5403, 5431, 5432, 5464, 5469, 5474, 5492, 5518, 5560, 5562, 5590, 5607, 5609, 5616, 5644, 5645, 5687, 5688, 5710, 5717, 5720, 5725, 5742, 5744, 5759, 5783, 5822, 5840, 5841, 5889, 5936, 6044, 6064, 6122, 6142, 6183, 6318, 6336, 6366, 6381, 6396, 6431, 6487, 6570, 6590, 6634, 6648, 6793, 6797, 6836, 6837, 6853, 6854, 6876, 6912, 6917, 6958, 6976, 6980, 6998, 7057, 7085, 7108, 7220, 7238, 7258, 7275, 7299, 7307, 7315, 7317, 7321, 7366, 7444, 7445, 7448, 7449, 7454, 7533, 7557, 7592, 7600, 7604, 7605, 7630, 7656, 7663, 7688, 7714, 7715, 7716, 7736, 7756, 7768, 7799, 7830, 7831, 7836, 7843, 7862, 8082, 8194, 8235, 8238, 8239, 8244, 8361, 8387, 8395, 8401, 8406, 8415, 8423, 8561, 8567, 8583, 8605, 8607, 8617, 8661, 8681, 8690, 8711, 8725, 8734, 8780, 8784, 8815, 8915, 8945, 8970, 9094, 9198, 9226, 9249, 9394, 9441, 9444, 9458, 9488, 9542, 9758, 10065, 10087, 10093, 10114, 10117, 10154, 10159, 10165, 10226, 10268, 10269, 10365, 10542, 10765, 10786, 10833, 10859, 10860, 10861, 10862, 10888, 11063, 11065, 11066, 11068, 11254, 11291, 11296, 11319, 11338, 11367, 11482, 11483, 11510, 11596, 11598, 11605, 11607, 11611, 11613, 11614, 11623, 11634, 11657, 11683, 11691, 11788, 11810, 11811, 11812, 11813, 11866, 11867, 11960, 12001, 12149, 12185, 12187, 12190, 12192, 12193, 12195, 12218, 12282, 12305, 12494, 12517, 12607, 12703, 12751, 12775, 12813, 12902, 12979, 13033, 13037, 13047, 13072, 13073, 13074, 13109, 13190, 13193, 13264, 13273, 13274, 13311, 13315, 13322, 13325, 13330, 13332, 13334, 13335, 13383, 13545, 13676, 13730, 13744, 13746, 13750, 13807, 13908, 13915, 13922, 14086, 14101, 14111, 14113, 14122, 14124, 14126, 14150, 14206, 14207, 14220, 14319, 14420, 14465, 14469, 14472, 14473, 14475, 14503, 14509, 14530, 14556, 14585, 14586, 14666, 14673, 14788, 14836, 14916, 14968, 14970, 15065, 15137, 15191, 15231, 15236, 15242, 15336, 15426, 15446, 15450, 15454, 15457, 15796, 15801, 16015, 16025, 16035, 16129, 16136, 16474, 16607, 16812, 16908, 16912, 16917, 16935, 17199, 17280, 17859, 17980, 18519, 18541, 18545, 18558, 18951, 18960, 18969, 19072, 19074, 19079, 19369, 19450, 19486, 19686, 19933, 20161, 20315, 20348, 20398, 20400, 20408, 20415, 20541, 20542, 20722, 21247, 21251, 21254, 21269, 21306, 21475, 21497, 21502, 21503, 21558, 21564, 21631, 21775, 21784, 22481, 22727, 22963, 23502, 23596, 23600, 23610, 24019, 24044, 24097, 24104, 24337, 24350, 24463, 24472, 24496, 24938, 25270, 25358, 25649, 25706, 25779, 25826, 25836, 25903, 26090, 26092, 26103, 26354, 26508, 28154, 28156, 28168, 29474, 29479, 29484, 29503, 29523, 29642, 29677, 29844, 29854, 30140, 30215, 30592, 30772, 30893, 30902, 31031, 31156, 31708, 31710, 31719, 31831, 31843, 31852, 31974, 33110, 33120, 33528, 35464, 35481, 35485, 35489, 35507, 35512, 35531, 35535, 35540, 35544, 35548, 35588, 35623, 35659, 35664, 38045, 38191, 38528, 38629, 38716, 38863, 39924, 39936, 39947, 39965, 39985, 40603, 41843, 41860, 42154, 42171, 42175, 42601, 42681, 43480, 43499, 43517, 43560, 43608, 45532, 45536, 45538, 45555, 45565, 45696, 45923, 48240, 48903, 48919, 48939, 48959, 48971, 48983, 52042, 54181, 54537, 56685, 56704, 56869, 56880, 56892, 56906, 56925, 56937, 56949, 56960, 56971, 58771, 60610, 61716, 62855, 62857, 62868, 63662, 63667, 63687, 64041, 64394, 64415, 66339, 68658, 68814, 70809, 70810, 71219, 71231, 71362, 71780, 71803, 71808, 71823, 71854, 71873, 71888, 72130, 72146, 72373, 72626, 73555, 73558, 73560, 75132, 83560, 86167, 89223, 91878, 91885, 91909, 92326, 92776, 92952, 102143, 112703, 112718, 115990, 116916, 116943, 117256, 117541, 117823, 129172, 129367, 150102, 160751, 160767, 173134, 174348, 177417, 177419, 177420, 177421, 177422, 177423, 177989, 177990, 189750, 189752, 189753, 190314, 190315, 190658, 191481, 192827, 200563, 202874, 202875, 205842, 205843, 205844, 205845, 205848, 205849, 205850, 208385, 218192, 218193, 226345, 231138, 231603, 231605, 236090, 236092, 236094, 236095, 236096, 245583, 247960, 249439, 250240, 250241, 250242, 253974, 254247, 257317, 257548, 261803, 261804, 261805, 262117, 265172, 265173, 265341, 268067, 268068, 268328, 268830, 268831, 274477, 275846, 276897, 277453, 277454, 278571, 279018, 279558, 281259, 282940, 287284, 287690, 287691, 289102, 292869, 293110, 293111, 295902, 295904, 304552, 304553, 305731, 305761, 309594, 309611, 314561, 318296, 319331, 320531, 320532, 323777, 324150, 330385, 330441, 330460, 331593, 333911, 333912, 336987, 337149, 337151, 338836, 341897, 344521, 344715, 345795, 345796, 352081, 358750, 358751, 358752, 365947, 367631, 367632, 369466, 369467, 369468, 373267, 373564, 373610, 373619, 373620, 373662, 374164, 374165, 375717, 375820, 375821, 381284, 381652, 381653, 391725, 391726, 391733, 391734, 400195, 406336, 408501, 410200, 414771, 414773, 415517, 415629, 415651, 422967, 423759, 423760, 423816, 424610, 424638, 425301, 425302, 429766, 432496, 441371, 441372, 441373, 441376, 441404, 441406, 441440, 441468, 441536, 441537, 443412, 444379, 447698, 447699, 448989, 453766, 453767, 453768, 453769, 453770, 453773, 453775, 453776, 453777, 453778, 453780, 453782, 453784, 453785, 453786, 453788, 453795, 453801, 453802, 453803, 453804, 453806, 453808, 453815, 453819, 453826, 453827, 453836, 453842, 453851, 453854, 453856, 453858, 453865, 453874, 453880, 453891, 453896, 453900, 453904, 453906, 453907, 453909, 453920, 453922, 453923, 453932, 453935, 453939, 453944, 453960, 453984, 453990, 453995, 453997, 454019, 454028, 454055, 454068, 454075, 454086, 454104, 454110, 454124, 454150, 454152, 454176, 454267, 454273, 454284, 454326, 454458, 454459, 454476, 454526, 454550, 454553, 454596, 454655, 454801, 454829, 454850, 455071, 455081, 455094, 455166, 455185, 455508, 455577, 455657, 456169, 456193, 456786, 1009017, 1800000
        ],
        datasets: [
            {
                  label: 'HILL_CLIMBING',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -684, -1005, -815, -979, -986, -1283, -1946, -1777, -1395, -1103, -732, -682, -371, -571, -893, -752, -680, -679, -506, -562, -296, -463, -441, -586, -577, -735, -398, -124, -79, -249, 127, 145, 215, 294, 109, 167, 381, 741, 807, 935, 1244, 1298, 1309, , 1480, 1642, , 1662, 1736, 1757, 1847, 2028, 2052, , , 2013, 2187, 2235, 2253, , , 2284, , , , 2297, , 2308, 2664, 2712, , 3165, , 3185, , 3406, 3706, 3746, 3555, 3565, 3804, 4025, 4026, , , , , 4040, 4100, , 3930, 3940, , , 3960, 4631, 4461, 4464, 4907, , , 5055, , 5056, 5658, , , , 5668, , 5669, 5499, 5527, , 5561, 5563, 5752, , , 5762, , 5953, , , , 5783, , , , 5793, 5818, , 5834, , , , 5844, 6025, 6026, , , , 6208, 6258, 6259, 6257, , , 6087, 6097, , 6107, , 6119, , , 6129, , , 6129, , 6132, 6134, , , 6134, , 6135, , , , , 6161, 6162, , 6166, 6194, 6195, 6199, 6249, , , , , 6270, 6291, , , 6121, , , 6144, , , , , 6167, , , 6440, , , , 6450, , , 6460, , , 6912, 6752, 6788, , , 6618, , , , , , , 6628, , , , , , 6629, , , 6640, , , , , 6670, 6858, , , , , 6863, , , , , 6904, , , , , , , , 6939, 6949, , , , , , 6950, , , , 6984, , 6994, , , , , 7005, , , 7020, , , , , , 7021, , 7037, 7048, 7078, , , 7078, 6909, , , 6910, , 6919, 6929, 6930, , , 6931, , , , , , 6951, , , , , , 6961, 6962, , , , , , 6959, 6962, , 7022, 7031, , , , , , , , , , , 7042, , , , , 7043, , , , , , , , , , , 7050, , , , , , , 7051, , , 7053, , , , 7083, 7084, , , 7086, , , 7087, 7102, 7122, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 7132, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 7147, , , , , , 7157, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 6963, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 6963
                  ]
                }, 
{
                  label: 'TABU_SEARCH',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -3, , , , , , , -3, , , , , , , -173, -343, , -514, , -333, , -298, -128, , , -298, , , -288, , , , , -277, , , , , , , -276, , -246, , , , , , , , -246, , , -236, , , , , -406, , , -206, , , , , -376, , -186, , -175, -164, -153, , , , , , , , -371, , -323, , , , , , , -317, , , , , -487, -277, -277, , -276, , , , , -266, , -436, , , , , , , -606, , -406, , -395, , -565, -395, , , , , -565, , , -385, , -215, , -175, -165, , , 49, 84, 124, , 125, , , , -45, , , -215, , -45, , 125, , , -45, , , -34, , , -24, , -14, 21, , 71, , 86, 257, 337, , 347, , 177, , 348, , 178, 344, , , 368, , 408, , , , , , 238, 20, 68, , , , , , , 78, 113, , -57, -48, , -218, -435, -183, -13, , , -2, , , 33, 48, 58, -114, 78, 89, 99, 134, , 159, 330, , 340, 341, , 172, , 406, , , , 445, 275, , 286, , 116, 117, 347, , , 360, , , , 395, , , , , 225, 54, 233, 465, 476, , 476, 477, 512, , 532, , , 552, , 382, , , 164, , , 165, , , 212, , 213, , , , 243, 267, , , , , , , , , 93, -78, -248, , -4, 241, , , 390, , , 462, 476, 510, 564, , , 730, , 805, 887, 980, , 1091, 1102, , , , 1112, , 1254, 1284, , , 1345, 1393, , , 1473, , , 1573, , 1715, , , 1745, , 1765, 1776, , , , , , , , 1606, , 1776, , 1796, , , , 1796, 1926, , , 1926, , , 1946, 1776, , , , 2086, 1869, 1880, , , , , 1891, , , 1892, , 1938, , , 1768, 1918, 1918, 1948, , , 1959, 1960, , , , , , 1971, , , , 2150, , 2161, , , , , 1991, 2321, , , 2345, 2175, 2345, 2360, , , 2371, 2531, 2531, , , , , 2532, , 2362, 2530, , , , 2702, , , , , , , 2713, 2733, , , 2744, , , , , , , , , 2527, , 2708, , 2708, 2732, , , , 2731, 2754, , , 2584, 2934, 2944, 2949, 2779, 2949, , 3119, , 2949, 2960, , 3130, , , 3320, , 3345, 3355, 3366, 3375, , 3570, 3581, , 3412, 3792, 3843, , , , 3903, , , 3685, , 3913, , 3932, , , , , 3942, , , , 3772, 3982, 4152, , , 4372, 4383, 4419, , , , , , , 4419, , , , 4435, , , , , , 4266, 4676, 4691, , , 4731, 4731, 4732, 4734, 4540, 4734, , 4739, 4569, 4739, 4748, 4749, 4799, , , , , , , 4800, , 4979, 4999, , , , , 4829, , 4831, 4832, 5252, , 5262, 5273, 5284, , , , 5289, 5289, , , , 5299, , 5300, 5130, 5300, , 5131, , , , 5301, 5350, 5350, 5490, 5500, , 5501, 5499, 5500, 5508, , 5519, , , 5544, , , , , 5564, 5583, , 5366, 5371, 5381, 5428, , , 5439, , 5440, 5479, , , 5490, , 5532, , , 5552, 5553, 5563, 5394, 5395, , , 5177, 5346, , , 5407, 5407, , , 5455, , , 5475, , , , , , 5476, , , , , , , , , , , , , , , , 5476, 5477, , , , , 5487, , , , 5497, , , 5498, , , , , , , 5328, 5508, , , 5542, 5372, , , , , , 5792, , , , 5803, , 5803, 6074, , , 6139, 5969, 6139, 5969, 5979, 5989, 6020, 6044, , , 6054, , 6055, 6070, 6090, , , , , , , , , 5920, , 5702, 5882, , , 5923, 5953, 5988, , , 6038, 6047, , 6048, , , , 6273, , , , , , , , 6293, , , , , , , , 6299, , 6130, , 6299, 6360, , 6190, , , , 6192, 6202, , 6277, , , , , 6108, 6488, , , , , , , , 6489, , , , , , 6499, 6507, , 6592, , , 6602, , 6612, 6652, 6652, 6482, 6483, 6484, , , , , , , , 6484, 6485, , , , , , , 6515, , , 6526, 6356, 6187, , , , , , , , , , , , 6186, , , 6197, , 6028, , , 6029, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 6208, 6212, 6217, 6223, 6243, 6423, 6438, 6439, 6449, , , , 6469, , , , , 6490, , , , , , 6510, , , , , , , 6529, 6541, 6551, , 6556, , , , 6386, , , , 6387, , , , , , , , , , , , 6403, , 6413, , , , , , 6417, 6417, , , , , 6418, 6423, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 6423, 6434, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 6435, , , , , , , , , , , , , , , , , , , , 6436, 6441, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 6451, 6452, 6453, , , 6456, , , , , , , , , , , , 6466, 6476, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 6303, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 6303
                  ]
                }, 
{
                  label: 'LATE_ACCEPTANCE (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , -638, -640, -1174, -1061, -1847, -1631, -1803, -1940, -1595, -1968, -2414, -2110, -2024, -2156, -2463, -2158, -2175, , , , , -2083, -1934, -1826, , -1822, -1955, -1978, -1950, -2133, -1802, -2001, -1983, -2311, -2000, -1713, , -2599, -2539, , , -2661, -2638, -2707, , , -2086, , , -2516, -2681, -2673, , , , , , -2889, -2874, -2812, , , , -2359, , , , , -2012, -1798, , , , , , , , , -1558, -1539, , , , , , -1190, , -1040, , , -1700, -1617, -1699, -1863, , , , , , , , , , -1517, -1690, , -2143, -2201, , , , , , , , , , , , , , , -1769, , -1823, -1814, -1636, -1622, -1819, -1329, , , , , , , , , , , , , , , , , , , , , , , , -1328, , , -1307, , -1761, -2155, , -2111, , , , , , -2079, , , , , , , , , , , , , -2495, , , -2324, -1966, , , -2277, -2266, -2121, , , , -1681, -1755, , , , , , , , , , , , , , , -1461, -1338, , , -2077, , , , , , , , , -1984, , , , , , , -1756, -1687, , -1859, -2298, , , , -2105, , , , , -1549, , , , -2510, -2399, -2387, -2237, -2078, , , , , , , , , , , , , , , , -2015, , -1704, , , , , , , , -2114, -2040, , , -2305, , , , , , , , , , -2586, , , , , , , , , , -1810, -2069, , , , , , , , , , , -1961, -1939, , , , , , , , , , , , , , , , , , , , -1916, -1865, , , , -1453, -1396, -2052, -2027, , , , , , , , -1840, -1780, , -1989, , , , -1626, , , , , , , , -2093, , , , , , , , , , -1578, -1576, -1600, -1473, -1430, , , , -1341, , , , , , , , , , , , -2453, -2444, -2315, -2051, -2239, -2183, -2074, , , , -1671, , , -2271, , , , , -2179, -2099, , , , , , , , , , -1983, -1889, -1589, , , , , , , -2343, -2281, -2241, -2227, , , -2123, , -2264, , , -2674, , , , -2316, , , , -3303, -3178, -2850, , -2445, , -1943, , , -1909, , , , , -1733, -1669, , , , , , , , , -1080, , , , , -1828, -1822, , , , , , , , , , , , , , -1240, -1094, , , , -1023, , -1571, , , , -1409, -1388, -1360, -1276, , , -2072, -2005, , , , -1690, -1634, , , , , , , -1520, -1442, -1426, , -1363, -1307, -1181, , -996, -967, , -1065, , , , , , , , , , , , , -878, , , , , , , -2050, -2010, -2007, -1959, -1853, -1804, , -1716, , , -1672, -1911, -1893, -1823, , -1703, , , , -1373, , , , , , -1936, , , -1636, -2803, -2634, , , , , , , , -2045, -1641, -1491, -1401, , , , , -1170, , , , , , , -2386, -2330, , , , -1828, -1741, , , , , , , , , , , , , , -1487, -1334, , -2531, , -2113, -1968, , , , , , -1776, -1720, , , -1550, , , , , , , -1506, -1408, , , -1301, -1038, -1461, -1402, , -1354, , , , , , , , , , , -1032, -947, -944, -932, , , -904, -781, -1931, -1903, , -1897, -1855, -1853, , -1794, -1757, , -1658, -1543, -1490, -1365, -1330, -1240, , , -1173, -1107, , -958, -874, -839, -803, , , , , -710, -669, , -281, , , , , , , , , , , , , -254, -22, , 23, , , , 26, 294, , , 298, 442, , , , , , , 466, 649, , 796, , 920, 966, , , 1053, , , , , , 1069, 1143, 1187, , , , 1222, , 1370, , 1535, , , , 1539, , 1692, , 1808, , , , , , , , , , 2109, , 2305, , , , , , , , , , , , , , , 2338, 2442, 2446, 2448, , , 2549, , 2554, 2864, , , , , , , , , 2970, 2990, 3025, 3074, 3166, 3366, 3563, , , , 3665, 3707, , , , , 3911, 3921, , , , , , 3947, 3995, 3996, 4016, 4132, , , , , , 4141, 4144, , 4344, , 4387, 4388, , 4391, 4403, 4415, 4416, 4418, 4422, 4444, 4471, , 4579, 4593, 4620, 4638, 4736, 4747, 4757, 4771, 4813, 4825, 5072, 5083, 5178, 5179, 5188, 5211, 5213, 5215, 5255, 5368, , , , , , , , , , 5417, , , , 5425, 5430, 5431, 5442, , 5450, 5459, 5472, 5474, 5482, , 5498, 5505, 5507, 5509, 5574, 5586, 5593, , , 5615, , 5628, 5659, 5660, , , , , , , , , 5661, 5691, 5707, 5716, 5744, 5764, , , , 5787, , 5810, 5831, 5850, , , , , , , , , , , 5855, 5858, 5860, 5862, 5863, 5873, , 5905, , 5912, , 5959, 5961, 5976, 5977, 5978, 6018, , , , , , 6034, 6084, 6092, , , , , , , 6098, 6099, , , , 6116, , , 6119, , 6149, , 6154, 6169, , 6178, 6185, 6189, , 6191, , , , , 6192, 6202, 6224, , , , , 6229, 6230, , , , 6231, , , 6234, 6244, , 6255, 6264, 6268, 6269, 6275, 6279, 6282, 6283, 6292, 6294, , , , , 6296, , 6304, 6306, , , , , , 6309, , , , , 6318, , , , , , , , , 6325, , , , , , 6326, , , , , , , , , , , , , , , 6337, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 6337
                  ]
                }, 
{
                  label: 'GREAT_DELUGE',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -173, -640, -811, -1079, -1847, -1582, -1920, -1595, -2323, -2355, -2140, -2030, -2156, -2243, -2250, -2175, , , , , , , , , , , , -2609, -2696, -2476, -2547, -1992, , -2556, , -2548, -2787, , , , -2583, , , , , , -3442, , -2953, , -2766, -2892, -2871, , , -2865, -2826, , , , -3010, -2982, -2922, -2712, -2454, -2403, -2271, -2261, -2263, -2316, , , , , , , , , , , , -2129, -1950, -2034, -1876, -2341, -2300, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2298, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -3049, -2814, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2400, -2390, , , , , , , , , , , , , , , , , , , , , , , , , , -2385, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -1454, -1331, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2683, -2579, -2458, -2418, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2357, -2564, -2431, , , , , , , , , , , , , , , , , , , , , , , , , , -2497, -2242, -2207, -2157, -2056, -1940, -1923, -2494, -2405, -2203, -2137, -2094, -2043, -2023, -2949, -2194, -1896, -2152, -2809, -2765, -2548, -2409, -2371, -2357, -2701, -2589, -2291, -3022, -2399, -2317, -2482, -2409, -2353, -2385, -2629, -2631, -2509, -2490, -2447, -2346, -2303, -2264, -2365, -2278, -2159, -2153, -3405, -3010, -2200, -2161, -1972, -1793, -1779, -2967, -2775, -2246, -2099, -2091, -2579, -3017, -2861, -2859, -2834, -2306, -2220, -2040, -2789, -2738, -2533, -3036, -2398, -2226, -3244, -3167, -2657, -2489, -2029, -1724, -2311, -2279, -2082, -2060, -2776, -2940, , , , -2204, -2048, -1826, -1739, -3235, -1998, -1987, -2764, -2495, -2163, -3009, -3008, -2620, -2376, -2318, -2012, -1729, -3163, -2795, -2115, -2329, -2325, -2315, -2271, -2298, -2260, -2210, -2112, -2882, -2879, -2739, -2716, -2649, -2615, -2486, -2439, -2251, -2173, -2167, -2074, -2769, -2730, -2179, -2119, -2003, -1901, -1868, -2203, -1995, -2430, -2359, -2982, -2767, -2719, -2674, -2338, -2206, -1955, 23, -2530, -2486, -2204, , , -2200, -2111, -2086, -168, -143, -122, 49, 204, 227, 365, 460, 534, 605, 785, 857, 947, 1021, 1024, 1153, 1370, 1371, 1377, 1410, 1422, 1611, 1621, 1631, 1652, 1662, 2087, 2097, 2259, 2294, 2328, 2340, 2341, 2376, 2564, 2584, 2619, 2652, 2698, 2705, 2706, 2771, 2923, 2925, 2935, 3177, 3199, 3856, 3857, 3858, 3878, 3888, 3889, 3909, 3919, 3943, 3976, 4143, 4153, 4187, 4217, 4482, 4486, 4557, 4558, 4644, 4858, 4868, 5164, 5173, 5178, 5183, 5187, 5197, 5648, 5659, 5683, 5684, 5703, 5714, 5724, 5744, 5745, 5751, 5791, 5792, 5793, 5803, 5837, 5872, 5873, 5879, 5903, 5904, 5913, 5923, 5933, 6120, 6121, 6139, 6149, 6159, 6165, 6174, 6178, 6198, 6208, 6213, 6223, , 6223
                  ]
                }, 
{
                  label: 'VARIABLE_NEIGHBORHOOD_DESCENT',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -173, , , , , , , , , , , , , -343, , , -173, , , , , , , , , , , , , , , , , , -343, , , , , , -298, , , , , , , , -468, , , , , -298, , , , , , , , , , -467, , -457, -422, , -412, , , , -178, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -348, , , , -138, -103, , , , , , , , -273, , , , , , , , -103, , , , , , , , , , , , -273, , , , -53, -18, , , , , , , , , , , , , -18, , , , , , , , , , , , , , , , , , , -188, , , , -143, , , , , , , , -203, -179, -166, -142, -118, -107, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -107, -106, , , , , , , , -86, , , , , , , , , , , , , , , , , , , , -66, , , -31, , , , , , , , , , , , , , -204, -1, , 34, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -136, , -135, , , 34, 35, , , 65, , , , , , , , , , , , , , , , 65, , 66, , , , , , , , , , 86, , , , , , , , , , , , , , , , , , , , , , , , , , 86, 87, , , , , 157, 168, , , , , , -2, , , , 248, 259, , , , , , 89, 90, , , , , , , , , 120, 131, , , , , , , -87, , -39, , , -209, , , , , -39, -9, , 2, , , , , 12, , , , -162, 52, 87, , , , , , , , , , , -83, -82, , , 188, , , , , , , , 19, , , , 188, 189, , , , , 239, , 249, , , 273, , , 317, , , , , , 381, , 443, , , , , 523, , , , , , , 634, , , , , , , , , , , 464, 465, 745, , , , , , , , , , , 564, 855, 866, , , 696, 697, 987, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 997, 1008, , , , , , , , 1018, , , , 1058, , , , , , , , , , , , , , , 1058, 1059, , , , , , , , , , 1109, , , , , 1109, 1110, , 1170, , , , , , , , , , , , , , , , , , , 988, 1001, , , 1170, 1171, , , , , 1241, , , , , , , 1071, 889, 1191, 1202, 1381, 1416, 1562, 1586, 1621, 1641, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 1424, 1471, , 1472, , , , , , , 1302, 1472, , , , , , , , , , , , , , , , , , 1302, 1303, , , 1472, 1473, , 1553, , , , , , , , , , , , , 1336, 1383, 1554, 1603, , , , , 1603, 1613, 1624, , , , 1454, , 1455, 1755, , , , , , , , , 1585, , 1755, 1775, 1786, , , , , , 1786, 1816, 1827, , , 1609, 1610, 1615, 1657, 1887, 1717, 1718, , 2028, , , , , , , , , , , , 1858, , , , , , , , , , , , , , , , 1688, , , 1888, 1898, 1909, , , , , , , 1909, 2060, , , , , , , , , , , , , , , , , , , , , , , , , , , 2201, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 2031, 2362, , , , , , , , , , , , , , , , , , , , , , , , , , , , 2362, 2363, 2365, , 2148, 2195, 2196, , 2201, , , , , 2202, 2421, , , , , , , 2251, 2252, , , 2421, 2423, 2433, 2440, , , , , , , , , 2441, , 2443, , 2614, , , , , , , 2614, 2615, 2616, 2666, 2675, , , , 2457, 2458, 2463, 2506, , , , , 2334, 2336, 2337, , 2167, 2168, , 2334, , 2342, , , 2343, , , , 2173, , 2343, 2393, 2403, 2414, , , , 2196, 2197, 2202, 2245, , , 2075, 2076, 1892, , 2242, 2617, , , , , , , , , , , , , , 2618, 2619, 2689, 2698, , 2849, , , 2679, , , 2999, 3010, , 2824, 3170, 3181, 3011, , 2824, 3181, 3192, 2974, 2975, 2980, 3022, 3023, , 3032, 3051, 3070, 2901, 3271, , 3272, 3282, 3292, 3302, 3342, 3172, 3353, 3387, 3523, 3533, 3534, 3904, 3904, 3905, , 3687, 3865, 3866, 3901, 4090, 4125, 4324, 4329, 4339, 4349, 4359, 4364, 4369, 4559, 4614, , , , 4445, 4825, , 4607, 4608, 4614, 4655, 4842, 4672, 4672, 4674, 4684, 4691, 4695, , , 4478, 4525, 4760, 4770, 4780, 4591, 4980, 4981, 4991, 4992, 5372, 5382, 5212, 4994, 4995, 5042, 5223, 5233, 5242, 5473, 5303, 5133, 5131, 5132, 5134, 5144, 5153, 5163, 5164, 5166, 5167, 5176, 5187, 5017, 4848, 4893, 4721, 4889, 4948, 4947, 4958, 4969, 4979, 4989, 5016, 4847, 4674, 5077, 4904, 5142, 4968, 4969, 5393, 5175, 5389, 5390, 5391, 5580, 5614, 5615, 5814, 5848, 6098, 6103, , , , 5933, 5934, 6009, 6094, 6090, 6124, 6135, 6145, 5970, 6406, 6236, 6066, 6067, 6071, 5901, 6127, 6137, 6147, 6157, 5982, 6428, 6258, 6259, 6276, 6282, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 6282, 6283, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 6284, 6287, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 6288, 6288
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
                text: 'oled-bench-6c-31o-30ts-baking-maint best soft score statistic'
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
  chart_bestScoreProblemStatisticChart2_3c8b2.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart2_3c8b2.resize();
});
