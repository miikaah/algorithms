1, 2, 3, 4, 5, 6, 7 -> indeksi 1
1, 3, 4, 5, 6, 7 -> indeksi 2
1, 3, 5, 6, 7, -> indeksi 3
1, 3, 5, 7, -> indeksi 4 -> ylivuoto -> indeksi 0
3, 5, 7 -> indeksi 1
3, 7 -> indeksi 2 -> ylivuoto -> indeksi 0
7, -> indeksi 1 -> ylivuoto -> indeksi 0

1, 2, 3, 4, 5, 6, 7 -> offset 2 | 2, 4, 6
1, 2, 3, 4, 5, 6, 7 -> offset 4 | 1, 5, 9
1, 2, 3, 4, 5, 6, 7 -> offset 8 | 3, 11, 19
1, 2, 3, 4, 5, 6, 7 -> offset 16 | 7, 23, 39

value: 2, 1, 3, 7, 15, 31, 63, 127
index: 1, 0, 2, 6, 14, 30, 62, 126
adddd: -1 +2 +4 +8 +16 +32 +64
2^x
