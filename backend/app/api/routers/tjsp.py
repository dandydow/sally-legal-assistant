# app/api/routers/tjsp.py

from fastapi import APIRouter, HTTPException
from bs4 import BeautifulSoup
import httpx
from app.core.config import settings

router = APIRouter()

@router.get("/tjsp")
async def get_tjsp_info(process_number: str):
    params = {"ProcessNumber": process_number}
    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(
                settings.TJSP_URL,
                params=params,
                timeout=15.0
            )
            response.raise_for_status()
            soup = BeautifulSoup(response.content, 'html.parser')
            # Implement actual scraping logic here
            # Example placeholder:
            status = soup.find('div', {'id': 'status'}).get_text(strip=True)
            details = soup.find('div', {'id': 'details'}).get_text(strip=True)
            process_details = {
                "status": status,
                "details": details
            }
            return process_details
    except httpx.HTTPError as exc:
        raise HTTPException(status_code=500, detail=f"Error fetching data from TJSP: {exc}")
    except AttributeError:
        raise HTTPException(status_code=404, detail="Process information not found.")
