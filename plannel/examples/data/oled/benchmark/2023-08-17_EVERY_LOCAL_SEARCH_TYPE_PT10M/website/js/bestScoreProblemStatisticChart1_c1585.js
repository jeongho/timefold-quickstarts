
var chart_bestScoreProblemStatisticChart1_c1585 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_c1585'), {
    type: 'line',
    data: {
        labels: [
            3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 53, 54, 55, 56, 57, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 95, 96, 97, 99, 100, 101, 102, 103, 106, 107, 109, 110, 111, 112, 114, 115, 116, 117, 118, 119, 120, 123, 129, 130, 131, 132, 137, 138, 139, 141, 143, 145, 149, 153, 154, 159, 160, 162, 163, 164, 165, 166, 167, 168, 170, 171, 172, 173, 174, 175, 177, 178, 180, 182, 183, 185, 186, 188, 189, 190, 195, 196, 197, 198, 199, 200, 201, 208, 209, 212, 214, 217, 219, 222, 223, 225, 232, 235, 240, 241, 243, 244, 245, 246, 254, 257, 260, 261, 262, 263, 265, 269, 270, 273, 274, 276, 286, 288, 290, 301, 303, 305, 306, 308, 309, 312, 314, 315, 317, 320, 324, 325, 326, 327, 331, 333, 335, 336, 338, 349, 350, 354, 362, 364, 367, 374, 375, 391, 397, 398, 399, 400, 401, 402, 403, 404, 415, 421, 422, 432, 437, 438, 439, 442, 443, 444, 445, 447, 449, 460, 461, 463, 465, 471, 485, 494, 495, 506, 511, 512, 513, 515, 521, 533, 537, 538, 539, 542, 547, 548, 556, 557, 561, 572, 575, 580, 584, 593, 603, 604, 606, 607, 617, 621, 632, 634, 641, 646, 647, 656, 671, 682, 683, 696, 700, 712, 713, 716, 717, 718, 728, 741, 747, 751, 755, 757, 758, 763, 776, 785, 788, 792, 793, 797, 803, 804, 820, 823, 830, 832, 838, 856, 859, 860, 867, 869, 875, 905, 906, 909, 922, 930, 933, 938, 939, 955, 959, 962, 972, 984, 987, 989, 1003, 1014, 1023, 1036, 1042, 1048, 1051, 1054, 1058, 1061, 1072, 1079, 1086, 1087, 1093, 1101, 1115, 1122, 1123, 1128, 1137, 1143, 1144, 1157, 1160, 1166, 1170, 1171, 1186, 1191, 1214, 1232, 1239, 1275, 1278, 1282, 1341, 1349, 1355, 1378, 1379, 1384, 1388, 1397, 1399, 1406, 1407, 1410, 1426, 1427, 1432, 1452, 1454, 1465, 1472, 1478, 1483, 1503, 1512, 1513, 1521, 1523, 1527, 1548, 1550, 1557, 1576, 1586, 1593, 1621, 1635, 1644, 1645, 1646, 1647, 1657, 1676, 1678, 1679, 1686, 1694, 1695, 1696, 1709, 1727, 1733, 1735, 1736, 1746, 1755, 1764, 1769, 1787, 1802, 1835, 1842, 1882, 1893, 1902, 1912, 1949, 1959, 1989, 1993, 1999, 2000, 2010, 2081, 2136, 2146, 2219, 2220, 2224, 2235, 2245, 2249, 2250, 2251, 2331, 2332, 2399, 2446, 2454, 2455, 2456, 2485, 2487, 2511, 2520, 2523, 2561, 2571, 2574, 2684, 2692, 2736, 2748, 2767, 2809, 2810, 2818, 2820, 2867, 2872, 2897, 2911, 2912, 2942, 2949, 2954, 2955, 2956, 2957, 2970, 3050, 3072, 3102, 3117, 3134, 3201, 3217, 3310, 3326, 3376, 3391, 3406, 3473, 3500, 3501, 3522, 3571, 3606, 3614, 3615, 3648, 3688, 3690, 3705, 3815, 3911, 3928, 3944, 3962, 4013, 4032, 4048, 4089, 4101, 4128, 4182, 4292, 4305, 4323, 4347, 4358, 4371, 4395, 4413, 4425, 4449, 4452, 4453, 4487, 4496, 4507, 4526, 4584, 4681, 4731, 4737, 4750, 4756, 4775, 4794, 4931, 4944, 5011, 5031, 5073, 5076, 5092, 5130, 5131, 5143, 5152, 5158, 5170, 5172, 5253, 5294, 5418, 5421, 5460, 5495, 5529, 5613, 5632, 5697, 5720, 5773, 5788, 5882, 5886, 5921, 5949, 5993, 6024, 6084, 6090, 6126, 6161, 6180, 6202, 6209, 6225, 6346, 6370, 6406, 6443, 6468, 6481, 6492, 6517, 6531, 6571, 6627, 6684, 6697, 6741, 6832, 6858, 6907, 6935, 6956, 6960, 7106, 7145, 7174, 7205, 7327, 7392, 7422, 7485, 7561, 7706, 7776, 7802, 7821, 7878, 7936, 8015, 8041, 8069, 8107, 8124, 8180, 8232, 8288, 8343, 8370, 8397, 8479, 8613, 8695, 8717, 8771, 8780, 8806, 8917, 8944, 8971, 8987, 9001, 9024, 9030, 9432, 9460, 9493, 9518, 9574, 9689, 9693, 9780, 9807, 9921, 9927, 10160, 10189, 10280, 10370, 10415, 10521, 10615, 10647, 10758, 10774, 10837, 10853, 10869, 10901, 11092, 11116, 11124, 11176, 11237, 11256, 11349, 11445, 11477, 11544, 11641, 11767, 11973, 11994, 12146, 12217, 12424, 12523, 12555, 12561, 12571, 12595, 13196, 13298, 13367, 13434, 13539, 13674, 13675, 13721, 13747, 13769, 13953, 14027, 14029, 14034, 14129, 14130, 14131, 14136, 14320, 14334, 14341, 14392, 14463, 14646, 14665, 14682, 14717, 14865, 15004, 15413, 15633, 15955, 16175, 16212, 16587, 16593, 16980, 16993, 17181, 17607, 17611, 17647, 17877, 17904, 17923, 18069, 18149, 18223, 18282, 18459, 18570, 18606, 18635, 18904, 18977, 19013, 19085, 19276, 19284, 19371, 19422, 20130, 20274, 20352, 20513, 20554, 20593, 20676, 20720, 20842, 21138, 21139, 21176, 21259, 21523, 21819, 21871, 21959, 22347, 22570, 22608, 22827, 22951, 22955, 22993, 23204, 23244, 23322, 23755, 24214, 24221, 24683, 24728, 25089, 25268, 25329, 25376, 26155, 26207, 26576, 26652, 26668, 26742, 26758, 26804, 27151, 27674, 27852, 27899, 27942, 28452, 28786, 28792, 28859, 28905, 28945, 29075, 29291, 29732, 29741, 29764, 29865, 29943, 30910, 30923, 31199, 31292, 31899, 31922, 31999, 32278, 32462, 32492, 32566, 33274, 33552, 33582, 33598, 33649, 33796, 33967, 34012, 34057, 34191, 34279, 34776, 34840, 34847, 34914, 35914, 35938, 36311, 36593, 36836, 36929, 37265, 37584, 37866, 38028, 38110, 38783, 38975, 39067, 39252, 39974, 40408, 40444, 40453, 41041, 41053, 41083, 41291, 41541, 41746, 41750, 42378, 42536, 43585, 43803, 43879, 44219, 44713, 44864, 46286, 46685, 46983, 47765, 47801, 48291, 48342, 49105, 51141, 51462, 54500, 55580, 55870, 57269, 57607, 58311, 58325, 60488, 60656, 64370, 66080, 66584, 66589, 66606, 68115, 68126, 70449, 70460, 70503, 72723, 74390, 74988, 76608, 76854, 77062, 77918, 80182, 80332, 80333, 80490, 83857, 84677, 85538, 85559, 89140, 89158, 95513, 95975, 97711, 98728, 102024, 104261, 104394, 105340, 105361, 107246, 107261, 111167, 111296, 113271, 113323, 113389, 116336, 116377, 117409, 117429, 118503, 119481, 120560, 120576, 124924, 126047, 131601, 131633, 132745, 132805, 137363, 137385, 142025, 142089, 143310, 144505, 144566, 149328, 149351, 151787, 154274, 154298, 155569, 156828, 159380, 159429, 162033, 162062, 163384, 164691, 172653, 172958, 175662, 175741, 179821, 180215, 188471, 188869, 190289, 190314, 191779, 193235, 193370, 194680, 195392, 201229, 201249, 204928, 204929, 204931, 207203, 207234, 208756, 208838, 211071, 211072, 211869, 211934, 214999, 216052, 226809, 229446, 229449, 229716, 230612, 230613, 231872, 231960, 236930, 238119, 238128, 238129, 238130, 238131, 238132, 238133, 241459, 243178, 246389, 246559, 257886, 257960, 258539, 260023, 261467, 262336, 262596, 266827, 267291, 269062, 270248, 270249, 270250, 271121, 271146, 273857, 273860, 274540, 274616, 281871, 284067, 286871, 287551, 287709, 293394, 293493, 296348, 298612, 298822, 301566, 301569, 302862, 306787, 307093, 309628, 310197, 310232, 311169, 315054, 315057, 315058, 317813, 317972, 319751, 319931, 321729, 321754, 326853, 327210, 328743, 330121, 332045, 332647, 332648, 338319, 338607, 340730, 341475, 341576, 343460, 343552, 348032, 349254, 349347, 349525, 353254, 354060, 359075, 359931, 360052, 360085, 363321, 363741, 364237, 365575, 367496, 372485, 373253, 373254, 373332, 378730, 382474, 382834, 386964, 387117, 391313, 391757, 393271, 394787, 398954, 398955, 398956, 404729, 405265, 407473, 409083, 410535, 411519, 412477, 412584, 412658, 412660, 413479, 414546, 415795, 415801, 416078, 420037, 421028, 421331, 421336, 422003, 426025, 433276, 433584, 436660, 437067, 446021, 446060, 446695, 447237, 448158, 450662, 450791, 450956, 451111, 454561, 456961, 457007, 463125, 463283, 463394, 464621, 465147, 465468, 465570, 467301, 469792, 470351, 470882, 470884, 475238, 475768, 477153, 477362, 479439, 481105, 485279, 486109, 486594, 486865, 491553, 491622, 491690, 493351, 498077, 498546, 500231, 500244, 508375, 508864, 514300, 514310, 520159, 520263, 525958, 526510, 527936, 528649, 535113, 535149, 537213, 537656, 539507, 539538, 550654, 551336, 567119, 567186, 583251, 586136, 593225, 600000
        ],
        datasets: [
            {
                  label: 'HILL_CLIMBING',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -330, -326, -318, -312, -307, -302, -297, -292, -289, -285, -284, -281, -280, -275, -273, -270, -269, -265, -261, -259, -258, -254, -252, -250, -248, -246, -246, -243, -242, -241, -240, -239, -238, -237, -236, -234, -233, -233, -232, , -232, -231, -230, -229, -228, -228, -227, -225, -224, -222, -221, -220, -218, -217, , -217, -216, -216, , , , , , -214, -213, , -213, -212, -211, -211, -210, -209, -208, -208, -207, -205, , -205, -204, , -203, -203, -202, -201, , , , , , , , -201, , , -200, , -200, -199, , , , , , , , , -199, -198, , , , -197, -196, -195, -195, -194, -194, , , -193, , -193, -192, -192, -191, , , , , -191, -190, -190, , , -188, , -188, -186, , -185, -184, -184, -183, -182, , -182, -181, -181, -180, -180, -178, , , -178, -177, -177, -176, -175, , , , , -175, -174, , -174, , -173, , -173, -171, -170, , , , , , -170, , , -168, -168, -167, -166, -166, , -165, , -165, -164, , , , , -164, -163, -162, , -162, -161, , , -161, -160, , -160, -159, , , , -159, -157, -157, , -156, , -156, -155, , , , -155, -154, , , , , , -154, -153, -152, -152, , -151, -151, -150, , , , -150, -149, , -148, -148, -147, -147, , , -146, -145, , , -145, -144, -143, , , -142, -142, , -141, , , , , , , , , , , , -141, -140, , , -139, , , , -139, , -138, , , , , , -138, -137, , , -137, , , , -136, -136, -135, , -134, -133, -133, , , -132, , , , , , , , , , , , -132, -131, , , , , , , , , , -131, -130, , -129, , , , , , , -129, , , , , -128, , , -127, -127, -126, , , , , , -126, , -125, , , , , , , -125, -124, , , , , -124, , -123, -122, , , , , , -122, -121, , , , -121, -120, , , , , , , -120, -119, , -118, , , , , , , , , , , -118, , , , , , , , -117, , , -117, -116, , , , , , -116, -115, , , , , , , , , , , , , , , , -115, , , , , , -114, , , , , , , , , -114, , -113, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -113, , , , , , , , , , , , , -112, , , -111, , , , , , , , , , , , , , , , , , , , , , , , , , , -111, , , , , , -110, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -110, , , -109, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -109, , , , , , -108, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -108, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -107, , , , , , , , , , , , , , , , , , , , , , -107, , , , , , , , , , , -106, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -106
                  ]
                }, 
{
                  label: 'TABU_SEARCH',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -333, -332, , -332, , -331, , -331, , -330, -330, , -329, , , , , -329, , -328, , -327, , , , , , -327, , -326, , , -325, , , , , , , , , -325, -324, , , , , , -324, , , , -323, , -323, , -322, , , -321, , , , , , , , , , , , , , , , , , -321, , , , , , , , -320, , , -319, , , , , , , , , -319, , , , , -318, , , , , , -318, , , , , -317, -316, , -316, , -315, -315, , , , -314, , , , , -314, , , -313, , , -312, , , , -312, , -311, , , , , , , , , , , , -311, , -310, -310, , , -309, , -309, , -308, , -307, , , , -307, , , , -306, , , , , , , , , -306, , -305, , , -304, , , , , -304, , -303, , , , , , , , , , -303, , , , -302, , -302, , -301, , , , , , , , -301, -300, , -300, -299, , , , , -299, , , , -298, -298, , , , -297, , , , , , , , , -297, -296, , , , , , , , -295, , , -295, -294, -294, , , , , -293, -293, -292, , , -292, -291, , , -291, -290, , , , , , -290, , , , -289, , , , -289, , -288, , , , -288, , , , -287, , , , -287, -286, -285, , , , , , , , , , , -285, , -284, , , , -284, -283, , , -282, , -282, -281, , -281, , -280, , -280, , , -279, , -278, , , , , -278, , -277, , -277, , , , -276, -275, , , -275, -274, , , , -274, -273, , , , , , , -273, , -272, , , , , -272, , , , -271, , , , -270, -270, , , -269, , -269, -268, , -267, -266, , , , , , , , , , -266, , , -265, , -264, , , -264, -263, -263, -262, , , , , -262, -261, -261, -260, -260, -259, -258, -257, , , -257, -256, , -256, -255, , , , -255, -254, , , , , , , , , , , , -254, , , , -253, , , , -253, -252, , -252, , -251, , , -251, , -250, , -249, -248, , , -248, , , -247, , -247, -246, -246, -245, -245, -244, -244, -243, -243, -242, -241, , , , -241, , -240, , , , -240, , -239, , -239, -238, -237, , -237, -236, -236, -235, , , , , -235, -234, , -233, , -232, -231, , -231, , , -230, , -230, -229, , -229, , -228, , -228, -227, -226, -226, , -225, -224, -223, , -223, , -222, , -222, , , -221, -221, -220, , -220, -219, , -219, -218, -218, -217, -216, , , , , , -216, -215, , , -215, , , -214, -214, , -213, -213, , , -212, -211, , -210, -209, , -209, , , , , -208, -207, -206, -205, , , , -205, -204, , , , , , -204, , -203, -203, , -202, , -201, -201, -200, , -199, -198, -197, , -197, -196, , , -196, -195, , , -195, , -194, -194, , , -193, , -192, -192, -191, , -191, -190, , -190, -189, -188, , , -188, -187, -187, -186, , -186, -185, -185, , -184, -184, , -183, -182, -182, , -181, , , -180, -180, -179, -179, -178, -177, , -177, , -176, -176, -175, , , -175, , -174, -174, -173, -173, -172, -171, , , , -170, , -170, -169, , , , , , , -169, , , -168, -168, , , -167, -166, -166, -165, , -165, -164, -164, -163, , , -163, , -162, , , -162, -161, , , -161, -160, -159, , -159, -158, -157, , , -157, -156, -155, -155, , , -154, , -154, -153, , -153, -152, -152, , -151, , , -151, -150, -150, -149, , , , -149, -148, -148, -147, , -146, -146, -145, -144, , , , -144, -143, , , -143, -142, , , -142, , -141, , -141, -140, -140, , , -139, -138, , , , -138, -137, -136, -136, -135, , , , , , , , -135, -134, , -134, , -133, -132, , , -132, -131, , , , , -130, -130, -129, -129, -128, -128, , , -127, , , , -127, -126, -125, -125, -124, -123, , , -123, -122, -122, -121, -121, -120, , , -120, , , -119, -118, , , , , -118, , , -117, -117, -116, -116, -115, -115, , , -114, -114, -113, , , -113, , , , , , , , , , -112, -112, , , , , , , -111, -111, , , , , -110, -110, , , , , , , , , , , , , -109, , -108, , , , , , , , , , , -108, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -107, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -107
                  ]
                }, 
{
                  label: 'LATE_ACCEPTANCE (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -333, -328, -321, -317, -314, -308, -301, -298, -291, -285, -282, -279, -277, -274, -274, -272, -270, -269, -267, -265, -265, -264, -262, -261, -256, -255, -254, -253, -248, -247, -246, , -246, -244, -241, , -241, -240, -239, -237, -236, -235, , -235, , , , , , , -234, , , , -232, -229, -229, , -228, -228, -227, -226, -225, , -224, -224, -222, , -222, -220, , , , , , , , , , -220, -219, -218, -217, -217, -216, -215, -215, -213, -212, , -210, -209, -208, -207, , , , , , , , , -207, -206, -206, -204, , , , , , , , , , , , , , , , , , , , -204, -202, -202, -201, -201, -199, , , -197, , , , , , , , , -197, , , , , , -196, , -195, -193, -192, , , , , , , , -192, -191, , , , , , , , , , , , , -191, , , , -190, -189, -188, , , , , , , , , , , -188, -187, -187, , , , , , , -185, -184, , , , , , , -183, , , , , , , , , , , -183, -182, , , , , , , , , , , , , , , , , , , , , , , , , , -181, -180, , , , , , , , -180, -178, , , , , , , , , -178, -177, -177, -176, , , , , , , , , -176, , , , -175, -174, -173, -173, , -172, -171, , , , , , , -171, , , , , , , , , , , , -169, , , , -169, -168, -167, , , -167, -166, , , , , -166, -165, , -165, -164, , , , , , -164, , , -163, , -163, , , , , -162, , , , , , , , , -162, -160, -159, , , , , , , -159, , , , , , -158, , , , , -158, , , -157, , , , -157, , , -156, , -156, , , , , -155, -154, -153, , , , , , , , , , -153, -152, -152, -151, -150, -149, , , , , , -149, -148, , , , , , , , , , , , , , , , , , , , , , -148, -147, , , , , , , , -147, , , -146, -145, -145, , , -144, , -144, , -143, , , , -143, -142, , -141, , , , , -141, , , , , -140, , -140, , -139, , , -139, -137, -137, -136, , , , , , , , , , , , , , , -136, -135, -134, , -134, , -133, -132, , , , , -131, , , -131, -130, , , , , -130, -129, , , , , -129, , -128, , , -128, , -127, -126, , , , , , , -126, , -125, , , , , , , , , -125, , -124, , -124, , -123, -123, , , , -122, , , , , , , , , , -122, -121, -121, -120, , , -119, , , -119, -118, , , , , , -118, -117, , , -117, , , -116, , , , -116, -115, , , , , -115, -114, , , , , -114, -113, , , , , , , -113, , , , , , -112, , , , -111, , , , , , , , -111, , -110, , , , , , , , , , , , , , , , , -110, -109, , , , , -109, , , , , , , , , , , , , , -108, , , , , , , , , , , , , , , , , , , , , , , , , -108, , -107, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -107, -106, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -106, -105, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -105
                  ]
                }, 
{
                  label: 'GREAT_DELUGE',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -330, -326, -320, -317, -312, -305, -299, -292, -286, -282, -279, -278, -274, , -274, -271, -270, -268, -267, -265, -265, -264, -263, -262, -257, -255, -255, -254, -252, -247, -246, , , -246, -245, -242, -241, -240, -239, -236, -236, -235, -235, , , , , , , , , , , , -233, -233, , -231, -231, -227, -226, -226, , , , , -225, -224, , -223, -222, -222, -221, -220, , -218, -216, -216, -215, , , , , , , , , , , , , , -215, -214, -213, -210, , -210, -209, -209, , , -208, -207, -204, , , -203, -203, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -202, -201, , , , , , , , , , , , , , , , , , , , , , , -201, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -199, -199, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -197, , -196, , , , , , , -196, , -195, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -195, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -194, -193, , , , , , , , -193, -192, -191, -191, , , , , , , , , , , , -190, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -189, -187, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -186, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -184, -183, -182, , , , , -182, -181, , , , , -181, -180, -180, -179, -178, -177, , , -176, -176, -175, -175, -172, -171, -170, -170, , , , , , , -169, -169, -168, -168, -167, -167, -166, -166, -165, -165, -164, , , -164, -162, , , -161, -161, -160, -159, -159, , , -157, , , -156, -156, -155, -155, -154, -154, -153, -153, -152, -152, -151, -150, , , , , , , -150, -149, -149, -148, -148, -147, -146, -146, -145, -144, , , , , -144, -143, -143, -142, -142, -141, -141, , , -140, -140, -139, -138, , , -138, -137, -137, -136, -135, -135, -134, -134, -133, , , -133, -132, -132, -131, -130, , , -129, , , -129, , , -128, -128, -127, , , , , , -127, -126, -125, , -124, -124, -123, -123, -122, , , -122, -121, , -121, -120, , -120, -119, , , , -119, , -118, -118, , , -117, , -117, , -116, -116, -115, , , , , -115, -114, -114, -113, -113, , , -112, , -112, , -111, -111, -110, -110, -109, -109, -108, , , -108, -107, , , -107, -106, , , , , , , , , , -106
                  ]
                }, 
{
                  label: 'VARIABLE_NEIGHBORHOOD_DESCENT',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , , , , , -333, , , , , , , , , , , , , , , , -332, , , , , , , , , , , , , , -332, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -331, , , -331, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -330, , , , , , , , , , , , , , , , , , -329, , -329, , , , , , , , , , , , , , , , , , , , , , , , , , , , , -328, , , , , -328, , , , , , , , , -327, , , , , , , -327, , , , , , , , , , , , , -326, , , , , , -326, , , , , , , , , , , , , , , , , -325, , , , , -325, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -324, , , , , , , , , -323, -323, , , , , -322, , , , -322, , , , , , , , , , , , , , , , , -321, , , , , -321, , , , , , , , , , -320, , , , , -320, , , , , -319, , , -318, , , , , , , -318, , , , , , , , , , , -317, -317, , , , , , , , , , -316, , , , , , , , , , -316, , , , , , , , , , , , , , -315, -315, , , , , , , , , , , , , , , -314, , , , -314, , , , , , , -313, -313, , -312, , -312, , , , , , , , , -311, -311, , , , , -310, , -310, , , , , , , , , , , , -309, , -309, , , , , , , , , , , , , , , , , , , , -308, -308, , , , , , , , , , , , , , -307, , , , , , , , , , , , , , , , , , , , , , , , , , -307, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -306, , , , , , -306, , , , , , , , , , , , -305, -305, , , , , , , , , -304, , , -304, , , -303, -303, , -302, , , , , -302, , , , , , , , , , , -301, -301, , , -300, , , , , , , -300, , , , , , -299, , , -299, , , , , , , , , , , , , , -298, , , -298, , , , -297, , -297, , , , , , , , , , -296, , , , , -295, , -295, , , , , , , , , , , , , , -294, -294, , , , , , -293, -293, , , -292, -292, , , , , , , , , , -291, -291, , , , , , , , -290, -290, , , , -289, , , , -288, -288, , , , , -287, -287, , -286, , , -285, , , , -285, , , , , , , , -284, -284, -283, , , , , -283, , , , , , -282, -282, , , -281, -281, , , -280, -280, , -279, , -279, , , , -278, -278, , , , -277, -277, , , , , , -276, , , , -276, -275, -275, , , -274, , -274, , , -273, -273, , , -272, -272, -271, -271, , , , , , , -270, -270, , -269, -268, -268, , , , , , , -267, -267, , , , , , , -266, -266, , -265, -265, , , -264, -264, -263, -263, , -262, -262, , , , , , , -261, -261, , , , -260, -260, , -259, -259, -258, -258, -257, -257, -256, -256, -255, , , -254, -254, -253, -253, -252, -252, , , -251, -251, -250, -250, , , -249, -249, -248, -248, -247, -247, -246, -246, -245, -245, -244, -244, , -243, , -242, -242, -241, -241, -240, -240, -239, -239, -238, -238, , -237, -237, -236, -236, -235, -235, -234, -234, -233, -233, -232, -232, -231, -231, -230, -230, -229, -229, , -228, -228, -227, -227, -226, -225, -225, -224, -224, -223, -223, -222, -222, -221, -221, -220, -220, -219, -219, -218, -218, -217, -217, -216, -216, -215, -215, , -214, -214, -213, -213, , , , -212, -212, -211, -211, , , -210, -210, -209, -209, , , , , , , -208, -208, , , , , , , , , -207, -207, -206, -206, -205, -205, , , , , , , , , , , , -204, -204, , , -203, -203, , , , , , -202, -202, , -201, -201, , , , , , , , , , , , , -200, -200, -199, -199, -198, -198, , , , , , , , , , , -197, -197, -196, -196, , , , , , , , -195, -195, , , , , -194, -194, , , , , , , , , , -193, -193, , , , , , -192, -192, , -191, -191, , -190, -190, , , , -189, -189, -188, -188, -187, , , , -187, , , , , , -186, -186, , , -185, , , -185, , , -184, -184, -183, , -183, , , -182, -182, , -181, , -181, , , , -180, -180, -179, -179, , , , , , -178, -178, , -177, , -177, , , , , , , , -176, -176, , , -175, -175, , , -174, -174, -173, -173, -172, -172, -171, -171, -170, -170
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
  chart_bestScoreProblemStatisticChart1_c1585.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_c1585.resize();
});
