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


from fastapi import APIRouter, UploadFile, File
from typing import List
import shutil
import os
import json

from app.services.resume_parser import parse_resume
from app.services.scoring_engine import compute_score
from ai_modules.bias_detection import detect_bias
from ai_modules.fairness_metrics import compute_fairness

router = APIRouter()

UPLOAD_FOLDER = "uploaded_resumes"
DATABASE_PATH = "database/candidates.json"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@router.post("/upload_resume")
async def upload_resume(files: List[UploadFile] = File(...)):

    job_required_skills = ["python", "machine learning", "sql"]

    results = []

    # Load existing candidates
    try:
        with open(DATABASE_PATH, "r") as f:
            candidates = json.load(f)
    except:
        candidates = []

    for file in files:

        file_path = os.path.join(UPLOAD_FOLDER, file.filename)

        # Save file
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        # Read text
        with open(file_path, "r", errors="ignore") as f:
            resume_text = f.read()

        # Parse resume
        parsed_data = parse_resume(resume_text)

        skills = parsed_data["skills"]
        experience = parsed_data["experience_years"]

        # Score candidate
        score = compute_score(skills, job_required_skills, experience)

        selected = score > 0.6

        candidate = {
            "id": len(candidates) + 1,
            "filename": file.filename,
            "skills": skills,
            "experience": experience,
            "score": score,
            "selected": selected,
            "gender": "unknown"
        }

        candidates.append(candidate)
        results.append(candidate)

    # Save candidates to database
    os.makedirs("database", exist_ok=True)

    with open(DATABASE_PATH, "w") as f:
        json.dump(candidates, f, indent=2)

    # Run bias detection
    bias_metrics = detect_bias(candidates)

    # Compute fairness
    fairness = compute_fairness(bias_metrics["disparate_impact"])

    return {
        "message": "Resumes processed successfully",
        "candidates": results,
        "bias_metrics": bias_metrics,
        "fairness_status": fairness
    }