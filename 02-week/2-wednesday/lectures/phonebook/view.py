def view_entries(entries):
    number_of_entries = len(entries)
    if number_of_entries:
        print(f"Entries ({number_of_entries}):")
        for entry in entries:
            print(
                f"{entry['first_name']} {entry['last_name']}: {entry['phone']}")
    else:
        print('There are no entries!')
