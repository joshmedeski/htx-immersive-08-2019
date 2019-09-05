# Electronic Phone Book
# =====================
# 1. Look up an entry
# 2. Add an entry
# 3. Delete an entry
# 4. List all entries
# 5. Quit

from lookup import lookup_by_name
import menu
import view
import data
import action

selection = menu.menu_selection()

while selection != 5:
    if selection == 1:
        # 1. Look up an entry
        results = lookup_by_name(
            input('What name do you want to look up? ')
        )
        print('The following items were found:')
        view.view_entries(results)
    elif selection == 2:
        # 2. Add an entry
        action.add()
        pass
    elif selection == 3:
        # 3. Delete an entry
        action.delete()
        pass
    elif selection == 4:
        # 4. List all entries
        view.view_entries(data.entries)
        pass
    elif selection == 5:
        # 5. Quit
        break
    else:
        print('Whoops, please try again')
        selection = menu.menu_selection()
    selection = menu.menu_selection()

print('Goodbye, thanks for using the phone book')
