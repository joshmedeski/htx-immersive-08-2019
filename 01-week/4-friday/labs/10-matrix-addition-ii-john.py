# matrix1 = [
#     [1, 3],
#     [2, 4]
# ]
# matrix2 = [
#     [5, 2],
#     [1, 0]
# ]
matrix1 = [[1, 3, 2, 4, 3, 5, 2, 1], [1, 3, 2, 4, 3, 5, 2, 1]]
matrix2 = [[1, 3, 2, 4, 3, 5, 2, 1], [1, 3, 2, 4, 3, 5, 2, 1]]
result = [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]

for i in range(len(matrix1)):
    break


for i in range(len(matrix1)):
    for j in range(len(matrix1[0])):
        result[i][j] = matrix1[i][j] + matrix2[i][j]
print(result)
