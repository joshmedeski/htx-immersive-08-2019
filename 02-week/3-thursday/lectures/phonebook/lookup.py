from data import entries


def lookup_by_name(name):
    results = []
    for entry in entries:
        if name == entry['first_name']:
            results.append(entry)
        elif name == entry['last_name']:
            results.append(entry)
    return results
