first_list = [
    [
        1,  # 0
        3,  # 1
        2,  # 2
        4,
        3,
        5, 2, 1],  # 0
    [1, 3, 2, 4, 3, 5, 2, 1]  # 1
]

second_list = [
    [1, 3, 2, 4, 3, 5, 2, 1],
    [1, 3, 2, 4, 3, 5, 2, 1]
]
result = [[], []]

number_of_items = len(first_list)  # 8
number_range = range(number_of_items)  # [0,1,2,3,4,5,6,7]

for item in range(number_of_items):
    pass  # 0,1,2,3,4,5,6,7

# for item in first_list:
#     pass  # [1, 3, 2, 4, 3, 5, 2, 1], [1, 3, 2, 4, 3, 5, 2, 1]

for index_position in range(len(first_list)):
    for nested_index_position in range(len(first_list[0])):
        result[index_position].append(
            first_list[index_position][nested_index_position] +
            second_list[index_position][nested_index_position]
        )

print(result)

# for index, item in enumerate(first_list):
#     for nested_index, nested_item in enumerate(item):
#         result[index].append(first_list[index][nested_index] +
#                              second_list[index][nested_index])

# print(result)

# result[0].append(first_list[0][1] + second_list[0][1])
# result[1].append(first_list[1][0] + second_list[1][0])
# result[1].append(first_list[1][1] + second_list[1][1])

# Expect [[6, 5], [3, 4]]
# print(result)
