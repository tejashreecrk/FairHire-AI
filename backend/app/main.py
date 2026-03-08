from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import os
import shutil

# Create FastAPI app
app = FastAPI(
    title="FairHire AI Backend",
    description="Bias-Free Recruitment System API",
    version="1.0"
)

# Enable CORS for frontend communication
origins = [
    "http://localhost:3000",  # React frontend
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create folder to store resumes
UPLOAD_FOLDER = "resumes"

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)


# Root API
@app.get("/")
def home():
    return {
        "message": "FairHire AI Backend Running Successfully"
    }


# Resume Upload API
@app.post("/upload_resume")
async def upload_resume(resume: UploadFile = File(...)):

    file_location = f"{UPLOAD_FOLDER}/{resume.filename}"

    with open(file_location, "wb") as buffer:
        shutil.copyfileobj(resume.file, buffer)

    return {
        "message": "Resume uploaded successfully",
        "filename": resume.filename
    }


# Get all uploaded resumes
@app.get("/resumes")
def get_resumes():

    files = os.listdir(UPLOAD_FOLDER)

    return {
        "uploaded_resumes": files
    }