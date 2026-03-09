from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List

router = APIRouter(
    prefix="/candidates",
    tags=["Candidates"]
)

# Temporary in-memory database
candidates_db = []

# Candidate Model
class Candidate(BaseModel):
    id: int
    name: str
    skills: List[str]
    experience: int


# Create Candidate
@router.post("/create")
def create_candidate(candidate: Candidate):

    for c in candidates_db:
        if c["id"] == candidate.id:
            raise HTTPException(status_code=400, detail="Candidate already exists")

    candidates_db.append(candidate.dict())

    return {
        "message": "Candidate created successfully",
        "candidate": candidate
    }


# Get All Candidates
@router.get("/")
def get_all_candidates():

    return {
        "total_candidates": len(candidates_db),
        "candidates": candidates_db
    }


# Get Candidate By ID
@router.get("/{candidate_id}")
def get_candidate(candidate_id: int):

    for c in candidates_db:
        if c["id"] == candidate_id:
            return c

    raise HTTPException(status_code=404, detail="Candidate not found")


# Update Candidate
@router.put("/update/{candidate_id}")
def update_candidate(candidate_id: int, candidate: Candidate):

    for index, c in enumerate(candidates_db):
        if c["id"] == candidate_id:
            candidates_db[index] = candidate.dict()

            return {
                "message": "Candidate updated successfully",
                "candidate": candidate
            }

    raise HTTPException(status_code=404, detail="Candidate not found")


# Delete Candidate
@router.delete("/delete/{candidate_id}")
def delete_candidate(candidate_id: int):

    for index, c in enumerate(candidates_db):
        if c["id"] == candidate_id:
            candidates_db.pop(index)

            return {
                "message": "Candidate deleted successfully"
            }

    raise HTTPException(status_code=404, detail="Candidate not found")