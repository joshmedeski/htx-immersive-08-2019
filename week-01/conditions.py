# Conditions

# if True:
#     print('Hello, this is true')

age = int(input('What is your age?'))
name = input('What is your name?')

# If over 100, say you're old
# If under 10, say you're young
# If over 100 and my name is "Josh", then say "welcome, creator" but don't say "You're old"
# Anything else, say you're just in the middles somewhere

if False:
    # Do thing
elif False or False or False or False or False or False:
    # Do thing
elif True and False and True:
    # do thing
elif True or False:
    # Do thing

if age > 100 or name == "Josh":
    print('Welcome, creator of code')
elif age > 100:
    print('You\'re old')
elif age < 10:
    print('You\'re young')
elif age > 20 and age < 40:
    print('You\'re doing well')
else:
    print("You're just in the middle somewhere")

# more logic
# calculate year I was born
