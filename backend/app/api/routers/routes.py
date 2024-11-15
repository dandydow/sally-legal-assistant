from fastapi import APIRouter
from app.api.routers import integration, datajud, tjsp

router = APIRouter()

# Incluindo os routers
router.include_router(integration.router, prefix="/integration", tags=["Integration"])
router.include_router(datajud.router, prefix="/datajud", tags=["DataJud"])
router.include_router(tjsp.router, prefix="/tjsp", tags=["TJSP"])

@router.get("/")
def read_root():
    return {"message": "Welcome to Sally Legal Assistant API!"}
# app/api/routes.py

from fastapi import APIRouter
from app.api.routers import integration, datajud, tjsp

router = APIRouter()

# Include routers
router.include_router(integration.router, prefix="/integration", tags=["Integration"])
router.include_router(datajud.router, prefix="/datajud", tags=["DataJud"])
router.include_router(tjsp.router, prefix="/tjsp", tags=["TJSP"])

@router.get("/")
def read_root():
    return {"message": "Hello, world!"}
