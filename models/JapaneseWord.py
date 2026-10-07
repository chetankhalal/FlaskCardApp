from pydantic import BaseModel

class JapaneseWords(BaseModel):
    image_url : str
    word : str
    meaning: str