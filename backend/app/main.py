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

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import resume_routes

app = FastAPI()

# Allow frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# include route file
app.include_router(resume_routes.router)

@app.get("/")
def root():
    return {"message": "FairHire AI Backend Running"}