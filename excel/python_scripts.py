import openpyxl
import json


def export_sheet_name(name):
    wb = openpyxl.load_workbook(name + ".xlsx")

    # Initialize a list to store the results
    results = []

    # Iterate through each sheet
    for sheet in wb.sheetnames:
        ws = wb[sheet]
        prices = []

        # Find the column index for the header "Цены (руб.)"
        for col in range(1, ws.max_column + 1):
            if ws.cell(row=1, column=col).value == "Цены (руб.)":
                prices = [
                    ws.cell(row=row, column=col).value
                    for row in range(2, ws.max_row + 1)
                    if ws.cell(row=row, column=col).value
                ]

        # Calculate the average price
        average_price = sum(prices) / len(prices) if prices else 0
        print(f"SHEETNAME: {sheet}\nAVER.PRICE: {average_price}")

        # Append the results to the list
        results.append(
            {
                "id": wb.sheetnames.index(sheet) + 1,
                "name": sheet,
                "price": average_price,
            }
        )

    # Save the results in a JSON file
    with open("average_prices.json", "w", encoding="UTF-8") as json_file:
        json.dump(results, json_file, ensure_ascii=False, indent=4)


name = "Прайс"
export_sheet_name(name)

title = "Теплоизоляция"

# Table headers
headers = ["Наименование работ", "Единица изм.", "Цены (руб.)"]

# Example text
text = """
Укладка экструдированого пенополистирола δ=20-100мм в 2 слоя (горизонтальная часть)

м²

451

Укладка экструдированого пенополистирола δ=20-100мм в 2 слоя (вертикальная часть)

м²

585

Укладка экструдированого пенополистирола δ=20-100мм в 2 слоя с креплением анкерами (горизонтальная часть)

м²

693

Укладка экструдированого пенополистирола δ=20-100мм с креплением анкерами в 2 слоя (вертикальная часть)

м²

718
"""


def text_to_excel(text, title, headers):
    wb = openpyxl.Workbook()
    sheet = wb.active
    sheet.title = title
    sheet.append(headers)
    # Remove empty lines
    lines = [line for line in text.strip().split("\n") if line.strip()]

    # Add data to the table
    for i in range(0, len(lines), 3):
        try:
            row = [lines[i], lines[i + 1], int(lines[i + 2])]
            sheet.append(row)
        except (ValueError, IndexError):
            pass

    # Save the Excel workbook
    wb.save("./excel таблицы/" + sheet.title + ".xlsx")
