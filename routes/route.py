from fastapi import APIRouter

from models.JapaneseWord import JapaneseWords
from config.database import collection_name
from schema.schemas import serial_list

from bson import ObjectId

router = APIRouter()

@router.get("/vocab")
async def get_data(skip: int = 0, limit: int = 10):
    data = serial_list(collection_name.find().skip(skip).limit(limit))
    return data

@router.post("/vocab")
async def add_words(nihonword : JapaneseWords):
    data = {
        "word" : nihonword.word,
        "meaning":nihonword.meaning,
        "image_url":nihonword.image_url
    }
    collection_name.insert_one(data)
    return "add word"