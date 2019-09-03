# Dictionaries Notes

johns_name = 'John'
johns_age = 50

user = {
    'name': 'John',
    'age': 50
}

person = {
    'name': 'John',
    'age': 50,
    'isRegistered': True
}
# print(person['social'])
# print(person.get('social'))

output = {}
# Doesn't work
# output.append('whatever', 0)
# output['whatever'] = 0
# print(output)
# output['whatever'] = 1
# print(output)

# people = [
#     {"name": "John", "age": 55},
#     {"name": "Micah", "age": 40},
#     {"name": "Eric", "age": 55}
# ]


people = [
    {"name": "John", "age": 55},
    {"name": "Micah", "age": 40},
    {"name": "Eric", "age": 55}
]
# Get "Micah"
# print(people[1]['name'])
# print(people[1]['name'][3][9]['age']['birthday'])

family = {
    'surname': 'Smith',
    'address': '17 Cherry Tree Lane',
    'members_by_heirarchy': [
        {'name': 'John', 'relationship': 'Father'},
        {'name': 'Jane', 'relationship': 'Mother'},
        {'name': 'Barry', 'relationship': 'Son'},
        {'name': 'Suzie', 'relationship': 'Daughter'},
    ],
    'members': [
        {'name': 'John', 'relationship': 'Father'},
        {'name': 'Suzie', 'relationship': 'Daughter'},
        {'name': 'Barry', 'relationship': 'Son'},
        {'name': 'Jane', 'relationship': 'Mother'},
    ]
}

father_name = family['members'][0]['name']

father = {}

for member in family['members']:
    if member['relationship'] == 'Father':
        father = member

print(father['name'])

classroom = {
    'furniture': {
        'tables': 12,
        'chairs': 24,
        'monitors': 24
    },
    'cohort_members': [
        {'name': 'Nargiza', 'github_username': ''},
        {'name': 'Nargiza', 'github_username': ''},
        {'name': 'Nargiza', 'github_username': ''},
        {'name': 'Nargiza', 'github_username': ''},
        {'name': 'Nargiza', 'github_username': ''},
        {'name': 'Nargiza', 'github_username': ''},
        {'name': 'Nargiza', 'github_username': ''},
        {'name': 'Nargiza', 'github_username': ''},
        {'name': 'Nargiza', 'github_username': ''},
        {'name': 'Nargiza', 'github_username': ''},
        {'name': 'Nargiza', 'github_username': ''},
        {'name': 'Nargiza', 'github_username': ''},
        {'name': 'Nargiza', 'github_username': ''},
        {'name': 'Nargiza', 'github_username': ''},
        {'name': 'Nargiza', 'github_username': ''},
        {'name': 'Nargiza', 'github_username': ''},
        {'name': 'Nargiza', 'github_username': ''},
        {'name': 'Nargiza', 'github_username': ''},
        {'name': 'Nargiza', 'github_username': ''},
        {'name': 'Nargiza', 'github_username': ''},
        {'name': 'Nargiza', 'github_username': ''},
        {'name': 'Nargiza', 'github_username': ''},
    ]
}
