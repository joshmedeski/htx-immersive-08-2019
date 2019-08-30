first_list = [[1, 3], [2, 4]]
second_list = [[5, 2], [1, 0]]
result = [[], []]

result[0].append(first_list[0][0] + second_list[0][0])
result[0].append(first_list[0][1] + second_list[0][1])
result[1].append(first_list[1][0] + second_list[1][0])
result[1].append(first_list[1][1] + second_list[1][1])

# Expect [[6, 5], [3, 4]]
print(result)
