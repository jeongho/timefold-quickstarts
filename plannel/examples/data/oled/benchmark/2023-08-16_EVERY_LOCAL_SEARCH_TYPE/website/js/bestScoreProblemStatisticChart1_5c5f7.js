
var chart_bestScoreProblemStatisticChart1_5c5f7 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_5c5f7'), {
    type: 'line',
    data: {
        labels: [
            7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 101, 102, 104, 106, 107, 108, 110, 111, 112, 113, 120, 122, 123, 124, 125, 126, 128, 129, 130, 131, 132, 133, 134, 135, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 157, 158, 159, 163, 164, 165, 166, 168, 169, 170, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 187, 188, 190, 192, 193, 195, 197, 198, 199, 201, 203, 204, 205, 208, 211, 213, 216, 217, 219, 220, 221, 222, 224, 228, 229, 232, 234, 236, 238, 239, 241, 245, 246, 247, 248, 250, 251, 252, 254, 258, 259, 260, 261, 263, 264, 266, 273, 276, 277, 278, 279, 280, 287, 290, 293, 294, 296, 297, 299, 300, 301, 302, 309, 311, 312, 314, 317, 320, 326, 329, 331, 333, 343, 352, 355, 356, 361, 367, 368, 369, 382, 388, 392, 393, 405, 406, 413, 414, 415, 416, 418, 419, 421, 422, 423, 424, 430, 434, 435, 436, 439, 445, 447, 454, 458, 460, 462, 469, 470, 479, 483, 486, 488, 489, 492, 494, 495, 496, 498, 503, 507, 526, 529, 530, 537, 538, 545, 560, 572, 576, 577, 589, 596, 617, 618, 619, 625, 626, 627, 628, 635, 636, 638, 639, 640, 641, 646, 661, 668, 704, 711, 713, 717, 719, 725, 730, 731, 736, 739, 740, 742, 748, 750, 751, 752, 754, 772, 775, 782, 791, 803, 805, 807, 811, 815, 818, 836, 837, 839, 840, 845, 854, 862, 863, 865, 882, 883, 884, 887, 888, 890, 892, 896, 899, 921, 956, 959, 961, 968, 972, 985, 989, 992, 1026, 1033, 1038, 1048, 1050, 1056, 1066, 1076, 1080, 1081, 1082, 1125, 1137, 1138, 1139, 1140, 1145, 1148, 1149, 1151, 1152, 1154, 1155, 1157, 1194, 1197, 1204, 1208, 1243, 1258, 1263, 1270, 1274, 1281, 1286, 1288, 1292, 1329, 1331, 1339, 1347, 1384, 1386, 1387, 1399, 1407, 1417, 1430, 1436, 1441, 1467, 1498, 1511, 1521, 1523, 1550, 1551, 1560, 1561, 1562, 1580, 1592, 1622, 1629, 1644, 1654, 1656, 1689, 1718, 1730, 1788, 1790, 1793, 1794, 1801, 1802, 1830, 1832, 1841, 1842, 1866, 1868, 1891, 1903, 1904, 1910, 1919, 1929, 1949, 1972, 1998, 2015, 2019, 2022, 2034, 2036, 2047, 2066, 2077, 2089, 2093, 2094, 2100, 2101, 2114, 2120, 2148, 2155, 2159, 2171, 2189, 2219, 2247, 2262, 2275, 2281, 2308, 2322, 2346, 2381, 2406, 2411, 2415, 2421, 2452, 2511, 2515, 2534, 2535, 2537, 2609, 2614, 2628, 2644, 2646, 2655, 2672, 2744, 2751, 2761, 2777, 2840, 2849, 2853, 2899, 2929, 2936, 2947, 2948, 2973, 2992, 3026, 3053, 3054, 3059, 3070, 3098, 3102, 3107, 3125, 3147, 3196, 3207, 3252, 3292, 3339, 3341, 3346, 3359, 3383, 3387, 3389, 3420, 3439, 3458, 3475, 3477, 3493, 3509, 3588, 3599, 3609, 3649, 3661, 3679, 3700, 3701, 3702, 3703, 3704, 3708, 3710, 3738, 3759, 3780, 3804, 3807, 3821, 3823, 3824, 3886, 3907, 3950, 3962, 3971, 3993, 4016, 4019, 4089, 4278, 4292, 4298, 4362, 4420, 4480, 4487, 4492, 4502, 4530, 4531, 4540, 4544, 4592, 4594, 4667, 4749, 4817, 4834, 5025, 5026, 5042, 5073, 5088, 5149, 5150, 5152, 5153, 5190, 5319, 5466, 5516, 5560, 5575, 5592, 5622, 5656, 5662, 5713, 5776, 5824, 5830, 5843, 5849, 5882, 5906, 5939, 5957, 5999, 6025, 6054, 6058, 6277, 6339, 6374, 6406, 6408, 6458, 6522, 6535, 6569, 6576, 6698, 6763, 6793, 6797, 6882, 6893, 6894, 6895, 6897, 6901, 6932, 6963, 7208, 7245, 7332, 7384, 7562, 7595, 7987, 8023, 8057, 8171, 8202, 8239, 8241, 8242, 8243, 8272, 8353, 8410, 8510, 8511, 8819, 8855, 8931, 8991, 9012, 9048, 9125, 9203, 9245, 9284, 9299, 9345, 9616, 9681, 9729, 9738, 9743, 9778, 9817, 9862, 10157, 10282, 10323, 10337, 10365, 10452, 10468, 10496, 10526, 10527, 10528, 10580, 10623, 10663, 10858, 10955, 11178, 11225, 11236, 11319, 11463, 11647, 11694, 11739, 11836, 11888, 11959, 11987, 11993, 12015, 12141, 12170, 12193, 12216, 12249, 12405, 12505, 12714, 12831, 12913, 12962, 12988, 13018, 13097, 13288, 13524, 13578, 13631, 13682, 13721, 13797, 13897, 13932, 13939, 14024, 14088, 14272, 14348, 14405, 14466, 14507, 14511, 14587, 14589, 14630, 15058, 15062, 15069, 15122, 15149, 15165, 15316, 15438, 15504, 15788, 15898, 15990, 16391, 16411, 16422, 16486, 16544, 16549, 16738, 17004, 17048, 17125, 17193, 17295, 17317, 17441, 17447, 17518, 17557, 17873, 17939, 18474, 18481, 18495, 18688, 18860, 18866, 19158, 19265, 19325, 19454, 19519, 19578, 20451, 20510, 20635, 20757, 20763, 20840, 20899, 21025, 21079, 21209, 21272, 21594, 21708, 22057, 22121, 22319, 22521, 22860, 23091, 23170, 23283, 23506, 23544, 23557, 23674, 23678, 23748, 23818, 24257, 24331, 24368, 24398, 24630, 24711, 24847, 25090, 25173, 25350, 25588, 26336, 26695, 26717, 26867, 27258, 27269, 27333, 27641, 27720, 27849, 27860, 28456, 28491, 29054, 29307, 29469, 29617, 29859, 30372, 30877, 31060, 31332, 31760, 31918, 32087, 32288, 32299, 32591, 32602, 32688, 32703, 33045, 33369, 33378, 34812, 34926, 34962, 35575, 35648, 36085, 36167, 36351, 36873, 37594, 37763, 37878, 37904, 37906, 38332, 39228, 39229, 39230, 39241, 39406, 39949, 39983, 40385, 40399, 40563, 40733, 41255, 41505, 41600, 41982, 41991, 42458, 42539, 42673, 42704, 42705, 42706, 42845, 43131, 43468, 43621, 44818, 44886, 45439, 45621, 46087, 46175, 46368, 46743, 47323, 47338, 47499, 47683, 48268, 48934, 49079, 49425, 50667, 50755, 51176, 51239, 51276, 51525, 51610, 52084, 52176, 52183, 52357, 52360, 54181, 54546, 55632, 55732, 56378, 56389, 57175, 57282, 57313, 57316, 57317, 58303, 58720, 60187, 60387, 60592, 60604, 60630, 60692, 61824, 62508, 62587, 62775, 63733, 63759, 63830, 63902, 65903, 65936, 66011, 66012, 66039, 66134, 66290, 66435, 66932, 68340, 68354, 70427, 70471, 70472, 71190, 71301, 71370, 71431, 71510, 72974, 73795, 74208, 74693, 74846, 75377, 76077, 76720, 77651, 77757, 77856, 78165, 78359, 79517, 79533, 79550, 79608, 79830, 80765, 80821, 82044, 82052, 83310, 83624, 83672, 84237, 84445, 85238, 85978, 86153, 86291, 86622, 88730, 89163, 89381, 89811, 91436, 92424, 93906, 93946, 94013, 94476, 95058, 99754, 100583, 101217, 101238, 102370, 102713, 105978, 106900, 107577, 109204, 109774, 110552, 110669, 112438, 112502, 113172, 114562, 114591, 118840, 119170, 125524, 126516, 130918, 130944, 133940, 133962, 138590, 138611, 146616, 147814, 151052, 151521, 152365, 153553, 158060, 158348, 158349, 158650, 162608, 165388, 166992, 167798, 168727, 168767, 175896, 175929, 177916, 179934, 188600, 189537, 195008, 206523, 206787, 208712, 208755, 212632, 212661, 220826, 221075, 224969, 225065, 225793, 231096, 231182, 233272, 233311, 235466, 235782, 237468, 240135, 240174, 249233, 251422, 262799, 262861, 265077, 265183, 274357, 274402, 285025, 285123, 289970, 290085, 299871, 300000
        ],
        datasets: [
            {
                  label: 'HILL_CLIMBING (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , -332, -330, -327, -326, -321, -318, -316, -314, -312, -311, -308, -307, -306, -304, -303, -301, -299, -298, -296, -295, -294, -291, -290, -289, -287, -286, -285, -284, -283, -282, -281, , -281, -280, -280, -278, -275, -274, -273, -272, -271, -270, -269, -269, , -268, -267, -265, -262, -261, -259, -259, -258, -258, -257, -255, -253, , -252, -252, -250, -250, -249, -248, -247, , -246, , -246, -245, -244, -242, , -242, -241, -241, -240, , -240, -239, -239, -238, -238, -237, , -236, -236, -235, -234, , , , , -234, -233, , , , -233, -232, , -232, -231, -231, -230, -229, -229, -228, , , -228, -227, -227, -225, -224, , , -223, -222, -221, -221, , -220, , -219, -218, -217, , , , , , -217, , -216, -216, , , , -215, -214, -213, -213, -212, , -211, , , -211, -210, -209, , , , -208, , -208, , -207, -207, -205, , , , , , -205, -204, -203, -203, -202, -202, -201, , , , , , , , , , , , , , , -201, , , , , -200, , , , , , , -200, -199, , , , , , , , , , , , , -199, , , -198, , -198, -197, -196, -195, , -195, -194, -194, -193, , -193, , -192, , -192, , -191, , -191, -190, -190, -189, -188, , -188, -187, -186, , , -185, , , , -184, , , -184, -183, -183, -182, -182, -181, , -181, , , -180, -180, , -179, -178, , , , , -178, -177, , -177, , -176, -175, , , , -175, -174, , , , , , , -174, -173, , , -173, , -172, -171, , -170, , , , -170, , , , , , -169, -168, , -168, , -167, -166, , , , , -166, , -165, , , , , -165, -164, , , -164, -163, , -162, , -162, , -161, , -161, -160, , , , -160, -159, , , -159, -158, -157, -157, , -156, , , , -156, -155, -155, -154, , , , , , , , , -154, -153, -152, , -152, , , -151, -151, , -150, -150, -149, , , -148, , , -148, -147, , , , , -147, -146, -145, , -145, -144, -143, , -142, , , -142, , -141, , , , , , , , , , , , , , -141, -140, , -139, , , -139, , , , , , , -138, , , , , , , , -138, , , -137, , , , , , -137, -136, , -136, -135, -134, , , , -133, , -133, , , , -132, , , , , , , , , , , , , -132, , -131, , , , , , -131, -130, , , , , -129, , , , -129, , , -128, , -127, , -127, -126, , , -126, , -125, , , , , , , , , , , , , -125, -124, , , , , , , , , , , , -124, -123, -122, , , , , , , , , -122, -121, , , , -121, , -120, , , , , -120, -119, , , , -118, , , -118, , , -117, , -117, -116, , , , , , , , -116, -115, , , , , , , , , , , , , , , , , , , , , , , -115, , , , -114, , , , , , , , , , , , , , -114, -113, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -113, , , , , , , -112, , , , -111, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -111, , , , , , , , , , , -110, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -110, , -109, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -109, , , , , , , , , , , -108, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -108, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -107, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -107, , , , , , , , , , , -106, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -106
                  ]
                }, 
{
                  label: 'TABU_SEARCH',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , , , , , -333, -332, , , -332, , , -331, , , , -331, , , , , -330, , -330, , , -329, , , , , , , , , , -329, , , -328, , , , -327, , , , , , , , , , , -327, , , , , -326, , , , , -325, , , , , , , , , , , , , , , , , , , , -325, , , , -324, , , , , , , , , , , -324, , , , , , , , -323, , -323, , , -322, , , , , , , -321, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -321, , , , , , , , , -320, , , -319, , , , , , , , , , , , -319, , , , , , -318, , , , , , , , , , , , , , , -318, , , , , , , -317, , -316, , , , , , , , -316, , , , , -315, , , -315, , -314, , -314, , -313, , -312, , -312, -311, , , , , , , , , , , , , , , , , , , , , -311, , , -310, , -310, , , -309, , , , , , , , , , -309, , -308, , -307, , , -307, , , -306, , , , , -306, , , , , , , , , -305, , -304, -304, -303, , , -303, , , , , , -302, , , , , , , -302, , , -301, , -301, , , -300, , , -300, -299, , , , , -299, , -298, , -298, , , , , , , , -297, , , , , , -297, , -296, , -295, , , , , -295, -294, -294, , , , -293, , , , , -293, , , , , , -292, , -292, , -291, , , -291, , , , -290, , , , , , , -290, , , , -289, , , -289, , -288, , -288, , , -287, , , , , , -287, -286, , -285, , , , , , , , -285, , , -284, , , , , , -284, , -283, , , , , -282, , -282, -281, , , -281, -280, , -280, , , , , , -279, , -278, , , , , , -278, -277, -277, , -276, , -275, , , , -275, , , -274, , , , , , , , , -274, -273, , , , -273, , -272, , , -272, , -271, , , , , -270, -270, , -269, , , -269, , , -268, , -267, , -266, , , -266, , , -265, , , , -264, -264, -263, -263, , -262, , , , , , -262, , , , , , , , , -261, -261, -260, , -260, , , , -259, -258, , , -257, -257, -256, , , -256, , -255, , , -255, , , -254, , , , , , , , , , , , -254, , , , , , , , -253, , -253, , -252, , , -252, , , -251, , , , -251, , , -250, -249, , -248, -248, -247, , -247, -246, -246, -245, , , , -245, -244, , , -244, , -243, , , , , , -243, -242, -241, -241, , , -240, -240, -239, -239, -238, -237, , -237, -236, , , , -236, -235, , , , -235, -234, -233, , -232, -231, -231, -230, -230, -229, , , -229, , , -228, , -228, -227, -226, -226, , -225, , -224, -223, , -223, , , , -222, -222, -221, -221, -220, , , -220, -219, -219, -218, -218, , -217, -216, , , , , , , , , , -216, -215, -215, , -214, -214, , -213, , -213, -212, -211, -210, -209, , -209, , , , , , , -208, -207, , , -206, , -205, , , -205, , -204, , , , , , , , -204, , , , -203, -203, , -202, , -201, -201, -200, , -199, -198, , , -197, -197, -196, , , -196, -195, , -195, , -194, -194, -193, -192, , -192, -191, -191, , -190, , , -190, , -189, -188, , , -188, -187, -187, -186, -186, -185, -185, , -184, , , -184, , -183, -182, -182, -181, , , -180, , -180, -179, -179, -178, -177, -177, , -176, -176, , , -175, -175, -174, , , , , -174, -173, -173, -172, -171, -170, -170, -169, , -169, -168, -168, , , , -167, -166, , -166, , -165, -165, , , -164, , -164, -163, , , , , -163, , , -162, , , , , -162, -161, , -161, , -160, -159, -159, -158, -157, , , -157, -156, , , , -155, , -155, -154, , , , -154, -153, -153, -152, -152, -151, , , -151, -150, -150, -149, , , -149, -148, , -148, , -147, -146, -146, -145, , -144, , , , -144, -143, , , -143, -142, , , , , , -142, -141, -141, , , -140, -140, , , , -139, , -138, , , -138, , , -137, -136, , -136, -135, , , , , , , -135, , , -134, -134, -133, -132, , , , -132, -131, -130, -130, -129, -129, -128, -128, , , , -127, , , , , , , -127, -126, -125, -125, -124, , , -123, -123, -122, -122, -121, -121, -120, -120, , , -119, -118, -118, , , -117, -117, -116, -116, -115, -115, , , -114, -114, -113, , , , , , , -113, , , , , , , , , , , , -112, -112, , , , , -111, , , -111, , , , , -110, -110, , , , , , , , , , , , , , -109, , , , , , -108, , , , , , , , , , , , , , , , , -108
                  ]
                }, 
{
                  label: 'LATE_ACCEPTANCE',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -330, , -328, -324, -321, -320, -317, -315, -314, -311, -309, -305, -303, -301, -300, -298, -295, -291, -289, -284, -283, -282, -281, -279, -278, , -277, -275, -274, , , -274, -272, -272, -270, -270, -269, -268, -267, -267, -266, -265, , , -265, -264, -264, -263, -262, , -260, -257, -255, , -255, , , -254, , -254, -252, -250, -248, -247, , -246, , , , , , -246, , , -245, , -244, , -242, -241, , , , , -241, -240, , , , , , -240, -239, -238, -237, -236, , -236, -235, , -235, , , , , , , , , , , , , , , -234, -234, , , , , , , , , , , -233, -232, -232, -230, -229, , -229, , -228, , -228, , -227, , , -225, -225, -224, , -224, -223, -222, , , -222, , -221, -220, , , , , , , , , , , , , , , , , , , -220, -219, -219, -218, -217, -217, , -216, -215, -215, -213, -213, , -212, , , , -210, , , -209, -209, -208, , -207, , , , , , , , , , , , , -207, -206, -206, , -205, -204, , , , , , , , , , , , , , , , , , , , , , , , , , -204, , , , -202, -202, , -201, -201, -199, , -198, -197, , , , , , -197, , , , , , , -196, , , -195, -193, -193, -192, , , , , , , , -192, -191, , , , , , , , , -191, , , -190, -190, -189, -188, , , , , , , , , , , -188, -187, -187, , , , , , , , -185, -184, -184, , , , , , -183, , , , , , , , , , , , , , , , , , -183, -182, -182, , , , , , , , , , , , , , , , , , , , , -181, -181, -180, , -180, , , , , , , -178, , , , , , , , , , , -178, , , , -177, -177, -176, , , , , , , , , , -176, , , , , , -175, -174, , -173, -173, -172, -172, -171, , , , , , , -171, , , , , , , , , , , , -170, -169, , , , -169, -168, , -167, , , , , -167, -166, , , , , , , , -166, -165, , , , , -165, -164, , , , , , -164, , , , -163, -163, , , -162, , , , , -162, -161, -160, -159, , , , , -159, , , , , , , -158, , , , , , , , , , , , , -158, , -157, , , -157, , -156, , -156, , , , , -155, -154, -154, -153, , , , , , , , , , , -153, , -152, -152, -151, -151, -150, -149, , , , , , , , , -149, -148, , , , , , , , , , , , , , , , , , , , -148, , -147, , , , , , , , , , , -147, -146, -146, -145, -145, , , , -144, , , , , -144, -143, , , -143, -142, , , , , , -141, , , , , , , , , -141, , , , , -140, -140, , -139, , -139, -138, -137, -137, -136, , , , , , , , , , , , , -136, , , -135, -135, -134, , , -134, -133, -132, , , , -131, , , , , , , -131, -130, , -130, , , -129, , , , , -129, , -128, , , -128, , -127, -127, -126, , , , , , -126, -125, , , , , , , , , , , , -125, -124, -124, , -123, -123, , , , -122, , , , , , , , , , , -122, , , -121, -121, -120, , -119, , , , -119, , -118, , , , , -118, , -117, , -117, -116, , -116, -115, , , -115, -114, , , , , , , , , -114, , , -113, , , , , -113, , , , , , -112, , , , , -111, , , , -111, , -110, , , , , , , , , , , , , , , , , -110, -109, , , , , , , , , , -109, , , , , , , -108, , , , , , , , , , , , , , , , , , , , , , , , , , -108, , , -107, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -107, -106, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -106, -105, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -105
                  ]
                }, 
{
                  label: 'GREAT_DELUGE',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -333, -330, -328, -326, -321, -320, -317, -315, -313, -309, -308, -304, -301, -301, -299, -297, -292, -289, -288, -284, -282, -282, -280, -279, -278, -277, , -274, , , -274, -273, -272, -271, -270, -270, -269, -267, , -267, -266, -265, , , -264, -264, -263, -262, , -261, -258, -256, -255, -255, , , -254, , -253, -252, -250, -247, -247, , -246, , , , , -246, , -245, , -244, -242, -241, , , -241, -240, , , -240, -239, -239, -238, -237, -236, , , -236, -235, , , -235, , , , , , , , , , , , , , , -234, -234, -233, -233, , , , , -232, , -231, , -231, -230, -227, , -227, -226, , -226, , , , , , , , , , -225, -224, -224, , , , , , -223, -223, -222, , , , -222, -221, -221, , -220, , , -218, , , , -218, -217, -216, -216, -215, , , , , , , , , , , , , , , , , , , , , , , -215, -214, -214, -213, -213, , -211, -210, -210, -209, -209, , , -208, -208, -207, -206, -205, -204, -203, , , , -203, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -202, -202, , -201, , , , , , , , , , , , , , , , , , , , , , , , , , , , , -201, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -200, -199, , -199, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -198, -197, -196, , , , , , , , -196, , -195, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -195, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -194, -193, , -193, -192, -191, , , , , , , , , , , , , , , , , -191, -190, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -189, -188, -187, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -187
                  ]
                }, 
{
                  label: 'VARIABLE_NEIGHBORHOOD_DESCENT',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , , , , , , , , , , , , , , , , , , , -333, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -332, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -332, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -331, , , , , -331, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -330, , , , , , , , , , , , , , , , , , , , , , , -329, -329, , , , , , , , , , , , , , , , , , -328, , , , , , , , , -328, , , , , , , , , , , , -327, , , , , , , , -327, , , , , , , , , , , , , , , -326, , , , , , , , -326, , , , , , , , , , , , , , , , , , , -325, , , , , , , , , -325, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -324, , , , , , -323, -323, , , , , , , -322, , , , , -322, , , , , , , , , , , , , , , , , , , , , -321, , , , , , -321, , , , , , , -320, , , , -320, , , , , , -319, , , , , , , , , , -318, , , -318, , , , , , -317, , -317, , , , , , , , , , , -316, , , , , , , -316, , , , , , , , , , , , -315, , -315, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -314, , , , -314, , , , , , , , , , -313, -313, , , -312, -312, , , , -311, , , , , , , -311, , , , -310, -310, , , , , , , , , , -309, , , , , , , -309, , , , , , , , , , , , , , , , , , , , , , , , -308, -308, , , , , , , , , -307, , , , , , , , , , , , , , , , , , , , , , , -307, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -306, , , , , , -306, , , , , , , , , -305, , -305, , , , , , , , -304, , , , -304, , , , , -303, , , , -303, -302, , , , , , , , -302, , , , -301, , , , , -301, , -300, , , , , , , , -300, , , , , -299, , , -299, , , , , , , , , , , , , , -298, , -298, , , -297, -297, , , , , , , , -296, , , , , , , , , , -295, -295, , , , , , , , , , , , -294, -294, , , , -293, -293, -292, -292, , , , , , , , , , , , , -291, -291, , , , , , , , , -290, -290, , -289, , , -288, -288, -287, -287, , , , , , , , -286, , , -285, , -285, , , , , , , , , , -284, , , , -284, , , -283, -283, , , , , , , , -282, -282, , , , , -281, -281, , , -280, , -280, , , , , -279, , -279, -278, -278, , , -277, -277, , , , , , -276, -276, , , , -275, -275, , , , -274, -274, , -273, , -273, -272, , -272, -271, , , -271, , , -270, -270, -269, -269, -268, -268, , , , , , , , -267, -267, , , , , , , , , , -266, -266, , , -265, -265, -264, -264, -263, -263, , , , , , -262, -262, , , , , , , , , -261, -261, , , , -260, -260, , , , , , , -259, -259, , , , -258, -258, -257, -257, -256, -256, , -255, -254, -254, -253, -253, -252, -252, -251, -251, -250, -250, , , -249, -249, -248, -248, , -247, -247, , -246, -246, -245, -245, , , -244, -244, -243, -242, -242, -241, -241, -240, -240, -239, -239, -238, -238, , -237, -237, -236, -236, -235, , -235, -234, -234, -233, -233, -232, -232, -231, -231, -230, -230, -229, -229, -228, -228, -227, -227
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
                text: 'oled-bench-6c-31o-60ts-baking-maint best medium score statistic'
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
  chart_bestScoreProblemStatisticChart1_5c5f7.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_5c5f7.resize();
});