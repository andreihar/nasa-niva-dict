import csv
import os
import re

base_dir = os.path.dirname(__file__)
dict_dir = os.path.join(base_dir, 'dict')

BELARUSIAN_CYRILLIC_ALPHABET = [
    'А', 'Б', 'В', 'Г', 'Ґ', 'Д', 'Е',
	'Ё', 'Ж', 'З', 'І', 'Й', 'К', 'Л',
    'М', 'Н', 'О', 'П', 'Р', 'С', 'Т',
	'У', 'Ў', 'Ф', 'Х', 'Ц', 'Ч', 'Ш',
	'Ы', 'Ь', 'Э', 'Ю', 'Я'
]

BELARUSIAN_LATIN_ALPHABET = [
    'A', 'B', 'C', 'Ć', 'Č', 'D', 'Dz', 'Dź', 'Dž',
    'E', 'F', 'G', 'H', 'Ch', 'I', 'J', 'K', 'L',
    'Ł', 'M', 'N', 'Ń', 'O', 'P', 'R', 'S', 'Ś',
    'Š', 'T', 'U', 'Ŭ', 'V', 'Y', 'Z', 'Ź', 'Ž'
]

alphabet_order = {char: idx for idx, char in enumerate(BELARUSIAN_CYRILLIC_ALPHABET)}


def belarusian_sort_key(word):
    word = word.replace('\u0301', '').replace('́', '').replace('(', '').replace(')', '')
    word = word.upper()
    return [alphabet_order.get(char, 100) for char in word]

def sort_rows_by_belarusian(rows, col_index=0):
    return sorted(rows, key=lambda row: belarusian_sort_key(row[col_index]) if row and len(row) > col_index else [])


def sort_csvs_in_dict():
    for fname in os.listdir(dict_dir):
        if fname.endswith('.csv'):
            path = os.path.join(dict_dir, fname)
            with open(path, encoding='utf-8') as f:
                reader = list(csv.reader(f, delimiter=';'))
            if not reader:
                continue
            header, *rows = reader
            rows = sort_rows_by_belarusian(rows, 0)
            with open(path, 'w', encoding='utf-8', newline='') as f:
                writer = csv.writer(f, delimiter=';')
                writer.writerow(header)
                writer.writerows(rows)
            print(f"Sorted: {fname}")

def combine_and_sort_dict_csvs():
    combined_rows = []
    header = None
    for fname in os.listdir(dict_dir):
        if fname.endswith('.csv'):
            path = os.path.join(dict_dir, fname)
            with open(path, encoding='utf-8') as f:
                reader = list(csv.reader(f, delimiter=';'))
            if not reader:
                continue
            if header is None:
                header = reader[0]
            rows = reader[1:]
            combined_rows.extend(rows)
    combined_rows = sort_rows_by_belarusian(combined_rows, 0)
    output_path = os.path.join(base_dir, 'dict.csv')
    with open(output_path, 'w', encoding='utf-8', newline='') as f:
        writer = csv.writer(f, delimiter=';')
        if header:
            writer.writerow(header)
        writer.writerows(combined_rows)
    print(f"Combined and sorted CSVs into: {output_path}")

if __name__ == "__main__":
    sort_csvs_in_dict()
    # combine_and_sort_dict_csvs()