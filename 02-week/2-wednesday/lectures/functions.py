def separateRuns():
    print('******************')


# def double(x):
#     print(f'{x * 2} is {x} doubled')
#     separateRuns()


# double(2)
# double(4)
# double(8)
# double(19283)


def getGroceries():
    print('milk')
    print('flour')
    print('sugar')
    print('butter')
    separateRuns()


# getGroceries()
# getGroceries()


def validate_is_integer(x):
    while True:
        try:
            return int(x)
        except ValueError:
            print('The input has to be a valid number')
            x = ask_for_valid_number_to_double()


def ask_for_valid_number_to_double():
    return validate_is_integer(input('What number do you want to double? '))


def double(x):
    return x * 2


number_to_double = ask_for_valid_number_to_double()
number_doubled = double(number_to_double)
print(f'{number_to_double} doubled is {number_doubled}')
separateRuns()

price = 100


def getTotal(qty):
    price = 0.99
    return qty * price


# print(price)

print(getTotal(100))

# print(price)
