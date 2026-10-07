from pymongo.mongo_client import MongoClient

MONGODB_URI = "mongodb+srv://Admin_Chetan_FlashCard:Japanese_flashcard_chetan_1981@cluster0.njv5qee.mongodb.net/?appName=Cluster0"

mongodb_client = MongoClient(MONGODB_URI)

db = mongodb_client.Japanese_words

collection_name = db["Japanese_words_collection"]
