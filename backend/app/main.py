"""from fastapi import FastAPI
from app.routes import resume_routes, candidate_routes, bias_routes
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(resume_routes.router)
app.include_router(candidate_routes.router)
app.include_router(bias_routes.router)

@app.get("/")
def root():
    return {"message": "FairHire AI Backend Running"}"""


from fastapi import FastAPI, UploadFile, File
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from app.routes import counterfactual_routes   # ✅ ADDED

class CandidateInput(BaseModel):
    name: str
    college: str
    score: int

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




@app.post("/counterfactual_test")
def counterfactual_test(candidate: CandidateInput):

    original_score = candidate.score
    counterfactual_college = "IIT"

    if candidate.college != "IIT":
        counterfactual_score = original_score + 5
        bias_detected = True
    else:
        counterfactual_score = original_score
        bias_detected = False

    return {
        "original_college": candidate.college,
        "counterfactual_college": counterfactual_college,
        "original_score": original_score,
        "counterfactual_score": counterfactual_score,
        "bias_detected": bias_detected
    }