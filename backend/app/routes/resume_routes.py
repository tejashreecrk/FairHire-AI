"""from fastapi import APIRouter, UploadFile, File
import shutil
import os

router = APIRouter()

UPLOAD_FOLDER = "resumes"

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

@router.post("/upload_resume")
async def upload_resume(resume: UploadFile = File(...)):

    file_location = f"{UPLOAD_FOLDER}/{resume.filename}"

    with open(file_location, "wb") as buffer:
        shutil.copyfileobj(resume.file, buffer)

    return {
        "message": "Resume uploaded",
        "filename": resume.filename
    }
"""

"""from fastapi import APIRouter

router = APIRouter()

@router.post("/upload_resume")
async def upload_resume():
    return {"message": "Resume uploaded"}"""





from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from app.routes import counterfactual_routes   # ✅ ADDED

app = FastAPI()

# Allow frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(counterfactual_routes.router)   # ✅ ADDED

candidates = []

@app.get("/")
def read_root():
    return {"message": "FairHire AI Backend Running"}

# MULTIPLE FILE UPLOAD
@app.post("/upload_resume")
async def upload_resume(files: List[UploadFile] = File(...)):

    uploaded_candidates = []

    for file in files:
        candidate = {"name": file.filename}
        candidates.append(candidate)
        uploaded_candidates.append(candidate)

    return {
        "message": "Resumes uploaded successfully",
        "candidates": uploaded_candidates
    }

@app.get("/candidates")
def get_candidates():
    return candidates

@app.get("/bias")
def bias_report():
    return {
        "male": 4,
        "female": 3
    }








