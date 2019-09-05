def prompt_user():
    return int(input('Please select 1-5: '))


def show_menu():
    print('Electronic Phone Book')
    print('=====================')
    print('1. Look up an entry')
    print('2. Set an entry')
    print('3. Delete an entry')
    print('4. List all entries')
    print('5. Quit')
    print('=====================')


def menu_selection():
    show_menu()
    return prompt_user()
