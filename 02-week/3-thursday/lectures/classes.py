class User:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.age = age


user1 = User("John", 36)
print(user1.first_name)
print(user1.age)


class Phonebook:
    def __init__(self, entries):
        self.entries = entries

    def add(self, name):
        self.entries.append({'name': name})


digital_crafts_employees_phonebook = Phonebook([
    {'name': 'Jason'},
    {'name': 'Haley'}
])

digital_crafts_employees_phonebook.add('Jackie')

digital_crafts_cohort_members = Phonebook([
    {'name': 'Scott'}
])
