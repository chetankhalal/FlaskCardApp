
def  Convert_to_Indivitual_serial(JapaneseWord) -> dict:
    return {
        "id": str(JapaneseWord["_id"]),
        "image_url": JapaneseWord["image_url"],
        "word": JapaneseWord["word"],
        "meaning": JapaneseWord["meaning"]
    }

def  serial_list(japanesewords):
    return [Convert_to_Indivitual_serial(JapaneseWord) for JapaneseWord in japanesewords ]