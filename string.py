import datetime

year_born = int(input('What year were you born? '))
now = datetime.datetime.now()
current_year = now.year
years_old = current_year - year_born
print(f'I am {years_old} years old')
