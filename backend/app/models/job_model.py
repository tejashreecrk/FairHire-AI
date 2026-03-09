from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime


# ==============================
# Base Job Model (Common Fields)
# ==============================

class JobBase(BaseModel):
    title: str = Field(..., example="Machine Learning Engineer")
    description: str = Field(..., example="Looking for ML engineer with Python and NLP skills")
    required_skills: List[str] = Field(..., example=["Python", "Machine Learning", "NLP"])
    experience_required: int = Field(..., example=2)
    location: Optional[str] = Field(None, example="Chennai")
    employment_type: Optional[str] = Field(None, example="Full-Time")


# ==============================
# Create Job Model (POST request)
# ==============================

class JobCreate(JobBase):
    pass


# ==============================
# Update Job Model (PUT request)
# ==============================

class JobUpdate(BaseModel):
    title: Optional[str]
    description: Optional[str]
    required_skills: Optional[List[str]]
    experience_required: Optional[int]
    location: Optional[str]
    employment_type: Optional[str]


# ==============================
# Job Response Model (Response)
# ==============================

class JobResponse(JobBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True