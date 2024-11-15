# app/api/routers/integration.py

from fastapi import APIRouter, HTTPException
import httpx
from app.core.config import settings

router = APIRouter()

@router.post("/process_message")
async def process_message(user_message: str):
    # Step 1: Send the user's message to Rasa for initial intent classification
    try:
        async with httpx.AsyncClient() as client:
            rasa_response = await client.post(
                settings.RASA_SERVER_URL,
                json={"sender": "user", "message": user_message},
                timeout=10.0
            )
            rasa_response.raise_for_status()
            rasa_data = rasa_response.json()
    except httpx.HTTPError as exc:
        raise HTTPException(status_code=500, detail=f"Error communicating with Rasa server: {exc}")

    # Step 2: Process Rasa's response
    if rasa_data and isinstance(rasa_data, list) and 'text' in rasa_data[0]:
        rasa_text = rasa_data[0]['text']
        # Check if the response needs advanced text generation
        if rasa_data[0].get('custom', {}).get('use_gptneo'):
            try:
                gptneo_response = await client.post(
                    settings.GPTNEO_API_URL,
                    json={"input": user_message},
                    timeout=30.0
                )
                gptneo_response.raise_for_status()
                gptneo_data = gptneo_response.json()
                return {"response": gptneo_data.get('generated_text')}
            except httpx.HTTPError as exc:
                raise HTTPException(status_code=500, detail=f"Error communicating with GPT-Neo server: {exc}")
        else:
            return {"response": rasa_text}

    return {"response": "I'm sorry, I couldn't understand your request."}
