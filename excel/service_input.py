cook_array = []


def add_step():
    step_data = {
        "id": int(input("Enter Step ID: ")),
        "name": input("Enter Step Name: "),
        "title": input("Enter Step Title: "),
        "desk": input("Enter Step Description: "),
        "default_": input("Enter Step Default: "),
        "isSwitch": input("Is Switch (True/False): ").lower(),
        "titles": [],
        "prices": [],
    }

    num_titles = int(input("Enter the number of titles for this step: "))
    for i in range(num_titles):
        title_id = int(input(f"Enter Title {i+1} ID: "))
        title_name = input(f"Enter Title {i+1} Name: ")
        step_data["titles"].append({"id": title_id, "title": title_name})

        price = int(input(f"Enter Price for Title {i+1}: "))
        step_data["prices"].append({"price": price})

    return step_data


def add_main_data():
    data = {
        "id": int(input("Enter ID: ")),
        "title": input("Enter Title: "),
        "steps": [],
    }

    num_steps = int(input("Enter the number of steps: "))
    for i in range(num_steps):
        step_data = add_step()
        data["steps"].append(step_data)

    cook_array.append(data)


add_main_data()

# Display the cook_array
print(cook_array)
