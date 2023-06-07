************************************************************************
file with basedata            : mf37_.bas
initial value random generator: 954139191
************************************************************************
projects                      :  1
jobs (incl. supersource/sink ):  32
horizon                       :  227
RESOURCES
  - renewable                 :  2   R
  - nonrenewable              :  2   N
  - doubly constrained        :  0   D
************************************************************************
PROJECT INFORMATION:
pronr.  #jobs rel.date duedate tardcost  MPM-Time
    1     30      0       27       25       27
************************************************************************
PRECEDENCE RELATIONS:
jobnr.    #modes  #successors   successors
   1        1          3           2   3   4
   2        3          3           5   8   9
   3        3          1          27
   4        3          3           6  10  28
   5        3          3          11  13  20
   6        3          2           7  24
   7        3          3          12  13  14
   8        3          1          27
   9        3          3          18  26  28
  10        3          3          15  16  22
  11        3          2          16  22
  12        3          2          21  29
  13        3          2          16  19
  14        3          3          17  18  20
  15        3          2          17  19
  16        3          2          18  25
  17        3          2          21  26
  18        3          1          21
  19        3          3          29  30  31
  20        3          2          25  27
  21        3          1          30
  22        3          1          23
  23        3          2          24  26
  24        3          1          25
  25        3          1          31
  26        3          1          31
  27        3          1          30
  28        3          1          29
  29        3          1          32
  30        3          1          32
  31        3          1          32
  32        1          0        
************************************************************************
REQUESTS/DURATIONS:
jobnr. mode duration  R 1  R 2  N 1  N 2
------------------------------------------------------------------------
  1      1     0       0    0    0    0
  2      1     2       9    6    6    9
         2     6       8    5    6    9
         3     8       7    5    5    9
  3      1     1       5    5    7    8
         2     1       4    6    6    8
         3     6       2    5    4    7
  4      1     2       7   10    6    6
         2     4       7    6    3    6
         3    10       6    6    2    5
  5      1     2       4    7    3    3
         2     5       3    7    2    2
         3    10       3    6    2    2
  6      1     4       9    7    4    6
         2     4      10    9    5    5
         3     6       6    7    4    3
  7      1     6       6    8    3   10
         2     7       6    8    3    9
         3     9       6    8    3    8
  8      1     1       2   10    8    7
         2     8       2    9    8    5
         3    10       2    7    5    3
  9      1     2       9    6    7    6
         2     4       9    6    5    3
         3    10       7    4    3    1
 10      1     3       5    1    8    6
         2     5       5    1    6    4
         3     8       4    1    6    4
 11      1     6       5    8    9    2
         2     9       4    8    8    2
         3    10       4    7    4    1
 12      1     1       3    8    7    6
         2     6       3    5    6    6
         3    10       2    4    6    6
 13      1     3       6    5    8    6
         2     8       4    5    7    5
         3     8       5    4    7    6
 14      1     1       8    7    6    8
         2     3       7    7    5    7
         3     6       2    4    3    4
 15      1     5       7    6    8    9
         2     7       4    4    6    8
         3     7       3    5    7    8
 16      1     4       3    9    6    8
         2     6       3    6    2    8
         3     6       2    6    3    7
 17      1     8      10    8    8    8
         2    10       6    4    5    8
         3    10       4    4    6    8
 18      1     4       6    4    9    7
         2     8       6    4    8    6
         3     9       4    4    8    2
 19      1     7       5    4    6    9
         2     8       5    4    6    6
         3     9       5    1    5    1
 20      1     1       2    9    5    9
         2     2       1    8    3    1
         3     2       2    7    3    5
 21      1     2       7    5    9    7
         2     5       6    5    9    5
         3     9       5    5    7    1
 22      1     1       4    9    5    4
         2     1       5    6    5    4
         3     4       4    6    4    4
 23      1     1       2    7    2   10
         2     2       2    6    2    8
         3     8       1    3    1    7
 24      1     1       8    8    5    6
         2     4       7    8    5    5
         3     8       3    8    4    3
 25      1     5       2   10    7   10
         2     5       3   10    6    8
         3     6       1    8    3    5
 26      1     2       5   10    7    4
         2     6       4    9    7    3
         3     8       2    8    6    2
 27      1     1      10    8    4    6
         2     5       9    6    2    5
         3     6       6    5    2    5
 28      1     4       7    6    7    7
         2     6       6    5    6    7
         3     9       3    5    4    7
 29      1     3       8    6    2    9
         2     7       5    4    2    9
         3     8       3    3    1    9
 30      1     2       7    3    7    4
         2     2       5    4    6    4
         3     3       5    1    6    2
 31      1     1       9    6    6    6
         2     1       9    8    6    4
         3     4       9    3    6    4
 32      1     0       0    0    0    0
************************************************************************
RESOURCEAVAILABILITIES:
  R 1  R 2  N 1  N 2
   14   14  142  152
************************************************************************
