# Loops

bottles_of_beer = 99
first_phrase = 'bottles of beer'
preposition = 'on the wall'
second_phrase = 'take one down, pass it around'

while bottles_of_beer > 0:
    print('================')
    print(f'{bottles_of_beer} {first_phrase} {preposition}')
    print(f'{bottles_of_beer} {first_phrase}')
    print(f'{second_phrase}')
    bottles_of_beer = bottles_of_beer - 1
    if bottles_of_beer == 0:
        print('No more bottles of beer')
    else:
        print(f'{bottles_of_beer} {first_phrase}')
