"""
Script to convert CSVs to JSONs for use in the app
"""
import csv
import json

def strip_italic_tags(value: str) -> str:
    return value.replace("<i>", "").replace("</i>", "") if isinstance(value, str) else value

def clean_row(row: dict) -> dict:
    # Remove <i> and </i> from all string fields
    return {k: strip_italic_tags(v) for k, v in row.items()}
'''
def process_original_games(inFile: str, outFile: str):
    data = []
    with open(inFile, newline='', encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            row = clean_row(row)
            row["release_date_JP"] = [d1.strip() for d1 in row["release_date_JP"].split(',')]
            row["release_date_NA"] = [d2.strip() for d2 in row["release_date_NA"].split(',')]
            row["platform"] = [p.strip() for p in row["platform"].split(',')]
            row["genre"] = [g.strip() for g in row["genre"].split(',')]
            row["id"] = int(row["id"])
            data.append(row)

    with open(outFile, 'w', encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"Converted '{inFile}' to '{outFile}'")

def process_remastered_games(inFile: str, outFile: str):
    data = []
    with open(inFile, newline='', encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            row = clean_row(row)
            row["release_date_JP"] = [d1.strip() for d1 in row["release_date_JP"].split(',')]
            row["release_date_NA"] = [d2.strip() for d2 in row["release_date_NA"].split(',')]
            row["platform"] = [p.strip() for p in row["platform"].split(',')]
            row["id"] = int(row["id"])
            data.append(row)

    with open(outFile, 'w', encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"Converted '{inFile}' to '{outFile}'")
'''

def process_collections(inFile: str, outFile: str):
    data = []
    with open(inFile, newline='', encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            row = clean_row(row)
            row["release_date_JP"] = [d1.strip() for d1 in row["release_date_JP"].split(',')]
            row["release_date_NA"] = [d2.strip() for d2 in row["release_date_NA"].split(',')]
            row["release_date_EU_AUS"] = [d2.strip() for d2 in row["release_date_EU_AUS"].split(',')]
            row["release_date_WW"] = [d2.strip() for d2 in row["release_date_WW"].split(',')]
            row["platform"] = [p.strip() for p in row["platform"].split(',')]
            row["id"] = int(row["id"])
            row["description"] = str(row["description"])
            data.append(row)
    
    with open(outFile, 'w', encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    print(f"Converted '{inFile}' to '{outFile}'")

# Process both CSVs
#process_original_games("./csv/originalGames.csv", "./json/originalGames.json")
#process_remastered_games("./csv/remasteredGames.csv", "./json/remasteredGames.json")
process_collections("./csv/collections.csv", "./json/collections.json")