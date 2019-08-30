import os

weeks = []
for number in range(2, 18):
    week = ''
    if number < 10:
        week += '0'
    week += str(number) + '-week'
    weeks.append(week)

week_days = ['0-monday', '1-tuesday', '2-wednesday', '3-thursday', '4-friday']
for week in weeks:
    os.system(f'mkdir {week}')
    for day in week_days:
        os.system(f'mkdir {week}/{day}')
        os.system(f'mkdir {week}/{day}/lectures')
        os.system(f'touch {week}/{day}/lectures/.gitkeep')
        os.system(f'mkdir {week}/{day}/labs')
        os.system(f'touch {week}/{day}/labs/.gitkeep')
