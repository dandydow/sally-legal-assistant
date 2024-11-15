# app/core/config.py

from pydantic import BaseSettings
from typing import List

class Settings(BaseSettings):
    PROJECT_NAME: str = "Sally Legal Assistant"
    VERSION: str = "1.0.0"
    ALLOWED_ORIGINS: List[str] = ["*"]  # Update this in production
    DATAJUD_API_KEY: str
    RASA_SERVER_URL: str = "http://localhost:5005/webhooks/rest/webhook"
    GPTNEO_API_URL: str = "http://gptneo-server-endpoint.com/generate"
    TJSP_URL: str = "http://www.tjsp.jus.br/Consulta"
    SECRET_KEY: str = "your-secret-key"  # Replace with a secure key
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

    class Config:
        env_file = ".env"

settings = Settings()
