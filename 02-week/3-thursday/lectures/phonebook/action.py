import data
from lookup import lookup_by_name
import view


def show_action_result(message):
    print('===================')
    print(message)
    print('===================')


def add():
    last_name = input('What is their last name? ')
    first_name = input('What is their first name? ')
    phone = input('What is their phone number? ')
    data.entries.append({
        'first_name': first_name,
        'last_name': last_name,
        'phone': phone
    })
    show_action_result(f'{first_name} was added successfully')


def delete():
    view.view_entries(data.entries)
    choice = int(input('Enter the nubmer of the person you want to delete'))
    data.entries.pop(choice)
    show_action_result('Deletion successful')
