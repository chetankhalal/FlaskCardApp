from pymongo.mongo_client import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()
mongodb_username = os.getenv('MONGODB_USERNAME')
mongodb_password = os.getenv('MONGODB_PASSWORD')

MONGODB_URI = f"mongodb+srv://{mongodb_username}:{mongodb_password}@cluster0.njv5qee.mongodb.net/?appName=Cluster0"

mongodb_client = MongoClient(MONGODB_URI)

db = mongodb_client.Japanese_words

collection_name = db["Japanese_words_collection"]
