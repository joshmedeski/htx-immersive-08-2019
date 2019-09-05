# # 4. is_even function
# Write a function that accepts a number as an argument and returns a Boolean value. Return True if the number is even
# return False if it is not even.


def is_even(number):
    return (number % 2 == 0)


is_even(6)

# # 5. is_odd function
# Write an is_odd function that uses your is_even function to determine if a number is odd. (That is, do not do the calculation - call a function that does the calculation.)
# Hint: You'll use the not keyword.


def is_odd(number):
    return not is_even(number)


is_odd(6)


# # 6. only_evens function
# Write a function that accepts a List of numbers as an argument.
# Return a new List that includes the only the even numbers.
# only_evens([11, 20, 42, 97, 23, 10])  # Returns [20, 42, 10]
# Hint: use your is_even() function to determine which numbers to include in your new List.

def only_evens(list_of_numbers):
    result = []
    for number in list_of_numbers:
        if is_even(number):
            result.append(number)
    return result


only_evens([11, 20, 42, 97, 23, 10])


# # 7. only_odds function
# Write a function that accepts a List of numbers as an argument.
# Return a new List that includes the only the odd numbers.
# only_odds([11, 20, 42, 97, 23, 10])  # Returns [11, 97, 23]

def only_odds(list_of_numbers):
    """Returns only the odd numbers from the list_of_numbers"""
    result = []
    for number in list_of_numbers:
        if is_odd(number):
            result.append(number)
    return result


only_odds([11, 20, 42, 97, 23, 10])


def separate_odds_and_evens(list_of_numbers):
    return [only_odds(list_of_numbers), only_evens(list_of_numbers)]


list = [11, 293, 4, 3, 3232, 34, 5, 334]
separate_odds_and_evens(list)

# =========================


# def separate_orders_by_day(orders):
#     return {
#         'weekday_orders': only_weekday_orders(orders),
#         'weekend_orders': only_weekend_orders(orders)
#     }

# is_order_on_weekday()
# is_order_on_weekend()
