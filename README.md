# FairHire-AI

FairHire AI

AI-Powered Ethical Recruitment Platform

FairHire AI is an intelligent recruitment platform designed to help recruiters analyze resumes, rank candidates, detect bias, and make fair hiring decisions using AI.

The platform focuses on ethical hiring practices by combining resume parsing, candidate scoring, fairness analytics, and explainable AI.

Problem Statement

Traditional recruitment processes often suffer from:

unconscious bias in hiring

inefficient resume screening

lack of transparency in candidate selection

manual filtering of large volumes of resumes

These issues can lead to unfair hiring decisions and missed talent.

Solution

FairHire AI provides an AI-driven hiring assistant that helps recruiters:

automatically parse resumes

rank candidates based on skills and experience

detect bias in candidate selection

analyze fairness metrics

understand why candidates were selected

This ensures a transparent and fair recruitment process.

Key Features
Resume Upload

Recruiters can upload multiple resumes for automated analysis.

Resume Parsing

The system extracts:

skills

experience

keywords

relevant qualifications

AI Candidate Ranking

Candidates are scored using a scoring engine based on:

skill match

experience relevance

job requirement match

Bias Detection

The system analyzes hiring decisions to identify potential bias.

Metrics include:

gender selection rate

disparate impact ratio

demographic distribution

Fairness Analytics Dashboard

Recruiters can visualize hiring fairness using analytics charts.

Examples:

gender distribution

candidate selection ratio

bias indicators

Explainable AI

The platform explains why a candidate was ranked or selected.

Example explanation:

Candidate selected because their skills match the job requirements.

Recruiter Decision Panel

Recruiters can:

accept candidates

reject candidates

review resume insights

Tech Stack

Frontend

React

TypeScript

Tailwind CSS

Chart.js

Backend

FastAPI

Python

AI Modules

Resume parsing

Candidate scoring engine

Bias detection algorithms

Fairness metrics

Deployment

Vercel (Frontend)

Uvicorn / FastAPI backend

Installation
Clone the Repository
git clone https://github.com/yourusername/fairhire-ai.git
cd fairhire-ai
Backend Setup
cd backend

python -m venv venv
venv\Scripts\activate

pip install -r requirements.txt

Run the backend:

uvicorn app.main:app --reload

Backend will run on:

http://localhost:8000
Frontend Setup
cd frontend

npm install
npm start

Frontend will run on:

http://localhost:3000
Example Workflow

1 Upload resumes
2 AI parses candidate information
3 Candidates ranked by score
4 Bias analytics generated
5 Recruiter reviews candidates
6 Recruiter accepts or rejects candidates

Future Improvements

Possible enhancements:

NLP-based resume parsing using advanced language models

automated interview scheduling

email notifications for selected candidates

candidate skill comparison charts

support for large-scale resume datasets

integration with job portals

Contributing

Contributions are welcome.

Steps to contribute:

1 Fork the repository
2 Create a feature branch
3 Commit changes
4 Submit a pull request

License

This project is licensed under the MIT License.

Acknowledgements

This project was developed to explore ethical AI in recruitment systems and promote fair hiring practices.
