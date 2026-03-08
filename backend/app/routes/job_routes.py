from fastapi import APIRouter
from app.models.job_model import Job

router = APIRouter()

jobs = []

@router.post("/create_job")
def create_job(job: Job):

    jobs.append(job)

    return {
        "message": "Job created",
        "job": job
    }

@router.get("/jobs")
def get_jobs():

    return jobs