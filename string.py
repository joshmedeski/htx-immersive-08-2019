import datetime

year_born = int(input('What year were you born? '))
now = datetime.datetime.now()
current_year = now.year
print('I am ' + str(current_year - year_born) + ' years old')
