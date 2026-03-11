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

router = APIRouter()

@router.post("/upload_resume")
async def upload_resume(files: List[UploadFile] = File(...)):

    filenames = []

    for file in files:
        print("Received:", file.filename)
        filenames.append(file.filename)

    return {
        "message": "Resumes uploaded successfully",
        "files": filenames
    }







