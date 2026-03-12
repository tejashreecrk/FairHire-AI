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

from app.services.resume_parser import parse_resume
from app.services.scoring_engine import compute_score
from ai_modules.bias_detection import detect_bias
from ai_modules.fairness_metrics import compute_fairness

router = APIRouter()

UPLOAD_FOLDER = "uploaded_resumes"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# store all candidates
candidates = []

@router.post("/upload_resume")
async def upload_resume(files: List[UploadFile] = File(...)):

    job_skills = ["python", "machine learning", "sql"]

    processed_candidates = []

    for file in files:

        file_path = os.path.join(UPLOAD_FOLDER, file.filename)

        # save file
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        # read text
        with open(file_path, "r", errors="ignore") as f:
            text = f.read()

        # parse resume
        parsed = parse_resume(text)

        skills = parsed["skills"]
        experience = parsed["experience_years"]

        # score candidate
        score = compute_score(skills, job_skills, experience)

        selected = score > 0.6

        candidate = {
            "name": file.filename,
            "skills": skills,
            "experience": experience,
            "score": score,
            "selected": selected,
            "gender": "unknown"
        }

        candidates.append(candidate)
        processed_candidates.append(candidate)

    # run bias detection
    bias_metrics = detect_bias(candidates)

    fairness = compute_fairness(bias_metrics["disparate_impact"])

    return {
        "message": "Resumes processed successfully",
        "candidates": processed_candidates,
        "bias_metrics": bias_metrics,
        "fairness": fairness
    }
@router.get("/candidates")
def get_candidates():
    return candidates

@router.get("/bias")
def get_bias():
    bias_metrics = detect_bias(candidates)
    fairness = compute_fairness(bias_metrics["disparate_impact"])

    return {
        "bias_metrics": bias_metrics,
        "fairness": fairness
    }




